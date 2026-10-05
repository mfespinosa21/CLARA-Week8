import {test} from 'node:test';import assert from 'node:assert/strict';import {webcrypto} from 'node:crypto';import{evidence,draft,gate,approver,margin,canExport}from './dist/core.mjs';
test('unknown records access is never upgraded',()=>assert.ok(evidence('outage','checked').unknown.some(v=>v.includes('accedió'))));
test('backup authorizes only with channel and review',()=>{const s={primary:'no',backup:'yes',channel:true,review:true};assert.equal(gate(s),'');assert.match(approver(s),/Carlos/);assert.notEqual(gate({...s,channel:false}),'');});
test('both unavailable blocks export',()=>assert.equal(canExport({primary:'no',backup:'no',channel:true,review:true,approved:1,revision:1}),false));
test('stale approval blocks export',()=>assert.equal(canExport({primary:'yes',backup:'yes',channel:true,review:true,approved:1,revision:2}),false));
test('full cost and invalid numeric inputs',()=>{assert.equal(margin([6000,6,500,1000,1500]),500);assert.equal(margin(['',6,500,1000,0]),null);assert.equal(margin([6000,-1,500,1000,0]),null)});
test('SHA-256 deterministic and changes with evidence',async()=>{const hash=async v=>Buffer.from(await webcrypto.subtle.digest('SHA-256',new TextEncoder().encode(JSON.stringify(v)))).toString('hex');const a=await hash(evidence('outage','pending'));assert.equal(a.length,64);assert.equal(a,await hash(evidence('outage','pending')));assert.notEqual(a,await hash(evidence('outage','checked')))});
test('draft includes uncertainty and never guarantees safety',()=>{assert.match(draft('outage'),/no se conocen/);assert.doesNotMatch(draft('outage'),/datos.*seguros/)});
test('corrected legitimate email appears in patient draft',()=>assert.match(draft('report','checked'),/legítimo/));
