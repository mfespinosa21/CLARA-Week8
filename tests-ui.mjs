import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {webcrypto} from 'node:crypto';
import * as core from './dist/core.mjs';
async function setup(){
 const nodes=new Map(); const defaults={scenario:'outage',correction:'pending',primary:'yes',backup:'yes',price:'6000',hours:'6',rate:'500',support:'1000',overhead:'1500'};
 const get=id=>{if(!nodes.has(id))nodes.set(id,{value:defaults[id]||'',checked:false,textContent:'',disabled:false,selectedOptions:[{textContent:'En persona'}],handlers:{},addEventListener(k,f){this.handlers[k]=f},replaceChildren(){},append(){}});return nodes.get(id)};
 const document={getElementById:get,createElement:()=>({append(){},click(){}})};
 let code=await readFile('./dist/app.js','utf8');code=code.replace(/^import .*?;\n/,'');
 const run=new Function('document','crypto','location','evidence','draft','gate','approver','margin','canExport',code);
 run(document,webcrypto,{reload(){}},...['evidence','draft','gate','approver','margin','canExport'].map(k=>core[k]));
 await new Promise(resolve=>setTimeout(resolve,20));return get;
}
test('changing evidence requires a fresh text review and disables export immediately',async()=>{
 const get=await setup();get('channel').checked=true;get('review').checked=true;get('approve').onclick();assert.equal(get('download').disabled,false);
 get('correction').value='checked';get('correction').handlers.change();
 assert.equal(get('review').checked,false);assert.equal(get('download').disabled,true);
});
