# Rate Limiting Migration Plan

## Current State (v1.0)
- **Implementation**: In-memory Map
- **Problem**: Resets on Lambda cold starts (Vercel serverless)
- **Risk**: Users can bypass rate limit after cold start

## Target State (v1.1)
- **Implementation**: Vercel KV (Redis)
- **Benefit**: Persistent across all Lambda instances

## Implementation Steps

### 1. Install Dependencies
```bash
npm install @vercel/kv
```

### 2. Environment Variables
```env
# .env.local
KV_REST_API_URL=https://xxx.upstash.io
KV_REST_API_TOKEN=AxxxYZZ...
```

### 3. Updated Code
```typescript
import { kv } from '@vercel/kv';

export async function POST(request: Request) {
  const ip = request.headers.get('x-forwarded-for') || 'unknown';
  const key = `rate-limit:${ip}`;
  
  // Increment request count
  const requests = await kv.incr(key);
  
  // Set expiry on first request
  if (requests === 1) {
    await kv.expire(key, 60); // 60 seconds window
  }
  
  // Check limit (10 requests per minute)
  if (requests > 10) {
    return NextResponse.json(
      { error: 'Too many requests. Try again later.' },
      { status: 429 }
    );
  }
  
  // ... rest of logic
}
```

### 4. Testing Strategy
- Unit test: Mock kv.incr/expire
- Integration test: Use Vercel KV test instance
- Load test: Simulate 100 requests/min

### 5. Rollout Plan
- Deploy to staging environment
- Monitor for 24 hours
- Check error rates in Vercel logs
- Deploy to production

## Rollback Plan
If KV fails, fallback to in-memory:
```typescript
const USE_KV = process.env.KV_REST_API_URL !== undefined;

if (USE_KV) {
  // KV logic
} else {
  // In-memory fallback
}
```

## Cost Estimate
- Vercel KV Free Tier: 10,000 commands/day
- Expected usage: ~500 API calls/day = ~1500 commands/day
- Cost: $0 (within free tier)
