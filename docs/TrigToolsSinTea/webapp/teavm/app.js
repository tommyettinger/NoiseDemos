"use strict";
(function(module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(exports);}else{module(typeof self!=='undefined'?self:this);}}(function(AI7){let AMp=2463534242,Gl=()=>{let x=AMp;x^=x<<13;x^=x>>>17;x^=x<<5;AMp=x;return x;},W=f=>function(){return f(this);},N=f=>function(p1){return f(this,p1);},Bm=f=>function(p1,p2){return f(this,p1,p2);},Z=f=>function(p1,p2,p3){return f(this,
p1,p2,p3,p3);},BG=f=>function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);},AL0=f=>function(){let args=Array.prototype.slice.apply(arguments);AMq(function(){f.apply(this,args);});},ALM=f=>(args,callback)=>{if(!args){args=[];}let javaArgs=R(E0(),args.length);for(let i=0;i<args.length;++i){javaArgs.data[i]=V(args[i]);}AMq(()=>{f.call(null,javaArgs);},callback);},Bz=target=>target.$clinit=()=>{},ALd=obj=>{let cls=obj.constructor,arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}let clsName
="";if(cls.$meta.primitive){clsName=cls.$meta.name;}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;},D=superclass=>{if(superclass===0){return function(){};}if(superclass===void 0){superclass=E0();}return function(){superclass.call(this);};},Bk=cls=>ALU(cls),E0=()=>C,RP=()=>{{return AKX();}},Hv=t=>{{return AE_(t);}};let AMr=()=>{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};},AMs=(name,binaryName)=>{let cls
=AMr();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;},AMt=AMs("boolean","Z"),T2=AMs("char","C"),AMu=AMs("byte","B"),AMv=AMs("short","S"),ACN=AMs("int","I"),ACF=AMs("long","J"),AD3=AMs("float","F"),W3=AMs("double","D"),CQ=AMs("void","V");let AMw=new ArrayBuffer(16),AMx=new DataView(AMw),AMy=new Float32Array(AMw),AMz=new Float64Array(AMw),AMA
=new Int32Array(AMw),AMl;if(typeof BigInt!=='function'){AMl=n=>{AMx.setFloat64(0,n,true);return new AMB(AMx.getInt32(0,true),AMx.getInt32(4,true));};}else if(typeof BigInt64Array!=='function'){AMl=n=>{AMx.setFloat64(0,n,true);let lo=AMx.getInt32(0,true),hi=AMx.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};}else {let AMC=new BigInt64Array(AMw);AMl=n=>{AMz[0]=n;return AMC[0];};}let In=n=>{AMy[0]=n;return AMA[0];},Ih=n=>{AMA[0]=n;return AMy[0];},B4=(a,b)=>a>b?
1:a<b? -1:a===b?0:1,CB=Math.imul||function(a,b){let ah=a>>>16&0xFFFF,al=a&0xFFFF,bh=b>>>16&0xFFFF,bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;},C8=(a,b)=>(a>>>0)/(b>>>0)>>>0,ALJ=(a,b)=>(a>>>0)%(b>>>0)>>>0,DN=(a,b)=>{a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function AMB(lo,hi){this.lo=lo|0;this.hi=hi|0;}AMB.prototype.__teavm_class__=()=>{return "long";};let AMD=a=>(a.hi&0x80000000)===0,AME=a=>(a.hi&0x80000000)!==0,AMF=1<<18,BM,B,O,C7,Z0,Bd,AMG;if(typeof BigInt!=="function"){AMB.prototype.toString=function()
{let result=[],n=this,positive=AMD(n);if(!positive){n=ALO(n);}let radix=new AMB(10,0);do {let divRem=AMG(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};AMB.prototype.valueOf=function(){return Z0(this);};BM=new AMB(0,0);O=val=>new AMB(val, -(val<0)|0);C7=val=>val>=0?new AMB(val|0,val/0x100000000|0):ALO(new AMB( -val|0, -val/0x100000000|0));B=(lo,hi)=>new AMB(lo,hi);Z0=val=>0x100000000*val.hi
+(val.lo>>>0);Bd=val=>val.lo;}else {BM=BigInt(0);B=(lo,hi)=>BigInt.asIntN(64,BigInt.asUintN(64,BigInt(lo))|BigInt.asUintN(64,BigInt(hi)<<BigInt(32)));O=val=>BigInt.asIntN(64,BigInt(val|0));C7=val=>BigInt.asIntN(64,BigInt(val>=0?Math.floor(val):Math.ceil(val)));Z0=val=>Number(val);Bd=val=>Number(BigInt.asIntN(32,val))|0;}let C6,Xa,Wv,ALg,ALi,WU,ALP,Cj,Nm,AMH,U,Jz,Sf,ALR,ALO,Ci,W_,F6,Ek,ALE,X;if(typeof BigInt!=='function'){C6=(a,b)=>a.hi===b.hi&&a.lo===b.lo;Xa=(a,b)=>a.hi!==b.hi||a.lo!==b.lo;Wv=(a,b)=>{if(a.hi
<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};ALg=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};ALi=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};WU=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x
<=y;}return (a.lo&1)<=(b.lo&1);};Cj=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return C7(a.lo+b.lo);}else if(AMI.abs(a.hi)<AMF&&AMI.abs(b.hi)<AMF){return C7(Z0(a)+Z0(b));}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo+b_lolo|0,lohi=a_lohi+b_lohi+(lolo>>16)|0,hilo=a_hilo+b_hilo+(lohi>>16)|0,hihi=a_hihi+b_hihi+(hilo>>16)|0;return new AMB(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};AMH
=a=>{let lo=a.lo+1|0,hi=a.hi;if(lo===0){hi=hi+1|0;}return new AMB(lo,hi);};ALO=a=>AMH(new AMB(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));Nm=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return C7(a.lo -b.lo);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo -b_lolo|0,lohi=a_lohi -b_lohi+(lolo>>16)|0,hilo=a_hilo -b_hilo+(lohi>>16)|0,hihi=a_hihi -b_hihi+(hilo>>16)|0;return new AMB(lolo&0xFFFF|(lohi&0xFFFF)<<16,
hilo&0xFFFF|(hihi&0xFFFF)<<16);};ALP=(a,b)=>{let r=DN(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};U=(a,b)=>{let positive=AME(a)===AME(b);if(AME(a)){a=ALO(a);}if(AME(b)){b=ALO(b);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=0,lohi=0,hilo=0,hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi
=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;let result=new AMB(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:ALO(result);};Jz=(a,b)=>{if(AMI.abs(a.hi)<AMF&&AMI.abs(b.hi)<AMF){return C7(Z0(a)/Z0(b));}return (AMG(a,b))[0];};ALR
=(a,b)=>{if(a.hi>=0&&a.hi<AMF&&b.hi>=0&&b.hi<AMF){return C7(Z0(a)/Z0(b));}return (AMJ(a,b))[0];};Sf=(a,b)=>{if(AMI.abs(a.hi)<AMF&&AMI.abs(b.hi)<AMF){return C7(Z0(a)%Z0(b));}return (AMG(a,b))[1];};AMG=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}let positive=AME(a)===AME(b);if(AME(a)){a=ALO(a);}if(AME(b)){b=ALO(b);}a=new AMK(a.lo,a.hi,0);b=new AMK(b.lo,b.hi,0);let q=AML(a,b);a=new AMB(a.lo,a.hi);q=new AMB(q.lo,q.hi);return positive?[q,a]:[ALO(q),ALO(a)];};let AMJ=(a,b)=>{if(b.lo===0&&b.hi
===0){throw new Error("Division by zero");}a=new AMK(a.lo,a.hi,0);b=new AMK(b.lo,b.hi,0);let q=AML(a,b);a=new AMB(a.lo,a.hi);q=new AMB(q.lo,q.hi);return [q,a];};Ci=(a,b)=>new AMB(a.lo&b.lo,a.hi&b.hi);W_=(a,b)=>new AMB(a.lo|b.lo,a.hi|b.hi);F6=(a,b)=>new AMB(a.lo^b.lo,a.hi^b.hi);Ek=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AMB(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new AMB(0,a.lo);}else {return new AMB(0,a.lo<<b -32);}};ALE=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AMB(a.lo
>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new AMB(a.hi,a.hi>>31);}else {return new AMB(a.hi>>b -32,a.hi>>31);}};X=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AMB(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new AMB(a.hi,0);}else {return new AMB(a.hi>>>b -32,0);}};function AMK(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}let AMM=(a,b)=>{let a_lolo=(a.lo&0xFFFF)*b|0,a_lohi=(a.lo>>>16)*b|0,a_hilo=(a.hi&0xFFFF)*b|0,a_hihi=(a.hi>>>16)*b|0,sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)
|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;},AMN=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;let sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF
|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AMO=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;let sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AMP=(a,b)=>{let r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>
1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);},AMQ=a=>{let n=0,d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;},AMR=(a,b)=>{if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi
=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}},AMS=(a,b)=>{if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}},AMT=a=>new AMK(a.lo,a.hi,a.sup),AML=(a,b)=>{let bits=b.hi!==0?AMQ(b.hi):AMQ(b.lo)+32,sz=1+(bits/16|0),dividentBits=bits%16;AMR(b,bits);AMR(a,dividentBits);let q
=new AMK(0,0,0);while(sz-->0){AMR(q,16);let digitA=(a.hi>>>16)+0x10000*a.sup,digitB=b.hi>>>16,digit=digitA/digitB|0,t=AMT(b);AMM(t,digit);if(AMP(t,a)>=0){while(AMP(t,a)>0){AMN(t,b); --digit;}}else {while(true){let nextT=AMT(t);AMO(nextT,b);if(AMP(nextT,a)>0){break;}t=nextT;++digit;}}AMN(a,t);q.lo|=digit;AMR(a,16);}AMS(a,bits+16);return q;};}else {C6=(a,b)=>a===b;Xa=(a,b)=>a!==b;Wv=(a,b)=>a>b;ALg=(a,b)=>a>=b;ALi=(a,b)=>a<b;WU=(a,b)=>a<=b;Cj=(a,b)=>BigInt.asIntN(64,a+b);AMH=a=>BigInt.asIntN(64,a+1);ALO=a=>BigInt.asIntN(64,
 -a);Nm=(a,b)=>BigInt.asIntN(64,a -b);ALP=(a,b)=>{a=BigInt.asUintN(64,a);b=BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};U=(a,b)=>BigInt.asIntN(64,a*b);Jz=(a,b)=>BigInt.asIntN(64,a/b);ALR=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)/BigInt.asUintN(64,b));Sf=(a,b)=>BigInt.asIntN(64,a%b);Ci=(a,b)=>BigInt.asIntN(64,a&b);W_=(a,b)=>BigInt.asIntN(64,a|b);F6=(a,b)=>BigInt.asIntN(64,a^b);Ek=(a,b)=>BigInt.asIntN(64,a<<BigInt(b&63));ALE=(a,b)=>BigInt.asIntN(64,a>>BigInt(b&63));X=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,
a)>>BigInt(b&63));}let R=(cls,sz)=>{let data=new Array(sz);data.fill(null);return new (ALB(cls))(data);},P=(cls,data)=>new (ALB(cls))(data),U3;if(typeof BigInt64Array!=='function'){U3=init=>new AMU(init);}else {U3=data=>{let buffer=new BigInt64Array(data.length);buffer.set(data);return new AMU(buffer);};}let G=sz=>new AMV(new Uint16Array(sz)),ALA=data=>{let buffer=new Uint16Array(data.length);buffer.set(data);return new AMV(buffer);},BF=sz=>new AMW(new Int8Array(sz)),ALk=sz=>new AMX(new Int16Array(sz)),AMm=
data=>{let buffer=new Int16Array(data.length);buffer.set(data);return new AMX(buffer);},S=sz=>new AMY(new Int32Array(sz)),Gk=data=>{let buffer=new Int32Array(data.length);buffer.set(data);return new AMY(buffer);},Kj=sz=>new AMZ(new Int8Array(sz)),Cb=sz=>new AM0(new Float32Array(sz)),ABM=sz=>new AM1(new Float64Array(sz)),ALB=cls=>{let result=cls.$array;if(result===null){function JavaArray(data){(E0()).call(this);this.data=data;}JavaArray.prototype=Object.create((E0()).prototype);JavaArray.prototype.type=cls;JavaArray.prototype.constructor
=JavaArray;JavaArray.prototype.toString=function(){let str="[";for(let i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};JavaArray.prototype.p=function(){let dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for(let i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new (ALB(this.type))(dataCopy);};let name="["+cls.$meta.binaryName;JavaArray.$meta={item:cls,supertypes:[E0()],primitive
:false,superclass:E0(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};JavaArray.classObject=null;JavaArray.$array=null;result=JavaArray;cls.$array=JavaArray;}return result;};let AM2,ALm=strings=>{AM3();AM2=new Array(strings.length);for(let i=0;i<strings.length;++i){AM2[i]=AM4(V(strings[i]));}},A=index=>AM2[index],L=(array,offset,count)=>{let result="",limit=offset+count;for(let i=offset;i<limit;i=i+1024|0){let next=Math.min(limit,i+1024|0);result+=String.fromCharCode.apply(null,
array.subarray(i,next));}return result;},V=str=>str===null?null:OX(str),Br=str=>str===null?null:str.g8,AM3=()=>(()=>{})(),AM4;{AM4=str=>str;}let G_=(obj,cls)=>obj instanceof E0()&&!!obj.constructor.$meta&&AM5(obj.constructor,cls),AM5=(from,to)=>{if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&AM5(from.$meta.item,to.$meta.item);}let supertypes=from.$meta.supertypes;for(let i=0;i<supertypes.length;i=i+1|0){if(AM5(supertypes[i],to)){return true;}}return false;};let E=ex=>{throw AHu(ex);},
AM6=Symbol("javaException"),AHu=ex=>{let err=ex.$jsException;if(!err){let javaCause=AM7(ex),jsCause=javaCause!==null?javaCause.$jsException:void 0,cause=typeof jsCause==="object"?{cause:jsCause}:void 0;err=new AM8("Java exception thrown",cause);if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err[AM6]=ex;ex.$jsException=err;AM9(err,ex);}return err;},AM9=(err,ex)=>{if(typeof AM$==="function"&&err.stack){let stack=AM$(err.stack),javaStack=R(AM_(),stack.length),elem,noStack=false;for
(let i=0;i<stack.length;++i){let element=stack[i];elem=ANa(V(element.className),V(element.methodName),V(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){ANb(ex,javaStack);}}},AM8;if(typeof ANc==='object'){let ANd=Symbol("defaultMessage");AM8=function AM8(message,cause){let self=Reflect.construct(Error,[void 0,cause],AM8);Object.setPrototypeOf(self,AM8.prototype);self[ANd]=message;return self;};AM8.prototype=Object.create(Error.prototype,{constructor
:{configurable:true,writable:true,value:AM8},message:{get(){try {let javaException=this[AM6];if(typeof javaException==='object'){let javaMessage=ANe(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[ANd];}catch(ANf){return "Exception occurred trying to extract Java exception message: "+ANf;}}}});}else {AM8=Error;}let ALz=e=>e instanceof Error&&typeof e[AM6]==='object'?e[AM6]:null,BP=err=>{let ex=err[AM6];if(!ex){ex=ANg(V("(JavaScript) "+err.toString()));err[AM6]
=ex;ex.$jsException=err;AM9(err,ex);}return ex;},ANg=message=>ALa(message),ANe=t=>AF9(t),AM7=t=>AL2(t),AM_=()=>E0(),ANa=(className,methodName,fileName,lineNumber)=>{{return null;}},ANb=(e,stack)=>{};let ANh=outputFunction=>{let buffer="";return msg=>{let index=0;while(true){let next=msg.indexOf('\n',index);if(next<0){break;}outputFunction(buffer+msg.substring(index,next));buffer="";index=next+1;}buffer+=msg.substring(index);};},BI=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof console===
"object"?ANh(msg=>console.info(msg)):()=>{},CI=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof console==="object"?ANh(msg=>console.error(msg)):()=>{};let ANi=null,AK4=data=>{let i=0,packages=new Array(data.length);for(let j=0;j<data.length;++j){let prefixIndex=data[i++],prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}ANi=packages;},Co=data=>{let packages=ANi,i=0;while(i<data.length){let cls=data[i++];cls.$meta={};let m=cls.$meta,className=data[i++];m.name=
className!==0?className:null;if(m.name!==null){let packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";let superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=Object.create(m.superclass.prototype);}else {cls.prototype={};}let flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel
=data[i++];let innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {let enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;let declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;let simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}let clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};let virtualMethods=data[i++];if(virtualMethods!==0){for
(let j=0;j<virtualMethods.length;j+=2){let name=virtualMethods[j],func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(let k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}};function ANj(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}ANj.prototype.push=function(){for(let i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};ANj.prototype.s=ANj.prototype.push;ANj.prototype.pop
=function(){return this.stack.pop();};ANj.prototype.l=ANj.prototype.pop;ANj.prototype.isResuming=function(){return this.status===2;};ANj.prototype.isSuspending=function(){return this.status===1;};ANj.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};ANj.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if(ANk!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:result=>{if(result instanceof Error)
{throw result;}};this.run();};ANj.prototype.resume=function(){if(ANk!==null){throw new Error("Another thread is running");}this.status=2;this.run();};ANj.prototype.run=function(){ANk=this;let result;try {result=this.runner();}catch(ANf){result=ANf;}finally {ANk=null;}if(this.suspendCallback!==null){let self=this,callback=this.suspendCallback;this.suspendCallback=null;callback(()=>self.resume());}else if(this.status===0){this.completeCallback(result);}};let Ee=()=>{let thread=Cq();return thread!=null&&thread.isSuspending();},
Eg=()=>{let thread=Cq();return thread!=null&&thread.isResuming();},AMq=(runner,callback)=>(new ANj(runner)).start(callback),ANk=null,Cq=()=>ANk,D9=()=>{throw new Error("Invalid recorded state");};function C(){this.il=null;this.$id$=0;}
let Er=b=>{let c;if(b.il===null){c=new Gq;c.ik=BE;b.il=c;}b=b.il;c=b.ik;if(c===null)b.ik=BE;else if(c!==BE){c=new CV;c.g$=1;c.g_=1;c.hb=A(0);E(c);}b.iI=b.iI+1|0;},
CO=b=>{let c,d;if(!Ft(b)){c=b.il;if(c.ik===BE){d=c.iI-1|0;c.iI=d;if(!d)c.ik=null;Ft(b);return;}}b=new GA;b.g$=1;b.g_=1;E(b);},
ALV=b=>{YY(b,1);},
YY=(b,c)=>{let d,$p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.il===null){d=new Gq;d.ik=BE;b.il=d;}d=b.il;if(d.ik===null)d.ik=BE;if(d.ik===BE){d.iI=d.iI+c|0;return;}$p=1;case 1:SQ(b,c);if(Ee()){break _;}return;default:D9();}}Cq().s(b,c,d,$p);},
ABg=(b,c,d)=>{let e,f,g;e=BE;f=b.il;if(f===null){f=new Gq;f.ik=e;b.il=f;if(e!==e)BE=e;BE.j4=CZ();b=b.il;b.iI=b.iI+c|0;b=null;d.kF.e(b);return;}if(f.ik===null){f.ik=e;if(e!==e)BE=e;BE.j4=CZ();b=b.il;b.iI=b.iI+c|0;b=null;d.kF.e(b);return;}if(f.jZ===null)f.jZ=AAC();f=f.jZ;g=new Oi;g.pa=e;g.pb=b;g.o$=c;g.o_=d;d=g;f.push(d);},
ALX=b=>{Sm(b,1);},
Sm=(b,c)=>{let d;if(!Ft(b)){d=b.il;if(d.ik===BE){c=d.iI-c|0;d.iI=c;if(c>0)return;d.ik=null;d=d.jZ;if(d!==null&&!(d.length?0:1)){d=new Q7;d.pt=b;JK(d,0);}else Ft(b);return;}}b=new GA;b.g$=1;b.g_=1;E(b);},
AGM=b=>{let c,d,e;if(!Ft(b)){c=b.il;if(c.ik===null){b=c.jZ;if(b!==null&&!(b.length?0:1)){b=c.jZ.shift();Bp();if(b!==null&&!(b instanceof E0()))b=Ce(b);d=b;c.jZ=null;b=d.pa;c=d.pb;e=d.o$;d=d.o_;if(BE!==b)BE=b;BE.j4=CZ();c=c.il;c.ik=b;c.iI=c.iI+e|0;b=null;d.kF.e(b);}return;}}},
Ft=a=>{let b,c;b=a.il;if(b===null)return 1;a:{if(b.ik===null){c=b.jZ;if(!(c!==null&&!(c.length?0:1))){b=b.n_;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.il=null;return 1;},
BB=a=>{return;},
ALf=()=>{let a=new C();BB(a);return a;},
ALW=a=>{let b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new Ca;c.hG=b;d=c;b.classObject=d;}}return c;},
V7=a=>{let b,c;b=a;if(!b.$id$){c=Gl();b.$id$=c;}return a.$id$;},
ACf=(a,b)=>{return a!==b?0:1;},
LQ=a=>{let b,c,d,e,f,g,h,i;b=a;if(!b.$id$){c=Gl();b.$id$=c;}d=Bj(a.$id$,4);b=new K;b.g9=G(16);F(b,b.g7,A(1));e=b.g7;if(d===null)d=A(2);F(b,e,d);c=new H;f=b.g9;g=f.data;h=b.g7;i=g.length;if(h>=0&&h<=(i-0|0)){c.g8=L(f.data,0,h);return c;}b=new I;b.g$=1;b.g_=1;E(b);},
ALI=a=>{let b,c,d;if(!G_(a,DZ)&&a.constructor.$meta.item===null){b=new PP;b.g$=1;b.g_=1;E(b);}b=R6(a);c=b;d=Gl();c.$id$=d;return b;},
J8=a=>{let b,c;b=a.il;if(!(b!==null&&b.ik===BE?1:0)){b=new GA;b.g$=1;b.g_=1;E(b);}b=b.n_;if(b===null)return;while(!(b.length?0:1)){c=b.shift();Bp();if(c!==null&&!(c instanceof E0()))c=Ce(c);c=c;if(!c.m())JK(c,0);}a.il.n_=null;},
SQ=(b,c)=>{let thread=Cq();let javaThread=RP();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Hv(javaThread);thread.resume();};callback.fo=e=>{thread.attribute=AHu(e);Hv(javaThread);thread.resume();};callback=NU(callback);thread.suspend(()=>{try {ABg(b,c,callback);;}catch(Kh){callback.fo(Kh);}});return null;};
let AHI=D();
let ADt=b=>{let c,d,e,f;QK=G(0);c=new H;c.g8="";I4=c;KB=new Ka;AGr();c=new Bq;c.kL=1.0;c.kK=0.0;K5=c;c=new Bq;c.kL=0.0;c.kK=1.0;K4=c;c=new Bq;c.kL=0.0;c.kK=0.0;M4=c;MC=new Bq;On=new Bq;Tk();O5=new Bq;O8=new Bq;Vj();NX=new Bq;N9=new Bq;c=new Dm;c.jM=0.0;c.jJ=0.0;c.jK=0.0;c.jL=0.0;Na=c;c=new Dm;c.jM=0.0;c.jJ=0.0;c.jK=0.0;c.jL=0.0;M_=c;Mq=new DW;OA=new DW;Qb=0.10000000149011612;AJ6();MX=Bk(AD3);RO();Lu=R(GR,111);OT=new Bq;O3=new Bq;Mw=new C;Z3();KF=Bk(ACN);Xk();LX=Bk(ACF);KE=Bk(T2);O7=R(Jr,128);SS();MN=new Bq;MO
=new Bq;MP=new Bq;Op=0.4000000059604645;KD=0.10000000149011612;PV=new Bq;AEO();Nr=new Bq;NS=new Bq;Ra=new Bq;Rc=new Bq;Rb=new Bq;AIN();AJ4();Ww();Lk=new Bw;AFw();Y_();Nf=Cb(3);ADv();ZP();ABE();C$=1;VE();Rd=new HG;MD=new HF;AB$();M=1;WL();Gw=new JX;AD0();T1();c=new Kd;b=R(H,0);d=b.data;G3(A(3));e=d.length;f=0;while(f<e){G3(d[f]);f=f+1|0;}c.oE=A(3);c.pk=b.p();BX=c;Rk=Bk(W3);Y1();c=new FE;c.mE=A(4);Cz=c;c=new FE;c.mE=A(5);Hq=c;AKe();Ug();AAn();c=AJ9(A(6));c.l8=0;c.kN=0;Ma(new II,new KX,c);};
let KG=D();
let X1=0,X7=0,Td=0,AKf=0,Wr=0;
let Og=()=>{Og=Bz(KG);ZZ();};
let ZZ=()=>{X1=Cm(V(navigator.platform),A(7));X7=Cm(V(navigator.platform),A(8));Td=Cm(V(navigator.platform),A(9));AKf=!Cm(V(navigator.platform),A(10))&&!Cm(V(navigator.platform),A(11))?0:1;Wr=!Cm(V(navigator.platform),A(12))&&!Cm(V(navigator.platform),A(13))&&!Cm(V(navigator.platform),A(14))?0:1;};
let Kv=D(0);
let FU=D();
let CW=D(0);
let AHn=D(FU);
let DO=D(0);
let Em=D();
let CF=D(0);
let BN=D(0);
function BR(){let a=this;C.call(a);a.hw=null;a.hl=0;}
let AG9=a=>{return a.hl;},
Y0=a=>{return a.hw;};
let Fz=D(BR);
let AIo=null,AJR=null,Yv=null,Sd=null;
let AGr=()=>{let b,c,d;b=new Fz;b.hw=A(15);b.hl=0;AIo=b;c=new Fz;c.hw=A(16);c.hl=1;AJR=c;d=new Fz;d.hw=A(17);d.hl=2;Yv=d;Sd=P(Fz,[b,c,d]);};
let Es=D();
let I9=D(0);
let Iw=D(Es);
let MC=null;
let ALC=()=>{MC=new Bq;};
let EM=D(0);
let C1=D(0);
let Ff=D();
let E1=D(0);
let BJ=D();
let On=null;
let AMe=()=>{On=new Bq;};
let Fw=D(BJ);
let AEx=D(Fw);
let Hb=D(BR);
let Oh=null,QV=null,PQ=null;
let Tk=()=>{let b,c;b=new Hb;b.hw=A(18);b.hl=0;Oh=b;c=new Hb;c.hw=A(19);c.hl=1;QV=c;PQ=P(Hb,[b,c]);};
let JQ=D(0);
let GC=D(0);
let EY=D(0);
let CK=D();
let AGY=D(CK);
let JF=D(Ff);
let Jl=D();
let O5=null,O8=null;
let ALp=()=>{O5=new Bq;O8=new Bq;};
let WI=D();
let R_=D();
let Q1=D(0);
let IF=D();
let AD2=D(IF);
let ZS=D(Em);
let M9=D();
let Su=null;
let Rj=()=>{Rj=Bz(M9);ABL();};
let ABL=()=>{let b,c;b=S((PQ.p()).data.length);c=b.data;Su=b;c[Oh.hl]=1;c[QV.hl]=2;};
let ACc=D();
let OI=D();
let Rv=null;
let NI=()=>{NI=Bz(OI);Vm();};
let Vm=()=>{let b,c;b=S((Ia.p()).data.length);c=b.data;Rv=b;c[Ic.hl]=1;c[HP.hl]=2;c[Ix.hl]=3;};
let AGX=D(CK);
let D7=D();
let OE=D(D7);
let Q8=D();
let AGN=0,AJv=0,ACd=0,AJK=0,YP=0;
let Pw=()=>{Pw=Bz(Q8);AJp();};
let AJp=()=>{AGN=Cm(V(navigator.platform),A(7));AJv=Cm(V(navigator.platform),A(8));ACd=Cm(V(navigator.platform),A(9));AJK=!Cm(V(navigator.platform),A(10))&&!Cm(V(navigator.platform),A(11))?0:1;YP=!Cm(V(navigator.platform),A(12))&&!Cm(V(navigator.platform),A(13))&&!Cm(V(navigator.platform),A(14))?0:1;};
let IQ=D();
let AJe=D(Fw);
let NX=null;
let ALH=()=>{NX=new Bq;};
let XT=D();
let N9=null;
let AMi=()=>{N9=new Bq;};
let PZ=D();
let Wq=null,S_=null,AJ1=null;
let Qy=()=>{Qy=Bz(PZ);AGi();};
let AGi=()=>{let b;b=new Cy;b.iJ=1;b.hW=R(C,16);Wq=b;b=new Bb;B_();S_=b;AJ1=new DW;};
let JJ=D();
let Gt=D(D7);
let QU=D(D7);
let C9=D(BJ);
let Qb=0.0;
let AL9=()=>{Qb=0.10000000149011612;};
let QN=D(Gt);
let Vy=D(Em);
let HR=D(0);
let ABA=D(Em);
let Y7=D();
let Kn=D();
let UV=null;
let NY=()=>{NY=Bz(Kn);AIg();};
let AIg=()=>{let b,c;b=S((Ia.p()).data.length);c=b.data;UV=b;c[Ll.hl]=1;c[Oa.hl]=2;c[Qe.hl]=3;c[Ic.hl]=4;c[HP.hl]=5;c[Ix.hl]=6;c[L5.hl]=7;c[ME.hl]=8;c[PH.hl]=9;c[MY.hl]=10;};
let CP=D(BR);
let Ic=null,HP=null,Ix=null,L5=null,PH=null,MY=null,ME=null,Ll=null,Oa=null,Qe=null,Ia=null;
let Vj=()=>{let b,c,d,e,f,g,h,i,j,k;b=new CP;b.hw=A(20);b.hl=0;Ic=b;c=new CP;c.hw=A(21);c.hl=1;HP=c;d=new CP;d.hw=A(22);d.hl=2;Ix=d;e=new CP;e.hw=A(23);e.hl=3;L5=e;f=new CP;f.hw=A(24);f.hl=4;PH=f;g=new CP;g.hw=A(25);g.hl=5;MY=g;h=new CP;h.hw=A(26);h.hl=6;ME=h;i=new CP;i.hw=A(27);i.hl=7;Ll=i;j=new CP;j.hw=A(28);j.hl=8;Oa=j;k=new CP;k.hw=A(29);k.hl=9;Qe=k;Ia=P(CP,[b,c,d,e,f,g,h,i,j,k]);};
let BS=D();
let DJ=D(BS);
let Zw=D(DJ);
let ADH=D(DJ);
let Cg=D(BS);
let DB=D(Cg);
let Sv=D(DB);
let Ux=D();
let Kb=D(BS);
let VL=D(Kb);
let XK=D(BS);
let ABp=D(BS);
let AFB=D(BS);
let AGb=D();
let IK=D(BS);
let AAP=D(IK);
let Wl=D(Cg);
let AGS=D(Cg);
let AHq=D(DB);
let AEl=D(BS);
let AEL=D(DB);
let AIS=D(Cg);
let AIh=D(Cg);
let Yh=D(BS);
let AAq=D(Cg);
let AAD=D(BS);
let YG=D(BS);
let AAS=D(DJ);
let Tg=D(Cg);
let AI2=D(BS);
let ADV=D(DB);
let Yt=D(DJ);
let ADa=D(BS);
let Uy=D(Cg);
let Z2=D(Cg);
let Vt=D();
let ZV=null;
let AJ6=()=>{ZV=P(Ca,[Bk(MV),Bk(Bw),Bk(Ob),Bk(OE),Bk(QU),Bk(Gt),Bk(QN),Bk(ER),Bk(NF),Bk(P0),Bk(Pr),Bk(M$),Bk(QB),Bk(Hm),Bk(QM),Bk(OF),Bk(K$),Bk(Qt),Bk(E8),Bk(N3),Bk(PW),Bk(NZ),Bk(Nl),Bk(Lr)]);};
let Cp=D(Iw);
let DM=D(Cp);
let TS=null,AAx=null,AGa=null,AKp=null,ADr=null,RL=null,Xy=null,AC1=null;
let ML=()=>{ML=Bz(DM);AGD();};
let AGD=()=>{let b,c;b=new Bw;b.ix=0.0;b.iw=0.0;b.iv=1.0;b.iu=1.0;Da(b);TS=b;b=new Bw;b.ix=1.0;b.iw=0.0;b.iv=0.0;b.iu=1.0;Da(b);AAx=b;b=new Bw;b.ix=0.0;b.iw=1.0;b.iv=0.0;b.iu=1.0;Da(b);AGa=b;b=new QS;c=new Cy;c.iJ=0;c.hW=R(C,16);b.mp=c;b.my=2147483647;AKp=b;b=new QR;Gb();ADr=b;RL=new QQ;Xy=new QP;AC1=new QO;};
let Ew=D(DM);
let Iv=D(Ew);
let We=D(Iv);
let AGU=D(BJ);
let Jk=D(Cp);
let NN=D(0);
let Dw=D();
let X$=D(Dw);
let Cx=D(Es);
let Tz=D(Cx);
let AGT=D(BJ);
let BK=D();
let AH1=null,AFI=null,AGQ=null,WH=null,AAY=null,Zr=null,AFC=null;
let Gb=()=>{Gb=Bz(BK);T5();};
let T5=()=>{let b;b=new GR;Gb();b.r0=0.0;AH1=b;AFI=new OO;AGQ=new OL;WH=new OK;AAY=new ON;Zr=new OM;AFC=new OJ;};
let ON=D(BK);
let AD4=D(BK);
let HM=D(C9);
let AAI=D(HM);
let QQ=D(BK);
let AII=D(BJ);
let I2=D(DM);
let OT=null,O3=null;
let AK8=()=>{OT=new Bq;O3=new Bq;};
let AD5=D(BK);
let EL=D(0);
let DW=D();
let Mq=null,OA=null;
let AL4=()=>{Mq=new DW;OA=new DW;};
let C5=D(DW);
let Rq=null;
let Q9=()=>{Q9=Bz(C5);S0();};
let S0=()=>{let b,c,d,e,f,g,h,$$je;Gy();b=Fl;c=Du(b,Bk(C5));b=c<0?null:b.jF.data[c];if(b===null){b=new H9;d=new Cy;d.iJ=0;d.hW=R(C,4);b.mp=d;b.my=100;a:{try{d=Os(Bk(C5),null);break a;}catch($$e){$$je=BP($$e);if($$je instanceof CE){}else{throw $$e;}}try{d=Mn(Bk(C5),null);Pp(d,1);break a;}catch($$e){$$je=BP($$e);if($$je instanceof D_){}else{throw $$e;}}d=null;}b.oJ=d;if(d===null){b=new BA;d=new K;d.g9=G(16);F(d,d.g7,A(30));if(Bk(C5).ih===null)Bk(C5).ih=V(Bk(C5).hG.$meta.name);e=Bk(C5).ih;F(d,d.g7,e);e=new H;f
=d.g9;g=f.data;c=d.g7;h=g.length;if(c>=0&&c<=(h-0|0)){e.g8=L(f.data,0,c);b.g$=1;b.g_=1;b.hb=e;E(b);}e=new I;e.g$=1;e.g_=1;E(e);}DE(Fl,Bk(C5),b);}Rq=b;};
let Yc=D(Dw);
let Jv=D(Cx);
let MN=null,MO=null,MP=null,Op=0.0,KD=0.0;
let AMg=()=>{MN=new Bq;MO=new Bq;MP=new Bq;Op=0.4000000059604645;KD=0.10000000149011612;};
let Wu=D(Jv);
let Z6=D(BJ);
let Mg=D(0);
let AFG=D();
let ER=D();
let E8=D(ER);
let Pr=D(E8);
let JA=D(Cx);
let Zg=D(JA);
let AKj=D(Jk);
let HT=D(Cp);
let AKW=D(Ew);
let JU=D(Cx);
let QO=D(BK);
let PW=D();
let YC=D();
let AAL=D(BJ);
let ACl=D(CK);
let ZA=D();
let AFg=D(BJ);
let AJ2=D(C9);
let Z4=D(Jl);
let OJ=D(BK);
let OM=D(BK);
let Ok=D(0);
let Hm=D();
let K$=D(Hm);
let X_=D(Dw);
let AGR=D(IQ);
let AGV=D(JJ);
let AIJ=D(BJ);
let AIK=D(C9);
let QP=D(BK);
let K3=D();
let Yx=null,ADi=null,Yw=null,ADh=null,RJ=null,UW=null,ACS=null,R9=null,AFa=null;
let Ps=()=>{Ps=Bz(K3);Vz();};
let Vz=()=>{let b;b=new J6;b.oL=0.0;Yx=b;b=new J6;b.oL=1.0;ADi=b;DP();Yw=De.data[128];DP();b=De.data[129];ADh=b;RJ=b;DP();UW=De.data[130];DP();ACS=De.data[132];DP();R9=De.data[136];DP();AFa=De.data[144];};
let NF=D(E8);
let AAg=D(BJ);
let TU=D(CK);
let OO=D(BK);
let WO=D(Cp);
let Z5=D(BJ);
let NZ=D();
function GR(){BK.call(this);this.r0=0.0;}
let Lu=null;
let AL_=()=>{Lu=R(GR,111);};
let YD=D(HT);
let OK=D(BK);
let ABh=D(Cx);
let PV=null;
let AMa=()=>{PV=new Bq;};
let AAb=D(JF);
let Qt=D();
let Lj=D(Cx);
let Tu=null,W2=null;
let PF=()=>{PF=Bz(Lj);Tc();};
let Tc=()=>{let b,c;Tu=new Bw;b=new HL;I_();c=new Cy;c.iJ=1;c.hW=R(C,1);b.rR=c;c=new GV;c.nn=1;c.jB=S(2);b.rc=c;W2=b;};
let Lr=D();
let AD7=D(BK);
let QR=D(BK);
let AGh=D(I2);
let OL=D(BK);
let M$=D();
let AJU=D();
let Ei=D(BR);
let YM=null,TI=null,AEu=null,Si=null,UC=null,AFN=null;
let AEO=()=>{let b,c,d,e,f;b=new Ei;b.hw=A(31);b.hl=0;YM=b;c=new Ei;c.hw=A(32);c.hl=1;TI=c;d=new Ei;d.hw=A(33);d.hl=2;AEu=d;e=new Ei;e.hw=A(34);e.hl=3;Si=e;f=new Ei;f.hw=A(35);f.hl=4;UC=f;AFN=P(Ei,[b,c,d,e,f]);};
let AJ$=D(BK);
let ZT=D(CK);
function Cv(){let a=this;C.call(a);a.my=0;a.mp=null;}
let QS=D(Cv);
let TJ=D();
let QB=D();
let Ob=D();
let OF=D();
let JS=D(BJ);
let Nr=null;
let AK5=()=>{Nr=new Bq;};
let TT=D(CK);
let AIL=D(JU);
let TM=D(0);
let AAh=D(BJ);
let AKO=D(Cp);
let ADE=D(Cp);
let AAc=D(C9);
let JH=D();
let X9=D(JH);
let AIn=D(Es);
let S2=D(BJ);
let AGC=D(Ew);
let ACL=D(BJ);
let AJC=D(C9);
let P0=D(ER);
let ADL=D(Cp);
let N3=D();
let Nl=D();
let ACs=D(Cx);
let AJ3=D(Ff);
let S4=D(BJ);
let AE4=D(Cp);
let NS=null;
let ALK=()=>{NS=new Bq;};
let AKh=D(JS);
let S5=D(DM);
let Ya=D(Dw);
let Rx=D();
let QM=D();
let Qn=D();
let Uu=null,Tj=null,U1=null,AIT=null,AIV=null,AIU=null,WN=null,XV=null,AJu=null,S9=null,AI3=null;
let Qo=()=>{Qo=Bz(Qn);AB1();};
let AB1=()=>{let b;Uu=Cb(16);b=new Dm;b.jM=0.0;b.jJ=0.0;b.jK=0.0;b.jL=1.0;Tj=b;b=new Dm;b.jM=0.0;b.jJ=0.0;b.jK=0.0;b.jL=1.0;U1=b;b=new Bb;B_();AIT=b;AIV=new Bb;AIU=new Bb;WN=new Bb;XV=D3();AJu=new Bb;S9=new Bb;AI3=new Bb;};
let Bv=D();
let T4=null,AF6=null,Wz=null,AF_=null,VU=null,Xt=null,AAM=null,Sh=null,AA5=null,VT=null,ACt=null,W0=null,Xs=null,Th=null,R7=null,AFp=null,YH=null,Xv=null,VY=null,AE9=null,Xu=null,AIi=null,Xz=null,ABk=null,AHY=null,ABT=null,Ru=null,Se=null,AF2=null,XY=null,AKr=null,AED=null,AID=null,AAl=null,AFk=null,AKN=null,Zh=null,Zy=null,Sj=null,AGx=null,AKv=null,AIQ=null,AEM=null,AKD=null;
let Hc=()=>{Hc=Bz(Bv);Uj();};
let Uj=()=>{let b,c;b=new Pl;Hc();T4=b;AF6=new Pd;Wz=new Pc;b=new Pf;AF_=b;VU=b;b=new Dx;b.i1=2;Xt=b;b=new F1;b.i1=2;AAM=b;Sh=b;b=new FW;b.i1=2;AA5=b;VT=b;ACt=new Pe;W0=new Ph;b=new Dx;b.i1=3;Xs=b;b=new F1;b.i1=3;Th=b;b=new FW;b.i1=3;R7=b;AFp=new Pg;YH=new Pj;b=new Dx;b.i1=4;Xv=b;b=new F1;b.i1=4;VY=b;b=new FW;b.i1=4;AE9=b;b=new Dx;b.i1=5;Xu=b;b=new F1;b.i1=5;AIi=b;b=new FW;b.i1=5;Xz=b;ABk=new Pi;AHY=new Ou;ABT=new Ow;b=new Eu;b.kW=2.0;b.k5=10.0;c=EU(2.0,(-10.0));b.ll=c;b.k$=1.0/(1.0-c);Ru=b;b=new IV;b.kW=2.0;b.k5
=10.0;c=EU(2.0,(-10.0));b.ll=c;b.k$=1.0/(1.0-c);Se=b;b=new J$;b.kW=2.0;b.k5=10.0;c=EU(2.0,(-10.0));b.ll=c;b.k$=1.0/(1.0-c);AF2=b;b=new Eu;b.kW=2.0;b.k5=5.0;c=EU(2.0,(-5.0));b.ll=c;b.k$=1.0/(1.0-c);XY=b;b=new IV;b.kW=2.0;b.k5=5.0;c=EU(2.0,(-5.0));b.ll=c;b.k$=1.0/(1.0-c);AKr=b;b=new J$;b.kW=2.0;b.k5=5.0;c=EU(2.0,(-5.0));b.ll=c;b.k$=1.0/(1.0-c);AED=b;AID=new Ox;AAl=new Oy;AFk=new Oz;b=new EX;b.ot=2.0;b.nf=10.0;b.nk=1.0;b.nD=(-21.99114990234375);AKN=b;b=new Lc;b.ot=2.0;b.nf=10.0;b.nk=1.0;b.nD=18.84955596923828;Zh
=b;b=new Ne;b.ot=2.0;b.nf=10.0;b.nk=1.0;b.nD=(-21.99114990234375);Zy=b;b=new Ng;b.ru=3.0;Sj=b;b=new LI;b.sz=2.0;AGx=b;b=new QD;b.rW=2.0;AKv=b;b=new MK;It(b,4);AIQ=b;b=new Nz;It(b,4);AEM=b;AKD=V4(4);};
function LI(){Bv.call(this);this.sz=0.0;}
let ZW=D();
let Pg=D(Bv);
let AI_=D();
function Dx(){Bv.call(this);this.i1=0;}
let F1=D(Dx);
let FW=D(Dx);
let G0=D(0);
let VO=D();
let Pj=D(Bv);
let AG8=D();
let Pf=D(Bv);
function EX(){let a=this;Bv.call(a);a.ot=0.0;a.nf=0.0;a.nk=0.0;a.nD=0.0;}
let Pe=D(Bv);
let Pd=D(Bv);
let AD$=D();
let Ra=null,Rc=null,Rb=null;
let ALc=()=>{Ra=new Bq;Rc=new Bq;Rb=new Bq;};
let R$=D(Cv);
let GL=D(0);
function Bq(){let a=this;C.call(a);a.kL=0.0;a.kK=0.0;}
let K5=null,K4=null,M4=null;
let AK$=()=>{let b;b=new Bq;b.kL=1.0;b.kK=0.0;K5=b;b=new Bq;b.kL=0.0;b.kK=1.0;K4=b;b=new Bq;b.kL=0.0;b.kK=0.0;M4=b;};
let Oy=D(Bv);
function Eu(){let a=this;Bv.call(a);a.kW=0.0;a.k5=0.0;a.ll=0.0;a.k$=0.0;}
let ACo=D();
let Pl=D(Bv);
let J$=D(Eu);
let Yy=D();
let FF=D(BR);
let Wi=null,YQ=null,AGJ=null,ACO=null;
let AIN=()=>{let b,c,d;b=new FF;b.hw=A(36);b.hl=0;Wi=b;c=new FF;c.hw=A(37);c.hl=1;YQ=c;d=new FF;d.hw=A(38);d.hl=2;AGJ=d;ACO=P(FF,[b,c,d]);};
let N$=D();
let AIZ=null;
let NL=()=>{NL=Bz(N$);AAR();};
let AAR=()=>{let b;b=new Bb;B_();AIZ=b;};
function Fa(){let a=this;Bv.call(a);a.rN=null;a.rn=null;}
let It=(a,b)=>{let c,d,e,f,g,h,i,j;Hc();if(b>=2&&b<=5){a:{c=Cb(b);a.rN=c;d=Cb(b);e=d.data;a.rn=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break a;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break a;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break a;default:break a;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new Bs;g=new K;g.g9=G(16);F(g,g.g7,A(39));J(g,g.g7,b,10);h=new H;c=g.g9;d=c.data;i=g.g7;j=d.length;if(i>=0&&i<=(j-0|0)){h.g8=L(c.data,0,i);f.g$=1;f.g_=1;f.hb=h;E(f);}g=new I;g.g$
=1;g.g_=1;E(g);},
V4=a=>{let b=new Fa();It(b,a);return b;};
let Nz=D(Fa);
let Ou=D(Bv);
let AC3=D();
let Pc=D(Bv);
function EB(){let a=this;C.call(a);a.lA=0.0;a.lz=0.0;a.lB=0.0;a.ly=0.0;}
let AHM=null,AHJ=null,AHK=null,AHL=null,Vp=null;
let AJ4=()=>{let b;b=new EB;b.lA=1.0;b.lz=0.0;b.lB=0.0;b.ly=0.0;AHM=b;b=new EB;b.lA=0.0;b.lz=1.0;b.lB=0.0;b.ly=0.0;AHJ=b;b=new EB;b.lA=0.0;b.lz=0.0;b.lB=1.0;b.ly=0.0;AHK=b;b=new EB;b.lA=0.0;b.lz=0.0;b.lB=0.0;b.ly=1.0;AHL=b;b=new EB;b.lA=0.0;b.lz=0.0;b.lB=0.0;b.ly=0.0;Vp=b;};
let Lc=D(EX);
function Ng(){Bv.call(this);this.ru=0.0;}
let VC=D();
let AKB=D();
let Ph=D(Bv);
function QD(){Bv.call(this);this.rW=0.0;}
let Oz=D(Bv);
let Ne=D(EX);
let Rg=D();
let Xx=null,SN=null,AJy=null;
let L8=()=>{L8=Bz(Rg);Sz();};
let Sz=()=>{let b,c,d,e,f,g;Xx=R(Bb,15);b=R(Bb,8);SN=b;c=R(Bb,9);d=c.data;AJy=c;e=0;f=d.length;while(e<f){g=new Bb;B_();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Bb;B_();b[e]=g;e=e+1|0;}};
function HQ(){let a=this;C.call(a);a.pV=null;a.p6=null;a.pD=null;a.p7=null;}
let W9=null;
let Kl=()=>{Kl=Bz(HQ);AGl();};
let AEc=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.pV;e=b.hc;f=c.hc;if(e<f)f=e;e=b.he;g=c.he;if(e<g)g=e;e=b.hd;h=c.hd;if(e<h)h=e;d.hc=f;d.he=g;d.hd=h;i=a.p6;e=b.hc;g=c.hc;if(e>g)g=e;e=b.he;h=c.he;if(e>h)h=e;e=b.hd;f=c.hd;if(e>f)f=e;i.hc=g;i.he=h;i.hd=f;b=a.pD;h=d.hc;j=d.he;k=d.hd;b.hc=h;b.he=j;b.hd=k;e=i.hc;f=i.he;g=i.hd;h=h+e;j=j+f;k=k+g;b.hc=h;b.he=j;b.hd=k;f=h*0.5;g=j*0.5;e=k*0.5;b.hc=f;b.he=g;b.hd=e;b=a.p7;g=i.hc;h=i.he;j=i.hd;b.hc=g;b.he=h;b.hd=j;e=d.hc;f=d.he;k=d.hd;g=g-e;e=h-f;f=j-k;b.hc=g;b.he=e;b.hd=f;return a;},
AGl=()=>{let b;b=new Bb;B_();W9=b;};
function IO(){let a=this;C.call(a);a.rq=null;a.sg=null;}
let Ss=null;
let Jb=()=>{Jb=Bz(IO);AGw();};
let AGw=()=>{let b;b=new Bb;B_();Ss=b;};
let VW=D();
let SG=D();
let AFc=D();
let Zq=D();
let OV=D();
let Zm=null;
let Jh=()=>{Jh=Bz(OV);AAo();};
let Xp=b=>{let c;Jh();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
AAo=()=>{let b,c,d,e;b=new Oq;c=W_(Ek(O(4.294967296E9*Math.random()+(-2.147483648E9)|0),32),O(4.294967296E9*Math.random()+(-2.147483648E9)|0));if(C6(c,BM))c=B(0, 2147483648);d=U(F6(c,X(c,33)),B(3981806797, 4283543511));d=U(F6(d,X(d,33)),B(444984403, 3301882366));e=F6(d,X(d,33));d=U(F6(e,X(e,33)),B(3981806797, 4283543511));d=U(F6(d,X(d,33)),B(444984403, 3301882366));d=F6(d,X(d,33));b.q6=e;b.q7=d;Zm=b;};
let P6=D();
let RT=null,RU=null,RV=null,VF=null,AHl=null,ABq=null,Tw=null,Tx=null,AA3=null,AAZ=null,Yf=null,Yi=null,Yj=null,Yl=null,AA6=null,AA1=null,ABD=null,Ze=null,AFF=null,YW=null,AIf=null,AIe=null,AIc=null,ZM=null;
let MJ=()=>{MJ=Bz(P6);VZ();};
let VZ=()=>{let b,c;b=new Bb;B_();RT=b;RU=new Bb;RV=new Bb;b=new JN;b.qR=1;b.qX=Cb(16);VF=b;b=new JN;b.qR=1;b.qX=Cb(16);AHl=b;ABq=new Bq;Tw=new Bq;Tx=new Bq;AA3=new Bq;AAZ=new Bq;Yf=new Bq;Yi=new Bq;Yj=new Bq;Yl=new Bq;b=new Hg;c=new Bb;b.iG=c;b.i9=0.0;c.hc=0.0;c.he=0.0;c.hd=0.0;b.i9=0.0;AA6=b;AA1=new Bb;ABD=new Bb;Ze=new Bb;AFF=new Bb;YW=new Bb;AIf=new Bb;AIe=new Bb;AIc=new Bb;ZM=new Bb;};
let TZ=D();
let MK=D(Fa);
function Iy(){C.call(this);this.iz=null;}
let K8=null,AB6=null,AHT=null,GE=null,FK=null,IM=null,QC=null,LU=null,ADG=null,AKQ=null,ADJ=null;
let Dg=()=>{Dg=Bz(Iy);SZ();};
let AFQ=a=>{let b,c;Dg();b=Cb(16);c=b.data;a.iz=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;},
D3=()=>{let a=new Iy();AFQ(a);return a;},
Gm=(a,b)=>{let c;c=b.data;b=a.iz.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;},
ACI=(a,b)=>{let c,d,e,f,g;Dg();c=K8;d=c.data;e=a.iz.data;f=e[0];g=b.iz.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]=e[2]*
g[4]+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return Gm(a,c);},
Ig=a=>{let b;b=a.iz.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;},
AC$=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;Ig(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.iz.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;},
Xh=(a,b,c)=>{let d,e,f,g,h,i;Dg();d=GE;e=b.hc;f=b.he;g=b.hd;d.hc=e;d.he=f;d.hd=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Dl(f);f=d.hc*e;g=d.he*e;e=d.hd*e;d.hc=f;d.he=g;d.hd=e;}d=FK;e=b.hc;f=b.he;g=b.hd;d.hc=e;d.he=f;d.hd=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Dl(f);f=d.hc*e;g=d.he*e;e=d.hd*e;d.hc=f;d.he=g;d.hd=e;}b=L_(FK,c);e=b.hc;e=e*e;f=b.he;e=e+f*f;f=b.hd;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/Dl(e);h=b.hc*g;e=b.he*g;f=b.hd*g;b.hc=h;b.he=e;b.hd=f;}b=IM;c=FK;e=c.hc;f=c.he;g=c.hd;b.hc=e;b.he=f;b.hd=g;b=L_(b,
GE);e=b.hc;e=e*e;f=b.he;e=e+f*f;f=b.hd;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/Dl(f);f=b.hc*e;g=b.he*e;e=b.hd*e;b.hc=f;b.he=g;b.hd=e;}Ig(a);i=a.iz.data;b=FK;i[0]=b.hc;i[4]=b.he;i[8]=b.hd;b=IM;i[1]=b.hc;i[5]=b.he;i[9]=b.hd;b=GE;i[2]= -b.hc;i[6]= -b.he;i[10]= -b.hd;return a;},
Sr=(b,c)=>{let d,e,f;Dg();d=b.data;c=c.data;e=Cb(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+d[6]*c[5]
+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];Fm(e,0,b,0,16);},
AIA=b=>{Dg();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]*b[4]*b[10]
*b[15]+b[0]*b[5]*b[10]*b[15];},
XF=b=>{let c,d,e;Dg();c=Cb(16);d=AIA(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]*b[10]*
b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]=b[12]*
b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]*b[3]
-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;},
ZE=(b,c,d)=>{let e,f,g,h,i,j,k,l;Dg();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;},
SZ=()=>{let b;K8=Cb(16);b=new Dm;b.jM=0.0;b.jJ=0.0;b.jK=0.0;b.jL=1.0;AB6=b;b=new Dm;b.jM=0.0;b.jJ=0.0;b.jK=0.0;b.jL=1.0;AHT=b;b=new Bb;B_();GE=b;FK=new Bb;IM=new Bb;QC=new Bb;LU=D3();ADG=new Bb;AKQ=new Bb;ADJ=new Bb;};
let LT=D(0);
let Jc=D();
function Oq(){let a=this;Jc.call(a);a.q6=BM;a.q7=BM;}
let Ox=D(Bv);
let Pi=D(Bv);
function JE(){let a=this;C.call(a);a.kE=null;a.jU=null;a.mR=null;}
let AKK=null,Qv=null,ADc=null;
let GF=()=>{GF=Bz(JE);AA0();};
let SM=a=>{let b,c,d,e,f,g;GF();b=R(Hg,6);c=b.data;a.kE=b;b=R(Bb,8);d=b.data;e=new Bb;B_();d[0]=e;d[1]=new Bb;d[2]=new Bb;d[3]=new Bb;d[4]=new Bb;d[5]=new Bb;d[6]=new Bb;d[7]=new Bb;a.jU=b;a.mR=Cb(24);f=0;while(f<6){e=new Hg;g=new Bb;e.iG=g;e.i9=0.0;g.hc=0.0;g.he=0.0;g.hd=0.0;e.i9=0.0;c[f]=e;f=f+1|0;}},
AE5=()=>{let a=new JE();SM(a);return a;},
ADX=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;GF();c=Qv;d=c.data;Fm(c,0,a.mR,0,d.length);c=b.iz;e=a.mR;f=0;Dg();g=0;while(g<8){ZE(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.jU.data[f];c=a.mR.data;j=h+1|0;i.hc=c[h];g=j+1|0;i.he=c[j];h=g+1|0;i.hd=c[g];f=f+1|0;}b=a.kE.data[0];c=a.jU.data;i=c[1];k=c[0];l=c[2];m=b.iG;n=i.hc;o=i.he;p=i.hd;m.hc=n;m.he=o;m.hd=p;q=k.hc;r=k.he;s=k.hd;t=n-q;u=o-r;p=p-s;m.hc=t;m.he=u;m.hd=p;q=k.hc-l.hc;r=k.he-l.he;s=k.hd-l.hd;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.hc=n;m.he=s;m.hd
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hc*q;s=m.he*q;q=m.hd*q;m.hc=r;m.he=s;m.hd=q;}k=b.iG;b.i9= -(i.hc*k.hc+i.he*k.he+i.hd*k.hd);b=a.kE.data[1];c=a.jU.data;i=c[4];k=c[5];l=c[7];m=b.iG;n=i.hc;o=i.he;p=i.hd;m.hc=n;m.he=o;m.hd=p;q=k.hc;r=k.he;s=k.hd;t=n-q;u=o-r;p=p-s;m.hc=t;m.he=u;m.hd=p;q=k.hc-l.hc;r=k.he-l.he;s=k.hd-l.hd;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.hc=n;m.he=s;m.hd=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hc*q;s=m.he*q;q=m.hd*q;m.hc=r;m.he=s;m.hd=q;}k=b.iG;b.i9= -(i.hc*k.hc+i.he
*k.he+i.hd*k.hd);b=a.kE.data[2];c=a.jU.data;i=c[0];k=c[4];l=c[3];m=b.iG;n=i.hc;o=i.he;t=i.hd;m.hc=n;m.he=o;m.hd=t;r=k.hc;q=k.he;s=k.hd;r=n-r;u=o-q;p=t-s;m.hc=r;m.he=u;m.hd=p;q=k.hc-l.hc;s=k.he-l.he;n=k.hd-l.hd;o=u*n-p*s;n=p*q-r*n;s=r*s-u*q;m.hc=o;m.he=n;m.hd=s;r=o*o+n*n+s*s;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hc*q;s=m.he*q;q=m.hd*q;m.hc=r;m.he=s;m.hd=q;}k=b.iG;b.i9= -(i.hc*k.hc+i.he*k.he+i.hd*k.hd);b=a.kE.data[3];c=a.jU.data;k=c[5];i=c[1];l=c[6];m=b.iG;n=k.hc;t=k.he;u=k.hd;m.hc=n;m.he=t;m.hd=u;q=i.hc;r=i.he;s
=i.hd;o=n-q;t=t-r;u=u-s;m.hc=o;m.he=t;m.hd=u;p=i.hc-l.hc;q=i.he-l.he;r=i.hd-l.hd;s=t*r-u*q;r=u*p-o*r;n=o*q-t*p;m.hc=s;m.he=r;m.hd=n;r=s*s+r*r+n*n;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hc*q;s=m.he*q;q=m.hd*q;m.hc=r;m.he=s;m.hd=q;}i=b.iG;b.i9= -(k.hc*i.hc+k.he*i.he+k.hd*i.hd);b=a.kE.data[4];c=a.jU.data;i=c[2];k=c[3];l=c[6];m=b.iG;n=i.hc;o=i.he;p=i.hd;m.hc=n;m.he=o;m.hd=p;q=k.hc;r=k.he;s=k.hd;t=n-q;u=o-r;p=p-s;m.hc=t;m.he=u;m.hd=p;q=k.hc-l.hc;r=k.he-l.he;s=k.hd-l.hd;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.hc=n;m.he=s;m.hd
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hc*q;s=m.he*q;q=m.hd*q;m.hc=r;m.he=s;m.hd=q;}k=b.iG;b.i9= -(i.hc*k.hc+i.he*k.he+i.hd*k.hd);b=a.kE.data[5];c=a.jU.data;i=c[4];k=c[0];l=c[1];m=b.iG;n=i.hc;o=i.he;p=i.hd;m.hc=n;m.he=o;m.hd=p;q=k.hc;r=k.he;s=k.hd;t=n-q;u=o-r;p=p-s;m.hc=t;m.he=u;m.hd=p;q=k.hc-l.hc;r=k.he-l.he;s=k.hd-l.hd;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.hc=n;m.he=s;m.hd=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hc*q;s=m.he*q;q=m.hd*q;m.hc=r;m.he=s;m.hd=q;}k=b.iG;b.i9= -(i.hc*k.hc+i.he
*k.he+i.hd*k.hd);},
AA0=()=>{let b,c,d,e,f,g,h,i,j;b=R(Bb,8);c=b.data;d=new Bb;B_();d.hc=(-1.0);d.he=(-1.0);d.hd=(-1.0);c[0]=d;d=new Bb;d.hc=1.0;d.he=(-1.0);d.hd=(-1.0);c[1]=d;d=new Bb;d.hc=1.0;d.he=1.0;d.hd=(-1.0);c[2]=d;d=new Bb;d.hc=(-1.0);d.he=1.0;d.hd=(-1.0);c[3]=d;d=new Bb;d.hc=(-1.0);d.he=(-1.0);d.hd=1.0;c[4]=d;d=new Bb;d.hc=1.0;d.he=(-1.0);d.hd=1.0;c[5]=d;d=new Bb;d.hc=1.0;d.he=1.0;d.hd=1.0;c[6]=d;d=new Bb;d.hc=(-1.0);d.he=1.0;d.hd=1.0;c[7]=d;AKK=b;b=Cb(24);e=b.data;Qv=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1|0;e[f]
=d.hc;j=i+1|0;e[i]=d.he;f=j+1|0;e[j]=d.hd;h=h+1|0;}ADc=new Bb;};
function Dm(){let a=this;C.call(a);a.jM=0.0;a.jJ=0.0;a.jK=0.0;a.jL=0.0;}
let Na=null,M_=null;
let ALy=()=>{let b;b=new Dm;b.jM=0.0;b.jJ=0.0;b.jK=0.0;b.jL=0.0;Na=b;b=new Dm;b.jM=0.0;b.jJ=0.0;b.jK=0.0;b.jL=0.0;M_=b;};
let R0=D();
let ADC=D();
function Bb(){let a=this;C.call(a);a.hc=0.0;a.he=0.0;a.hd=0.0;}
let Vd=null,Ve=null,Vc=null,ACE=null,AJi=null;
let B_=()=>{B_=Bz(Bb);TD();};
let L_=(a,b)=>{let c,d,e,f,g,h,i;c=a.he;d=b.hd;e=c*d;f=a.hd;g=b.he;h=e-f*g;e=b.hc;f=f*e;i=a.hc;d=f-i*d;c=i*g-c*e;a.hc=h;a.he=d;a.hd=c;return a;},
TD=()=>{let b;b=new Bb;B_();b.hc=1.0;b.he=0.0;b.hd=0.0;Vd=b;b=new Bb;b.hc=0.0;b.he=1.0;b.hd=0.0;Ve=b;b=new Bb;b.hc=0.0;b.he=0.0;b.hd=1.0;Vc=b;b=new Bb;b.hc=0.0;b.he=0.0;b.hd=0.0;ACE=b;AJi=D3();};
let YB=D();
let WT=D(Cv);
let IV=D(Eu);
let AD8=D();
let Un=D();
let AHs=D();
function Hg(){let a=this;C.call(a);a.iG=null;a.i9=0.0;}
let Ow=D(Bv);
let AHv=D();
let Uv=D();
let AE7=D();
let AHr=D();
let AC0=D(0);
let YN=D();
let AFL=D();
let H1=null;
let Ww=()=>{let b,c;H1=Cb(16384);b=0;while(b<16384){H1.data[b]=Qc((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=H1.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);};
function HL(){let a=this;C.call(a);a.rR=null;a.rc=null;}
let Tv=null,AJn=null;
let I_=()=>{I_=Bz(HL);V$();};
let V$=()=>{let b,c,d,e,f,g,h,$$je;Gy();b=Fl;c=Du(b,Bk(C4));b=c<0?null:b.jF.data[c];if(b===null){b=new H9;d=new Cy;d.iJ=0;d.hW=R(C,4);b.mp=d;b.my=100;a:{try{d=Os(Bk(C4),null);break a;}catch($$e){$$je=BP($$e);if($$je instanceof CE){}else{throw $$e;}}try{d=Mn(Bk(C4),null);Pp(d,1);break a;}catch($$e){$$je=BP($$e);if($$je instanceof D_){}else{throw $$e;}}d=null;}b.oJ=d;if(d===null){b=new BA;d=new K;d.g9=G(16);F(d,d.g7,A(30));if(Bk(C4).ih===null)Bk(C4).ih=V(Bk(C4).hG.$meta.name);e=Bk(C4).ih;F(d,d.g7,e);e=new H;f
=d.g9;g=f.data;c=d.g7;h=g.length;if(c>=0&&c<=(h-0|0)){e.g8=L(f.data,0,c);b.g$=1;b.g_=1;b.hb=e;E(b);}e=new I;e.g$=1;e.g_=1;E(e);}DE(Fl,Bk(C4),b);}Tv=b;e=new GV;e.nn=1;e.jB=S(4);AJn=e;};
let JY=D();
let ADy=D(JY);
let MV=D();
let AES=D();
let Lk=null;
let AMc=()=>{Lk=new Bw;};
function Bw(){let a=this;C.call(a);a.ix=0.0;a.iw=0.0;a.iv=0.0;a.iu=0.0;}
let Mz=null,Y8=null,ADo=null,AKs=null,ZD=null,ADR=0.0,S$=null,AI$=null,Sb=null,AHO=null,AIF=null,AEj=null,AHb=null,Yp=null,XQ=null,AFu=null,AJm=null,AHG=null,AKJ=null,SY=null,ZB=null,AKE=null,ACe=null,AJz=null,AIq=null,AG5=null,ACb=null,St=null,ABX=null,X8=null,Za=null,XB=null,ABS=null,AEV=null,AFM=null;
let Da=a=>{let b,c;b=a.ix;if(b<0.0)a.ix=0.0;else if(b>1.0)a.ix=1.0;c=a.iw;if(c<0.0)a.iw=0.0;else if(c>1.0)a.iw=1.0;c=a.iv;if(c<0.0)a.iv=0.0;else if(c>1.0)a.iv=1.0;c=a.iu;if(c<0.0)a.iu=0.0;else if(c>1.0)a.iu=1.0;return a;},
AIj=a=>{return Ih(((255.0*a.iu|0)<<24|(255.0*a.iv|0)<<16|(255.0*a.iw|0)<<8|255.0*a.ix|0)&(-16777217));},
BV=(b,c)=>{b.ix=((c&(-16777216))>>>24|0)/255.0;b.iw=((c&16711680)>>>16|0)/255.0;b.iv=((c&65280)>>>8|0)/255.0;b.iu=(c&255)/255.0;},
RO=()=>{let b;b=new Bw;b.ix=1.0;b.iw=1.0;b.iv=1.0;b.iu=1.0;Da(b);Mz=b;b=new Bw;BV(b,(-1077952513));Y8=b;b=new Bw;BV(b,2139062271);ADo=b;b=new Bw;BV(b,1061109759);AKs=b;b=new Bw;b.ix=0.0;b.iw=0.0;b.iv=0.0;b.iu=1.0;Da(b);ZD=b;ADR=AIj(Mz);b=new Bw;b.ix=0.0;b.iw=0.0;b.iv=0.0;b.iu=0.0;Da(b);S$=b;b=new Bw;b.ix=0.0;b.iw=0.0;b.iv=1.0;b.iu=1.0;Da(b);AI$=b;b=new Bw;b.ix=0.0;b.iw=0.0;b.iv=0.5;b.iu=1.0;Da(b);Sb=b;b=new Bw;BV(b,1097458175);AHO=b;b=new Bw;BV(b,1887473919);AIF=b;b=new Bw;BV(b,(-2016482305));AEj=b;b=new Bw;b.ix
=0.0;b.iw=1.0;b.iv=1.0;b.iu=1.0;Da(b);AHb=b;b=new Bw;b.ix=0.0;b.iw=0.5;b.iv=0.5;b.iu=1.0;Da(b);Yp=b;b=new Bw;BV(b,16711935);XQ=b;b=new Bw;BV(b,2147418367);AFu=b;b=new Bw;BV(b,852308735);AJm=b;b=new Bw;BV(b,579543807);AHG=b;b=new Bw;BV(b,1804477439);AKJ=b;b=new Bw;BV(b,(-65281));SY=b;b=new Bw;BV(b,(-2686721));ZB=b;b=new Bw;BV(b,(-626712321));AKE=b;b=new Bw;BV(b,(-5963521));ACe=b;b=new Bw;BV(b,(-1958407169));AJz=b;b=new Bw;BV(b,(-759919361));AIq=b;b=new Bw;BV(b,(-1306385665));AG5=b;b=new Bw;BV(b,(-16776961));ACb
=b;b=new Bw;BV(b,(-13361921));St=b;b=new Bw;BV(b,(-8433409));ABX=b;b=new Bw;BV(b,(-92245249));X8=b;b=new Bw;BV(b,(-9849601));Za=b;b=new Bw;b.ix=1.0;b.iw=0.0;b.iv=1.0;b.iu=1.0;Da(b);XB=b;b=new Bw;BV(b,(-1608453889));ABS=b;b=new Bw;BV(b,(-293409025));AEV=b;b=new Bw;BV(b,(-1339006721));AFM=b;};
let Ki=D();
let AGy=D(Ki);
let AKz=null;
let AFw=()=>{let b,c,d,e;b=new GG;c=Hk(16);b.kk=0;d=R(Ep,c);e=d.data;b.jI=d;b.mX=0.75;b.kZ=e.length*0.75|0;AKz=b;};
function Cy(){let a=this;C.call(a);a.hW=null;a.h3=0;a.iJ=0;a.m_=null;}
let Di=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=a.hW;d=c.data;e=a.h3;if(e!=d.length)f=c;else{g=e*1.75|0;if(8>g)g=8;h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new Ca;i.hG=h;f=i;h.classObject=f;}}f=DS(i);if(f===null){b=new CU;b.g$=1;b.g_=1;E(b);}if(f===Bk(CQ)){b=new Bs;b.g$=1;b.g_=1;E(b);}if(g<0){b=new DK;b.g$=1;b.g_=1;E(b);}f=D4(f.hG,g);j=f.data;k=a.h3;l=j.length;if(k<l)l=k;GP(c,0,f,0,l);a.hW=f;}f=f.data;g=a.h3;a.h3=g+1|0;f[g]=b;},
Xd=a=>{let b,c,d,e,f,g;b=a.hW;c=0;d=a.h3;e=null;if(c>d){e=new Bs;e.g$=1;e.g_=1;E(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.h3=0;},
Nq=a=>{let b;if(KR){b=new Fx;b.i3=1;b.lh=a;b.mw=1;return b;}if(a.m_===null){b=new Lo;b.nJ=a;b.on=1;a.m_=b;}return Zp(a.m_);};
function Ht(){let a=this;C.call(a);a.n7=0;a.kl=null;a.jF=null;a.py=0.0;a.oA=0;a.mP=0;a.mM=0;}
let Mw=null;
let ACu=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.py=c;d=G8(b,c);a.oA=d*c|0;b=d-1|0;a.mM=b;a.mP=DV(O(b));a.kl=R(C,d);a.jF=R(C,d);return;}e=new Bs;f=new K;f.g9=G(16);F(f,f.g7,A(40));GS(f,f.g7,c);g=new H;h=f.g9;i=h.data;d=f.g7;j=i.length;if(d>=0&&d<=(j-0|0)){g.g8=L(h.data,0,d);e.g$=1;e.g_=1;e.hb=g;E(e);}f=new I;f.g$=1;f.g_=1;E(f);},
DI=(a,b)=>{let c=new Ht();ACu(c,a,b);return c;},
Du=(a,b)=>{let c,d,e;if(b===null){c=new Bs;c.g$=1;c.g_=1;c.hb=A(41);E(c);}d=a.kl;e=Bd(X(U(O(b.W()),B(2135587861, 2654435769)),a.mP));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.X(b))break;e=(e+1|0)&a.mM;}return e;},
DE=(a,b,c)=>{let d,e,f;d=Du(a,b);if(d>=0){e=a.jF.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.kl.data;e[d]=b;a.jF.data[d]=c;d=a.n7+1|0;a.n7=d;if(d>=a.oA)Vu(a,e.length<<1);return null;},
Vu=(a,b)=>{let c,d,e,f,g,h,i,j;a:{c=a.kl.data.length;a.oA=b*a.py|0;d=b-1|0;a.mM=d;a.mP=DV(O(d));e=a.kl;f=a.jF;a.kl=R(C,b);a.jF=R(C,b);if(a.n7>0){d=0;while(true){if(d>=c)break a;g=e.data[d];if(g!==null){h=f.data[d];i=a.kl;b=Bd(X(U(O(g.W()),B(2135587861, 2654435769)),a.mP));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.mM;}j[b]=g;a.jF.data[b]=h;}d=d+1|0;}}}},
ALh=()=>{Mw=new C;};
let Zd=D(Ht);
let AJS=D();
function Et(){let a=this;C.call(a);a.ji=0;a.jp=0;a.kh=0;a.j0=0;a.kq=0;a.j$=null;a.mL=0;a.mD=0;}
let AJ7=D();
let AAv=D();
let ADz=D();
let ABO=D();
let No=D();
let Sa=null;
let Ol=()=>{Ol=Bz(No);AAB();};
let AAB=()=>{let b,c,d;b=new HQ;Kl();c=new Bb;B_();b.pV=c;d=new Bb;b.p6=d;b.pD=new Bb;b.p7=new Bb;c.hc=0.0;c.he=0.0;c.hd=0.0;d.hc=0.0;d.he=0.0;d.hd=0.0;AEc(b,c,d);Sa=b;};
let SX=D();
let ACy=D();
let ABr=D();
let AB9=D();
let AG6=D();
let YI=D();
let AIt=D();
let Z_=D();
let UB=D();
let VG=D();
let Hf=D(BR);
let AKt=null,AIw=null,Yb=null;
let Y_=()=>{let b,c;b=new Hf;b.hw=A(42);b.hl=0;AKt=b;c=new Hf;c.hw=A(43);c.hl=1;AIw=c;Yb=P(Hf,[b,c]);};
let ACB=D();
let O2=D(0);
let CG=D();
let S8=D(CG);
let S7=D(CG);
let AAX=D(CG);
let WM=D(CG);
let AFe=D(CG);
let IR=D(CG);
let WB=D(IR);
let FO=D(0);
let XA=D();
let D5=D(0);
let AE6=D();
let AIp=D();
let Vf=D();
let DC=D();
let AEe=D(DC);
let FL=D(DC);
let CR=D(FL);
let XP=null;
let MU=()=>{MU=Bz(CR);TB();};
let TB=()=>{let b;b=new Bb;B_();XP=b;};
let AER=D();
let AG4=D(CR);
let AAm=D(CR);
let AI8=D(DC);
let Nf=null;
let ALo=()=>{Nf=Cb(3);};
let Il=D(DC);
let SR=D(Il);
let Wx=D(CR);
let Fj=D(FL);
let ABI=D(Fj);
let AAj=D(CR);
let AB_=D(CR);
let ABG=D(Fj);
let FJ=D(BR);
let ABw=null,AD_=null,XR=null,Vw=null;
let ADv=()=>{let b,c,d;b=new FJ;b.hw=A(44);b.hl=0;ABw=b;c=new FJ;c.hw=A(45);c.hl=1;AD_=c;d=new FJ;d.hw=A(46);d.hl=2;XR=d;Vw=P(FJ,[b,c,d]);};
let Ev=D();
let Jx=D(Ev);
let RG=D(Jx);
let FX=D(BR);
let AIv=null,AI1=null,Rp=null,AJd=null;
let ZP=()=>{let b,c,d;b=new FX;b.hw=A(47);b.hl=0;AIv=b;c=new FX;c.hw=A(48);c.hl=1;AI1=c;d=new FX;d.hw=A(49);d.hl=2;Rp=d;AJd=P(FX,[b,c,d]);};
let Cf=D(Ev);
let F9=D(Cf);
let U6=D();
let E5=D(Cf);
let AHA=null,AHz=null,AHB=null,AIB=null;
let PG=()=>{PG=Bz(E5);ABd();};
let ABd=()=>{let b;b=new Bb;B_();AHA=b;AHz=new Bb;AHB=new Bb;b=new Dm;b.jM=0.0;b.jJ=0.0;b.jK=0.0;b.jL=1.0;AIB=b;};
let Ds=D(E5);
let Ex=D(Ds);
let Xw=D(Ex);
let FV=D(Cf);
let AKF=D(FV);
let AG1=D(Cf);
let Ef=D(Cf);
let S1=D(Ef);
let Fv=D(Cf);
let Xo=D(Ds);
let Zl=D(Ds);
let H0=D(Cf);
let AEf=D(H0);
let Uc=D(Ef);
let AAt=D(Ex);
let AD9=D(Cf);
let ACk=D(Ef);
let AEk=D(Cf);
let AFH=D(E5);
let Zs=D(Cv);
let UK=D(Cv);
let UZ=D(Ds);
let AEJ=D(Fv);
let AI9=D(F9);
let AC9=D(F9);
let AFt=D(Fv);
let ABf=D(Ex);
let AJJ=D(FV);
let DA=D(Ev);
let ABN=D(DA);
let El=D();
let AE1=D(El);
let AF0=D(DA);
let AG0=D(DA);
let AHV=D(El);
let W$=D(DA);
let AG7=D(El);
let HH=D(0);
let Kr=D(0);
function Ca(){let a=this;C.call(a);a.ih=null;a.hG=null;a.k1=null;}
let PM=0;
let ALU=b=>{let c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Ca;c.hG=b;d=c;b.classObject=d;}return c;},
DS=a=>{let b,c,d;b=a.hG.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new Ca;c.hG=b;d=c;b.classObject=d;}}return c;},
AAQ=()=>{C5.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CQ,callable:null},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:CQ,callable:null}];C4.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CQ,callable:null},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes:[C4],returnType:CQ,callable:null},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CQ,callable:null},{name:"toString",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:H,callable:null}];},
Kf=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.hG.$meta.primitive?1:0)&&!(a.hG.$meta.item===null?0:1)){if(a.k1===null){if(!PM){PM=1;AAQ();}b=a.hG.$meta.methods;a.k1=R(FN,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof E0())?e:e[Be]===true?e:e.hz;g=V(f.name);if(g===A(50))h=1;else if(!(A(50) instanceof H))h=0;else{e=A(50);h=g.g8!==e.g8?0:1;}if(h){g=f.parameterTypes;i=R(Ca,g.length);j=i.data;h=0;k=j.length;while(h<k){l=g[h];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new Ca;e.hG
=l;m=e;l.classObject=m;}}j[h]=e;h=h+1|0;}j=a.k1.data;h=c+1|0;e=new FN;g=V(f.name);k=f.modifiers;n=f.accessLevel;f=CC(f.callable,"call");e.rO=a;e.rM=g;e.n$=k;e.nH=n;e.n2=i;e.sm=f;j[c]=e;c=h;}d=d+1|0;}i=a.k1;b=i.constructor;if(b===null)e=null;else{e=b.classObject;if(e===null){e=new Ca;e.hG=b;f=e;b.classObject=f;}}e=DS(e);if(e===null){e=new CU;e.g$=1;e.g_=1;E(e);}if(e===Bk(CQ)){e=new Bs;e.g$=1;e.g_=1;E(e);}if(c<0){e=new DK;e.g$=1;e.g_=1;E(e);}i=i.data;f=D4(e.hG,c);d=i.length;if(c<d)d=c;c=0;while(c<d){f.data[c]
=i[c];c=c+1|0;}a.k1=f;}return a.k1.p();}return R(FN,0);},
AJj=a=>{let b,c,d,e,f,g,h,i,j,k;b=(Kf(a)).data;c=b.length;d=R(FN,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(Ml(h.n$,h.nH)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=B4(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new Ca;h.hG=j;k=h;j.classObject=k;}}j=DS(h);if(j===null){h=new CU;h.g$=1;h.g_=1;E(h);}if(j===Bk(CQ)){h=new Bs;h.g$=1;h.g_=1;E(h);}if(f<0){h=new DK;h.g$=1;h.g_=1;E(h);}k=D4(j.hG,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;},
AGI=(a,b)=>{let c,d,e,f;c=(Kf(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new FC;f.g$=1;f.g_=1;E(f);}f=c[e];if(PT(f.n2.p(),b))break;e=e+1|0;}return f;},
AGG=(a,b)=>{let c,d,e,f,g;c=(Kf(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new FC;f.g$=1;f.g_=1;E(f);}f=c[e];g=!(Ml(f.n$,f.nH)&1)?0:1;if(g&&PT(f.n2.p(),b))break;e=e+1|0;}return f;};
let VM=D();
let BL=(b,c)=>{let name='jso$functor$'+c;let result=b[name];if(typeof result!=='function'){let fn=function(){return b[c].apply(b,arguments);};result=()=>fn;b[name]=result;}return result();},
CC=(b,c)=>{if(typeof b!=='function')return b;let result={};result[c]=b;return result;};
let UP=D();
let R6=b=>{let copy=new b.constructor();for(let field in b){if(b.hasOwnProperty(field)){copy[field]=b[field];}}return copy;},
OD=(b,c)=>{let d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(OD(d[e],c))return 1;e=e+1|0;}return 0;},
Dz=b=>{setTimeout(()=>{AL0(Le)(b);},0);},
Le=b=>{b.bg();},
JK=(b,c)=>{setTimeout(()=>{Le(b);},c);},
AAC=()=>{return [];};
function CT(){let a=this;C.call(a);a.hb=null;a.ku=null;a.g$=0;a.g_=0;a.rB=null;}
let Y=a=>{a.g$=1;a.g_=1;},
AL6=()=>{let a=new CT();Y(a);return a;},
Bl=a=>{return a;},
AF9=a=>{return a.hb;},
ALs=a=>{return a.bh();},
AL2=a=>{let b;b=a.ku;if(b===a)b=null;return b;},
ALw=a=>{let b,c;if(Ct===null){b=new Eo;c=new B5;c.h9=BF(32);b.ij=c;c=new K;BB(c);c.g9=G(16);b.h_=c;b.h$=G(32);b.id=0;b.ie=BX;Ct=b;}Hr(a,Ct);},
Hr=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new Ca;d.hG=c;e=d;c.classObject=e;}}if(d.ih===null)d.ih=V(d.hG.$meta.name);CI(Br(d.ih));d=a.bh();if(d!==null){c=new K;c.g9=G(16);F(c,c.g7,A(51));F(c,c.g7,d);e=new H;f=c.g9;g=f.data;h=c.g7;i=g.length;if(h>=0&&h<=(i-0|0)){e.g8=L(f.data,0,h);CI(Br(e));}else{b=new I;b.g$=1;b.g_=1;E(b);}}a:{CI("\n");f=a.rB;if(f!==null){f=f.data;j=f.length;h=0;while(true){if(h>=j)break a;e=f[h];CI("\tat ");c=A(2);if(e!==null)c=e.bj();CI(Br(c));CI("\n");h
=h+1|0;}}}c=a.ku;if(c!==null&&c!==a){CI("Caused by: ");Hr(a.ku,b);}};
let CE=D(CT);
let E4=a=>{a.g$=1;a.g_=1;},
AKY=()=>{let a=new CE();E4(a);return a;};
let BA=D(CE);
let HI=a=>{a.g$=1;a.g_=1;},
ALj=()=>{let a=new BA();HI(a);return a;},
AIX=(a,b)=>{a.g$=1;a.g_=1;a.hb=b;},
ALa=a=>{let b=new BA();AIX(b,a);return b;};
let AAf=D(BA);
let J5=D(0);
function H(){C.call(this);this.h5=0;}
let QK=null,I4=null,KB=null;
let ST=(a,b)=>{a.g8=L(b.data,0,b.data.length);},
AK0=a=>{let b=new H();ST(b,a);return b;},
Yz=(a,b)=>{a.g8=b;},
OX=a=>{let b=new H();Yz(b,a);return b;},
Jq=(a,b,c)=>{let d,e,f;if((c+b.g8.length|0)>a.g8.length)return 0;d=0;a:{b:{while(d<b.g8.length){if(d<0)break a;if(d>=b.g8.length)break a;e=b.g8.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=a.g8.length)break b;if(e!=a.g8.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new Q;b.g$=1;b.g_=1;E(b);}b=new Q;b.g$=1;b.g_=1;E(b);},
FY=(a,b,c)=>{let d,e,f;if(0>c)c=0;if(b<65536){d=b&65535;while(true){if(c>=a.g8.length)return (-1);if(a.g8.charCodeAt(c)==d)break;c=c+1|0;}return c;}e=(55296|(b-65536|0)>>10&1023)&65535;f=(56320|b&1023)&65535;while(true){if(c>=(a.g8.length-1|0))return (-1);if(a.g8.charCodeAt(c)==e&&a.g8.charCodeAt((c+1|0))==f)break;c=c+1|0;}return c;},
Fo=(a,b,c)=>{let d,e,f,g;d=a.g8.length-1|0;if(c<d)d=c;if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.g8.charCodeAt(d)==e)break;d=d+(-1)|0;}return d;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){if(d<1)return (-1);if(a.g8.charCodeAt(d)==g){b=d-1|0;if(a.g8.charCodeAt(b)==f)break;}d=d+(-1)|0;}return b;},
Mh=(a,b,c)=>{let d,e,f,g;if(0>c)c=0;d=a.g8.length-b.g8.length|0;a:{b:{c:while(true){if(c>d)return (-1);e=0;while(true){if(e>=b.g8.length)break c;f=c+e|0;if(f<0)break a;if(f>=a.g8.length)break a;g=a.g8.charCodeAt(f);if(e<0)break b;if(e>=b.g8.length)break b;if(g!=b.g8.charCodeAt(e))break;e=e+1|0;}c=c+1|0;}return c;}b=new Q;b.g$=1;b.g_=1;E(b);}b=new Q;b.g$=1;b.g_=1;E(b);},
WX=(a,b,c)=>{let d,e,f;d=a.g8.length-b.g8.length|0;if(c<d)d=c;a:{b:{c:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.g8.length)break c;f=d+e|0;if(f<0)break a;if(f>=a.g8.length)break a;f=a.g8.charCodeAt(f);if(e<0)break b;if(e>=b.g8.length)break b;if(f!=b.g8.charCodeAt(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}b=new Q;b.g$=1;b.g_=1;E(b);}b=new Q;b.g$=1;b.g_=1;E(b);},
Cc=(a,b,c)=>{let d,e,f;d=a.g8.length;e=B4(b,c);if(!e)return I4;if(!b&&c==d)return a;if(b>=0&&e<=0&&c<=d)return OX(a.g8.substring(b,c));f=new Q;f.g$=1;f.g_=1;E(f);},
Cm=(a,b)=>{let c,d,e,f;c=a.g8.length-b.g8.length|0;d=0;a:{b:{while(d<=c){e=0;while(true){if(e>=b.g8.length)return 1;f=d+e|0;if(f<0)break a;if(f>=a.g8.length)break a;f=a.g8.charCodeAt(f);if(e<0)break b;if(e>=b.g8.length)break b;if(f!=b.g8.charCodeAt(e))break;e=e+1|0;}d=d+1|0;}return 0;}b=new Q;b.g$=1;b.g_=1;E(b);}b=new Q;b.g$=1;b.g_=1;E(b);},
Pv=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new K;d.g9=G(16);e=a.g8.length-b.g8.length|0;f=0;a:{b:{c:while(true){if(f>e){b=Cc(a,f,a.g8.length);g=d.g7;if(b===null)b=A(2);F(d,g,b);b=new H;h=d.g9;i=h.data;j=d.g7;e=i.length;if(j>=0&&j<=(e-0|0)){b.g8=L(h.data,0,j);return b;}b=new I;b.g$=1;b.g_=1;E(b);}k=0;d:{while(k<b.g8.length){j=f+k|0;if(j<0)break b;if(j>=a.g8.length)break b;j=a.g8.charCodeAt(j);if(k<0)break c;if(k>=b.g8.length)break c;if(j!=b.g8.charCodeAt(k)){if(f<0)break a;if(f>=a.g8.length)break a;k=a.g8.charCodeAt(f);j
=d.g7;Bn(d,j,j+1|0);d.g9.data[j]=k;break d;}k=k+1|0;}F(d,d.g7,c===null?A(2):c);f=f+(b.g8.length-1|0)|0;}f=f+1|0;}b=new Q;b.g$=1;b.g_=1;E(b);}b=new Q;b.g$=1;b.g_=1;E(b);}b=new Q;b.g$=1;b.g_=1;E(b);},
AAU=a=>{let b,c,d;b=0;c=a.g8.length-1|0;a:{while(true){if(b>c)break a;if(b<0)break;if(b>=a.g8.length)break;if(a.g8.charCodeAt(b)>32)break a;b=b+1|0;}d=new Q;d.g$=1;d.g_=1;E(d);}b:{while(b<=c){if(c<0)break b;if(c>=a.g8.length)break b;if(a.g8.charCodeAt(c)>32)break;c=c+(-1)|0;}return Cc(a,b,c+1|0);}d=new Q;d.g$=1;d.g_=1;E(d);},
Cn=a=>{return a;},
AIC=(a,b)=>{let c;if(a===b)return 1;if(!(b instanceof H))return 0;c=b;return a.g8!==c.g8?0:1;},
ADP=a=>{let b;a:{if(!a.h5){b=0;while(true){if(b>=a.g8.length)break a;a.h5=(31*a.h5|0)+a.g8.charCodeAt(b)|0;b=b+1|0;}}}return a.h5;},
AL$=()=>{let b;QK=G(0);b=new H;b.g8="";I4=b;KB=new Ka;};
let Dr=D();
function Ed(){Dr.call(this);this.jr=0;}
let KF=null,De=null;
let HV=(b,c)=>{if(b!==null)return QJ(b,0,b.g8.length,c);b=new B0;b.g$=1;b.g_=1;b.hb=A(52);E(b);},
QJ=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;if(c==d){b=new B0;b.g$=1;b.g_=1;b.hb=A(53);E(b);}if(e>=2&&e<=36){f=0;if(c>=0&&c<b.g8.length){a:{switch(b.g8.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=0;i=1+(2147483647/e|0)|0;if(g==d){b=new B0;b.g$=1;b.g_=1;E(b);}b:{while(g<d){j=g+1|0;if(g<0)break b;if(g>=b.g8.length)break b;g=AGs(b.g8.charCodeAt(g));if(g<0){k=new B0;l=Cc(b,c,d);b=new K;b.g9=G(16);F(b,b.g7,A(54));c=b.g7;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.g9;o=n.data;d=b.g7;e
=o.length;if(d>=0&&d<=(e-0|0)){m.g8=L(n.data,0,d);k.g$=1;k.g_=1;k.hb=m;E(k);}b=new I;b.g$=1;b.g_=1;E(b);}if(g>=e){k=new B0;l=Cc(b,c,d);b=new K;b.g9=G(16);F(b,b.g7,A(55));J(b,b.g7,e,10);F(b,b.g7,A(51));c=b.g7;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.g9;o=n.data;d=b.g7;e=o.length;if(d>=0&&d<=(e-0|0)){m.g8=L(n.data,0,d);k.g$=1;k.g_=1;k.hb=m;E(k);}b=new I;b.g$=1;b.g_=1;E(b);}if(h>i){b=new B0;b.g$=1;b.g_=1;b.hb=A(56);E(b);}h=CB(e,h)+g|0;if(h<0){if(j==d&&h==(-2147483648)&&f)return (-2147483648);k=new B0;l=Cc(b,c,d);b
=new K;b.g9=G(16);F(b,b.g7,A(57));c=b.g7;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.g9;o=n.data;d=b.g7;e=o.length;if(d>=0&&d<=(e-0|0)){m.g8=L(n.data,0,d);k.g$=1;k.g_=1;k.hb=m;E(k);}b=new I;b.g$=1;b.g_=1;E(b);}g=j;}if(f)h= -h|0;return h;}b=new Q;b.g$=1;b.g_=1;E(b);}b=new Q;b.g$=1;b.g_=1;E(b);}b=new B0;k=new K;k.g9=G(16);F(k,k.g7,A(58));J(k,k.g7,e,10);m=new H;n=k.g9;o=n.data;d=k.g7;e=o.length;if(d>=0&&d<=(e-0|0)){m.g8=L(n.data,0,d);b.g$=1;b.g_=1;b.hb=m;E(b);}b=new I;b.g$=1;b.g_=1;E(b);},
Ib=b=>{if(b!==null)return QJ(b,0,b.g8.length,10);b=new B0;b.g$=1;b.g_=1;b.hb=A(52);E(b);},
DP=()=>{let b,c,d,e,f;a:{if(De===null){b=R(Ed,256);c=b.data;De=b;d=0;e=c.length;while(true){if(d>=e)break a;f=new Ed;f.jr=d-128|0;c[d]=f;d=d+1|0;}}}},
AGs=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
Lb=b=>{let c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;},
DX=b=>{let c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;},
AL7=()=>{KF=Bk(ACN);};
function T(){let a=this;C.call(a);a.g9=null;a.g7=0;}
let Gi=a=>{a.g9=G(16);},
ALr=()=>{let a=new T();Gi(a);return a;},
Dp=(a,b)=>{a.g9=G(b);},
AMd=a=>{let b=new T();Dp(b,a);return b;},
F=(a,b,c)=>{let d,e,f;if(b>=0&&b<=a.g7){if(c===null)c=A(2);else if(c.g8.length?0:1)return a;Gh(a,a.g7+c.g8.length|0);d=a.g7-1|0;while(d>=b){a.g9.data[d+c.g8.length|0]=a.g9.data[d];d=d+(-1)|0;}a.g7=a.g7+c.g8.length|0;e=0;a:{while(e<c.g8.length){f=a.g9;d=b+1|0;if(e<0)break a;if(e>=c.g8.length)break a;f.data[b]=c.g8.charCodeAt(e);e=e+1|0;b=d;}return a;}c=new Q;c.g$=1;c.g_=1;E(c);}c=new Q;c.g$=1;c.g_=1;E(c);},
J=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if(DN(c,d)<0){if(e)Bn(a,b,b+1|0);else{Bn(a,b,b+2|0);f=a.g9.data;g=b+1|0;f[b]=45;b=g;}a.g9.data[b]=Kc(c,d);}else{h=1;i=1;j=C8((-1),d);b:{while(true){k=CB(h,d);if(DN(k,c)>0){k=h;break b;}i=i+1|0;if(DN(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bn(a,b,b+i|0);if(e)e=b;else{f=a.g9.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.g9.data;b=e+1|0;f[e]=Kc(C8(c,k),d);c=ALJ(c,k);k=C8(k,d);e=b;}}}return a;},
GS=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=B4(c,0.0);if(!d){if(1.0/c===Infinity){Bn(a,b,b+3|0);e=a.g9.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bn(a,b,b+4|0);e=a.g9.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bn(a,b,b+3|0);e=a.g9.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bn(a,b,b+8|0);d=b;}else{Bn(a,b,b+9|0);e=a.g9.data;d=b+1|0;e[b]=45;}e=a.g9.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=M1;ACQ(c,f);d=f.nA;g=f.nq;h=f.oY;i=1;j=1;if(h)j=2;k=9;l=AHp(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g<0){i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}else{i=g+1|0;o=i+1|0;if(k>o)o=k;g=0;k=o;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bn(a,b,b+(j+(k+m|0)|0)|0);if(!h)j=b;else{e=a.g9.data;j=b+1|0;e[b]=45;}p=100000000;if(n){e=a.g9.data;b=j+1|0;e[j]=48;j=b+1|0;e[b]=46;while(true){b=m+(-1)|0;if(m<=0)break;o
=j+1|0;e[j]=48;m=b;j=o;}}o=0;while(o<k){if(p<=0)q=0;else{q=d/p|0;d=d%p|0;}e=a.g9.data;b=j+1|0;e[j]=(48+q|0)&65535;i=i+(-1)|0;if(i)j=b;else{j=b+1|0;e[b]=46;}p=p/10|0;o=o+1|0;}if(g){e=a.g9.data;b=j+1|0;e[j]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)o=d;else{o=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[o]=(48+(g%10|0)|0)&65535;}return a;},
Md=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=B4(c,0.0);if(!d){if(1.0/c===Infinity){Bn(a,b,b+3|0);e=a.g9.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bn(a,b,b+4|0);e=a.g9.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bn(a,b,b+3|0);e=a.g9.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bn(a,b,b+8|0);d=b;}else{Bn(a,b,b+9|0);e=a.g9.data;d=b+1|0;e[b]=45;}e=a.g9.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=Mo;ZQ(c,f);g=f.nW;h=f.ng;i=f.oR;j=1;k=1;if(i)k=2;l=18;m=AEU(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h<0){j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}else{j=h+1|0;d=j+1|0;if(l>d)d=l;h=0;l=d;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bn(a,b,b+(k+(l+n|0)|0)|0);if(!i)i=b;else{e=a.g9.data;i=b+1|0;e[b]=45;}p=B(1569325056, 23283064);if(o){e=a.g9.data;b=i+1|0;e[i]=48;i=b+1|0;e[b]
=46;while(true){b=n+(-1)|0;if(n<=0)break;d=i+1|0;e[i]=48;n=b;i=d;}}q=0;while(q<l){if(WU(p,BM))d=0;else{d=Bd(Jz(g,p));g=Sf(g,p);}e=a.g9.data;b=i+1|0;e[i]=(48+d|0)&65535;j=j+(-1)|0;if(j)i=b;else{i=b+1|0;e[b]=46;}p=Jz(p,O(10));q=q+1|0;}if(h){e=a.g9.data;n=i+1|0;e[i]=69;if(h>=0)d=n;else{h= -h|0;d=n+1|0;e[n]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;n=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)n=d;else{n=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[n]=(48+(h%10|0)|0)&65535;}return a;},
AHp=b=>{let c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;},
AEU=b=>{let c,d,e,f,g;c=O(1);d=0;e=16;f=Kt.data;g=f.length-1|0;while(g>=0){if(C6(Sf(b,U(c,f[g])),BM)){d=d|e;c=U(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;},
Ij=(a,b,c)=>{F(a,b,c===null?A(2):c.bj());return a;},
Gh=(a,b)=>{let c,d,e,f,g,h;c=a.g9.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=G(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.g9=g;},
ACU=a=>{let b,c,d,e,f;b=new H;c=a.g9;d=c.data;e=a.g7;f=d.length;if(e>=0&&e<=(f-0|0)){b.g8=L(c.data,0,e);return b;}b=new I;b.g$=1;b.g_=1;E(b);},
KU=(a,b,c,d,e)=>{let f,g,h,i;Bn(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.g9.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
Qs=(a,b)=>{let c,d,e,f;if(b>=0){c=a.g7;if(b<c){c=c-1|0;a.g7=c;while(b<c){d=a.g9.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Q;f.g$=1;f.g_=1;E(f);},
AIP=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=B4(b,c);if(d<=0){e=a.g7;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.g7=e-(c-b|0)|0;g=0;while(g<f){h=a.g9.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new Q;i.g$=1;i.g_=1;E(i);},
Bn=(a,b,c)=>{let d,e,f,g;d=a.g7;e=d-b|0;a.bp((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.g9.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.g7=a.g7+(c-b|0)|0;};
let IB=D(0);
let K=D(T);
let AJx=a=>{a.g9=G(16);},
E6=()=>{let a=new K();AJx(a);return a;},
AC5=(a,b)=>{J(a,a.g7,b,10);return a;},
R4=(a,b)=>{let c;c=a.g7;Bn(a,c,c+1|0);a.g9.data[c]=b;return a;},
AIO=(a,b,c)=>{AIP(a,b,c);return a;},
Cw=(a,b,c)=>{F(a,b,c);return a;},
AAO=(a,b,c,d,e)=>{let f,g,h,i;Bn(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.g9.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
WA=(a,b,c,d)=>{let e,f,g,h,i;e=a.g7;Bn(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.g9.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
Ua=a=>{return a.g7;},
Fr=a=>{let b,c,d,e,f;b=new H;c=a.g9;d=c.data;e=a.g7;f=d.length;if(e>=0&&e<=(f-0|0)){b.g8=L(c.data,0,e);return b;}b=new I;b.g$=1;b.g_=1;E(b);},
AA$=(a,b)=>{Gh(a,b);},
ABU=(a,b,c)=>{Bn(a,b,b+1|0);a.g9.data[b]=c;return a;},
Cs=(a,b,c)=>{F(a,b,c);return a;};
function M6(){let a=this;C.call(a);a.ow=0;a.qQ=0;a.qc=0;a.o3=null;a.qL=0;a.sF=null;a.oK=0;a.qY=null;a.l8=0;a.kN=0;a.nr=0;a.oz=0;a.pw=0;a.pe=0;a.qq=0;a.pT=0;a.p1=0;a.oo=0;a.mB=0;}
let Tt=(a,b)=>{a.ow=0;a.qQ=1;a.qc=0;a.qL=1;a.sF=A(59);a.oK=0;a.l8=(-1);a.kN=(-1);a.nr=0;a.oz=0;a.pw=0;a.pe=0;a.qq=0;a.pT=0;a.p1=0;a.oo=0;a.mB=1;a.qY=b;},
AJ9=a=>{let b=new M6();Tt(b,a);return b;};
let L3=D(0);
function II(){let a=this;C.call(a);a.ka=null;a.lH=null;a.pu=null;a.pW=null;a.rY=null;a.jx=null;a.mb=null;a.me=null;a.l4=null;a.j6=null;a.lj=null;a.m9=0;a.op=0;a.rh=null;a.kA=0;a.l6=null;a.ry=null;a.rl=null;a.lS=null;a.oC=null;a.kd=null;}
let Fe=null;
let Ma=(a,b,c)=>{let d;d=new Cy;d.iJ=1;d.hW=R(C,4);a.l4=d;a.lj=J3;a.m9=(-1);a.op=1;a.kA=1;a.ry=DI(51,0.800000011920929);d=new Cy;d.iJ=1;d.hW=R(C,16);a.lS=d;d=new Cy;d.iJ=1;d.hW=R(C,16);a.oC=d;Eh();a.j6=Fs;a.jx=c;a.mb=b;AGg(a);},
AK2=(a,b)=>{let c=new II();Ma(c,a,b);return c;},
AGg=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;Fe=ACX();EJ();CD(DY,A(60),A(59));b=V(Fe.userAgent);EJ();CD(DY,A(61),b);if(Fe.windows?1:0){EJ();CD(DY,A(62),A(63));}else if(Fe.macOS?1:0){EJ();CD(DY,A(62),A(64));}else if(!(Fe.linux?1:0)){EJ();CD(DY,A(62),A(65));}else{EJ();CD(DY,A(62),A(10));}c=new Lf;d=a.jx.oK;c.qs=0;c.qW=0;c.iF=1;c.iF=d;ET=c;Eh();b=V(Fs.je.location.href);a.kd=b;if(Cm(b,A(66))){c=Pv(a.kd,A(67),A(59));a.kd=c;a.kd=Pv(c,A(68),A(59));}e=FY(a.kd,63,0);if(e>=0)a.kd=Cc(a.kd,0,e);c=a.jx;FR=c.qQ;b=AFb(c);a.ka=b;c
=ACW(a.kd,b.h6,a);a.l6=c;d=a.jx.qL;f=ET;g=c.mh;h=new K;h.g9=G(16);i=h.g7;if(g===null)g=A(2);Cw(h,i,g);Cw(h,h.g7,A(69));g=new H;j=h.g9;k=j.data;l=h.g7;m=k.length;if(l>=0&&l<=(m-0|0)){g.g8=L(j.data,0,l);h=new K;h.g9=G(16);F(h,h.g7,g);F(h,h.g7,A(70));g=new H;j=h.g9;k=j.data;l=h.g7;m=k.length;if(l>=0&&l<=(m-0|0)){g.g8=L(j.data,0,l);h=new MH;h.ln=c;h.o1=A(70);h.o0=d;if(f.iF){if(BH===null){c=new Ck;b=new B5;BB(b);b.h9=BF(32);DL(c);c.ij=b;b=new K;Gi(b);c.h_=b;c.h$=G(32);c.id=0;c.ie=BX;BH=c;}c=new K;c.g9=G(16);Cw(c,
c.g7,A(71));Cw(c,c.g7,g);b=new H;j=c.g9;k=j.data;i=c.g7;l=k.length;if(i>=0&&i<=(l-0|0)){b.g8=L(j.data,0,i);BI(Br(b));BI("\n");}else{c=new I;c.g$=1;c.g_=1;E(c);}}a:{f.hM=f.hM+1|0;c=new Fh;c.jk=f;c.ki=1;c.jf=g;c.jt=h;b=null;g=null;c.iO=new C;c.iM=1;c.jc=g;c.js=b;e=B9;B9=e+1|0;c.jq=O(e);b=new Dj;b.jd=c;Dz(b);a.lH=Ur(a.ka.h6);c=new PA;c.sn=a.l6;a.pu=c;c=new OY;b=new GG;d=Hk(16);b.kk=0;k=R(Ep,d);j=k.data;b.jI=k;b.mX=0.75;b.kZ=j.length*0.75|0;c.rU=b;a.pW=c;a.rh=new M5;c=new OU;c.rV=0;c.ml=1;b=new I0;b.md=c;c.rr=b;c.nV
=A(59);a.rl=c;if(a.jx.qc){g=a.l6;b=new KJ;b.q_=a;n=ET;g=g.mh;h=new K;h.g9=G(16);Cs(h,h.g7,g===null?A(2):Cn(g));Cs(h,h.g7,Cn(A(69)));f=new H;j=h.g9;k=j.data;i=h.g7;l=k.length;if(i>=0&&i<=(l-0|0)){f.g8=L(j.data,0,i);g=new K;g.g9=G(16);Cw(g,g.g7,f);Cw(g,g.g7,A(72));c=new H;j=g.g9;k=j.data;i=g.g7;l=k.length;if(i>=0&&i<=(l-0|0)){c.g8=L(j.data,0,i);Ke(n,1,c,b);break a;}c=new I;c.g$=1;c.g_=1;E(c);}c=new I;c.g$=1;c.g_=1;E(c);}}Dc=a;c=a.ka;Cl=c;b=c.k2;D0=b;Bx=b;En=c.pX;Mj=a.lH;AA7=a.pu;AFm=a.pW;c=new MA;c.qn=null;c.qn
=AIr();a.rY=c;ABz=c;f=a.j6.je.document;b=new HA;b.mY=a;f.addEventListener("visibilitychange",BL(b,"handleEvent"));c=a.j6;c.l$=a;requestAnimationFrame(BL(c,"onAnimationFrame"));c=a.jx;if(!c.l8&&!c.kN?1:0){c=a.j6;g=new HB;g.lw=a;g=CC(g,"handleEvent");c.je.addEventListener("resize",BL(g,"handleEvent"));}return;}c=new I;c.g$=1;c.g_=1;E(c);}c=new I;c.g$=1;c.g_=1;E(c);},
ZH=a=>{let b,c,d,e,f,g,h,$$je;b=a.lj;a:{try{b:{Jg();switch(Pb.data[AG9(b)]){case 1:c=ZU(RW());if(!c){a.lj=GN;d=window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break b;}e=a.l6.nN;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=E6();R4(AC5(g,f),37);h=Fr(g);d.setProperty("width",Br(h));}}break b;case 2:break;default:break b;}if(a.mb!==null){b=a.me;if(b!==null){AHj(b);XS(a.me);}W4(a.lH,null);Np(a.lH);Xd(a.lS);a.me
=a.mb;a.mb=null;a.lj=HC;a.ka.mS=BM;}Tb(a,a.me);}}catch($$e){$$je=BP($$e);if($$je instanceof CT){h=$$je;break a;}else{throw $$e;}}b=a.j6;b.l$=a;requestAnimationFrame(BL(b,"onAnimationFrame"));return;}if(Ct===null){b=new Eo;d=new B5;d.h9=BF(32);BB(b);b.ij=d;d=new K;Dp(d,16);b.h_=d;b.h$=G(32);b.id=0;b.ie=BX;Ct=b;}Hr(h,Ct);E(h);},
Tb=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;V0(a.ka);c=Cl.h6.width;d=Cl.h6.height;e=0;if(a.lj===HC){a.lj=GN;b.qS=CZ();f=new IC;g=X2(Rz(0,1,0),ACa(0,1,0));if(!g.kb){b=new Bf;f=new K;f.g9=G(16);F(f,f.g7,A(73));if(!g.kb)h=g.jA;else{h=Bx.bY(g.i0);g.jA=h;}F(f,f.g7,h);h=new H;i=f.g9;j=i.data;k=f.g7;d=j.length;if(k>=0&&k<=(d-0|0)){h.g8=L(i.data,0,k);b.g$=1;b.g_=1;b.hb=h;E(b);}b=new I;HI(b);E(b);}N2(f,2073602,0,1,0,g);f.st=1;b.lZ=f;f=new Oe;h=new Mu;AFl(h);h.oX=1.0;l=new Bb;B_();h.qg=l;h.ok=0.0;f.rK=new Bb;f.oZ
=1.0;f.m3=h;b.mI=f;f=new QE;f.q8=b;Mj.la=f;D0.b0(3042);e=1;}if(!(c==a.m9&&d==a.op&&!e)){a.m9=c;a.op=d;D0.b1(0,0,c,d);f=b.mI;f.oF=0;f.oG=0;f.p3=c;f.qv=d;m=c;n=f.oZ;m=m*n;n=d*n;f.qA=m;f.qN=n;Ql(f,1);Ql(b.mI,1);}f=a.oC;h=a.lS;i=h.hW;k=h.h3;j=f.hW;o=j.data;d=f.h3;c=d+k|0;if(c<=o.length)h=j;else{p=8;if(p<=c)p=c;d=d*1.75|0;if(p>d)d=p;l=j.constructor;if(l===null)h=null;else{h=l.classObject;if(h===null){h=new Ca;h.hG=l;g=h;l.classObject=g;}}q=h.hG.$meta.item;if(q===null)l=null;else{l=q.classObject;if(l===null){l=new Ca;l.hG
=q;h=l;q.classObject=h;}}if(l===null){b=new CU;Y(b);E(b);}if(l===Bk(CQ)){b=new Bs;Y(b);E(b);}if(d<0){b=new DK;Y(b);E(b);}h=D4(l.hG,d);l=h.data;r=f.h3;s=l.length;if(r<s)s=r;GP(j,0,h,0,s);f.hW=h;}GP(i,0,h,f.h3,k);f.h3=c;f=a.lS;i=f.hW;e=0;k=f.h3;h=null;if(e>k){b=new Bs;b.g$=1;b.g_=1;E(b);}while(e<k){j=i.data;d=e+1|0;j[e]=h;e=d;}f.h3=0;k=0;while(true){l=a.oC;e=l.h3;d=B4(k,e);if(d>=0){i=l.hW;k=0;f=null;if(k>e){b=new Bs;b.g$=1;b.g_=1;E(b);}while(k<e){j=i.data;d=k+1|0;j[k]=f;k=d;}l.h3=0;f=a.ka;t=Cj(f.mS,O(1));f.mS
=t;if(Wv(t,O(60))){d=Cl.oB|0;f=new K;f.g9=G(16);F(f,f.g7,A(74));J(f,f.g7,d,10);F(f,f.g7,A(75));h=new H;i=f.g9;j=i.data;k=f.g7;d=j.length;if(k>=0&&k<=(d-0|0)){h.g8=L(i.data,0,k);f=window.document;h=Br(h);f.title=h;D0.b3(0.0,0.0,0.0,1.0);D0.b4(16384);ADk(b);}else{b=new I;Y(b);E(b);}}Np(a.lH);return;}if(d>=0){f=new I;b=new K;b.g9=G(16);F(b,b.g7,A(76));J(b,b.g7,k,10);F(b,b.g7,A(77));e=l.h3;J(b,b.g7,e,10);h=new H;i=b.g9;j=i.data;k=b.g7;d=j.length;if(k>=0&&k<=(d-0|0)){h.g8=L(i.data,0,k);f.g$=1;f.g_=1;f.hb=h;E(f);}b
=new I;Y(b);E(b);}h=l.hW.data[k];l=h.nU.l_;g=l.hW.constructor;if(g===null)f=null;else{f=g.classObject;if(f===null){f=new Ca;f.hG=g;q=f;g.classObject=q;}}u=f.hG.$meta.item;if(u===null)g=null;else{g=u.classObject;if(g===null){g=new Ca;g.hG=u;q=g;u.classObject=q;}}e=l.h3;if(g===null){b=new CU;Y(b);E(b);}if(g===Bk(CQ)){b=new Bs;Y(b);E(b);}if(e<0)break;f=D4(g.hG,e);GP(l.hW,0,f,0,l.h3);i=f;h.nU.mJ.oN.o3.b6(i);k=k+1|0;}b=new DK;Y(b);E(b);};
let QI=D(0);
let JC=D();
let AHj=a=>{return;},
XS=a=>{return;};
function KX(){let a=this;JC.call(a);a.lZ=null;a.mI=null;a.qS=BM;}
let ADk=a=>{let b,c,d,e,f,g,h,i,j;b=a.lZ;c=a.mI.m3.lP;Gm(b.nT,c.iz);b.p0=0;d=a.qS;e=Z0(Nm(CZ(),d))*0.03125;f=0;while(f<1920){g=f;h=g-e;i=0;while(i<1080){c=a.lZ;j=Ha.data[((h*2607.5945876176133+16384.5|0)-16384|0)&16383];j=Ih(((isNaN(j)?1:0)?2143289344:In(j))&16777215|(-33554432));c.mq.data[c.lv+c.qk|0]=j;ACj(a.lZ,g,i,0.0);i=i+1|0;h=h+0.001953125;}f=f+1|0;}AH0(a.lZ);};
let AF8=D();
let Bj=(b,c)=>{let d,e,f,g,h,i,j,k,l;if(!b)return A(78);d=1<<c;e=d-1|0;f=(((32-Lb(b)|0)+c|0)-1|0)/c|0;g=G(f);h=g.data;i=CB(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=Kc((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new H;l.g8=L(g.data,0,h.length);return l;};
let F5=D(BR);
let J3=null,HC=null,GN=null,PY=null;
let ABE=()=>{let b,c,d;b=new F5;b.hw=A(79);b.hl=0;J3=b;c=new F5;c.hw=A(80);c.hl=1;HC=c;d=new F5;d.hw=A(81);d.hl=2;GN=d;PY=P(F5,[b,c,d]);};
let KN=D(0);
let BY=D(0);
let Nn=D(0);
function GU(){let a=this;C.call(a);a.je=null;a.l$=null;}
let Fs=null;
let Eh=()=>{Eh=Bz(GU);YF();};
let YF=()=>{let b;b=new GU;Eh();b.je=window;Fs=b;},
AEE=(a,b)=>{let c;b;c=a.l$;a.l$=null;ZH(c);};
let AEn=D();
let MZ=D();
let Fl=null;
let Gy=()=>{Gy=Bz(MZ);ADs();};
let ADs=()=>{Fl=DI(51,0.800000011920929);};
function J6(){Dr.call(this);this.oL=0.0;}
let MX=null;
let ALZ=()=>{MX=Bk(AD3);};
function JN(){let a=this;C.call(a);a.qX=null;a.qR=0;}
let Zv=D();
let Qc=b=>{return Math.sin(b);},
Tn=b=>{return Math.cos(b);},
Dl=b=>{return Math.sqrt(b);},
Wn=b=>{return Math.ceil(b);},
EU=(b,c)=>{return Math.pow(b,c);},
TR=b=>{return Math.abs(b);},
CY=b=>{return Math.sign(b);};
let C4=D();
function GV(){let a=this;C.call(a);a.jB=null;a.iL=0;a.nn=0;}
let NC=(a,b)=>{let c,d,e,f,g;c=a.jB;d=c.data;e=a.iL;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=S(f);g=d.data.length;if(e<g)g=e;Fm(c,0,d,0,g);a.jB=d;}c=d.data;f=a.iL;a.iL=f+1|0;c[f]=b;};
let I3=D(0);
let H6=D();
let DZ=D(0);
function GG(){let a=this;H6.call(a);a.kk=0;a.jI=null;a.mV=0;a.mX=0.0;a.kZ=0;}
let Hk=b=>{let c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
AH2=(a,b,c)=>{let d,e,f,g,h,i,j;if(b===null){d=a.jI.data;e=d[0];while(e!==null&&e.jw!==null){e=e.j8;}if(e===null){a.mV=a.mV+1|0;f=null;e=new Ep;b=null;e.jw=f;e.jX=b;e.lK=0;e.j8=d[0];d[0]=e;g=a.kk+1|0;a.kk=g;if(g>a.kZ)MQ(a,d.length);}}else{f=b;if(!f.$id$){e=Gl();f.$id$=e;}h=b.$id$;d=a.jI.data;i=d.length;j=h&(i-1|0);e=d[j];while(e!==null){if(e.lK==h){f=e.jw;if(b!==f&&!(b!==f?0:1)?0:1)break;}e=e.j8;}if(e===null){a.mV=a.mV+1|0;e=new Ep;f=null;e.jw=b;e.jX=f;e.lK=h;e.j8=d[j];d[j]=e;g=a.kk+1|0;a.kk=g;if(g>a.kZ)MQ(a,
i);}}f=e.jX;e.jX=c;return f;},
MQ=(a,b)=>{let c,d,e,f,g,h,i,j;c=Hk(!b?1:b<<1);d=R(Ep,c);e=d.data;f=0;c=c-1|0;while(true){g=a.jI.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.lK&c;j=h.j8;h.j8=e[i];e[i]=h;h=j;}f=f+1|0;}a.jI=d;a.kZ=e.length*a.mX|0;};
let QZ=D(0);
let Ka=D();
let Jr=D();
let KE=null,Ik=null,BC=null,BD=null,Jo=null,O7=null,Bu=null,Bt=null,G9=null,G$=null;
let UL=(b,c,d)=>{let e;if(c<d&&c>=0){b=b.data;if(d<=b.length){if(c<(d-1|0)&&((b[c]&64512)!=55296?0:1)){d=c+1|0;if((b[d]&64512)!=56320?0:1)return ((b[c]&1023)<<10|b[d]&1023)+65536|0;}return b[c];}}e=new I;e.g$=1;e.g_=1;E(e);},
B1=(b,c)=>{let d,e;d=b.pS.data;if(c<d.length)return c+d[c]|0;d=b.pI;e=AG$(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;},
AG$=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=B4(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;},
LY=b=>{let c,d,e,f,g,h;if(Ik===null){if(G9===null)G9=Zi();Ik=AJD((G9.value!==null?V(G9.value):null));}c=Ik.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=B4(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);},
Kc=(b,c)=>{if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;},
EN=b=>{let c,d;if(!(b>=0&&b<=1114111?1:0)){c=new Bs;c.g$=1;c.g_=1;E(c);}if(b<65536){d=G(1);d.data[0]=b&65535;return d;}return ALA([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);},
B$=b=>{let c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(Jo===null){if(G$===null)G$=AKx();Jo=AKS((G$.value!==null?V(G$.value):null));}e=Jo.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.nX)c=f+1|0;else{d=g.ny;if(b>=d)return g.nB.data[b-d|0];d=f-1|0;}}return 0;},
FG=b=>{a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return B$(b)!=16?0:1;},
AK6=()=>{KE=Bk(T2);O7=R(Jr,128);},
CX=()=>{return {"value":">W  H#F#U 4%F#O #F#/ d%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a1# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #<+#%# #%# #%# \'.3#%# #%# #{1#%# #w1%%# %J\'#k1#o1#%# #w1#!3# #23#*3#%# \'23#:3# #>3#%# #%# #%# #N3#%# #N3# %%# #N3#%# #J3%%# #%# #R3#%# \'%# /)#%# #)#%# #)#%# #%# #%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%# #%# %)#%# #%# #8)#L%#%# #%# #%# #"
+"%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #a+# #%# #%# #%# #%# #%# #%# #%# #%# #%# /B45#%# #,/#645# %%# #P1#!\'#*\'#%# #%# #%# #%# #%# <-%# #%# \'%# 1&++ %_## #Z#)k%%g%% #F#W hA# 1%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# +]%# %%# #?#%# %a+\'N\'AF#b &#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #^#%# #%# #%# #%# #%# #%# #%# %%# #%# #%# #%# #%# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# %*%r iB#oq-&# _?gejg#A1 o$#mo%&# {-%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3,4/# #%# #%# #%"
+"# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 3C1 1C1 1C1 1C1 1C1 3C/ 1C1 QC1 1C1 1C1 1C%8\'%G# 7i\')G# 7C%D)\' 7C%u)%?# 7X+%P+%G# L-q*/# \'Pw/#8m/# -6## |bA G%# kC.#U !r*%&# &#%# #,05#qX\'#H.5# %%# #%# #%# #e25#D05#q25#m25# #%# %%# 1865%%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# "
+"#%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 1%# #%# )%# (a=%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# G%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# y%%# #%# #%# #%# #%# #%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #%# 5%# #%# #4Fd#%# #%# #%# #%# #%# )%# #<{p# %%# #%# \'%# #%# #%# #%# #%# #%# #%# #%# #%# #%# #P}p#}}p#m}p#D}p#P}p# #@yp#D{p#Lyp#Br#%# #%# #%# #%"
+"# #%# #%# #%# #%# #,%#L}p#LJd#%# #%# -%# +%# #%# Y%# ,T5F#U TUg#r {%g#r >\'c#p Lnk%F# *J#F#b o@5F#b Jo=N#f "};},
C0=()=>{return {"value":"<Y  ,%H#U :#>b# vH#O #H#/:+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #,5# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'#(;#N1# %\'# #\'# %\'# \'\'# +\'# %6)# \'\'#*/# \'_+# %\'# #\'# #\'# %\'# )\'# %\'# \'\'# #\'# %\'# \'\'# #J%# +\'#+# #\'#+# #\'#+# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#L\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'#+# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# %665% #\'# )\'# #\'# #\'# #\'# #\'#o25#c25#k25#03#}1# #y1% #m1# #q1#{}p# \'y1#k}p# #$3# #:{p#N}p# #,3#43#N}p#*05#B}p# %43# #B05#<3# %@3# /F.5# %P3# #J}p#P3# \'B{p#P3#$\'#L3%,\'# +T3# 5Jyp#>yp# Z\'_\'# x\'# #\'# \'\'\' #_+\' !#a##]#\' #H#CD##H#3m%#i%% #e%#P%# \'(%#D%#C# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#i\'#P\'#=#(+# #4)# %\'# %\'# .#H#bP\'A #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 3\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# "
+"#\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# %\'# #\'# #\'# #\'# #\'# #\'# #\'#`# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'% &#,%n mB#ko%x %ko%\' RAC1 >$#yu+#uu+#Pu+#Hu+%Lu+#0u+#io+#>@d1 (+2Fd# \'oX\'# AJJd# N%\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #"
+"\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# +X%# +\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#A1 1A1 1A1 1A1 1A1 3A# #A# #A# #A% /A1 16\'%g\')B)%V+%s)%N+)A1 1A1 1A1 1A% #E# 5<m-# )E# 9A% =A% \'=# ;E# R/8## ddA )\'# @E0#U Nr,%&# #\'# \'D45#845# #\'# #\'# #\'# -"
+"\'# %\'# 5\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 1\'# #\'# )\'- /qq-&# i]=\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# G\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# y%\'# #\'# #\'# #\'# #\'# #\'# #\'# \'\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'#"
+" #\'# #\'# #\'# #\'# 5\'# #\'# %\'# #\'# #\'# #\'# #\'# )\'# )\'# #\'#*%# %\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# 7\'# #\'# #\'# #\'# #\'# #\'# #\'# #\'# )\'# #\'- #\'% )\'# #\'S )\'# cEDr# Yiejg# e*5H#U eUi#r {%i#r <\'e#<% Vlm%:# RH#H#b o@5H#b No=P#f "};},
Zi=()=>{return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};},
AKx=()=>{return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
+"!#!#!#!#!#!#!#!#!#!#!#!#!#=G&H#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!# BGA#%Y\'CJ95A#^#; GN5\'9G#9G#9\'A)F<A%F%Y#A,Q\'Z$Y#;Y#^#G,91Y$FA%F+G6J+Y%F#\'b&D! 9&G(1=G\'E#G#=G%F#J+F$^#&Y/ 1&\'F?G<A#b&:! G,&A/J+FBG*E#=Y$%A#\'[#F7G%%G*%G$%G&A#Y0 F:G$A#9 F,A&F9<F\' Q#A\'G)FJ%G91GA)FW\')\'&I$G)I%\'I#&G(F+G#Y#J+9%F0\'I# F)A#F#A#F7 F( &A$F%A#\'&I$G%A#I#A#I#\'&A))A%F# F$G#A#J+F#[#L\'=;&9\'A#G#) F\'A%F#A#F7 F( F# F#"
+" F#A#\' I$G#A%G#A#G$A$\'A(F% &A(J+G#F$\'9A+G#) F* F$ F7 F( F# F&A#\'&I$G& G#) I#\'A#&A0F#G#A#J+9;A(&G\' \'I# F)A#F#A#F7 F( F# F&A#\'&)\')G%A#I#A#I#\'A(G#)A%F# F$G#A#J+=&L\'A+\'& F\'A$F$ F%A$F# & F#A$F#A$F$A$F-A%I#\'I#A$I$ I$\'A#&A\')A/J+L$^\';=A&\'I$\'F) F$ F8 F1A#\'&G$I% G$ G%A(G# F$A#&A#F#G#A#J+A(9L(=&\'I#9F) F$ F8 F+ F&A#\'&)\'I& \'I# I#G#A(I#A\'F# F#G#A#J+ F#)A-G#I#F* F$ FJG#&I$G% I$ I$\'&=A%F$)L(F$G#A#J+L*=F\' \'I# F3A$F9 F* &A#F(A$\'A%I$G$ \' I)A\'J+A#I#9A-FQ\'F#G(A%;F\'%G)9J+Y#AFF# & F& F9 & F+\'F#G*&A#F& % G( J+A#F%AA&^$Y0=9^$G#^\'J+"
+"L+=\'=\'=\'6767I#F) FEA%G/)G&9G#F&G, GE ^)\'^\' ^#Y&^%Y#AFFLI#G%)G\')G#I#G#&J+Y\'F\'I#G#F%G$&I$F#I(F$G%F.\'I#G#I\'\'&)J+I$\'^#BG !A&!A#CL9%C$b&*&  F%A#F( & F%A#FJ F%A#FB F%A#F( & F%A#F0 FZ F%A#FeA#G$Y*L5A$F1^+A\'b!7! A#C\'A#5b&M* =9F2-F;67A$FmY$K$F)A(F3G$)A*F4G#)Y#A*F3G#A-F. F$ G#A-FUG#)G(I)\'I#G,Y$%Y$;&\'A#J+A\'L+A\'Y\'5Y%G$1\'J+A\'FD%FVA(F&G#FC\'&A&FhA+F@ G$I%G#I$A%I#\'I\'G$A%=A$Y#J+F?A#F&A,FMA%F;A\'J+,A$^CF8G#I#\'A#Y#FV)\')G( \')\'I#G)I\'G+A#\'J+A\'J+A\'Y(%Y\'A#G/(G1ARG%)FP\')G&)\'I&\'I#F)A$J+Y(^+G*^*Y# G#)F?)G%I#G#)G$F#J+FM\')G#I$\')G$I#A)Y%"
+"FEI)G)I#G#A$Y&J+A$F$J+F?E\'Y#C*A(BLA#B$Y)A)G$9G.)G(F%\'F\'\'F#)G#&A&CMEaC.%CCEFGb!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C*B)C\'A#B\'A#C)B)C)B)C\'A#B\'A#C) ! ! ! !C)B)C/A#C)D)C)D)C)D)C& C#B%$<#]$C$ C#B%$]$C%A#C#B% ]$C)B&]$A#C$ C#B%$]# M,Q&U\'Y#>?6_#?6>Y)./Q&-Y*>?Y%X#Y$:67Y,:98Y+-Q& Q+,%A#L\'Z$67%L+Z$67 E.A$[BA0G."
+"H%\'H$G-A0^#!^%!^##B$C#B$#=!^#:B&^\'!=!=!=B%=#B%#F%#^#C#B#Z&!C%=:^##=L1KD!#K%,^#A%Z&^&Z#^%:^#:^#:^(:^@Z#^#:=:^@b:-% ^)6767^5Z#^(67b=2! :^?Z:^IZ\'^gA:^,A6L^^pL7b=X# :^*:^WZ)b=P! :b=Y$ 67676767676767L?^MZ&67Z@6767676767Z1b= % b:$# 6767676767676767676767Za6767ZA67b:#% ^QZ6^#Z\'^HA#^A b=J! BQCQ!#B$C#!#!#!#B%#!C#!C\'E#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#^\'!#!#G$!#A&Y%,Y#CG #A&#A#FYA(%9A/\'F8A*F( F( F( F( F( F( F( F( GAY#>?>?Y$>?9>?Y*5Y#59>?Y#>?67676767Y"
+"&%Y+U#Y%596Y.^#Y$676767675AC^; b=:! A-b=7$ A;^1-Y$=%&+6767676767^#6767676756W#=K*G%I#5E&^#K$%&9^# b&7! A#G#]#E#&5b&;! 9E$&A&FL b&?!  ^#L%^+FA^EA,=F1^@ L+^?L)=L0^AL+^HL0b= & &b `G!&^b&b   %b `(!F7%b&X2 A$^XA*FIE\'Y#b&-% %Y$F1J+F#A5!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#&\'H$9G+9%!#!#!#!#!#!#!#!#!#!#!#!#!#!#E#G#FhK+G#Y\'A)]8E*]#!#!#!#!#!#!#!C$!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#%C)!#!#B##!#!#!#!#%]#!#!#&!#!C$!#!#!#!#!#!#!#!#!#!#B&#B&#!#!#!#!#!#!#!#B%#!#A&!# # #!#!#A9E$!#&E##F(\'F$"
+"\'F%\'F8I#G#)^%\'A$L\'^#;=A\'FUY%A)I#FSI1G#A)Y#J+A\'G3F\'Y$&9F#\'J+F=G)Y#F8G,I#A,9F>A$G$)FP\'I#G%I#G#I$Y. %J+A%Y#F&\'%F*J+F& FJG\'I#G#I#G#A*F$\'F)\')A#J+A#Y%F1%F\'^$&)\')FS\'&G$F#G#F&G#&\'&A9F#%Y#F,)G#I#Y#&E#)\'A+F\'A#F\'A#F\'A*F( F( CL<E%C*%]#A%b#1! FDI#\'I#\'I#9)\'A#J+A\'&b CO#&A-F8A%FRA%4b `. T#b `! T#b `0 43b `D!3b&O& A#b&K! AGC(A-C&A&&\'F+:F. F& & F# F# b&M! ]2A1b&L& 76^1FbA#FWA(=AAF-;^$G1Y(679A\'G19U#X#6767676767676767Y#67Y%X$Y$ Y%5676767Y$:5Z$ 9;Y#A%F& b&(# A#1 Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:67967Y#F+%FNE#F@A$F\'A#F\'A#F\'A#F"
+"$A$[#:<=[# =Z%^#A+Q$^#A#F- F; F4 F# F0A#F/ACb&]! A&Y$A%LNA$^*KVL%^2L#^$ ^.A$=AP^N\'b ## F>A$FRA0\'L<A%FAL%A*F5+F)+A&FGG&A&F? 9FEA%F)9K&AKBICIFpA#J+A\'BEA%CEA%FIA)FUA,9B, B0 B( B# C, C0 C( C#Aeb&X% A*F7A+F)A9E\' EK E*AgF\'A#& FM F#A$&A#F8 9L)F8^#L(F@A)L*AQF4 F#A&L&F7L\'A$9F;A&9AbFYA%L#F#L1A#LO&G$ G#A&G%F% F$ F>A#G$A%\'L*A(Y*A(F>L#9F>L$AAF)=F=G#A%L&Y(A*FWA$Y(F7A#L)F4A&L)F3A(Y%A-L(b 1! FkAXBTA.CTA(L\'FEG%A)J+b G% L@ FK G#5A#F#AmG$F>L+&A)F7G,L%Y&A7F3G%Y%AGF6L(A5F8A*)\')FVG0Y(A%L5J+\'F#G#&A*G$)FNI$G%I#G#Y#1Y%\'A+1A#F:A(J+A"
+"\'G$FEG&)G) J+Y%&I#&A)FD\'Y#&A*G#)FQI$G*I#F%Y%G%9)\'J+&9&Y$ L5A,F3 F:I$G$I#\')G#Y\'\'F#\'A`F( & F% F0 F+9A\'FP\'I$G)A&J+A\'G#I# F)A#F#A#F7 F( F# F& G#&I#\'I%A#I#A#I$A#&A\')A&F&I#A#G(A$G&b ,# FVI$G)I#G$)\'F%Y&J+Y# 9\'F$A?FQI$G\')\'I%G#)G#F#9&A)J+b G# FPI$G%A#I%G#)G#Y8F%G#ACFQI$G)I#\')G#Y$&A,J+A\'Y.A4FL\')\'I#G\')\'&9A\'J+AWF<A#G$I#G%)G&A%J+L#Y$=F(b Z# FMI$G*)G#9b E! BACAJ+L*A-F)A#&A#F) F# F9I\' I#A#G#)\'&)&)\'Y$A*J+AhF)A#FHI$G%A#G#I%\'&9&)A<&G+FIG\')&G%Y)\'A)&G\'I#G$FOG.)G#Y$&Y&A.FkA(Y+b W$ F* FF)G( G\')\'&Y&A+J+L4A$Y#F?A#G7 )G()G#)G#AkF( "
+"F# FGG\'A$\' G# G(&\'A)J+A\'F\' F# FAI& G# I#\')\'&A(J+b W% F4G#I#Y#A(G#&)F. FCI#G&A$I#\')\'Y.J+b 7! &A0L6^)[%^2A.9b&;/ b G! b+P!  Y&A,b&%$ b -J b&B! Y#A.b&Q1 Q1\'F\'G0b K` b&(* b Z\'#b&Z) A(F@ J+A%Y#Fq J+A\'F?A#G&9A+FQG(Y&^%E%9=A+J+ L( F6A&F4b Q+ BACAL8Y%b F! FmA%\'&IXA(G%E.AbE#9%\'A,I#A/&b W@!&A)b&74 AK&A(&b H,#E% E( E# b&D% A0&A>F$A#&A/F%A)b&-\' b %E b&L! A&F.A$F*A(F+A#=G#9Q%b =*!GOA#G8A*b=U! A^b=W$ A+^HA#^^I#G$^$I\'Q)G)^#G(^?G%^_A6^dG$=b [! L5A-L5A-b=8! A*L:b (# B;C;B;C( C3B;C;! B#A#!A#B#A#B% B)C% # C( C,B;C;B# B%A#B) B"
+"( C;B# B% B& !A$B( C;B;C;B;C;B;C;B;C;B;C;B;C=A#B::C::C\'B::C::C\'B::C::C\'B::C::C\'B::C::C\'!#A#JSb= ) GX^%GS^)\'^/\'^#Y&A0G& G0b 12 C+&C5A\'C\'b 6$ G( G2A#G( G# G&A&E`AB\'b Q! FNA$G(E(A#J+A%&=b  & F?\'A2FMG%J+A&;b 1( F<%G%J+b G, F( F% F# F0 b&&$ A#L*G(AJBCCCG(%A%J+A%Y#b 2- L]=L$;L%AnLN=L0b #$ F% F< F# &A#& F+ F% & &A\'&A%& & & F$ F# &A#& & & & & F# &A#F% F( F% F% & F+ F2A&F$ F& F2AUZ#b /% ^MA%b=E! A-^0A#^0 ^0 ^FA+L.b=B# AY^>A.^MA%^*A(^#A/^\'b ;# b=]$ ]&b=9, A%^2A$^.A$b=X! A%b=@! A\'^-A%=A0^-A%^YA)^+A\'^IA)^?A#^#Apb=5& A-"
+"^/A#^.A$^*A(^O ^(A)^/A%^*A(^*A(b=4#  ^XAFJ+b \'1 &b   %b   %b ?<#&AA&b Y !&A\'&b =$ &A#&b  ;!&A/&b PU!&A0&b M* &b CG b&?) b C8 &b *.!&A&&b ?!!&b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b   %b 2R!1A?b1A! b  # b\'Q$ b   %b   %b   %b 1Y$3b   %b   %b   %b ^a$3A#3b   %b   %b   %b ^a$3"};};
let Wo=D();
let ACX=()=>{var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};};
let AEN=D();
let BH=null,Ct=null,DY=null;
let GP=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=GZ(b)&&(e+f|0)<=GZ(d)){a:{b:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new Ca;h.hG=g;i=h;g.classObject=i;}}j=DS(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new Ca;h.hG=g;i=h;g.classObject=i;}}i=DS(h);if(j!==null&&i!==null){if(j===i)break b;if(!(j.hG.$meta.primitive?1:0)&&!(i.hG.$meta.primitive?1:0)){k=b;l=0;m=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p
=i.hG;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&OD(g.constructor,p)?1:0)){GI(b,c,d,e,l);b=new Hh;b.g$=1;b.g_=1;E(b);}l=l+1|0;m=o;}GI(b,c,d,e,f);return;}if(!(j.hG.$meta.primitive?1:0))break a;if(i.hG.$meta.primitive?1:0)break b;else break a;}b=new Hh;b.g$=1;b.g_=1;E(b);}}GI(b,c,d,e,f);return;}b=new Hh;b.g$=1;b.g_=1;E(b);}b=new I;b.g$=1;b.g_=1;E(b);}d=new CU;d.g$=1;d.g_=1;d.hb=A(82);E(d);},
Fm=(b,c,d,e,f)=>{if(c>=0&&e>=0&&f>=0&&(c+f|0)<=GZ(b)&&(e+f|0)<=GZ(d)){GI(b,c,d,e,f);return;}b=new I;b.g$=1;b.g_=1;E(b);},
GI=(b,c,d,e,f)=>{if(f!==0){if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if(b!==d||e<c){for(let i=0;i<f;i=i+1|0){d.data[e++]=b.data[c++];}}else {c=c+f|0;e=e+f|0;for(let i=0;i<f;i=i+1|0){d.data[ --e]=b.data[ --c];}}}},
CZ=()=>{return C7((new Date()).getTime());},
EJ=()=>{let b,c;if(DY===null){b=new Jw;H2(b,11);CD(b,A(83),A(84));CD(b,A(62),A(85));CD(b,A(86),A(87));CD(b,A(88),A(89));CD(b,A(90),A(91));CD(b,A(92),A(93));CD(b,A(94),A(84));CD(b,A(95),A(87));c=new Jw;H2(c,11);c.r$=b;DY=c;}};
let Km=D(0);
function Lf(){let a=this;C.call(a);a.hM=0;a.qs=0;a.qW=0;a.iF=0;}
let ZU=a=>{return a.hM;},
Vq=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{JM();switch(PL.data[d.hl]){case 1:if(a.iF){if(BH===null){d=new Ck;e=new B5;e.h9=BF(32);BB(d);d.ij=e;e=new K;Dp(e,16);d.h_=e;d.h$=G(32);d.id=0;d.ie=BX;BH=d;}d=new K;d.g9=G(16);F(d,d.g7,A(71));F(d,d.g7,c===null?A(2):c);e=new H;g=d.g9;h=g.data;i=d.g7;j=h.length;if(i>=0&&i<=(j-0|0)){e.g8=L(g.data,0,i);BI(Br(e));BI("\n");}else{c=new I;Y(c);E(c);}}a.hM=a.hM+1|0;d=new Fh;d.jk=a;d.ki=b;d.jf=c;d.jt=f;c=null;e=null;d.iO=new C;d.iM=1;d.jc=e;d.js=c;k=B9;B9=k+1|0;d.jq=O(k);c=new Dj;c.jd
=d;Dz(c);break a;case 2:d=null;l=new KP;l.l5=a;l.lr=f;l.pl=d;l.qP=e;if(a.iF){if(BH===null){d=new Ck;e=new B5;DL(e);e.h9=BF(32);Ez(d,e);d.h_=E6();d.h$=G(32);d.id=0;d.ie=BX;BH=d;}d=new K;d.g9=G(16);Cs(d,d.g7,Cn(A(71)));Cs(d,d.g7,c===null?A(2):Cn(c));e=new H;g=d.g9;h=g.data;i=d.g7;j=h.length;if(i>=0&&i<=(j-0|0)){e.g8=L(g.data,0,i);BI(Br(e));BI("\n");}else{c=new I;HI(c);E(c);}}a.hM=a.hM+1|0;d=new Ey;d.i5=a;d.jP=b;d.i4=c;d.jh=l;c=null;e=null;d.iO=new C;d.iM=1;d.jc=e;d.js=c;k=B9;B9=k+1|0;d.jq=O(k);c=new Dj;c.jd=d;Dz(c);break a;case 3:if
(a.iF){if(BH===null){d=new Ck;e=new B5;e.h9=BF(32);BB(d);d.ij=e;e=new K;Dp(e,16);d.h_=e;d.h$=G(32);d.id=0;d.ie=BX;BH=d;}d=new K;d.g9=G(16);F(d,d.g7,A(71));F(d,d.g7,c===null?A(2):c);e=new H;g=d.g9;h=g.data;i=d.g7;j=h.length;if(i>=0&&i<=(j-0|0)){e.g8=L(g.data,0,i);BI(Br(e));BI("\n");}else{c=new I;Y(c);E(c);}}a.hM=a.hM+1|0;d=new Ey;d.i5=a;d.jP=b;d.i4=c;d.jh=f;c=null;e=null;d.iO=new C;d.iM=1;d.jc=e;d.js=c;k=B9;B9=k+1|0;d.jq=O(k);c=new Dj;c.jd=d;Dz(c);break a;case 4:e=new KO;e.si=a;e.mt=f;if(a.iF){if(BH===null){d
=new Ck;f=new B5;BB(f);f.h9=BF(32);DL(d);d.ij=f;f=new K;Gi(f);d.h_=f;d.h$=G(32);d.id=0;d.ie=BX;BH=d;}d=new K;d.g9=G(16);Cw(d,d.g7,A(71));Cw(d,d.g7,c===null?A(2):c);f=new H;g=d.g9;h=g.data;i=d.g7;j=h.length;if(i>=0&&i<=(j-0|0)){f.g8=L(g.data,0,i);BI(Br(f));BI("\n");}else{c=new I;E4(c);E(c);}}a.hM=a.hM+1|0;d=new Ey;d.i5=a;d.jP=b;d.i4=c;d.jh=e;c=null;e=null;d.iO=new C;d.iM=1;d.jc=e;d.js=c;k=B9;B9=k+1|0;d.jq=O(k);c=new Dj;c.jd=d;Dz(c);break a;case 5:break;default:c=new Bf;e=new K;e.g9=G(16);F(e,e.g7,A(96));F(e,
e.g7,d.hw);d=new H;g=e.g9;h=g.data;k=e.g7;i=h.length;if(k>=0&&k<=(i-0|0)){d.g8=L(g.data,0,k);c.g$=1;c.g_=1;c.hb=d;E(c);}c=new I;c.g$=1;c.g_=1;Bl(c);E(c);}c=null;Fg(f.lM,f.lV,f.lF,c);c=f.iZ.iV;c.k8=1;c.i6=0;}},
Ke=(a,b,c,d)=>{let e,f,g,h,i,j;if(a.iF){if(BH===null){e=new Ck;f=new B5;f.h9=BF(32);e.ij=f;f=new K;BB(f);f.g9=G(16);e.h_=f;e.h$=G(32);e.id=0;e.ie=BX;BH=e;}e=new K;e.g9=G(16);F(e,e.g7,A(97));F(e,e.g7,c===null?A(2):c);f=new H;g=e.g9;h=g.data;i=e.g7;j=h.length;if(i>=0&&i<=(j-0|0)){f.g8=L(g.data,0,i);BI(Br(f));BI("\n");}else{c=new I;c.g$=1;c.g_=1;E(c);}}a.hM=a.hM+1|0;f=new XMLHttpRequest();e=new HD;e.lc=a;e.kt=f;e.nL=b;e.mm=c;e.oh=d;e=BL(e,"handleEvent");f.onreadystatechange=e;e=new Fi;e.om=a;e.ma=d;d=BL(e,"handleEvent");f.onprogress
=d;f.open("GET",Br(c),!!b);f.setRequestHeader("Content-Type","text/plain; charset=utf-8");f.send();};
let VR=D();
let ET=null;
let RW=()=>{return ET;};
let Yo=D();
let C$=0,FR=0;
let ALx=()=>{C$=1;};
let OQ=D(0);
function HU(){let a=this;C.call(a);a.ni=null;a.h6=null;a.qC=null;a.k2=null;a.pX=null;a.rs=null;a.oB=0.0;a.m2=BM;a.mS=BM;a.pM=0.0;a.mO=0.0;a.ov=0;}
let AIY=0,AF1=null;
let Jp=()=>{Jp=Bz(HU);T3();};
let ABF=(a,b)=>{let c,d,e,f,g,h,i,j,k;Jp();a.oB=0.0;a.m2=CZ();a.mS=O(-1);a.pM=0.0;a.mO=0.0;a.qC=b;Eh();c=window.document;d=b.qY;a.h6=c.getElementById(Br(d));e=WJ();d=!!b.qq;e.alpha=d;d=!!b.pe;e.antialias=d;d=!!b.pw;e.stencil=d;d=!!b.pT;e.premultipliedAlpha=d;d=!!b.p1;e.preserveDrawingBuffer=d;f=a.h6;if(b.ow)a.ni=f.getContext("webgl2",e);a:{if(b.ow){d=a.ni;if(d!==null){if(!b.oo)f=AIM(d);else{f=new Lg;Kp(f,d);}a.pX=f;a.k2=f;break a;}}f=f.getContext("webgl",e);a.ni=f;if(!b.oo)d=AHP(f);else{d=new QF;Jd(d,f);}a.k2
=d;}d=a.k2.cn(7938);c=a.k2.cn(7936);g=a.k2.cn(7937);a.rs=AEK(IE,d,c,g);h=b.l8;if(!(h<0&&b.kN<0)){if(h&&b.kN?1:0)Hy(a,h,b.kN);else{i=Fs;h=i.je.document.documentElement.clientWidth-b.nr|0;j=i.je.document.documentElement.clientHeight-b.oz|0;k=!b.mB?1.0:devicePixelRatio||1;Hy(a,k*h|0,k*j|0);}}b=a.h6;d=new Jm;d.re=a;SL(b,BL(d,"fullscreenChanged"));},
AFb=a=>{let b=new HU();ABF(b,a);return b;},
V0=a=>{let b,c,d;b=CZ();c=Z0(Nm(b,a.m2))/1000.0;a.pM=c;a.m2=b;c=a.mO+c;a.mO=c;d=a.ov+1|0;a.ov=d;if(c>1.0){a.oB=d;a.mO=0.0;a.ov=0;}},
Hy=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a:{d=a.h6;e=b;d.width=e;d=a.h6;e=c;d.height=e;if(a.qC.mB){f=devicePixelRatio||1;e=a.h6.style;g=b/f;Gp();h=new K;h.g9=G(16);Md(h,h.g7,g);F(h,h.g7,A(98));i=new H;j=h.g9;k=j.data;l=h.g7;b=k.length;if(l>=0&&l<=(b-0|0)){i.g8=L(j.data,0,l);e.setProperty("width",Br(i));f=c/f;i=new K;i.g9=G(16);Md(i,i.g7,f);F(i,i.g7,A(98));h=new H;j=i.g9;k=j.data;c=i.g7;m=k.length;if(c<0)break a;if(c>(m-0|0))break a;h.g8=L(j.data,0,c);e.setProperty("height",Br(h));}else{d=new I;d.g$=1;d.g_=1;E(d);}}return;}d
=new I;d.g$=1;d.g_=1;E(d);},
T3=()=>{AIY=0;AF1=Cr(51,0.800000011920929);},
SL=(b,c)=>{if(b.requestFullscreen){document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){document.addEventListener("msfullscreenchange",c,false);}};
function KI(){let a=this;C.call(a);a.n8=null;a.nP=null;a.n3=null;a.oc=null;a.oe=null;a.pm=null;a.mc=null;a.nN=0;a.mh=null;}
let AAH=(a,b,c,d)=>{let e;a.n8=DI(51,0.800000011920929);a.nP=DI(51,0.800000011920929);a.n3=DI(51,0.800000011920929);a.oc=DI(51,0.800000011920929);a.oe=DI(51,0.800000011920929);a.pm=DI(51,0.800000011920929);e=new Cy;e.iJ=1;e.hW=R(C,16);a.mc=e;a.nN=(-1);a.mh=b;AGA(a,c,d);},
ACW=(a,b,c)=>{let d=new KI();AAH(d,a,b,c);return d;},
AGA=(a,b,c)=>{let d,e,f;d=c.jx;if(d.o3!==null){e=b.ownerDocument;f=new Ip;f.r5=a;e.addEventListener("dragenter",BL(f,"handleEvent"),!!0);f=new Iq;f.sr=a;e.addEventListener("dragover",BL(f,"handleEvent"),!!0);f=new Io;f.o7=a;f.oU=c;f.oN=d;e.addEventListener("drop",BL(f,"handleEvent"));}},
Zo=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(ZC(a,b.nE)){b.mj=b.qH;b.k8=1;b.kU=0;b.i6=0;return 0;}if(b.i6)return 0;b.kU=0;b.k8=0;b.i6=1;c=b.nE;d=b.pc;e=b.o4;f=new MI;f.sC=a;f.iV=b;b=ET;g=a.mh;h=new K;h.g9=G(16);i=h.g7;if(g===null)g=A(2);Cw(h,i,g);Cw(h,h.g7,A(69));g=new H;j=h.g9;k=j.data;l=h.g7;m=k.length;if(l>=0&&l<=(m-0|0)){g.g8=L(j.data,0,l);h=new K;h.g9=G(16);F(h,h.g7,g);F(h,h.g7,c===null?A(2):c);g=new H;k=h.g9;j=k.data;m=h.g7;i=j.length;if(m>=0&&m<=(i-0|0)){g.g8=L(k.data,0,m);h=new MG;h.lM=a;h.iZ=f;h.lV=d;h.lF
=c;Vq(b,1,g,d,e,h);return 1;}b=new I;Y(b);E(b);}b=new I;E4(b);E(b);},
Fg=(a,b,c,d)=>{a:{J0();switch(K9.data[b.hl]){case 1:break;case 2:DE(a.nP,c,d);break a;case 3:DE(a.oe,c,d);break a;case 4:DE(a.n3,c,d);break a;case 5:DE(a.n8,c,null);break a;default:break a;}DE(a.oc,c,d);}},
ZC=(a,b)=>{let c;c=Du(a.oc,b)<0?0:1;return !c&&!(Du(a.nP,b)<0?0:1)&&!(Du(a.oe,b)<0?0:1)&&!(Du(a.n3,b)<0?0:1)&&!(Du(a.n8,b)<0?0:1)?0:1;};
let CM=D();
let ACn=(a,b)=>{return;};
let OC=D(0);
let Do=D(0);
function I5(){let a=this;C.call(a);a.hT=null;a.lp=0;a.kY=null;a.jD=null;a.iQ=null;a.iP=null;a.ja=null;a.jb=null;a.mH=null;a.lx=0;a.na=null;a.mF=0;a.nQ=null;a.or=null;a.nO=null;a.la=null;a.j9=BM;a.k_=0;}
let AJZ=b=>{let c,d,e,f;c=Fe;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(TR(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;},
AEQ=(a,b)=>{a.lp=0;a.kY=Cr(20,0.800000011920929);a.jD=Kj(20);a.iQ=S(20);a.iP=S(20);a.ja=S(20);a.jb=S(20);a.mH=La(51,0.800000011920929);a.lx=0;a.na=Kj(256);a.mF=0;a.nQ=Kj(256);a.or=Kj(5);a.nO=La(51,0.800000011920929);a.k_=1;a.hT=b;ACw(a);},
Ur=a=>{let b=new I5();AEQ(b,a);return b;},
ACw=a=>{let b;b=a.hT.ownerDocument;b.addEventListener("mousedown",BL(a,"handleEvent"),!!0);b.addEventListener("mouseup",BL(a,"handleEvent"),!!0);b.addEventListener("mousemove",BL(a,"handleEvent"),!!0);b.addEventListener("wheel",BL(a,"handleEvent"),!!0);b.addEventListener("keydown",BL(a,"handleEvent"),!!0);b.addEventListener("keyup",BL(a,"handleEvent"),!!0);b.addEventListener("keypress",BL(a,"handleEvent"),!!0);a.hT.addEventListener("touchstart",BL(a,"handleEvent"),!!1);a.hT.addEventListener("touchmove",BL(a,
"handleEvent"),!!1);a.hT.addEventListener("touchcancel",BL(a,"handleEvent"),!!1);a.hT.addEventListener("touchend",BL(a,"handleEvent"),!!1);},
ACZ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;c=V(b.type);if(c!==A(99)){if(!(A(99) instanceof H))d=0;else{e=A(99);d=c.g8!==e.g8?0:1;}}else d=1;a:{if(!d){if(c===A(100))d=1;else if(!(A(100) instanceof H))d=0;else{e=A(100);d=c.g8!==e.g8?0:1;}if(!d){if(c===A(101))d=1;else if(!(A(101) instanceof H))d=0;else{e=A(101);d=c.g8!==e.g8?0:1;}if(d){if(!(JT(a.hT)?1:0)){f=FQ(a,b,a.hT);g=F3(a,b,a.hT);h=a.iQ.data;i=f-h[0]|0;j=a.iP.data;d=g-j[0]|0;a.ja.data[0]=i;a.jb.data[0]=d;h[0]=f;j[0]=g;}else{k=b.movementX|0;i=
b.movementY|0;a.ja.data[0]=k;a.jb.data[0]=i;h=a.iQ.data;h[0]=h[0]+b.movementX|0;h=a.iP.data;h[0]=h[0]+b.movementY|0;}a.j9=C7(performance.now()*1000000.0);a.la!==null&&!a.jD.data[0];}else{if(c===A(102))d=1;else if(!(A(102) instanceof H))d=0;else{e=A(102);d=c.g8!==e.g8?0:1;}if(d){if(a.la!==null)AJZ(b);a.j9=C7(performance.now()*1000000.0);}else{if(c===A(103))d=1;else if(!(A(103) instanceof H))d=0;else{e=A(103);d=c.g8!==e.g8?0:1;}if(d){a.lp=1;l=b.changedTouches;d=0;i=l.length;while(d<i){e=l.item(d);k=e.identifier;m
=a.kY;g=0;b:{while(true){if(g>=20){g=(-1);break b;}n=a.kY;if(g>=(-128)&&g<=127){DP();o=De.data[g+128|0];}else{o=new Ed;o.jr=g;}if(!AJ5(n,o,0))break;g=g+1|0;}}if(g>=(-128)&&g<=127){DP();n=De.data[g+128|0];}else{n=new Ed;n.jr=g;}Cd(m,k,n);a.jD.data[g]=1;h=a.iQ;o=a.hT;p=o.width*1.0/o.clientWidth;k=(e.clientX-(EA(a,o)|0)|0)+(o.scrollLeft|0)|0;n=o.ownerDocument;m=V(n.compatMode);if(m===A(104))f=1;else if(!(A(104) instanceof H))f=0;else{o=A(104);f=m.g8!==o.g8?0:1;}if(f)n=n.documentElement;h=h.data;p=p*(k+(n.scrollLeft
|0)|0);h[g]=p+CY(p)*0.5|0;h=a.iP;o=a.hT;p=o.height*1.0/o.clientHeight;k=(e.clientY-(EZ(a,o)|0)|0)+(o.scrollTop|0)|0;e=o.ownerDocument;o=V(e.compatMode);if(o===A(104))f=1;else if(!(A(104) instanceof H))f=0;else{n=A(104);f=o.g8!==n.g8?0:1;}if(f)e=e.documentElement;h=h.data;p=p*(k+(e.scrollTop|0)|0);h[g]=p+CY(p)*0.5|0;a.ja.data[g]=0;a.jb.data[g]=0;d=d+1|0;}a.j9=C7(performance.now()*1000000.0);b.preventDefault();}}}}else{if(!a.jD.data[0])return;e=a.mH;d=b.button;AIm(e,!d?0:d==2?1:d!=1?0:2);h=a.jD;h.data[0]=a.mH.i8
<=0?0:1;if(!(JT(a.hT)?1:0)){k=FQ(a,b,a.hT)-a.iQ.data[0]|0;i=F3(a,b,a.hT)-a.iP.data[0]|0;a.ja.data[0]=k;a.jb.data[0]=i;a.iQ.data[0]=FQ(a,b,a.hT);a.iP.data[0]=F3(a,b,a.hT);}else{k=b.movementX|0;i=b.movementY|0;a.ja.data[0]=k;a.jb.data[0]=i;h=a.iQ.data;h[0]=h[0]+b.movementX|0;h=a.iP.data;h[0]=h[0]+b.movementY|0;}a.j9=C7(performance.now()*1000000.0);a.jD.data[0]=0;if(a.la!==null){d=b.button;d&&d!=2&&d!=1;}}}else{window.focus();m=b.target;n=a.hT;if(m!==n?0:1){h=a.jD.data;if(!h[0]){a.k_=1;a.lp=1;h[0]=1;d=b.button;q
=!d?0:d==2?1:d!=1?0:2;V1(a.mH,q);a.or.data[q]=1;a.ja.data[0]=0;a.jb.data[0]=0;if(!(JT(a.hT)?1:0)){f=FQ(a,b,a.hT);g=F3(a,b,a.hT);a.iQ.data[0]=f;a.iP.data[0]=g;}else{h=a.iQ.data;h[0]=h[0]+b.movementX|0;h=a.iP.data;h[0]=h[0]+b.movementY|0;}a.j9=C7(performance.now()*1000000.0);if(a.la!==null){d=b.button;d&&d!=2&&d!=1;}b.preventDefault();b.stopPropagation();break a;}}p=FQ(a,b,n);r=F3(a,b,a.hT);if(!(p>=0.0&&p<=Cl.h6.width&&r>=0.0&&r<=Cl.h6.height))a.k_=0;return;}}if(c===A(105))d=1;else if(!(A(105) instanceof H))d
=0;else{e=A(105);d=c.g8!==e.g8?0:1;}if(d){l=b.changedTouches;d=0;s=l.length;while(d<s){o=l.item(d);k=o.identifier;e=a.kY;if(!k)e=!e.hv?null:e.ht;else{h=e.hr;i=Bd(X(U(O(k),B(2135587861, 2654435769)),e.hx));c:{while(true){f=h.data[i];if(!f){i= -(i+1|0)|0;break c;}if(f==k)break;i=(i+1|0)&e.hu;}}e=i<0?null:e.hs.data[i];}t=e.jr;e=a.hT;p=e.width*1.0/e.clientWidth;k=(o.clientX-(EA(a,e)|0)|0)+(e.scrollLeft|0)|0;e=e.ownerDocument;m=V(e.compatMode);if(m===A(104))i=1;else if(!(A(104) instanceof H))i=0;else{n=A(104);i=
m.g8!==n.g8?0:1;}if(i)e=e.documentElement;p=p*(k+(e.scrollLeft|0)|0);k=(p+CY(p)*0.5|0)-a.iQ.data[t]|0;e=a.hT;p=e.height*1.0/e.clientHeight;i=(o.clientY-(EZ(a,e)|0)|0)+(e.scrollTop|0)|0;e=e.ownerDocument;m=V(e.compatMode);if(m===A(104))f=1;else if(!(A(104) instanceof H))f=0;else{n=A(104);f=m.g8!==n.g8?0:1;}if(f)e=e.documentElement;p=p*(i+(e.scrollTop|0)|0);i=(p+CY(p)*0.5|0)-a.iP.data[t]|0;a.ja.data[t]=k;a.jb.data[t]=i;h=a.iQ;e=a.hT;p=e.width*1.0/e.clientWidth;k=(o.clientX-(EA(a,e)|0)|0)+(e.scrollLeft|0)|0;e=
e.ownerDocument;m=V(e.compatMode);if(m===A(104))i=1;else if(!(A(104) instanceof H))i=0;else{n=A(104);i=m.g8!==n.g8?0:1;}if(i)e=e.documentElement;h=h.data;p=p*(k+(e.scrollLeft|0)|0);h[t]=p+CY(p)*0.5|0;h=a.iP;e=a.hT;p=e.height*1.0/e.clientHeight;k=(o.clientY-(EZ(a,e)|0)|0)+(e.scrollTop|0)|0;e=e.ownerDocument;o=V(e.compatMode);if(o===A(104))i=1;else if(!(A(104) instanceof H))i=0;else{n=A(104);i=o.g8!==n.g8?0:1;}if(i)e=e.documentElement;h=h.data;p=p*(k+(e.scrollTop|0)|0);h[t]=p+CY(p)*0.5|0;d=d+1|0;}a.j9=C7(performance.now()
*1000000.0);b.preventDefault();}if(c===A(106))d=1;else if(!(A(106) instanceof H))d=0;else{e=A(106);d=c.g8!==e.g8?0:1;}if(d){l=b.changedTouches;d=0;i=l.length;while(d<i){o=l.item(d);u=o.identifier;e=a.kY;if(!u)n=!e.hv?null:e.ht;else{h=e.hr;k=Bd(X(U(O(u),B(2135587861, 2654435769)),e.hx));d:{while(true){f=h.data[k];if(!f){k= -(k+1|0)|0;break d;}if(f==u)break;k=(k+1|0)&e.hu;}}n=k<0?null:e.hs.data[k];}t=n.jr;QG(e,u);a.jD.data[t]=0;e=a.hT;p=e.width*1.0/e.clientWidth;k=(o.clientX-(EA(a,e)|0)|0)+(e.scrollLeft|0)|0;e
=e.ownerDocument;m=V(e.compatMode);if(m===A(104))f=1;else if(!(A(104) instanceof H))f=0;else{n=A(104);f=m.g8!==n.g8?0:1;}if(f)e=e.documentElement;p=p*(k+(e.scrollLeft|0)|0);v=p+CY(p)*0.5|0;e=a.hT;p=e.height*1.0/e.clientHeight;k=(o.clientY-(EZ(a,e)|0)|0)+(e.scrollTop|0)|0;e=e.ownerDocument;o=V(e.compatMode);if(o===A(104))f=1;else if(!(A(104) instanceof H))f=0;else{n=A(104);f=o.g8!==n.g8?0:1;}if(f)e=e.documentElement;p=p*(k+(e.scrollTop|0)|0);g=p+CY(p)*0.5|0;h=a.iQ.data;k=v-h[t]|0;j=a.iP.data;f=g-j[t]|0;a.ja.data[t]
=k;a.jb.data[t]=f;h[t]=v;j[t]=g;d=d+1|0;}a.j9=C7(performance.now()*1000000.0);b.preventDefault();}if(c===A(107))d=1;else if(!(A(107) instanceof H))d=0;else{e=A(107);d=c.g8!==e.g8?0:1;}if(d){l=b.changedTouches;d=0;s=l.length;while(d<s){o=l.item(d);k=o.identifier;e=a.kY;if(!k)c=!e.hv?null:e.ht;else{h=e.hr;i=Bd(X(U(O(k),B(2135587861, 2654435769)),e.hx));e:{while(true){f=h.data[i];if(!f){i= -(i+1|0)|0;break e;}if(f==k)break;i=(i+1|0)&e.hu;}}c=i<0?null:e.hs.data[i];}t=c.jr;QG(e,k);a.jD.data[t]=0;e=a.hT;p=e.width
*1.0/e.clientWidth;k=(o.clientX-(EA(a,e)|0)|0)+(e.scrollLeft|0)|0;e=e.ownerDocument;n=V(e.compatMode);if(n===A(104))i=1;else if(!(A(104) instanceof H))i=0;else{c=A(104);i=n.g8!==c.g8?0:1;}if(i)e=e.documentElement;p=p*(k+(e.scrollLeft|0)|0);g=p+CY(p)*0.5|0;e=a.hT;p=e.height*1.0/e.clientHeight;k=(o.clientY-(EZ(a,e)|0)|0)+(e.scrollTop|0)|0;e=e.ownerDocument;n=V(e.compatMode);if(n===A(104))i=1;else if(!(A(104) instanceof H))i=0;else{c=A(104);i=n.g8!==c.g8?0:1;}if(i)e=e.documentElement;p=p*(k+(e.scrollTop|0)|0);f
=p+CY(p)*0.5|0;h=a.iQ.data;k=g-h[t]|0;j=a.iP.data;i=f-j[t]|0;a.ja.data[t]=k;a.jb.data[t]=i;h[t]=g;j[t]=f;d=d+1|0;}a.j9=C7(performance.now()*1000000.0);b.preventDefault();}},
Sk=(a,b)=>{let c,d,e,f,g,h;c=V(b.type);if(c===A(108))d=1;else if(!(A(108) instanceof H))d=0;else{e=A(108);d=c.g8!==e.g8?0:1;}if(d&&a.k_){a:{f=NR(b.keyCode);switch(f){case 67:break;case 112:break a;default:break a;}}e=a.nO;if(!f)d=e.k4;else{g=e.j5;d=Bd(X(U(O(f),B(2135587861, 2654435769)),e.kS));b:{while(true){h=g.data[d];if(!h){d= -(d+1|0)|0;break b;}if(h==f)break;d=(d+1|0)&e.jY;}}d=d<0?0:1;}if(d)b.preventDefault();if(!(f!=67&&f!=112))b.preventDefault();else{g=a.na.data;if(!g[f]){a.lx=a.lx+1|0;g[f]=1;a.mF=1;a.nQ.data[f]
=1;}}if(f==61){b.preventDefault();b.stopPropagation();}}else{if(c===A(109))d=1;else if(!(A(109) instanceof H))d=0;else{e=A(109);d=c.g8!==e.g8?0:1;}if(!(d&&a.k_)){if(c===A(110))d=1;else if(!(A(110) instanceof H))d=0;else{e=A(110);d=c.g8!==e.g8?0:1;}if(d&&a.k_){f=NR(b.keyCode);e=a.nO;if(!f)d=e.k4;else{g=e.j5;d=Bd(X(U(O(f),B(2135587861, 2654435769)),e.kS));c:{while(true){h=g.data[d];if(!h){d= -(d+1|0)|0;break c;}if(h==f)break;d=(d+1|0)&e.jY;}}d=d<0?0:1;}if(d)b.preventDefault();g=a.na.data;if(g[f]){a.lx=a.lx-1|
0;g[f]=0;}if(f==61){b.preventDefault();b.stopPropagation();}}}else if((b.charCode&65535)==9){b.preventDefault();b.stopPropagation();}}},
Np=a=>{let b,c,d;a:{if(a.lp){a.lp=0;b=0;while(true){c=a.or.data;if(b>=c.length)break a;c[b]=0;b=b+1|0;}}}b:{if(a.mF){a.mF=0;d=0;while(true){c=a.nQ.data;if(d>=c.length)break b;c[d]=0;d=d+1|0;}}}},
FQ=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(EA(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=V(b.compatMode);if(f===A(104))g=1;else if(!(A(104) instanceof H))g=0;else{c=A(104);g=f.g8!==c.g8?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+CY(d)*0.5|0;},
F3=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(EZ(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=V(b.compatMode);if(f===A(104))g=1;else if(!(A(104) instanceof H))g=0;else{c=A(104);g=f.g8!==c.g8?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+CY(d)*0.5|0;},
EZ=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;},
EA=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;},
W4=(a,b)=>{a.la=b;},
JT=b=>{if(document.pointerLockElement===canvas||document.mozPointerLockElement===canvas){return true;}return false;},
SV=(a,b)=>{ACZ(a,b);Sk(a,b);};
let N6=D(0);
function PA(){C.call(this);this.sn=null;}
function OY(){C.call(this);this.rU=null;}
let OR=D(0);
let M5=D();
let LP=D(0);
function OU(){let a=this;C.call(a);a.rV=0;a.ml=0;a.rr=null;a.nV=null;}
let PK=b=>{if("clipboard" in navigator){navigator.clipboard.writeText(b);}};
let ADe=D();
let Dc=null,Cl=null,ABz=null,Mj=null,AA7=null,AFm=null,D0=null,Bx=null,En=null;
let PD=D(0);
let O0=D(0);
function MA(){C.call(this);this.qn=null;}
function HA(){C.call(this);this.mY=null;}
let Xf=(a,b)=>{let c,d,$$je;c=V(a.mY.j6.je.document.visibilityState);if(A(111)===c)d=1;else if(!(c instanceof H))d=0;else{c=c;d=A(111).g8!==c.g8?0:1;}if(!d){b=a.mY.l4;Er(b);a:{try{c=Nq(b);while(NE(c)){AC2(L1(c));}CO(b);break a;}catch($$e){$$je=BP($$e);c=$$je;}CO(b);E(c);}}else{b=a.mY.l4;Er(b);b:{try{c=Nq(b);while(NE(c)){AGE(L1(c));}CO(b);break b;}catch($$e){$$je=BP($$e);c=$$je;}CO(b);E(c);}}},
AFj=(a,b)=>{Xf(a,b);};
function HB(){C.call(this);this.lw=null;}
let AKA=(a,b)=>{let c,d,e,f,g;c=a.lw.j6.je.document.documentElement.clientWidth;b=a.lw;d=c-b.jx.nr|0;e=b.j6.je.document.documentElement.clientHeight;b=a.lw;f=b.jx;c=e-f.oz|0;if(d>0&&c>0){if(b.ka!==null){if(f.mB){g=devicePixelRatio||1;d=d*g|0;c=c*g|0;}Hy(a.lw.ka,d,c);}return;}},
AJq=(a,b)=>{AKA(a,b);};
let Bs=D(BA);
let AHD=D();
let Ud=D();
let G8=(b,c)=>{let d,e,f,g,h,i,j;if(b<0){d=new Bs;e=new K;e.g9=G(16);F(e,e.g7,A(112));J(e,e.g7,b,10);f=new H;g=e.g9;h=g.data;i=e.g7;j=h.length;if(i>=0&&i<=(j-0|0)){f.g8=L(g.data,0,i);d.g$=1;d.g_=1;d.hb=f;E(d);}d=new I;d.g$=1;d.g_=1;E(d);}j=Wn(b/c)|0;if(2>j)j=2;i=Xp(j);if(i<=1073741824)return i;d=new Bs;e=new K;e.g9=G(16);F(e,e.g7,A(113));J(e,e.g7,b,10);f=new H;g=e.g9;h=g.data;i=e.g7;j=h.length;if(i>=0&&i<=(j-0|0)){f.g8=L(g.data,0,i);d.g$=1;d.g_=1;d.hb=f;E(d);}d=new I;d.g$=1;d.g_=1;E(d);};
let ABc=D(Dr);
let LX=null;
let AHy=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;if(e>=2&&e<=36){if(c==d){b=new B0;b.g$=1;b.g_=1;b.hb=A(53);E(b);}f=0;if(c>=0&&c<b.g8.length){a:{switch(b.g8.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=BM;i=O(e);j=Cj(O(1),Jz(B(4294967295, 2147483647),i));if(g==d){b=new B0;b.g$=1;b.g_=1;E(b);}b:{while(g<d){k=g+1|0;if(g<0)break b;if(g>=b.g8.length)break b;g=Zz(b.g8.charCodeAt(g));if(g<0){l=new B0;b=Cc(b,c,d);m=new K;m.g9=G(16);F(m,m.g7,A(54));c=m.g7;if(b===null)b=A(2);F(m,c,
b);b=new H;n=m.g9;o=n.data;d=m.g7;e=o.length;if(d>=0&&d<=(e-0|0)){b.g8=L(n.data,0,d);l.g$=1;l.g_=1;l.hb=b;E(l);}b=new I;b.g$=1;b.g_=1;Bl(b);E(b);}if(g>=e){l=new B0;p=Cc(b,c,d);b=new K;b.g9=G(16);F(b,b.g7,A(55));J(b,b.g7,e,10);F(b,b.g7,A(51));c=b.g7;if(p===null)p=A(2);F(b,c,p);m=new H;n=b.g9;o=n.data;d=b.g7;e=o.length;if(d>=0&&d<=(e-0|0)){m.g8=L(n.data,0,d);l.g$=1;l.g_=1;l.hb=m;E(l);}b=new I;b.g$=1;b.g_=1;Bl(b);E(b);}if(Wv(h,j)){b=new B0;b.g$=1;b.g_=1;b.hb=A(114);E(b);}h=Cj(U(i,h),O(g));if(ALi(h,BM)){if(k==d
&&C6(h,B(0, 2147483648))&&f)return B(0, 2147483648);l=new B0;p=Cc(b,c,d);m=new K;m.g9=G(16);F(m,m.g7,A(115));c=m.g7;if(p===null)p=A(2);F(m,c,p);b=new H;n=m.g9;o=n.data;e=m.g7;c=o.length;if(e>=0&&e<=(c-0|0)){b.g8=L(n.data,0,e);l.g$=1;l.g_=1;l.hb=b;E(l);}b=new I;b.g$=1;b.g_=1;Bl(b);E(b);}g=k;}if(f)h=ALO(h);return h;}b=new Q;b.g$=1;b.g_=1;E(b);}b=new Q;b.g$=1;b.g_=1;E(b);}b=new B0;l=new K;l.g9=G(16);F(l,l.g7,A(58));J(l,l.g7,e,10);m=new H;n=l.g9;o=n.data;d=l.g7;e=o.length;if(d>=0&&d<=(e-0|0)){m.g8=L(n.data,0,d);b.g$
=1;b.g_=1;b.hb=m;E(b);}b=new I;b.g$=1;b.g_=1;Bl(b);E(b);},
Zz=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
DV=b=>{let c,d;if(C6(b,BM))return 64;c=0;d=X(b,32);if(Xa(d,BM))c=32;else d=b;b=X(d,16);if(C6(b,BM))b=d;else c=c|16;d=X(b,8);if(C6(d,BM))d=b;else c=c|8;b=X(d,4);if(C6(b,BM))b=d;else c=c|4;d=X(b,2);if(C6(d,BM))d=b;else c=c|2;if(Xa(X(d,1),BM))c=c|1;return (64-c|0)-1|0;},
DF=(b,c)=>{return ALR(b,c);},
DU=(b,c)=>{return ALP(b,c);},
ALu=()=>{LX=Bk(ACF);};
let AAN=D();
let WJ=()=>{return {};};
let IZ=D(0);
function Fb(){let a=this;C.call(a);a.hg=null;a.kp=0;a.kj=0;a.ju=0;a.rv=0;a.rC=0;a.rF=0;a.kw=0;a.h2=null;a.io=null;a.jT=null;a.r6=null;a.rI=null;a.rj=null;a.iW=null;a.jv=0;a.lX=null;a.ks=null;a.ls=null;a.l2=null;a.rg=null;}
let Jd=(a,b)=>{a.kp=1;a.kj=1;a.ju=1;a.rv=1;a.rC=1;a.rF=1;a.kw=1;a.h2=Cr(51,0.800000011920929);a.io=Cr(51,0.800000011920929);a.jT=Cr(51,0.800000011920929);a.r6=Cr(51,0.800000011920929);a.rI=Cr(51,0.800000011920929);a.rj=Cr(51,0.800000011920929);a.iW=Cr(51,0.800000011920929);a.jv=0;a.lX=new Float32Array(40000);a.ks=new Int32Array(12000);a.ls=new Int16Array(12000);a.l2=new Int8Array(12000);a.rg=new Uint8Array(240000);a.hg=b;b.pixelStorei(37441,0);},
AHP=a=>{let b=new Fb();Jd(b,a);return b;},
AKo=(a,b)=>{let c,d,e,f,g;if(FR){c=(!G_(b,Dv)?null:b.kc.h7.data).buffer;d=b.hm;e=b.hf-d|0;return new Float32Array(c,d,e);}if((b.hf-b.hm|0)>a.lX.length)a.lX=new Float32Array(b.hf-b.hm|0);e=b.hm;d=0;while(true){f=b.hf;if(e>=f)break;c=a.lX;g=AAe(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.lX;e=f-b.hm|0;return c.subarray(0,e);},
ABm=(a,b)=>{let c,d,e,f,g;if(FR){c=(!G_(b,Dv)?null:b.lg.h7.data).buffer;d=b.hm;e=b.hf-d|0;return new Int16Array(c,d,e);}if((b.hf-b.hm|0)>a.ls.length)a.ls=new Int16Array(b.hf-b.hm|0);e=b.hm;d=0;while(true){f=b.hf;if(e>=f)break;c=a.ls;g=AFA(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.ls;e=f-b.hm|0;return c.subarray(0,e);},
AIH=(a,b)=>{let c,d,e,f,g;if(FR){c=(!G_(b,Dv)?null:b.cU()).buffer;d=b.hm;e=b.hf-d|0;return new Int32Array(c,d,e);}if((b.hf-b.hm|0)>a.ks.length)a.ks=new Int32Array(b.hf-b.hm|0);e=b.hm;d=0;while(true){f=b.hf;if(e>=f)break;c=a.ks;g=b.cV(e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.ks;e=f-b.hm|0;return c.subarray(0,e);},
ACV=(a,b)=>{let c,d,e,f,g;if(FR)return !G_(b,Dv)?null:b.cU();if((b.hf-b.hm|0)>a.l2.length)a.l2=new Int8Array(b.hf-b.hm|0);c=b.hm;d=0;while(true){e=b.hf;if(c>=e)break;f=a.l2;g=b.cW(c);f[d]=g;c=c+1|0;d=d+1|0;}f=a.l2;c=e-b.hm|0;return f.subarray(0,c);},
AMb=(a,b)=>{if((b.hf-b.hm|0)>a.ks.length)a.ks=new Int32Array(b.hf-b.hm|0);},
AKZ=(a,b)=>{let c,d,e,f,g;c=a.iW;d=a.jv;if(!d)c=!c.hv?null:c.ht;else{e=c.hr;f=Bd(X(U(O(d),B(2135587861, 2654435769)),c.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==d)break;f=(f+1|0)&c.hu;}}c=f<0?null:c.hs.data[f];}c=c;if(!b)c=!c.hv?null:c.ht;else{e=c.hr;d=Bd(X(U(O(b),B(2135587861, 2654435769)),c.hx));b:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break b;}if(f==b)break;d=(d+1|0)&c.hu;}}c=d<0?null:c.hs.data[d];}Bp();return c===null?null:c[Be]===true?c:c.hz;},
YS=(a,b,c)=>{let d,e,f,g,h,i;d=a.h2;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hz;d=a.io;if(!c)d=!d.hv?null:d.ht;else{e=d.hr;b=Bd(X(U(O(c),B(2135587861, 2654435769)),d.hx));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.hu;}}d=b<0?null:d.hs.data[b];}i=d===null?null:d[Be]===true?d:d.hz;a.hg.attachShader(h,
i);},
AJk=(a,b,c)=>{let d,e,f,g,h;d=a.hg;e=a.jT;if(!c)e=!e.hv?null:e.ht;else{f=e.hr;g=Bd(X(U(O(c),B(2135587861, 2654435769)),e.hx));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.hu;}}e=g<0?null:e.hs.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hz;d.bindBuffer(b,e);},
Ii=(a,b,c,d,e)=>{let f,g;if(d instanceof E2){f=a.hg;d=AKo(a,d);f.bufferData(b,d,e);}else if(d instanceof Gn){f=a.hg;d=AIH(a,d);f.bufferData(b,d,e);}else if(d instanceof Gr){f=a.hg;d=ABm(a,d);f.bufferData(b,d,e);}else if(d instanceof EF){f=a.hg;g=ACV(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new Bf;f.g$=1;f.g_=1;f.hb=A(116);E(f);}a.hg.bufferData(b,c,e);}},
AHe=(a,b)=>{a.hg.clear(b);},
Vh=(a,b,c,d,e)=>{a.hg.clearColor(b,c,d,e);},
ZI=(a,b)=>{let c,d,e,f;c=a.io;if(!b)c=!c.hv?null:c.ht;else{d=c.hr;e=Bd(X(U(O(b),B(2135587861, 2654435769)),c.hx));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.hu;}}c=e<0?null:c.hs.data[e];}Bp();c=c===null?null:c[Be]===true?c:c.hz;a.hg.compileShader(c);},
AJY=a=>{let b,c;b=a.hg.createProgram();c=a.kp;a.kp=c+1|0;Cd(a.h2,c,Ce(b));return c;},
AEG=(a,b)=>{let c,d;c=a.hg.createShader(b);d=a.kj;a.kj=d+1|0;Cd(a.io,d,Ce(c));return d;},
AEp=(a,b)=>{a.hg.disable(b);},
AC4=(a,b)=>{a.hg.disableVertexAttribArray(b);},
VK=(a,b,c,d)=>{a.hg.drawArrays(b,c,d);},
AAs=(a,b,c,d,e)=>{let f,g;f=a.hg;g=e.hm;f.drawElements(b,c,d,g);},
ACA=(a,b,c,d,e)=>{a.hg.drawElements(b,c,d,e);},
AHR=(a,b)=>{a.hg.enableVertexAttribArray(b);},
ALD=a=>{let b,c;b=a.hg.createBuffer();c=a.ju;a.ju=c+1|0;Cd(a.jT,c,Ce(b));return c;},
HO=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.hg;g=a.h2;if(!b)g=!g.hv?null:g.ht;else{h=g.hr;i=Bd(X(U(O(b),B(2135587861, 2654435769)),g.hx));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.hu;}}g=i<0?null:g.hs.data[i];}Bp();g=g===null?null:g[Be]===true?g:g.hz;g=f.getActiveAttrib(g,c);Dh(d,g.size);Dh(e,g.type);d.hm=0;d.hf=d.hF;d.hE=(-1);e.hm=0;e.hf=e.hF;e.hE=(-1);return V(g.name);},
IT=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.hg;g=a.h2;if(!b)g=!g.hv?null:g.ht;else{h=g.hr;i=Bd(X(U(O(b),B(2135587861, 2654435769)),g.hx));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.hu;}}g=i<0?null:g.hs.data[i];}Bp();g=g===null?null:g[Be]===true?g:g.hz;g=f.getActiveUniform(g,c);Dh(d,g.size);Dh(e,g.type);d.hm=0;d.hf=d.hF;d.hE=(-1);e.hm=0;e.hf=e.hF;e.hE=(-1);return V(g.name);},
W1=(a,b,c)=>{let d,e,f,g,h;d=a.h2;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hz;return a.hg.getAttribLocation(h,Br(c));},
AJP=(a,b)=>{let c,d,e,f,g;c=a.hg;d=a.h2;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hz;return V(c.getProgramInfoLog(d));},
Ja=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.hg;f=a.h2;if(!b)f=!f.hv?null:f.ht;else{g=f.hr;h=Bd(X(U(O(b),B(2135587861, 2654435769)),f.hx));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.hu;}}f=h<0?null:f.hs.data[h];}Bp();f=f===null?null:f[Be]===true?f:f.hz;Dh(d,e.getProgramParameter(f,c));}else{f=a.hg;e=a.h2;if(!b)e=!e.hv?null:e.ht;else{g=e.hr;h=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hx));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i
==b)break;h=(h+1|0)&e.hu;}}e=h<0?null:e.hs.data[h];}Bp();e=e===null?null:e[Be]===true?e:e.hz;Dh(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.hm=0;d.hf=d.hF;d.hE=(-1);},
AA4=(a,b)=>{let c,d,e,f,g;c=a.hg;d=a.io;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hz;return V(c.getShaderInfoLog(d));},
H$=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35713&&c!=35712){e=a.hg;f=a.io;if(!b)f=!f.hv?null:f.ht;else{g=f.hr;h=Bd(X(U(O(b),B(2135587861, 2654435769)),f.hx));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.hu;}}f=h<0?null:f.hs.data[h];}Bp();f=f===null?null:f[Be]===true?f:f.hz;Dh(d,e.getShaderParameter(f,c));}else{f=a.hg;e=a.io;if(!b)e=!e.hv?null:e.ht;else{g=e.hr;h=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hx));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i==b)break;h
=(h+1|0)&e.hu;}}e=h<0?null:e.hs.data[h];}Bp();e=e===null?null:e[Be]===true?e:e.hz;Dh(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.hm=0;d.hf=d.hF;d.hE=(-1);},
XO=(a,b)=>{return V(a.hg.getParameter(b));},
XI=(a,b,c)=>{let d,e,f,g,h;d=a.hg;e=a.h2;if(!b)e=!e.hv?null:e.ht;else{f=e.hr;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hx));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.hu;}}e=g<0?null:e.hs.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hz;d=d.getUniformLocation(e,Br(c));if(d===null)return (-1);c=a.iW;if(!b)c=!c.hv?null:c.ht;else{f=c.hr;h=Bd(X(U(O(b),B(2135587861, 2654435769)),c.hx));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&c.hu;}}c
=h<0?null:c.hs.data[h];}c=c;if(c===null){c=Cr(51,0.800000011920929);Cd(a.iW,b,c);}h=a.kw;a.kw=h+1|0;Cd(c,h,Ce(d));return h;},
TO=(a,b)=>{let c,d,e,f,g;c=a.hg;d=a.h2;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hz;c.linkProgram(d);},
RK=(a,b,c)=>{let d,e,f,g,h;d=a.hg;e=a.io;if(!b)e=!e.hv?null:e.ht;else{f=e.hr;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hx));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.hu;}}e=g<0?null:e.hs.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hz;d.shaderSource(e,Br(c));},
AEo=(a,b,c)=>{let d,e,f,g,h,i;d=a.iW;e=a.jv;if(!e)d=!d.hv?null:d.ht;else{f=d.hr;g=Bd(X(U(O(e),B(2135587861, 2654435769)),d.hx));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.hu;}}d=g<0?null:d.hs.data[g];}d=d;if(!b)d=!d.hv?null:d.ht;else{f=d.hr;g=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));b:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break b;}if(h==b)break;g=(g+1|0)&d.hu;}}d=g<0?null:d.hs.data[g];}Bp();i=d===null?null:d[Be]===true?d:d.hz;a.hg.uniform1i(i,c);},
XN=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=a.iW;f=a.jv;if(!f)g=!g.hv?null:g.ht;else{h=g.hr;c=Bd(X(U(O(f),B(2135587861, 2654435769)),g.hx));a:{while(true){i=h.data[c];if(!i){c= -(c+1|0)|0;break a;}if(i==f)break;c=(c+1|0)&g.hu;}}g=c<0?null:g.hs.data[c];}g=g;if(!b)g=!g.hv?null:g.ht;else{h=g.hr;c=Bd(X(U(O(b),B(2135587861, 2654435769)),g.hx));b:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break b;}if(f==b)break;c=(c+1|0)&g.hu;}}g=c<0?null:g.hs.data[c];}Bp();j=g===null?null:g[Be]===true?g:g.hz;g=a.hg;k="uniformMatrix4fv";l
=!!d;if(e===null)m=null;else{e=e.data;b=e.length;m=new Array(b);c=0;while(c<b){n=e[c];m[c]=n;c=c+1|0;}}g[k](j,l,m);},
TQ=(a,b)=>{let c,d,e,f,g;a.jv=b;c=a.hg;d=a.h2;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hz;c.useProgram(d);},
ABt=(a,b,c,d,e,f,g)=>{a.hg.vertexAttribPointer(b,c,d,!!e,f,g);},
R8=(a,b,c,d,e)=>{a.hg.viewport(b,c,d,e);};
let N4=D(0);
function Ho(){let a=this;Fb.call(a);a.hI=null;a.sw=null;a.se=0;a.rm=null;a.rA=0;a.rS=null;a.q4=0;a.lQ=null;a.lL=0;a.r8=null;}
let Kp=(a,b)=>{Jd(a,b);a.sw=Cr(51,0.800000011920929);a.se=1;a.rm=Cr(51,0.800000011920929);a.rA=1;a.rS=Cr(51,0.800000011920929);a.q4=1;a.lQ=Cr(51,0.800000011920929);a.lL=1;a.r8=new Uint32Array(12000);a.hI=b;},
AIM=a=>{let b=new Ho();Kp(b,a);return b;},
Yu=(a,b)=>{let c,d,e,f,g;c=a.hI;d=a.lQ;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hz;c.bindVertexArray(d);},
ACT=(a,b,c,d,e)=>{a.hI.drawArraysInstanced(b,c,d,e);},
AKu=(a,b,c,d,e,f)=>{a.hI.drawElementsInstanced(b,c,d,e,f);},
ADu=(a,b,c)=>{let d,e,f,g;d=c.hm;e=0;while(e<b){f=a.hI.createVertexArray();g=a.lL;a.lL=g+1|0;Cd(a.lQ,g,Ce(f));Dh(c,g);e=e+1|0;}Cu(c,d);};
let Lg=D(Ho);
let W8=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hI;d=a.lQ;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hz;c.bindVertexArray(d);b=a.hI.getError();if(!b)return;c=new Bf;h=Bj(b,4);d=new K;d.g9=G(16);F(d,d.g7,A(117));J(d,d.g7,b,10);F(d,d.g7,A(118));b=d.g7;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g9;j=e.data;f=d.g7;g=j.length;if(f>=0&&
f<=(g-0|0)){i.g8=L(e.data,0,f);c.g$=1;c.g_=1;c.hb=i;E(c);}c=new I;Y(c);E(c);},
Ut=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.hI.drawArraysInstanced(b,c,d,e);b=a.hI.getError();if(!b)return;f=new Bf;g=Bj(b,4);h=new K;h.g9=G(16);F(h,h.g7,A(117));J(h,h.g7,b,10);F(h,h.g7,A(118));b=h.g7;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.g9;k=j.data;c=h.g7;d=k.length;if(c>=0&&c<=(d-0|0)){i.g8=L(j.data,0,c);f.g$=1;f.g_=1;f.hb=i;E(f);}f=new I;Y(f);E(f);},
AJc=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a.hI.drawElementsInstanced(b,c,d,e,f);b=a.hI.getError();if(!b)return;g=new Bf;h=Bj(b,4);i=new K;i.g9=G(16);F(i,i.g7,A(117));J(i,i.g7,b,10);F(i,i.g7,A(118));b=i.g7;if(h===null)h=A(2);F(i,b,h);j=new H;k=i.g9;l=k.data;c=i.g7;d=l.length;if(c>=0&&c<=(d-0|0)){j.g8=L(k.data,0,c);g.g$=1;g.g_=1;g.hb=j;E(g);}g=new I;Y(g);E(g);},
TE=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=c.hm;e=0;while(e<b){f=a.hI.createVertexArray();g=a.lL;a.lL=g+1|0;Cd(a.lQ,g,Ce(f));Dh(c,g);e=e+1|0;}Cu(c,d);b=a.hI.getError();if(!b)return;c=new Bf;h=Bj(b,4);f=new K;f.g9=G(16);F(f,f.g7,A(117));J(f,f.g7,b,10);F(f,f.g7,A(118));b=f.g7;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.g9;k=j.data;e=f.g7;l=k.length;if(e>=0&&e<=(l-0|0)){i.g8=L(j.data,0,e);c.g$=1;c.g_=1;c.hb=i;E(c);}c=new I;Y(c);E(c);},
AHi=(a,b)=>{let c,d,e,f,g,h,i,j;a.hg.clear(b);b=a.hI.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g9=G(16);F(e,e.g7,A(117));J(e,e.g7,b,10);F(e,e.g7,A(118));b=e.g7;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g9;h=g.data;i=e.g7;j=h.length;if(i>=0&&i<=(j-0|0)){f.g8=L(g.data,0,i);c.g$=1;c.g_=1;c.hb=f;E(c);}c=new I;Y(c);E(c);},
ABV=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.hg.clearColor(b,c,d,e);f=a.hI.getError();if(!f)return;g=new Bf;h=Bj(f,4);i=new K;i.g9=G(16);F(i,i.g7,A(117));J(i,i.g7,f,10);F(i,i.g7,A(118));f=i.g7;if(h===null)h=A(2);F(i,f,h);j=new H;k=i.g9;l=k.data;m=i.g7;n=l.length;if(m>=0&&m<=(n-0|0)){j.g8=L(k.data,0,m);g.g$=1;g.g_=1;g.hb=j;E(g);}g=new I;Y(g);E(g);},
AHU=(a,b)=>{let c,d,e,f,g,h,i,j;a.hg.disable(b);b=a.hI.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g9=G(16);F(e,e.g7,A(117));J(e,e.g7,b,10);F(e,e.g7,A(118));b=e.g7;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g9;h=g.data;i=e.g7;j=h.length;if(i>=0&&i<=(j-0|0)){f.g8=L(g.data,0,i);c.g$=1;c.g_=1;c.hb=f;E(c);}c=new I;Y(c);E(c);},
Wt=(a,b,c,d)=>{let e,f,g,h,i,j;a.hg.drawArrays(b,c,d);b=a.hI.getError();if(!b)return;e=new Bf;f=Bj(b,4);g=new K;g.g9=G(16);F(g,g.g7,A(117));J(g,g.g7,b,10);F(g,g.g7,A(118));b=g.g7;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.g9;j=i.data;c=g.g7;d=j.length;if(c>=0&&c<=(d-0|0)){h.g8=L(i.data,0,c);e.g$=1;e.g_=1;e.hb=h;E(e);}e=new I;Y(e);E(e);},
AEP=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.hg;g=e.hm;f.drawElements(b,c,d,g);b=a.hI.getError();if(!b)return;e=new Bf;h=Bj(b,4);f=new K;f.g9=G(16);F(f,f.g7,A(117));J(f,f.g7,b,10);F(f,f.g7,A(118));b=f.g7;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.g9;k=j.data;c=f.g7;d=k.length;if(c>=0&&c<=(d-0|0)){i.g8=L(j.data,0,c);e.g$=1;e.g_=1;e.hb=i;E(e);}e=new I;Y(e);E(e);},
Rw=(a,b)=>{return V(a.hg.getParameter(b));},
Yk=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.hg.viewport(b,c,d,e);b=a.hI.getError();if(!b)return;f=new Bf;g=Bj(b,4);h=new K;h.g9=G(16);F(h,h.g7,A(117));J(h,h.g7,b,10);F(h,h.g7,A(118));b=h.g7;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.g9;k=j.data;c=h.g7;d=k.length;if(c>=0&&c<=(d-0|0)){i.g8=L(j.data,0,c);f.g$=1;f.g_=1;f.hb=i;E(f);}f=new I;Y(f);E(f);},
AA_=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.h2;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hz;d=a.io;if(!c)d=!d.hv?null:d.ht;else{e=d.hr;b=Bd(X(U(O(c),B(2135587861, 2654435769)),d.hx));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.hu;}}d=b<0?null:d.hs.data[b];}i=d===null?null:d[Be]===true?
d:d.hz;a.hg.attachShader(h,i);b=a.hI.getError();if(!b)return;d=new Bf;j=Bj(b,4);h=new K;h.g9=G(16);F(h,h.g7,A(117));J(h,h.g7,b,10);F(h,h.g7,A(118));b=h.g7;if(j===null)j=A(2);F(h,b,j);i=new H;e=h.g9;k=e.data;c=h.g7;f=k.length;if(c>=0&&c<=(f-0|0)){i.g8=L(e.data,0,c);d.g$=1;d.g_=1;d.hb=i;E(d);}d=new I;Y(d);E(d);},
AIE=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.hg;e=a.jT;if(!c)e=!e.hv?null:e.ht;else{f=e.hr;g=Bd(X(U(O(c),B(2135587861, 2654435769)),e.hx));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.hu;}}e=g<0?null:e.hs.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hz;d.bindBuffer(b,e);b=a.hI.getError();if(!b)return;d=new Bf;i=Bj(b,4);e=new K;e.g9=G(16);F(e,e.g7,A(117));J(e,e.g7,b,10);F(e,e.g7,A(118));b=e.g7;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.g9;k=f.data;c=e.g7;g=k.length;if(c>=0&&c<=(g
-0|0)){j.g8=L(f.data,0,c);d.g$=1;d.g_=1;d.hb=j;E(d);}d=new I;Y(d);E(d);},
AB5=(a,b,c,d,e)=>{let f,g,h,i,j;Ii(a,b,c,d,e);b=a.hI.getError();if(!b)return;d=new Bf;f=Bj(b,4);g=new K;g.g9=G(16);F(g,g.g7,A(117));J(g,g.g7,b,10);F(g,g.g7,A(118));b=g.g7;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.g9;j=i.data;c=g.g7;e=j.length;if(c>=0&&c<=(e-0|0)){h.g8=L(i.data,0,c);d.g$=1;d.g_=1;d.hb=h;E(d);}d=new I;Y(d);E(d);},
ADl=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.io;if(!b)c=!c.hv?null:c.ht;else{d=c.hr;e=Bd(X(U(O(b),B(2135587861, 2654435769)),c.hx));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.hu;}}c=e<0?null:c.hs.data[e];}Bp();g=c===null?null:c[Be]===true?c:c.hz;a.hg.compileShader(g);b=a.hI.getError();if(!b)return;c=new Bf;h=Bj(b,4);g=new K;g.g9=G(16);F(g,g.g7,A(117));J(g,g.g7,b,10);F(g,g.g7,A(118));b=g.g7;if(h===null)h=A(2);F(g,b,h);i=new H;d=g.g9;j=d.data;e=g.g7;f=j.length;if(e>=0&&e<=(f-0|0))
{i.g8=L(d.data,0,e);c.g$=1;c.g_=1;c.hb=i;E(c);}c=new I;Y(c);E(c);},
AJX=a=>{let b,c,d,e,f,g,h,i,j;b=a.hg.createProgram();c=a.kp;a.kp=c+1|0;Cd(a.h2,c,Ce(b));d=a.hI.getError();if(!d)return c;b=new Bf;e=Bj(d,4);f=new K;f.g9=G(16);F(f,f.g7,A(117));J(f,f.g7,d,10);F(f,f.g7,A(118));d=f.g7;if(e===null)e=A(2);F(f,d,e);g=new H;h=f.g9;i=h.data;c=f.g7;j=i.length;if(c>=0&&c<=(j-0|0)){g.g8=L(h.data,0,c);b.g$=1;b.g_=1;b.hb=g;E(b);}b=new I;Y(b);E(b);},
AE3=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hg.createShader(b);d=a.kj;a.kj=d+1|0;Cd(a.io,d,Ce(c));b=a.hI.getError();if(!b)return d;c=new Bf;e=Bj(b,4);f=new K;f.g9=G(16);F(f,f.g7,A(117));J(f,f.g7,b,10);F(f,f.g7,A(118));b=f.g7;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g9;i=h.data;d=f.g7;j=i.length;if(d>=0&&d<=(j-0|0)){g.g8=L(h.data,0,d);c.g$=1;c.g_=1;c.hb=g;E(c);}c=new I;Y(c);E(c);},
AJM=(a,b)=>{let c,d,e,f,g,h,i,j;a.hg.disableVertexAttribArray(b);b=a.hI.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g9=G(16);F(e,e.g7,A(117));J(e,e.g7,b,10);F(e,e.g7,A(118));b=e.g7;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g9;h=g.data;i=e.g7;j=h.length;if(i>=0&&i<=(j-0|0)){f.g8=L(g.data,0,i);c.g$=1;c.g_=1;c.hb=f;E(c);}c=new I;Y(c);E(c);},
T6=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.hg.drawElements(b,c,d,e);b=a.hI.getError();if(!b)return;f=new Bf;g=Bj(b,4);h=new K;h.g9=G(16);F(h,h.g7,A(117));J(h,h.g7,b,10);F(h,h.g7,A(118));b=h.g7;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.g9;k=j.data;c=h.g7;d=k.length;if(c>=0&&c<=(d-0|0)){i.g8=L(j.data,0,c);f.g$=1;f.g_=1;f.hb=i;E(f);}f=new I;Y(f);E(f);},
AE8=(a,b)=>{let c,d,e,f,g,h,i,j;a.hg.enableVertexAttribArray(b);b=a.hI.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g9=G(16);F(e,e.g7,A(117));J(e,e.g7,b,10);F(e,e.g7,A(118));b=e.g7;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g9;h=g.data;i=e.g7;j=h.length;if(i>=0&&i<=(j-0|0)){f.g8=L(g.data,0,i);c.g$=1;c.g_=1;c.hb=f;E(c);}c=new I;Y(c);E(c);},
Zt=(a,b,c,d,e)=>{let f,g,h,i,j;f=HO(a,b,c,d,e);b=a.hI.getError();if(!b)return f;d=new Bf;g=Bj(b,4);e=new K;e.g9=G(16);F(e,e.g7,A(117));J(e,e.g7,b,10);F(e,e.g7,A(118));b=e.g7;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.g9;i=h.data;c=e.g7;j=i.length;if(c>=0&&c<=(j-0|0)){f.g8=L(h.data,0,c);d.g$=1;d.g_=1;d.hb=f;E(d);}d=new I;Y(d);E(d);},
AHf=(a,b,c,d,e)=>{let f,g,h,i,j;f=IT(a,b,c,d,e);b=a.hI.getError();if(!b)return f;d=new Bf;g=Bj(b,4);e=new K;e.g9=G(16);F(e,e.g7,A(117));J(e,e.g7,b,10);F(e,e.g7,A(118));b=e.g7;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.g9;i=h.data;c=e.g7;j=i.length;if(c>=0&&c<=(j-0|0)){f.g8=L(h.data,0,c);d.g$=1;d.g_=1;d.hb=f;E(d);}d=new I;Y(d);E(d);},
ACG=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.h2;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hz;b=a.hg.getAttribLocation(h,Br(c));f=a.hI.getError();if(!f)return b;c=new Bf;i=Bj(f,4);d=new K;d.g9=G(16);F(d,d.g7,A(117));J(d,d.g7,f,10);F(d,d.g7,A(118));b=d.g7;if(i===null)i=A(2);F(d,b,i);h=new H;e=d.g9;j=e.data;f=d.g7;g=j.length;if(f
>=0&&f<=(g-0|0)){h.g8=L(e.data,0,f);c.g$=1;c.g_=1;c.hb=h;E(c);}c=new I;Y(c);E(c);},
Vk=(a,b,c,d)=>{let e,f,g,h,i,j;Ja(a,b,c,d);b=a.hI.getError();if(!b)return;d=new Bf;e=Bj(b,4);f=new K;f.g9=G(16);F(f,f.g7,A(117));J(f,f.g7,b,10);F(f,f.g7,A(118));b=f.g7;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g9;i=h.data;c=f.g7;j=i.length;if(c>=0&&c<=(j-0|0)){g.g8=L(h.data,0,c);d.g$=1;d.g_=1;d.hb=g;E(d);}d=new I;Y(d);E(d);},
SA=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hg;d=a.h2;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hz;c=V(c.getProgramInfoLog(d));b=a.hI.getError();if(!b)return c;c=new Bf;h=Bj(b,4);d=new K;d.g9=G(16);F(d,d.g7,A(117));J(d,d.g7,b,10);F(d,d.g7,A(118));b=d.g7;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g9;j=e.data;f=d.g7;g=j.length;if(f
>=0&&f<=(g-0|0)){i.g8=L(e.data,0,f);c.g$=1;c.g_=1;c.hb=i;E(c);}c=new I;Y(c);E(c);},
AJV=(a,b,c,d)=>{let e,f,g,h,i,j;H$(a,b,c,d);b=a.hI.getError();if(!b)return;d=new Bf;e=Bj(b,4);f=new K;f.g9=G(16);F(f,f.g7,A(117));J(f,f.g7,b,10);F(f,f.g7,A(118));b=f.g7;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g9;i=h.data;c=f.g7;j=i.length;if(c>=0&&c<=(j-0|0)){g.g8=L(h.data,0,c);d.g$=1;d.g_=1;d.hb=g;E(d);}d=new I;Y(d);E(d);},
Tm=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hg;d=a.io;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hz;c=V(c.getShaderInfoLog(d));b=a.hI.getError();if(!b)return c;c=new Bf;h=Bj(b,4);d=new K;d.g9=G(16);F(d,d.g7,A(117));J(d,d.g7,b,10);F(d,d.g7,A(118));b=d.g7;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g9;j=e.data;f=d.g7;g=j.length;if(f>=
0&&f<=(g-0|0)){i.g8=L(e.data,0,f);c.g$=1;c.g_=1;c.hb=i;E(c);}c=new I;Y(c);E(c);},
SC=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.hg;e=a.h2;if(!b)e=!e.hv?null:e.ht;else{f=e.hr;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hx));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.hu;}}e=g<0?null:e.hs.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hz;c=d.getUniformLocation(e,Br(c));if(c===null)h=(-1);else{d=a.iW;if(!b)d=!d.hv?null:d.ht;else{f=d.hr;h=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&d.hu;}}d
=h<0?null:d.hs.data[h];}d=d;if(d===null){d=Cr(51,0.800000011920929);Cd(a.iW,b,d);}h=a.kw;a.kw=h+1|0;Cd(d,h,Ce(c));}b=a.hI.getError();if(!b)return h;c=new Bf;i=Bj(b,4);d=new K;d.g9=G(16);F(d,d.g7,A(117));J(d,d.g7,b,10);F(d,d.g7,A(118));b=d.g7;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.g9;j=f.data;h=d.g7;g=j.length;if(h>=0&&h<=(g-0|0)){e.g8=L(f.data,0,h);c.g$=1;c.g_=1;c.hb=e;E(c);}c=new I;Y(c);E(c);},
AI5=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hg;d=a.h2;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hz;c.linkProgram(d);b=a.hI.getError();if(!b)return;c=new Bf;h=Bj(b,4);d=new K;d.g9=G(16);F(d,d.g7,A(117));J(d,d.g7,b,10);F(d,d.g7,A(118));b=d.g7;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g9;j=e.data;f=d.g7;g=j.length;if(f>=0&&f<=(g-0
|0)){i.g8=L(e.data,0,f);c.g$=1;c.g_=1;c.hb=i;E(c);}c=new I;Y(c);E(c);},
Sy=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.hg;e=a.io;if(!b)e=!e.hv?null:e.ht;else{f=e.hr;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hx));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.hu;}}e=g<0?null:e.hs.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hz;d.shaderSource(e,Br(c));b=a.hI.getError();if(!b)return;c=new Bf;i=Bj(b,4);d=new K;d.g9=G(16);F(d,d.g7,A(117));J(d,d.g7,b,10);F(d,d.g7,A(118));b=d.g7;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.g9;j=f.data;g=d.g7;h=j.length;if(g>=0&&g
<=(h-0|0)){e.g8=L(f.data,0,g);c.g$=1;c.g_=1;c.hb=e;E(c);}c=new I;Y(c);E(c);},
UJ=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.iW;e=a.jv;if(!e)d=!d.hv?null:d.ht;else{f=d.hr;g=Bd(X(U(O(e),B(2135587861, 2654435769)),d.hx));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.hu;}}d=g<0?null:d.hs.data[g];}d=d;if(!b)d=!d.hv?null:d.ht;else{f=d.hr;e=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.hu;}}d=e<0?null:d.hs.data[e];}Bp();i=d===null?null:d[Be]===true?d:d.hz;a.hg.uniform1i(i,c);b=a.hI.getError();if
(!b)return;d=new Bf;i=Bj(b,4);j=new K;j.g9=G(16);F(j,j.g7,A(117));J(j,j.g7,b,10);F(j,j.g7,A(118));b=j.g7;if(i===null)i=A(2);F(j,b,i);k=new H;f=j.g9;l=f.data;c=j.g7;e=l.length;if(c>=0&&c<=(e-0|0)){k.g8=L(f.data,0,c);d.g$=1;d.g_=1;d.hb=k;E(d);}d=new I;Y(d);E(d);},
AKy=(a,b)=>{let c,d,e,f,g,h,i,j;a.jv=b;c=a.hg;d=a.h2;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hz;c.useProgram(d);b=a.hI.getError();if(!b)return;c=new Bf;h=Bj(b,4);d=new K;d.g9=G(16);F(d,d.g7,A(117));J(d,d.g7,b,10);F(d,d.g7,A(118));b=d.g7;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g9;j=e.data;f=d.g7;g=j.length;if(f>=0&&f
<=(g-0|0)){i.g8=L(e.data,0,f);c.g$=1;c.g_=1;c.hb=i;E(c);}c=new I;Y(c);E(c);},
AFJ=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.hg.vertexAttribPointer(b,c,d,!!e,f,g);b=a.hI.getError();if(!b)return;h=new Bf;i=Bj(b,4);j=new K;j.g9=G(16);F(j,j.g7,A(117));J(j,j.g7,b,10);F(j,j.g7,A(118));b=j.g7;if(i===null)i=A(2);F(j,b,i);k=new H;l=j.g9;m=l.data;c=j.g7;d=m.length;if(c>=0&&c<=(d-0|0)){k.g8=L(l.data,0,c);h.g$=1;h.g_=1;h.hb=k;E(h);}h=new I;Y(h);E(h);};
function Ms(){let a=this;C.call(a);a.ox=0;a.n9=0;a.od=0;a.rb=null;a.rT=null;a.kf=null;a.q1=A(119);}
let AA2=(a,b,c,d,e)=>{a.q1=A(119);if(b===Q2)a.kf=GY;else if(b===Pu)a.kf=GY;else if(b===PE)a.kf=He;else if(b===OZ)a.kf=He;else if(b!==IE)a.kf=N1;else a.kf=ID;b=a.kf;if(b===GY)Iu(a,A(120),c);else if(b===ID)Iu(a,A(121),c);else if(b===He)Iu(a,A(122),c);else{a.ox=(-1);a.n9=(-1);a.od=(-1);d=A(59);e=A(59);}a.rb=d;a.rT=e;},
AEK=(a,b,c,d)=>{let e=new Ms();AA2(e,a,b,c,d);return e;},
Iu=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,$$je;a:{d=MB(Gx(b,0),c);if(!MS(d)){e=Dc;b=new K;b.g9=G(16);F(b,b.g7,A(123));F(b,b.g7,c);c=new H;f=b.g9;g=f.data;h=b.g7;i=g.length;if(h>=0&&h<=(i-0|0)){c.g8=L(f.data,0,h);if(e.kA>=2){if(BH===null){b=new Ck;e=new B5;BB(e);e.h9=BF(32);DL(b);b.ij=e;e=new K;Gi(e);b.h_=e;b.h$=G(32);b.id=0;b.ie=BX;BH=b;}b=new K;b.g9=G(16);Cw(b,b.g7,A(119));Cw(b,b.g7,A(51));Cw(b,b.g7,c);c=new H;f=b.g9;g=f.data;h=b.g7;i=g.length;if(h>=0&&h<=(i-0|0)){c.g8=L(f.data,0,h);BI(Br(c));BI("\n");}else{b
=new I;b.g$=1;b.g_=1;E(b);}}a.ox=2;a.n9=0;a.od=0;break a;}b=new I;b.g$=1;b.g_=1;E(b);}b=d.jG;j=b.j2;if(!j){b=new CV;b.g$=1;b.g_=1;Bl(b);E(b);}k=B4(1,b.kQ);if(k>=0){b=new I;c=new K;BB(c);c.g9=G(16);J(c,c.g7,1,10);e=new H;f=c.g9;g=f.data;h=c.g7;i=g.length;if(h>=0&&h<=(i-0|0)){e.g8=L(f.data,0,h);b.g$=1;b.g_=1;b.hb=e;E(b);}b=new I;b.g$=1;b.g_=1;E(b);}f=b.ic.data;if(f[2]<0)e=null;else{b=b.k0;if(!j){b=new CV;b.g$=1;b.g_=1;Bl(b);E(b);}if(k>=0){b=new I;c=new K;BB(c);c.g9=G(16);J(c,c.g7,1,10);e=new H;f=c.g9;g=f.data;h
=c.g7;i=g.length;if(h>=0&&h<=(i-0|0)){e.g8=L(f.data,0,h);b.g$=1;b.g_=1;b.hb=e;E(b);}b=new I;b.g$=1;b.g_=1;E(b);}h=f[2];if(!j){b=new CV;b.g$=1;b.g_=1;Bl(b);E(b);}if(k>=0){b=new I;c=new K;BB(c);c.g9=G(16);J(c,c.g7,1,10);e=new H;f=c.g9;g=f.data;h=c.g7;i=g.length;if(h>=0&&h<=(i-0|0)){e.g8=L(f.data,0,h);b.g$=1;b.g_=1;b.hb=e;E(b);}b=new I;b.g$=1;b.g_=1;E(b);}e=Cc(b,h,f[3]);}f=(HN(Gx(A(124),0),e,0)).data;b=f[0];b:{try{h=Ib(b);break b;}catch($$e){$$je=BP($$e);if($$je instanceof B0){}else{throw $$e;}}d=Dc;e=new K;e.g9
=G(16);F(e,e.g7,A(125));F(e,e.g7,b);F(e,e.g7,A(126));J(e,e.g7,2,10);l=new H;g=e.g9;m=g.data;i=e.g7;j=m.length;if(i>=0&&i<=(j-0|0)){l.g8=L(g.data,0,i);if(d.kA>=1){if(Ct===null){b=new Eo;e=new B5;DL(e);e.h9=BF(32);Ez(b,e);b.h_=E6();b.h$=G(32);b.id=0;b.ie=BX;Ct=b;}b=new K;b.g9=G(16);Cs(b,b.g7,Cn(A(127)));Cs(b,b.g7,Cn(A(51)));Cs(b,b.g7,Cn(l));c=new H;g=b.g9;m=g.data;i=b.g7;j=m.length;if(i>=0&&i<=(j-0|0)){c.g8=L(g.data,0,i);CI(Br(c));CI("\n");}else{b=new I;b.g$=1;b.g_=1;E(b);}}h=2;}else{b=new I;b.g$=1;b.g_=1;E(b);}}a.ox
=h;n=f.length;if(n<2)i=0;else{b=f[1];c:{try{i=Ib(b);break c;}catch($$e){$$je=BP($$e);if($$je instanceof B0){}else{throw $$e;}}d=Dc;e=new K;e.g9=G(16);F(e,e.g7,A(125));F(e,e.g7,b);F(e,e.g7,A(126));J(e,e.g7,0,10);l=new H;g=e.g9;m=g.data;j=e.g7;k=m.length;if(j>=0&&j<=(k-0|0)){l.g8=L(g.data,0,j);if(d.kA>=1){if(Ct===null){b=new Eo;e=new B5;DL(e);e.h9=BF(32);Ez(b,e);b.h_=E6();b.h$=G(32);b.id=0;b.ie=BX;Ct=b;}b=new K;b.g9=G(16);Cs(b,b.g7,Cn(A(127)));Cs(b,b.g7,Cn(A(51)));Cs(b,b.g7,Cn(l));c=new H;g=b.g9;m=g.data;j=b.g7;k
=m.length;if(j>=0&&j<=(k-0|0)){c.g8=L(g.data,0,j);CI(Br(c));CI("\n");}else{b=new I;b.g$=1;b.g_=1;E(b);}}i=0;}else{b=new I;b.g$=1;b.g_=1;E(b);}}}a.n9=i;if(n<3)h=0;else{b=f[2];d:{try{h=Ib(b);break d;}catch($$e){$$je=BP($$e);if($$je instanceof B0){}else{throw $$e;}}e=Dc;d=new K;d.g9=G(16);F(d,d.g7,A(125));F(d,d.g7,b);F(d,d.g7,A(126));J(d,d.g7,0,10);b=new H;g=d.g9;f=g.data;h=d.g7;i=f.length;if(h>=0&&h<=(i-0|0)){b.g8=L(g.data,0,h);if(e.kA>=1){if(Ct===null){e=new Eo;d=new B5;DL(d);d.h9=BF(32);Ez(e,d);e.h_=E6();e.h$
=G(32);e.id=0;e.ie=BX;Ct=e;}e=new K;e.g9=G(16);Cs(e,e.g7,Cn(A(127)));Cs(e,e.g7,Cn(A(51)));Cs(e,e.g7,Cn(b));b=new H;f=e.g9;g=f.data;i=e.g7;j=g.length;if(i>=0&&i<=(j-0|0)){b.g8=L(f.data,0,i);CI(Br(b));CI("\n");}else{b=new I;b.g$=1;b.g_=1;E(b);}}h=0;}else{b=new I;b.g$=1;b.g_=1;E(b);}}}a.od=h;}};
let DQ=D(BR);
let Q2=null,PE=null,U7=null,OZ=null,IE=null,Pu=null,Ye=null;
let VE=()=>{let b,c,d,e,f,g;b=new DQ;b.hw=A(7);b.hl=0;Q2=b;c=new DQ;c.hw=A(128);c.hl=1;PE=c;d=new DQ;d.hw=A(129);d.hl=2;U7=d;e=new DQ;e.hw=A(130);e.hl=3;OZ=e;f=new DQ;f.hw=A(131);f.hl=4;IE=f;g=new DQ;g.hw=A(132);g.hl=5;Pu=g;Ye=P(DQ,[b,c,d,e,f,g]);};
let O6=D(0);
function Jm(){C.call(this);this.re=null;}
let Wj=a=>{return;};
let QF=D(Fb);
let Vo=(a,b)=>{let c,d,e,f,g,h,i,j;a.hg.clear(b);b=a.hg.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g9=G(16);F(e,e.g7,A(117));J(e,e.g7,b,10);F(e,e.g7,A(118));b=e.g7;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g9;h=g.data;i=e.g7;j=h.length;if(i>=0&&i<=(j-0|0)){f.g8=L(g.data,0,i);c.g$=1;c.g_=1;c.hb=f;E(c);}c=new I;Y(c);E(c);},
Wb=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.hg.clearColor(b,c,d,e);f=a.hg.getError();if(!f)return;g=new Bf;h=Bj(f,4);i=new K;i.g9=G(16);F(i,i.g7,A(117));J(i,i.g7,f,10);F(i,i.g7,A(118));f=i.g7;if(h===null)h=A(2);F(i,f,h);j=new H;k=i.g9;l=k.data;m=i.g7;n=l.length;if(m>=0&&m<=(n-0|0)){j.g8=L(k.data,0,m);g.g$=1;g.g_=1;g.hb=j;E(g);}g=new I;Y(g);E(g);},
AJ_=(a,b)=>{let c,d,e,f,g,h,i,j;a.hg.disable(b);b=a.hg.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g9=G(16);F(e,e.g7,A(117));J(e,e.g7,b,10);F(e,e.g7,A(118));b=e.g7;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g9;h=g.data;i=e.g7;j=h.length;if(i>=0&&i<=(j-0|0)){f.g8=L(g.data,0,i);c.g$=1;c.g_=1;c.hb=f;E(c);}c=new I;Y(c);E(c);},
ZG=(a,b,c,d)=>{let e,f,g,h,i,j;a.hg.drawArrays(b,c,d);b=a.hg.getError();if(!b)return;e=new Bf;f=Bj(b,4);g=new K;g.g9=G(16);F(g,g.g7,A(117));J(g,g.g7,b,10);F(g,g.g7,A(118));b=g.g7;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.g9;j=i.data;c=g.g7;d=j.length;if(c>=0&&c<=(d-0|0)){h.g8=L(i.data,0,c);e.g$=1;e.g_=1;e.hb=h;E(e);}e=new I;Y(e);E(e);},
AJG=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.hg;g=e.hm;f.drawElements(b,c,d,g);b=a.hg.getError();if(!b)return;e=new Bf;h=Bj(b,4);f=new K;f.g9=G(16);F(f,f.g7,A(117));J(f,f.g7,b,10);F(f,f.g7,A(118));b=f.g7;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.g9;k=j.data;c=f.g7;d=k.length;if(c>=0&&c<=(d-0|0)){i.g8=L(j.data,0,c);e.g$=1;e.g_=1;e.hb=i;E(e);}e=new I;Y(e);E(e);},
AAT=(a,b)=>{return V(a.hg.getParameter(b));},
AJQ=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.hg.viewport(b,c,d,e);b=a.hg.getError();if(!b)return;f=new Bf;g=Bj(b,4);h=new K;h.g9=G(16);F(h,h.g7,A(117));J(h,h.g7,b,10);F(h,h.g7,A(118));b=h.g7;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.g9;k=j.data;c=h.g7;d=k.length;if(c>=0&&c<=(d-0|0)){i.g8=L(j.data,0,c);f.g$=1;f.g_=1;f.hb=i;E(f);}f=new I;Y(f);E(f);},
Sw=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.h2;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hz;d=a.io;if(!c)d=!d.hv?null:d.ht;else{e=d.hr;b=Bd(X(U(O(c),B(2135587861, 2654435769)),d.hx));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.hu;}}d=b<0?null:d.hs.data[b];}i=d===null?null:d[Be]===true?d
:d.hz;a.hg.attachShader(h,i);b=a.hg.getError();if(!b)return;d=new Bf;j=Bj(b,4);h=new K;h.g9=G(16);F(h,h.g7,A(117));J(h,h.g7,b,10);F(h,h.g7,A(118));b=h.g7;if(j===null)j=A(2);F(h,b,j);i=new H;e=h.g9;k=e.data;c=h.g7;f=k.length;if(c>=0&&c<=(f-0|0)){i.g8=L(e.data,0,c);d.g$=1;d.g_=1;d.hb=i;E(d);}d=new I;Y(d);E(d);},
Rt=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.hg;e=a.jT;if(!c)e=!e.hv?null:e.ht;else{f=e.hr;g=Bd(X(U(O(c),B(2135587861, 2654435769)),e.hx));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.hu;}}e=g<0?null:e.hs.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hz;d.bindBuffer(b,e);b=a.hg.getError();if(!b)return;d=new Bf;i=Bj(b,4);e=new K;e.g9=G(16);F(e,e.g7,A(117));J(e,e.g7,b,10);F(e,e.g7,A(118));b=e.g7;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.g9;k=f.data;c=e.g7;g=k.length;if(c>=0&&c<=(g
-0|0)){j.g8=L(f.data,0,c);d.g$=1;d.g_=1;d.hb=j;E(d);}d=new I;Y(d);E(d);},
AAr=(a,b,c,d,e)=>{let f,g,h,i,j;Ii(a,b,c,d,e);b=a.hg.getError();if(!b)return;d=new Bf;f=Bj(b,4);g=new K;g.g9=G(16);F(g,g.g7,A(117));J(g,g.g7,b,10);F(g,g.g7,A(118));b=g.g7;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.g9;j=i.data;c=g.g7;e=j.length;if(c>=0&&c<=(e-0|0)){h.g8=L(i.data,0,c);d.g$=1;d.g_=1;d.hb=h;E(d);}d=new I;Y(d);E(d);},
AKk=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.io;if(!b)c=!c.hv?null:c.ht;else{d=c.hr;e=Bd(X(U(O(b),B(2135587861, 2654435769)),c.hx));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.hu;}}c=e<0?null:c.hs.data[e];}Bp();g=c===null?null:c[Be]===true?c:c.hz;a.hg.compileShader(g);b=a.hg.getError();if(!b)return;c=new Bf;h=Bj(b,4);g=new K;g.g9=G(16);F(g,g.g7,A(117));J(g,g.g7,b,10);F(g,g.g7,A(118));b=g.g7;if(h===null)h=A(2);F(g,b,h);i=new H;d=g.g9;j=d.data;e=g.g7;f=j.length;if(e>=0&&e<=(f-0|0))
{i.g8=L(d.data,0,e);c.g$=1;c.g_=1;c.hb=i;E(c);}c=new I;Y(c);E(c);},
ADU=a=>{let b,c,d,e,f,g,h,i,j;b=a.hg.createProgram();c=a.kp;a.kp=c+1|0;Cd(a.h2,c,Ce(b));d=a.hg.getError();if(!d)return c;b=new Bf;e=Bj(d,4);f=new K;f.g9=G(16);F(f,f.g7,A(117));J(f,f.g7,d,10);F(f,f.g7,A(118));d=f.g7;if(e===null)e=A(2);F(f,d,e);g=new H;h=f.g9;i=h.data;c=f.g7;j=i.length;if(c>=0&&c<=(j-0|0)){g.g8=L(h.data,0,c);b.g$=1;b.g_=1;b.hb=g;E(b);}b=new I;Y(b);E(b);},
AJ0=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hg.createShader(b);d=a.kj;a.kj=d+1|0;Cd(a.io,d,Ce(c));b=a.hg.getError();if(!b)return d;c=new Bf;e=Bj(b,4);f=new K;f.g9=G(16);F(f,f.g7,A(117));J(f,f.g7,b,10);F(f,f.g7,A(118));b=f.g7;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g9;i=h.data;d=f.g7;j=i.length;if(d>=0&&d<=(j-0|0)){g.g8=L(h.data,0,d);c.g$=1;c.g_=1;c.hb=g;E(c);}c=new I;Y(c);E(c);},
ADO=(a,b)=>{let c,d,e,f,g,h,i,j;a.hg.disableVertexAttribArray(b);b=a.hg.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g9=G(16);F(e,e.g7,A(117));J(e,e.g7,b,10);F(e,e.g7,A(118));b=e.g7;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g9;h=g.data;i=e.g7;j=h.length;if(i>=0&&i<=(j-0|0)){f.g8=L(g.data,0,i);c.g$=1;c.g_=1;c.hb=f;E(c);}c=new I;Y(c);E(c);},
YJ=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.hg.drawElements(b,c,d,e);b=a.hg.getError();if(!b)return;f=new Bf;g=Bj(b,4);h=new K;h.g9=G(16);F(h,h.g7,A(117));J(h,h.g7,b,10);F(h,h.g7,A(118));b=h.g7;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.g9;k=j.data;c=h.g7;d=k.length;if(c>=0&&c<=(d-0|0)){i.g8=L(j.data,0,c);f.g$=1;f.g_=1;f.hb=i;E(f);}f=new I;Y(f);E(f);},
AKa=(a,b)=>{let c,d,e,f,g,h,i,j;a.hg.enableVertexAttribArray(b);b=a.hg.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g9=G(16);F(e,e.g7,A(117));J(e,e.g7,b,10);F(e,e.g7,A(118));b=e.g7;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g9;h=g.data;i=e.g7;j=h.length;if(i>=0&&i<=(j-0|0)){f.g8=L(g.data,0,i);c.g$=1;c.g_=1;c.hb=f;E(c);}c=new I;Y(c);E(c);},
AAu=(a,b,c,d,e)=>{let f,g,h,i,j;f=HO(a,b,c,d,e);b=a.hg.getError();if(!b)return f;d=new Bf;g=Bj(b,4);e=new K;e.g9=G(16);F(e,e.g7,A(117));J(e,e.g7,b,10);F(e,e.g7,A(118));b=e.g7;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.g9;i=h.data;c=e.g7;j=i.length;if(c>=0&&c<=(j-0|0)){f.g8=L(h.data,0,c);d.g$=1;d.g_=1;d.hb=f;E(d);}d=new I;Y(d);E(d);},
Us=(a,b,c,d,e)=>{let f,g,h,i,j;f=IT(a,b,c,d,e);b=a.hg.getError();if(!b)return f;d=new Bf;g=Bj(b,4);e=new K;e.g9=G(16);F(e,e.g7,A(117));J(e,e.g7,b,10);F(e,e.g7,A(118));b=e.g7;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.g9;i=h.data;c=e.g7;j=i.length;if(c>=0&&c<=(j-0|0)){f.g8=L(h.data,0,c);d.g$=1;d.g_=1;d.hb=f;E(d);}d=new I;Y(d);E(d);},
YT=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.h2;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hz;b=a.hg.getAttribLocation(h,Br(c));f=a.hg.getError();if(!f)return b;c=new Bf;i=Bj(f,4);d=new K;d.g9=G(16);F(d,d.g7,A(117));J(d,d.g7,f,10);F(d,d.g7,A(118));b=d.g7;if(i===null)i=A(2);F(d,b,i);h=new H;e=d.g9;j=e.data;f=d.g7;g=j.length;if(f>=
0&&f<=(g-0|0)){h.g8=L(e.data,0,f);c.g$=1;c.g_=1;c.hb=h;E(c);}c=new I;Y(c);E(c);},
Xl=(a,b,c,d)=>{let e,f,g,h,i,j;Ja(a,b,c,d);b=a.hg.getError();if(!b)return;d=new Bf;e=Bj(b,4);f=new K;f.g9=G(16);F(f,f.g7,A(117));J(f,f.g7,b,10);F(f,f.g7,A(118));b=f.g7;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g9;i=h.data;c=f.g7;j=i.length;if(c>=0&&c<=(j-0|0)){g.g8=L(h.data,0,c);d.g$=1;d.g_=1;d.hb=g;E(d);}d=new I;Y(d);E(d);},
Xr=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hg;d=a.h2;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hz;c=V(c.getProgramInfoLog(d));b=a.hg.getError();if(!b)return c;c=new Bf;h=Bj(b,4);d=new K;d.g9=G(16);F(d,d.g7,A(117));J(d,d.g7,b,10);F(d,d.g7,A(118));b=d.g7;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g9;j=e.data;f=d.g7;g=j.length;if(f
>=0&&f<=(g-0|0)){i.g8=L(e.data,0,f);c.g$=1;c.g_=1;c.hb=i;E(c);}c=new I;Y(c);E(c);},
SI=(a,b,c,d)=>{let e,f,g,h,i,j;H$(a,b,c,d);b=a.hg.getError();if(!b)return;d=new Bf;e=Bj(b,4);f=new K;f.g9=G(16);F(f,f.g7,A(117));J(f,f.g7,b,10);F(f,f.g7,A(118));b=f.g7;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g9;i=h.data;c=f.g7;j=i.length;if(c>=0&&c<=(j-0|0)){g.g8=L(h.data,0,c);d.g$=1;d.g_=1;d.hb=g;E(d);}d=new I;Y(d);E(d);},
AFP=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hg;d=a.io;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hz;c=V(c.getShaderInfoLog(d));b=a.hg.getError();if(!b)return c;c=new Bf;h=Bj(b,4);d=new K;d.g9=G(16);F(d,d.g7,A(117));J(d,d.g7,b,10);F(d,d.g7,A(118));b=d.g7;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g9;j=e.data;f=d.g7;g=j.length;if(f
>=0&&f<=(g-0|0)){i.g8=L(e.data,0,f);c.g$=1;c.g_=1;c.hb=i;E(c);}c=new I;Y(c);E(c);},
AHC=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.hg;e=a.h2;if(!b)e=!e.hv?null:e.ht;else{f=e.hr;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hx));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.hu;}}e=g<0?null:e.hs.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hz;c=d.getUniformLocation(e,Br(c));if(c===null)h=(-1);else{d=a.iW;if(!b)d=!d.hv?null:d.ht;else{f=d.hr;h=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&
d.hu;}}d=h<0?null:d.hs.data[h];}d=d;if(d===null){d=Cr(51,0.800000011920929);Cd(a.iW,b,d);}h=a.kw;a.kw=h+1|0;Cd(d,h,Ce(c));}b=a.hg.getError();if(!b)return h;c=new Bf;i=Bj(b,4);d=new K;d.g9=G(16);F(d,d.g7,A(117));J(d,d.g7,b,10);F(d,d.g7,A(118));b=d.g7;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.g9;j=f.data;h=d.g7;g=j.length;if(h>=0&&h<=(g-0|0)){e.g8=L(f.data,0,h);c.g$=1;c.g_=1;c.hb=e;E(c);}c=new I;Y(c);E(c);},
ABB=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hg;d=a.h2;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hz;c.linkProgram(d);b=a.hg.getError();if(!b)return;c=new Bf;h=Bj(b,4);d=new K;d.g9=G(16);F(d,d.g7,A(117));J(d,d.g7,b,10);F(d,d.g7,A(118));b=d.g7;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g9;j=e.data;f=d.g7;g=j.length;if(f>=0&&f<=(g-0
|0)){i.g8=L(e.data,0,f);c.g$=1;c.g_=1;c.hb=i;E(c);}c=new I;Y(c);E(c);},
AJE=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.hg;e=a.io;if(!b)e=!e.hv?null:e.ht;else{f=e.hr;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hx));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.hu;}}e=g<0?null:e.hs.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hz;d.shaderSource(e,Br(c));b=a.hg.getError();if(!b)return;c=new Bf;i=Bj(b,4);d=new K;d.g9=G(16);F(d,d.g7,A(117));J(d,d.g7,b,10);F(d,d.g7,A(118));b=d.g7;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.g9;j=f.data;g=d.g7;h=j.length;if(g>=0&&
g<=(h-0|0)){e.g8=L(f.data,0,g);c.g$=1;c.g_=1;c.hb=e;E(c);}c=new I;Y(c);E(c);},
AJW=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.iW;e=a.jv;if(!e)d=!d.hv?null:d.ht;else{f=d.hr;g=Bd(X(U(O(e),B(2135587861, 2654435769)),d.hx));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.hu;}}d=g<0?null:d.hs.data[g];}d=d;if(!b)d=!d.hv?null:d.ht;else{f=d.hr;e=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.hu;}}d=e<0?null:d.hs.data[e];}Bp();i=d===null?null:d[Be]===true?d:d.hz;a.hg.uniform1i(i,c);b=a.hg.getError();if
(!b)return;d=new Bf;i=Bj(b,4);j=new K;j.g9=G(16);F(j,j.g7,A(117));J(j,j.g7,b,10);F(j,j.g7,A(118));b=j.g7;if(i===null)i=A(2);F(j,b,i);k=new H;f=j.g9;l=f.data;c=j.g7;e=l.length;if(c>=0&&c<=(e-0|0)){k.g8=L(f.data,0,c);d.g$=1;d.g_=1;d.hb=k;E(d);}d=new I;Y(d);E(d);},
SK=(a,b)=>{let c,d,e,f,g,h,i,j;a.jv=b;c=a.hg;d=a.h2;if(!b)d=!d.hv?null:d.ht;else{e=d.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hx));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hu;}}d=f<0?null:d.hs.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hz;c.useProgram(d);b=a.hg.getError();if(!b)return;c=new Bf;h=Bj(b,4);d=new K;d.g9=G(16);F(d,d.g7,A(117));J(d,d.g7,b,10);F(d,d.g7,A(118));b=d.g7;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g9;j=e.data;f=d.g7;g=j.length;if(f>=0&&f<=
(g-0|0)){i.g8=L(e.data,0,f);c.g$=1;c.g_=1;c.hb=i;E(c);}c=new I;Y(c);E(c);},
U_=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.hg.vertexAttribPointer(b,c,d,!!e,f,g);b=a.hg.getError();if(!b)return;h=new Bf;i=Bj(b,4);j=new K;j.g9=G(16);F(j,j.g7,A(117));J(j,j.g7,b,10);F(j,j.g7,A(118));b=j.g7;if(i===null)i=A(2);F(j,b,i);k=new H;l=j.g9;m=l.data;c=j.g7;d=m.length;if(c>=0&&c<=(d-0|0)){k.g8=L(l.data,0,c);h.g$=1;h.g_=1;h.hb=k;E(h);}h=new I;Y(h);E(h);};
function O_(){let a=this;C.call(a);a.jN=0;a.hr=null;a.hs=null;a.ht=null;a.hv=0;a.pn=0.0;a.m4=0;a.hx=0;a.hu=0;}
let Ys=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.pn=c;d=G8(b,c);a.m4=d*c|0;b=d-1|0;a.hu=b;a.hx=DV(O(b));a.hr=S(d);a.hs=R(C,d);return;}e=new Bs;f=new K;f.g9=G(16);F(f,f.g7,A(40));GS(f,f.g7,c);g=new H;h=f.g9;i=h.data;d=f.g7;j=i.length;if(d>=0&&d<=(j-0|0)){g.g8=L(h.data,0,d);e.g$=1;e.g_=1;e.hb=g;E(e);}f=new I;f.g$=1;f.g_=1;E(f);},
Cr=(a,b)=>{let c=new O_();Ys(c,a,b);return c;},
Cd=(a,b,c)=>{let d,e,f,g,h;if(!b){d=a.ht;a.ht=c;if(!a.hv){a.hv=1;a.jN=a.jN+1|0;}return d;}e=a.hr;f=Bd(X(U(O(b),B(2135587861, 2654435769)),a.hx));a:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.hu;}}if(f>=0){e=a.hs.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.hs.data[f]=c;b=a.jN+1|0;a.jN=b;if(b>=a.m4)AGL(a,g.length<<1);return null;},
QG=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.hv)return null;a.hv=0;c=a.ht;a.ht=null;a.jN=a.jN-1|0;return c;}d=a.hr;e=U(O(b),B(2135587861, 2654435769));f=a.hx;g=Bd(X(e,f));a:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break a;}if(i==b)break;g=(g+1|0)&a.hu;}}if(g<0)return null;j=a.hs.data;k=j[g];l=a.hu;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=Bd(X(U(O(n),B(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.jN=a.jN-1|0;return k;},
AJ5=(a,b,c)=>{let d,e,f,g;a:{d=a.hs;if(b===null){if(a.hv&&a.ht===null)return 1;d=d.data;e=a.hr;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.ht)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.hv){g=a.ht;if(b===g?1:g instanceof Ed&&g.jr==b.jr?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof Ed&&g.jr==b.jr?1:0)return 1;f=f+(-1)|0;}}return 0;},
AGL=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.hr.data.length;a.m4=b*a.pn|0;d=b-1|0;a.hu=d;d=DV(O(d));a.hx=d;e=a.hr;f=a.hs;g=S(b);a.hr=g;h=R(C,b);a.hs=h;if(a.jN>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k){l=f.data[j];b=Bd(X(U(O(k),B(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.hu;}h[b]=k;i[b]=l;}j=j+1|0;}}}};
function NM(){let a=this;C.call(a);a.i8=0;a.j5=null;a.k4=0;a.qT=0.0;a.nh=0;a.kS=0;a.jY=0;}
let WK=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.qT=c;d=G8(b,c);a.nh=d*c|0;b=d-1|0;a.jY=b;a.kS=DV(O(b));a.j5=S(d);return;}e=new Bs;f=new K;f.g9=G(16);F(f,f.g7,A(40));GS(f,f.g7,c);g=new H;h=f.g9;i=h.data;d=f.g7;j=i.length;if(d>=0&&d<=(j-0|0)){g.g8=L(h.data,0,d);e.g$=1;e.g_=1;e.hb=g;E(e);}f=new I;f.g$=1;f.g_=1;E(f);},
La=(a,b)=>{let c=new NM();WK(c,a,b);return c;},
V1=(a,b)=>{let c,d,e,f;if(!b){if(a.k4)return 0;a.k4=1;a.i8=a.i8+1|0;return 1;}c=a.j5;d=Bd(X(U(O(b),B(2135587861, 2654435769)),a.kS));a:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break a;}if(f==b)break;d=(d+1|0)&a.jY;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.i8+1|0;a.i8=b;if(b>=a.nh)V_(a,e.length<<1);return 1;},
AIm=(a,b)=>{let c,d,e,f,g,h,i,j;if(!b){if(!a.k4)return 0;a.k4=0;a.i8=a.i8-1|0;return 1;}c=a.j5;d=U(O(b),B(2135587861, 2654435769));e=a.kS;f=Bd(X(d,e));a:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.jY;}}if(f<0)return 0;h=a.jY;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=Bd(X(U(O(b),B(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.i8=a.i8-1|0;return 1;},
V_=(a,b)=>{let c,d,e,f,g,h,i;a:{c=a.j5.data.length;a.nh=b*a.qT|0;d=b-1|0;a.jY=d;d=DV(O(d));a.kS=d;e=a.j5;f=S(b);a.j5=f;if(a.i8>0){f=f.data;g=0;while(true){if(g>=c)break a;h=e.data[g];if(h){i=Bd(X(U(O(h),B(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.jY;}f[i]=h;}g=g+1|0;}}}};
let PS=D(0);
function I0(){C.call(this);this.md=null;}
let So=a=>{let b;b=a.md;b.ml=1;PK(Br(b.nV));},
VV=a=>{let b;b=a.md;b.ml=1;PK(Br(b.nV));},
R3=a=>{a.md.ml=0;};
let QX=D(0);
function Q5(){let a=this;C.call(a);a.lb=null;a.oj=null;a.sh=null;}
let GT=0;
let AH6=a=>{let b,c,d,e,f,g,h,i,$$je;b=US();a.lb=b;c=ADM(b);a.oj=c;b=new NT;d=a.lb;e=new Cy;e.iJ=0;e.hW=R(C,16);b.mp=e;b.my=2147483647;b.rt=d;b.rE=c;a.sh=b;b=Dc.l4;Er(b);a:{try{Di(b,a);CO(b);break a;}catch($$e){$$je=BP($$e);d=$$je;}CO(b);E(d);}if(a.lb.state!=='running'?1:0){b=new HK;b.sf=a;U8(a.lb,BL(b,"unlockFunction"));}else{if(!GT&&Dc.kA>=2){if(BH===null){c=new Ck;e=new B5;DL(e);e.h9=BF(32);Ez(c,e);c.h_=E6();c.h$=G(32);c.id=0;c.ie=BX;BH=c;}c=new K;c.g9=G(16);Cs(c,c.g7,Cn(A(133)));Cs(c,c.g7,Cn(A(51)));Cs(c,
c.g7,Cn(A(134)));b=new H;f=c.g9;g=f.data;h=c.g7;i=g.length;if(h>=0&&h<=(i-0|0)){b.g8=L(f.data,0,h);BI(Br(b));BI("\n");}else{b=new I;b.g$=1;b.g_=1;E(b);}}GT=1;}},
AIr=()=>{let a=new Q5();AH6(a);return a;},
AGE=a=>{a.oj.disconnect(a.lb.destination);},
AC2=a=>{a.oj.connect(a.lb.destination);},
U8=(b,c)=>{var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){document.addEventListener(eventName,unlock);});},
US=()=>{var AudioContext=window.AudioContext||window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;},
ADM=b=>{var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;};
function KJ(){CM.call(this);this.q_=null;}
let PP=D(CE);
function H9(){Cv.call(this);this.oJ=null;}
let I=D(BA);
let U0=a=>{a.g$=1;a.g_=1;},
TA=()=>{let a=new I();U0(a);return a;};
let DT=D(0);
let L9=D(0);
let Ns=D(0);
let Nj=D(0);
let Ov=D(0);
let QT=D(0);
let Pk=D(0);
let LR=D(0);
let H7=D(0);
let K6=D();
let AEh=(a,b)=>{b=a.dh(b);Bp();return b===null?null:b instanceof E0()&&b instanceof DD?(b[Be]===true?b:b.hz):b;},
AGZ=(a,b,c)=>{a.di(V(b),CC(c,"handleEvent"));},
AGj=(a,b,c)=>{a.dj(V(b),CC(c,"handleEvent"));},
AD6=(a,b,c,d)=>{a.dk(V(b),CC(c,"handleEvent"),d?1:0);},
AIR=(a,b)=>{return !!a.dl(b);},
Va=a=>{return a.dm();},
R2=(a,b,c,d)=>{a.dn(V(b),CC(c,"handleEvent"),d?1:0);};
let IH=D();
function Hi(){let a=this;IH.call(a);a.m8=0;a.ko=null;a.pN=0.0;a.nj=0;a.l1=0;a.lI=0;a.qV=0;}
let Rd=null,MD=null;
let H2=(a,b)=>{let c,d,e;a.lI=(-1);if(b<0){c=new Bs;c.g$=1;c.g_=1;E(c);}a.m8=0;if(!b)b=1;d=R(Gv,b);e=d.data;a.ko=d;b=e.length;a.l1=b;a.pN=0.75;a.nj=b*0.75|0;},
ALq=a=>{let b=new Hi();H2(b,a);return b;},
CD=(a,b,c)=>{let d,e,f,g,h,i,j;Er(a);try{if(b!==null&&c!==null){a:{if(!b.h5){d=0;while(true){if(d>=b.g8.length)break a;b.h5=(31*b.h5|0)+b.g8.charCodeAt(d)|0;d=d+1|0;}}}e=b.h5&2147483647;f=a.ko.data;g=e%f.length|0;h=f[g];while(h!==null){b:{d=h.p9;if(!b.h5){i=0;while(true){if(i>=b.g8.length)break b;b.h5=(31*b.h5|0)+b.g8.charCodeAt(i)|0;i=i+1|0;}}}if(d==b.h5&&h.jw.X(b)?1:0)break;h=h.mG;}if(h!==null){j=h.jX;h.jX=c;return j;}a.qV=a.qV+1|0;d=a.m8+1|0;a.m8=d;if(d>a.nj){AB4(a);g=e%a.ko.data.length|0;}if(g<a.l1)a.l1
=g;if(g>a.lI)a.lI=g;c:{j=new Gv;j.jw=b;j.jX=c;if(!b.h5){d=0;while(true){if(d>=b.g8.length)break c;b.h5=(31*b.h5|0)+b.g8.charCodeAt(d)|0;d=d+1|0;}}}j.p9=b.h5;f=a.ko.data;j.mG=f[g];f[g]=j;return null;}b=new CU;b.g$=1;b.g_=1;E(b);}finally{CO(a);}},
AB4=a=>{let b,c,d,e,f,g,h,i,j;b=(a.ko.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=R(Gv,b);e=d.data;f=a.lI+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.l1)break;h=a.ko.data[f];while(h!==null){i=(h.jw.W()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.mG;h.mG=e[i];e[i]=h;h=j;}}a.l1=g;a.lI=c;a.ko=d;a.nj=e.length*a.pN|0;},
AMj=()=>{Rd=new HG;MD=new HF;};
function Jw(){Hi.call(this);this.r$=null;}
let Y5=D();
let E3=D(BR);
let He=null,GY=null,ID=null,N1=null,AFo=null;
let AB$=()=>{let b,c,d,e;b=new E3;b.hw=A(135);b.hl=0;He=b;c=new E3;c.hw=A(136);c.hl=1;GY=c;d=new E3;d.hw=A(131);d.hl=2;ID=d;e=new E3;e.hw=A(137);e.hl=3;N1=e;AFo=P(E3,[b,c,d,e]);};
let CN=D();
let WF=D(CN);
let VX=D(CN);
let AAz=D(CN);
let ADn=D(CN);
let Zj=D(CN);
function Ip(){C.call(this);this.r5=null;}
let Z7=(a,b)=>{b.preventDefault();};
function Iq(){C.call(this);this.sr=null;}
let AJH=(a,b)=>{b.preventDefault();};
function Io(){let a=this;C.call(a);a.oU=null;a.oN=null;a.o7=null;}
let ACJ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new Cy;e.iJ=1;e.hW=R(C,16);f=0;while(true){if(f>=d)break a;g=c[f];h=V(g.name);i=Fo(h,46,h.g8.length-1|0);b=i==(-1)?A(59):Cc(h,i+1|0,h.g8.length);j=b.g8.toLowerCase();if(j!==b.g8)b=OX(j);if(Uw(b))j=Ej;else{if(b===A(138))k=1;else if(!(A(138) instanceof H))k=0;else{j=A(138);k=b.g8!==j.g8?0:1;}b:{if(!k){if(b===A(139))k=1;else if(!(A(139) instanceof H))k=0;else{j=A(139);k=b.g8!==j.g8?0:1;}if(!k){if(b===A(140))k
=1;else if(!(A(140) instanceof H))k=0;else{j=A(140);k=b.g8!==j.g8?0:1;}if(!k){k=0;break b;}}}k=1;}j=k?D6:!Zx(b)?Ea:Eq;}l=new FileReader();b=new Jj;b.mJ=a;b.nx=j;b.oy=h;b.l_=e;b.oD=d;l.addEventListener("load",BL(b,"handleEvent"));if(j!==Ea&&j!==D6){if(j===Ej)l.readAsDataURL(g);else if(j===Eq)l.readAsText(g);}else l.readAsArrayBuffer(g);f=f+1|0;}}}},
AEW=(a,b)=>{ACJ(a,b);};
function NT(){let a=this;Cv.call(a);a.rt=null;a.rE=null;}
let PX=D(0);
function HK(){C.call(this);this.sf=null;}
let WW=a=>{let b,c,d,e,f,g;if(!GT&&Dc.kA>=2){if(BH===null){b=new Ck;Qw(b,AHH(32),0);BH=b;}b=new K;b.g9=G(16);Ij(b,b.g7,A(133));Ij(b,b.g7,A(51));Ij(b,b.g7,A(134));c=new H;d=b.g9;e=d.data;f=b.g7;g=e.length;if(f>=0&&f<=(g-0|0)){c.g8=L(d.data,0,f);BI(Br(c));BI("\n");}else E(TA());}GT=1;};
let VJ=D(CN);
function Nd(){let a=this;C.call(a);a.hH=null;a.ii=0;a.no=null;a.oS=0;a.k6=0;a.j7=0;a.iA=0;a.pP=null;}
let HN=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new HW;d.ia=R(C,10);e=MB(a,b);f=0;g=0;if(!b.g8.length){h=R(H,1);h.data[0]=A(59);return h;}a:{while(true){if(!MS(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.jG;if(!j.j2){b=new CV;b.g$=1;b.g_=1;Bl(b);E(b);}if(0>=j.kQ){b=new I;d=new K;BB(d);d.g9=G(16);J(d,d.g7,0,10);e=new H;h=d.g9;k=h.data;f=d.g7;g=k.length;if(f>=0&&f<=(g-0|0)){e.g8=L(h.data,0,f);b.g$=1;b.g_=1;b.hb=e;E(b);}b=new I;b.g$=1;b.g_=1;E(b);}j=Cc(b,g,j.ic.data[0]);Fn(d,d.hJ+1|0);h=d.ia.data;f=d.hJ;d.hJ=f+1|0;h[f]
=j;d.iE=d.iE+1|0;j=e.jG;if(!j.j2)break;if(0>=j.kQ){b=new I;d=new K;BB(d);d.g9=G(16);J(d,d.g7,0,10);e=new H;h=d.g9;k=h.data;f=d.g7;g=k.length;if(f>=0&&f<=(g-0|0)){e.g8=L(h.data,0,f);b.g$=1;b.g_=1;b.hb=e;E(b);}b=new I;b.g$=1;b.g_=1;E(b);}g=j.ic.data[1];f=i;}b=new CV;b.g$=1;b.g_=1;Bl(b);E(b);}b:{b=Cc(b,g,b.g8.length);Fn(d,d.hJ+1|0);h=d.ia.data;i=d.hJ;d.hJ=i+1|0;h[i]=b;d.iE=d.iE+1|0;f=f+1|0;if(!c){while(true){f=f+(-1)|0;if(f<0)break b;if(f<0)break;if(f>=d.hJ)break;if(d.ia.data[f].g8.length)break b;PC(d,f);}b=new I;b.g$
=1;b.g_=1;E(b);}}if(f<0)f=0;return W7(d,R(H,f));},
Gx=(b,c)=>{let d;if(b===null){b=new CU;b.g$=1;b.g_=1;b.hb=A(141);E(b);}if(c&&(c|255)!=255){b=new Bs;b.g$=1;b.g_=1;b.hb=A(59);E(b);}M=1;d=new Nd;d.no=R(CA,10);d.k6=(-1);d.j7=(-1);d.iA=(-1);return XJ(d,b,c);},
XJ=(a,b,c)=>{let d,e,f;a.hH=Xm(b,c);a.ii=c;b=Q_(a,(-1),c,null);a.pP=b;d=a.hH;if(!d.h0&&!d.hn&&d.hj==d.im&&!(d.hL===null?0:1)?1:0){if(a.oS)b.dz();return a;}b=new BT;e=d.hX;f=d.iU;b.g$=1;b.g_=1;b.hB=(-1);b.hZ=A(59);b.hV=e;b.hB=f;E(b);},
AJb=(a,b)=>{let c,d,e,f,g,h;c=new B7;d=a.ii;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;g=new Ba;g.hh=S(64);c.hk=g;g=new Ba;g.hh=S(2);c.ho=g;c.mz=e;c.m$=f;while(true){h=a.hH;d=h.h0;if(!d&&!h.hn&&h.hj==h.im&&!(h.hL===null?0:1)?1:0)break;f=!d&&!h.hn&&h.hj==h.im&&!(h.hL===null?0:1)?1:0;if(!(!f&&!(h.hL===null?0:1)&&(d<0?0:1)?1:0))break;f=h.hn;if(f&&f!=(-536870788)&&f!=(-536870871))break;Bi(h);Ch(c,h.jW);g=a.hH;if(g.h0!=(-536870788))continue;Bi(g);}g=IW(a,c);g.dD(b);return g;},
Q_=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new HW;e.ia=R(C,10);f=a.ii;g=0;if(c!=f)a.ii=c;a:{switch(b){case -1073741784:h=new NG;i=a.iA+1|0;a.iA=i;C3();c=M;M=c+1|0;d=new T;d.g9=G(20);h.hi=(J(d,d.g7,c,10)).bj();h.ig=i;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Mk;i=a.iA+1|0;a.iA=i;C3();c=M;M=c+1|0;d=new T;d.g9=G(20);h.hi=(J(d,d.g7,c,10)).bj();h.ig=i;break a;case -33554392:h=new Od;i=a.iA+1|0;a.iA=i;C3();c=M;M=c+1|0;d=new T;d.g9=G(20);h.hi=(J(d,d.g7,c,10)).bj();h.ig=i;break a;default:i
=a.k6+1|0;a.k6=i;if(d!==null){h=new CA;C3();c=M;M=c+1|0;d=new T;d.g9=G(20);h.hi=(J(d,d.g7,c,10)).bj();h.ig=i;}else{h=new EW;C3();j=M;M=j+1|0;d=new T;d.g9=G(20);h.hi=(J(d,d.g7,j,10)).bj();h.ig=0;g=1;}c=a.k6;if(c<=(-1))break a;if(c>=10)break a;a.no.data[c]=h;break a;}h=new Q6;C3();j=M;M=j+1|0;d=new T;d.g9=G(20);h.hi=(J(d,d.g7,j,10)).bj();h.ig=(-1);}while(true){k=a.hH;l=k.h0;j=!l&&!k.hn&&k.hj==k.im&&!(k.hL===null?0:1)?1:0;j=!j&&!(k.hL===null?0:1)&&(l<0?0:1)?1:0;if(j&&k.hn==(-536870788))k=AJb(a,h);else if(l==(-536870788))
{k=new D2;j=M;M=j+1|0;d=new T;d.g9=G(20);k.hi=(J(d,d.g7,j,10)).bj();k.ha=h;k.hD=1;k.hQ=1;k.hD=0;Bi(a.hH);}else{k=L0(a,h);d=a.hH;if(d.h0==(-536870788))Bi(d);}if(k!==null){Fn(e,e.hJ+1|0);m=e.ia.data;l=e.hJ;e.hJ=l+1|0;m[l]=k;e.iE=e.iE+1|0;}k=a.hH;j=k.h0;if(!j&&!k.hn&&k.hj==k.im&&!(k.hL===null?0:1)?1:0)break;if(j==(-536870871))break;}if(k.jW==(-536870788)){k=new D2;c=M;M=c+1|0;d=new T;d.g9=G(20);k.hi=(J(d,d.g7,c,10)).bj();k.ha=h;k.hD=1;k.hQ=1;k.hD=0;Fn(e,e.hJ+1|0);m=e.ia.data;j=e.hJ;e.hJ=j+1|0;m[j]=k;e.iE=e.iE+
1|0;}if(a.ii!=f&&!g){a.ii=f;k=a.hH;k.hS=f;k.hn=k.h0;k.jC=k.hL;j=k.iU;k.hj=j+1|0;k.lE=j;Bi(k);}switch(b){case -1073741784:break;case -536870872:d=new Kx;b=M;M=b+1|0;k=new T;BB(k);k.g9=G(20);d.hi=(J(k,k.g7,b,10)).bj();d.h1=e;d.iB=h;d.hU=h.ig;return d;case -268435416:d=new Qa;b=M;M=b+1|0;k=new T;BB(k);k.g9=G(20);d.hi=(J(k,k.g7,b,10)).bj();d.h1=e;d.iB=h;d.hU=h.ig;return d;case -134217688:d=new Nh;b=M;M=b+1|0;k=new T;BB(k);k.g9=G(20);d.hi=(J(k,k.g7,b,10)).bj();d.h1=e;d.iB=h;d.hU=h.ig;return d;case -67108824:k=new Ot;b
=M;M=b+1|0;d=new T;BB(d);d.g9=G(20);k.hi=(J(d,d.g7,b,10)).bj();k.h1=e;k.iB=h;k.hU=h.ig;return k;case -33554392:d=new Dk;b=M;M=b+1|0;k=new T;k.g9=G(20);d.hi=(J(k,k.g7,b,10)).bj();d.h1=e;d.iB=h;d.hU=h.ig;return d;default:c=e.hJ;switch(c){case 0:d=new D2;b=M;M=b+1|0;e=new T;e.g9=G(20);d.hi=(J(e,e.g7,b,10)).bj();d.ha=h;d.hD=1;d.hQ=1;d.hD=0;return d;case 1:d=new EP;if(0>=c){d=new I;d.g$=1;d.g_=1;E(d);}e=e.ia.data[0];b=M;M=b+1|0;k=new T;k.g9=G(20);d.hi=(J(k,k.g7,b,10)).bj();d.iK=e;d.iB=h;d.hU=h.ig;return d;default:}d
=new BU;b=M;M=b+1|0;k=new T;k.g9=G(20);d.hi=(J(k,k.g7,b,10)).bj();d.h1=e;d.iB=h;d.hU=h.ig;return d;}k=new Hn;j=M;M=j+1|0;d=new T;d.g9=G(20);k.hi=(J(d,d.g7,j,10)).bj();k.h1=e;k.iB=h;k.hU=h.ig;return k;},
AF4=a=>{let b,c,d,e,f,g,h,i,j,k;b=new Lp;b.g9=G(16);while(true){c=a.hH;d=c.h0;if(!d&&!c.hn&&c.hj==c.im&&!(c.hL===null?0:1)?1:0)break;e=!d&&!c.hn&&c.hj==c.im&&!(c.hL===null?0:1)?1:0;if(!(!e&&!(c.hL===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.jC;d=f===null?0:1;if(!(!d&&!c.hn)){d=f===null?0:1;if(!(!d&&(c.hn<0?0:1))){g=c.hn;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}}Bi(c);e=c.jW;if(!(e>=65536&&e<=1114111
?1:0)){d=e&65535;e=b.g7;Bn(b,e,e+1|0);b.g9.data[e]=d;}else{h=(EN(e)).data;d=0;e=h.length;g=b.g7;Bn(b,g,g+e|0);i=e+d|0;while(d<i){j=b.g9.data;k=g+1|0;e=d+1|0;j[g]=h[d];g=k;d=e;}}}e=a.ii;if(!((e&2)!=2?0:1))return ZO(b);if(!((e&64)!=64?0:1)){c=new K0;d=M;M=d+1|0;f=new T;f.g9=G(20);c.hi=(J(f,f.g7,d,10)).bj();c.hD=1;f=new H;h=b.g9;j=h.data;e=b.g7;g=j.length;if(e>=0&&e<=(g-0|0)){f.g8=L(h.data,0,e);c.lG=f;c.hD=b.g7;return c;}b=new I;b.g$=1;b.g_=1;E(b);}c=new Ks;d=M;M=d+1|0;f=new T;f.g9=G(20);c.hi=(J(f,f.g7,d,10)).bj();c.hD
=1;f=new K;f.g9=G(16);e=0;while(true){d=B4(e,b.g7);if(d>=0){b=new H;h=f.g9;j=h.data;g=f.g7;d=j.length;if(g>=0&&g<=(d-0|0)){b.g8=L(h.data,0,g);c.mx=b;c.hD=f.g7;return c;}b=new I;b.g$=1;b.g_=1;E(b);}if(e<0)break;if(d>=0)break;d=b.g9.data[e];if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}d=B1(BC,d)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}i=B1(BD,d)&65535;g=f.g7;Bn(f,g,g+1|0);f.g9.data[g]=i;e=e+1|0;}b=new I;b.g$=1;b.g_=1;E(b);},
AGe=a=>{let b,c,d,e,f,g,h,i,j;b=S(4);c=(-1);d=(-1);e=a.hH;f=e.h0;if(!(!f&&!e.hn&&e.hj==e.im&&!(e.hL===null?0:1)?1:0)){g=!f&&!e.hn&&e.hj==e.im&&!(e.hL===null?0:1)?1:0;if(!g&&!(e.hL===null?0:1)&&(f<0?0:1)?1:0){h=b.data;Bi(e);c=e.jW;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=G(3);b=h.data;b[0]=c&65535;e=a.hH;i=e.h0;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;Bi(e);e=a.hH;i=e.h0;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;Bi(e);e=new Go;c=M;M=c+1|0;j=new T;j.g9=G(20);e.hi=(J(j,j.g7,c,10)).bj();e.ke=h;e.lR=3;return e;}e=new Go;c
=M;M=c+1|0;j=new T;j.g9=G(20);e.hi=(J(j,j.g7,c,10)).bj();e.ke=h;e.lR=2;return e;}i=a.ii;if(!((i&2)!=2?0:1)){e=new C_;i=b[0];c=M;M=c+1|0;j=new T;j.g9=G(20);e.hi=(J(j,j.g7,c,10)).bj();e.hD=1;e.iC=i;return e;}if(!((i&64)!=64?0:1)){e=new Hw;i=b[0];c=M;M=c+1|0;j=new T;j.g9=G(20);e.hi=(J(j,j.g7,c,10)).bj();e.hD=1;e.oq=i;e.nb=EE(i);return e;}e=new J2;i=b[0];c=M;M=c+1|0;j=new T;j.g9=G(20);e.hi=(J(j,j.g7,c,10)).bj();e.hD=1;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}i=B1(BC,i)&65535;if
(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}e.m0=B1(BD,i)&65535;return e;}h=b.data;c=1;while(c<4){e=a.hH;g=e.h0;if(!g&&!e.hn&&e.hj==e.im&&!(e.hL===null?0:1)?1:0)break;i=!g&&!e.hn&&e.hj==e.im&&!(e.hL===null?0:1)?1:0;if(!(!i&&!(e.hL===null?0:1)&&(g<0?0:1)?1:0))break;i=c+1|0;Bi(e);h[c]=e.jW;c=i;}if(c==1){i=h[0];if(!(Uk.cV(i)==AGv?0:1))return Q4(a,h[0]);}d=a.ii;if(!((d&2)!=2?0:1)){e=new Ec;i=M;M=i+1|0;j=new T;j.g9=G(20);e.hi=(J(j,j.g7,i,10)).bj();e.kx=1;e.kJ=b;e.kG=c;return e;}if
((d&64)!=64?0:1){e=new QY;i=M;M=i+1|0;j=new T;j.g9=G(20);e.hi=(J(j,j.g7,i,10)).bj();e.kx=1;e.kJ=b;e.kG=c;return e;}e=new OP;i=M;M=i+1|0;j=new T;j.g9=G(20);e.hi=(J(j,j.g7,i,10)).bj();e.kx=1;e.kJ=b;e.kG=c;return e;},
L0=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hH;d=c.h0;e=!d&&!c.hn&&c.hj==c.im&&!(c.hL===null?0:1)?1:0;e=!e&&!(c.hL===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.jC===null?0:1)&&(c.hn<0?0:1)){if(!((a.ii&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!(d<=57343&&d>=56320?1:0)?AF4(a):J7(a,b,QW(a,b));}else{f=AGe(a);g=a.hH;e=g.h0;if(!(!e&&!g.hn&&g.hj==g.im&&!(g.hL===null?0:1)?1:0)&&!(e==(-536870871)&&!(b instanceof EW))&&e!=(-536870788)){h=!e&&!g.hn&&g.hj==g.im&&!(g.hL===null?0:1)?1:0;if(!(!h&&!(g.hL===null?0:1)&&(e<0?0:1)?1:0))f
=J7(a,b,f);}}}else if(d!=(-536870871))f=J7(a,b,QW(a,b));else{if(b instanceof EW){b=new BT;g=c.hX;h=c.iU;b.g$=1;b.g_=1;b.hB=(-1);b.hZ=A(59);b.hV=g;b.hB=h;E(b);}f=new D2;e=M;M=e+1|0;c=new T;c.g9=G(20);f.hi=(J(c,c.g7,e,10)).bj();f.ha=b;f.hD=1;f.hQ=1;f.hD=0;}c=a.hH;d=c.h0;e=!d&&!c.hn&&c.hj==c.im&&!(c.hL===null?0:1)?1:0;if(!e&&!(d==(-536870871)&&!(b instanceof EW))&&d!=(-536870788)){g=L0(a,b);if(f instanceof CJ&&!(f instanceof D$)&&!(f instanceof CL)&&!(f instanceof D8)){b=f;if(!g.dT(b.hA)){f=new Qm;c=b.hA;i=b.ha;j
=b.hQ;e=M;M=e+1|0;b=new T;b.g9=G(20);f.hi=(J(b,b.g7,e,10)).bj();f.ha=i;f.hA=c;f.hQ=j;f.hK=c;c.dD(f);}}if((g.dU()&65535)!=43)f.dD(g);else f.dD(g.hA);}else{if(f===null)return null;f.dD(b);}if((f.dU()&65535)!=43)return f;return f.hA;},
J7=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.hH;e=d.h0;if(c!==null&&!(c instanceof B2)){switch(e){case -2147483606:Bi(d);d=new Rl;f=M;M=f+1|0;g=new T;g.g9=G(20);d.hi=(J(g,g.g7,f,10)).bj();d.ha=b;d.hA=c;d.hQ=e;C3();c.dD(F4);return d;case -2147483605:Bi(d);d=new Mf;h=M;M=h+1|0;g=new T;g.g9=G(20);d.hi=(J(g,g.g7,h,10)).bj();d.ha=b;d.hA=c;d.hQ=(-2147483606);C3();c.dD(F4);return d;case -2147483585:Bi(d);d=new L7;h=M;M=h+1|0;g=new T;BB(g);g.g9=G(20);d.hi=(J(g,g.g7,h,10)).bj();d.ha=b;d.hA=c;d.hQ=(-536870849);C3();c.dD(F4);return d;case -2147483525:g
=new KW;i=d.hL;Bi(d);d=i;f=a.j7+1|0;a.j7=f;j=M;M=j+1|0;i=new T;BB(i);i.g9=G(20);g.hi=(J(i,i.g7,j,10)).bj();g.ha=b;g.hA=c;g.hQ=(-536870849);g.jV=d;g.iY=f;C3();c.dD(F4);return g;case -1073741782:case -1073741781:Bi(d);d=new Nw;f=M;M=f+1|0;g=new T;g.g9=G(20);d.hi=(J(g,g.g7,f,10)).bj();d.ha=b;d.hA=c;d.hQ=e;c.dD(d);return d;case -1073741761:Bi(d);d=new MT;h=M;M=h+1|0;g=new T;BB(g);g.g9=G(20);d.hi=(J(g,g.g7,h,10)).bj();d.ha=b;d.hA=c;d.hQ=(-536870849);c.dD(b);return d;case -1073741701:g=new Po;i=d.hL;Bi(d);d=i;h=a.j7
+1|0;a.j7=h;j=M;M=j+1|0;i=new T;BB(i);i.g9=G(20);g.hi=(J(i,i.g7,j,10)).bj();g.ha=b;g.hA=c;g.hQ=(-536870849);g.jV=d;g.iY=h;c.dD(g);return g;case -536870870:case -536870869:Bi(d);if(c.dU()!=(-2147483602)){d=new CL;f=M;M=f+1|0;g=new T;g.g9=G(20);d.hi=(J(g,g.g7,f,10)).bj();d.ha=b;d.hA=c;d.hQ=e;}else{h=a.ii;if((h&32)!=32?0:1){d=new Ny;f=M;M=f+1|0;g=new T;g.g9=G(20);d.hi=(J(g,g.g7,f,10)).bj();d.ha=b;d.hA=c;d.hQ=e;}else{d=new Lw;if(!(h&1)){g=EG;if(g===null){g=new G6;EG=g;}}else{g=EQ;if(g===null){g=new G5;EQ=g;}}f=
M;M=f+1|0;i=new T;i.g9=G(20);d.hi=(J(i,i.g7,f,10)).bj();d.ha=b;d.hA=c;d.hQ=e;d.mi=g;}}c.dD(d);return d;case -536870849:Bi(d);d=new E_;h=M;M=h+1|0;g=new T;g.g9=G(20);d.hi=(J(g,g.g7,h,10)).bj();d.ha=b;d.hA=c;d.hQ=(-536870849);c.dD(b);return d;case -536870789:g=new EI;i=d.hL;Bi(d);d=i;h=a.j7+1|0;a.j7=h;j=M;M=j+1|0;i=new T;i.g9=G(20);g.hi=(J(i,i.g7,j,10)).bj();g.ha=b;g.hA=c;g.hQ=(-536870849);g.jV=d;g.iY=h;c.dD(g);return g;default:}return c;}i=null;if(c!==null)i=c;switch(e){case -2147483606:case -2147483605:Bi(d);d
=new Rn;f=M;M=f+1|0;c=new T;c.g9=G(20);d.hi=(J(c,c.g7,f,10)).bj();d.ha=b;d.hA=i;d.hQ=e;d.hK=i;i.ha=d;return d;case -2147483585:Bi(d);c=new Qg;h=M;M=h+1|0;d=new T;BB(d);d.g9=G(20);c.hi=(J(d,d.g7,h,10)).bj();c.ha=b;c.hA=i;c.hQ=(-2147483585);c.hK=i;return c;case -2147483525:c=new LZ;g=d.hL;Bi(d);d=g;h=M;M=h+1|0;g=new T;BB(g);g.g9=G(20);c.hi=(J(g,g.g7,h,10)).bj();c.ha=b;c.hA=i;c.hQ=(-2147483525);c.hK=i;c.ld=d;return c;case -1073741782:case -1073741781:Bi(d);d=new MM;f=M;M=f+1|0;c=new T;c.g9=G(20);d.hi=(J(c,c.g7,
f,10)).bj();d.ha=b;d.hA=i;d.hQ=e;d.hK=i;i.ha=d;return d;case -1073741761:Bi(d);c=new OS;h=M;M=h+1|0;d=new T;BB(d);d.g9=G(20);c.hi=(J(d,d.g7,h,10)).bj();c.ha=b;c.hA=i;c.hQ=(-1073741761);c.hK=i;return c;case -1073741701:c=new Ni;g=d.hL;Bi(d);d=g;h=M;M=h+1|0;g=new T;BB(g);g.g9=G(20);c.hi=(J(g,g.g7,h,10)).bj();c.ha=b;c.hA=i;c.hQ=(-1073741701);c.hK=i;c.ld=d;return c;case -536870870:case -536870869:Bi(d);d=new CJ;f=M;M=f+1|0;c=new T;c.g9=G(20);d.hi=(J(c,c.g7,f,10)).bj();d.ha=b;d.hA=i;d.hQ=e;d.hK=i;i.ha=d;return d;case -536870849:Bi(d);c
=new D8;h=M;M=h+1|0;d=new T;d.g9=G(20);c.hi=(J(d,d.g7,h,10)).bj();c.ha=b;c.hA=i;c.hQ=(-536870849);c.hK=i;return c;case -536870789:c=new D$;g=d.hL;Bi(d);d=g;h=M;M=h+1|0;g=new T;g.g9=G(20);c.hi=(J(g,g.g7,h,10)).bj();c.ha=b;c.hA=i;c.hQ=(-536870789);c.hK=i;c.ld=d;return c;default:}return c;},
QW=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=null;d=b instanceof EW;while(true){a:{e=a.hH;f=e.h0;if((f&(-2147418113))==(-2147483608)){Bi(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.ii=g;else{if(f!=(-1073741784))g=a.ii;c=Q_(a,f,g,b);e=a.hH;if(e.h0!=(-536870871)){b=new BT;h=e.hX;i=e.iU;b.g$=1;b.g_=1;b.hB=(-1);b.hZ=A(59);b.hV=h;b.hB=i;E(b);}Bi(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:j
=(f&2147483647)-48|0;if(a.k6<j){c=new BT;h=e.hX;i=e.iU;c.g$=1;c.g_=1;c.hB=(-1);c.hZ=A(59);c.hV=h;c.hB=i;E(c);}Bi(e);g=a.iA+1|0;a.iA=g;i=a.ii;if(!((i&2)!=2?0:1)){c=new Qp;k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();c.lq=j;c.kD=g;}else if(!((i&64)!=64?0:1)){c=new E7;k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();c.lq=j;c.kD=g;}else{c=new Nb;k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();c.lq=j;c.kD=g;}a.no.data[j].nl=1;a.oS=1;break a;case -2147483583:break;case -2147483582:Bi(e);c
=new If;k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();c.ol=0;break a;case -2147483577:Bi(e);c=new Ls;k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();break a;case -2147483558:Bi(e);c=new J1;j=a.iA+1|0;a.iA=j;k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();c.kX=j;break a;case -2147483550:Bi(e);c=new If;k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();c.ol=1;break a;case -2147483526:Bi(e);c=new Qu;k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();break a;case -536870876:break b;case -536870866:Bi(e);i
=a.ii;if((i&32)!=32?0:1){c=new Qr;i=M;M=i+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,i,10)).bj();break a;}c=new LV;if(!(i&1)){h=EG;if(h===null){h=new G6;EG=h;}}else{h=EQ;if(h===null){h=new G5;EQ=h;}}k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();c.nR=h;break a;case -536870821:Bi(e);i=0;c=a.hH;if(c.h0==(-536870818)){i=1;Bi(c);}c=IW(a,Fp(a,i));c.dD(b);h=a.hH;k=h.h0;if(k!=(-536870819)){b=new BT;e=h.hX;i=h.iU;b.g$=1;b.g_=1;b.hB=(-1);b.hZ=A(59);b.hV=e;b.hB=i;E(b);}h.jE=1;h.hn=k;h.jC=h.hL;h.hj=h.lE;h.lE=h.iU;Bi(h);Bi(a.hH);break a;case -536870818:break c;case 0:c
=e.hL;h=c;if(h!==null)c=IW(a,h);else{if(!f&&!e.hn&&e.hj==e.im&&!(c===null?0:1)?1:0){c=new D2;k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();c.ha=b;c.hD=1;c.hQ=1;c.hD=0;break a;}c=new C_;j=f&65535;k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();c.hD=1;c.iC=j;}Bi(a.hH);break a;default:if(f>=0&&!(e.hL===null?0:1)){c=Q4(a,f);Bi(a.hH);break a;}if(f==(-536870788)){c=new D2;k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();c.ha=b;c.hD=1;c.hQ=1;c.hD=0;break a;}if(f!=(-536870871)){b=new BT;c
=e.hL;if(c===null?0:1)c=c.bj();else{k=f&65535;c=new H;l=G(1);m=l.data;m[0]=k;c.g8=L(l.data,0,m.length);}e=a.hH;h=e.hX;i=e.iU;b.g$=1;b.g_=1;b.hB=(-1);b.hZ=c;b.hV=h;b.hB=i;E(b);}if(d){b=new BT;h=e.hX;i=e.iU;b.g$=1;b.g_=1;b.hB=(-1);b.hZ=A(59);b.hV=h;b.hB=i;E(b);}c=new D2;k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();c.ha=b;c.hD=1;c.hQ=1;c.hD=0;break a;}Bi(e);c=new IG;k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();break a;}Bi(e);a.iA=a.iA+1|0;i=a.ii;if(!((i&8)!=8?0:1)){c=new IG;k=M;M=k+1|
0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();break a;}c=new K2;if(!(i&1)){h=EG;if(h===null){h=new G6;EG=h;}}else{h=EQ;if(h===null){h=new G5;EQ=h;}}k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();c.pK=h;break a;}Bi(e);j=a.iA+1|0;a.iA=j;i=a.ii;if((i&8)!=8?0:1){if((i&1)!=1?0:1){c=new Of;i=M;M=i+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,i,10)).bj();c.mA=j;}else{c=new Ku;k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();c.li=j;}}else if((i&1)!=1?0:1){c=new Qh;k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=
(J(e,e.g7,k,10)).bj();c.mo=j;}else{c=new J1;k=M;M=k+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,k,10)).bj();c.kX=j;}}}if(f!=(-16777176))break;}return c;},
Fp=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;c=new B7;d=a.ii;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;f=new Ba;f.hh=S(64);c.hk=f;f=new Ba;f.hh=S(2);c.ho=f;c.mz=e;c.m$=d;DH(c,b);g=(-1);h=0;i=0;j=1;a:{b:{c:while(true){k=a.hH;b=k.h0;if(!b&&!k.hn&&k.hj==k.im&&!(k.hL===null?0:1)?1:0)break a;i=b==(-536870819)&&!j?0:1;if(!i)break a;d:{switch(b){case -536870874:if(g>=0)Ch(c,g);f=a.hH;Bi(f);g=f.jW;f=a.hH;if(f.h0!=(-536870874)){g=38;break d;}if(f.hn==(-536870821)){Bi(f);h=1;g=(-1);break d;}Bi(f);if(j){c=Fp(a,0);break d;}if(a.hH.h0
==(-536870819))break d;Qz(c,Fp(a,0));break d;case -536870867:if(!j){b=k.hn;if(b!=(-536870819)&&b!=(-536870821)&&g>=0){Bi(k);k=a.hH;d=k.h0;if(k.hL===null?0:1)break c;if(d<0){b=k.hn;if(b!=(-536870819)&&b!=(-536870821)&&g>=0)break c;}e:{try{if(Y6(d))break e;d=d&65535;break e;}catch($$e){$$je=BP($$e);if($$je instanceof CE){break b;}else{throw $$e;}}}try{By(c,g,d);}catch($$e){$$je=BP($$e);if($$je instanceof CE){break b;}else{throw $$e;}}Bi(a.hH);g=(-1);break d;}}if(g>=0)Ch(c,g);g=45;Bi(a.hH);break d;case -536870821:if
(g>=0){Ch(c,g);g=(-1);}Bi(a.hH);e=0;f=a.hH;if(f.h0==(-536870818)){Bi(f);e=1;}if(!h)RQ(c,Fp(a,e));else Qz(c,Fp(a,e));h=0;Bi(a.hH);break d;case -536870819:break;case -536870818:if(g>=0)Ch(c,g);g=94;Bi(a.hH);break d;case 0:if(g>=0)Ch(c,g);f=a.hH.hL;if(f===null)g=0;else{AKL(c,f);g=(-1);}Bi(a.hH);break d;default:if(g>=0)Ch(c,g);f=a.hH;Bi(f);g=f.jW;break d;}if(g>=0)Ch(c,g);g=93;Bi(a.hH);}j=0;}c=new BT;l=k.hX;g=k.iU;c.g$=1;c.g_=1;c.hB=(-1);c.hZ=A(59);c.hV=l;c.hB=g;E(c);}c=new BT;k=a.hH;l=k.hX;g=k.iU;c.g$=1;c.g_=1;c.hB
=(-1);c.hZ=A(59);c.hV=l;c.hB=g;E(c);}if(!i){if(g>=0)Ch(c,g);return c;}c=new BT;l=k.hX;b=k.iU-1|0;c.g$=1;c.g_=1;c.hB=(-1);c.hZ=A(59);c.hV=l;c.hB=b;E(c);},
Q4=(a,b)=>{let c,d,e,f,g,h;c=b>=65536&&b<=1114111?1:0;d=a.ii;if((d&2)!=2?0:1){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}e=new Hw;b=b&65535;f=M;M=f+1|0;g=new T;g.g9=G(20);e.hi=(J(g,g.g7,f,10)).bj();e.hD=1;e.oq=b;e.nb=EE(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new Kq;f=M;M=f+1|0;g=new T;g.g9=G(20);e.hi=(J(g,g.g7,f,10)).bj();e.hD=1;e.hD=2;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b);if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null
?V(Bu.value):null)));}e.pz=B1(BD,b);return e;}if(b<=57343&&b>=56320?1:0){e=new FS;b=b&65535;f=M;M=f+1|0;g=new T;g.g9=G(20);e.hi=(J(g,g.g7,f,10)).bj();e.ky=b;return e;}if(b<=56319&&b>=55296?1:0){e=new FZ;b=b&65535;f=M;M=f+1|0;g=new T;g.g9=G(20);e.hi=(J(g,g.g7,f,10)).bj();e.kn=b;return e;}e=new J2;b=b&65535;f=M;M=f+1|0;g=new T;g.g9=G(20);e.hi=(J(g,g.g7,f,10)).bj();e.hD=1;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value
!==null?V(Bu.value):null)));}e.m0=B1(BD,b)&65535;return e;}}if(c){e=new Dq;f=M;M=f+1|0;g=new T;g.g9=G(20);e.hi=(J(g,g.g7,f,10)).bj();e.hD=1;e.hD=2;e.kM=b;h=(EN(b)).data;e.lm=h[0];e.kT=h[1];return e;}if(b<=57343&&b>=56320?1:0){e=new FS;b=b&65535;f=M;M=f+1|0;g=new T;g.g9=G(20);e.hi=(J(g,g.g7,f,10)).bj();e.ky=b;return e;}if(b<=56319&&b>=55296?1:0){e=new FZ;b=b&65535;f=M;M=f+1|0;g=new T;g.g9=G(20);e.hi=(J(g,g.g7,f,10)).bj();e.kn=b;return e;}e=new C_;b=b&65535;f=M;M=f+1|0;g=new T;g.g9=G(20);e.hi=(J(g,g.g7,f,10)).bj();e.hD
=1;e.iC=b;return e;},
IW=(a,b)=>{let c,d,e,f,g,h;if(!ACh(b)){if(b.hN){if(!b.d3()){c=new CS;d=M;M=d+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,d,10)).bj();c.iS=b.d4();c.ms=b.hy;return c;}c=new Hz;d=M;M=d+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,d,10)).bj();c.iS=b.d4();c.ms=b.hy;return c;}if(b.d3()){c=new H3;d=M;M=d+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,d,10)).bj();c.hD=1;c.nG=b.d4();c.pr=b.hy;return c;}c=new Dd;d=M;M=d+1|0;e=new T;e.g9=G(20);c.hi=(J(e,e.g7,d,10)).bj();c.hD=1;c.i$=b.d4();c.p5=b.hy;return c;}c=TF(b);e=new KC;d=M;M=d+1|0;f=
new T;f.g9=G(20);e.hi=(J(f,f.g7,d,10)).bj();e.pj=c;e.q9=c.hy;if(b.hN){if(!b.d3()){c=new FB;f=new CS;b=Gj(b);d=M;M=d+1|0;g=new T;g.g9=G(20);f.hi=(J(g,g.g7,d,10)).bj();f.iS=b;f.ms=b.hy;d=M;M=d+1|0;b=new T;b.g9=G(20);c.hi=(J(b,b.g7,d,10)).bj();c.lf=f;c.k7=e;return c;}c=new FB;f=new Hz;g=Gj(b);h=M;M=h+1|0;b=new T;b.g9=G(20);f.hi=(J(b,b.g7,h,10)).bj();f.iS=g;f.ms=g.hy;d=M;M=d+1|0;b=new T;b.g9=G(20);c.hi=(J(b,b.g7,d,10)).bj();c.lf=f;c.k7=e;return c;}if(b.d3()){c=new FB;f=new H3;b=Gj(b);d=M;M=d+1|0;g=new T;g.g9=G(20);f.hi
=(J(g,g.g7,d,10)).bj();f.hD=1;f.nG=b;f.pr=b.hy;d=M;M=d+1|0;b=new T;b.g9=G(20);c.hi=(J(b,b.g7,d,10)).bj();c.lf=f;c.k7=e;return c;}c=new FB;f=new Dd;b=Gj(b);d=M;M=d+1|0;g=new T;g.g9=G(20);f.hi=(J(g,g.g7,d,10)).bj();f.hD=1;f.i$=b;f.p5=b.hy;d=M;M=d+1|0;b=new T;b.g9=G(20);c.hi=(J(b,b.g7,d,10)).bj();c.lf=f;c.k7=e;return c;},
EE=b=>{if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;};
let JW=D(0);
function N7(){let a=this;C.call(a);a.rx=null;a.qB=null;a.mn=null;a.jG=null;a.mg=0;a.nw=0;}
let Ky=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.mn.g8.length;if(b>=0&&b<=c){d=a.jG;d.j2=0;d.lU=2;e=d.ic.data;f=0;g=e.length;if(f>g){d=new Bs;Y(d);E(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}e=d.hR.data;f=0;g=e.length;if(f>g){d=new Bs;Y(d);E(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}d.jO=d.iH;d.lU=1;d.jO=b;c=d.lW;if(c<0)c=b;d.lW=c;b=a.qB.d7(b,a.mn,d);if(b==(-1))a.jG.iD=1;if(b>=0){d=a.jG;b=d.j2;if(b){e=d.ic.data;if(e[0]==(-1)){f=d.jO;e[0]=f;e[1]=f;}if(!b){d=new CV;d.g$=1;d.g_=1;Bl(d);E(d);}if(0<d.kQ){d.lW=e[1];return 1;}d=new I;i
=new K;BB(i);i.g9=G(16);J(i,i.g7,0,10);j=new H;e=i.g9;k=e.data;c=i.g7;f=k.length;if(c>=0&&c<=(f-0|0)){j.g8=L(e.data,0,c);d.g$=1;d.g_=1;d.hb=j;E(d);}d=new I;d.g$=1;d.g_=1;E(d);}}a.jG.jO=(-1);return 0;}d=new I;i=new K;i.g9=G(16);J(i,i.g7,b,10);j=new H;e=i.g9;k=e.data;c=i.g7;f=k.length;if(c>=0&&c<=(f-0|0)){j.g8=L(e.data,0,c);d.g$=1;d.g_=1;d.hb=j;E(d);}d=new I;d.g$=1;d.g_=1;E(d);},
MS=a=>{let b,c,d,e,f,g,h,i,j,k,l;b=a.mn.g8.length;c=a.jG;if(!c.mu)b=a.nw;if(c.jO>=0&&c.lU==1){d=c.j2;if(!d){c=new CV;c.g$=1;c.g_=1;E(c);}e=B4(0,c.kQ);if(e>=0){c=new I;f=new K;f.g9=G(16);J(f,f.g7,0,10);g=new H;h=f.g9;i=h.data;b=f.g7;j=i.length;if(b>=0&&b<=(j-0|0)){g.g8=L(h.data,0,b);c.g$=1;c.g_=1;c.hb=g;E(c);}c=new I;c.g$=1;c.g_=1;E(c);}h=c.ic.data;k=h[1];c.jO=k;if(!d){c=new CV;c.g$=1;c.g_=1;E(c);}if(e>=0){c=new I;f=new K;f.g9=G(16);J(f,f.g7,0,10);g=new H;h=f.g9;i=h.data;b=f.g7;j=i.length;if(b>=0&&b<=(j-0|0))
{g.g8=L(h.data,0,b);c.g$=1;c.g_=1;c.hb=g;E(c);}c=new I;c.g$=1;c.g_=1;E(c);}j=h[1];if(!d){c=new CV;c.g$=1;c.g_=1;E(c);}if(e<0){if(j==h[0])c.jO=k+1|0;l=c.jO;return l<=b&&Ky(a,l)?1:0;}c=new I;f=new K;f.g9=G(16);J(f,f.g7,0,10);g=new H;h=f.g9;i=h.data;b=f.g7;j=i.length;if(b>=0&&b<=(j-0|0)){g.g8=L(h.data,0,b);c.g$=1;c.g_=1;c.hb=g;E(c);}c=new I;c.g$=1;c.g_=1;E(c);}return Ky(a,a.mg);},
RA=(a,b,c)=>{let d,e;a.mg=(-1);a.nw=(-1);a.rx=b;a.qB=b.pP;a.mn=c;a.mg=0;d=c.g8.length;a.nw=d;e=AHQ(c,a.mg,d,b.k6,b.j7+1|0,b.iA+1|0);a.jG=e;e.kv=1;},
MB=(a,b)=>{let c=new N7();RA(c,a,b);return c;};
let Uz=D();
let Os=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(c!==null&&c.data.length){a:{b:{try{d=Lv(AGG(b,c));}catch($$e){$$je=BP($$e);if($$je instanceof HY){d=$$je;break a;}else if($$je instanceof FC){d=$$je;break b;}else{throw $$e;}}return d;}e=new D_;if(b.ih===null)b.ih=V(b.hG.$meta.name);f=b.ih;b=new K;b.g9=G(16);F(b,b.g7,A(142));g=b.g7;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.g9;i=c.data;j=b.g7;k=i.length;if(j>=0&&j<=(k-0|0)){h.g8=L(c.data,0,j);e.g$=1;e.g_=1;e.hb=h;e.ku=d;E(e);}b=new I;b.g$=1;b.g_=1;E(b);}e=new D_;if(b.ih
===null)b.ih=V(b.hG.$meta.name);f=b.ih;b=new K;b.g9=G(16);F(b,b.g7,A(143));g=b.g7;if(f===null)f=A(2);F(b,g,f);F(b,b.g7,A(144));h=new H;c=b.g9;i=c.data;j=b.g7;k=i.length;if(j>=0&&j<=(k-0|0)){h.g8=L(c.data,0,j);e.g$=1;e.g_=1;e.hb=h;e.ku=d;E(e);}b=new I;b.g$=1;b.g_=1;E(b);}c=(AJj(b)).data;if(c.length<=0)b=null;else{b=new H4;b.p8=c[0];}return b;},
Mn=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;a:{try{d=Lv(AGI(b,c));}catch($$e){$$je=BP($$e);if($$je instanceof HY){d=$$je;break a;}else if($$je instanceof FC){d=$$je;e=new D_;if(b.ih===null)b.ih=V(b.hG.$meta.name);f=b.ih;b=new K;b.g9=G(16);F(b,b.g7,A(142));g=b.g7;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.g9;i=c.data;j=b.g7;k=i.length;if(j>=0&&j<=(k-0|0)){h.g8=L(c.data,0,j);e.g$=1;e.g_=1;e.hb=h;e.ku=d;E(e);}b=new I;b.g$=1;b.g_=1;E(b);}else{throw $$e;}}return d;}e=new D_;if(b.ih===null)b.ih=V(b.hG.$meta.name);f=b.ih;b=new K;b.g9
=G(16);F(b,b.g7,A(145));g=b.g7;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.g9;i=c.data;k=b.g7;j=i.length;if(k>=0&&k<=(j-0|0)){h.g8=L(c.data,0,k);e.g$=1;e.g_=1;e.hb=h;e.ku=d;E(e);}b=new I;b.g$=1;b.g_=1;E(b);};
function H4(){C.call(this);this.p8=null;}
let AIl=(a,b)=>{a.p8=b;},
Lv=a=>{let b=new H4();AIl(b,a);return b;},
Pp=(a,b)=>{return;};
let D_=D(CE);
function DD(){C.call(this);this.hz=null;}
let AEX=null,Jy=null,Fu=null,F_=null,Mc=null,QL=null,LS=null;
let Bp=()=>{Bp=Bz(DD);Vl();};
let Ce=b=>{let c,d,e,f,g,h,i;Bp();if(b===null)return null;c=b;d=V(typeof c);if(d===A(146))e=1;else if(!(A(146) instanceof H))e=0;else{f=A(146);e=d.g8!==f.g8?0:1;}a:{if(!e){if(d===A(147))e=1;else if(!(A(147) instanceof H))e=0;else{f=A(147);e=d.g8!==f.g8?0:1;}if(!e){e=0;break a;}}e=1;}if(e&&b[Be]===true)return b;b=Jy;if(b!==null){if(e){f=b.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DD;h.hz=c;Jy.set(c,new WeakRef(h));return h;}if(d===A(148))e=1;else if
(!(A(148) instanceof H))e=0;else{b=A(148);e=d.g8!==b.g8?0:1;}if(e){f=Fu.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DD;h.hz=c;i=h;Fu.set(c,new WeakRef(i));K_(QL,i,c);return h;}if(d===A(149))e=1;else if(!(A(149) instanceof H))e=0;else{b=A(149);e=d.g8!==b.g8?0:1;}if(e){f=F_.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DD;h.hz=c;i=h;F_.set(c,new WeakRef(i));K_(LS,i,c);return h;}if(d===A(150))e=1;else if
(!(A(150) instanceof H))e=0;else{b=A(150);e=d.g8!==b.g8?0:1;}if(e){f=Mc;g=f===null?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DD;h.hz=c;Mc=new WeakRef(h);return h;}}b=new DD;b.hz=c;return b;},
Vl=()=>{AEX=new WeakMap();Jy=!(typeof WeakRef!=='undefined'?1:0)?null:new WeakMap();Fu=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();F_=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();QL=Fu===null?null:new FinalizationRegistry(BL(new I7,"accept"));LS=F_===null?null:new FinalizationRegistry(BL(new I6,"accept"));},
K_=(b,c,d)=>{return b.register(c,d);};
let M0=D(0);
let HG=D();
let G4=D(0);
let HF=D();
function Px(){let a=this;C.call(a);a.ic=null;a.hR=null;a.jg=null;a.k0=null;a.kQ=0;a.j2=0;a.iH=0;a.hC=0;a.jO=0;a.mu=0;a.kv=0;a.iD=0;a.sj=0;a.lW=0;a.lU=0;}
let ADb=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.lW=(-1);h=e+1|0;a.kQ=h;i=S(h*2|0);a.ic=i;j=S(g);k=j.data;a.hR=j;e=0;g=k.length;l=B4(e,g);if(l>0){b=new Bs;b.g$=1;b.g_=1;E(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.jg=S(f);i=i.data;h=0;m=i.length;e=B4(h,m);if(e>0){b=new Bs;b.g$=1;b.g_=1;E(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.j2=0;a.lU=2;f=0;if(e>0){b=new Bs;b.g$=1;b.g_=1;E(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new Bs;b.g$=1;b.g_=1;E(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.k0=b;if(c
>=0){a.iH=c;a.hC=d;}a.jO=a.iH;},
AHQ=(a,b,c,d,e,f)=>{let g=new Px();ADb(g,a,b,c,d,e,f);return g;};
let B0=D(Bs);
let HY=D(BA);
let IN=D(CE);
let FC=D(IN);
let CU=D(BA);
function BO(){let a=this;C.call(a);a.ha=null;a.it=0;a.hi=null;a.hQ=0;}
let M=0;
let Wf=(a,b,c,d)=>{let e;e=d.hC;while(true){if(b>e)return (-1);if(a.ed(b,c,d)>=0)break;b=b+1|0;}return b;},
YK=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);if(a.ed(c,d,e)>=0)break;c=c+(-1)|0;}return c;},
AK_=(a,b)=>{a.hQ=b;},
UI=a=>{return a.hQ;},
AL5=a=>{return a.ha;},
AH7=(a,b)=>{a.ha=b;},
AH5=(a,b)=>{return 1;},
AJw=a=>{return null;},
Ga=a=>{let b;a.it=1;b=a.ha;if(b!==null){if(!b.it){b=b.ee();if(b!==null){a.ha.it=1;a.ha=b;}a.ha.dz();}else if(b instanceof EP&&b.iB.nl)a.ha=b.ha;}},
AMk=()=>{M=1;};
let Jt=D();
let AJl=D();
let X3=D();
let AKP=D();
let H_=D(0);
let I7=D();
let AId=(a,b)=>{let c;Bp();b=b===null?null:b instanceof E0()?b:Ce(b);c=Fu;b=b===null?null:b[Be]===true?b:b.hz;c.delete(b);};
let Zf=D();
let I6=D();
let Ts=(a,b)=>{let c;Bp();b=b===null?null:b instanceof E0()?b:Ce(b);c=F_;b=b===null?null:b[Be]===true?b:b.hz;c.delete(b);};
let Ko=D(0);
function FM(){let a=this;C.call(a);a.jw=null;a.jX=null;}
function Gv(){let a=this;FM.call(a);a.mG=null;a.p9=0;}
function CA(){let a=this;BO.call(a);a.nl=0;a.ig=0;}
let F4=null;
let C3=()=>{C3=Bz(CA);Xg();};
let TN=(a,b,c,d)=>{let e,f,g;e=a.ig;f=d.ic.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.ha.ed(b,c,d);if(g<0){b=a.ig;d.ic.data[(b*2|0)+1|0]=e;}return g;},
ALN=a=>{return a.ig;},
Up=(a,b)=>{return 0;},
Xg=()=>{let b,c,d;b=new Lq;c=M;M=c+1|0;d=new T;d.g9=G(20);b.hi=(J(d,d.g7,c,10)).bj();F4=b;};
function OH(){let a=this;C.call(a);a.hY=null;a.hS=0;a.jE=0;a.qE=0;a.jW=0;a.h0=0;a.hn=0;a.im=0;a.hL=null;a.jC=null;a.hj=0;a.hP=0;a.iU=0;a.lE=0;a.hX=null;}
let Mv=null,Uk=null,AGv=0;
let AH9=(a,b,c)=>{let d,e,f,g,h,i,j;a.jE=1;a.hX=b;if((c&16)>0){d=new K;d.g9=G(16);F(d,d.g7,A(151));e=0;while(true){f=Mh(b,A(152),e);if(f<0)break;g=f+2|0;h=Cc(b,e,g);F(d,d.g7,h);F(d,d.g7,A(153));e=g;}b=Cc(b,e,b.g8.length);F(d,d.g7,b);F(d,d.g7,A(152));b=new H;i=d.g9;j=i.data;e=d.g7;f=j.length;if(e>=0&&e<=(f-0|0))b.g8=L(i.data,0,e);else{b=new I;b.g$=1;b.g_=1;E(b);}}a.hY=G(b.g8.length+2|0);j=G(b.g8.length);i=j.data;e=0;f=i.length;while(true){if(e>=f){Fm(j,0,a.hY,0,b.g8.length);i=a.hY.data;g=i.length;i[g-1|0]=0;i[g
-2|0]=0;a.im=g;a.hS=c;Bi(a);Bi(a);return;}if(e<0)break;if(e>=b.g8.length)break;i[e]=b.g8.charCodeAt(e);e=e+1|0;}b=new Q;b.g$=1;b.g_=1;E(b);},
Xm=(a,b)=>{let c=new OH();AH9(c,a,b);return c;},
Bi=a=>{let b,c,d,e,f,g,h,i,j,k,$$je;a.jW=a.h0;a.h0=a.hn;a.hL=a.jC;a.iU=a.lE;a.lE=a.hj;a:{while(true){b=0;c=a.hj>=a.hY.data.length?0:JG(a);a.hn=c;a.jC=null;if(a.jE==4){if(c!=92)return;c=a.hj;d=a.hY.data;if(c>=d.length)c=0;else{a.hP=c;if(a.hS&4)BW(a);else a.hj=c+1|0;c=d[a.hP];}a.hn=c;switch(c){case 69:break;default:a.hn=92;a.hj=a.hP;return;}a.jE=a.qE;a.hn=a.hj>(a.hY.data.length-2|0)?0:JG(a);}b:{c=a.hn;if(c==92){c=a.hj>=(a.hY.data.length-2|0)?(-1):JG(a);c:{d:{a.hn=c;switch(c){case -1:e=new BT;f=a.hX;c=a.hj;e.g$
=1;e.g_=1;e.hB=(-1);e.hZ=A(59);e.hV=f;e.hB=c;E(e);case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.hn
=ADS(a);break b;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.jE!=1)break b;a.hn=(-2147483648)|c;break b;case 65:a.hn=(-2147483583);break b;case 66:a.hn=(-2147483582);break b;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:e=new BT;f=a.hX;c=a.hj;e.g$=1;e.g_=1;e.hB=(-1);e.hZ=A(59);e.hV=f;e.hB=c;E(e);case 68:case 83:case 87:case 100:case 115:case 119:break d;case 71:a.hn
=(-2147483577);break b;case 80:case 112:break c;case 81:a.qE=a.jE;a.jE=4;b=1;break b;case 90:a.hn=(-2147483558);break b;case 97:a.hn=7;break b;case 98:a.hn=(-2147483550);break b;case 99:c=a.hj;d=a.hY.data;if(c>=(d.length-2|0)){e=new BT;f=a.hX;e.g$=1;e.g_=1;e.hB=(-1);e.hZ=A(59);e.hV=f;e.hB=c;E(e);}a.hP=c;if(a.hS&4)BW(a);else a.hj=c+1|0;a.hn=d[a.hP]&31;break b;case 101:a.hn=27;break b;case 102:a.hn=12;break b;case 110:a.hn=10;break b;case 114:a.hn=13;break b;case 116:a.hn=9;break b;case 117:a.hn=Mi(a,4);break b;case 120:a.hn
=Mi(a,2);break b;case 122:a.hn=(-2147483526);break b;default:}break b;}e=new H;d=a.hY;g=d.data;h=a.hP;i=g.length;if(h<0)break a;if(1>(i-h|0))break a;e.g8=L(d.data,h,1);e=QH(Gw,e);if(e.jH===null)e.jH=e.el();a.jC=e.jH;a.hn=0;break b;}e=AC6(a);j=0;if(a.hn==80)j=1;try{a.jC=AA9(e,j);}catch($$e){$$je=BP($$e);if($$je instanceof HE){e=new BT;f=a.hX;c=a.hj;e.g$=1;e.g_=1;e.hB=(-1);e.hZ=A(59);e.hV=f;e.hB=c;E(e);}else{throw $$e;}}a.hn=0;}else{h=a.jE;if(h==1)switch(c){case 36:a.hn=(-536870876);break b;case 40:d=a.hY.data;c
=a.hj;if(d[c]!=63){a.hn=(-2147483608);break b;}a.hP=c;if(a.hS&4)BW(a);else a.hj=c+1|0;c=a.hY.data[a.hj];h=0;while(true){e:{if(h){h=0;switch(c){case 33:break;case 61:a.hn=(-134217688);k=a.hj;a.hP=k;if(a.hS&4)BW(a);else a.hj=k+1|0;break e;default:e=new BT;f=a.hX;c=a.hj;e.g$=1;e.g_=1;e.hB=(-1);e.hZ=A(59);e.hV=f;e.hB=c;E(e);}a.hn=(-67108824);j=a.hj;a.hP=j;if(a.hS&4)BW(a);else a.hj=j+1|0;}else{switch(c){case 33:break;case 60:h=a.hj;a.hP=h;if(a.hS&4)BW(a);else a.hj=h+1|0;c=a.hY.data[a.hj];h=1;break e;case 61:a.hn
=(-536870872);j=a.hj;a.hP=j;if(a.hS&4)BW(a);else a.hj=j+1|0;break e;case 62:a.hn=(-33554392);j=a.hj;a.hP=j;if(a.hS&4)BW(a);else a.hj=j+1|0;break e;default:i=AKg(a);a.hn=i;if(i<256){a.hS=i;i=i<<16;a.hn=i;a.hn=(-1073741784)|i;break e;}i=i&255;a.hn=i;a.hS=i;i=i<<16;a.hn=i;a.hn=(-16777176)|i;break e;}a.hn=(-268435416);j=a.hj;a.hP=j;if(a.hS&4)BW(a);else a.hj=j+1|0;}}if(!h)break;}break b;case 41:a.hn=(-536870871);break b;case 42:case 43:case 63:h=a.hj;d=a.hY.data;switch(h>=d.length?42:d[h]){case 43:a.hn=c|(-2147483648);a.hP
=h;if(a.hS&4)BW(a);else a.hj=h+1|0;break b;case 63:a.hn=c|(-1073741824);a.hP=h;if(a.hS&4)BW(a);else a.hj=h+1|0;break b;default:}a.hn=c|(-536870912);break b;case 46:a.hn=(-536870866);break b;case 91:a.hn=(-536870821);a.jE=2;break b;case 93:if(h!=2)break b;a.hn=(-536870819);break b;case 94:a.hn=(-536870818);break b;case 123:a.jC=AIs(a,c);break b;case 124:a.hn=(-536870788);break b;default:}else if(h==2)switch(c){case 38:a.hn=(-536870874);break b;case 45:a.hn=(-536870867);break b;case 91:a.hn=(-536870821);break b;case 93:a.hn
=(-536870819);break b;case 94:a.hn=(-536870818);break b;default:}}}if(b)continue;else break;}return;}e=new I;e.g$=1;e.g_=1;E(e);},
AC6=a=>{let b,c,d,e,f,g,h,i;b=new K;b.g9=G(10);c=a.hj;d=a.hY;e=d.data;f=e.length;if(c<(f-2|0)){if(e[c]!=123){b=new H;a.hP=c;if(a.hS&4)BW(a);else a.hj=c+1|0;g=a.hP;if(g>=0&&1<=(f-g|0)){b.g8=L(d.data,g,1);h=new K;h.g9=G(16);F(h,h.g7,A(154));F(h,h.g7,b);b=new H;d=h.g9;e=d.data;f=h.g7;g=e.length;if(f>=0&&f<=(g-0|0)){b.g8=L(d.data,0,f);return b;}b=new I;b.g$=1;b.g_=1;E(b);}b=new I;b.g$=1;b.g_=1;E(b);}a.hP=c;if(a.hS&4)BW(a);else a.hj=c+1|0;c=0;a:{while(true){f=a.hj;d=a.hY.data;if(f>=(d.length-2|0))break;a.hP=f;if
(a.hS&4)BW(a);else a.hj=f+1|0;c=d[a.hP];if(c==125)break a;f=b.g7;Bn(b,f,f+1|0);b.g9.data[f]=c;}}if(c!=125){b=new BT;i=a.hX;c=a.hj;b.g$=1;b.g_=1;b.hB=(-1);b.hZ=A(59);b.hV=i;b.hB=c;E(b);}}c=b.g7;if(!c){b=new BT;i=a.hX;c=a.hj;b.g$=1;b.g_=1;b.hB=(-1);b.hZ=A(59);b.hV=i;b.hB=c;E(b);}h=new H;d=b.g9;g=d.data.length;if(c>=0&&c<=(g-0|0)){h.g8=L(d.data,0,c);if(h.g8.length==1){b=new K;b.g9=G(16);F(b,b.g7,A(154));F(b,b.g7,h);h=new H;d=b.g9;e=d.data;f=b.g7;g=e.length;if(f>=0&&f<=(g-0|0)){h.g8=L(d.data,0,f);return h;}b=new I;b.g$
=1;b.g_=1;E(b);}b:{c:{if(h.g8.length>3){if(h===A(154)?1:Jq(h,A(154),0))break c;if(h===A(155)?1:Jq(h,A(155),0))break c;}break b;}h=Cc(h,2,h.g8.length);}return h;}b=new I;b.g$=1;b.g_=1;E(b);},
AIs=(a,b)=>{let c,d,e,f,g,h,i,$$je;c=new K;c.g9=G(4);d=(-1);e=2147483647;a:{while(true){f=a.hj;g=a.hY.data;if(f>=g.length)break a;a.hP=f;if(a.hS&4)BW(a);else a.hj=f+1|0;b=g[a.hP];if(b==125)break a;if(b==44&&d<0)try{d=HV(Fr(c),10);AIO(c,0,Ua(c));continue;}catch($$e){$$je=BP($$e);if($$je instanceof B0){break;}else{throw $$e;}}h=b&65535;f=c.g7;Bn(c,f,f+1|0);c.g9.data[f]=h;}c=new BT;i=a.hX;b=a.hj;c.g$=1;c.g_=1;c.hB=(-1);c.hZ=A(59);c.hV=i;c.hB=b;E(c);}if(b!=125){c=new BT;i=a.hX;b=a.hj;c.g$=1;c.g_=1;c.hB=(-1);c.hZ
=A(59);c.hV=i;c.hB=b;E(c);}if(c.g7>0)b:{try{e=HV(Fr(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=BP($$e);if($$je instanceof B0){}else{throw $$e;}}c=new BT;i=a.hX;b=a.hj;c.g$=1;c.g_=1;c.hB=(-1);c.hZ=A(59);c.hV=i;c.hB=b;E(c);}else if(d<0){c=new BT;i=a.hX;b=a.hj;c.g$=1;c.g_=1;c.hB=(-1);c.hZ=A(59);c.hV=i;c.hB=b;E(c);}if((d|e|(e-d|0))<0){c=new BT;i=a.hX;b=a.hj;c.g$=1;c.g_=1;c.hB=(-1);c.hZ=A(59);c.hV=i;c.hB=b;E(c);}f=a.hj;g=a.hY.data;h=f>=g.length?42:g[f];c:{switch(h){case 43:a.hn=(-2147483525);a.hP=f;if(a.hS
&4)BW(a);else a.hj=f+1|0;break c;case 63:a.hn=(-1073741701);a.hP=f;if(a.hS&4)BW(a);else a.hj=f+1|0;break c;default:}a.hn=(-536870789);}c=new KS;c.j3=d;c.j1=e;return c;},
Y6=b=>{return b<0?0:1;},
Mi=(a,b)=>{let c,d,e,f,g,h,i,j,$$je;c=new K;c.g9=G(b);d=a.hY.data.length-2|0;e=0;while(true){f=B4(e,b);if(f>=0)break;g=a.hj;if(g>=d)break;h=a.hY;a.hP=g;if(a.hS&4)BW(a);else a.hj=g+1|0;g=h.data[a.hP];i=c.g7;Bn(c,i,i+1|0);c.g9.data[i]=g;e=e+1|0;}if(!f)a:{try{b=HV(Fr(c),16);}catch($$e){$$je=BP($$e);if($$je instanceof B0){break a;}else{throw $$e;}}return b;}c=new BT;j=a.hX;b=a.hj;c.g$=1;c.g_=1;c.hB=(-1);c.hZ=A(59);c.hV=j;c.hB=b;E(c);},
ADS=a=>{let b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.hY.data;e=d.length-2|0;f=LY(d[a.hj]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.hj;a.hP=g;if(a.hS&4)BW(a);else a.hj=g+1|0;a:{while(true){if(c>=b)break a;h=a.hj;if(h>=e)break a;i=LY(a.hY.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.hj;a.hP=g;if(a.hS&4)BW(a);else a.hj=g+1|0;c=c+1|0;}}return f;}j=new BT;k=a.hX;b=a.hj;j.g$=1;j.g_=1;j.hB=(-1);j.hZ=A(59);j.hV=k;j.hB=b;E(j);},
AKg=a=>{let b,c,d,e,f,g,h;b=1;c=a.hS;a:while(true){d=a.hj;e=a.hY.data;if(d>=e.length){f=new BT;g=a.hX;f.g$=1;f.g_=1;f.hB=(-1);f.hZ=A(59);f.hV=g;f.hB=d;E(f);}b:{c:{switch(e[d]){case 41:a.hP=d;if(a.hS&4)BW(a);else a.hj=d+1|0;return c|256;case 45:if(!b){h=new BT;g=a.hX;h.g$=1;h.g_=1;h.hB=(-1);h.hZ=A(59);h.hV=g;h.hB=d;E(h);}b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c
=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}a.hP=d;if(a.hS&4)BW(a);else a.hj=d+1|0;}a.hP=d;if(a.hS&4)BW(a);else a.hj=d+1|0;return c;},
BW=a=>{let b,c,d,e;b=a.hY.data.length-2|0;a.hj=a.hj+1|0;a:while(true){c=a.hj;if(c<b){b:{c=a.hY.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break b;default:c:{switch(B$(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break b;}c=1;}if(c){a.hj=a.hj+1|0;continue;}}c=a.hj;if(c>=b)break;d=a.hY.data;if(d[c]!=35)break;a.hj=c+1|0;while(true){e=a.hj;if(e>=b)continue a;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.hj
=e+1|0;}}return c;},
Wc=b=>{let c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?Gk([d,e]):Gk([d,e,4519+f|0]);}return null;},
AEI=b=>{return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);},
JG=a=>{let b,c,d,e,f;b=a.hY;c=a.hj;a.hP=c;if(a.hS&4)BW(a);else a.hj=c+1|0;b=b.data;d=a.hP;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.hY.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.hj;a.hP=d;if(a.hS&4)BW(a);else a.hj=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;};
function BT(){let a=this;Bs.call(a);a.hZ=null;a.hV=null;a.hB=0;}
let AJr=a=>{let b,c,d,e,f,g,h,i,j,k;b=A(59);c=a.hB;if(c>=1){d=G(c);e=d.data;c=0;f=e.length;if(c>f){b=new Bs;b.g$=1;b.g_=1;E(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new H;b.g8=L(d.data,0,f);}a:{h=a.hZ;i=a.hV;if(i!==null&&i.g8.length){j=a.hB;i=a.hV;k=new K;k.g9=G(16);J(k,k.g7,j,10);F(k,k.g7,A(118));j=k.g7;if(i===null)i=A(2);F(k,j,i);F(k,k.g7,A(118));F(k,k.g7,b);b=new H;d=k.g9;e=d.data;c=k.g7;f=e.length;if(c>=0&&c<=(f-0|0)){b.g8=L(d.data,0,c);break a;}b=new I;b.g$=1;b.g_=1;Bl(b);E(b);}b=A(59);}i=new K;i.g9=G(16);j
=i.g7;if(h===null)h=A(2);F(i,j,h);F(i,i.g7,b);b=new H;d=i.g9;e=d.data;c=i.g7;f=e.length;if(c>=0&&c<=(f-0|0)){b.g8=L(d.data,0,c);return b;}b=new I;b.g$=1;b.g_=1;Bl(b);E(b);};
let TV=D();
let AEv=(b,c,d,e)=>{let f,g,h,i,j;if(c>d){f=new Bs;f.g$=1;f.g_=1;E(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;},
AFR=(b,c,d,e)=>{let f,g,h,i;if(c>d){f=new Bs;f.g$=1;f.g_=1;E(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=B4(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;},
PT=(b,c)=>{let d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;a:{while(true){if(e>=d){e=(-1);break a;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;};
let HX=D(0);
let IY=D();
let W7=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.data;d=a.hJ;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new Ca;b.hG=f;c=b;f.classObject=c;}}b=DS(b);if(b===null){b=new CU;b.g$=1;b.g_=1;E(b);}if(b===Bk(CQ)){b=new Bs;b.g$=1;b.g_=1;E(b);}if(d<0){b=new DK;b.g$=1;b.g_=1;E(b);}b=D4(b.hG,d);}e=0;g=0;h=a.iE;i=a.hJ;d=B4(h,h);a:{while(true){j=B4(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new JV;b.g$=1;b.g_=1;E(b);}k=g+1|0;if(g<0)break a;if(j>=0)break a;b.data[e]
=a.ia.data[g];e=h;g=k;}return b;}b=new I;b.g$=1;b.g_=1;E(b);};
let NK=D(0);
let KH=D(0);
function HZ(){IY.call(this);this.iE=0;}
let OW=D(0);
function HW(){let a=this;HZ.call(a);a.ia=null;a.hJ=0;}
let Fn=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ia;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new Ca;i.hG=h;j=i;h.classObject=j;}}h=DS(i);if(h===null){i=new CU;i.g$=1;i.g_=1;E(i);}if(h===Bk(CQ)){i=new Bs;i.g$=1;i.g_=1;E(i);}if(f<0){i=new DK;i.g$=1;i.g_=1;E(i);}j=D4(h.hG,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.ia=j;}},
Z1=(a,b,c)=>{let d,e,f;if(b>=0){d=a.hJ;if(b<=d){Fn(a,d+1|0);d=a.hJ;e=d;while(e>b){f=a.ia.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.ia.data[b]=c;a.hJ=d+1|0;a.iE=a.iE+1|0;return;}}c=new I;c.g$=1;c.g_=1;E(c);},
PC=(a,b)=>{let c,d,e,f;if(b>=0){c=a.hJ;if(b<c){d=a.ia.data;e=d[b];c=c-1|0;a.hJ=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.iE=a.iE+1|0;return e;}}e=new I;e.g$=1;e.g_=1;E(e);};
let NG=D(CA);
let SH=(a,b,c,d)=>{let e,f;e=a.ig;f=d.hR.data;f[e]=b-f[e]|0;return a.ha.ed(b,c,d);},
AGf=(a,b)=>{return 0;};
let Q6=D(CA);
let VD=(a,b,c,d)=>{return b;};
let Mk=D(CA);
let UG=(a,b,c,d)=>{let e;e=a.ig;if(d.hR.data[e]!=b)b=(-1);return b;};
function Od(){CA.call(this);this.oO=0;}
let S3=(a,b,c,d)=>{let e,f;e=a.ig;f=d.hR.data;f[e]=b-f[e]|0;a.oO=b;return b;},
AEH=(a,b)=>{return 0;};
let EW=D(CA);
let AIy=(a,b,c,d)=>{if(d.lU!=1&&b!=d.hC)return (-1);d.j2=1;d.ic.data[1]=b;return b;};
function B2(){BO.call(this);this.hD=0;}
let AKl=(a,b,c,d)=>{let e;if((b+a.ev()|0)>d.hC){d.iD=1;return (-1);}e=a.ew(b,c);if(e<0)return (-1);return a.ha.ed(b+e|0,c,d);},
AHk=a=>{return a.hD;},
Z9=(a,b)=>{return 1;};
let D2=D(B2);
let AGB=(a,b,c)=>{return 0;},
Xq=(a,b,c,d)=>{let e,f,g;e=d.hC;f=d.iH;a:{b:{while(true){g=B4(b,e);if(g>0)return (-1);if(g<0){if(b<0)break b;if(b>=c.g8.length)break b;if(((c.g8.charCodeAt(b)&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break a;if(g>=c.g8.length)break a;if((c.g8.charCodeAt(g)&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.ha.ed(b,c,d)>=0)break;b=b+1|0;}return b;}c=new Q;c.g$=1;c.g_=1;E(c);}c=new Q;c.g$=1;c.g_=1;E(c);},
Vn=(a,b,c,d,e)=>{let f,g,h;f=e.hC;g=e.iH;a:{b:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break b;if(c>=d.g8.length)break b;if(((d.g8.charCodeAt(c)&64512)!=56320?0:1)&&c>g){h=c-1|0;if(h<0)break a;if(h>=d.g8.length)break a;if((d.g8.charCodeAt(h)&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.ha.ed(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new Q;d.g$=1;d.g_=1;E(d);}d=new Q;d.g$=1;d.g_=1;E(d);},
SU=(a,b)=>{return 0;};
function BU(){let a=this;BO.call(a);a.h1=null;a.iB=null;a.hU=0;}
let YL=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.h1;if(e===null)return (-1);f=a.hU;g=d.ic.data;h=f*2|0;i=g[h];g[h]=b;f=e.hJ;j=0;a:{while(true){if(j>=f){b=a.hU;d.ic.data[b*2|0]=i;return (-1);}e=a.h1;if(j<0)break a;if(j>=e.hJ)break a;h=e.ia.data[j].ed(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new I;c.g$=1;c.g_=1;E(c);},
AEz=(a,b)=>{a.iB.ha=b;},
ABy=(a,b)=>{let c,d,e,f,g;a:{b:{c=a.h1;if(c!==null){d=0;e=c.iE;f=c.hJ;while(true){if(!(d>=f?0:1))break b;if(e<c.iE){b=new JV;b.g$=1;b.g_=1;E(b);}g=d+1|0;if(d<0)break a;if(d>=c.hJ)break a;if(c.ia.data[d].dT(b))break;d=g;}return 1;}}return 0;}b=new I;b.g$=1;b.g_=1;E(b);},
AFn=(a,b)=>{let c,d,e;c=a.hU;d=b.ic.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;},
Vi=a=>{let b,c,d,e;a.it=1;b=a.iB;if(b!==null&&!b.it)Ga(b);a:{b:{b=a.h1;if(b!==null){c=b.hJ;d=0;while(true){if(d>=c)break b;b=a.h1;if(d<0)break a;if(d>=b.hJ)break a;b=b.ia.data[d];e=b.ee();if(e===null)e=b;else{b.it=1;PC(a.h1,d);Z1(a.h1,d,e);}if(!e.it)e.dz();d=d+1|0;}}}if(a.ha!==null)Ga(a);return;}b=new I;b.g$=1;b.g_=1;E(b);};
let Hn=D(BU);
let AEd=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.hU;f=d.hR.data;g=f[e];f[e]=b;h=a.h1.hJ;e=0;a:{while(true){if(e>=h){b=a.hU;d.hR.data[b]=g;return (-1);}i=a.h1;if(e<0)break a;if(e>=i.hJ)break a;j=i.ia.data[e].ed(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new I;c.g$=1;c.g_=1;E(c);},
AFS=(a,b)=>{let c;c=a.hU;return !b.hR.data[c]?0:1;};
let Dk=D(Hn);
let Wm=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.hU;f=d.hR.data;g=f[e];f[e]=b;h=a.h1.hJ;i=0;a:{while(i<h){j=a.h1;if(i<0)break a;if(i>=j.hJ)break a;if(j.ia.data[i].ed(b,c,d)>=0)return a.ha.ed(a.iB.oO,c,d);i=i+1|0;}b=a.hU;d.hR.data[b]=g;return (-1);}c=new I;c.g$=1;c.g_=1;E(c);},
AFv=(a,b)=>{a.ha=b;};
let Kx=D(Dk);
let AEr=(a,b,c,d)=>{let e,f,g;e=a.h1.hJ;f=0;a:{while(f<e){g=a.h1;if(f<0)break a;if(f>=g.hJ)break a;if(g.ia.data[f].ed(b,c,d)>=0)return a.ha.ed(b,c,d);f=f+1|0;}return (-1);}c=new I;c.g$=1;c.g_=1;E(c);},
AH$=(a,b)=>{return 0;};
let Qa=D(Dk);
let Uf=(a,b,c,d)=>{let e,f,g;e=a.h1.hJ;f=0;a:{while(true){if(f>=e)return a.ha.ed(b,c,d);g=a.h1;if(f<0)break a;if(f>=g.hJ)break a;if(g.ia.data[f].ed(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new I;c.g$=1;c.g_=1;E(c);},
AHx=(a,b)=>{return 0;};
let Nh=D(Dk);
let Vb=(a,b,c,d)=>{let e,f,g,h,i;e=a.h1.hJ;f=d.mu?0:d.iH;a:{b:{g=a.ha.ed(b,c,d);if(g>=0){h=a.hU;d.hR.data[h]=b;h=0;while(true){if(h>=e)break b;i=a.h1;if(h<0)break a;if(h>=i.hJ)break a;if(i.ia.data[h].ey(f,b,c,d)>=0){b=a.hU;d.hR.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new I;c.g$=1;c.g_=1;E(c);},
AKR=(a,b)=>{return 0;};
let Ot=D(Dk);
let RX=(a,b,c,d)=>{let e,f,g;e=a.h1.hJ;f=a.hU;d.hR.data[f]=b;f=0;a:{while(true){if(f>=e)return a.ha.ed(b,c,d);g=a.h1;if(f<0)break a;if(f>=g.hJ)break a;if(g.ia.data[f].ey(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new I;c.g$=1;c.g_=1;E(c);},
AF5=(a,b)=>{return 0;};
function EP(){BU.call(this);this.iK=null;}
let Sq=(a,b,c,d)=>{let e,f,g;e=a.hU;f=d.ic.data;e=e*2|0;g=f[e];f[e]=b;e=a.iK.ed(b,c,d);if(e>=0)return e;e=a.hU;d.ic.data[e*2|0]=g;return (-1);},
ABW=(a,b,c,d)=>{let e;e=a.iK.d7(b,c,d);if(e>=0){b=a.hU;d.ic.data[b*2|0]=e;}return e;},
AGk=(a,b,c,d,e)=>{let f;f=a.iK.ey(b,c,d,e);if(f>=0){b=a.hU;e.ic.data[b*2|0]=f;}return f;},
ABo=(a,b)=>{return a.iK.dT(b);},
AEB=a=>{let b,c,d,e,f;b=new KV;c=a.iK;d=a.iB;e=M;M=e+1|0;f=new T;f.g9=G(20);b.hi=(J(f,f.g7,e,10)).bj();b.iK=c;b.iB=d;b.hU=d.ig;a.ha=b;return b;},
AJF=a=>{let b;a.it=1;b=a.iB;if(b!==null&&!b.it)Ga(b);b=a.iK;if(b!==null&&!b.it){b=b.ee();if(b!==null){a.iK.it=1;a.iK=b;}a.iK.dz();}};
let AC8=D();
let GZ=b=>{if(b===null||b.constructor.$meta.item==='undefined'){E(AK7());}return b.data.length;},
D4=(b,c)=>{if(b.$meta.primitive){switch(b){};}return R(b,c);};
let Hh=D(BA);
let F0=D();
function Bc(){let a=this;F0.call(a);a.hy=0;a.ir=0;a.hk=null;a.mU=null;a.nd=null;a.hN=0;}
let Gw=null;
let Ui=a=>{return null;},
Tl=a=>{return a.hk;},
ACh=a=>{return !a.ir?(F$(a.hk,0)>=2048?0:1):AEY(a.hk,0)>=2048?0:1;},
ALv=a=>{return a.hN;},
AHa=a=>{return a;},
TF=a=>{let b,c;if(a.nd===null){b=a.eB();c=new Qj;c.sp=a;c.oW=b;b=new Ba;b.hh=S(64);c.hk=b;a.nd=c;DH(c,a.ir);}return a.nd;},
Gj=a=>{let b,c;if(a.mU===null){b=a.eB();c=new Qi;c.sc=a;c.qu=b;c.qI=a;b=new Ba;b.hh=S(64);c.hk=b;a.mU=c;DH(c,a.hy);a.mU.hN=a.hN;}return a.mU;},
AJt=a=>{return 0;},
DH=(a,b)=>{let c;c=a.hy;if(c^b){a.hy=c?0:1;a.ir=a.ir?0:1;}if(!a.hN)a.hN=1;return a;},
ALn=a=>{return a.hy;},
AA9=(b,c)=>{b=QH(Gw,b);if(!c&&b.jH===null)b.jH=b.el();else if(c&&b.kV===null)b.kV=DH(b.el(),1);return c?b.kV:b.jH;},
ALb=()=>{Gw=new JX;};
function HE(){let a=this;BA.call(a);a.sA=null;a.ss=null;}
function B7(){let a=this;Bc.call(a);a.mz=0;a.m$=0;a.k9=0;a.nK=0;a.jm=0;a.iX=0;a.ho=null;a.hO=null;}
let Ch=(a,b)=>{let c;a:{if(a.mz){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.jm){Kk(a.ho,EE(b&65535));break a;}Ju(a.ho,EE(b&65535));break a;}if(a.m$&&b>128){a.k9=1;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b);if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}b=B1(BD,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.nK)Kk(a.hk,b-55296|0);else Ju(a.hk,b-55296|0);}if(a.jm)Kk(a.ho,b);else Ju(a.ho,
b);if(!a.hN&&(b>=65536&&b<=1114111?1:0))a.hN=1;return a;},
AKL=(a,b)=>{let c,d,e;if(!a.hN&&b.hN)a.hN=1;if(a.nK){if(!b.ir)Fc(a.hk,b.eB());else C2(a.hk,b.eB());}else if(!b.ir)E$(a.hk,b.eB());else{ES(a.hk,b.eB());C2(a.hk,b.eB());a.ir=a.ir?0:1;a.nK=1;}if(!a.iX&&b.eI()!==null){if(a.jm){if(!b.hy)Fc(a.ho,b.eI());else C2(a.ho,b.eI());}else if(!b.hy)E$(a.ho,b.eI());else{ES(a.ho,b.eI());C2(a.ho,b.eI());a.hy=a.hy?0:1;a.jm=1;}}else{c=a.hy;d=a.hO;if(d!==null){if(!c){e=new LL;e.rp=a;e.qO=c;e.qD=d;e.qx=b;b=new Ba;b.hh=S(64);e.hk=b;a.hO=e;}else{e=new LM;e.sG=a;e.pF=c;e.pA=d;e.ps=b;b
=new Ba;b.hh=S(64);e.hk=b;a.hO=e;}}else{if(c&&!a.jm&&(a.ho.h4?0:1)){d=new LH;d.r3=a;d.pC=b;b=new Ba;b.hh=S(64);d.hk=b;a.hO=d;}else if(!c){d=new LF;d.nC=a;d.m1=c;d.o5=b;b=new Ba;b.hh=S(64);d.hk=b;a.hO=d;}else{d=new LG;d.oa=a;d.m6=c;d.qz=b;b=new Ba;b.hh=S(64);d.hk=b;a.hO=d;}a.iX=1;}}return a;},
By=(a,b,c)=>{let d;if(b>c){d=new Bs;d.g$=1;d.g_=1;E(d);}a:{b:{if(!a.mz){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Ch(a,b);b=b+1|0;}}if(a.jm)SF(a.ho,b,c+1|0);else GB(a.ho,b,c+1|0);}return a;},
RQ=(a,b)=>{let c,d,e,f;if(!a.hN&&b.hN)a.hN=1;if(b.k9)a.k9=1;c=a.ir;if(!(c^b.ir)){if(!c)E$(a.hk,b.hk);else C2(a.hk,b.hk);}else if(c)Fc(a.hk,b.hk);else{ES(a.hk,b.hk);C2(a.hk,b.hk);a.ir=1;}a:{if(!a.iX){d=b.iX;if((!d?b.ho:null)!==null){c=a.hy;if(!(c^b.hy)){if(!c){E$(a.ho,!d?b.ho:null);break a;}C2(a.ho,!d?b.ho:null);break a;}if(c){Fc(a.ho,!d?b.ho:null);break a;}ES(a.ho,!d?b.ho:null);C2(a.ho,!b.iX?b.ho:null);a.hy=1;break a;}}c=a.hy;e=a.hO;if(e!==null){if(!c){f=new LA;f.rd=a;f.qj=c;f.qy=e;f.qK=b;b=new Ba;b.hh=S(64);f.hk
=b;a.hO=f;}else{f=new L2;f.rz=a;f.qJ=c;f.oM=e;f.oQ=b;b=new Ba;b.hh=S(64);f.hk=b;a.hO=f;}}else{if(!a.jm&&(a.ho.h4?0:1)){if(!c){e=new LJ;e.sI=a;e.po=b;b=new Ba;b.hh=S(64);e.hk=b;a.hO=e;}else{e=new LK;e.rD=a;e.qG=b;b=new Ba;b.hh=S(64);e.hk=b;a.hO=e;}}else if(!c){e=new LN;e.ql=a;e.pO=b;e.pB=c;b=new Ba;b.hh=S(64);e.hk=b;a.hO=e;}else{e=new LO;e.pU=a;e.p2=b;e.p_=c;b=new Ba;b.hh=S(64);e.hk=b;a.hO=e;}a.iX=1;}}},
Qz=(a,b)=>{let c,d,e,f;if(!a.hN&&b.hN)a.hN=1;if(b.k9)a.k9=1;c=a.ir;if(!(c^b.ir)){if(!c)C2(a.hk,b.hk);else E$(a.hk,b.hk);}else if(!c)Fc(a.hk,b.hk);else{ES(a.hk,b.hk);C2(a.hk,b.hk);a.ir=0;}a:{if(!a.iX){d=b.iX;if((!d?b.ho:null)!==null){c=a.hy;if(!(c^b.hy)){if(!c){C2(a.ho,!d?b.ho:null);break a;}E$(a.ho,!d?b.ho:null);break a;}if(!c){Fc(a.ho,!d?b.ho:null);break a;}ES(a.ho,!d?b.ho:null);C2(a.ho,!b.iX?b.ho:null);a.hy=0;break a;}}c=a.hy;e=a.hO;if(e!==null){if(!c){f=new LC;f.ro=a;f.qm=c;f.oV=e;f.pE=b;b=new Ba;b.hh=S(64);f.hk
=b;a.hO=f;}else{f=new LD;f.rJ=a;f.qa=c;f.oH=e;f.qi=b;b=new Ba;b.hh=S(64);f.hk=b;a.hO=f;}}else{if(!a.jm&&(a.ho.h4?0:1)){if(!c){e=new Ly;e.rG=a;e.ph=b;b=new Ba;b.hh=S(64);e.hk=b;a.hO=e;}else{e=new Lz;e.sD=a;e.pi=b;b=new Ba;b.hh=S(64);e.hk=b;a.hO=e;}}else if(!c){e=new LE;e.qZ=a;e.qM=b;e.pZ=c;b=new Ba;b.hh=S(64);e.hk=b;a.hO=e;}else{e=new Lx;e.pY=a;e.qf=b;e.pG=c;b=new Ba;b.hh=S(64);e.hk=b;a.hO=e;}a.iX=1;}}},
Vs=(a,b)=>{let c;c=a.hO;if(c!==null)return a.hy^c.eL(b);return a.hy^B6(a.ho,b);},
AKM=a=>{if(!a.iX)return a.ho;return null;},
Xe=a=>{return a.hk;},
AHW=a=>{let b,c;if(a.hO!==null)return a;b=!a.iX?a.ho:null;c=new LB;c.q$=a;c.mf=b;b=new Ba;b.hh=S(64);c.hk=b;return DH(c,a.hy);},
ADf=a=>{let b,c,d,e,f,g,h,i,j,k;b=new K;b.g9=G(16);c=F$(a.ho,0);while(c>=0){d=(EN(c)).data;e=0;f=d.length;g=b.g7;Bn(b,g,g+f|0);f=f+e|0;while(e<f){h=b.g9.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.g7;Bn(b,g,g+1|0);b.g9.data[g]=124;c=F$(a.ho,c+1|0);}e=b.g7;if(e>0)Qs(b,e-1|0);k=new H;d=b.g9;h=d.data;e=b.g7;g=h.length;if(e>=0&&e<=(g-0|0)){k.g8=L(d.data,0,e);return k;}b=new I;b.g$=1;b.g_=1;Bl(b);E(b);},
XC=a=>{return a.k9;};
function Dy(){BO.call(this);this.hA=null;}
let AMn=a=>{return a.hA;},
AGm=(a,b)=>{return !a.hA.dT(b)&&!a.ha.dT(b)?0:1;},
AIu=(a,b)=>{return 1;},
ACv=a=>{let b;a.it=1;b=a.ha;if(b!==null&&!b.it){b=b.ee();if(b!==null){a.ha.it=1;a.ha=b;}a.ha.dz();}b=a.hA;if(b!==null){if(!b.it){b=b.ee();if(b!==null){a.hA.it=1;a.hA=b;}a.hA.dz();}else if(b instanceof EP&&b.iB.nl)a.hA=b.ha;}};
function CJ(){Dy.call(this);this.hK=null;}
let RZ=(a,b,c,d)=>{let e,f;e=0;a:{while((b+a.hK.ev()|0)<=d.hC){f=a.hK.ew(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.ha.ed(b,c,d);if(f>=0)break;b=b-a.hK.ev()|0;e=e+(-1)|0;}return f;};
function D$(){CJ.call(this);this.ld=null;}
let TP=(a,b,c,d)=>{let e,f,g,h,i;e=a.ld;f=e.j3;g=e.j1;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.hK.ev()|0)>d.hC)break a;i=a.hK.ew(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.ha.ed(b,c,d);if(i>=0)break;b=b-a.hK.ev()|0;h=h+(-1)|0;}return i;}if((b+a.hK.ev()|0)>d.hC){d.iD=1;return (-1);}i=a.hK.ew(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);};
let CL=D(Dy);
let Sn=(a,b,c,d)=>{let e;if(!a.hA.eO(d))return a.ha.ed(b,c,d);e=a.hA.ed(b,c,d);if(e>=0)return e;return a.ha.ed(b,c,d);};
let D8=D(CJ);
let AB3=(a,b,c,d)=>{let e;e=a.hA.ed(b,c,d);if(e<0)e=a.ha.ed(b,c,d);return e;},
AKT=(a,b)=>{a.ha=b;a.hA.dD(b);};
let Qm=D(CJ);
let AJ8=(a,b,c,d)=>{while((b+a.hK.ev()|0)<=d.hC&&a.hK.ew(b,c)>0){b=b+a.hK.ev()|0;}return a.ha.ed(b,c,d);},
AC7=(a,b,c,d)=>{let e,f,g;e=a.ha.d7(b,c,d);if(e<0)return (-1);f=e-a.hK.ev()|0;while(f>=b&&a.hK.ew(f,c)>0){g=f-a.hK.ev()|0;e=f;f=g;}return e;};
let JX=D();
let SJ=null,ZX=null,O1=null;
let QH=(a,b)=>{let c,d,e,f,g;c=0;while(true){d=O1.data;if(c>=d.length){e=new HE;e.g$=1;e.g_=1;e.hb=A(59);e.sA=A(59);e.ss=b;E(e);}d=d[c].data;f=d[0];if(b===f)g=1;else if(!(f instanceof H))g=0;else{f=f;g=b.g8!==f.g8?0:1;}if(g)break;c=c+1|0;}return d[1];},
WL=()=>{let b,c,d,e,f,g;b=new GQ;SJ=b;c=new Gu;ZX=c;d=R(ALB(C),194);e=d.data;e[0]=P(C,[A(156),new O$]);e[1]=P(C,[A(157),new PJ]);e[2]=P(C,[A(158),new PN]);e[3]=P(C,[A(159),new GM]);e[4]=P(C,[A(160),c]);e[5]=P(C,[A(161),new G1]);e[6]=P(C,[A(162),new Rf]);e[7]=P(C,[A(163),new Hu]);e[8]=P(C,[A(164),new NA]);e[9]=P(C,[A(165),new NV]);e[10]=P(C,[A(166),new Me]);e[11]=P(C,[A(167),new L6]);e[12]=P(C,[A(168),new PR]);e[13]=P(C,[A(169),new Rm]);e[14]=P(C,[A(170),new Pm]);e[15]=P(C,[A(171),new O4]);e[16]=P(C,[A(172),
new P_]);e[17]=P(C,[A(173),new Ld]);e[18]=P(C,[A(174),new KT]);e[19]=P(C,[A(175),new Pt]);e[20]=P(C,[A(176),new PB]);e[21]=P(C,[A(177),new My]);e[22]=P(C,[A(178),new N0]);e[23]=P(C,[A(179),new Q0]);e[24]=P(C,[A(180),new Pz]);e[25]=P(C,[A(181),new M7]);e[26]=P(C,[A(182),new Mx]);e[27]=P(C,[A(183),new Ri]);e[28]=P(C,[A(184),b]);e[29]=P(C,[A(185),new Gf]);e[30]=P(C,[A(186),new Qd]);e[31]=P(C,[A(187),b]);e[32]=P(C,[A(188),new ND]);e[33]=P(C,[A(189),c]);e[34]=P(C,[A(190),new Mt]);f=R(C,2);g=f.data;g[0]=A(191);b=
new Bg;b.hp=0;b.hq=127;g[1]=b;e[35]=f;f=R(C,2);g=f.data;g[0]=A(192);b=new Bg;b.hp=128;b.hq=255;g[1]=b;e[36]=f;f=R(C,2);g=f.data;g[0]=A(193);b=new Bg;b.hp=256;b.hq=383;g[1]=b;e[37]=f;f=R(C,2);g=f.data;g[0]=A(194);b=new Bg;b.hp=384;b.hq=591;g[1]=b;e[38]=f;f=R(C,2);g=f.data;g[0]=A(195);b=new Bg;b.hp=592;b.hq=687;g[1]=b;e[39]=f;f=R(C,2);g=f.data;g[0]=A(196);b=new Bg;b.hp=688;b.hq=767;g[1]=b;e[40]=f;f=R(C,2);g=f.data;g[0]=A(197);b=new Bg;b.hp=768;b.hq=879;g[1]=b;e[41]=f;f=R(C,2);g=f.data;g[0]=A(198);b=new Bg;b.hp
=880;b.hq=1023;g[1]=b;e[42]=f;f=R(C,2);g=f.data;g[0]=A(199);b=new Bg;b.hp=1024;b.hq=1279;g[1]=b;e[43]=f;f=R(C,2);g=f.data;g[0]=A(200);b=new Bg;b.hp=1280;b.hq=1327;g[1]=b;e[44]=f;f=R(C,2);g=f.data;g[0]=A(201);b=new Bg;b.hp=1328;b.hq=1423;g[1]=b;e[45]=f;f=R(C,2);g=f.data;g[0]=A(202);b=new Bg;b.hp=1424;b.hq=1535;g[1]=b;e[46]=f;f=R(C,2);g=f.data;g[0]=A(203);b=new Bg;b.hp=1536;b.hq=1791;g[1]=b;e[47]=f;f=R(C,2);g=f.data;g[0]=A(204);b=new Bg;b.hp=1792;b.hq=1871;g[1]=b;e[48]=f;f=R(C,2);g=f.data;g[0]=A(205);b=new Bg;b.hp
=1872;b.hq=1919;g[1]=b;e[49]=f;f=R(C,2);g=f.data;g[0]=A(206);b=new Bg;b.hp=1920;b.hq=1983;g[1]=b;e[50]=f;f=R(C,2);g=f.data;g[0]=A(207);b=new Bg;b.hp=2304;b.hq=2431;g[1]=b;e[51]=f;f=R(C,2);g=f.data;g[0]=A(208);b=new Bg;b.hp=2432;b.hq=2559;g[1]=b;e[52]=f;f=R(C,2);g=f.data;g[0]=A(209);b=new Bg;b.hp=2560;b.hq=2687;g[1]=b;e[53]=f;f=R(C,2);g=f.data;g[0]=A(210);b=new Bg;b.hp=2688;b.hq=2815;g[1]=b;e[54]=f;f=R(C,2);g=f.data;g[0]=A(211);b=new Bg;b.hp=2816;b.hq=2943;g[1]=b;e[55]=f;f=R(C,2);g=f.data;g[0]=A(212);b=new Bg;b.hp
=2944;b.hq=3071;g[1]=b;e[56]=f;f=R(C,2);g=f.data;g[0]=A(213);b=new Bg;b.hp=3072;b.hq=3199;g[1]=b;e[57]=f;f=R(C,2);g=f.data;g[0]=A(214);b=new Bg;b.hp=3200;b.hq=3327;g[1]=b;e[58]=f;f=R(C,2);g=f.data;g[0]=A(215);b=new Bg;b.hp=3328;b.hq=3455;g[1]=b;e[59]=f;f=R(C,2);g=f.data;g[0]=A(216);b=new Bg;b.hp=3456;b.hq=3583;g[1]=b;e[60]=f;f=R(C,2);g=f.data;g[0]=A(217);b=new Bg;b.hp=3584;b.hq=3711;g[1]=b;e[61]=f;f=R(C,2);g=f.data;g[0]=A(218);b=new Bg;b.hp=3712;b.hq=3839;g[1]=b;e[62]=f;f=R(C,2);g=f.data;g[0]=A(219);b=new Bg;b.hp
=3840;b.hq=4095;g[1]=b;e[63]=f;f=R(C,2);g=f.data;g[0]=A(220);b=new Bg;b.hp=4096;b.hq=4255;g[1]=b;e[64]=f;f=R(C,2);g=f.data;g[0]=A(221);b=new Bg;b.hp=4256;b.hq=4351;g[1]=b;e[65]=f;f=R(C,2);g=f.data;g[0]=A(222);b=new Bg;b.hp=4352;b.hq=4607;g[1]=b;e[66]=f;f=R(C,2);g=f.data;g[0]=A(223);b=new Bg;b.hp=4608;b.hq=4991;g[1]=b;e[67]=f;f=R(C,2);g=f.data;g[0]=A(224);b=new Bg;b.hp=4992;b.hq=5023;g[1]=b;e[68]=f;f=R(C,2);g=f.data;g[0]=A(225);b=new Bg;b.hp=5024;b.hq=5119;g[1]=b;e[69]=f;f=R(C,2);g=f.data;g[0]=A(226);b=new Bg;b.hp
=5120;b.hq=5759;g[1]=b;e[70]=f;f=R(C,2);g=f.data;g[0]=A(227);b=new Bg;b.hp=5760;b.hq=5791;g[1]=b;e[71]=f;f=R(C,2);g=f.data;g[0]=A(228);b=new Bg;b.hp=5792;b.hq=5887;g[1]=b;e[72]=f;f=R(C,2);g=f.data;g[0]=A(229);b=new Bg;b.hp=5888;b.hq=5919;g[1]=b;e[73]=f;f=R(C,2);g=f.data;g[0]=A(230);b=new Bg;b.hp=5920;b.hq=5951;g[1]=b;e[74]=f;f=R(C,2);g=f.data;g[0]=A(231);b=new Bg;b.hp=5952;b.hq=5983;g[1]=b;e[75]=f;f=R(C,2);g=f.data;g[0]=A(232);b=new Bg;b.hp=5984;b.hq=6015;g[1]=b;e[76]=f;f=R(C,2);g=f.data;g[0]=A(233);b=new Bg;b.hp
=6016;b.hq=6143;g[1]=b;e[77]=f;f=R(C,2);g=f.data;g[0]=A(234);b=new Bg;b.hp=6144;b.hq=6319;g[1]=b;e[78]=f;f=R(C,2);g=f.data;g[0]=A(235);b=new Bg;b.hp=6400;b.hq=6479;g[1]=b;e[79]=f;f=R(C,2);g=f.data;g[0]=A(236);b=new Bg;b.hp=6480;b.hq=6527;g[1]=b;e[80]=f;f=R(C,2);g=f.data;g[0]=A(237);b=new Bg;b.hp=6528;b.hq=6623;g[1]=b;e[81]=f;f=R(C,2);g=f.data;g[0]=A(238);b=new Bg;b.hp=6624;b.hq=6655;g[1]=b;e[82]=f;f=R(C,2);g=f.data;g[0]=A(239);b=new Bg;b.hp=6656;b.hq=6687;g[1]=b;e[83]=f;f=R(C,2);g=f.data;g[0]=A(240);b=new Bg;b.hp
=7424;b.hq=7551;g[1]=b;e[84]=f;f=R(C,2);g=f.data;g[0]=A(241);b=new Bg;b.hp=7552;b.hq=7615;g[1]=b;e[85]=f;f=R(C,2);g=f.data;g[0]=A(242);b=new Bg;b.hp=7616;b.hq=7679;g[1]=b;e[86]=f;f=R(C,2);g=f.data;g[0]=A(243);b=new Bg;b.hp=7680;b.hq=7935;g[1]=b;e[87]=f;f=R(C,2);g=f.data;g[0]=A(244);b=new Bg;b.hp=7936;b.hq=8191;g[1]=b;e[88]=f;f=R(C,2);g=f.data;g[0]=A(245);b=new Bg;b.hp=8192;b.hq=8303;g[1]=b;e[89]=f;f=R(C,2);g=f.data;g[0]=A(246);b=new Bg;b.hp=8304;b.hq=8351;g[1]=b;e[90]=f;f=R(C,2);g=f.data;g[0]=A(247);b=new Bg;b.hp
=8352;b.hq=8399;g[1]=b;e[91]=f;f=R(C,2);g=f.data;g[0]=A(248);b=new Bg;b.hp=8400;b.hq=8447;g[1]=b;e[92]=f;f=R(C,2);g=f.data;g[0]=A(249);b=new Bg;b.hp=8448;b.hq=8527;g[1]=b;e[93]=f;f=R(C,2);g=f.data;g[0]=A(250);b=new Bg;b.hp=8528;b.hq=8591;g[1]=b;e[94]=f;f=R(C,2);g=f.data;g[0]=A(251);b=new Bg;b.hp=8592;b.hq=8703;g[1]=b;e[95]=f;f=R(C,2);g=f.data;g[0]=A(252);b=new Bg;b.hp=8704;b.hq=8959;g[1]=b;e[96]=f;f=R(C,2);g=f.data;g[0]=A(253);b=new Bg;b.hp=8960;b.hq=9215;g[1]=b;e[97]=f;f=R(C,2);g=f.data;g[0]=A(254);b=new Bg;b.hp
=9216;b.hq=9279;g[1]=b;e[98]=f;f=R(C,2);g=f.data;g[0]=A(255);b=new Bg;b.hp=9280;b.hq=9311;g[1]=b;e[99]=f;f=R(C,2);g=f.data;g[0]=A(256);b=new Bg;b.hp=9312;b.hq=9471;g[1]=b;e[100]=f;f=R(C,2);g=f.data;g[0]=A(257);b=new Bg;b.hp=9472;b.hq=9599;g[1]=b;e[101]=f;f=R(C,2);g=f.data;g[0]=A(258);b=new Bg;b.hp=9600;b.hq=9631;g[1]=b;e[102]=f;e[103]=P(C,[A(259),Bo(9632,9727)]);e[104]=P(C,[A(260),Bo(9728,9983)]);e[105]=P(C,[A(261),Bo(9984,10175)]);e[106]=P(C,[A(262),Bo(10176,10223)]);e[107]=P(C,[A(263),Bo(10224,10239)]);e[108]
=P(C,[A(264),Bo(10240,10495)]);e[109]=P(C,[A(265),Bo(10496,10623)]);e[110]=P(C,[A(266),Bo(10624,10751)]);e[111]=P(C,[A(267),Bo(10752,11007)]);e[112]=P(C,[A(268),Bo(11008,11263)]);e[113]=P(C,[A(269),Bo(11264,11359)]);e[114]=P(C,[A(270),Bo(11392,11519)]);e[115]=P(C,[A(271),Bo(11520,11567)]);e[116]=P(C,[A(272),Bo(11568,11647)]);e[117]=P(C,[A(273),Bo(11648,11743)]);e[118]=P(C,[A(274),Bo(11776,11903)]);e[119]=P(C,[A(275),Bo(11904,12031)]);e[120]=P(C,[A(276),Bo(12032,12255)]);e[121]=P(C,[A(277),Bo(12272,12287)]);e[122]
=P(C,[A(278),Bo(12288,12351)]);e[123]=P(C,[A(279),Bo(12352,12447)]);e[124]=P(C,[A(280),Bo(12448,12543)]);e[125]=P(C,[A(281),Bo(12544,12591)]);e[126]=P(C,[A(282),Bo(12592,12687)]);e[127]=P(C,[A(283),Bo(12688,12703)]);e[128]=P(C,[A(284),Bo(12704,12735)]);e[129]=P(C,[A(285),Bo(12736,12783)]);e[130]=P(C,[A(286),Bo(12784,12799)]);e[131]=P(C,[A(287),Bo(12800,13055)]);e[132]=P(C,[A(288),Bo(13056,13311)]);e[133]=P(C,[A(289),Bo(13312,19893)]);e[134]=P(C,[A(290),Bo(19904,19967)]);e[135]=P(C,[A(291),Bo(19968,40959)]);e[136]
=P(C,[A(292),Bo(40960,42127)]);e[137]=P(C,[A(293),Bo(42128,42191)]);e[138]=P(C,[A(294),Bo(42752,42783)]);e[139]=P(C,[A(295),Bo(43008,43055)]);e[140]=P(C,[A(296),Bo(44032,55203)]);e[141]=P(C,[A(297),Bo(55296,56191)]);e[142]=P(C,[A(298),Bo(56192,56319)]);e[143]=P(C,[A(299),Bo(56320,57343)]);e[144]=P(C,[A(300),Bo(57344,63743)]);e[145]=P(C,[A(301),Bo(63744,64255)]);e[146]=P(C,[A(302),Bo(64256,64335)]);e[147]=P(C,[A(303),Bo(64336,65023)]);e[148]=P(C,[A(304),Bo(65024,65039)]);e[149]=P(C,[A(305),Bo(65040,65055)]);e[150]
=P(C,[A(306),Bo(65056,65071)]);e[151]=P(C,[A(307),Bo(65072,65103)]);e[152]=P(C,[A(308),Bo(65104,65135)]);e[153]=P(C,[A(309),Bo(65136,65279)]);e[154]=P(C,[A(310),Bo(65280,65519)]);e[155]=P(C,[A(32),Bo(0,1114111)]);f=R(C,2);g=f.data;g[0]=A(311);b=new Mp;ACz(b);g[1]=b;e[156]=f;e[157]=P(C,[A(312),BQ(0,1)]);e[158]=P(C,[A(313),E9(62,1)]);e[159]=P(C,[A(314),BQ(1,1)]);e[160]=P(C,[A(315),BQ(2,1)]);e[161]=P(C,[A(316),BQ(3,0)]);e[162]=P(C,[A(317),BQ(4,0)]);e[163]=P(C,[A(318),BQ(5,1)]);e[164]=P(C,[A(319),E9(448,1)]);e[165]
=P(C,[A(320),BQ(6,1)]);e[166]=P(C,[A(321),BQ(7,0)]);e[167]=P(C,[A(322),BQ(8,1)]);e[168]=P(C,[A(323),E9(3584,1)]);e[169]=P(C,[A(324),BQ(9,1)]);e[170]=P(C,[A(325),BQ(10,1)]);e[171]=P(C,[A(326),BQ(11,1)]);e[172]=P(C,[A(327),E9(28672,0)]);e[173]=P(C,[A(328),BQ(12,0)]);e[174]=P(C,[A(329),BQ(13,0)]);e[175]=P(C,[A(330),BQ(14,0)]);e[176]=P(C,[A(331),ZL(983040,1,1)]);e[177]=P(C,[A(332),BQ(15,0)]);e[178]=P(C,[A(333),BQ(16,1)]);e[179]=P(C,[A(334),BQ(18,1)]);e[180]=P(C,[A(335),ABu(19,0,1)]);e[181]=P(C,[A(336),E9(1643118592,
1)]);e[182]=P(C,[A(337),BQ(20,0)]);e[183]=P(C,[A(338),BQ(21,0)]);e[184]=P(C,[A(339),BQ(22,0)]);e[185]=P(C,[A(340),BQ(23,0)]);e[186]=P(C,[A(341),BQ(24,1)]);e[187]=P(C,[A(342),E9(2113929216,1)]);e[188]=P(C,[A(343),BQ(25,1)]);e[189]=P(C,[A(344),BQ(26,0)]);e[190]=P(C,[A(345),BQ(27,0)]);e[191]=P(C,[A(346),BQ(28,1)]);e[192]=P(C,[A(347),BQ(29,0)]);e[193]=P(C,[A(348),BQ(30,0)]);O1=d;};
function Bh(){let a=this;C.call(a);a.jH=null;a.kV=null;}
let ACz=a=>{return;},
AL1=(a,b)=>{if(!b&&a.jH===null)a.jH=a.el();else if(b&&a.kV===null)a.kV=DH(a.el(),1);if(b)return a.kV;return a.jH;};
function KS(){let a=this;F0.call(a);a.j3=0;a.j1=0;}
let ADp=a=>{let b,c,d,e,f,g,h;b=a.j3;c=a.j1;if(c==2147483647)d=A(59);else{d=new T;d.g9=G(20);d=(J(d,d.g7,c,10)).bj();}e=new K;e.g9=G(16);c=e.g7;Bn(e,c,c+1|0);e.g9.data[c]=123;J(e,e.g7,b,10);b=e.g7;Bn(e,b,b+1|0);e.g9.data[b]=44;f=e.g7;if(d===null)d=A(2);F(e,f,d);b=e.g7;Bn(e,b,b+1|0);g=e.g9;h=g.data;h[b]=125;d=new H;b=e.g7;c=h.length;if(b>=0&&b<=(c-0|0)){d.g8=L(g.data,0,b);return d;}d=new I;d.g$=1;d.g_=1;Bl(d);E(d);};
let Lq=D(BO);
let AAG=(a,b,c,d)=>{return b;},
AEy=(a,b)=>{return 0;};
function Ba(){let a=this;C.call(a);a.hh=null;a.h4=0;}
let Ju=(a,b)=>{let c,d,e;if(b<0){c=new I;c.g$=1;c.g_=1;E(c);}d=b/32|0;if(b>=a.h4){GX(a,d+1|0);a.h4=b+1|0;}e=a.hh.data;e[d]=e[d]|1<<(b%32|0);},
GB=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=B4(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.h4){GX(a,e+1|0);a.h4=c;}if(d==e){f=a.hh.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.hh.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new I;i.g$=1;i.g_=1;E(i);},
Kk=(a,b)=>{let c,d,e,f,g;if(b<0){c=new I;c.g$=1;c.g_=1;E(c);}d=b/32|0;e=a.hh.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.h4-1|0))F8(a);}},
SF=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0&&b<=c){d=a.h4;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.hh.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.hh.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}F8(a);return;}i=new I;i.g$=1;i.g_=1;E(i);},
B6=(a,b)=>{let c,d,e;if(b<0){c=new I;c.g$=1;c.g_=1;E(c);}d=b/32|0;e=a.hh.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;},
F$=(a,b)=>{let c,d,e,f,g;if(b<0){c=new I;c.g$=1;c.g_=1;E(c);}d=a.h4;if(b>=d)return (-1);e=b/32|0;f=a.hh.data;g=f[e]>>>(b%32|0)|0;if(g)return DX(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+DX(f[g])|0;g=g+1|0;}return (-1);},
AEY=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new I;c.g$=1;c.g_=1;E(c);}d=a.h4;if(b>=d)return b;e=b/32|0;f=a.hh.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return DX(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+DX(f[h]^(-1))|0;h=h+1|0;}return d;},
GX=(a,b)=>{let c,d,e,f,g,h;c=a.hh.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=S(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.hh=g;},
F8=a=>{let b,c,d;b=(a.h4+31|0)/32|0;a.h4=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=Lb(a.hh.data[c]);if(d<32)break;c=c+(-1)|0;a.h4=a.h4-32|0;}a.h4=a.h4-d|0;}},
GW=(a,b)=>{let c,d,e,f,g;c=a.hh.data;d=c.length;e=b.hh.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;},
C2=(a,b)=>{let c,d,e,f,g,h,i;c=a.hh.data;d=c.length;e=b.hh.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.h4;i=b.h4;if(h<i)i=h;a.h4=i;F8(a);},
Fc=(a,b)=>{let c,d,e,f,g;c=a.hh.data;d=c.length;e=b.hh.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}F8(a);},
E$=(a,b)=>{let c,d,e,f,g;c=a.h4;d=b.h4;if(c>d)d=c;a.h4=d;GX(a,(d+31|0)/32|0);e=a.hh.data;c=e.length;f=b.hh.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}},
ES=(a,b)=>{let c,d,e,f,g;c=a.h4;d=b.h4;if(c>d)d=c;a.h4=d;GX(a,(d+31|0)/32|0);e=a.hh.data;c=e.length;f=b.hh.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}F8(a);};
function KC(){let a=this;BU.call(a);a.pj=null;a.q9=0;}
let Zn=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.iH;f=d.hC;g=b+1|0;f=B4(g,f);if(f>0){d.iD=1;return (-1);}if(b>=0&&b<c.g8.length){h=c.g8.charCodeAt(b);if(!a.pj.eL(h))return (-1);i=h&64512;j=i!=55296?0:1;a:{if(j){if(f>=0)break a;if(g>=0&&g<c.g8.length){if((c.g8.charCodeAt(g)&64512)!=56320?0:1)return (-1);break a;}c=new Q;c.g$=1;c.g_=1;E(c);}if((i!=56320?0:1)&&b>e){j=b-1|0;if(j>=0&&j<c.g8.length){if(!((c.g8.charCodeAt(j)&64512)!=55296?0:1))break a;return (-1);}c=new Q;c.g$=1;c.g_=1;E(c);}}return a.ha.ed(g,c,d);}c=new Q;c.g$
=1;c.g_=1;E(c);};
function FB(){let a=this;BU.call(a);a.lf=null;a.k7=null;}
let TG=(a,b,c,d)=>{let e;e=a.lf.ed(b,c,d);if(e<0)e=Zn(a.k7,b,c,d);if(e>=0)return e;return (-1);},
AEa=(a,b)=>{a.ha=b;a.k7.ha=b;a.lf.dD(b);},
UM=(a,b)=>{return 1;},
Uh=(a,b)=>{return 1;};
function CS(){let a=this;BU.call(a);a.iS=null;a.ms=0;}
let W5=(a,b,c,d)=>{let e,f,g,h;a:{e=d.hC;if(b<e){f=b+1|0;if(b>=0&&b<c.g8.length){g=c.g8.charCodeAt(b);if(a.eL(g)){h=a.ha.ed(f,c,d);if(h>0)return h;}if(f>=e)break a;e=f+1|0;if(f>=0&&f<c.g8.length){f=c.g8.charCodeAt(f);b=(g&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.eL(((g&1023)<<10|f&1023)+65536|0))break a;else return a.ha.ed(e,c,d);}c=new Q;c.g$=1;c.g_=1;E(c);}c=new Q;c.g$=1;c.g_=1;E(c);}}return (-1);},
XU=(a,b)=>{return a.iS.eL(b);},
Ty=(a,b)=>{let c,d;if(b instanceof Dq)return a.iS.eL(b.kM);if(b instanceof C_)return a.iS.eL(b.iC);if(b instanceof CS){c=a.iS;b=b.iS;return c.eI()!==null&&b.eI()!==null?GW(c.eI(),b.eI()):1;}if(!(b instanceof Dd))return 1;c=a.iS;d=b.i$;return c.eI()!==null&&d.eI()!==null?GW(c.eI(),d.eI()):1;},
ALG=a=>{return a.iS;},
AG2=(a,b)=>{a.ha=b;},
Xi=(a,b)=>{return 1;};
let Hz=D(CS);
let Z$=(a,b)=>{let c;c=a.iS;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b);if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}return c.eL(B1(BD,b));};
function H3(){let a=this;B2.call(a);a.nG=null;a.pr=0;}
let AAJ=(a,b,c)=>{let d;d=a.nG;if(b>=0&&b<c.g8.length){b=c.g8.charCodeAt(b);if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}return !d.eL(B1(BD,b)&65535)?(-1):1;}c=new Q;c.g$=1;c.g_=1;E(c);};
function Dd(){let a=this;B2.call(a);a.i$=null;a.p5=0;}
let Rs=(a,b,c)=>{let d;d=a.i$;if(b>=0&&b<c.g8.length)return !d.eL(c.g8.charCodeAt(b))?(-1):1;c=new Q;c.g$=1;c.g_=1;E(c);},
AEA=(a,b)=>{let c,d;if(b instanceof C_)return a.i$.eL(b.iC);if(b instanceof Dd){c=a.i$;b=b.i$;return c.eI()!==null&&b.eI()!==null?GW(c.eI(),b.eI()):1;}if(!(b instanceof CS)){if(!(b instanceof Dq))return 1;return 0;}c=a.i$;d=b.iS;return c.eI()!==null&&d.eI()!==null?GW(c.eI(),d.eI()):1;};
function Go(){let a=this;BU.call(a);a.ke=null;a.le=null;a.lR=0;}
let AB2=(a,b)=>{a.ha=b;},
RM=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=d.hC;f=S(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0&&b<c.g8.length){j=c.g8.charCodeAt(b);k=Wc(j);if(k!==null){f=k.data;l=0;b=f.length;m=a.lR;if(b!=m)return (-1);while(true){if(l>=m)return a.ha.ed(i,c,d);if(f[l]!=a.ke.data[l])break;l=l+1|0;}return (-1);}k=f.data;k[0]=j;m=j-4352|0;if(m>=0&&m<19){if(i<e){if(i>=0&&i<c.g8.length){j=c.g8.charCodeAt(i);g=j-4449|0;}else{c=new Q;c.g$=1;c.g_=1;E(c);}}if(g>=0&&g<21){b=i+1|0;k[1]=j;if(b<e){if(b>=0&&b<c.g8.length){j=c.g8.charCodeAt(b);h
=j-4519|0;}else{c=new Q;c.g$=1;c.g_=1;E(c);}}if(h>=0&&h<28){a:{b=b+1|0;k[2]=j;if(a.lR==3){m=k[0];f=a.ke.data;if(m==f[0]&&k[1]==f[1]&&k[2]==f[2]){b=a.ha.ed(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.lR==2){m=k[0];f=a.ke.data;if(m==f[0]&&k[1]==f[1]){b=a.ha.ed(b,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}c=new Q;c.g$=1;c.g_=1;E(c);},
UD=(a,b)=>{let c,d,e;a:{if(b instanceof Go){b=b;if(b.le===null){c=new H;d=b.ke;c.g8=L(d.data,0,d.data.length);b.le=c;}c=b.le;if(a.le===null){b=new H;d=a.ke;b.g8=L(d.data,0,d.data.length);a.le=b;}b=a.le;if(c===b)e=1;else if(!(b instanceof H))e=0;else{b=b;e=c.g8!==b.g8?0:1;}if(!e){e=0;break a;}}e=1;}return e;},
AHZ=(a,b)=>{return 1;};
function C_(){B2.call(this);this.iC=0;}
let AAp=a=>{return 1;},
Y2=(a,b,c)=>{let d;d=a.iC;if(b>=0&&b<c.g8.length)return d!=c.g8.charCodeAt(b)?(-1):1;c=new Q;c.g$=1;c.g_=1;E(c);},
WZ=(a,b,c,d)=>{let e,f,g,h,i;if(c instanceof H){e=d.hC;while(true){if(b>=e)return (-1);f=FY(c,a.iC,b);if(f<0)return (-1);g=a.ha;b=f+1|0;if(g.ed(b,c,d)>=0)break;}return f;}h=d.hC;a:{b:{while(true){if(b>h){b=(-1);break b;}i=b+1|0;if(i>d.hC){d.iD=1;e=(-1);}else{e=a.iC;if(b<0)break a;if(b>=c.g8.length)break a;e=e!=c.g8.charCodeAt(b)?(-1):1;e=e<0?(-1):a.ha.ed(b+e|0,c,d);}if(e>=0)break;b=i;}}return b;}c=new Q;Y(c);E(c);},
AAy=(a,b,c,d,e)=>{let f;if(d instanceof H){a:{while(true){if(c<b)return (-1);c=Fo(d,a.iC,c);if(c<0)break a;if(c<b)break a;if(a.ha.ed(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}b:{c:{while(true){if(c<b){c=(-1);break c;}if((c+1|0)>e.hC){e.iD=1;f=(-1);}else{f=a.iC;if(c<0)break b;if(c>=d.g8.length)break b;f=f!=d.g8.charCodeAt(c)?(-1):1;f=f<0?(-1):a.ha.ed(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new Q;Y(d);E(d);},
AHS=(a,b)=>{let c,d,e,f;if(b instanceof C_)return b.iC!=a.iC?0:1;if(!(b instanceof Dd)){if(b instanceof CS)return b.eL(a.iC);if(!(b instanceof Dq))return 1;return 0;}b=b;c=a.iC;d=new H;e=G(1);f=e.data;f[0]=c;d.g8=L(e.data,0,f.length);b=b.i$;if(0>=d.g8.length){b=new Q;b.g$=1;b.g_=1;E(b);}return (!b.eL(d.g8.charCodeAt(0))?(-1):1)<=0?0:1;};
function J2(){B2.call(this);this.m0=0;}
let RB=(a,b,c)=>{let d;d=a.m0;if(b>=0&&b<c.g8.length){b=c.g8.charCodeAt(b);if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}return d!=(B1(BD,b)&65535)?(-1):1;}c=new Q;c.g$=1;c.g_=1;E(c);};
function Hw(){let a=this;B2.call(a);a.oq=0;a.nb=0;}
let Sg=(a,b,c)=>{let d;d=a.oq;if(b>=0&&b<c.g8.length){a:{b:{if(d!=c.g8.charCodeAt(b)){d=a.nb;if(b<0)break a;if(b>=c.g8.length)break a;if(d!=c.g8.charCodeAt(b)){b=(-1);break b;}}b=1;}return b;}c=new Q;c.g$=1;c.g_=1;E(c);}c=new Q;c.g$=1;c.g_=1;E(c);};
function Ec(){let a=this;BU.call(a);a.kx=0;a.kR=null;a.kJ=null;a.kG=0;}
let AJA=(a,b)=>{a.ha=b;},
AEb=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=S(4);f=d.hC;if(b>=f)return (-1);g=IL(a,b,c,f);h=b+a.kx|0;i=Mv.eX(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;Fm(i,0,e,0,b);b=0+b|0;}a:{if(h<f){i=e.data;g=IL(a,h,c,f);while(b<4){if(!AEI(g)){k=b+1|0;i[b]=g;}else{j=(Mv.eX(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.kx|0;if(h>=f){b=k;break a;}g=IL(a,h,c,f);b=k;}}}if(b!=a.kG)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.ha.ed(h,c,d);if(j[g]!=a.kJ.data[g])break;g
=g+1|0;}return (-1);},
IL=(a,b,c,d)=>{let e,f,g,h;a:{a.kx=1;if(b>=(d-1|0)){if(b>=0&&b<c.g8.length){e=c.g8.charCodeAt(b);break a;}c=new Q;c.g$=1;c.g_=1;E(c);}d=b+1|0;if(b>=0&&b<c.g8.length){e=c.g8.charCodeAt(b);if(d>=0&&d<c.g8.length){f=c.g8.charCodeAt(d);b=(e&64512)!=55296?0:1;if(b&&((f&64512)!=56320?0:1)?1:0){g=G(2);h=g.data;h[0]=e;h[1]=f;e=UL(g,0,h.length);a.kx=2;}break a;}c=new Q;c.g$=1;c.g_=1;E(c);}c=new Q;c.g$=1;c.g_=1;E(c);}return e;},
AAK=(a,b)=>{let c,d,e,f,g,h,i;a:{if(b instanceof Ec){b=b;if(b.kR===null){c=new K;c.g9=G(16);d=0;while(d<b.kG){e=EN(b.kJ.data[d]);f=e.data.length;KU(c,c.g7,e,0,f);d=d+1|0;}g=new H;e=c.g9;h=e.data;i=c.g7;f=h.length;if(i>=0&&i<=(f-0|0)){g.g8=L(e.data,0,i);b.kR=g;}else{b=new I;Y(b);E(b);}}g=b.kR;if(a.kR===null){b=new K;b.g9=G(16);d=0;while(d<a.kG){e=EN(a.kJ.data[d]);f=e.data.length;KU(b,b.g7,e,0,f);d=d+1|0;}c=new H;e=b.g9;h=e.data;f=b.g7;i=h.length;if(f>=0&&f<=(i-0|0)){c.g8=L(e.data,0,f);a.kR=c;}else{b=new I;Y(b);E(b);}}b
=a.kR;if(g===b)d=1;else if(!(b instanceof H))d=0;else{b=b;d=g.g8!==b.g8?0:1;}if(!d){d=0;break a;}}d=1;}return d;},
AFy=(a,b)=>{return 1;};
let QY=D(Ec);
let OP=D(Ec);
let Rl=D(CL);
let VI=(a,b,c,d)=>{let e;while(true){e=a.hA.ed(b,c,d);if(e<=0)break;b=e;}return a.ha.ed(b,c,d);};
let Mf=D(CL);
let ACR=(a,b,c,d)=>{let e;e=a.hA.ed(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.hA.ed(e,c,d);if(b<=e)break;e=b;}b=e;}return a.ha.ed(b,c,d);};
let E_=D(CL);
let AGW=(a,b,c,d)=>{let e;if(!a.hA.eO(d))return a.ha.ed(b,c,d);e=a.hA.ed(b,c,d);if(e>=0)return e;return a.ha.ed(b,c,d);},
AIG=(a,b)=>{a.ha=b;a.hA.dD(b);};
let L7=D(E_);
let AAw=(a,b,c,d)=>{let e;e=a.hA.ed(b,c,d);if(e<=0)e=b;return a.ha.ed(e,c,d);},
ADq=(a,b)=>{a.ha=b;};
function EI(){let a=this;CL.call(a);a.jV=null;a.iY=0;}
let AKH=(a,b,c,d)=>{let e,f,g,h;e=a.iY;e=d.jg.data[e];if(!a.hA.eO(d))return a.ha.ed(b,c,d);if(e>=a.jV.j1)return a.ha.ed(b,c,d);f=a.iY;e=e+1|0;d.jg.data[f]=e;g=a.hA.ed(b,c,d);if(g>=0){b=a.iY;d.jg.data[b]=0;return g;}g=a.iY;e=e+(-1)|0;h=d.jg.data;h[g]=e;if(e>=a.jV.j3)return a.ha.ed(b,c,d);h[g]=0;return (-1);};
let KW=D(EI);
let ZF=(a,b,c,d)=>{let e,f,g;e=0;f=a.jV.j1;a:{while(true){g=a.hA.ed(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.jV.j3)return (-1);return a.ha.ed(b,c,d);};
let Nw=D(CL);
let AJO=(a,b,c,d)=>{let e;if(!a.hA.eO(d))return a.ha.ed(b,c,d);e=a.ha.ed(b,c,d);if(e>=0)return e;return a.hA.ed(b,c,d);};
let MT=D(E_);
let UO=(a,b,c,d)=>{let e;if(!a.hA.eO(d))return a.ha.ed(b,c,d);e=a.ha.ed(b,c,d);if(e<0)e=a.hA.ed(b,c,d);return e;};
let Po=D(EI);
let Ta=(a,b,c,d)=>{let e,f,g;e=a.iY;f=d.jg.data[e];if(!a.hA.eO(d))return a.ha.ed(b,c,d);g=a.jV;if(f>=g.j1){e=a.iY;d.jg.data[e]=0;return a.ha.ed(b,c,d);}if(f<g.j3){e=a.iY;d.jg.data[e]=f+1|0;e=a.hA.ed(b,c,d);}else{e=a.ha.ed(b,c,d);if(e>=0){b=a.iY;d.jg.data[b]=0;return e;}e=a.iY;d.jg.data[e]=f+1|0;e=a.hA.ed(b,c,d);}return e;};
let Ny=D(Dy);
let AKq=(a,b,c,d)=>{let e;e=d.hC;if(e>b)return a.ha.ey(b,e,c,d);return a.ha.ed(b,c,d);},
AHc=(a,b,c,d)=>{let e;e=d.hC;if(a.ha.ey(b,e,c,d)>=0)return b;return (-1);};
function Lw(){Dy.call(this);this.mi=null;}
let AEC=(a,b,c,d)=>{let e,f,g;e=d.hC;f=b;a:{while(true){if(f>=e){f=(-1);break a;}g=a.mi;if(f<0)break;if(f>=c.g8.length)break;if(g.e1(c.g8.charCodeAt(f)))break a;f=f+1|0;}c=new Q;c.g$=1;c.g_=1;E(c);}if(f>=0)e=f;if(e>b)return a.ha.ey(b,e,c,d);return a.ha.ed(b,c,d);},
RS=(a,b,c,d)=>{let e,f,g,h,i;e=d.hC;f=a.ha.d7(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.mi;if(g<0)break;if(g>=c.g8.length)break;if(h.e1(c.g8.charCodeAt(g)))break a;g=g+1|0;}c=new Q;c.g$=1;c.g_=1;E(c);}if(g>=0)e=g;g=a.ha.ey(f,e,c,d);if(f>g)g=f;if(g<=0)i=g?(-1):0;else{i=g-1|0;b:{while(true){if(i<b){i=(-1);break b;}d=a.mi;if(i<0)break;if(i>=c.g8.length)break;if(d.e1(c.g8.charCodeAt(i)))break b;i=i+(-1)|0;}c=new Q;c.g$=1;c.g_=1;E(c);}}if(i>=b)b=i>=g?i:i+1|0;return b;};
let FP=D();
let EQ=null,EG=null;
let Rn=D(CJ);
let Te=(a,b,c,d)=>{let e;a:{while(true){if((b+a.hK.ev()|0)>d.hC)break a;e=a.hK.ew(b,c);if(e<1)break;b=b+e|0;}}return a.ha.ed(b,c,d);};
let Qg=D(D8);
let ACM=(a,b,c,d)=>{let e;if((b+a.hK.ev()|0)<=d.hC){e=a.hK.ew(b,c);if(e>=1)b=b+e|0;}return a.ha.ed(b,c,d);};
let LZ=D(D$);
let AGo=(a,b,c,d)=>{let e,f,g,h,i;e=a.ld;f=e.j3;g=e.j1;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.hK.ev()|0)>d.hC)break a;i=a.hK.ew(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.ha.ed(b,c,d);}if((b+a.hK.ev()|0)>d.hC){d.iD=1;return (-1);}i=a.hK.ew(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);};
let MM=D(CJ);
let AEt=(a,b,c,d)=>{let e;while(true){e=a.ha.ed(b,c,d);if(e>=0)break;if((b+a.hK.ev()|0)<=d.hC){e=a.hK.ew(b,c);b=b+e|0;}if(e<1)return (-1);}return e;};
let OS=D(D8);
let Tq=(a,b,c,d)=>{let e;e=a.ha.ed(b,c,d);if(e>=0)return e;return a.hA.ed(b,c,d);};
let Ni=D(D$);
let AGH=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.ld;f=e.j3;g=e.j1;h=0;while(true){if(h>=f){a:{while(true){i=a.ha.ed(b,c,d);if(i>=0)break;if((b+a.hK.ev()|0)<=d.hC){i=a.hK.ew(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.hK.ev()|0)>d.hC){d.iD=1;return (-1);}j=a.hK.ew(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);};
let IG=D(BO);
let ABs=(a,b,c,d)=>{if(b&&!(d.kv&&b==d.iH))return (-1);return a.ha.ed(b,c,d);},
ZR=(a,b)=>{return 0;};
function If(){BO.call(this);this.ol=0;}
let Ue=(a,b,c,d)=>{let e,f,g;if(b>=d.hC)e=32;else if(b>=0&&b<c.g8.length)e=c.g8.charCodeAt(b);else{c=new Q;c.g$=1;c.g_=1;E(c);}if(!b)f=32;else{f=b-1|0;if(f>=0&&f<c.g8.length)f=c.g8.charCodeAt(f);else{c=new Q;c.g$=1;c.g_=1;E(c);}}g=d.mu?0:d.iH;return (e!=32&&!MW(a,e,b,g,c)?0:1)^(f!=32&&!MW(a,f,b-1|0,g,c)?0:1)^a.ol?(-1):a.ha.ed(b,c,d);},
UA=(a,b)=>{return 0;},
MW=(a,b,c,d,e)=>{let f;a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}f=1;break a;}f=0;}if(!f&&b!=95){c:{d:{if(B$(b)==6)while(true){c=c+(-1)|0;if(c<d)break d;if(c<0)break c;if(c>=e.g8.length)break c;e:{f:{f=e.g8.charCodeAt(c);switch(B$(f)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break f;default:break f;}b=1;break e;}b=0;}if(b)return 0;if(B$(f)!=6)return 1;}}return 1;}e=new Q;e.g$=1;e.g_=1;E(e);}return 0;};
let Ls=D(BO);
let AAd=(a,b,c,d)=>{if(b!=d.lW)return (-1);return a.ha.ed(b,c,d);},
AKC=(a,b)=>{return 0;};
function J1(){BO.call(this);this.kX=0;}
let AFf=(a,b,c,d)=>{let e,f,g;e=!d.kv?c.g8.length:d.hC;if(b>=e){f=a.kX;d.hR.data[f]=0;return a.ha.ed(b,c,d);}a:{e=e-b|0;if(e==2){if(b>=0&&b<c.g8.length){if(c.g8.charCodeAt(b)!=13)break a;g=b+1|0;if(g>=0&&g<c.g8.length){if(c.g8.charCodeAt(g)!=10)break a;f=a.kX;d.hR.data[f]=0;return a.ha.ed(b,c,d);}c=new Q;c.g$=1;c.g_=1;E(c);}c=new Q;c.g$=1;c.g_=1;E(c);}}b:{c:{if(e==1){if(b>=0&&b<c.g8.length){f=c.g8.charCodeAt(b);if(f==10)break b;if(f==13)break b;if(f==133)break b;if((f|1)!=8233)break c;else break b;}c=new Q;c.g$
=1;c.g_=1;E(c);}}return (-1);}e=a.kX;d.hR.data[e]=0;return a.ha.ed(b,c,d);},
Vx=(a,b)=>{let c,d,e;c=a.kX;d=b.hR.data;e=!d[c]?0:1;d[c]=(-1);return e;};
let Qu=D(BO);
let AD1=(a,b,c,d)=>{if(b<(!d.mu?d.hC:c.g8.length))return (-1);d.iD=1;d.sj=1;return a.ha.ed(b,c,d);},
Ry=(a,b)=>{return 0;};
function K2(){BO.call(this);this.pK=null;}
let Vg=(a,b,c,d)=>{let e,f;a:{b:{c:{if(b!=d.hC){if(!b)break b;if(d.kv&&b==d.iH)break b;e=a.pK;f=b-1|0;if(f>=0&&f<c.g8.length){f=c.g8.charCodeAt(f);if(b<0)break a;if(b>=c.g8.length)break a;if(!e.e3(f,c.g8.charCodeAt(b)))break c;else break b;}c=new Q;c.g$=1;c.g_=1;E(c);}}return (-1);}return a.ha.ed(b,c,d);}c=new Q;c.g$=1;c.g_=1;E(c);},
Yn=(a,b)=>{return 0;};
let Qr=D(BU);
let AJT=(a,b,c,d)=>{let e,f,g,h,i;e=d.hC;f=b+1|0;if(f>e){d.iD=1;return (-1);}if(b>=0&&b<c.g8.length){g=B4(c.g8.charCodeAt(b)&64512,55296);h=g?0:1;a:{if(h){i=b+2|0;if(i<=e){if(f>=0&&f<c.g8.length){h=c.g8.charCodeAt(f);b=g?0:1;if(!(b&&((h&64512)!=56320?0:1)?1:0))break a;else return a.ha.ed(i,c,d);}c=new Q;c.g$=1;c.g_=1;E(c);}}}return a.ha.ed(f,c,d);}c=new Q;c.g$=1;c.g_=1;E(c);},
UF=(a,b)=>{a.ha=b;},
ADA=a=>{return (-2147483602);},
UE=(a,b)=>{return 1;};
function LV(){BU.call(this);this.nR=null;}
let ADW=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.hC;f=b+1|0;if(f>e){d.iD=1;return (-1);}if(b>=0&&b<c.g8.length){g=c.g8.charCodeAt(b);h=B4(g&64512,55296);i=h?0:1;a:{if(i){j=b+2|0;if(j<=e){if(f>=0&&f<c.g8.length){i=c.g8.charCodeAt(f);b=h?0:1;if(!(b&&((i&64512)!=56320?0:1)?1:0))break a;else return a.nR.e1(((g&1023)<<10|i&1023)+65536|0)?(-1):a.ha.ed(j,c,d);}c=new Q;c.g$=1;c.g_=1;E(c);}}}return a.nR.e1(g)?(-1):a.ha.ed(f,c,d);}c=new Q;c.g$=1;c.g_=1;E(c);},
AF$=(a,b)=>{a.ha=b;},
Ro=a=>{return (-2147483602);},
AKi=(a,b)=>{return 1;};
function Qh(){BO.call(this);this.mo=0;}
let AAV=(a,b,c,d)=>{let e,f;e=!d.kv?c.g8.length:d.hC;if(b>=e){e=a.mo;d.hR.data[e]=0;return a.ha.ed(b,c,d);}a:{if((e-b|0)==1){if(b>=0&&b<c.g8.length){if(c.g8.charCodeAt(b)!=10)break a;else{f=a.mo;d.hR.data[f]=1;return a.ha.ed(b+1|0,c,d);}}c=new Q;c.g$=1;c.g_=1;E(c);}}return (-1);},
X4=(a,b)=>{let c,d,e;c=a.mo;d=b.hR.data;e=!d[c]?0:1;d[c]=(-1);return e;};
function Of(){BO.call(this);this.mA=0;}
let ADZ=(a,b,c,d)=>{let e;if((!d.kv?c.g8.length-b|0:d.hC-b|0)<=0){e=a.mA;d.hR.data[e]=0;return a.ha.ed(b,c,d);}if(b>=0&&b<c.g8.length){if(c.g8.charCodeAt(b)!=10)return (-1);e=a.mA;d.hR.data[e]=1;return a.ha.ed(b+1|0,c,d);}c=new Q;c.g$=1;c.g_=1;E(c);},
XM=(a,b)=>{let c,d,e;c=a.mA;d=b.hR.data;e=!d[c]?0:1;d[c]=(-1);return e;};
function Ku(){BO.call(this);this.li=0;}
let ZK=(a,b,c,d)=>{let e,f,g;e=!d.kv?c.g8.length-b|0:d.hC-b|0;if(!e){e=a.li;d.hR.data[e]=0;return a.ha.ed(b,c,d);}a:{if(e<2){if(b>=0&&b<c.g8.length){f=c.g8.charCodeAt(b);g=97;break a;}c=new Q;c.g$=1;c.g_=1;E(c);}if(b>=0&&b<c.g8.length){f=c.g8.charCodeAt(b);e=b+1|0;if(e>=0&&e<c.g8.length){g=c.g8.charCodeAt(e);break a;}c=new Q;c.g$=1;c.g_=1;E(c);}c=new Q;c.g$=1;c.g_=1;E(c);}switch(f){case 10:case 133:case 8232:case 8233:e=a.li;d.hR.data[e]=0;return a.ha.ed(b,c,d);case 13:if(g!=10){e=a.li;d.hR.data[e]=0;return a.ha.ed(b,
c,d);}e=a.li;d.hR.data[e]=0;return a.ha.ed(b,c,d);default:}return (-1);},
VB=(a,b)=>{let c,d,e;c=a.li;d=b.hR.data;e=!d[c]?0:1;d[c]=(-1);return e;};
function E7(){let a=this;BU.call(a);a.lq=0;a.kD=0;}
let Ti=(a,b,c,d)=>{let e,f,g,h,i;e=Gs(a,d);if(e!==null&&(b+e.g8.length|0)<=d.hC){f=0;a:{b:{c:{d:{while(true){if(f>=e.g8.length){g=a.kD;d.hR.data[g]=e.g8.length;return a.ha.ed(b+e.g8.length|0,c,d);}if(f<0)break c;if(f>=e.g8.length)break c;h=e.g8.charCodeAt(f);i=b+f|0;if(i<0)break d;if(i>=c.g8.length)break d;if(h!=c.g8.charCodeAt(i)){if(f<0)break a;if(f>=e.g8.length)break a;g=EE(e.g8.charCodeAt(f));if(i<0)break b;if(i>=c.g8.length)break b;if(g!=c.g8.charCodeAt(i))break;}f=f+1|0;}return (-1);}c=new Q;c.g$=1;c.g_
=1;E(c);}c=new Q;c.g$=1;c.g_=1;E(c);}c=new Q;c.g$=1;c.g_=1;E(c);}c=new Q;c.g$=1;c.g_=1;E(c);}return (-1);},
AFs=(a,b)=>{a.ha=b;},
Gs=(a,b)=>{let c,d,e,f,g;c=a.lq;d=b.ic.data;e=c*2|0;f=d[e];g=d[e+1|0];return (g|f|(g-f|0))>=0&&g<=b.k0.g8.length?Cc(b.k0,f,g):null;},
AFT=(a,b)=>{let c,d,e;c=a.kD;d=b.hR.data;e=!d[c]?0:1;d[c]=(-1);return e;};
let Qp=D(E7);
let VH=(a,b,c,d)=>{let e,f,g;e=Gs(a,d);if(e!==null&&(b+e.g8.length|0)<=d.hC){f=!Jq(c,e,b)?(-1):e.g8.length;if(f<0)return (-1);g=a.kD;d.hR.data[g]=f;return a.ha.ed(b+f|0,c,d);}return (-1);},
AH8=(a,b,c,d)=>{let e,f,g;e=Gs(a,d);f=d.iH;if(e!==null&&(b+e.g8.length|0)<=f){while(true){if(b>f)return (-1);g=Mh(c,e,b);if(g<0)return (-1);if(a.ha.ed(g+e.g8.length|0,c,d)>=0)break;b=g+1|0;}return g;}return (-1);},
SO=(a,b,c,d,e)=>{let f,g;f=Gs(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=WX(d,f,c);if(g<0)break a;if(g<b)break a;if(a.ha.ed(g+f.g8.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);},
ACC=(a,b)=>{return 1;};
let Nb=D(E7);
let ABQ=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lq;f=d.ic.data;g=e*2|0;h=f[g];i=f[g+1|0];j=(i|h|(i-h|0))>=0&&i<=d.k0.g8.length?Cc(d.k0,h,i):null;if(j!==null&&(b+j.g8.length|0)<=d.hC){i=0;a:{b:{while(true){if(i>=j.g8.length){e=a.kD;d.hR.data[e]=j.g8.length;return a.ha.ed(b+j.g8.length|0,c,d);}if(i<0)break a;if(i>=j.g8.length)break a;e=j.g8.charCodeAt(i);if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}e=B1(BC,e)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value)
:null)));}g=B1(BD,e)&65535;h=b+i|0;if(h<0)break b;if(h>=c.g8.length)break b;e=c.g8.charCodeAt(h);if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}e=B1(BC,e)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}if(g!=(B1(BD,e)&65535))break;i=i+1|0;}return (-1);}c=new Q;c.g$=1;c.g_=1;E(c);}c=new Q;c.g$=1;c.g_=1;E(c);}return (-1);};
let Lp=D(T);
let XD=(a,b,c,d,e)=>{let f,g,h,i;Bn(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.g9.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
Um=(a,b,c,d)=>{let e,f,g,h,i;e=a.g7;Bn(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.g9.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
UX=(a,b)=>{Gh(a,b);},
AHg=(a,b,c)=>{Bn(a,b,b+1|0);a.g9.data[b]=c;return a;};
function NB(){let a=this;B2.call(a);a.ip=null;a.nt=null;a.n0=null;}
let Wa=(a,b)=>{let c,d,e,f,g,h;c=M;M=c+1|0;d=new T;d.g9=G(20);a.hi=(J(d,d.g7,c,10)).bj();a.hD=1;d=new H;e=b.g9;f=e.data;g=b.g7;h=f.length;if(g>=0&&g<=(h-0|0)){d.g8=L(e.data,0,g);a.ip=d;c=b.g7;a.hD=c;a.nt=OB(c);a.n0=OB(a.hD);c=0;a:{b:{while(c<(a.hD-1|0)){b=a.nt;d=a.ip;if(c<0)break a;if(c>=d.g8.length)break a;Nk(b,d.g8.charCodeAt(c),(a.hD-c|0)-1|0);b=a.n0;d=a.ip;g=(a.hD-c|0)-1|0;if(g<0)break b;if(g>=d.g8.length)break b;Nk(b,d.g8.charCodeAt(g),(a.hD-c|0)-1|0);c=c+1|0;}return;}b=new Q;b.g$=1;b.g_=1;E(b);}b=new Q;b.g$
=1;b.g_=1;E(b);}b=new I;b.g$=1;b.g_=1;E(b);},
ZO=a=>{let b=new NB();Wa(b,a);return b;},
Wd=(a,b,c)=>{let d,e,f,g;d=0;a:{b:{c:{while(d<a.hD){e=d+b|0;if(e<0)break a;if(e>=c.g8.length)break a;f=c.g8.charCodeAt(e);g=a.ip;if(d<0)break b;if(d>=g.g8.length)break b;if(f!=g.g8.charCodeAt(d)){b=0;break c;}d=d+1|0;}b=1;}return !b?(-1):a.hD;}c=new Q;c.g$=1;c.g_=1;E(c);}c=new Q;c.g$=1;c.g_=1;E(c);},
T9=(a,b,c,d)=>{let e,f;e=d.hC;while(true){if(b>e)return (-1);f=AIk(a,c,b,e);if(f<0)return (-1);if(a.ha.ed(f+a.hD|0,c,d)>=0)break;b=f+1|0;}return f;},
Yg=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);c=AHh(a,d,b,c);if(c<0)return (-1);if(a.ha.ed(c+a.hD|0,d,e)>=0)break;c=c+(-1)|0;}return c;},
Zc=(a,b)=>{let c,d,e;if(b instanceof C_){c=b.iC;b=a.ip;if(0<b.g8.length)return c!=b.g8.charCodeAt(0)?0:1;b=new Q;b.g$=1;b.g_=1;E(b);}if(b instanceof Dd){b=b;d=Cc(a.ip,0,1);b=b.i$;if(0>=d.g8.length){b=new Q;b.g$=1;b.g_=1;E(b);}return (!b.eL(d.g8.charCodeAt(0))?(-1):1)<=0?0:1;}if(!(b instanceof CS)){if(!(b instanceof Dq))return 1;a:{if(a.ip.g8.length>1){e=b.kM;b=a.ip;if(0>=b.g8.length){b=new Q;b.g$=1;b.g_=1;E(b);}c=b.g8.charCodeAt(0);b=a.ip;if(1>=b.g8.length){b=new Q;b.g$=1;b.g_=1;E(b);}if(e==(((c&1023)<<10|b.g8.charCodeAt(1)
&1023)+65536|0)){c=1;break a;}}c=0;}return c;}b=b;d=a.ip;if(0>=d.g8.length){b=new Q;b.g$=1;b.g_=1;E(b);}b:{c:{if(!b.eL(d.g8.charCodeAt(0))){if(a.ip.g8.length<=1)break c;d=a.ip;if(0>=d.g8.length){b=new Q;b.g$=1;b.g_=1;E(b);}c=d.g8.charCodeAt(0);d=a.ip;if(1>=d.g8.length){b=new Q;b.g$=1;b.g_=1;E(b);}if(!b.eL(((c&1023)<<10|d.g8.charCodeAt(1)&1023)+65536|0))break c;}c=1;break b;}c=0;}return c;},
AIk=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.ip;f=a.hD-1|0;if(f>=0&&f<e.g8.length){g=e.g8.charCodeAt(f);a:{b:{c:{while(true){f=a.hD;if(c>(d-f|0))return (-1);f=(c+f|0)-1|0;if(f<0)break c;if(f>=b.g8.length)break c;h=b.g8.charCodeAt(f);if(h==g){f=0;d:{while(f<a.hD){i=f+c|0;if(i<0)break a;if(i>=b.g8.length)break a;j=b.g8.charCodeAt(i);e=a.ip;if(f<0)break b;if(f>=e.g8.length)break b;if(j!=e.g8.charCodeAt(f)){f=0;break d;}f=f+1|0;}f=1;}if(f)break;}c=c+Oc(a.nt,h)|0;}return c;}b=new Q;b.g$=1;b.g_=1;E(b);}b=new Q;b.g$=1;b.g_
=1;E(b);}b=new Q;b.g$=1;b.g_=1;E(b);}b=new Q;b.g$=1;b.g_=1;E(b);},
AHh=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.ip;if(0>=e.g8.length){b=new Q;b.g$=1;b.g_=1;E(b);}f=e.g8.charCodeAt(0);g=(b.g8.length-d|0)-a.hD|0;if(g<=0)d=d+g|0;a:{b:{c:{while(true){if(d<c)return (-1);if(d<0)break c;if(d>=b.g8.length)break c;h=b.g8.charCodeAt(d);if(h==f){g=0;d:{while(g<a.hD){i=g+d|0;if(i<0)break a;if(i>=b.g8.length)break a;j=b.g8.charCodeAt(i);e=a.ip;if(g<0)break b;if(g>=e.g8.length)break b;if(j!=e.g8.charCodeAt(g)){g=0;break d;}g=g+1|0;}g=1;}if(g)break;}d=d-Oc(a.n0,h)|0;}return d;}b=new Q;b.g$=1;b.g_
=1;E(b);}b=new Q;b.g$=1;b.g_=1;E(b);}b=new Q;b.g$=1;b.g_=1;E(b);};
function Ks(){B2.call(this);this.mx=null;}
let ABZ=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{while(true){if(d>=a.mx.g8.length)return a.mx.g8.length;e=a.mx;if(d<0)break a;if(d>=e.g8.length)break a;f=e.g8.charCodeAt(d);g=b+d|0;if(g<0)break b;if(g>=c.g8.length)break b;h=c.g8.charCodeAt(g);if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}h=B1(BC,h)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}if(f!=(B1(BD,h)&65535))break;d=d+1|0;}return (-1);}c=new Q;c.g$=1;c.g_=1;E(c);}c=new Q;c.g$=1;c.g_
=1;E(c);};
function K0(){B2.call(this);this.lG=null;}
let AGq=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{c:{d:{while(true){if(d>=a.lG.g8.length)return a.lG.g8.length;e=a.lG;if(d<0)break c;if(d>=e.g8.length)break c;f=e.g8.charCodeAt(d);g=b+d|0;if(g<0)break d;if(g>=c.g8.length)break d;if(f!=c.g8.charCodeAt(g)){e=a.lG;if(d<0)break a;if(d>=e.g8.length)break a;h=EE(e.g8.charCodeAt(d));if(g<0)break b;if(g>=c.g8.length)break b;if(h!=c.g8.charCodeAt(g))break;}d=d+1|0;}return (-1);}c=new Q;c.g$=1;c.g_=1;E(c);}c=new Q;c.g$=1;c.g_=1;E(c);}c=new Q;c.g$=1;c.g_=1;E(c);}c=new Q;c.g$=
1;c.g_=1;E(c);};
let AKU=D();
function Kq(){B2.call(this);this.pz=0;}
let AGu=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.g8.length){e=c.g8.charCodeAt(b);if(d>=0&&d<c.g8.length){d=c.g8.charCodeAt(d);b=a.pz;d=((e&1023)<<10|d&1023)+65536|0;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}d=B1(BC,d);if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}return b!=B1(BD,d)?(-1):2;}c=new Q;c.g$=1;c.g_=1;E(c);}c=new Q;c.g$=1;c.g_=1;E(c);};
function FS(){BU.call(this);this.ky=0;}
let AEq=(a,b)=>{a.ha=b;},
H8=(a,b,c,d)=>{let e,f;e=b+1|0;if(e>d.hC){d.iD=1;return (-1);}if(b>=0&&b<c.g8.length){a:{f=c.g8.charCodeAt(b);if(b>d.iH){b=b-1|0;if(b>=0&&b<c.g8.length){if(!((c.g8.charCodeAt(b)&64512)!=55296?0:1))break a;return (-1);}c=new Q;c.g$=1;c.g_=1;E(c);}}if(a.ky!=f)return (-1);return a.ha.ed(e,c,d);}c=new Q;c.g$=1;c.g_=1;E(c);},
Y$=(a,b,c,d)=>{let e,f,g,h,i;if(!(c instanceof H)){e=d.hC;a:{while(true){if(b>e){b=(-1);break a;}if(H8(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.iH;g=d.hC;b:{while(true){if(b>=g)return (-1);h=FY(c,a.ky,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break b;if(b>=c.g8.length)break b;if((c.g8.charCodeAt(b)&64512)!=55296?0:1){b=h+1|0;continue;}}i=a.ha;b=h+1|0;if(i.ed(b,c,d)>=0)break;}return h;}c=new Q;c.g$=1;c.g_=1;E(c);},
Ws=(a,b,c,d,e)=>{let f,g;if(!(d instanceof H)){a:{while(true){if(c<b){c=(-1);break a;}if(H8(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.iH;b:{c:{while(true){if(c<b)return (-1);g=Fo(d,a.ky,c);if(g<0)break c;if(g<b)break c;if(g>f){c=g-1|0;if(c<0)break b;if(c>=d.g8.length)break b;if((d.g8.charCodeAt(c)&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.ha.ed(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new Q;d.g$=1;d.g_=1;E(d);},
SE=(a,b)=>{if(b instanceof C_)return 0;if(b instanceof Dd)return 0;if(b instanceof CS)return 0;if(b instanceof Dq)return 0;if(b instanceof FZ)return 0;if(!(b instanceof FS))return 1;return b.ky!=a.ky?0:1;},
AHE=(a,b)=>{return 1;};
function FZ(){BU.call(this);this.kn=0;}
let UT=(a,b)=>{a.ha=b;},
Hx=(a,b,c,d)=>{let e,f,g;e=d.hC;f=b+1|0;e=B4(f,e);if(e>0){d.iD=1;return (-1);}if(b>=0&&b<c.g8.length){a:{g=c.g8.charCodeAt(b);if(e<0){if(f>=0&&f<c.g8.length){if(!((c.g8.charCodeAt(f)&64512)!=56320?0:1))break a;return (-1);}c=new Q;c.g$=1;c.g_=1;E(c);}}if(a.kn!=g)return (-1);return a.ha.ed(f,c,d);}c=new Q;c.g$=1;c.g_=1;E(c);},
AET=(a,b,c,d)=>{let e,f;if(!(c instanceof H)){e=d.hC;a:{while(true){if(b>e){b=(-1);break a;}if(Hx(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.hC;b:{while(true){if(b>=e)return (-1);f=FY(c,a.kn,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break b;if(b>=c.g8.length)break b;if((c.g8.charCodeAt(b)&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.ha.ed(b,c,d)>=0)break;}return f;}c=new Q;c.g$=1;c.g_=1;E(c);},
AGp=(a,b,c,d,e)=>{let f,g;if(!(d instanceof H)){a:{while(true){if(c<b){c=(-1);break a;}if(Hx(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.hC;b:{c:{while(true){if(c<b)return (-1);g=Fo(d,a.kn,c);if(g<0)break c;if(g<b)break c;c=g+1|0;if(c<f){if(c<0)break b;if(c>=d.g8.length)break b;if((d.g8.charCodeAt(c)&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.ha.ed(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new Q;d.g$=1;d.g_=1;E(d);},
Wg=(a,b)=>{if(b instanceof C_)return 0;if(b instanceof Dd)return 0;if(b instanceof CS)return 0;if(b instanceof Dq)return 0;if(b instanceof FS)return 0;if(!(b instanceof FZ))return 1;return b.kn!=a.kn?0:1;},
AE2=(a,b)=>{return 1;};
function Dq(){let a=this;B2.call(a);a.lm=0;a.kT=0;a.kM=0;}
let AFU=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.g8.length){e=c.g8.charCodeAt(b);if(d>=0&&d<c.g8.length){d=c.g8.charCodeAt(d);return a.lm==e&&a.kT==d?2:(-1);}c=new Q;c.g$=1;c.g_=1;E(c);}c=new Q;c.g$=1;c.g_=1;E(c);},
ADj=(a,b,c,d)=>{let e,f,g,h;if(c instanceof H){e=d.hC;a:{while(b<e){b=FY(c,a.lm,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;if(b>=c.g8.length)break a;f=c.g8.charCodeAt(b);if(a.kT==f&&a.ha.ed(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new Q;c.g$=1;c.g_=1;E(c);}g=d.hC;b:{c:{d:{while(true){if(b>g){b=(-1);break d;}if((b+a.hD|0)>d.hC){d.iD=1;h=(-1);}else{h=b+1|0;if(b<0)break b;if(b>=c.g8.length)break b;e=c.g8.charCodeAt(b);if(h<0)break c;if(h>=c.g8.length)break c;f=c.g8.charCodeAt(h);h
=a.lm==e&&a.kT==f?2:(-1);h=h<0?(-1):a.ha.ed(b+h|0,c,d);}if(h>=0)break;b=b+1|0;}}return b;}c=new Q;Y(c);E(c);}c=new Q;Y(c);E(c);},
UR=(a,b,c,d,e)=>{let f,g,h;if(d instanceof H){a:{b:{while(true){if(c<b)return (-1);c=Fo(d,a.kT,c)+(-1)|0;if(c<0)break b;if(c<b)break b;f=a.lm;if(c<0)break a;if(c>=d.g8.length)break a;if(f==d.g8.charCodeAt(c)&&a.ha.ed(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new Q;d.g$=1;d.g_=1;E(d);}c:{d:{e:{while(true){if(c<b){c=(-1);break e;}if((c+a.hD|0)>e.hC){e.iD=1;f=(-1);}else{g=c+1|0;if(c<0)break c;if(c>=d.g8.length)break c;h=d.g8.charCodeAt(c);if(g<0)break d;if(g>=d.g8.length)break d;g=d.g8.charCodeAt(g);f
=a.lm==h&&a.kT==g?2:(-1);f=f<0?(-1):a.ha.ed(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new Q;Y(d);E(d);}d=new Q;Y(d);E(d);},
AFD=(a,b)=>{if(b instanceof Dq)return b.kM!=a.kM?0:1;if(b instanceof CS)return b.eL(a.kM);if(b instanceof C_)return 0;if(!(b instanceof Dd))return 1;return 0;};
let G5=D(FP);
let U4=(a,b)=>{return b!=10?0:1;},
AFK=(a,b,c)=>{return b!=10?0:1;};
let G6=D(FP);
let AGK=(a,b)=>{return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;},
AJo=(a,b,c)=>{a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;};
function Pn(){let a=this;C.call(a);a.ou=null;a.m5=null;a.lu=0;a.qU=0;}
let AAa=(a,b)=>{let c,d;while(true){c=a.lu;if(b<c)break;a.lu=c<<1|1;}d=c<<1|1;a.lu=d;d=d+1|0;a.ou=S(d);a.m5=S(d);a.qU=b;},
OB=a=>{let b=new Pn();AAa(b,a);return b;},
Nk=(a,b,c)=>{let d,e,f,g;d=0;e=a.lu;f=b&e;while(true){g=a.ou.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.m5.data[f]=c;},
Oc=(a,b)=>{let c,d,e,f;c=a.lu;d=b&c;e=0;while(true){f=a.ou.data[d];if(!f)break;if(f==b)return a.m5.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.qU;};
let GQ=D(Bh);
let Zu=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;return Ch(By(b,9,13),32);};
let Gu=D(Bh);
let ABR=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;return By(b,48,57);};
let O$=D(Bh);
let AGc=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;return By(b,97,122);};
let PJ=D(Bh);
let AHF=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;return By(b,65,90);};
let PN=D(Bh);
let W6=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;return By(b,0,127);};
let GM=D(Bh);
let Vr=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;return By(By(b,97,122),65,90);};
let G1=D(GM);
let XX=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;return By(By(By(b,97,122),65,90),48,57);};
let Rf=D(Bh);
let Y9=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;return By(By(By(b,33,64),91,96),123,126);};
let Hu=D(G1);
let RF=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;return By(By(By(By(By(By(b,97,122),65,90),48,57),33,64),91,96),123,126);};
let NA=D(Hu);
let ACx=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;return Ch(By(By(By(By(By(By(b,97,122),65,90),48,57),33,64),91,96),123,126),32);};
let NV=D(Bh);
let V9=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;return Ch(Ch(b,32),9);};
let Me=D(Bh);
let ACq=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;return Ch(By(b,0,31),127);};
let L6=D(Bh);
let AJs=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;return By(By(By(b,48,57),97,102),65,70);};
let PR=D(Bh);
let ADw=a=>{let b,c;b=new Oj;b.r1=a;c=new Ba;c.hh=S(64);b.hk=c;b.hN=1;return b;};
let Rm=D(Bh);
let RN=a=>{let b,c;b=new KA;b.r4=a;c=new Ba;c.hh=S(64);b.hk=c;b.hN=1;return b;};
let Pm=D(Bh);
let ZN=a=>{let b,c;b=new NP;b.rP=a;c=new Ba;c.hh=S(64);b.hk=c;return b;};
let O4=D(Bh);
let AFX=a=>{let b,c;b=new NO;b.rH=a;c=new Ba;c.hh=S(64);b.hk=c;return b;};
let P_=D(Bh);
let V6=a=>{let b,c;b=new QA;b.sl=a;c=new Ba;c.hh=S(64);b.hk=c;GB(c,0,2048);b.hN=1;return b;};
let Ld=D(Bh);
let WC=a=>{let b,c;b=new LW;b.r7=a;c=new Ba;c.hh=S(64);b.hk=c;b.hN=1;return b;};
let KT=D(Bh);
let AJh=a=>{let b,c;b=new Lm;b.sB=a;c=new Ba;c.hh=S(64);b.hk=c;b.hN=1;return b;};
let Pt=D(Bh);
let RC=a=>{let b,c;b=new M3;b.r2=a;c=new Ba;c.hh=S(64);b.hk=c;return b;};
let PB=D(Bh);
let AA8=a=>{let b,c;b=new Kw;b.q2=a;c=new Ba;c.hh=S(64);b.hk=c;b.hN=1;return b;};
let My=D(Bh);
let WP=a=>{let b,c;b=new Kz;b.r9=a;c=new Ba;c.hh=S(64);b.hk=c;b.hN=1;return b;};
let N0=D(Bh);
let Yr=a=>{let b,c;b=new Lh;b.sk=a;c=new Ba;c.hh=S(64);b.hk=c;b.hN=1;return b;};
let Q0=D(Bh);
let ABa=a=>{let b,c;b=new L$;b.sv=a;c=new Ba;c.hh=S(64);b.hk=c;b.hN=1;return b;};
let Pz=D(Bh);
let AH3=a=>{let b,c;b=new Mb;b.rQ=a;c=new Ba;c.hh=S(64);b.hk=c;return b;};
let M7=D(Bh);
let AE$=a=>{let b,c;b=new OG;b.r_=a;c=new Ba;c.hh=S(64);b.hk=c;return b;};
let Mx=D(Bh);
let ADm=a=>{let b,c;b=new N8;b.q5=a;c=new Ba;c.hh=S(64);b.hk=c;b.hN=1;return b;};
let Ri=D(Bh);
let AF7=a=>{let b,c;b=new KK;b.sJ=a;c=new Ba;c.hh=S(64);b.hk=c;b.hN=1;return b;};
let Gf=D(Bh);
let ABx=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;return Ch(By(By(By(b,97,122),65,90),48,57),95);};
let Qd=D(Gf);
let ACY=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;b=DH(Ch(By(By(By(b,97,122),65,90),48,57),95),1);b.hN=1;return b;};
let ND=D(GQ);
let T7=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;b=DH(Ch(By(b,9,13),32),1);b.hN=1;return b;};
let Mt=D(Gu);
let YZ=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;b=DH(By(b,48,57),1);b.hN=1;return b;};
function Bg(){let a=this;Bh.call(a);a.hp=0;a.hq=0;}
let AJf=(a,b,c)=>{a.hp=b;a.hq=c;},
Bo=(a,b)=>{let c=new Bg();AJf(c,a,b);return c;},
ABC=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;return By(b,a.hp,a.hq);};
let Mp=D(Bh);
let AI6=a=>{let b,c;b=new B7;c=new Ba;c.hh=S(64);b.hk=c;c=new Ba;c.hh=S(2);b.ho=c;return By(By(b,65279,65279),65520,65533);};
function IJ(){let a=this;Bh.call(a);a.oi=0;a.mZ=0;a.o8=0;}
let VA=(a,b,c)=>{a.mZ=c;a.oi=b;},
BQ=(a,b)=>{let c=new IJ();VA(c,a,b);return c;},
AJg=(a,b,c,d)=>{a.o8=d;a.mZ=c;a.oi=b;},
ABu=(a,b,c)=>{let d=new IJ();AJg(d,a,b,c);return d;},
XH=a=>{let b,c,d;b=new Hl;c=a.oi;d=new Ba;d.hh=S(64);b.hk=d;b.mC=c;if(a.o8)GB(d,0,2048);b.hN=a.mZ;return b;};
function IP(){let a=this;Bh.call(a);a.og=0;a.m7=0;a.oP=0;}
let WQ=(a,b,c)=>{a.m7=c;a.og=b;},
E9=(a,b)=>{let c=new IP();WQ(c,a,b);return c;},
RE=(a,b,c,d)=>{a.oP=d;a.m7=c;a.og=b;},
ZL=(a,b,c)=>{let d=new IP();RE(d,a,b,c);return d;},
RD=a=>{let b,c,d;b=new NH;c=a.og;d=new Ba;d.hh=S(64);b.hk=d;b.mC=c;if(a.oP)GB(d,0,2048);b.hN=a.m7;return b;};
let DK=D(BA);
let S6=D();
let Wh=D();
let UN=D();
let AJD=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=new JD;d=G(b.g8.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.nm=d;f=EC(c);d=S(f*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<f){l=EC(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=EC(c);g=l/2|0;if(l%2|0)g= -g|0;j=j+g|0;g=h+1|0;e[h]=i;h=g+1|0;e[g]=j;k=k+1|0;}return d;}if(f<0)break;if(f>=b.g8.length)break;e[f]=b.g8.charCodeAt(f);f=f+1|0;}b=new Q;b.g$=1;b.g_=1;E(b);},
B3=b=>{let c,d,e,f,g,h,i,j,k,l;c=new JD;d=G(b.g8.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.nm=d;f=EC(c);d=S(f*2|0);e=d.data;h=0;i=0;while(i<f){h=h+EC(c)|0;g=i*2|0;e[g]=h;j=g+1|0;k=EC(c);l=k/2|0;if(k%2|0)l= -l|0;e[j]=l;i=i+1|0;}return d;}if(f<0)break;if(f>=b.g8.length)break;e[f]=b.g8.charCodeAt(f);f=f+1|0;}b=new Q;b.g$=1;b.g_=1;E(b);},
BZ=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=S(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new Bs;l.g$=1;l.g_=1;E(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new PU;l.pI=b;l.pS=c;return l;},
GH=b=>{if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;},
AKS=b=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=R(Ge,16384);d=c.data;e=BF(16384).data;f=0;g=0;h=0;i=0;a:{b:{c:{while(true){if(i>=b.g8.length){j=c.constructor;if(j===null)b=null;else{b=j.classObject;if(b===null){b=new Ca;b.hG=j;k=b;j.classObject=k;}}b=DS(b);if(b===null){b=new CU;b.g$=1;b.g_=1;E(b);}if(b===Bk(CQ)){b=new Bs;b.g$=1;b.g_=1;E(b);}if(g<0){b=new DK;b.g$=1;b.g_=1;E(b);}k=D4(b.hG,g);f=d.length;if(g<f)f=g;g=0;while(g<f){k.data[g]=d[g];g=g+1|0;}return k;}if(i<0)break c;if(i>=b.g8.length)break c;l=GH(b.g8.charCodeAt(i));if
(l==64){i=i+1|0;if(i<0)break b;if(i>=b.g8.length)break b;l=GH(b.g8.charCodeAt(i));m=0;n=1;o=0;while(o<3){i=i+1|0;if(i<0)break a;if(i>=b.g8.length)break a;m=m|CB(n,GH(b.g8.charCodeAt(i)));n=n*64|0;o=o+1|0;}}else if(l<32)m=1;else{l=(l-32|0)<<24>>24;i=i+1|0;if(i<0)break;if(i>=b.g8.length)break;m=GH(b.g8.charCodeAt(i));}if(!l&&m>=128){if(f>0){p=g+1|0;j=new Ge;l=h+f|0;q=BF(f);o=e.length;if(f<o)o=f;r=q.data;s=0;while(s<o){r[s]=e[s];s=s+1|0;}j.ny=h;j.nX=l;j.nB=q;d[g]=j;g=p;}h=h+(f+m|0)|0;f=0;}else{n=f+m|0;o=e.length;if
(n<o)s=g;else{s=g+1|0;j=new Ge;t=h+f|0;q=BF(f);if(f<o)o=f;r=q.data;f=0;while(f<o){r[f]=e[f];f=f+1|0;}j.ny=h;j.nX=t;j.nB=q;d[g]=j;h=h+n|0;f=0;}while(true){g=m+(-1)|0;if(m<=0)break;p=f+1|0;e[f]=l;f=p;m=g;}g=s;}i=i+1|0;}b=new Q;b.g$=1;b.g_=1;E(b);}b=new Q;b.g$=1;b.g_=1;E(b);}b=new Q;b.g$=1;b.g_=1;E(b);}b=new Q;b.g$=1;b.g_=1;E(b);};
function PU(){let a=this;C.call(a);a.pI=null;a.pS=null;}
function Ge(){let a=this;C.call(a);a.ny=0;a.nX=0;a.nB=null;}
function JD(){let a=this;C.call(a);a.nm=null;a.px=0;}
let Y4=D();
let EC=b=>{let c,d,e,f,g;c=0;d=1;while(true){e=b.nm.data;f=b.px;b.px=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+CB(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;};
let AGd=D();
function MH(){let a=this;CM.call(a);a.o1=null;a.o0=0;a.ln=null;}
let AHd=(a,b)=>{return;},
WS=(a,b)=>{let c,d,e,f,g,h;if(BH===null){b=new Ck;c=new B5;c.h9=BF(32);b.ij=c;c=new K;BB(c);c.g9=G(16);b.h_=c;b.h$=G(32);b.id=0;b.ie=BX;BH=b;}b=a.o1;c=new K;c.g9=G(16);F(c,c.g7,A(349));d=c.g7;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.g9;f=e.data;g=c.g7;h=f.length;if(g>=0&&g<=(h-0|0)){b.g8=L(e.data,0,g);BI(Br(b));BI("\n");return;}b=new I;b.g$=1;b.g_=1;Bl(b);E(b);},
Tf=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=(HN(Gx(A(91),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){a:{b=a.ln;b.nN=b.mc.h3;if(a.o0){e=0;while(true){b=a.ln;c=b.mc;f=B4(e,c.h3);if(f>=0)break a;if(f>=0){g=new I;b=new K;b.g9=G(16);F(b,b.g7,A(76));J(b,b.g7,e,10);F(b,b.g7,A(77));e=c.h3;J(b,b.g7,e,10);c=new H;d=b.g9;h=d.data;f=b.g7;i=h.length;if(f>=0&&f<=(i-0|0)){c.g8=L(d.data,0,f);g.g$=1;g.g_=1;g.hb=c;E(g);}b=new I;Y(b);E(b);}Zo(b,c.hW.data[e]);e=e+1|0;}}}return 0;}j=d[f];h=(HN(Gx(A(89),0),j,0)).data;if(h.length
!=4)break;k=h[0];l=AAU(h[1]);b=h[2];if(b===null){b=new B0;b.g$=1;b.g_=1;b.hb=A(52);E(b);}m=AHy(b,0,b.g8.length,10);n=h[3];o=Eq;if(k===A(350))i=1;else if(!(A(350) instanceof H))i=0;else{b=A(350);i=k.g8!==b.g8?0:1;}if(i)o=Ej;if(k===A(351))i=1;else if(!(A(351) instanceof H))i=0;else{b=A(351);i=k.g8!==b.g8?0:1;}if(i)o=Ea;if(k===A(352))i=1;else if(!(A(352) instanceof H))i=0;else{b=A(352);i=k.g8!==b.g8?0:1;}if(i)o=D6;if(k===A(189))i=1;else if(!(A(189) instanceof H))i=0;else{b=A(189);i=k.g8!==b.g8?0:1;}if(i)o=Hj;if
(o===D6&&!ET.qs)m=BM;g=new N_;g.nE=l;g.pc=o;g.qH=m;g.o4=n;DE(a.ln.pm,l,l);Di(a.ln.mc,g);f=f+1|0;}b=new Bf;b.g$=1;b.g_=1;b.hb=A(353);E(b);},
AC_=(a,b,c)=>{return Tf(a,b,c);};
let B8=D(BR);
let U5=null,ADD=null,V3=null,V2=null,U9=null,UQ=null,Uo=null,VS=null,T8=null,AAE=null;
let Gp=()=>{Gp=Bz(B8);SW();};
let SW=()=>{let b,c,d,e,f,g,h,i,j;b=new P4;Gp();b.hw=A(354);b.hl=0;U5=b;c=new P5;c.hw=A(355);c.hl=1;ADD=c;d=new P9;d.hw=A(356);d.hl=2;V3=d;e=new P$;e.hw=A(357);e.hl=3;V2=e;f=new P7;f.hw=A(358);f.hl=4;U9=f;g=new P8;g.hw=A(359);g.hl=5;UQ=g;h=new P2;h.hw=A(360);h.hl=6;Uo=h;i=new P3;i.hw=A(361);i.hl=7;VS=i;j=new P1;j.hw=A(362);j.hl=8;T8=j;AAE=P(B8,[b,c,d,e,f,g,h,i,j]);};
function Ep(){let a=this;FM.call(a);a.lK=0;a.j8=null;}
let AKd=D(0);
let Uw=b=>{let c,d;if(b===A(363))c=1;else if(!(A(363) instanceof H))c=0;else{d=A(363);c=b.g8!==d.g8?0:1;}a:{if(!c){if(b===A(364))c=1;else if(!(A(364) instanceof H))c=0;else{d=A(364);c=b.g8!==d.g8?0:1;}if(!c){if(b===A(365))c=1;else if(!(A(365) instanceof H))c=0;else{d=A(365);c=b.g8!==d.g8?0:1;}if(!c){if(b===A(366))c=1;else if(!(A(366) instanceof H))c=0;else{d=A(366);c=b.g8!==d.g8?0:1;}if(!c){if(b===A(367))c=1;else if(!(A(367) instanceof H))c=0;else{d=A(367);c=b.g8!==d.g8?0:1;}if(!c){c=0;break a;}}}}}c=1;}return c;},
Zx=b=>{let c,d;if(b===A(368))c=1;else if(!(A(368) instanceof H))c=0;else{d=A(368);c=b.g8!==d.g8?0:1;}a:{b:{if(c)break b;if(b===A(369))c=1;else if(!(A(369) instanceof H))c=0;else{d=A(369);c=b.g8!==d.g8?0:1;}if(c)break b;if(b===A(370))c=1;else if(!(A(370) instanceof H))c=0;else{d=A(370);c=b.g8!==d.g8?0:1;}if(c)break b;if(b===A(371))c=1;else if(!(A(371) instanceof H))c=0;else{d=A(371);c=b.g8!==d.g8?0:1;}if(c)break b;if(b===A(372))c=1;else if(!(A(372) instanceof H))c=0;else{d=A(372);c=b.g8!==d.g8?0:1;}if(c)break b;if
(b===A(373))c=1;else if(!(A(373) instanceof H))c=0;else{d=A(373);c=b.g8!==d.g8?0:1;}if(c)break b;if(b===A(374))c=1;else if(!(A(374) instanceof H))c=0;else{d=A(374);c=b.g8!==d.g8?0:1;}if(c)break b;if(b===A(375))c=1;else if(!(A(375) instanceof H))c=0;else{d=A(375);c=b.g8!==d.g8?0:1;}if(c)break b;if(b===A(376))c=1;else if(!(A(376) instanceof H))c=0;else{d=A(376);c=b.g8!==d.g8?0:1;}if(!c){c=0;break a;}}c=1;}return c;};
let Pa=D(0);
let Mm=D();
let AJa=(a,b,c)=>{a.fd(V(b),CC(c,"handleEvent"));},
ADI=(a,b)=>{return !!a.fe(b);},
UU=(a,b,c)=>{a.ff(V(b),CC(c,"handleEvent"));},
AAA=(a,b,c,d)=>{a.fg(V(b),CC(c,"handleEvent"),d?1:0);},
AGP=(a,b,c,d)=>{a.fh(V(b),CC(c,"handleEvent"),d?1:0);};
function Jj(){let a=this;C.call(a);a.nx=null;a.oy=null;a.l_=null;a.oD=0;a.mJ=null;}
let ADT=(a,b)=>{let c,d,e;c=b.target;d=null;e=a.nx;if(e!==Ea&&e!==D6){if(e===Ej){b=window.document.createElement("img");d=Br(V(c.result));b.src=d;e=c.result;c=new Int8Array(e);d=new Gd;d.jl=c;d.n6=e;d.qe=b;}else if(e===Eq)d=V(c.result);}else{e=c.result;b=new Int8Array(e);d=new Gd;d.jl=b;d.n6=e;}if(d!==null){Fg(a.mJ.o7,a.nx,a.oy,d);Di(a.l_,a.oy);if(a.l_.h3==a.oD){b=a.mJ.oU;d=new KM;d.nU=a;Di(b.lS,d);}}},
AB7=(a,b)=>{ADT(a,b);};
function Eb(){BR.call(this);this.lO=null;}
let Ej=null,D6=null,Eq=null,Ea=null,Hj=null,J_=null;
let AD0=()=>{let b,c,d,e,f;b=new Eb;b.hw=A(377);b.hl=0;b.lO=A(350);Ej=b;c=new Eb;c.hw=A(378);c.hl=1;c.lO=A(352);D6=c;d=new Eb;d.hw=A(379);d.hl=2;d.lO=A(380);Eq=d;e=new Eb;e.hw=A(381);e.hl=3;e.lO=A(351);Ea=e;f=new Eb;f.hw=A(382);f.hl=4;f.lO=A(189);Hj=f;J_=P(Eb,[b,c,d,e,f]);};
let ZJ=D();
let Ul=null;
let SS=()=>{Ul=Gk([1,4,2,1024,8,16,128,64,32,256,2048,512]);};
let Nu=D(0);
function FN(){let a=this;Jt.call(a);a.rO=null;a.rM=null;a.n$=0;a.nH=0;a.n2=null;a.sm=null;}
let Q=D(I);
function Qj(){let a=this;Bc.call(a);a.oW=null;a.sp=null;}
let Xb=(a,b)=>{let c;c=b-55296|0;return c>=0&&c<2048?a.ir^B6(a.oW,c):0;};
function Qi(){let a=this;Bc.call(a);a.qu=null;a.qI=null;a.sc=null;}
let Sl=(a,b)=>{let c,d;c=b-55296|0;d=c>=0&&c<2048?a.ir^B6(a.qu,c):0;return a.qI.eL(b)&&!d?1:0;};
function LB(){let a=this;Bc.call(a);a.mf=null;a.q$=null;}
let ABj=(a,b)=>{return a.hy^B6(a.mf,b);},
YE=a=>{let b,c,d,e,f,g,h,i,j,k;b=new K;b.g9=G(16);c=F$(a.mf,0);while(c>=0){d=(EN(c)).data;e=0;f=d.length;g=b.g7;Bn(b,g,g+f|0);f=f+e|0;while(e<f){h=b.g9.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.g7;Bn(b,g,g+1|0);b.g9.data[g]=124;c=F$(a.mf,c+1|0);}e=b.g7;if(e>0)Qs(b,e-1|0);k=new H;d=b.g9;h=d.data;e=b.g7;g=h.length;if(e>=0&&e<=(g-0|0)){k.g8=L(d.data,0,e);return k;}b=new I;b.g$=1;b.g_=1;Bl(b);E(b);};
function LH(){let a=this;Bc.call(a);a.pC=null;a.r3=null;}
let AFV=(a,b)=>{return a.pC.eL(b);};
function LF(){let a=this;Bc.call(a);a.m1=0;a.o5=null;a.nC=null;}
let AGt=(a,b)=>{return !(a.m1^B6(a.nC.ho,b))&&!(a.m1^a.nC.jm^a.o5.eL(b))?0:1;};
function LG(){let a=this;Bc.call(a);a.m6=0;a.qz=null;a.oa=null;}
let ABY=(a,b)=>{return !(a.m6^B6(a.oa.ho,b))&&!(a.m6^a.oa.jm^a.qz.eL(b))?1:0;};
function LL(){let a=this;Bc.call(a);a.qO=0;a.qD=null;a.qx=null;a.rp=null;}
let WG=(a,b)=>{return a.qO^(!a.qD.eL(b)&&!a.qx.eL(b)?0:1);};
function LM(){let a=this;Bc.call(a);a.pF=0;a.pA=null;a.ps=null;a.sG=null;}
let Rr=(a,b)=>{return a.pF^(!a.pA.eL(b)&&!a.ps.eL(b)?0:1)?0:1;};
function LJ(){let a=this;Bc.call(a);a.po=null;a.sI=null;}
let YO=(a,b)=>{let c,d;c=a.po;d=c.hO;return d!==null?c.hy^d.eL(b):c.hy^B6(c.ho,b);};
function LK(){let a=this;Bc.call(a);a.qG=null;a.rD=null;}
let AB0=(a,b)=>{let c,d;c=a.qG;d=c.hO;return (d!==null?c.hy^d.eL(b):c.hy^B6(c.ho,b))?0:1;};
function LN(){let a=this;Bc.call(a);a.pO=null;a.pB=0;a.ql=null;}
let AH_=(a,b)=>{let c,d,e;c=a.pO;d=c.hO;e=d!==null?c.hy^d.eL(b):c.hy^B6(c.ho,b);return !e&&!(a.pB^B6(a.ql.ho,b))?0:1;};
function LO(){let a=this;Bc.call(a);a.p2=null;a.p_=0;a.pU=null;}
let VQ=(a,b)=>{let c,d,e;c=a.p2;d=c.hO;e=d!==null?c.hy^d.eL(b):c.hy^B6(c.ho,b);return !e&&!(a.p_^B6(a.pU.ho,b))?1:0;};
function LA(){let a=this;Bc.call(a);a.qj=0;a.qy=null;a.qK=null;a.rd=null;}
let AKV=(a,b)=>{let c,d;a:{if(!(a.qj^a.qy.eL(b))){c=a.qK;d=c.hO;if(!(d!==null?c.hy^d.eL(b):c.hy^B6(c.ho,b))){b=0;break a;}}b=1;}return b;};
function L2(){let a=this;Bc.call(a);a.qJ=0;a.oM=null;a.oQ=null;a.rz=null;}
let YV=(a,b)=>{let c,d;a:{if(!(a.qJ^a.oM.eL(b))){c=a.oQ;d=c.hO;if(!(d!==null?c.hy^d.eL(b):c.hy^B6(c.ho,b))){b=1;break a;}}b=0;}return b;};
function Ly(){let a=this;Bc.call(a);a.ph=null;a.rG=null;}
let VN=(a,b)=>{let c,d;c=a.ph;d=c.hO;return d!==null?c.hy^d.eL(b):c.hy^B6(c.ho,b);};
function Lz(){let a=this;Bc.call(a);a.pi=null;a.sD=null;}
let X0=(a,b)=>{let c,d;c=a.pi;d=c.hO;return (d!==null?c.hy^d.eL(b):c.hy^B6(c.ho,b))?0:1;};
function LE(){let a=this;Bc.call(a);a.qM=null;a.pZ=0;a.qZ=null;}
let AAi=(a,b)=>{let c,d,e;c=a.qM;d=c.hO;e=d!==null?c.hy^d.eL(b):c.hy^B6(c.ho,b);return e&&a.pZ^B6(a.qZ.ho,b)?1:0;};
function Lx(){let a=this;Bc.call(a);a.qf=null;a.pG=0;a.pY=null;}
let AHN=(a,b)=>{let c,d,e;c=a.qf;d=c.hO;e=d!==null?c.hy^d.eL(b):c.hy^B6(c.ho,b);return e&&a.pG^B6(a.pY.ho,b)?0:1;};
function LC(){let a=this;Bc.call(a);a.qm=0;a.oV=null;a.pE=null;a.ro=null;}
let Uq=(a,b)=>{let c,d;a:{if(a.qm^a.oV.eL(b)){c=a.pE;d=c.hO;if(d!==null?c.hy^d.eL(b):c.hy^B6(c.ho,b)){b=1;break a;}}b=0;}return b;};
function LD(){let a=this;Bc.call(a);a.qa=0;a.oH=null;a.qi=null;a.rJ=null;}
let AEZ=(a,b)=>{let c,d;a:{if(a.qa^a.oH.eL(b)){c=a.qi;d=c.hO;if(d!==null?c.hy^d.eL(b):c.hy^B6(c.ho,b)){b=0;break a;}}b=1;}return b;};
function Gq(){let a=this;C.call(a);a.jZ=null;a.n_=null;a.ik=null;a.iI=0;}
function EV(){let a=this;C.call(a);a.sH=null;a.jq=BM;a.j4=BM;a.iO=null;a.pd=null;a.jc=null;a.iM=0;a.js=null;}
let GJ=null,BE=null,B9=0,Dn=0,Nv=null;
let ABi=a=>{let b,c,$$je;a:{b:{c:{d:{try{Dn=Dn+1|0;AE_(a);a.bg();}catch($$e){$$je=BP($$e);if($$je instanceof CT){b=$$je;break d;}else{b=$$je;break c;}}b=a.iO;Er(b);e:{try{J8(b);CO(b);break e;}catch($$e){$$je=BP($$e);c=$$je;}CO(b);E(c);}a.iM=0;Dn=Dn-1|0;b=GJ;if(BE!==b)BE=b;BE.j4=CZ();break a;}try{To(Zb(a),a,b);break b;}catch($$e){$$je=BP($$e);b=$$je;}}c=a.iO;Er(c);f:{try{J8(c);CO(c);break f;}catch($$e){$$je=BP($$e);b=$$je;}CO(c);E(b);}a.iM=0;Dn=Dn-1|0;c=GJ;if(BE!==c)BE=c;BE.j4=CZ();E(b);}b=a.iO;Er(b);g:{try{J8(b);CO(b);break g;}
catch($$e){$$je=BP($$e);c=$$je;}CO(b);E(c);}a.iM=0;Dn=Dn-1|0;b=GJ;if(BE!==b)BE=b;BE.j4=CZ();}},
AE_=b=>{if(BE!==b)BE=b;BE.j4=CZ();},
AKX=()=>{return BE;},
Ie=b=>{let $p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AH4(b);if(Ee()){break _;}return;default:D9();}}Cq().s(b,$p);},
WD=(b,c)=>{let d,e;d=BE;e=new Ln;e.q0=d;e.qw=c;e.sq=JK(e,ALg(b,O(2147483647))?2147483647:Bd(b));d.pd=e;},
Zb=a=>{let b;b=a.sH;if(b!==null)return b;return Nv;},
T1=()=>{let b,c,d;b=new EV;c=null;b.iO=new C;b.iM=1;b.jc=A(383);b.js=c;d=B9;B9=d+1|0;b.jq=O(d);GJ=b;BE=b;B9=1;Dn=1;Nv=new NQ;},
AH4=b=>{let thread=Cq();let javaThread=RP();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Hv(javaThread);thread.resume();};callback.fo=e=>{thread.attribute=AHu(e);Hv(javaThread);thread.resume();};callback=NU(callback);thread.suspend(()=>{try {WD(b,callback);;}catch(Kh){callback.fo(Kh);}});return null;};
let CV=D(BA);
let GA=D(BA);
let AFY=D();
let NR=b=>{a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;};
let X5=D();
let SD=D();
let ED=D(0);
function Q7(){C.call(this);this.pt=null;}
let AIb=a=>{AGM(a.pt);};
let P4=D(B8);
let P5=D(B8);
let P9=D(B8);
let P$=D(B8);
let P7=D(B8);
let P8=D(B8);
let P2=D(B8);
let P3=D(B8);
let P1=D(B8);
let KZ=D(0);
let NQ=D();
let To=(a,b,c)=>{let d;if(Ct===null){b=new Eo;d=new B5;d.h9=BF(32);BB(b);b.ij=d;d=new K;Dp(d,16);b.h_=d;b.h$=G(32);b.id=0;b.ie=BX;Ct=b;}Hr(c,Ct);};
let MR=D();
let Nt=D(0);
function Nc(){C.call(this);this.kF=null;}
let NU=b=>{let c;c=new Nc;c.kF=b;return c;},
AAF=(a,b)=>{a.kF.e(b);},
AJL=(a,b)=>{a.kF.fo(b);};
function Oi(){let a=this;C.call(a);a.pa=null;a.pb=null;a.o$=0;a.o_=null;}
let KV=D(EP);
let XL=(a,b,c,d)=>{let e,f,g,h,i,j;e=0;f=d.hC;a:{while(true){if(b>f){b=e;break a;}g=a.hU;h=d.ic.data;i=g*2|0;j=h[i];h[i]=b;e=a.iK.ed(b,c,d);if(e>=0)break;i=a.hU;d.ic.data[i*2|0]=j;b=b+1|0;}}return b;},
AKG=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;a:{while(true){if(c<b){c=f;break a;}g=a.hU;h=e.ic.data;i=g*2|0;j=h[i];h[i]=c;f=a.iK.ed(c,d,e);if(f>=0)break;i=a.hU;e.ic.data[i*2|0]=j;c=c+(-1)|0;}}return c;},
Vv=a=>{return null;};
function Oj(){Bc.call(this);this.r1=null;}
let AIx=(a,b)=>{return B$(b)!=2?0:1;};
function KA(){Bc.call(this);this.r4=null;}
let T0=(a,b)=>{return B$(b)!=1?0:1;};
function NP(){Bc.call(this);this.rP=null;}
let Tp=(a,b)=>{a:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break a;default:b:{switch(B$(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}break a;}b=1;}return b;};
function NO(){Bc.call(this);this.rH=null;}
let XE=(a,b)=>{return 0;};
function QA(){Bc.call(this);this.sl=null;}
let ZY=(a,b)=>{return !B$(b)?0:1;};
function LW(){Bc.call(this);this.r7=null;}
let AIz=(a,b)=>{return B$(b)!=9?0:1;};
function Lm(){Bc.call(this);this.sB=null;}
let AEi=(a,b)=>{return FG(b);};
function M3(){Bc.call(this);this.r2=null;}
let AF3=(a,b)=>{a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;};
function Kw(){Bc.call(this);this.q2=null;}
let AKc=(a,b)=>{a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FG(b);}return b;};
function Kz(){Bc.call(this);this.r9=null;}
let Wp=(a,b)=>{a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FG(b);}return b;};
function Lh(){Bc.call(this);this.sk=null;}
let AI0=(a,b)=>{a:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;};
function L$(){Bc.call(this);this.sv=null;}
let ACm=(a,b)=>{a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}b=1;break a;}b=0;}return b;};
function Mb(){Bc.call(this);this.rQ=null;}
let AFq=(a,b)=>{a:{switch(B$(b)){case 12:case 13:case 14:break;default:b=0;break a;}b=1;}return b;};
function OG(){Bc.call(this);this.r_=null;}
let AIa=(a,b)=>{return B$(b)!=3?0:1;};
function N8(){Bc.call(this);this.q5=null;}
let AJI=(a,b)=>{a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=FG(b);}return b;};
function KK(){Bc.call(this);this.sJ=null;}
let V8=(a,b)=>{a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=FG(b);}return b;};
function Hl(){Bc.call(this);this.mC=0;}
let AEm=(a,b)=>{return a.hy^(a.mC!=B$(b&65535)?0:1);};
let NH=D(Hl);
let AG3=(a,b)=>{return a.hy^(!(a.mC>>B$(b&65535)&1)?0:1);};
function Tr(){let a=this;C.call(a);a.sN=0;a.sO=0;a.sL=0;a.sM=0;a.sK=null;}
function Fh(){let a=this;EV.call(a);a.ki=0;a.jf=null;a.jt=null;a.jk=null;}
let AEw=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new JB;c.jy=a;c.k3=b;c=BL(c,"handleEvent");b.onreadystatechange=c;c=a.jk;d=a.jt;e=new Fi;e.om=c;e.ma=d;c=BL(e,"handleEvent");b.onprogress=c;d=a.jf;f=a.ki;b.open("GET",Br(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();};
let KL=D();
let Pb=null;
let Jg=()=>{Jg=Bz(KL);AGn();};
let AGn=()=>{let b,c;b=S((PY.p()).data.length);c=b.data;Pb=b;c[J3.hl]=1;c[GN.hl]=2;};
let Qf=D();
let ABv=(a,b,c)=>{a.di(V(b),CC(c,"handleEvent"));},
ACp=(a,b,c)=>{a.dj(V(b),CC(c,"handleEvent"));},
R1=(a,b,c,d)=>{a.dk(V(b),CC(c,"handleEvent"),d?1:0);},
Sc=(a,b)=>{return !!a.dl(b);},
YR=(a,b,c,d)=>{a.dn(V(b),CC(c,"handleEvent"),d?1:0);};
let Fk=D(0);
function HD(){let a=this;C.call(a);a.kt=null;a.nL=0;a.mm=null;a.oh=null;a.lc=null;}
let AJN=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.kt.readyState==4){if(a.kt.status==200){if(a.lc.iF){if(BH===null){b=new Ck;c=new B5;c.h9=BF(32);b.ij=c;c=new K;BB(c);c.g9=G(16);b.h_=c;b.h$=G(32);b.id=0;b.ie=BX;BH=b;}b=a.mm;c=new K;c.g9=G(16);F(c,c.g7,A(384));d=c.g7;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.g9;f=e.data;g=c.g7;h=f.length;if(g
>=0&&g<=(h-0|0)){b.g8=L(e.data,0,g);BI(Br(b));BI("\n");}else{b=new I;b.g$=1;b.g_=1;Bl(b);E(b);}}c=a.kt.response;Eh();i=Fs.je.document;j=i.createElement("script");b=i.createTextNode(c);j.appendChild(b);i.body.appendChild(j);V(a.kt.responseText);}else if(a.kt.status!=404&&a.kt.status!=403){try{k=O(100);$p=1;continue _;}catch($$e){$$je=BP($$e);if($$je instanceof CT){}else{throw $$e;}}Ke(a.lc,a.nL,a.mm,a.oh);}b=a.lc;b.hM=b.hM-1|0;}return;case 1:a:{try{Ie(k);if(Ee()){break _;}break a;}catch($$e){$$je=BP($$e);if($$je instanceof CT)
{}else{throw $$e;}}}Ke(a.lc,a.nL,a.mm,a.oh);b=a.lc;b.hM=b.hM-1|0;return;default:D9();}}Cq().s(a,b,c,d,e,f,g,h,i,j,k,$p);},
Z8=(a,b)=>{let $p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJN(a,b);if(Ee()){break _;}return;default:D9();}}Cq().s(a,b,$p);};
let ACP=D();
let KR=0;
function Fx(){let a=this;C.call(a);a.lh=null;a.mw=0;a.lt=0;a.i3=0;}
let NE=a=>{let b;if(a.i3)return a.lt>=a.lh.h3?0:1;b=new Bf;b.g$=1;b.g_=1;b.hb=A(385);E(b);},
L1=a=>{let b,c,d,e,f,g,h;b=a.lt;c=a.lh;if(b<c.h3){if(a.i3){d=c.hW.data;a.lt=b+1|0;return d[b];}c=new Bf;c.g$=1;c.g_=1;c.hb=A(385);E(c);}c=new Re;e=new K;e.g9=G(16);J(e,e.g7,b,10);f=new H;d=e.g9;g=d.data;b=e.g7;h=g.length;if(b>=0&&b<=(h-0|0)){f.g8=L(d.data,0,b);c.g$=1;c.g_=1;c.hb=f;E(c);}c=new I;Y(c);E(c);};
function Lo(){let a=this;C.call(a);a.nJ=null;a.on=0;a.n4=null;a.n5=null;}
let Zp=a=>{let b,c,d;if(KR){b=new Fx;c=a.nJ;d=a.on;b.i3=1;b.lh=c;b.mw=d;return b;}if(a.n4===null){b=new Fx;c=a.nJ;d=a.on;b.i3=1;b.lh=c;b.mw=d;a.n4=b;b=new Fx;b.i3=1;b.lh=c;b.mw=d;a.n5=b;}b=a.n4;if(b.i3){c=a.n5;c.lt=0;c.i3=1;b.i3=0;return c;}b.lt=0;b.i3=1;a.n5.i3=0;return b;};
function Gd(){let a=this;C.call(a);a.n6=null;a.jl=null;a.qe=null;}
let AFW=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.jl.length;c=new K;c.g9=G(((b*4|0)/3|0)+2|0);d=0;a:{b:{c:{d:{e:{f:{g:{h:{while(true){if(d>=b){e=new H;f=c.g9;g=f.data;b=c.g7;h=g.length;if(b>=0&&b<=(h-0|0)){e.g8=L(f.data,0,b);return e;}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);}i=b-d|0;if(i>=3){j=(((a.jl[d]&255)<<16)+((a.jl[d+1|0]&255)<<8)|0)+(a.jl[d+2|0]&255)|0;h=j>>18&63;if(h<0)break f;if(h>=A(386).g8.length)break f;h=A(386).g8.charCodeAt(h);i=c.g7;Bn(c,i,i+1|0);c.g9.data[i]=h;h=j>>12&63;if(h<0)break g;if(h>=A(386).g8.length)break g;h
=A(386).g8.charCodeAt(h);i=c.g7;Bn(c,i,i+1|0);c.g9.data[i]=h;h=j>>6&63;if(h<0)break h;if(h>=A(386).g8.length)break h;h=A(386).g8.charCodeAt(h);i=c.g7;Bn(c,i,i+1|0);c.g9.data[i]=h;i=j&63;if(i<0)break;if(i>=A(386).g8.length)break;h=A(386).g8.charCodeAt(i);i=c.g7;Bn(c,i,i+1|0);c.g9.data[i]=h;}else if(i<2){j=(a.jl[d]&255)<<16;h=j>>18&63;if(h<0)break d;if(h>=A(386).g8.length)break d;h=A(386).g8.charCodeAt(h);i=c.g7;Bn(c,i,i+1|0);c.g9.data[i]=h;h=j>>12&63;if(h<0)break e;if(h>=A(386).g8.length)break e;h=A(386).g8.charCodeAt(h);i
=c.g7;Bn(c,i,i+1|0);c.g9.data[i]=h;F(c,c.g7,A(387));}else{k=((a.jl[d]&255)<<16)+((a.jl[d+1|0]&255)<<8)|0;h=k>>18&63;if(h<0)break a;if(h>=A(386).g8.length)break a;h=A(386).g8.charCodeAt(h);i=c.g7;Bn(c,i,i+1|0);c.g9.data[i]=h;h=k>>12&63;if(h<0)break b;if(h>=A(386).g8.length)break b;h=A(386).g8.charCodeAt(h);i=c.g7;Bn(c,i,i+1|0);c.g9.data[i]=h;h=k>>6&63;if(h<0)break c;if(h>=A(386).g8.length)break c;h=A(386).g8.charCodeAt(h);i=c.g7;Bn(c,i,i+1|0);c.g9.data[i]=h;F(c,c.g7,A(388));}d=d+3|0;}e=new Q;e.g$=1;e.g_=1;E(e);}e
=new Q;e.g$=1;e.g_=1;E(e);}e=new Q;e.g$=1;e.g_=1;E(e);}e=new Q;e.g$=1;e.g_=1;E(e);}e=new Q;e.g$=1;e.g_=1;E(e);}e=new Q;e.g$=1;e.g_=1;E(e);}e=new Q;e.g$=1;e.g_=1;E(e);}e=new Q;e.g$=1;e.g_=1;E(e);}e=new Q;e.g$=1;e.g_=1;E(e);};
function KM(){C.call(this);this.nU=null;}
let Q$=D(0);
let Or=D(0);
let O9=D(0);
let FI=D();
let DL=a=>{return;};
function Gg(){FI.call(this);this.ij=null;}
let Ez=(a,b)=>{a.ij=b;},
AMh=a=>{let b=new Gg();Ez(b,a);return b;};
function Gz(){let a=this;Gg.call(a);a.id=0;a.h_=null;a.h$=null;a.ie=null;}
let Qw=(a,b,c)=>{a.ij=b;b=new K;b.g9=G(16);a.h_=b;a.h$=G(32);a.id=c;a.ie=BX;},
ALQ=(a,b)=>{let c=new Gz();Qw(c,a,b);return c;};
let FD=D(Gz);
let Ck=D(FD);
let AAk=(a,b)=>{BI(Br(b));};
function Fi(){let a=this;C.call(a);a.ma=null;a.om=null;}
let ADN=(a,b)=>{a.ma.fr(b.loaded);};
let Ub=D();
function B5(){FI.call(this);this.h9=null;}
let TW=(a,b)=>{a.h9=BF(b);},
AHH=a=>{let b=new B5();TW(b,a);return b;};
function HJ(){let a=this;C.call(a);a.oE=null;a.pk=null;}
let G3=b=>{let c,d,e;if(b.g8.length?0:1){c=new G7;c.g$=1;c.g_=1;c.ne=b;E(c);}if(0>=b.g8.length){b=new Q;b.g$=1;b.g_=1;E(b);}if(!Py(b.g8.charCodeAt(0))){c=new G7;c.g$=1;c.g_=1;c.ne=b;E(c);}d=1;a:{while(d<b.g8.length){if(d<0)break a;if(d>=b.g8.length)break a;b:{e=b.g8.charCodeAt(d);switch(e){case 43:case 45:case 46:case 58:case 95:break;default:if(Py(e))break b;else{c=new G7;c.g$=1;c.g_=1;c.ne=b;E(c);}}}d=d+1|0;}return;}b=new Q;b.g$=1;b.g_=1;E(b);},
Py=b=>{a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;};
let Kd=D(HJ);
let BX=null;
let ALl=()=>{let b,c,d,e,f;b=new Kd;c=R(H,0);d=c.data;G3(A(3));e=d.length;f=0;while(f<e){G3(d[f]);f=f+1|0;}b.oE=A(3);b.pk=c.p();BX=b;};
function G7(){Bs.call(this);this.ne=null;}
let L4=D(0);
function IC(){let a=this;C.call(a);a.p0=0;a.lv=0;a.qr=0;a.rk=0;a.l9=0;a.jn=null;a.lJ=null;a.st=0;a.qF=0;a.pq=0;a.sa=0;a.qk=0;a.ra=0;a.nT=null;a.mq=null;a.nM=null;}
let N2=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o;a.nT=D3();a.rk=b;a.qF=e;a.lJ=f;g=T_(a,c,d,e);h=new N5;h.o6=1;h.mQ=0;f=new Bb;B_();h.sb=f;f=YX(g);h.iT=En===null?ABH(0,b,f):AAW(0,b,f);f=new NJ;f.l0=1;f.nF=0;f.rL=1;if(!C$){g=ALk(0);d=g.data.length;i=new Qx;j=0+d|0;AG_(i,d);i.hm=0;i.hf=j;i.qh=0;i.q3=0;i.pp=g;}else{k=new Db;g=BF(0);BB(k);k.hE=(-1);k.hF=0;k.hf=0;k.ib=Cz;k.iy=0;k.h7=g;k.hm=0;k.hf=0;k.jj=1;k.iq=0;k.ib=Df();i=AKm(k);}f.jS=i;i.hf=i.hm;i.hm=0;i.hE=(-1);i=Bx;k=i.hg.createBuffer();d=i.ju;i.ju=d+1|0;Cd(i.jT,
d,Ce(k));f.o2=d;f.pR=35048;h.kr=f;h.qo=0;f=Dc;i=JL;if(f===null){i=i.jI.data[0];while(i!==null&&i.jw!==null){i=i.j8;}}else{k=f;if(!k.$id$){l=Gl();k.$id$=l;}m=f.$id$;g=i.jI.data;i=g[m&(g.length-1|0)];while(i!==null){if(i.lK==m){k=i.jw;if(f!==k&&!(f!==k?0:1)?0:1)break;}i=i.j8;}}i=i===null?null:i.jX;if(i===null){i=new Cy;i.iJ=1;i.hW=R(C,16);}Di(i,h);AH2(JL,f,i);a.jn=h;a.mq=Cb(CB(b,(h.iT.fz()).i_/4|0));a.pq=(a.jn.iT.fz()).i_/4|0;g=(a.jn.iT.fz()).is.data;b=g.length;d=0;a:{while(d<b){if(g[d].ji==8){f=g[d];break a;}d
=d+1|0;}f=null;}if(f===null)b=0;else{g=(a.jn.iT.fz()).is.data;m=g.length;c=0;b:{while(c<m){if(g[c].ji==8){f=g[c];break b;}c=c+1|0;}f=null;}b=f.kq/4|0;}a.sa=b;g=(a.jn.iT.fz()).is.data;m=g.length;c=0;c:{while(c<m){if(g[c].ji==4){f=g[c];break c;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.jn.iT.fz()).is.data;m=g.length;c=0;d:{while(c<m){if(g[c].ji==4){f=g[c];break d;}c=c+1|0;}f=null;}b=f.kq/4|0;}a.qk=b;g=(a.jn.iT.fz()).is.data;m=g.length;c=0;e:{while(c<m){if(g[c].ji==16){f=g[c];break e;}c=c+1|0;}f=null;}if(f===
null)b=0;else{g=(a.jn.iT.fz()).is.data;m=g.length;c=0;f:{while(c<m){if(g[c].ji==16){f=g[c];break f;}c=c+1|0;}f=null;}b=f.kq/4|0;}a.ra=b;a.nM=R(H,e);m=0;g:{while(m<e){g=a.nM;f=new K;f.g9=G(16);F(f,f.g7,A(389));J(f,f.g7,m,10);i=new H;n=f.g9;o=n.data;c=f.g7;d=o.length;if(c<0)break g;if(c>(d-0|0))break g;g=g.data;i.g8=L(n.data,0,c);g[m]=i;m=m+1|0;}return;}f=new I;f.g$=1;f.g_=1;Bl(f);E(f);},
ALF=(a,b,c,d,e)=>{let f=new IC();N2(f,a,b,c,d,e);return f;},
T_=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new Cy;e.iJ=1;e.hW=R(C,16);f=new Et;f.ji=1;f.jp=3;f.j0=5126;f.kh=0;f.j$=A(390);f.mL=0;f.mD=DX(1);Di(e,f);if(b){g=new Et;g.ji=8;g.jp=3;g.j0=5126;g.kh=0;g.j$=A(391);g.mL=0;g.mD=DX(8);Di(e,g);}if(c){g=new Et;g.ji=4;g.jp=4;g.j0=5121;g.kh=1;g.j$=A(392);g.mL=0;g.mD=DX(4);Di(e,g);}h=0;while(true){if(h>=d){b=e.h3;i=R(Et,b);j=i.data;h=0;while(true){c=B4(h,b);if(c>=0)break;if(c>=0){f=new I;g=new K;g.g9=G(16);F(g,g.g7,A(76));J(g,g.g7,h,10);F(g,g.g7,A(77));b=e.h3;J(g,g.g7,b,10);e=
new H;i=g.g9;j=i.data;c=g.g7;d=j.length;if(c>=0&&c<=(d-0|0)){e.g8=L(i.data,0,c);f.g$=1;f.g_=1;f.hb=e;E(f);}e=new I;Y(e);E(e);}j[h]=e.hW.data[h];h=h+1|0;}return i;}g=new Et;f=new K;f.g9=G(16);F(f,f.g7,A(393));J(f,f.g7,h,10);k=new H;i=f.g9;j=i.data;l=f.g7;m=j.length;if(l<0)break;if(l>(m-0|0))break;k.g8=L(i.data,0,l);g.ji=16;g.jp=2;g.j0=5126;g.kh=0;g.j$=k;g.mL=0;g.mD=DX(16);Di(e,g);h=h+1|0;}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);},
ACj=(a,b,c,d)=>{let e,f;e=a.lv;f=a.mq.data;f[e]=b;f[e+1|0]=c;f[e+2|0]=d;a.qr=0;a.lv=e+a.pq|0;a.l9=a.l9+1|0;},
AH0=a=>{let b,c,d,e,f,g,h;if(!a.l9)return;b=a.lJ;c=Bx;if(b.h8){CH(b,b.iN,b.iR);b.h8=0;}c.fB(b.i0);c=a.lJ;d=a.nT;Hp();e=NW(c,A(394),Ji);b=Bx;if(c.h8){CH(c,c.iN,c.iR);c.h8=0;}XN(b,e,1,0,d.iz,0);f=0;while(f<a.qF){b=a.lJ;c=a.nM.data[f];d=Bx;if(b.h8){CH(b,b.iN,b.iR);b.h8=0;}d.fE(NW(b,c,Ji),f);f=f+1|0;}b=a.jn;g=a.mq;h=a.lv;b.iT.fF(g,0,h);b=a.jn;c=a.lJ;f=a.p0;d=b.kr.jS;ACD(b,c,f,0,d.hF<=0?b.iT.fH():d.hf,b.o6);a.qr=0;a.lv=0;a.l9=0;},
Rz=(b,c,d)=>{let e,f,g,h,i,j,k;e=new K;e.g9=G(16);F(e,e.g7,A(395));f=!b?A(59):A(396);F(e,e.g7,f);f=!c?A(59):A(397);F(e,e.g7,f);f=new H;g=e.g9;h=g.data;i=e.g7;j=h.length;if(i>=0&&i<=(j-0|0)){f.g8=L(g.data,0,i);i=0;while(true){if(i>=d){e=new K;e.g9=G(16);F(e,e.g7,f);F(e,e.g7,A(398));f=!c?A(59):A(399);F(e,e.g7,f);f=new H;g=e.g9;h=g.data;b=e.g7;j=h.length;if(b>=0&&b<=(j-0|0)){f.g8=L(g.data,0,b);i=0;while(true){if(i>=d){e=new K;e.g9=G(16);F(e,e.g7,f);F(e,e.g7,A(400));f=new H;g=e.g9;h=g.data;i=e.g7;j=h.length;if(i
>=0&&i<=(j-0|0)){f.g8=L(g.data,0,i);if(c){e=new K;e.g9=G(16);F(e,e.g7,f);F(e,e.g7,A(401));f=new H;g=e.g9;h=g.data;c=e.g7;i=h.length;if(c>=0&&c<=(i-0|0))f.g8=L(g.data,0,c);else{e=new I;e.g$=1;e.g_=1;Bl(e);E(e);}}i=0;while(true){if(i>=d){e=new K;e.g9=G(16);F(e,e.g7,f);F(e,e.g7,A(402));f=new H;g=e.g9;h=g.data;c=e.g7;d=h.length;if(c>=0&&c<=(d-0|0)){f.g8=L(g.data,0,c);return f;}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);}e=new K;e.g9=G(16);F(e,e.g7,f);F(e,e.g7,A(403));J(e,e.g7,i,10);F(e,e.g7,A(404));F(e,e.g7,A(393));J(e,e.g7,
i,10);F(e,e.g7,A(405));f=new H;g=e.g9;h=g.data;c=e.g7;j=h.length;if(c<0)break;if(c>(j-0|0))break;f.g8=L(g.data,0,c);i=i+1|0;}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);}e=new K;e.g9=G(16);F(e,e.g7,f);F(e,e.g7,A(406));J(e,e.g7,i,10);F(e,e.g7,A(405));f=new H;g=e.g9;h=g.data;j=e.g7;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.g8=L(g.data,0,j);i=i+1|0;}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);}e=new K;e.g9=G(16);F(e,e.g7,f);F(e,e.g7,A(407));J(e,e.g7,i,10);F(e,e.g7,
A(405));f=new H;g=e.g9;h=g.data;j=e.g7;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.g8=L(g.data,0,j);i=i+1|0;}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);},
ACa=(b,c,d)=>{let e,f,g,h,i,j,k;e=A(408);if(c){f=new K;f.g9=G(16);F(f,f.g7,e);F(f,f.g7,A(399));e=new H;g=f.g9;h=g.data;i=f.g7;j=h.length;if(i>=0&&i<=(j-0|0))e.g8=L(g.data,0,i);else{e=new I;e.g$=1;e.g_=1;Bl(e);E(e);}}i=0;a:{while(true){if(i>=d){f=new K;f.g9=G(16);F(f,f.g7,e);F(f,f.g7,A(409));e=!c?A(410):A(411);F(f,f.g7,e);e=new H;h=f.g9;g=h.data;b=f.g7;c=g.length;if(b>=0&&b<=(c-0|0)){e.g8=L(h.data,0,b);if(d>0){f=new K;f.g9=G(16);F(f,f.g7,e);F(f,f.g7,A(412));e=new H;g=f.g9;h=g.data;c=f.g7;i=h.length;if(c>=0&&
c<=(i-0|0))e.g8=L(g.data,0,c);else{e=new I;e.g$=1;e.g_=1;Bl(e);E(e);}}i=0;c=d-1|0;b:{while(true){if(i>=d){f=new K;f.g9=G(16);F(f,f.g7,e);F(f,f.g7,A(413));e=new H;g=f.g9;h=g.data;c=f.g7;d=h.length;if(c>=0&&c<=(d-0|0)){e.g8=L(g.data,0,c);return e;}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);}if(i!=c){f=new K;f.g9=G(16);F(f,f.g7,e);F(f,f.g7,A(414));J(f,f.g7,i,10);F(f,f.g7,A(415));J(f,f.g7,i,10);F(f,f.g7,A(416));e=new H;g=f.g9;h=g.data;j=f.g7;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.g8=L(g.data,0,j);}else{f=new K;f.g9
=G(16);F(f,f.g7,e);F(f,f.g7,A(414));J(f,f.g7,i,10);F(f,f.g7,A(415));J(f,f.g7,i,10);F(f,f.g7,A(417));e=new H;g=f.g9;h=g.data;j=f.g7;k=h.length;if(j<0)break b;if(j>(k-0|0))break b;e.g8=L(g.data,0,j);}i=i+1|0;}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);}f=new K;f.g9=G(16);F(f,f.g7,e);F(f,f.g7,A(406));J(f,f.g7,i,10);F(f,f.g7,A(405));e=new H;g=f.g9;h=g.data;j=f.g7;k=h.length;if(j<0)break a;if(j>(k-0|0))break a;e.g8=L(g.data,0,j);f=new K;f.g9=G(16);F(f,f.g7,
e);F(f,f.g7,A(418));J(f,f.g7,i,10);F(f,f.g7,A(405));e=new H;g=f.g9;h=g.data;j=f.g7;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.g8=L(g.data,0,j);i=i+1|0;}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);};
function Kg(){let a=this;C.call(a);a.m3=null;a.qA=0.0;a.qN=0.0;a.oF=0;a.oG=0;a.p3=0;a.qv=0;a.rK=null;}
let Ql=(a,b)=>{let c,d,e,f;ABl(a.oF,a.oG,a.p3,a.qv);c=a.m3;d=a.qA;c.nu=d;e=a.qN;c.nZ=e;if(b){f=c.nY;d=d/2.0;e=e/2.0;f.hc=d;f.he=e;f.hd=0.0;}AKI(c,1);};
function Oe(){Kg.call(this);this.oZ=0.0;}
function QE(){FU.call(this);this.q8=null;}
let R5=D();
let Re=D(BA);
let Bf=D(BA);
let Wk=D();
let Ml=(b,c)=>{let d;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;};
function Dj(){C.call(this);this.jd=null;}
let TC=a=>{ABi(a.jd);};
let Xn=D();
let Q3=D();
let K9=null;
let J0=()=>{J0=Bz(Q3);AGO();};
let AGO=()=>{let b,c;b=S((J_.p()).data.length);c=b.data;K9=b;c[Eq.hl]=1;c[Ej.hl]=2;c[Ea.hl]=3;c[D6.hl]=4;c[Hj.hl]=5;};
let JV=D(BA);
function J4(){let a=this;C.call(a);a.nY=null;a.pL=null;a.qb=null;a.nz=null;a.of=null;a.lP=null;a.mk=null;a.ok=0.0;a.p$=0.0;a.nu=0.0;a.nZ=0.0;a.p4=null;a.rw=null;a.rf=null;}
let AFl=a=>{let b,c,d;b=new Bb;B_();a.nY=b;b=new Bb;b.hc=0.0;b.he=0.0;b.hd=(-1.0);a.pL=b;b=new Bb;b.hc=0.0;b.he=1.0;b.hd=0.0;a.qb=b;a.nz=D3();a.of=D3();a.lP=D3();a.mk=D3();a.ok=1.0;a.p$=100.0;a.nu=0.0;a.nZ=0.0;a.p4=AE5();a.rw=new Bb;b=new IO;Jb();c=new Bb;b.rq=c;d=new Bb;b.sg=d;c.hc=0.0;c.he=0.0;c.hd=0.0;d.hc=0.0;d.he=0.0;d.hd=0.0;a.rf=b;};
function Mu(){let a=this;J4.call(a);a.oX=0.0;a.qg=null;}
let AKI=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.nz;d=a.oX;e=a.nu;f=d* -e/2.0;e=d*e/2.0;g=a.nZ;AC$(c,f,e,d* -(g/2.0),d*g/2.0,a.ok,a.p$);c=a.of;h=a.nY;i=a.qg;d=h.hc;j=h.he;f=h.hd;i.hc=d;i.he=j;i.hd=f;k=a.pL;l=k.hc;e=k.he;g=k.hd;d=d+l;j=j+e;f=f+g;i.hc=d;i.he=j;i.hd=f;i=a.qb;k=QC;k.hc=d;k.he=j;k.hd=f;l=h.hc;e=h.he;g=h.hd;l=d-l;e=j-e;g=f-g;k.hc=l;k.he=e;k.hd=g;Xh(c,k,i);i=LU;l= -h.hc;e= -h.he;g= -h.hd;Ig(i);m=i.iz.data;m[12]=l;m[13]=e;m[14]=g;ACI(c,i);Gm(a.lP,a.nz.iz);Sr(a.lP.iz,a.of.iz);if(b){Gm(a.mk,a.lP.iz);XF(a.mk.iz);ADX(a.p4,
a.mk);}};
let Eo=D(FD);
let Yq=(a,b)=>{CI(Br(b));};
let Wy=D(Dr);
let Rk=null;
let AK9=()=>{Rk=Bk(W3);};
let AEF=D();
let Kt=null,Mo=null,M1=null;
let Z3=()=>{Kt=U3([O(1),O(10),O(100),O(10000),O(100000000),B(1874919424, 2328306)]);Mo=new Jn;M1=new PI;};
let AFh=D();
let H5=BM,Sp=null,FT=null,Gc=null;
let ZQ=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!(isNaN(b)?1:0)?AMl(b):B(0, 2146959360);c.oR=C6(Ci(d,B(0, 2147483648)),BM)?0:1;e=Ci(d,B(4294967295, 1048575));f=Bd(ALE(d,52))&2047;if(C6(e,BM)&&!f){c.nW=BM;c.ng=0;return;}if(f)e=W_(e,B(0, 1048576));else{e=Ek(e,1);while(C6(Ci(e,B(0, 1048576)),BM)){e=Ek(e,1);f=f+(-1)|0;}}g=Gc;h=AFR(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=Gc.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=GD(e,FT.data[i],j);if(WU(k,H5)){while(DU(k,H5)<=0){h=h+(-1)|0;k=Cj(U(k,O(10)),O(9));}g=Gc.data;i=h+1
|0;j=12+(f-g[i]|0)|0;k=GD(e,FT.data[i],j);}e=Ek(e,1);d=Cj(e,O(1));g=FT.data;i=h+1|0;l=g[i];f=j-1|0;m=GD(d,l,f);l=GD(Nm(e,O(1)),FT.data[i],f);n=O(1);while(true){o=U(n,O(10));if(DU(DF(k,o),DF(l,o))<=0)break;n=o;}p=O(1);while(true){q=U(p,O(10));if(DU(DF(k,q),DF(m,q))>=0)break;p=q;}i=DU(n,p);e=i>0?U(DF(k,n),n):i<0?Cj(U(DF(k,p),p),p):U(DF(Cj(k,Jz(p,O(2))),p),p);if(DU(e,B(2808348672, 232830643))>=0)while(true){h=h+1|0;e=DF(e,O(10));if(DU(e,B(2808348672, 232830643))<0)break;}else if(DU(e,B(1569325056, 23283064))<0)
{h=h+(-1)|0;e=U(e,O(10));}c.nW=e;c.ng=h-330|0;},
GD=(b,c,d)=>{let e,f,g,h,i,j,k,l;e=Ci(b,O(65535));f=Ci(X(b,16),O(65535));g=Ci(X(b,32),O(65535));h=Ci(X(b,48),O(65535));i=Ci(c,O(65535));j=Ci(X(c,16),O(65535));k=Ci(X(c,32),O(65535));l=Ci(X(c,48),O(65535));return Cj(Cj(Cj(Ek(U(l,h),32+d|0),Ek(Cj(U(l,g),U(k,h)),16+d|0)),Ek(Cj(Cj(U(l,f),U(k,g)),U(j,h)),d)),X(Cj(Cj(Cj(U(k,e),U(j,f)),U(i,g)),Ek(Cj(Cj(Cj(U(l,e),U(k,f)),U(j,g)),U(i,h)),16)),32-d|0));},
Y1=()=>{H5=DF(O(-1),O(10));Sp=ADF();FT=U3([B(3251292512, 2194092222),B(1766094183, 3510547556),B(553881887, 2808438045),B(443105509, 2246750436),B(3285949193, 3594800697),B(910772436, 2875840558),B(2446604867, 2300672446),B(2196580869, 3681075914),B(2616258154, 2944860731),B(1234013064, 2355888585),B(1974420903, 3769421736),B(720543263, 3015537389),B(1435428070, 2412429911),B(578697993, 3859887858),B(2180945313, 3087910286),B(885762791, 2470328229),B(3135207384, 3952525166),B(1649172448, 3162020133),B(3037324877, 2529616106),
B(3141732885, 4047385770),B(2513386308, 3237908616),B(1151715587, 2590326893),B(983751480, 4144523029),B(1645994643, 3315618423),B(3034782633, 2652494738),B(3996658754, 4243991581),B(2338333544, 3395193265),B(1870666835, 2716154612),B(4073513845, 2172923689),B(3940641775, 3476677903),B(575533043, 2781342323),B(2178413352, 2225073858),B(2626467905, 3560118173),B(3819161242, 2848094538),B(478348616, 2278475631),B(3342338164, 3645561009),B(3532863990, 2916448807),B(1108304273, 2333159046),B(55299919, 3733054474),
B(903233395, 2986443579),B(1581580175, 2389154863),B(1671534821, 3822647781),B(478234397, 3058118225),B(382587518, 2446494580),B(612140029, 3914391328),B(2207698941, 3131513062),B(48172235, 2505210450),B(77075576, 4008336720),B(61660460, 3206669376),B(3485302205, 2565335500),B(1281516232, 4104536801),B(166219527, 3283629441),B(3568949458, 2626903552),B(2274345296, 4203045684),B(2678469696, 3362436547),B(424788838, 2689949238),B(2057817989, 2151959390),B(3292508783, 3443135024),B(3493000485, 2754508019),B(3653393847, 2203606415),
B(1550462860, 3525770265),B(1240370288, 2820616212),B(3569276608, 2256492969),B(3133862195, 3610388751),B(1648096297, 2888311001),B(459483578, 2310648801),B(3312154103, 3697038081),B(1790729823, 2957630465),B(1432583858, 2366104372),B(3151127633, 3785766995),B(2520902106, 3028613596),B(1157728226, 2422890877),B(2711358621, 3876625403),B(3887073815, 3101300322),B(1391672133, 2481040258),B(1367681954, 3969664413),B(2812132482, 3175731530),B(2249705985, 2540585224),B(1022549199, 4064936359),B(1677032818, 3251949087),
B(3918606632, 2601559269),B(3692790234, 4162494831),B(2095238728, 3329995865),B(1676190982, 2663996692),B(3540899031, 4262394707),B(1114732307, 3409915766),B(32792386, 2727932613),B(1744220827, 2182346090),B(2790753324, 3491753744),B(3091596118, 2793402995),B(2473276894, 2234722396),B(2239256113, 3575555834),B(2650398349, 2860444667),B(402331761, 2288355734),B(2361717736, 3661369174),B(2748367648, 2929095339),B(3057687578, 2343276271),B(3174313206, 3749242034),B(3398444024, 2999393627),B(1000768301, 2399514902),
B(2460222741, 3839223843),B(3686165111, 3071379074),B(3807925548, 2457103259),B(3515700499, 3931365215),B(2812560399, 3145092172),B(532061401, 2516073738),B(4287272078, 4025717980),B(3429817663, 3220574384),B(3602847589, 2576459507),B(2328582306, 4122335212),B(144878926, 3297868170),B(115903141, 2638294536),B(2762425404, 4221271257),B(491953404, 3377017006),B(3829536560, 2701613604),B(3922622707, 2161290883),B(1122235577, 3458065414),B(1756781920, 2766452331),B(546432077, 2213161865),B(874291324, 3541058984),
B(1558426518, 2832847187),B(3823721592, 2266277749),B(3540974170, 3626044399),B(3691772795, 2900835519),B(3812411695, 2320668415),B(1804891416, 3713069465),B(1443913133, 2970455572),B(3732110884, 2376364457),B(2535403578, 3802183132),B(310335944, 3041746506),B(3684242592, 2433397204),B(3317807769, 3893435527),B(936259297, 3114748422),B(3325987815, 2491798737),B(1885606668, 3986877980),B(1508485334, 3189502384),B(2065781726, 2551601907),B(4164244222, 4082563051),B(2472401918, 3266050441),B(1118928075, 2612840353),
B(931291461, 4180544565),B(745033169, 3344435652),B(3173006913, 2675548521),B(3358824142, 4280877634),B(3546052773, 3424702107),B(1118855300, 2739761686),B(36090780, 2191809349),B(1775732167, 3506894958),B(3138572652, 2805515966),B(1651864662, 2244412773),B(1783990001, 3591060437),B(4004172378, 2872848349),B(4062331362, 2298278679),B(3922749802, 3677245887),B(1420212923, 2941796710),B(1136170338, 2353437368),B(958879082, 3765499789),B(1626096725, 3012399831),B(441883920, 2409919865),B(707014273, 3855871784),
B(1424604878, 3084697427),B(3716664280, 2467757941),B(4228675929, 3948412706),B(2523947284, 3158730165),B(2019157827, 2526984132),B(4089645983, 4043174611),B(2412723327, 3234539689),B(2789172121, 2587631751),B(2744688475, 4140210802),B(477763862, 3312168642),B(2959191467, 2649734913),B(3875712888, 4239575861),B(2241576851, 3391660689),B(2652254940, 2713328551),B(1262810493, 2170662841),B(302509870, 3473060546),B(3677981733, 2778448436),B(2083391927, 2222758749),B(756446706, 3556413999),B(1464150824, 2845131199),
B(2030314118, 2276104959),B(671522212, 3641767935),B(537217769, 2913414348),B(2147761134, 2330731478),B(2577424355, 3729170365),B(2061939484, 2983336292),B(4226531965, 2386669033),B(1608490388, 3818670454),B(2145785770, 3054936363),B(3434615534, 2443949090),B(1200417559, 3910318545),B(960334047, 3128254836),B(4204241074, 2502603868),B(1572824964, 4004166190),B(1258259971, 3203332952),B(3583588354, 2562666361),B(4015754449, 4100266178),B(635623181, 3280212943),B(2226485463, 2624170354),B(985396364, 4198672567),
B(3365297469, 3358938053),B(115257597, 2687150443),B(1810192996, 2149720354),B(319328417, 3439552567),B(2832443111, 2751642053),B(3983941407, 2201313642),B(2938332415, 3522101828),B(4068652850, 2817681462),B(1536935362, 2254145170),B(2459096579, 3606632272),B(249290345, 2885305818),B(1917419194, 2308244654),B(490890333, 3693191447),B(2969692644, 2954553157),B(657767197, 2363642526),B(3629407892, 3781828041),B(2044532855, 3025462433),B(3353613202, 2420369946),B(3647794205, 3872591914),B(3777228823, 3098073531),
B(2162789599, 2478458825),B(3460463359, 3965534120),B(2768370687, 3172427296),B(1355703090, 2537941837),B(3028118404, 4060706939),B(3281488183, 3248565551),B(1766197087, 2598852441),B(1107928421, 4158163906),B(27349277, 3326531125),B(21879422, 2661224900),B(35007075, 4257959840),B(28005660, 3406367872),B(2599384905, 2725094297),B(361521006, 2180075438),B(4014407446, 3488120700),B(3211525957, 2790496560),B(2569220766, 2232397248),B(3251759766, 3571835597),B(883420894, 2857468478),B(2424723634, 2285974782),B(443583977, 3657559652),
B(2931847559, 2926047721),B(1486484588, 2340838177),B(3237368801, 3745341083),B(12914663, 2996272867),B(2587312108, 2397018293),B(3280705914, 3835229269),B(3483558190, 3068183415),B(2786846552, 2454546732),B(1022980646, 3927274772),B(3395364895, 3141819817),B(998304997, 2513455854),B(3315274914, 4021529366),B(1793226472, 3217223493),B(3152568096, 2573778794),B(2467128576, 4118046071),B(1114709402, 3294436857),B(3468747899, 2635549485),B(1255029343, 4216879177),B(3581003852, 3373503341),B(2005809622, 2698802673),
B(3322634616, 2159042138),B(162254630, 3454467422),B(2706784082, 2763573937),B(447440347, 2210859150),B(715904555, 3537374640),B(572723644, 2829899712),B(3035159293, 2263919769),B(2279274491, 3622271631),B(964426134, 2897817305),B(771540907, 2318253844),B(2952452370, 3709206150),B(2361961896, 2967364920),B(1889569516, 2373891936),B(1305324308, 3798227098),B(2762246365, 3038581678),B(3927784010, 2430865342),B(2848480580, 3889384548),B(3996771382, 3111507638),B(620436728, 2489206111),B(3569679143, 3982729777),
B(1137756396, 3186183822),B(3487185494, 2548947057),B(2143522954, 4078315292),B(4291798741, 3262652233),B(856458615, 2610121787),B(2229327243, 4176194859),B(2642455254, 3340955887),B(395977285, 2672764710),B(633563656, 4276423536),B(3942824761, 3421138828),B(577279431, 2736911063),B(2179810463, 2189528850),B(3487696741, 3503246160),B(2790157393, 2802596928),B(3950112833, 2242077542),B(2884206696, 3587324068),B(4025352275, 2869859254),B(4079275279, 2295887403),B(1372879692, 3673419846),B(239310294, 2938735877),
B(2768428613, 2350988701),B(2711498862, 3761581922),B(451212171, 3009265538),B(2078956655, 2407412430),B(3326330649, 3851859888),B(84084141, 3081487911),B(3503241150, 2465190328),B(451225085, 3944304526),B(3796953905, 3155443620),B(3037563124, 2524354896),B(3142114080, 4038967834),B(3372684723, 3231174267),B(980160860, 2584939414),B(3286244294, 4135903062),B(911008517, 3308722450),B(728806813, 2646977960),B(1166090902, 4235164736),B(73879262, 3388131789),B(918096869, 2710505431),B(4170451332, 2168404344),B(4095741754, 3469446951),
B(2417599944, 2775557561),B(1075086496, 2220446049),B(3438125312, 3552713678),B(173519872, 2842170943),B(1856802816, 2273736754),B(393904128, 3637978807),B(2892103680, 2910383045),B(2313682944, 2328306436),B(1983905792, 3725290298),B(3305111552, 2980232238),B(67108864, 2384185791),B(2684354560, 3814697265),B(2147483648, 3051757812),B(0, 2441406250),B(0, 3906250000),B(0, 3125000000),B(0, 2500000000),B(0, 4000000000),B(0, 3200000000),B(0, 2560000000),B(0, 4096000000),B(0, 3276800000),B(0, 2621440000),B(0, 4194304000),
B(0, 3355443200),B(0, 2684354560),B(0, 2147483648),B(3435973836, 3435973836),B(1889785610, 2748779069),B(2370821947, 2199023255),B(3793315115, 3518437208),B(457671715, 2814749767),B(2943117749, 2251799813),B(3849994940, 3602879701),B(2221002492, 2882303761),B(917808535, 2305843009),B(3186480574, 3689348814),B(3408177918, 2951479051),B(1867548875, 2361183241),B(1270091283, 3777893186),B(157079567, 3022314549),B(984657113, 2417851639),B(3293438299, 3868562622),B(916763721, 3094850098),B(2451397895, 2475880078),
B(3063243173, 3961408125),B(2450594538, 3169126500),B(1960475630, 2535301200),B(3136761009, 4056481920),B(2509408807, 3245185536),B(1148533586, 2596148429),B(3555640657, 4153837486),B(1985519066, 3323069989),B(2447408712, 2658455991),B(2197867021, 4253529586),B(899300158, 3402823669),B(1578433585, 2722258935),B(1262746868, 2177807148),B(1161401530, 3484491437),B(3506101601, 2787593149),B(3663874740, 2230074519),B(3285219207, 3568119231),B(1769181906, 2854495385),B(1415345525, 2283596308),B(1405559381, 3653754093),
B(2842434423, 2923003274),B(3132940998, 2338402619),B(2435725219, 3741444191),B(1089586716, 2993155353),B(2589656291, 2394524282),B(707476229, 3831238852),B(3142961361, 3064991081),B(1655375629, 2451992865),B(2648601007, 3923188584),B(2977874265, 3138550867),B(664312493, 2510840694),B(2780886908, 4017345110),B(2224709526, 3213876088),B(3497754539, 2571100870),B(1301439967, 4113761393),B(2759138892, 3291009114),B(3066304573, 2632807291),B(3188100398, 4212491666),B(1691486859, 3369993333),B(3071176406, 2695994666),
B(1597947665, 2156795733),B(1697722806, 3450873173),B(3076165163, 2760698538),B(4178919049, 2208558830),B(2391303182, 3533694129),B(2772036005, 2826955303),B(3935615722, 2261564242),B(2861011319, 3618502788),B(4006795973, 2894802230),B(3205436779, 2315841784),B(2551718468, 3705346855),B(2041374775, 2964277484),B(2492093279, 2371421987),B(551375410, 3794275180),B(441100328, 3035420144),B(1211873721, 2428336115),B(1938997954, 3885337784),B(2410191822, 3108270227),B(210166539, 2486616182),B(1195259923, 3978585891),
B(97214479, 3182868713),B(1795758501, 2546294970),B(2873213602, 4074071952),B(580583963, 3259257562),B(3041447548, 2607406049),B(2289335700, 4171849679),B(2690462019, 3337479743),B(3870356534, 2669983794),B(3615590076, 4271974071),B(2033478602, 3417579257),B(4203763259, 2734063405),B(3363010607, 2187250724),B(2803836594, 3499601159),B(3102062734, 2799680927),B(763663269, 2239744742),B(2080854690, 3583591587),B(4241664129, 2866873269),B(4252324763, 2293498615),B(2508752324, 3669597785),B(2007001859, 2935678228),
B(3323588406, 2348542582),B(1881767613, 3757668132),B(4082394468, 3006134505),B(3265915574, 2404907604),B(2648484541, 3847852167),B(400800715, 3078281734),B(1179634031, 2462625387),B(2746407909, 3940200619),B(3056119786, 3152160495),B(2444895829, 2521728396),B(2193846408, 4034765434),B(2614070585, 3227812347),B(373269550, 2582249878),B(4033205117, 4131599804),B(4085557553, 3305279843),B(691465664, 2644223875),B(1106345063, 4230758200),B(885076050, 3384606560),B(708060840, 2707685248),B(2284435591, 2166148198),
B(2796103486, 3465837117),B(518895870, 2772669694),B(1274110155, 2218135755),B(2038576249, 3549017208),B(3348847917, 2839213766),B(1820084875, 2271371013),B(2053142340, 3634193621),B(783520413, 2907354897),B(3203796708, 2325883917),B(1690100896, 3721414268),B(3070067635, 2977131414),B(3315047567, 2381705131),B(3586089190, 3810728210),B(2868871352, 3048582568),B(4013084000, 2438866054),B(3843954022, 3902185687),B(1357176299, 3121748550),B(1085741039, 2497398840),B(1737185663, 3995838144),B(2248741989, 3196670515),
B(1798993591, 2557336412),B(3737383206, 4091738259),B(3848900024, 3273390607),B(1361133101, 2618712486),B(459826043, 4189939978),B(2085847752, 3351951982),B(4245658579, 2681561585),B(2498086431, 4290498537),B(280482227, 3432398830),B(224385781, 2745919064),B(1038502084, 2196735251),B(4238583712, 3514776401),B(2531873511, 2811821121),B(1166505349, 2249456897),B(2725402018, 3599131035),B(2180321615, 2879304828),B(3462244210, 2303443862),B(2103616899, 3685510180),B(1682893519, 2948408144),B(2205308275, 2358726515),
B(3528493240, 3773962424),B(3681788051, 3019169939),B(3804423900, 2415335951),B(74124026, 3864537523),B(1777286139, 3091630018),B(3139815829, 2473304014),B(2446724950, 3957286423),B(3675366878, 3165829138),B(363313125, 2532663311),B(3158281377, 4052261297),B(808638183, 3241809038),B(2364897465, 2593447230),B(3783835944, 4149515568),B(450088378, 3319612455),B(360070702, 2655689964),B(2294100042, 4249103942),B(117293115, 3399283154),B(952827951, 2719426523),B(2480249279, 2175541218),B(3109405388, 3480865949),
B(3346517769, 2784692759),B(3536207675, 2227754207),B(2221958443, 3564406732),B(59579836, 2851525386),B(3483637705, 2281220308),B(419859574, 3649952494),B(1194881118, 2919961995),B(955904894, 2335969596),B(4106428209, 3737551353),B(708162189, 2990041083),B(2284516670, 2392032866),B(1937239754, 3827252586),B(690798344, 3061802069),B(1411632134, 2449441655),B(2258611415, 3919106648),B(3524876050, 3135285318),B(242920462, 2508228255),B(388672740, 4013165208),B(2028925110, 3210532166),B(764146629, 2568425733),B(363641147, 4109481173),
B(2008899836, 3287584938),B(3325106787, 2630067950),B(1025203564, 4208108721),B(4256136688, 3366486976),B(2545915891, 2693189581),B(1177739254, 2154551665),B(1884382806, 3447282664),B(2366499704, 2757826131),B(1034206304, 2206260905),B(1654730086, 3530017448),B(3041770987, 2824013958),B(4151403708, 2259211166),B(629291719, 3614737867),B(3080413753, 2891790293),B(4182317920, 2313432234),B(4114728295, 3701491575),B(3291782636, 2961193260),B(2633426109, 2368954608),B(3354488315, 3790327373),B(106610275, 3032261899),
B(944281679, 2425809519),B(3228837605, 3881295230),B(2583070084, 3105036184),B(2925449526, 2484028947),B(1244745405, 3974446316),B(136802865, 3179557053),B(1827429210, 2543645642),B(3782880196, 4069833027),B(1308317238, 3255866422),B(3623634168, 2604693137),B(2361840832, 4167509020),B(1889472666, 3334007216),B(652584673, 2667205773),B(185142018, 4267529237),B(2725093992, 3414023389),B(3039068653, 2731218711),B(1572261463, 2184974969),B(4233605259, 3495959950),B(3386884207, 2796767960),B(2709507366, 2237414368),
B(3476218326, 3579862989),B(3639968120, 2863890391),B(2052981037, 2291112313),B(2425776200, 3665779701),B(1081627501, 2932623761),B(6308541, 2346099009),B(1728080585, 3753758414),B(2241457927, 3003006731),B(934172882, 2402405385),B(1494676612, 3843848616),B(336747830, 3075078893),B(1987385183, 2460063114),B(602835915, 3936100983),B(2200255650, 3148880786),B(901211061, 2519104629),B(3159924616, 4030567406),B(1668946233, 3224453925),B(1335156987, 2579563140),B(2136251179, 4127301024),B(2567994402, 3301840819),
B(2913388981, 2641472655),B(366455074, 4226356249),B(1152157518, 3381084999),B(1780719474, 2704867999),B(2283569038, 2163894399),B(1076730083, 3462231039),B(1720377526, 2769784831),B(517308561, 2215827865),B(827693699, 3545324584),B(1521148418, 2836259667),B(3793899112, 2269007733),B(916277824, 3630412374),B(1592015718, 2904329899),B(2132606034, 2323463919),B(835189277, 3717542271),B(4104125258, 2974033816),B(2424306747, 2379227053),B(3019897337, 3806763285),B(2415917869, 3045410628),B(3650721214, 2436328502),
B(2405180105, 3898125604),B(2783137543, 3118500483),B(3944496953, 2494800386),B(298240911, 3991680619),B(1097586188, 3193344495),B(878068950, 2554675596),B(3981890698, 4087480953),B(608532181, 3269984763),B(2204812663, 2615987810),B(3527700261, 4185580496),B(1963166749, 3348464397),B(4147513777, 2678771517),B(3200048207, 4286034428),B(4278025484, 3428827542),B(1704433468, 2743062034),B(2222540234, 2194449627),B(120090538, 3511119404),B(955065889, 2808895523),B(2482039630, 2247116418),B(3112269949, 3595386269),
B(3348809418, 2876309015),B(2679047534, 2301047212),B(850502218, 3681675540),B(680401775, 2945340432),B(3121301797, 2356272345),B(699115580, 3770035753),B(2277279382, 3016028602),B(103836587, 2412822882),B(1025131999, 3860516611),B(4256079436, 3088413288),B(827883168, 2470730631),B(3901593088, 3953169009)]);Gc=AMm([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);};
function Jn(){let a=this;C.call(a);a.nW=BM;a.ng=0;a.oR=0;}
let UH=a=>{return;},
ADF=()=>{let a=new Jn();UH(a);return a;};
function IX(){let a=this;C.call(a);a.jA=null;a.kb=0;a.l3=null;a.pv=null;a.qd=null;a.pJ=null;a.kB=null;a.pH=null;a.qp=null;a.pg=null;a.i0=0;a.nv=0;a.oI=0;a.sy=null;a.iN=null;a.iR=null;a.h8=0;a.so=0;a.i2=null;a.lo=null;}
let Ji=0,JZ=null,IU=null,JP=null,AGz=null;
let Hp=()=>{Hp=Bz(IX);AFE();};
let AKb=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;Hp();a.jA=A(59);a.l3=EO(51,0.800000011920929);a.pv=EO(51,0.800000011920929);a.qd=EO(51,0.800000011920929);a.kB=EO(51,0.800000011920929);a.pH=EO(51,0.800000011920929);a.qp=EO(51,0.800000011920929);a.so=0;if(!C$){d=S(1);e=d.data.length;f=new EK;g=0+e|0;f.hE=(-1);f.hF=e;f.hf=e;f.hm=0;f.hf=g;f.kz=0;f.lk=0;f.km=d;}else{h=new Db;d=BF(4);h.hE=(-1);h.hF=4;h.hf=4;h.ib=Cz;h.iy=0;h.h7=d;h.hm=0;h.hf=4;h.jj=1;h.iq=0;h.ib=Df();f=Fd(h);}a.i2=f;if(!C$){d=S(1);e=d.data.length;f=new EK;g
=0+e|0;f.hE=(-1);f.hF=e;f.hf=e;f.hm=0;f.hf=g;f.kz=0;f.lk=0;f.km=d;}else{h=new Db;d=BF(4);h.hE=(-1);h.hF=4;h.hf=4;h.ib=Cz;h.iy=0;h.h7=d;h.hm=0;h.hf=4;h.jj=1;h.iq=0;h.ib=Df();f=Fd(h);}a.lo=f;if(b===null){b=new Bs;b.g$=1;b.g_=1;b.hb=A(419);E(b);}if(c===null){b=new Bs;b.g$=1;b.g_=1;b.hb=A(420);E(b);}f=JZ;if(f!==null&&f.g8.length>0){f=new K;f.g9=G(16);h=JZ;F(f,f.g7,h);F(f,f.g7,b);b=new H;d=f.g9;i=d.data;e=f.g7;j=i.length;if(e>=0&&e<=(j-0|0))b.g8=L(d.data,0,e);else{b=new I;b.g$=1;b.g_=1;Bl(b);E(b);}}f=IU;if(f!==null
&&f.g8.length>0){f=new K;f.g9=G(16);h=IU;F(f,f.g7,h);F(f,f.g7,c);c=new H;d=f.g9;i=d.data;e=f.g7;j=i.length;if(e>=0&&e<=(j-0|0))c.g8=L(d.data,0,e);else{b=new I;b.g$=1;b.g_=1;Bl(b);E(b);}}a.iN=b;a.iR=c;if(!C$){i=Cb(16);k=i.data.length;f=new Hd;l=0+k|0;f.hE=(-1);f.hF=k;f.hf=k;f.hm=0;f.hf=l;f.lY=0;f.mr=0;f.lD=i;}else{f=new Db;d=BF(64);f.hE=(-1);f.hF=64;f.hf=64;f.ib=Cz;f.iy=0;f.h7=d;f.hm=0;f.hf=64;f.jj=1;f.iq=0;f.ib=Df();f=I$(f);}a.sy=f;CH(a,b,c);if(a.kb){XG(a);ACi(a);b=Dc;c=JP;l=Du(c,b);c=l<0?null:c.jF.data[l];if
(c===null){c=new Cy;c.iJ=1;c.hW=R(C,16);}Di(c,a);DE(JP,b,c);}},
X2=(a,b)=>{let c=new IX();AKb(c,a,b);return c;},
CH=(a,b,c)=>{let d;a.nv=Rh(a,35633,b);d=Rh(a,35632,c);a.oI=d;if(a.nv!=(-1)&&d!=(-1)){d=Bx.fZ();if(!d)d=(-1);d=AHt(a,d);a.i0=d;if(d!=(-1)){a.kb=1;return;}a.kb=0;return;}a.kb=0;},
Rh=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=Bx;if(!C$){e=S(1);f=e.data.length;g=new EK;h=0+f|0;g.hE=(-1);g.hF=f;g.hf=f;g.hm=0;g.hf=h;g.kz=0;g.lk=0;g.km=e;}else{g=new Db;e=BF(4);g.hE=(-1);g.hF=4;g.hf=4;g.ib=Cz;g.iy=0;g.h7=e;g.hm=0;g.hf=4;g.jj=1;g.iq=0;g.ib=Df();g=Fd(g);}i=d.f1(b);if(!i)return (-1);d.f2(i,c);d.f3(i);d.c7(i,35713,g);if(DR(g,0))return i;j=d.f4(i);c=new K;c.g9=G(16);d=a.jA;F(c,c.g7,d);d=b!=35633?A(421):A(422);F(c,c.g7,d);d=new H;e=c.g9;k=e.data;i=c.g7;l=k.length;if(i>=0&&i<=(l-0|0)){d.g8=L(e.data,0,i);a.jA
=d;c=new K;c.g9=G(16);F(c,c.g7,d);F(c,c.g7,j);d=new H;e=c.g9;k=e.data;i=c.g7;l=k.length;if(i>=0&&i<=(l-0|0)){d.g8=L(e.data,0,i);a.jA=d;return (-1);}c=new I;c.g$=1;c.g_=1;Bl(c);E(c);}c=new I;c.g$=1;c.g_=1;Bl(c);E(c);},
AHt=(a,b)=>{let c,d,e,f;c=Bx;if(b==(-1))return (-1);c.f5(b,a.nv);c.f5(b,a.oI);c.f6(b);d=new Db;e=BF(4);d.hE=(-1);d.hF=4;d.hf=4;d.ib=Cz;d.iy=0;d.h7=e;d.hm=0;d.hf=4;d.jj=1;d.iq=0;d.ib=Df();f=Fd(d);c.c6(b,35714,f);if(DR(f,0))return b;a.jA=Bx.bY(b);return (-1);},
NW=(a,b,c)=>{let d,e,f,g,h,i;d=a.l3;e=(-2);f=EH(d,b);if(f>=0)e=d.i7.data[f];if(e==(-2)){e=Bx.f7(a.i0,b);if(e==(-1)&&c){if(a.kb){d=new Bs;g=new K;g.g9=G(16);F(g,g.g7,A(423));F(g,g.g7,b);F(g,g.g7,A(424));b=new H;h=g.g9;i=h.data;e=g.g7;f=i.length;if(e>=0&&e<=(f-0|0)){b.g8=L(h.data,0,e);d.g$=1;d.g_=1;d.hb=b;E(d);}b=new I;b.g$=1;b.g_=1;Bl(b);E(b);}b=new CV;d=new K;d.g9=G(16);F(d,d.g7,A(425));if(!a.kb)g=a.jA;else{g=Bx.bY(a.i0);a.jA=g;}F(d,d.g7,g);g=new H;h=d.g9;i=h.data;e=d.g7;f=i.length;if(e>=0&&e<=(f-0|0)){g.g8
=L(h.data,0,e);b.g$=1;b.g_=1;b.hb=g;E(b);}b=new I;b.g$=1;b.g_=1;Bl(b);E(b);}D1(a.l3,b,e);}return e;},
ACi=a=>{let b,c,d,e,f;b=a.i2;b.hm=0;b.hf=b.hF;b.hE=(-1);Bx.c6(a.i0,35718,b);c=DR(a.i2,0);a.pJ=R(H,c);d=0;while(d<c){b=a.i2;b.hm=0;b.hf=b.hF;b.hE=(-1);Qq(b,0,1);b=a.lo;b.hm=0;b.hf=b.hF;b.hE=(-1);e=Bx.c5(a.i0,d,a.i2,b);f=Bx.f7(a.i0,e);D1(a.l3,e,f);D1(a.pv,e,DR(a.lo,0));D1(a.qd,e,DR(a.i2,0));a.pJ.data[d]=e;d=d+1|0;}},
XG=a=>{let b,c,d,e,f;b=a.i2;b.hm=0;b.hf=b.hF;b.hE=(-1);Bx.c6(a.i0,35721,b);c=DR(a.i2,0);a.pg=R(H,c);d=0;while(d<c){b=a.i2;b.hm=0;b.hf=b.hF;b.hE=(-1);Qq(b,0,1);b=a.lo;b.hm=0;b.hf=b.hF;b.hE=(-1);e=Bx.c4(a.i0,d,a.i2,b);f=Bx.f$(a.i0,e);D1(a.kB,e,f);D1(a.pH,e,DR(a.lo,0));D1(a.qp,e,DR(a.i2,0));a.pg.data[d]=e;d=d+1|0;}},
AFE=()=>{let b,c,d,e;Ji=1;JZ=A(59);IU=A(59);JP=DI(51,0.800000011920929);if(!C$){b=S(1);c=b.data.length;d=new EK;e=0+c|0;d.hE=(-1);d.hF=c;d.hf=c;d.hm=0;d.hf=e;d.kz=0;d.lk=0;d.km=b;}else{d=new Db;b=BF(4);d.hE=(-1);d.hF=4;d.hf=4;d.ib=Cz;d.iy=0;d.h7=b;d.hm=0;d.hf=4;d.jj=1;d.iq=0;d.ib=Df();d=Fd(d);}AGz=d;};
function N5(){let a=this;C.call(a);a.iT=null;a.kr=null;a.o6=0;a.qo=0;a.lC=null;a.mQ=0;a.sb=null;}
let JL=null;
let ACD=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;if(!e)return;if(f){g=null;h=null;a.iT.f_(b,g);g=a.lC;if(g!==null&&g.ga()>0)a.lC.f_(b,h);g=a.kr;if(g.jS.hf>0)AIW(g);}if(a.qo){h=a.kr;g=h.jS;if(g.hf<=0)Bx.gc(c,d,e);else{h.l0=h.l0|0;i=g.hm;Cu(g,d);Bx.gd(c,e,5123,g);Cu(g,i);}}else{j=0;if(a.mQ)j=a.lC.ga();g=a.kr.jS;if(g.hf<=0){if(a.mQ&&j>0)En.ge(c,d,e,j);else Bx.gc(c,d,e);}else{if((e+d|0)>g.hF){b=new Bf;g=new K;g.g9=G(16);F(g,g.g7,A(426));J(g,g.g7,e,10);F(g,g.g7,A(427));J(g,g.g7,d,10);F(g,g.g7,A(428));e=a.kr.jS.hF;J(g,g.g7,
e,10);F(g,g.g7,A(417));h=new H;k=g.g9;l=k.data;d=g.g7;e=l.length;if(d>=0&&d<=(e-0|0)){h.g8=L(k.data,0,d);b.g$=1;b.g_=1;b.hb=h;E(b);}b=new I;b.g$=1;b.g_=1;Bl(b);E(b);}if(a.mQ&&j>0)En.gf(c,e,5123,d*2|0,j);else Bx.gg(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.iT.gh(b,g);g=a.lC;if(g!==null&&g.ga()>0)a.lC.gh(b,h);b=a.kr;if(b.jS.hf>0){Bx.gi(34963,0);b.nF=0;}}},
AKe=()=>{let b,c,d,e;b=new GG;c=Hk(16);b.kk=0;d=R(Ep,c);e=d.data;b.jI=d;b.mX=0.75;b.kZ=e.length*0.75|0;JL=b;};
function Lt(){let a=this;C.call(a);a.is=null;a.i_=0;a.ri=BM;a.rX=0;a.sd=0;}
let ACr=(a,b)=>{let c,d,e,f,g,h;b=b.data;a.ri=O(-1);a.rX=(-1);a.sd=(-1);c=b.length;if(!c){d=new Bs;d.g$=1;d.g_=1;d.hb=A(429);E(d);}e=R(Et,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.is=e;c=0;h=0;while(h<f.length){a:{b:{d=f[h];d.kq=c;switch(d.j0){case 5120:case 5121:break;case 5122:case 5123:g=2*d.jp|0;break a;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break b;case 5126:case 5132:g=4*d.jp|0;break a;default:break b;}g=d.jp;break a;}g=0;}c=c+g|0;h=h+1|0;}a.i_=c;},
YX=a=>{let b=new Lt();ACr(b,a);return b;};
let JO=D(0);
let Qk=D(0);
function Ln(){let a=this;C.call(a);a.q0=null;a.qw=null;a.rZ=0;a.sq=0;}
let AFi=a=>{let b,c;if(!a.rZ){b=a.q0;b.pd=null;if(BE!==b)BE=b;BE.j4=CZ();c=a.qw;b=null;c.kF.e(b);}};
function Pq(){let a=this;C.call(a);a.nc=0;a.kg=null;a.i7=null;a.pf=0.0;a.np=0;a.mT=0;a.mN=0;}
let Y3=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.pf=c;d=G8(b,c);a.np=d*c|0;b=d-1|0;a.mN=b;a.mT=DV(O(b));a.kg=R(C,d);a.i7=S(d);return;}e=new Bs;f=new K;f.g9=G(16);F(f,f.g7,A(40));GS(f,f.g7,c);g=new H;h=f.g9;i=h.data;d=f.g7;j=i.length;if(d>=0&&d<=(j-0|0)){g.g8=L(h.data,0,d);e.g$=1;e.g_=1;e.hb=g;E(e);}f=new I;f.g$=1;f.g_=1;Bl(f);E(f);},
EO=(a,b)=>{let c=new Pq();Y3(c,a,b);return c;},
EH=(a,b)=>{let c,d,e,f,g,h;if(b===null){c=new Bs;c.g$=1;c.g_=1;c.hb=A(41);E(c);}a:{d=a.kg;if(!b.h5){e=0;while(true){if(e>=b.g8.length)break a;b.h5=(31*b.h5|0)+b.g8.charCodeAt(e)|0;e=e+1|0;}}}f=Bd(X(U(O(b.h5),B(2135587861, 2654435769)),a.mT));while(true){c=d.data[f];if(c===null)return  -(f+1|0)|0;if(c===b)g=1;else if(!(b instanceof H))g=0;else{h=b;g=c.g8!==h.g8?0:1;}if(g)break;f=(f+1|0)&a.mN;}return f;},
D1=(a,b,c)=>{let d,e;d=EH(a,b);if(d>=0){a.i7.data[d]=c;return;}d= -(d+1|0)|0;e=a.kg.data;e[d]=b;a.i7.data[d]=c;c=a.nc+1|0;a.nc=c;if(c>=a.np)AHw(a,e.length<<1);},
AHw=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.kg.data.length;a.np=b*a.pf|0;d=b-1|0;a.mN=d;a.mT=DV(O(d));e=a.kg;f=a.i7;a.kg=R(C,b);a.i7=S(b);if(a.nc>0){g=0;while(true){if(g>=c)break a;h=e.data[g];if(h!==null){b:{i=f.data[g];j=a.kg;if(!h.h5){k=0;while(true){if(k>=h.g8.length)break b;h.h5=(31*h.h5|0)+h.g8.charCodeAt(k)|0;k=k+1|0;}}}b=Bd(X(U(O(h.h5),B(2135587861, 2654435769)),a.mT));while(true){l=j.data;if(l[b]===null)break;b=(b+1|0)&a.mN;}l[b]=h;a.i7.data[b]=i;}g=g+1|0;}}}};
let AFz=D();
let K1=D(0);
function NJ(){let a=this;C.call(a);a.jS=null;a.o2=0;a.rL=0;a.l0=0;a.nF=0;a.pR=0;}
let AIW=a=>{let b,c,d;b=a.o2;if(!b){c=new Bf;c.g$=1;c.g_=1;c.hb=A(430);E(c);}Bx.gi(34963,b);if(a.l0){c=Bx;d=a.jS;c.c3(34963,d.hf,d,a.pR);a.l0=0;}a.nF=1;};
function PI(){let a=this;C.call(a);a.nA=0;a.nq=0;a.oY=0;}
function DG(){let a=this;C.call(a);a.hF=0;a.hm=0;a.hf=0;a.hE=0;}
let AG_=(a,b)=>{a.hE=(-1);a.hF=b;a.hf=b;},
Cu=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.hf){a.hm=b;if(b<a.hE)a.hE=0;return a;}c=new Bs;d=a.hf;e=new K;e.g9=G(16);F(e,e.g7,A(431));J(e,e.g7,b,10);F(e,e.g7,A(432));J(e,e.g7,d,10);d=e.g7;Bn(e,d,d+1|0);f=e.g9;g=f.data;g[d]=93;h=new H;d=e.g7;i=g.length;if(d>=0&&d<=(i-0|0)){h.g8=L(f.data,0,d);c.g$=1;c.g_=1;c.hb=h;E(c);}c=new I;c.g$=1;c.g_=1;Bl(c);E(c);},
Dt=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.hF){if(a.hE>b)a.hE=(-1);a.hf=b;if(a.hm>b)a.hm=b;return a;}c=new Bs;d=a.hF;e=new K;e.g9=G(16);F(e,e.g7,A(433));J(e,e.g7,b,10);F(e,e.g7,A(432));J(e,e.g7,d,10);d=e.g7;Bn(e,d,d+1|0);f=e.g9;g=f.data;g[d]=93;h=new H;d=e.g7;i=g.length;if(d>=0&&d<=(i-0|0)){h.g8=L(f.data,0,d);c.g$=1;c.g_=1;c.hb=h;E(c);}c=new I;c.g$=1;c.g_=1;Bl(c);E(c);};
let Gn=D(DG);
let AK1=(a,b)=>{Cu(a,b);return a;},
ALS=a=>{a.hm=0;a.hf=a.hF;a.hE=(-1);return a;};
function EF(){let a=this;DG.call(a);a.iy=0;a.h7=null;a.ib=null;}
function FE(){C.call(this);this.mE=null;}
let Cz=null,Hq=null,I1=null;
let Df=()=>{let b;if(I1===null){b=new ArrayBuffer(2);new Int16Array(b)[0]=1;I1=(new Int8Array(b))[0]?Hq:Cz;}return I1;},
AMo=()=>{let b;b=new FE;b.mE=A(4);Cz=b;b=new FE;b.mE=A(5);Hq=b;};
let E2=D(DG);
let Oo=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.gj()){e=new Hs;e.g$=1;e.g_=1;E(e);}f=a.hf;g=a.hm;if((f-g|0)<d){e=new IA;e.g$=1;e.g_=1;E(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new I;j=new K;j.g9=G(16);F(j,j.g7,A(434));J(j,j.g7,i,10);F(j,j.g7,A(435));J(j,j.g7,f,10);k=new H;b=j.g9;h=b.data;d=j.g7;f=h.length;if(d>=0&&d<=(f-0|0)){k.g8=L(b.data,0,d);e.g$=1;e.g_=1;e.hb=k;E(e);}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.gk(g,h[c]);i=i+1|0;g=l;c=f;}a.hm=a.hm+d|0;return a;}e
=new I;j=new K;j.g9=G(16);F(j,j.g7,A(436));J(j,j.g7,d,10);F(j,j.g7,A(437));k=new H;b=j.g9;h=b.data;d=j.g7;f=h.length;if(d>=0&&d<=(f-0|0)){k.g8=L(b.data,0,d);e.g$=1;e.g_=1;e.hb=k;E(e);}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);}}b=b.data;e=new I;d=b.length;j=new K;j.g9=G(16);F(j,j.g7,A(438));J(j,j.g7,c,10);F(j,j.g7,A(432));J(j,j.g7,d,10);d=j.g7;Bn(j,d,d+1|0);b=j.g9;h=b.data;h[d]=41;k=new H;d=j.g7;f=h.length;if(d>=0&&d<=(f-0|0)){k.g8=L(b.data,0,d);e.g$=1;e.g_=1;e.hb=k;E(e);}e=new I;e.g$=1;e.g_=1;Bl(e);E(e);},
ALt=(a,b)=>{Dt(a,b);return a;},
ALT=(a,b)=>{Cu(a,b);return a;},
ALY=(a,b)=>{Dt(a,b);return a;},
AMf=(a,b)=>{Cu(a,b);return a;};
let Jf=D(0);
function Nx(){let a=this;C.call(a);a.jo=null;a.kC=null;a.pQ=0;a.su=0;a.nI=0;a.lT=0;a.l7=0;}
let ADd=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.lT=0;a.l7=0;a.su=b;a.jo=d;c=CB(d.i_/4|0,c);if(!C$){e=Cb(c);f=e.data.length;d=new Hd;g=0+f|0;d.hE=(-1);d.hF=f;d.hf=f;d.hm=0;d.hf=g;d.lY=0;d.mr=0;d.lD=e;}else{c=c*4|0;if(c<0){d=new Bs;h=new K;h.g9=G(16);Cw(h,h.g7,A(439));J(h,h.g7,c,10);i=new H;e=h.g9;j=e.data;c=h.g7;k=j.length;if(c>=0&&c<=(k-0|0)){i.g8=L(e.data,0,c);d.g$=1;d.g_=1;d.hb=i;E(d);}d=new I;E4(d);E(d);}h=new Db;e=BF(c);h.hE=(-1);h.hF=c;h.hf=c;h.ib=Cz;h.iy=0;h.h7=e;h.hm=0;h.hf=c;h.jj=1;h.iq=0;h.ib=Df();d=I$(h);}a.kC
=d;d.hf=d.hm;d.hm=0;d.hE=(-1);d=Bx;h=d.hg.createBuffer();k=d.ju;d.ju=k+1|0;Cd(d.jT,k,Ce(h));a.pQ=k;a.nI=!b?35048:35044;},
ABH=(a,b,c)=>{let d=new Nx();ADd(d,a,b,c);return d;},
Ym=a=>{return a.jo;},
AFO=a=>{return a.kC.hf/(a.jo.i_/4|0)|0;},
ADQ=(a,b,c,d)=>{let e,f,g;a.lT=1;e=a.kC;f=null;g=e instanceof EF;if(g)f=e.fV();else if(e instanceof E2)f=e;if(f===null){f=new Bf;f.g$=1;f.g_=1;f.hb=A(440);E(f);}f.hm=0;f.hf=f.hF;f.hE=(-1);Cu(e,0);Oo(f,b,c,d);Cu(e,0);if(!g)Dt(e,d);else Dt(e,d<<2);Cu(a.kC,0);Dt(a.kC,d);if(a.l7){e=Bx;f=a.kC;e.c3(34962,f.hf,f,a.nI);a.lT=0;}},
Xj=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=Bx;d.gi(34962,a.pQ);if(a.lT){e=a.kC;d.c3(34962,e.hf,e,a.nI);a.lT=0;}a:{f=a.jo.is.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.jo.is.data[g];j=h[g];if(j>=0){e=Bx;if(b.h8){CH(b,b.iN,b.iR);b.h8=0;}e.gn(j);k=i.jp;l=i.j0;m=i.kh;n=a.jo.i_;o=i.kq;e=Bx;if(b.h8){CH(b,b.iN,b.iR);b.h8=0;}e.go(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.jo.is.data[g];d=i.j$;e=b.kB;p=(-1);j=EH(e,d);if(j>=0)p=e.i7.data[j];if(p>=0){e=Bx;if(b.h8){CH(b,b.iN,b.iR);b.h8=0;}e.gn(p);j
=i.jp;k=i.j0;l=i.kh;m=a.jo.i_;n=i.kq;e=Bx;if(b.h8){CH(b,b.iN,b.iR);b.h8=0;}e.go(p,j,k,l,m,n);}g=g+1|0;}}a.l7=1;},
TK=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Bx;e=a.jo.is.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Bx;if(b.h8){CH(b,b.iN,b.iR);b.h8=0;}h.gp(g);}f=f+1|0;}}i=0;while(i<e){j=a.jo.is.data[i].j$;k=Bx;if(b.h8){CH(b,b.iN,b.iR);b.h8=0;}l=Bx;h=b.kB;g=(-2);f=EH(h,j);if(f>=0)g=h.i7.data[f];if(g==(-2)){g=l.f$(b.i0,j);D1(b.kB,j,g);}if(g!=(-1))k.gp(g);i=i+1|0;}}d.gi(34962,0);a.l7=0;};
function Im(){let a=this;C.call(a);a.jR=null;a.j_=null;a.ob=0;a.sx=0;a.n1=0;a.lN=0;a.mW=0;a.ns=0;a.jz=null;}
let Je=null;
let Ir=()=>{Ir=Bz(Im);AKw();};
let V5=(a,b,c,d)=>{let e,f,g,h,i,j;Ir();a.lN=0;a.mW=0;a.ns=(-1);e=new GV;e.nn=1;e.jB=S(16);a.jz=e;a.sx=b;a.jR=d;c=CB(d.i_/4|0,c);if(!C$){f=Cb(c);g=f.data.length;d=new Hd;h=0+g|0;d.hE=(-1);d.hF=g;d.hf=g;d.hm=0;d.hf=h;d.lY=0;d.mr=0;d.lD=f;}else{c=c*4|0;if(c<0){d=new Bs;e=new K;e.g9=G(16);Cw(e,e.g7,A(439));J(e,e.g7,c,10);i=new H;f=e.g9;j=f.data;c=e.g7;g=j.length;if(c>=0&&c<=(g-0|0)){i.g8=L(f.data,0,c);d.g$=1;d.g_=1;d.hb=i;E(d);}d=new I;E4(d);E(d);}e=new Db;f=BF(c);e.hE=(-1);e.hF=c;e.hf=c;e.ib=Cz;e.iy=0;e.h7=f;e.hm
=0;e.hf=c;e.jj=1;e.iq=0;e.ib=Df();d=I$(e);}a.j_=d;d.hf=d.hm;d.hm=0;d.hE=(-1);d=Bx;e=d.hg.createBuffer();g=d.ju;d.ju=g+1|0;Cd(d.jT,g,Ce(e));a.ob=g;a.n1=!b?35048:35044;d=Je;d.hm=0;d.hf=d.hF;d.hE=(-1);En.gq(1,d);d=Je;c=d.hm;if(c<d.hf){d.hm=c+1|0;a.ns=d.gr(c);return;}d=new JR;d.g$=1;d.g_=1;E(d);},
AAW=(a,b,c)=>{let d=new Im();V5(d,a,b,c);return d;},
TY=a=>{return a.jR;},
ADg=a=>{return (a.j_.hf*4|0)/a.jR.i_|0;},
T$=(a,b,c,d)=>{let e,f,g;a.lN=1;e=a.j_;f=null;g=e instanceof EF;if(g)f=e.fV();else if(e instanceof E2)f=e;if(f===null){f=new Bf;f.g$=1;f.g_=1;f.hb=A(440);E(f);}f.hm=0;f.hf=f.hF;f.hE=(-1);Cu(e,0);Oo(f,b,c,d);Cu(e,0);if(!g)Dt(e,d);else Dt(e,d<<2);Cu(a.j_,0);Dt(a.j_,d);if(a.mW){e=Bx;f=a.j_;e.c3(34962,f.hf,f,a.n1);a.lN=0;}},
AHo=(a,b,c)=>{let d;d=En;d.gs(a.ns);AGF(a,b,c);if(a.lN){d.gi(34962,a.ob);b=a.j_;Dt(b,b.hf);b=a.j_;d.c3(34962,b.hf,b,a.n1);a.lN=0;}a.mW=1;},
AGF=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.jz;e=d.iL;f=!e?0:1;a:{g=a.jR.is.data.length;if(f){if(c===null){e=0;b:{while(true){if(!f)break b;if(e>=g)break b;d=a.jR.is.data[e].j$;h=b.kB;i=(-1);f=EH(h,d);if(f>=0)i=h.i7.data[f];d=a.jz;if(e>=d.iL)break;f=i!=d.jB.data[e]?0:1;e=e+1|0;}h=new I;b=new K;b.g9=G(16);F(b,b.g7,A(76));J(b,b.g7,e,10);F(b,b.g7,A(77));e=d.iL;J(b,b.g7,e,10);d=new H;c=b.g9;j=c.data;f=b.g7;g=j.length;if(f>=0&&f<=(g-0|0)){d.g8=L(c.data,0,f);h.g$=1;h.g_=1;h.hb=d;E(h);}b=new I;Y(b);E(b);}}else
{j=c.data;f=j.length!=e?0:1;i=0;while(true){if(!f)break a;if(i>=g)break a;f=j[i];if(i>=e)break;f=f!=d.jB.data[i]?0:1;i=i+1|0;}h=new I;b=new K;b.g9=G(16);F(b,b.g7,A(76));J(b,b.g7,i,10);F(b,b.g7,A(77));e=d.iL;J(b,b.g7,e,10);d=new H;c=b.g9;j=c.data;f=b.g7;g=j.length;if(f>=0&&f<=(g-0|0)){d.g8=L(c.data,0,f);h.g$=1;h.g_=1;h.hb=d;E(h);}b=new I;Y(b);E(b);}}}c:{if(!f){d:{D0.gi(34962,a.ob);if(a.jz.iL){k=a.jR.is.data.length;e=0;while(true){if(e>=k)break d;d=a.jz;if(e>=d.iL)break;i=d.jB.data[e];if(i>=0){d=Bx;if(b.h8){CH(b,
b.iN,b.iR);b.h8=0;}d.gp(i);}e=e+1|0;}h=new I;b=new K;b.g9=G(16);F(b,b.g7,A(76));J(b,b.g7,e,10);F(b,b.g7,A(77));e=d.iL;J(b,b.g7,e,10);d=new H;c=b.g9;j=c.data;f=b.g7;g=j.length;if(f>=0&&f<=(g-0|0)){d.g8=L(c.data,0,f);h.g$=1;h.g_=1;h.hb=d;E(h);}b=new I;E4(b);E(b);}}a.jz.iL=0;e=0;while(true){if(e>=g)break c;h=a.jR.is.data[e];if(c!==null){j=c.data;NC(a.jz,j[e]);}else{l=a.jz;m=h.j$;d=b.kB;i=(-1);f=EH(d,m);if(f>=0)i=d.i7.data[f];NC(l,i);}d=a.jz;if(e>=d.iL){h=new I;b=new K;b.g9=G(16);F(b,b.g7,A(76));J(b,b.g7,e,10);F(b,
b.g7,A(77));e=d.iL;J(b,b.g7,e,10);d=new H;c=b.g9;j=c.data;f=b.g7;g=j.length;if(f>=0&&f<=(g-0|0)){d.g8=L(c.data,0,f);h.g$=1;h.g_=1;h.hb=d;E(h);}b=new I;Y(b);E(b);}n=d.jB.data[e];if(n>=0){d=Bx;if(b.h8){CH(b,b.iN,b.iR);b.h8=0;}d.gn(n);f=h.jp;i=h.j0;k=h.kh;o=a.jR.i_;p=h.kq;d=Bx;if(b.h8){CH(b,b.iN,b.iR);b.h8=0;}d.go(n,f,i,k,o,p);}e=e+1|0;}}}},
WE=(a,b,c)=>{En.gs(0);a.mW=0;},
AKw=()=>{let b,c,d,e;if(!C$){b=S(1);c=b.data.length;d=new EK;e=0+c|0;d.hE=(-1);d.hF=c;d.hf=c;d.hm=0;d.hf=e;d.kz=0;d.lk=0;d.km=b;}else{d=new Db;b=BF(4);d.hE=(-1);d.hF=4;d.hf=4;d.ib=Cz;d.iy=0;d.h7=b;d.hm=0;d.hf=4;d.jj=1;d.iq=0;d.ib=Df();d=Fd(d);}Je=d;};
let Gr=D(DG);
let AL3=(a,b)=>{Cu(a,b);return a;},
AK3=(a,b)=>{Cu(a,b);return a;};
let Dv=D(0);
function Db(){let a=this;EF.call(a);a.jj=0;a.iq=0;}
let AKm=a=>{let b,c,d,e,f,g;b=a.hf;c=a.hm;d=(b-c|0)/2|0;if(a.ib!==Cz){e=new KY;f=a.iy+c|0;c=a.iq;e.hE=(-1);e.hF=d;e.hf=d;e.hm=0;e.hf=d;e.mv=f;e.lg=a;e.o9=c;return e;}e=new Mr;b=a.iy+c|0;g=a.iq;e.hE=(-1);e.hF=d;e.hf=d;e.hm=0;e.hf=d;e.mv=b;e.lg=a;e.o9=g;return e;},
Fd=a=>{let b,c,d,e,f,g;b=a.hf;c=a.hm;d=(b-c|0)/4|0;if(a.ib!==Cz){e=new Li;f=a.iy+c|0;c=a.iq;e.hE=(-1);e.hF=d;e.hf=d;e.hm=0;e.hf=d;e.kP=f;e.kO=a;e.nS=c;return e;}e=new Om;b=a.iy+c|0;g=a.iq;e.hE=(-1);e.hF=d;e.hf=d;e.hm=0;e.hf=d;e.kP=b;e.kO=a;e.nS=g;return e;},
I$=a=>{let b,c,d,e,f,g;b=a.hf;c=a.hm;d=(b-c|0)/4|0;if(a.ib!==Hq){e=new K7;f=a.iy+c|0;c=a.iq;e.hE=(-1);e.hF=d;e.hf=d;e.hm=0;e.hf=d;e.kH=f;e.kc=a;e.os=c;return e;}e=new M8;b=a.iy+c|0;g=a.iq;e.hE=(-1);e.hF=d;e.hf=d;e.hm=0;e.hf=d;e.kH=b;e.kc=a;e.os=g;return e;};
let ACH=D();
let FH=D(Gn);
let AL8=a=>{let b,c;b=a.hm;if(b<a.hf){a.hm=b+1|0;return a.gr(b);}c=new JR;c.g$=1;c.g_=1;E(c);},
Dh=(a,b)=>{let c,d;if(a.gj()){c=new Hs;c.g$=1;c.g_=1;E(c);}d=a.hm;if(d<a.hf){a.hm=d+1|0;a.gv(d,b);return a;}c=new IA;c.g$=1;c.g_=1;E(c);},
DR=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.hf)return a.gr(b);c=new I;d=a.hf;e=new K;e.g9=G(16);F(e,e.g7,A(441));J(e,e.g7,b,10);F(e,e.g7,A(432));J(e,e.g7,d,10);d=e.g7;Bn(e,d,d+1|0);f=e.g9;g=f.data;g[d]=41;h=new H;d=e.g7;i=g.length;if(d>=0&&d<=(i-0|0)){h.g8=L(f.data,0,d);c.g$=1;c.g_=1;c.hb=h;E(c);}c=new I;c.g$=1;c.g_=1;Bl(c);E(c);},
Qq=(a,b,c)=>{let d,e,f,g,h,i;if(a.gj()){d=new Hs;d.g$=1;d.g_=1;E(d);}if(b>=0&&b<a.hf){a.gv(b,c);return a;}d=new I;c=a.hf;e=new K;e.g9=G(16);F(e,e.g7,A(441));J(e,e.g7,b,10);F(e,e.g7,A(432));J(e,e.g7,c,10);c=e.g7;Bn(e,c,c+1|0);f=e.g9;g=f.data;g[c]=41;h=new H;c=e.g7;i=g.length;if(c>=0&&c<=(i-0|0)){h.g8=L(f.data,0,c);d.g$=1;d.g_=1;d.hb=h;E(d);}d=new I;d.g$=1;d.g_=1;Bl(d);E(d);},
ALL=a=>{return a.gj();};
function EK(){let a=this;FH.call(a);a.lk=0;a.kz=0;a.km=null;}
let ADK=(a,b)=>{return a.km.data[b+a.kz|0];},
ABK=(a,b,c)=>{a.km.data[b+a.kz|0]=c;},
RI=a=>{return a.lk;};
let Fy=D(E2);
let AAe=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.hf)return a.gw(b);c=new I;d=a.hf;e=new K;e.g9=G(16);F(e,e.g7,A(441));J(e,e.g7,b,10);F(e,e.g7,A(432));J(e,e.g7,d,10);d=e.g7;Bn(e,d,d+1|0);f=e.g9;g=f.data;g[d]=41;h=new H;d=e.g7;i=g.length;if(d>=0&&d<=(i-0|0)){h.g8=L(f.data,0,d);c.g$=1;c.g_=1;c.hb=h;E(c);}c=new I;c.g$=1;c.g_=1;Bl(c);E(c);},
ALe=a=>{return a.gj();};
function Hd(){let a=this;Fy.call(a);a.mr=0;a.lY=0;a.lD=null;}
let AE0=(a,b)=>{return a.lD.data[b+a.lY|0];},
ADY=(a,b,c)=>{a.lD.data[b+a.lY|0]=c;},
AEg=a=>{return a.mr;};
let F7=D(Gr);
let AFA=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.hf)return a.gx(b);c=new I;d=a.hf;e=new K;e.g9=G(16);F(e,e.g7,A(441));J(e,e.g7,b,10);F(e,e.g7,A(432));J(e,e.g7,d,10);d=e.g7;Bn(e,d,d+1|0);f=e.g9;g=f.data;g[d]=41;h=new H;d=e.g7;i=g.length;if(d>=0&&d<=(i-0|0)){h.g8=L(f.data,0,d);c.g$=1;c.g_=1;c.hb=h;E(c);}c=new I;c.g$=1;c.g_=1;Bl(c);E(c);};
function Qx(){let a=this;F7.call(a);a.q3=0;a.qh=0;a.pp=null;}
let X6=(a,b)=>{return a.pp.data[b+a.qh|0];};
function F2(){let a=this;FH.call(a);a.kO=null;a.nS=0;a.kP=0;}
let ABe=a=>{return a.nS;};
let Li=D(F2);
let XZ=(a,b)=>{let c;c=a.kO.h7.data;b=a.kP+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;},
RH=(a,b,c)=>{let d;d=a.kO.h7.data;b=a.kP+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;};
let Om=D(F2);
let AHm=(a,b)=>{let c;c=a.kO.h7.data;b=a.kP+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;},
TL=(a,b,c)=>{let d;d=a.kO.h7.data;b=a.kP+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;};
function FA(){let a=this;Fy.call(a);a.kc=null;a.os=0;a.kH=0;}
let AEs=a=>{return a.os;},
AFx=a=>{return a.kc.h7.data;};
let K7=D(FA);
let ABn=(a,b)=>{let c;c=a.kc.h7.data;b=a.kH+(b*4|0)|0;return Ih((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);},
AFr=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:In(c);e=a.kc.h7.data;b=a.kH+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;};
let M8=D(FA);
let RR=(a,b)=>{let c;c=a.kc.h7.data;b=a.kH+(b*4|0)|0;return Ih(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);},
ABb=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:In(c);e=a.kc.h7.data;b=a.kH+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;};
let Is=D(BA);
let Hs=D(Is);
let JR=D(BA);
let PO=D();
let M2=null;
let J9=()=>{J9=Bz(PO);SP();};
let ABl=(b,c,d,e)=>{J9();a:{b:{if(M2===Js){if(Cl.h6.width!=Cl.h6.width)break b;if(Cl.h6.height!=Cl.h6.height)break b;}D0.b1(b,c,d,e);break a;}D0.b1(CB(b,Cl.h6.width)/Cl.h6.width|0,CB(c,Cl.h6.height)/Cl.h6.height|0,CB(d,Cl.h6.width)/Cl.h6.width|0,CB(e,Cl.h6.height)/Cl.h6.height|0);}},
SP=()=>{M2=Js;};
let AI4=D();
let Ha=null,I8=null,JI=null,Iz=null;
let AAn=()=>{let b,c,d,e,f;Ha=Cb(16385);I8=ABM(16385);JI=Cb(16385);Iz=ABM(16385);b=0;while(b<16384){c=b/16384.0*6.283185307179586;d=Ha.data;e=I8.data;f=Qc(c);e[b]=f;d[b]=f;d=JI.data;e=Iz.data;c=Tn(c);e[b]=c;d[b]=c;b=b+1|0;}e=Ha.data;e[0]=0.0;e[16384]=0.0;e[4096]=1.0;e[8192]=0.0;e[12288]=(-1.0);e=I8.data;e[0]=0.0;e[16384]=0.0;e[4096]=1.0;e[8192]=0.0;e[12288]=(-1.0);e=JI.data;e[0]=1.0;e[16384]=1.0;e[4096]=0.0;e[8192]=(-1.0);e[12288]=0.0;e=Iz.data;e[0]=1.0;e[16384]=1.0;e[4096]=0.0;e[8192]=(-1.0);e[12288]=0.0;};
let XW=D();
function Fq(){let a=this;F7.call(a);a.lg=null;a.o9=0;a.mv=0;}
let AFZ=a=>{return a.lg.h7.data;};
let KY=D(Fq);
let VP=(a,b)=>{let c;c=a.lg.h7.data;b=a.mv+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;};
let Mr=D(Fq);
let ADx=(a,b)=>{let c;c=a.lg.h7.data;b=a.mv+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;};
let G2=D(BR);
let Js=null,ACg=null,WR=null;
let Ug=()=>{let b,c;b=new G2;b.hw=A(442);b.hl=0;Js=b;c=new G2;c.hw=A(443);c.hl=1;ACg=c;WR=P(G2,[b,c]);};
let WV=D();
let IS=0,GO=null,GK=null;
let ACQ=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=(isNaN(b)?1:0)?2143289344:In(b);c.oY=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.nA=0;c.nq=0;return;}if(f)d=e|8388608;else{d=e<<1;while(C6(Ci(O(d),O(8388608)),BM)){d=d<<1;f=f+(-1)|0;}}g=GK;h=AEv(g,0,g.data.length,f);if(h<0)h= -h|0;g=GK.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=GO.data[e];j=Ci(O(d),B(4294967295, 0));k=Bd(X(U(j,Ci(O(e),B(4294967295, 0))),32-i|0));if(k<IS){while(DN(k,IS)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g=GK.data;e=h+1|0;i=9+(f-g[e]|0)|
0;k=Bd(X(U(j,Ci(O(GO.data[e]),B(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=GO.data;f=h+1|0;e=g[f];m=i-1|0;n=U(Ci(O(l),B(4294967295, 0)),Ci(O(e),B(4294967295, 0)));e=32-m|0;o=Bd(X(n,e));p=Bd(X(U(Ci(O(d-1|0),B(4294967295, 0)),Ci(O(g[f]),B(4294967295, 0))),e));q=1;while(true){r=q*10|0;if(DN(C8(k,r),C8(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if(DN(C8(k,l),C8(o,l))>=0)break;m=l;}s=DN(q,m);d=s>0?CB(C8(k,q),q):s<0?CB(C8(k,m),m)+m|0:CB(C8((k+(m/2|0)|0),m),m);if(DU(O(d),O(1000000000))>=0)while(true){h=h+1|0;d=
C8(d,10);if(DN(d,1000000000)<0)break;}else if(DN(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.nA=d;c.nq=h-50|0;},
Xk=()=>{IS=C8((-1),10);GO=Gk([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),(-742253618),
(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),(-1272652747),
(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);GK=Gk([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,79,82,85,89,92,
95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);};
let AFd=D(0);
let IA=D(BA);
function JB(){let a=this;C.call(a);a.k3=null;a.jy=null;}
let AHX=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.k3.readyState==4){if(a.k3.status==200){if(a.jy.jk.iF){if(BH===null){b=new Ck;c=new B5;c.h9=BF(32);b.ij=c;c=new K;BB(c);c.g9=G(16);b.h_=c;b.h$=G(32);b.id=0;b.ie=BX;BH=b;}b=a.jy.jf;c=new K;c.g9=G(16);F(c,c.g7,A(444));d=c.g7;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.g9;f=e.data;g
=c.g7;h=f.length;if(g>=0&&g<=(h-0|0)){b.g8=L(e.data,0,g);BI(Br(b));BI("\n");}else{b=new I;b.g$=1;b.g_=1;Bl(b);E(b);}}b=a.jy;b.jt.gA(b.jf,V(a.k3.responseText));}else if(a.k3.status!=404&&a.k3.status!=403){try{i=O(100);$p=1;continue _;}catch($$e){$$je=BP($$e);if($$je instanceof CT){}else{throw $$e;}}b=a.jy;c=b.jk;d=b.ki;j=b.jf;b=b.jt;if(c.iF){if(BH===null){k=new Ck;l=new B5;l.h9=BF(32);BB(k);k.ij=l;l=new K;Dp(l,16);k.h_=l;k.h$=G(32);k.id=0;k.ie=BX;BH=k;}k=new K;k.g9=G(16);F(k,k.g7,A(71));F(k,k.g7,j===null?A(2)
:j);l=new H;e=k.g9;f=e.data;h=k.g7;m=f.length;if(h>=0&&h<=(m-0|0)){l.g8=L(e.data,0,h);BI(Br(l));BI("\n");}else{b=new I;Y(b);E(b);}}c.hM=c.hM+1|0;k=new Fh;k.jk=c;k.ki=d;k.jf=j;k.jt=b;b=null;c=null;k.iO=new C;k.iM=1;k.jc=c;k.js=b;g=B9;B9=g+1|0;k.jq=O(g);b=new Dj;b.jd=k;Dz(b);}else{b=a.jy;b.jt.gB(b.jf);}b=a.jy.jk;b.hM=b.hM-1|0;}return;case 1:a:{try{Ie(i);if(Ee()){break _;}break a;}catch($$e){$$je=BP($$e);if($$je instanceof CT){}else{throw $$e;}}}b=a.jy;c=b.jk;d=b.ki;j=b.jf;b=b.jt;if(c.iF){if(BH===null){k=new Ck;l
=new B5;l.h9=BF(32);BB(k);k.ij=l;l=new K;Dp(l,16);k.h_=l;k.h$=G(32);k.id=0;k.ie=BX;BH=k;}k=new K;k.g9=G(16);F(k,k.g7,A(71));F(k,k.g7,j===null?A(2):j);l=new H;e=k.g9;f=e.data;h=k.g7;m=f.length;if(h>=0&&h<=(m-0|0)){l.g8=L(e.data,0,h);BI(Br(l));BI("\n");}else{b=new I;Y(b);E(b);}}c.hM=c.hM+1|0;k=new Fh;k.jk=c;k.ki=d;k.jf=j;k.jt=b;b=null;c=null;k.iO=new C;k.iM=1;k.jc=c;k.js=b;g=B9;B9=g+1|0;k.jq=O(g);b=new Dj;b.jd=k;Dz(b);b=a.jy.jk;b.hM=b.hM-1|0;return;default:D9();}}Cq().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);},
Zk=(a,b)=>{let $p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHX(a,b);if(Ee()){break _;}return;default:D9();}}Cq().s(a,b,$p);};
function N_(){let a=this;C.call(a);a.k8=0;a.kU=0;a.i6=0;a.mj=BM;a.nE=null;a.pc=null;a.qH=BM;a.o4=null;}
function MI(){let a=this;CM.call(a);a.iV=null;a.sC=null;}
function MG(){let a=this;CM.call(a);a.iZ=null;a.lV=null;a.lF=null;a.lM=null;}
let TX=(a,b)=>{a.iZ.iV.mj=C7(b);},
RY=(a,b)=>{b=a.iZ.iV;b.kU=1;b.i6=0;},
AB8=(a,b,c)=>{Fg(a.lM,a.lV,a.lF,c);b=a.iZ.iV;b.k8=1;b.i6=0;return 0;};
let WY=D();
let MF=D();
let AKn=(a,b)=>{b=a.dh(b);Bp();return b===null?null:b instanceof E0()&&b instanceof DD?(b[Be]===true?b:b.hz):b;},
U$=a=>{return a.dm();};
let ADB=D();
let KQ=D();
let PL=null;
let JM=()=>{JM=Bz(KQ);ABJ();};
let ABJ=()=>{let b,c;b=S((J_.p()).data.length);c=b.data;PL=b;c[Eq.hl]=1;c[Ej.hl]=2;c[Ea.hl]=3;c[D6.hl]=4;c[Hj.hl]=5;};
function Ey(){let a=this;EV.call(a);a.jP=0;a.i4=null;a.jh=null;a.i5=null;}
let UY=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new HS;c.jQ=a;c.kI=b;c=BL(c,"handleEvent");b.onreadystatechange=c;c=a.i5;d=a.jh;e=new Fi;e.om=c;e.ma=d;c=BL(e,"handleEvent");b.onprogress=c;d=a.i4;f=a.jP;b.open("GET",Br(d),!!f);if(a.jP){d="arraybuffer";b.responseType=d;}b.send();};
function KO(){let a=this;CM.call(a);a.mt=null;a.si=null;}
let U2=(a,b)=>{a.mt.iZ.iV.mj=C7(b);},
ACK=(a,b)=>{b=a.mt.iZ.iV;b.kU=1;b.i6=0;},
TH=(a,b,c)=>{c=a.mt;b=null;Fg(c.lM,c.lV,c.lF,b);b=c.iZ.iV;b.k8=1;b.i6=0;return 0;};
function KP(){let a=this;CM.call(a);a.lr=null;a.pl=null;a.qP=null;a.l5=null;}
let Yd=(a,b)=>{a.lr.iZ.iV.mj=C7(b);},
Sx=(a,b)=>{b=a.lr.iZ.iV;b.kU=1;b.i6=0;},
SB=(a,b,c)=>{let d,e,f,g,h,i,j;d=window.document.createElement("img");e=a.pl;if(e!==null)d.setAttribute("crossOrigin",Br(e));a:{e=a.l5;e.hM=e.hM+1|0;e=new Id;e.mK=a;e.sE=b;e.qt=c;e.oT=d;d.addEventListener("load",BL(e,"handleEvent"),!!0);d.addEventListener("error",BL(e,"handleEvent"),!!0);if(!a.l5.qW){b=Br(b);d.src=b;}else{b=a.qP;c=AFW(c);e=new K;e.g9=G(16);F(e,e.g7,A(445));f=e.g7;if(b===null)b=A(2);F(e,f,b);F(e,e.g7,A(446));f=e.g7;if(c===null)c=A(2);F(e,f,c);b=new H;g=e.g9;h=g.data;i=e.g7;j=h.length;if(i<0)break a;if
(i>(j-0|0))break a;b.g8=L(g.data,0,i);b=Br(b);d.src=b;}return 0;}b=new I;b.g$=1;b.g_=1;Bl(b);E(b);},
YU=(a,b,c)=>{return SB(a,b,c);};
function HS(){let a=this;C.call(a);a.kI=null;a.jQ=null;}
let ABP=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.kI.readyState==4){if(a.kI.status==200){if(a.jQ.i5.iF){if(BH===null){b=new Ck;c=new B5;c.h9=BF(32);b.ij=c;c=new K;BB(c);c.g9=G(16);b.h_=c;b.h$=G(32);b.id=0;b.ie=BX;BH=b;}b=a.jQ.i4;c=new K;c.g9=G(16);F(c,c.g7,A(444));d=c.g7;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.g9;f=e.data;g
=c.g7;h=f.length;if(g>=0&&g<=(h-0|0)){b.g8=L(e.data,0,g);BI(Br(b));BI("\n");}else{b=new I;b.g$=1;b.g_=1;Bl(b);E(b);}}i=a.kI.response;j=new Int8Array(i);b=a.jQ;c=b.jh;k=b.i4;b=new Gd;b.jl=j;b.n6=i;c.gA(k,b);}else if(a.kI.status!=404&&a.kI.status!=403){try{l=O(100);$p=1;continue _;}catch($$e){$$je=BP($$e);if($$je instanceof CT){}else{throw $$e;}}b=a.jQ;c=b.i5;d=b.jP;k=b.i4;b=b.jh;if(c.iF){if(BH===null){i=new Ck;j=new B5;j.h9=BF(32);BB(i);i.ij=j;j=new K;Dp(j,16);i.h_=j;i.h$=G(32);i.id=0;i.ie=BX;BH=i;}i=new K;i.g9
=G(16);F(i,i.g7,A(71));F(i,i.g7,k===null?A(2):k);j=new H;e=i.g9;f=e.data;h=i.g7;m=f.length;if(h>=0&&h<=(m-0|0)){j.g8=L(e.data,0,h);BI(Br(j));BI("\n");}else{b=new I;Y(b);E(b);}}c.hM=c.hM+1|0;i=new Ey;i.i5=c;i.jP=d;i.i4=k;i.jh=b;b=null;c=null;i.iO=new C;i.iM=1;i.jc=c;i.js=b;g=B9;B9=g+1|0;i.jq=O(g);b=new Dj;b.jd=i;Dz(b);}else{b=a.jQ;b.jh.gB(b.i4);}b=a.jQ.i5;b.hM=b.hM-1|0;}return;case 1:a:{try{Ie(l);if(Ee()){break _;}break a;}catch($$e){$$je=BP($$e);if($$je instanceof CT){}else{throw $$e;}}}b=a.jQ;c=b.i5;d=b.jP;k
=b.i4;b=b.jh;if(c.iF){if(BH===null){i=new Ck;j=new B5;j.h9=BF(32);BB(i);i.ij=j;j=new K;Dp(j,16);i.h_=j;i.h$=G(32);i.id=0;i.ie=BX;BH=i;}i=new K;i.g9=G(16);F(i,i.g7,A(71));F(i,i.g7,k===null?A(2):k);j=new H;e=i.g9;f=e.data;h=i.g7;m=f.length;if(h>=0&&h<=(m-0|0)){j.g8=L(e.data,0,h);BI(Br(j));BI("\n");}else{b=new I;Y(b);E(b);}}c.hM=c.hM+1|0;i=new Ey;i.i5=c;i.jP=d;i.i4=k;i.jh=b;b=null;c=null;i.iO=new C;i.iM=1;i.jc=c;i.js=b;g=B9;B9=g+1|0;i.jq=O(g);b=new Dj;b.jd=i;Dz(b);b=a.jQ.i5;b.hM=b.hM-1|0;return;default:D9();}}Cq().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,$p);},
AJB=(a,b)=>{let $p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABP(a,b);if(Ee()){break _;}return;default:D9();}}Cq().s(a,b,$p);};
function Id(){let a=this;C.call(a);a.sE=null;a.qt=null;a.oT=null;a.mK=null;}
let YA=(a,b)=>{let c,d;c=V(b.type);if(c===A(447))d=1;else if(!(A(447) instanceof H))d=0;else{b=A(447);d=c.g8!==b.g8?0:1;}if(d){b=a.mK.lr.iZ.iV;b.kU=1;b.i6=0;}else{b=a.qt;b.qe=a.oT;c=a.mK.lr;Fg(c.lM,c.lV,c.lF,b);b=c.iZ.iV;b.k8=1;b.i6=0;}b=a.mK.l5;b.hM=b.hM-1|0;},
Xc=(a,b)=>{YA(a,b);};
AK4([-1,"com",0,"badlogic",1,"gdx",2,"utils",3,"reflect",2,"scenes",5,"scene2d",6,"ui",2,"graphics",8,"g2d",-1,"java",10,"util",11,"regex",10,"nio",13,"charset",10,"lang"]);
Co([C,0,0,[],0,3,0,0,["W",W(V7),"X",N(ACf),"bj",W(LQ)],AHI,0,C,[],0,3,0,0,0,KG,0,C,[],0,3,0,Og,0,Kv,0,C,[],3,3,0,0,0,FU,0,C,[Kv],0,3,0,0,0,CW,0,C,[],3,3,0,0,0,AHn,0,FU,[CW],0,3,0,0,0,DO,0,C,[],3,3,0,0,0,Em,0,C,[DO],0,3,0,0,0,CF,0,C,[],3,3,0,0,0,BN,0,C,[],3,3,0,0,0,BR,0,C,[CF,BN],1,3,0,0,["bj",W(Y0)],Fz,0,BR,[],12,3,0,0,0,Es,0,C,[],0,3,0,0,0,I9,0,C,[],3,3,0,0,0,Iw,0,Es,[I9],0,3,0,0,0,EM,0,C,[],3,3,0,0,0,C1,0,C,[],3,3,0,0,0,Ff,0,C,[EM,C1],0,3,0,0,0,E1,0,C,[],3,3,0,0,0,BJ,0,C,[E1],0,3,0,0,0,Fw,0,BJ,[],0,3,0,0,
0,AEx,0,Fw,[],0,0,0,0,0,Hb,0,BR,[],12,3,0,0,0,JQ,0,C,[],3,3,0,0,0,GC,0,C,[JQ],3,3,0,0,0,EY,0,C,[],3,3,0,0,0,CK,0,C,[EY],1,3,0,0,0,AGY,0,CK,[],0,0,0,0,0,JF,0,Ff,[],0,3,0,0,0,Jl,0,C,[E1],0,3,0,0,0,WI,0,C,[],1,3,0,0,0,R_,0,C,[],0,3,0,0,0,Q1,0,C,[],3,3,0,0,0,IF,0,C,[Q1],0,3,0,0,0,AD2,0,IF,[],0,0,0,0,0,ZS,0,Em,[],0,3,0,0,0,M9,0,C,[],32,0,0,Rj,0,ACc,0,C,[],1,3,0,0,0,OI,0,C,[],32,0,0,NI,0,AGX,0,CK,[],0,0,0,0,0,D7,0,C,[JQ],0,3,0,0,0,OE,0,D7,[GC],0,3,0,0,0,Q8,0,C,[],4,3,0,Pw,0,IQ,0,C,[E1],1,3,0,0,0,AJe,0,Fw,[],0,3,0,
0,0,XT,0,C,[],0,3,0,0,0,PZ,0,C,[],0,3,0,Qy,0,JJ,0,C,[E1],1,3,0,0,0,Gt,0,D7,[GC],0,3,0,0,0]);
Co([QU,0,D7,[GC],0,3,0,0,0,C9,0,BJ,[],0,3,0,0,0,QN,0,Gt,[],0,3,0,0,0,Vy,0,Em,[],0,3,0,0,0,HR,0,C,[],3,3,0,0,0,ABA,0,Em,[],0,3,0,0,0,Y7,0,C,[DO],4,3,0,0,0,Kn,0,C,[],32,0,0,NY,0,CP,0,BR,[],12,3,0,0,0,BS,0,C,[DO],1,3,0,0,0,DJ,0,BS,[],1,3,0,0,0,Zw,0,DJ,[],0,3,0,0,0,ADH,0,DJ,[],0,3,0,0,0,Cg,0,BS,[],1,3,0,0,0,DB,0,Cg,[],1,3,0,0,0,Sv,0,DB,[],0,3,0,0,0,Ux,0,C,[E1],0,0,0,0,0,Kb,0,BS,[],0,3,0,0,0,VL,0,Kb,[],0,3,0,0,0,XK,0,BS,[],0,3,0,0,0,ABp,0,BS,[],0,3,0,0,0,AFB,0,BS,[],0,3,0,0,0,AGb,0,C,[],0,3,0,0,0,IK,0,BS,[],1,3,
0,0,0,AAP,0,IK,[],0,3,0,0,0,Wl,0,Cg,[],0,3,0,0,0,AGS,0,Cg,[],0,3,0,0,0,AHq,0,DB,[],0,3,0,0,0,AEl,0,BS,[],0,3,0,0,0,AEL,0,DB,[],0,3,0,0,0,AIS,0,Cg,[],0,3,0,0,0,AIh,0,Cg,[],0,3,0,0,0,Yh,0,BS,[],0,3,0,0,0,AAq,0,Cg,[],0,3,0,0,0,AAD,0,BS,[],0,3,0,0,0,YG,0,BS,[],0,3,0,0,0,AAS,0,DJ,[],0,3,0,0,0,Tg,0,Cg,[],0,3,0,0,0,AI2,0,BS,[],0,3,0,0,0,ADV,0,DB,[],0,3,0,0,0,Yt,0,DJ,[],0,3,0,0,0,ADa,0,BS,[],0,3,0,0,0,Uy,0,Cg,[],0,3,0,0,0,Z2,0,Cg,[],0,3,0,0,0,Vt,0,C,[CW],0,3,0,0,0,Cp,0,Iw,[HR],0,3,0,0,0,DM,0,Cp,[],0,3,0,ML,0,Ew,0,DM,
[EM],0,3,0,0,0,Iv,0,Ew,[],0,3,0,0,0,We,0,Iv,[],0,3,0,0,0]);
Co([AGU,0,BJ,[],0,0,0,0,0,Jk,0,Cp,[],0,3,0,0,0,NN,0,C,[],3,3,0,0,0,Dw,0,C,[NN],1,3,0,0,0,X$,0,Dw,[],0,0,0,0,0,Cx,0,Es,[HR],0,3,0,0,0,Tz,0,Cx,[],0,3,0,0,0,AGT,0,BJ,[],0,0,0,0,0,BK,0,C,[],1,3,0,Gb,0,ON,0,BK,[],0,0,0,0,0,AD4,0,BK,[],0,0,0,0,0,HM,0,C9,[],0,3,0,0,0,AAI,0,HM,[],0,3,0,0,0,QQ,0,BK,[],0,0,0,0,0,AII,0,BJ,[],0,0,0,0,0,I2,0,DM,[],0,3,0,0,0,AD5,0,BK,[],0,0,0,0,0,EL,0,C,[],3,3,0,0,0,DW,0,C,[BN,EL],0,3,0,0,0,C5,"Table$DebugRect",7,DW,[],0,3,0,Q9,0,Yc,0,Dw,[],0,0,0,0,0,Jv,0,Cx,[EM],0,3,0,0,0,Wu,0,Jv,[],0,3,
0,0,0,Z6,0,BJ,[],0,0,0,0,0,Mg,0,C,[],3,3,0,0,0,AFG,0,C,[Mg],0,3,0,0,0,ER,0,C,[],0,3,0,0,0,E8,0,ER,[],0,3,0,0,0,Pr,0,E8,[],0,3,0,0,0,JA,0,Cx,[EM],0,3,0,0,0,Zg,0,JA,[],0,3,0,0,0,AKj,0,Jk,[],0,0,0,0,0,HT,0,Cp,[],0,3,0,0,0,AKW,0,Ew,[],0,3,0,0,0,JU,0,Cx,[I9],0,3,0,0,0,QO,0,BK,[],0,0,0,0,0,PW,0,C,[],0,3,0,0,0,YC,0,C,[EY],0,0,0,0,0,AAL,0,BJ,[],0,0,0,0,0,ACl,0,CK,[],0,0,0,0,0,ZA,0,C,[],0,3,0,0,0,AFg,0,BJ,[],0,0,0,0,0,AJ2,0,C9,[],0,0,0,0,0,Z4,0,Jl,[],0,0,0,0,0,OJ,0,BK,[],0,0,0,0,0,OM,0,BK,[],0,0,0,0,0,Ok,0,C,[],3,3,
0,0,0,Hm,0,C,[],0,3,0,0,0,K$,0,Hm,[],0,3,0,0,0,X_,0,Dw,[],0,0,0,0,0]);
Co([AGR,0,IQ,[],0,0,0,0,0,AGV,0,JJ,[],0,0,0,0,0,AIJ,0,BJ,[],0,0,0,0,0,AIK,0,C9,[],0,0,0,0,0,QP,0,BK,[],0,0,0,0,0,K3,0,C,[DO],0,3,0,Ps,0,NF,0,E8,[],0,3,0,0,0,AAg,0,BJ,[],0,0,0,0,0,TU,0,CK,[],0,0,0,0,0,OO,0,BK,[],0,0,0,0,0,WO,0,Cp,[],0,3,0,0,0,Z5,0,BJ,[],0,0,0,0,0,NZ,0,C,[],0,3,0,0,0,GR,0,BK,[],0,3,0,0,0,YD,0,HT,[],0,3,0,0,0,OK,0,BK,[],0,0,0,0,0,ABh,0,Cx,[EM],0,3,0,0,0,AAb,0,JF,[],0,0,0,0,0,Qt,0,C,[],0,3,0,0,0,Lj,0,Cx,[],0,3,0,PF,0,Lr,0,C,[],0,3,0,0,0,AD7,0,BK,[],0,0,0,0,0,QR,0,BK,[],0,0,0,0,0,AGh,0,I2,[],0,3,
0,0,0,OL,0,BK,[],0,0,0,0,0,M$,0,C,[],0,3,0,0,0,AJU,0,C,[],0,3,0,0,0,Ei,0,BR,[],12,3,0,0,0,AJ$,0,BK,[],0,0,0,0,0,ZT,0,CK,[],0,0,0,0,0,Cv,0,C,[],1,3,0,0,0,QS,0,Cv,[],0,0,0,0,0,TJ,0,C,[Ok],0,3,0,0,0,QB,0,C,[],0,3,0,0,0,Ob,0,C,[],0,3,0,0,0,OF,0,C,[],0,3,0,0,0,JS,0,BJ,[],0,3,0,0,0,TT,0,CK,[],0,0,0,0,0,AIL,0,JU,[],0,0,0,0,0,TM,0,C,[],3,3,0,0,0,AAh,0,BJ,[],0,0,0,0,0,AKO,0,Cp,[],0,3,0,0,0,ADE,0,Cp,[],0,3,0,0,0,AAc,0,C9,[],0,0,0,0,0,JH,0,C,[],0,3,0,0,0,X9,0,JH,[],0,0,0,0,0,AIn,0,Es,[CW],0,3,0,0,0,S2,0,BJ,[],0,0,0,0,
0,AGC,0,Ew,[],0,3,0,0,0,ACL,0,BJ,[],0,0,0,0,0]);
Co([AJC,0,C9,[],0,0,0,0,0,P0,0,ER,[],0,3,0,0,0,ADL,0,Cp,[],0,3,0,0,0,N3,0,C,[],0,3,0,0,0,Nl,0,C,[],0,3,0,0,0,ACs,0,Cx,[],0,3,0,0,0,AJ3,0,Ff,[],0,0,0,0,0,S4,0,BJ,[],0,0,0,0,0,AE4,0,Cp,[],0,3,0,0,0,AKh,0,JS,[],0,3,0,0,0,S5,0,DM,[],0,0,0,0,0,Ya,0,Dw,[],0,0,0,0,0,Rx,0,C,[],1,3,0,0,0,QM,0,C,[],0,3,0,0,0,Qn,0,C,[BN],0,3,0,Qo,0,Bv,0,C,[],1,3,0,Hc,0,LI,0,Bv,[],0,3,0,0,0,ZW,0,C,[],0,3,0,0,0,Pg,0,Bv,[],0,0,0,0,0,AI_,0,C,[],0,3,0,0,0,Dx,0,Bv,[],0,3,0,0,0,F1,0,Dx,[],0,3,0,0,0,FW,0,Dx,[],0,3,0,0,0,G0,0,C,[],3,3,0,0,0,VO,
0,C,[G0],0,3,0,0,0,Pj,0,Bv,[],0,0,0,0,0,AG8,0,C,[EL],0,3,0,0,0,Pf,0,Bv,[],0,0,0,0,0,EX,0,Bv,[],0,3,0,0,0,Pe,0,Bv,[],0,0,0,0,0,Pd,0,Bv,[],0,0,0,0,0,AD$,0,C,[],4,3,0,0,0,R$,0,Cv,[],0,0,0,0,0,GL,0,C,[],3,3,0,0,0,Bq,0,C,[BN,GL],0,3,0,0,0,Oy,0,Bv,[],0,0,0,0,0,Eu,0,Bv,[],0,3,0,0,0,ACo,0,C,[],0,3,0,0,0,Pl,0,Bv,[],0,0,0,0,0,J$,0,Eu,[],0,3,0,0,0,Yy,0,C,[DO],0,3,0,0,0,FF,0,BR,[],12,3,0,0,0,N$,0,C,[],0,3,0,NL,0,Fa,0,Bv,[],0,3,0,0,0,Nz,0,Fa,[],0,3,0,0,0,Ou,0,Bv,[],0,0,0,0,0,AC3,0,C,[BN],4,3,0,0,0,Pc,0,Bv,[],0,0,0,0,0,EB,
0,C,[BN,GL],0,3,0,0,0,Lc,0,EX,[],0,3,0,0,0]);
Co([Ng,0,Bv,[],0,3,0,0,0,VC,0,C,[],0,3,0,0,0,AKB,0,C,[EL],0,3,0,0,0,Ph,0,Bv,[],0,0,0,0,0,QD,0,Bv,[],0,3,0,0,0,Oz,0,Bv,[],0,0,0,0,0,Ne,0,EX,[],0,3,0,0,0,Rg,0,C,[BN],0,3,0,L8,0,HQ,0,C,[BN],0,3,0,Kl,0,IO,0,C,[BN],0,3,0,Jb,0,VW,0,C,[BN],0,3,0,0,0,SG,0,C,[BN],0,3,0,0,0,AFc,0,C,[BN,EL],0,3,0,0,0,Zq,0,C,[G0],0,3,0,0,0,OV,0,C,[],4,3,0,Jh,0,P6,0,C,[],4,3,0,MJ,0,TZ,0,C,[],4,3,0,0,0,MK,0,Fa,[],0,3,0,0,0,Iy,0,C,[BN],0,3,0,Dg,0,LT,0,C,[],3,3,0,0,0,Jc,0,C,[LT,BN],0,3,0,0,0,Oq,0,Jc,[],0,3,0,0,0,Ox,0,Bv,[],0,0,0,0,0,Pi,0,Bv,
[],0,0,0,0,0,JE,0,C,[],0,3,0,GF,0,Dm,0,C,[BN],0,3,0,0,0,R0,0,C,[],0,3,0,0,0,ADC,0,C,[],0,3,0,0,0,Bb,0,C,[BN,GL],0,3,0,B_,0,YB,0,C,[BN,EL],0,3,0,0,0,WT,0,Cv,[],0,0,0,0,0,IV,0,Eu,[],0,3,0,0,0,AD8,0,C,[G0],0,3,0,0,0,Un,0,C,[],0,3,0,0,0,AHs,0,C,[BN],0,3,0,0,0,Hg,0,C,[BN],0,3,0,0,0,Ow,0,Bv,[],0,0,0,0,0,AHv,0,C,[],0,3,0,0,0,Uv,0,C,[],0,3,0,0,0,AE7,0,C,[],0,3,0,0,0,AHr,0,C,[BN],0,3,0,0,0,AC0,0,C,[],3,3,0,0,0,YN,0,C,[BN],0,3,0,0,0,AFL,0,C,[],0,0,0,0,0,HL,0,C,[DO],0,3,0,I_,0,JY,0,C,[],0,3,0,0,0,ADy,0,JY,[],0,3,0,0,0,MV,
0,C,[CW],0,3,0,0,0,AES,0,C,[],0,3,0,0,0,Bw,0,C,[],0,3,0,0,0]);
Co([Ki,0,C,[CW],1,3,0,0,0,AGy,0,Ki,[],0,3,0,0,0,Cy,0,C,[C1],0,3,0,0,0,Ht,0,C,[C1],0,3,0,0,0,Zd,0,Ht,[],0,3,0,0,0,AJS,0,C,[C1],0,3,0,0,0,Et,0,C,[],4,3,0,0,0,AJ7,0,C,[],0,3,0,0,0,AAv,0,C,[],0,3,0,0,0,ADz,0,C,[],0,3,0,0,0,ABO,0,C,[],0,3,0,0,0,No,0,C,[],0,3,0,Ol,0,SX,0,C,[],0,3,0,0,0,ACy,0,C,[],0,3,0,0,0,ABr,0,C,[],0,3,0,0,0,AB9,0,C,[],0,3,0,0,0,AG6,0,C,[],0,3,0,0,0,YI,0,C,[],0,3,0,0,0,AIt,0,C,[],0,3,0,0,0,Z_,0,C,[],0,3,0,0,0,UB,0,C,[],0,3,0,0,0,VG,0,C,[],0,3,0,0,0,Hf,0,BR,[],12,3,0,0,0,ACB,0,C,[],0,3,0,0,0,O2,
0,C,[],3,3,0,0,0,CG,0,C,[],0,3,0,0,0,S8,0,CG,[],0,3,0,0,0,S7,0,CG,[],0,3,0,0,0,AAX,0,CG,[],0,3,0,0,0,WM,0,CG,[],0,3,0,0,0,AFe,0,CG,[],0,3,0,0,0,IR,0,CG,[],0,3,0,0,0,WB,0,IR,[],0,3,0,0,0,FO,0,C,[],3,3,0,0,0,XA,0,C,[CW,FO],0,3,0,0,0,D5,0,C,[],3,3,0,0,0,AE6,0,C,[D5,FO],0,3,0,0,0,AIp,0,C,[D5],0,3,0,0,0,Vf,0,C,[],0,3,0,0,0,DC,0,C,[D5],0,3,0,0,0,AEe,0,DC,[],0,3,0,0,0,FL,0,DC,[FO,D5],1,3,0,0,0,CR,0,FL,[],1,3,0,MU,0,AER,0,C,[],0,3,0,0,0,AG4,0,CR,[],4,3,0,0,0,AAm,0,CR,[],4,3,0,0,0,AI8,0,DC,[],0,3,0,0,0,Il,0,DC,[],0,
3,0,0,0,SR,0,Il,[],0,3,0,0,0,Wx,0,CR,[],4,3,0,0,0]);
Co([Fj,0,FL,[],1,3,0,0,0,ABI,0,Fj,[],4,3,0,0,0,AAj,0,CR,[],4,3,0,0,0,AB_,0,CR,[],4,3,0,0,0,ABG,0,Fj,[],4,3,0,0,0,FJ,0,BR,[],12,3,0,0,0,Ev,0,C,[CW,D5,FO],1,3,0,0,0,Jx,0,Ev,[D5],1,3,0,0,0,RG,0,Jx,[D5],0,3,0,0,0,FX,0,BR,[],12,3,0,0,0,Cf,0,Ev,[],1,3,0,0,0,F9,0,Cf,[],1,3,0,0,0,U6,0,C,[],0,3,0,0,0,E5,0,Cf,[],1,3,0,PG,0,Ds,0,E5,[],1,3,0,0,0,Ex,0,Ds,[],1,3,0,0,0,Xw,0,Ex,[],0,3,0,0,0,FV,0,Cf,[],1,3,0,0,0,AKF,0,FV,[],0,3,0,0,0,AG1,0,Cf,[],0,3,0,0,0,Ef,0,Cf,[],1,3,0,0,0,S1,0,Ef,[],0,3,0,0,0,Fv,0,Cf,[],1,3,0,0,0,Xo,0,Ds,
[],0,3,0,0,0,Zl,0,Ds,[],0,3,0,0,0,H0,0,Cf,[],1,3,0,0,0,AEf,0,H0,[],0,3,0,0,0,Uc,0,Ef,[],0,3,0,0,0,AAt,0,Ex,[],0,3,0,0,0,AD9,0,Cf,[],0,3,0,0,0,ACk,0,Ef,[],0,3,0,0,0,AEk,0,Cf,[],0,3,0,0,0,AFH,0,E5,[],0,3,0,0,0,Zs,0,Cv,[],0,0,0,0,0,UK,0,Cv,[],0,0,0,0,0,UZ,0,Ds,[],0,3,0,0,0,AEJ,0,Fv,[],0,3,0,0,0,AI9,0,F9,[],0,3,0,0,0,AC9,0,F9,[],0,3,0,0,0,AFt,0,Fv,[],0,3,0,0,0,ABf,0,Ex,[],0,3,0,0,0,AJJ,0,FV,[],0,3,0,0,0,DA,0,Ev,[],1,3,0,0,0,ABN,0,DA,[],0,3,0,0,0,El,0,C,[],1,3,0,0,0,AE1,0,El,[],0,3,0,0,0,AF0,0,DA,[],0,3,0,0,0,AG0,
0,DA,[],0,3,0,0,0,AHV,0,El,[],0,3,0,0,0,W$,0,DA,[],0,3,0,0,0]);
Co([AG7,0,El,[],0,3,0,0,0,HH,0,C,[],3,3,0,0,0,Kr,0,C,[],3,3,0,0,0,Ca,0,C,[HH,Kr],0,3,0,0,0,VM,0,C,[],4,0,0,0,0,UP,0,C,[],4,3,0,0,0,CT,0,C,[],0,3,0,0,["bh",W(AF9)],CE,0,CT,[],0,3,0,0,0,BA,"RuntimeException",15,CE,[],0,3,0,0,0,AAf,"ClassCastException",15,BA,[],0,3,0,0,0,J5,0,C,[],3,3,0,0,0,H,0,C,[BN,CF,J5],0,3,0,0,["bj",W(Cn),"X",N(AIC),"W",W(ADP)],Dr,0,C,[BN],1,3,0,0,0,Ed,0,Dr,[CF],0,3,0,0,0,T,0,C,[BN,J5],0,0,0,0,["bp",N(Gh),"bj",W(ACU)],IB,0,C,[],3,3,0,0,0,K,0,T,[IB],0,3,0,0,["e0",BG(AAO),"gE",Z(WA),"bj",W(Fr),
"bp",N(AA$),"gF",Bm(ABU)],M6,0,C,[],0,3,0,0,0,L3,0,C,[],3,3,0,0,0,II,0,C,[L3,EY],0,3,0,0,0,QI,0,C,[],3,3,0,0,0,JC,0,C,[QI],1,3,0,0,0,KX,0,JC,[],0,3,0,0,0,AF8,0,C,[],4,3,0,0,0,F5,0,BR,[],12,3,0,0,0,KN,0,C,[],3,3,0,0,0,BY,0,C,[],3,3,0,0,0,Nn,0,C,[BY],3,3,0,0,0,GU,0,C,[KN,Nn],0,3,0,Eh,["gG",N(AEE)],AEn,0,C,[],0,3,0,0,0,MZ,0,C,[],0,3,0,Gy,0,J6,0,Dr,[CF],0,3,0,0,0,JN,0,C,[],0,3,0,0,0,Zv,0,C,[],4,3,0,0,0,C4,"GlyphLayout$GlyphRun",9,C,[DO],0,3,0,0,0,GV,0,C,[],0,3,0,0,0,I3,0,C,[],3,3,0,0,0,H6,0,C,[I3],1,3,0,0,0,DZ,
0,C,[],3,3,0,0,0,GG,0,H6,[DZ,BN],0,3,0,0,0,QZ,0,C,[],3,3,0,0,0,Ka,0,C,[QZ],0,3,0,0,0,Jr,0,C,[CF],0,3,0,0,0,Wo,0,C,[],0,3,0,0,0,AEN,0,C,[],4,3,0,0,0,Km,0,C,[],3,3,0,0,0,Lf,0,C,[Km],0,3,0,0,0,VR,0,C,[],0,3,0,0,0,Yo,0,C,[],0,3,0,0,0,OQ,0,C,[],3,3,0,0,0]);
Co([HU,0,C,[OQ],0,3,0,Jp,0,KI,0,C,[],0,3,0,0,0,CM,0,C,[],0,3,0,0,["fr",N(ACn)],OC,0,C,[],3,3,0,0,0,Do,0,C,[BY],3,3,0,0,0,I5,0,C,[OC,Do],0,3,0,0,["gH",N(SV)],N6,0,C,[],3,3,0,0,0,PA,0,C,[N6],0,3,0,0,0,OY,0,C,[O2],0,3,0,0,0,OR,0,C,[],3,3,0,0,0,M5,0,C,[OR],0,3,0,0,0,LP,0,C,[],3,3,0,0,0,OU,0,C,[LP],0,3,0,0,0,ADe,0,C,[],0,3,0,0,0,PD,0,C,[],3,3,0,0,0,O0,0,C,[PD],3,3,0,0,0,MA,0,C,[O0],0,3,0,0,0,HA,0,C,[Do],0,0,0,0,["gH",N(AFj)],HB,0,C,[Do],0,0,0,0,["gH",N(AJq)],Bs,"IllegalArgumentException",15,BA,[],0,3,0,0,0,AHD,0,
C,[],4,3,0,0,0,Ud,0,C,[C1],0,3,0,0,0,ABc,0,Dr,[CF],0,3,0,0,0,AAN,0,C,[BY],1,3,0,0,0,IZ,0,C,[],3,3,0,0,0,Fb,0,C,[IZ],0,3,0,0,["f5",Bm(YS),"gi",Bm(AJk),"c3",BG(Ii),"b4",N(AHe),"b3",BG(Vh),"f3",N(ZI),"fZ",W(AJY),"f1",N(AEG),"b0",N(AEp),"gp",N(AC4),"gc",Z(VK),"gd",BG(AAs),"gg",BG(ACA),"gn",N(AHR),"c4",BG(HO),"c5",BG(IT),"f$",Bm(W1),"bY",N(AJP),"c6",Z(Ja),"f4",N(AA4),"c7",Z(H$),"cn",N(XO),"f7",Bm(XI),"f6",N(TO),"f2",Bm(RK),"fE",Bm(AEo),"fB",N(TQ),"go",function(b,c,d,e,f,g){ABt(this,b,c,d,e,f,g);},"b1",BG(R8)],N4,
0,C,[IZ],3,3,0,0,0,Ho,0,Fb,[N4],0,3,0,0,["gs",N(Yu),"ge",BG(ACT),"gf",function(b,c,d,e,f){AKu(this,b,c,d,e,f);},"gq",Bm(ADu)],Lg,0,Ho,[],0,3,0,0,["gs",N(W8),"ge",BG(Ut),"gf",function(b,c,d,e,f){AJc(this,b,c,d,e,f);},"gq",Bm(TE),"b4",N(AHi),"b3",BG(ABV),"b0",N(AHU),"gc",Z(Wt),"gd",BG(AEP),"cn",N(Rw),"b1",BG(Yk),"f5",Bm(AA_),"gi",Bm(AIE),"c3",BG(AB5),"f3",N(ADl),"fZ",W(AJX),"f1",N(AE3),"gp",N(AJM),"gg",BG(T6),"gn",N(AE8),"c4",BG(Zt),"c5",BG(AHf),"f$",Bm(ACG),"c6",Z(Vk),"bY",N(SA),"c7",Z(AJV),"f4",N(Tm),"f7",Bm(SC),
"f6",N(AI5),"f2",Bm(Sy),"fE",Bm(UJ),"fB",N(AKy),"go",function(b,c,d,e,f,g){AFJ(this,b,c,d,e,f,g);}],Ms,0,C,[],0,3,0,0,0,DQ,0,BR,[],12,3,0,0,0,O6,0,C,[BY],3,3,0,0,0,Jm,0,C,[O6],0,0,0,0,["gI",W(Wj)],QF,0,Fb,[],0,3,0,0,["b4",N(Vo),"b3",BG(Wb),"b0",N(AJ_),"gc",Z(ZG),"gd",BG(AJG),"cn",N(AAT),"b1",BG(AJQ),"f5",Bm(Sw),"gi",Bm(Rt),"c3",BG(AAr),"f3",N(AKk),"fZ",W(ADU),"f1",N(AJ0),"gp",N(ADO),"gg",BG(YJ),"gn",N(AKa),"c4",BG(AAu),"c5",BG(Us),"f$",Bm(YT),"c6",Z(Xl),"bY",N(Xr),"c7",Z(SI),"f4",N(AFP),"f7",Bm(AHC),"f6",N(ABB),
"f2",Bm(AJE),"fE",Bm(AJW),"fB",N(SK),"go",function(b,c,d,e,f,g){U_(this,b,c,d,e,f,g);}],O_,0,C,[C1],0,3,0,0,0,NM,0,C,[],0,3,0,0,0,PS,0,C,[BY],3,3,0,0,0,I0,0,C,[PS],0,0,0,0,["gJ",W(So),"gK",W(VV),"gL",W(R3)],QX,0,C,[],3,3,0,0,0,Q5,0,C,[QX],0,3,0,0,0,KJ,0,CM,[],0,0,0,0,0,PP,"CloneNotSupportedException",15,CE,[],0,3,0,0,0,H9,0,Cv,[],0,3,0,0,0,I,"IndexOutOfBoundsException",15,BA,[],0,3,0,0,0,DT,0,C,[BY],3,3,0,0,0,L9,0,C,[DT],3,3,0,0,0,Ns,0,C,[DT],3,3,0,0,0,Nj,0,C,[DT],3,3,0,0,0,Ov,0,C,[DT],3,3,0,0,0,QT,0,C,[DT],
3,3,0,0,0]);
Co([Pk,0,C,[DT,L9,Ns,Nj,Ov,QT],3,3,0,0,0,LR,0,C,[],3,3,0,0,0,H7,0,C,[BY],3,3,0,0,0,K6,0,C,[BY,Pk,LR,H7],1,3,0,0,["gM",N(AEh),"gN",Bm(AGZ),"gO",Bm(AGj),"gP",Z(AD6),"gQ",N(AIR),"gR",W(Va),"gS",Z(R2)],IH,0,C,[],1,3,0,0,0,Hi,0,IH,[I3,DZ,BN],0,3,0,0,0,Jw,0,Hi,[],0,3,0,0,0,Y5,0,C,[],0,3,0,0,0,E3,0,BR,[],12,3,0,0,0,CN,0,C,[BY],1,3,0,0,0,WF,0,CN,[],1,3,0,0,0,VX,0,CN,[],1,3,0,0,0,AAz,0,CN,[],1,3,0,0,0,ADn,0,CN,[],1,3,0,0,0,Zj,0,CN,[],1,3,0,0,0,Ip,0,C,[Do],0,0,0,0,["gH",N(Z7)],Iq,0,C,[Do],0,0,0,0,["gH",N(AJH)],Io,0,C,
[Do],0,0,0,0,["gH",N(AEW)],NT,0,Cv,[],0,3,0,0,0,PX,0,C,[BY],3,3,0,0,0,HK,0,C,[PX],0,0,0,0,["gT",W(WW)],VJ,0,CN,[],1,3,0,0,0,Nd,0,C,[BN],4,3,0,0,0,JW,0,C,[],3,3,0,0,0,N7,0,C,[JW],4,3,0,0,0,Uz,0,C,[],4,3,0,0,0,H4,0,C,[],4,3,0,0,0,D_,"ReflectionException",4,CE,[],0,3,0,0,0,DD,0,C,[],4,3,0,Bp,0,M0,0,C,[],3,3,0,0,0,HG,0,C,[M0],0,0,0,0,0,G4,0,C,[],3,3,0,0,0,HF,0,C,[G4],0,0,0,0,0,Px,0,C,[JW],0,0,0,0,0,B0,"NumberFormatException",15,Bs,[],0,3,0,0,0,HY,0,BA,[],0,3,0,0,0,IN,0,CE,[],0,3,0,0,0,FC,"NoSuchMethodException",
15,IN,[],0,3,0,0,0,CU,"NullPointerException",15,BA,[],0,3,0,0,0,BO,0,C,[],1,0,0,0,["d7",Z(Wf),"ey",BG(YK),"dU",W(UI),"dD",N(AH7),"dT",N(AH5),"ee",W(AJw),"dz",W(Ga)],Jt,0,C,[HH],0,3,0,0,0,AJl,0,C,[BY],1,3,0,0,0,X3,0,C,[BY],1,3,0,0,0,AKP,0,C,[BY],1,3,0,0,0,H_,0,C,[BY],3,3,0,0,0,I7,0,C,[H_],0,3,0,0,["gU",N(AId)],Zf,0,C,[BY],1,3,0,0,0,I6,0,C,[H_],0,3,0,0,["gU",N(Ts)],Ko,0,C,[],3,3,0,0,0,FM,0,C,[Ko,DZ],0,0,0,0,0]);
Co([Gv,0,FM,[],0,0,0,0,0,CA,0,BO,[],0,0,0,C3,["ed",Z(TN),"eO",N(Up)],OH,0,C,[],0,0,0,0,0,BT,"PatternSyntaxException",12,Bs,[],0,3,0,0,["bh",W(AJr)],TV,0,C,[],0,3,0,0,0,HX,0,C,[C1],3,3,0,0,0,IY,0,C,[HX],1,3,0,0,0,NK,0,C,[HX],3,3,0,0,0,KH,0,C,[NK],3,3,0,0,0,HZ,0,IY,[KH],1,3,0,0,0,OW,0,C,[],3,3,0,0,0,HW,0,HZ,[DZ,BN,OW],0,3,0,0,0,NG,0,CA,[],0,0,0,0,["ed",Z(SH),"eO",N(AGf)],Q6,0,CA,[],0,0,0,0,["ed",Z(VD)],Mk,0,CA,[],0,0,0,0,["ed",Z(UG)],Od,0,CA,[],0,0,0,0,["ed",Z(S3),"eO",N(AEH)],EW,0,CA,[],0,0,0,0,["ed",Z(AIy)],B2,
0,BO,[],1,0,0,0,["ed",Z(AKl),"ev",W(AHk),"eO",N(Z9)],D2,0,B2,[],0,0,0,0,["ew",Bm(AGB),"d7",Z(Xq),"ey",BG(Vn),"eO",N(SU)],BU,0,BO,[],0,0,0,0,["ed",Z(YL),"dD",N(AEz),"dT",N(ABy),"eO",N(AFn),"dz",W(Vi)],Hn,0,BU,[],0,0,0,0,["ed",Z(AEd),"eO",N(AFS)],Dk,0,Hn,[],0,0,0,0,["ed",Z(Wm),"dD",N(AFv)],Kx,0,Dk,[],0,0,0,0,["ed",Z(AEr),"eO",N(AH$)],Qa,0,Dk,[],0,0,0,0,["ed",Z(Uf),"eO",N(AHx)],Nh,0,Dk,[],0,0,0,0,["ed",Z(Vb),"eO",N(AKR)],Ot,0,Dk,[],0,0,0,0,["ed",Z(RX),"eO",N(AF5)],EP,0,BU,[],0,0,0,0,["ed",Z(Sq),"d7",Z(ABW),"ey",
BG(AGk),"dT",N(ABo),"ee",W(AEB),"dz",W(AJF)],AC8,0,C,[],4,3,0,0,0,Hh,"ArrayStoreException",15,BA,[],0,3,0,0,0,F0,0,C,[],1,0,0,0,0,Bc,0,F0,[],1,0,0,0,["eI",W(Ui),"eB",W(Tl),"d4",W(AHa),"d3",W(AJt)],HE,"MissingResourceException",11,BA,[],0,3,0,0,0,B7,0,Bc,[],0,0,0,0,["eL",N(Vs),"eI",W(AKM),"eB",W(Xe),"d4",W(AHW),"bj",W(ADf),"d3",W(XC)],Dy,0,BO,[],1,0,0,0,["dT",N(AGm),"eO",N(AIu),"dz",W(ACv)],CJ,0,Dy,[],0,0,0,0,["ed",Z(RZ)],D$,0,CJ,[],0,0,0,0,["ed",Z(TP)],CL,0,Dy,[],0,0,0,0,["ed",Z(Sn)],D8,0,CJ,[],0,0,0,0,["ed",
Z(AB3),"dD",N(AKT)],Qm,0,CJ,[],0,0,0,0,["ed",Z(AJ8),"d7",Z(AC7)],JX,0,C,[],4,0,0,0,0,Bh,0,C,[],1,0,0,0,0,KS,0,F0,[DZ],0,0,0,0,["bj",W(ADp)],Lq,0,BO,[],0,0,0,0,["ed",Z(AAG),"eO",N(AEy)],Ba,0,C,[DZ,BN],0,3,0,0,0,KC,0,BU,[],0,0,0,0,0,FB,0,BU,[],0,0,0,0,["ed",Z(TG),"dD",N(AEa),"eO",N(UM),"dT",N(Uh)],CS,0,BU,[],0,0,0,0,["ed",Z(W5),"eL",N(XU),"dT",N(Ty),"dD",N(AG2),"eO",N(Xi)],Hz,0,CS,[],0,0,0,0,["eL",N(Z$)],H3,0,B2,[],0,0,0,0,["ew",Bm(AAJ)],Dd,0,B2,[],0,0,0,0,["ew",Bm(Rs),"dT",N(AEA)]]);
Co([Go,0,BU,[],0,0,0,0,["dD",N(AB2),"ed",Z(RM),"dT",N(UD),"eO",N(AHZ)],C_,0,B2,[],0,0,0,0,["ev",W(AAp),"ew",Bm(Y2),"d7",Z(WZ),"ey",BG(AAy),"dT",N(AHS)],J2,0,B2,[],0,0,0,0,["ew",Bm(RB)],Hw,0,B2,[],0,0,0,0,["ew",Bm(Sg)],Ec,0,BU,[],0,0,0,0,["dD",N(AJA),"ed",Z(AEb),"dT",N(AAK),"eO",N(AFy)],QY,0,Ec,[],0,0,0,0,0,OP,0,Ec,[],0,0,0,0,0,Rl,0,CL,[],0,0,0,0,["ed",Z(VI)],Mf,0,CL,[],0,0,0,0,["ed",Z(ACR)],E_,0,CL,[],0,0,0,0,["ed",Z(AGW),"dD",N(AIG)],L7,0,E_,[],0,0,0,0,["ed",Z(AAw),"dD",N(ADq)],EI,0,CL,[],0,0,0,0,["ed",Z(AKH)],KW,
0,EI,[],0,0,0,0,["ed",Z(ZF)],Nw,0,CL,[],0,0,0,0,["ed",Z(AJO)],MT,0,E_,[],0,0,0,0,["ed",Z(UO)],Po,0,EI,[],0,0,0,0,["ed",Z(Ta)],Ny,0,Dy,[],0,0,0,0,["ed",Z(AKq),"d7",Z(AHc)],Lw,0,Dy,[],0,0,0,0,["ed",Z(AEC),"d7",Z(RS)],FP,0,C,[],1,0,0,0,0,Rn,0,CJ,[],0,0,0,0,["ed",Z(Te)],Qg,0,D8,[],0,0,0,0,["ed",Z(ACM)],LZ,0,D$,[],0,0,0,0,["ed",Z(AGo)],MM,0,CJ,[],0,0,0,0,["ed",Z(AEt)],OS,0,D8,[],0,0,0,0,["ed",Z(Tq)],Ni,0,D$,[],0,0,0,0,["ed",Z(AGH)],IG,0,BO,[],4,0,0,0,["ed",Z(ABs),"eO",N(ZR)],If,0,BO,[],0,0,0,0,["ed",Z(Ue),"eO",N(UA)],Ls,
0,BO,[],0,0,0,0,["ed",Z(AAd),"eO",N(AKC)],J1,0,BO,[],4,0,0,0,["ed",Z(AFf),"eO",N(Vx)],Qu,0,BO,[],0,0,0,0,["ed",Z(AD1),"eO",N(Ry)],K2,0,BO,[],0,0,0,0,["ed",Z(Vg),"eO",N(Yn)],Qr,0,BU,[],0,0,0,0,["ed",Z(AJT),"dD",N(UF),"dU",W(ADA),"eO",N(UE)],LV,0,BU,[],4,0,0,0,["ed",Z(ADW),"dD",N(AF$),"dU",W(Ro),"eO",N(AKi)],Qh,0,BO,[],4,0,0,0,["ed",Z(AAV),"eO",N(X4)],Of,0,BO,[],0,0,0,0,["ed",Z(ADZ),"eO",N(XM)],Ku,0,BO,[],0,0,0,0,["ed",Z(ZK),"eO",N(VB)],E7,0,BU,[],0,0,0,0,["ed",Z(Ti),"dD",N(AFs),"eO",N(AFT)],Qp,0,E7,[],0,0,0,
0,["ed",Z(VH),"d7",Z(AH8),"ey",BG(SO),"dT",N(ACC)],Nb,0,E7,[],0,0,0,0,["ed",Z(ABQ)],Lp,0,T,[IB],0,3,0,0,["e0",BG(XD),"gE",Z(Um),"bp",N(UX),"gF",Bm(AHg)],NB,0,B2,[],0,0,0,0,["ew",Bm(Wd),"d7",Z(T9),"ey",BG(Yg),"dT",N(Zc)],Ks,0,B2,[],0,0,0,0,["ew",Bm(ABZ)],K0,0,B2,[],0,0,0,0,["ew",Bm(AGq)],AKU,0,C,[],4,3,0,0,0,Kq,0,B2,[],0,0,0,0,["ew",Bm(AGu)],FS,0,BU,[],0,0,0,0,["dD",N(AEq),"ed",Z(H8),"d7",Z(Y$),"ey",BG(Ws),"dT",N(SE),"eO",N(AHE)],FZ,0,BU,[],0,0,0,0,["dD",N(UT),"ed",Z(Hx),"d7",Z(AET),"ey",BG(AGp),"dT",N(Wg),"eO",
N(AE2)],Dq,0,B2,[],0,0,0,0,["ew",Bm(AFU),"d7",Z(ADj),"ey",BG(UR),"dT",N(AFD)],G5,0,FP,[],0,0,0,0,["e1",N(U4),"e3",Bm(AFK)],G6,0,FP,[],0,0,0,0,["e1",N(AGK),"e3",Bm(AJo)]]);
Co([Pn,0,C,[],0,0,0,0,0,GQ,0,Bh,[],0,0,0,0,["el",W(Zu)],Gu,0,Bh,[],0,0,0,0,["el",W(ABR)],O$,0,Bh,[],0,0,0,0,["el",W(AGc)],PJ,0,Bh,[],0,0,0,0,["el",W(AHF)],PN,0,Bh,[],0,0,0,0,["el",W(W6)],GM,0,Bh,[],0,0,0,0,["el",W(Vr)],G1,0,GM,[],0,0,0,0,["el",W(XX)],Rf,0,Bh,[],0,0,0,0,["el",W(Y9)],Hu,0,G1,[],0,0,0,0,["el",W(RF)],NA,0,Hu,[],0,0,0,0,["el",W(ACx)],NV,0,Bh,[],0,0,0,0,["el",W(V9)],Me,0,Bh,[],0,0,0,0,["el",W(ACq)],L6,0,Bh,[],0,0,0,0,["el",W(AJs)],PR,0,Bh,[],0,0,0,0,["el",W(ADw)],Rm,0,Bh,[],0,0,0,0,["el",W(RN)],Pm,
0,Bh,[],0,0,0,0,["el",W(ZN)],O4,0,Bh,[],0,0,0,0,["el",W(AFX)],P_,0,Bh,[],0,0,0,0,["el",W(V6)],Ld,0,Bh,[],0,0,0,0,["el",W(WC)],KT,0,Bh,[],0,0,0,0,["el",W(AJh)],Pt,0,Bh,[],0,0,0,0,["el",W(RC)],PB,0,Bh,[],0,0,0,0,["el",W(AA8)],My,0,Bh,[],0,0,0,0,["el",W(WP)],N0,0,Bh,[],0,0,0,0,["el",W(Yr)],Q0,0,Bh,[],0,0,0,0,["el",W(ABa)],Pz,0,Bh,[],0,0,0,0,["el",W(AH3)],M7,0,Bh,[],0,0,0,0,["el",W(AE$)],Mx,0,Bh,[],0,0,0,0,["el",W(ADm)],Ri,0,Bh,[],0,0,0,0,["el",W(AF7)],Gf,0,Bh,[],0,0,0,0,["el",W(ABx)],Qd,0,Gf,[],0,0,0,0,["el",W(ACY)],ND,
0,GQ,[],0,0,0,0,["el",W(T7)],Mt,0,Gu,[],0,0,0,0,["el",W(YZ)],Bg,0,Bh,[],0,0,0,0,["el",W(ABC)],Mp,0,Bh,[],0,0,0,0,["el",W(AI6)],IJ,0,Bh,[],0,0,0,0,["el",W(XH)],IP,0,Bh,[],0,0,0,0,["el",W(RD)],DK,"NegativeArraySizeException",15,BA,[],0,3,0,0,0,S6,0,C,[],0,0,0,0,0,Wh,0,C,[],4,0,0,0,0,UN,0,C,[],4,3,0,0,0,PU,0,C,[],0,3,0,0,0,Ge,0,C,[],0,3,0,0,0,JD,0,C,[],0,3,0,0,0,Y4,0,C,[],4,3,0,0,0,AGd,0,C,[],4,3,0,0,0,MH,0,CM,[],0,0,0,0,["fr",N(AHd),"gB",N(WS),"gA",Bm(AC_)],B8,0,BR,[],9,3,0,Gp,0,Ep,0,FM,[],0,0,0,0,0]);
Co([AKd,0,C,[],3,3,0,0,0,Pa,0,C,[BY],3,3,0,0,0,Mm,0,C,[Pa,BY],1,3,0,0,["gV",Bm(AJa),"gW",N(ADI),"gX",Bm(UU),"gY",Z(AAA),"gZ",Z(AGP)],Jj,0,C,[Do],0,0,0,0,["gH",N(AB7)],Eb,0,BR,[],12,3,0,0,0,ZJ,0,C,[],0,3,0,0,0,Nu,0,C,[],3,3,0,0,0,FN,0,Jt,[Nu],0,3,0,0,0,Q,"StringIndexOutOfBoundsException",15,I,[],0,3,0,0,0,Qj,0,Bc,[],0,0,0,0,["eL",N(Xb)],Qi,0,Bc,[],0,0,0,0,["eL",N(Sl)],LB,0,Bc,[],0,0,0,0,["eL",N(ABj),"bj",W(YE)],LH,0,Bc,[],0,0,0,0,["eL",N(AFV)],LF,0,Bc,[],0,0,0,0,["eL",N(AGt)],LG,0,Bc,[],0,0,0,0,["eL",N(ABY)],LL,
0,Bc,[],0,0,0,0,["eL",N(WG)],LM,0,Bc,[],0,0,0,0,["eL",N(Rr)],LJ,0,Bc,[],0,0,0,0,["eL",N(YO)],LK,0,Bc,[],0,0,0,0,["eL",N(AB0)],LN,0,Bc,[],0,0,0,0,["eL",N(AH_)],LO,0,Bc,[],0,0,0,0,["eL",N(VQ)],LA,0,Bc,[],0,0,0,0,["eL",N(AKV)],L2,0,Bc,[],0,0,0,0,["eL",N(YV)],Ly,0,Bc,[],0,0,0,0,["eL",N(VN)],Lz,0,Bc,[],0,0,0,0,["eL",N(X0)],LE,0,Bc,[],0,0,0,0,["eL",N(AAi)],Lx,0,Bc,[],0,0,0,0,["eL",N(AHN)],LC,0,Bc,[],0,0,0,0,["eL",N(Uq)],LD,0,Bc,[],0,0,0,0,["eL",N(AEZ)],Gq,0,C,[],0,0,0,0,0,EV,0,C,[EY],0,3,0,0,0,CV,"IllegalStateException",
15,BA,[],0,3,0,0,0,GA,"IllegalMonitorStateException",15,BA,[],0,3,0,0,0,AFY,0,C,[],0,3,0,0,0,X5,0,C,[],4,3,0,0,0,SD,0,C,[BY],1,3,0,0,0,ED,0,C,[],3,3,0,0,0,Q7,0,C,[ED],0,3,0,0,["bg",W(AIb)],P4,0,B8,[],12,0,0,0,0,P5,0,B8,[],12,0,0,0,0,P9,0,B8,[],12,0,0,0,0,P$,0,B8,[],12,0,0,0,0,P7,0,B8,[],12,0,0,0,0,P8,0,B8,[],12,0,0,0,0,P2,0,B8,[],12,0,0,0,0,P3,0,B8,[],12,0,0,0,0,P1,0,B8,[],12,0,0,0,0,KZ,0,C,[],3,3,0,0,0,NQ,0,C,[KZ],0,3,0,0,0,MR,0,C,[BY],4,3,0,0,0]);
Co([Nt,0,C,[],3,3,0,0,0,Nc,0,C,[Nt],0,0,0,0,["e",N(AAF),"fo",N(AJL)],Oi,0,C,[ED],0,3,0,0,0,KV,0,EP,[],0,0,0,0,["d7",Z(XL),"ey",BG(AKG),"ee",W(Vv)],Oj,0,Bc,[],0,0,0,0,["eL",N(AIx)],KA,0,Bc,[],0,0,0,0,["eL",N(T0)],NP,0,Bc,[],0,0,0,0,["eL",N(Tp)],NO,0,Bc,[],0,0,0,0,["eL",N(XE)],QA,0,Bc,[],0,0,0,0,["eL",N(ZY)],LW,0,Bc,[],0,0,0,0,["eL",N(AIz)],Lm,0,Bc,[],0,0,0,0,["eL",N(AEi)],M3,0,Bc,[],0,0,0,0,["eL",N(AF3)],Kw,0,Bc,[],0,0,0,0,["eL",N(AKc)],Kz,0,Bc,[],0,0,0,0,["eL",N(Wp)],Lh,0,Bc,[],0,0,0,0,["eL",N(AI0)],L$,0,Bc,
[],0,0,0,0,["eL",N(ACm)],Mb,0,Bc,[],0,0,0,0,["eL",N(AFq)],OG,0,Bc,[],0,0,0,0,["eL",N(AIa)],N8,0,Bc,[],0,0,0,0,["eL",N(AJI)],KK,0,Bc,[],0,0,0,0,["eL",N(V8)],Hl,0,Bc,[],0,0,0,0,["eL",N(AEm)],NH,0,Hl,[],0,0,0,0,["eL",N(AG3)],Tr,0,C,[G4],0,0,0,0,0,Fh,0,EV,[],0,0,0,0,["bg",W(AEw)],KL,0,C,[],32,0,0,Jg,0,Qf,0,C,[BY,DT],1,3,0,0,["g0",Bm(ABv),"g1",Bm(ACp),"g2",Z(R1),"g3",N(Sc),"g4",Z(YR)],Fk,0,C,[BY],3,3,0,0,0,HD,0,C,[Fk],0,0,0,0,["gH",N(Z8)],ACP,0,C,[],0,3,0,0,0,Fx,0,C,[G4,C1],0,3,0,0,0,Lo,0,C,[C1],0,3,0,0,0,Gd,0,C,
[],4,3,0,0,0,KM,0,C,[EY],0,0,0,0,0,Q$,0,C,[],3,3,0,0,0,Or,0,C,[Q$],3,3,0,0,0,O9,0,C,[],3,3,0,0,0,FI,0,C,[Or,O9],1,3,0,0,0,Gg,0,FI,[],0,3,0,0,0,Gz,0,Gg,[],0,3,0,0,0,FD,0,Gz,[],1,3,0,0,0,Ck,0,FD,[],0,3,0,0,["g5",N(AAk)],Fi,0,C,[Fk],0,0,0,0,["gH",N(ADN)],Ub,0,C,[],0,0,0,0,0,B5,0,FI,[],0,3,0,0,0,HJ,0,C,[CF],1,3,0,0,0,Kd,0,HJ,[],0,3,0,0,0,G7,"IllegalCharsetNameException",14,Bs,[],0,3,0,0,0,L4,0,C,[],3,3,0,0,0,IC,0,C,[L4],0,3,0,0,0,Kg,0,C,[],1,3,0,0,0]);
Co([Oe,0,Kg,[],0,3,0,0,0,QE,0,FU,[],0,0,0,0,0,R5,0,C,[],4,3,0,0,0,Re,"NoSuchElementException",11,BA,[],0,3,0,0,0,Bf,"GdxRuntimeException",3,BA,[],0,3,0,0,0,Wk,0,C,[],4,3,0,0,0,Dj,0,C,[ED],0,3,0,0,["bg",W(TC)],Xn,0,C,[],4,3,0,0,0,Q3,0,C,[],32,0,0,J0,0,JV,"ConcurrentModificationException",11,BA,[],0,3,0,0,0,J4,0,C,[],1,3,0,0,0,Mu,0,J4,[],0,3,0,0,0,Eo,0,FD,[],0,3,0,0,["g5",N(Yq)],Wy,0,Dr,[CF],0,3,0,0,0,AEF,0,C,[],0,0,0,0,0,AFh,0,C,[],4,3,0,0,0,Jn,0,C,[],0,3,0,0,0,IX,0,C,[CW],0,3,0,Hp,0,N5,0,C,[CW],0,3,0,0,0,Lt,
0,C,[C1,CF],4,3,0,0,0,JO,0,C,[],3,3,0,0,0,Qk,0,C,[],3,3,0,0,0,Ln,0,C,[ED,JO,Qk],0,0,0,0,["bg",W(AFi)],Pq,0,C,[C1],0,3,0,0,0,AFz,0,C,[],4,3,0,0,0,K1,0,C,[CW],3,3,0,0,0,NJ,0,C,[K1],0,3,0,0,0,PI,0,C,[],0,3,0,0,0,DG,0,C,[],1,3,0,0,0,Gn,0,DG,[CF],1,3,0,0,0,EF,0,DG,[CF],1,3,0,0,0,FE,0,C,[],4,3,0,0,0,E2,0,DG,[CF],1,3,0,0,0,Jf,0,C,[CW],3,3,0,0,0,Nx,0,C,[Jf],0,3,0,0,["fz",W(Ym),"fH",W(AFO),"fF",Z(ADQ),"f_",Bm(Xj),"gh",Bm(TK)],Im,0,C,[Jf],0,3,0,Ir,["fz",W(TY),"fH",W(ADg),"fF",Z(T$),"f_",Bm(AHo),"gh",Bm(WE)],Gr,0,DG,[CF],
1,3,0,0,0,Dv,0,C,[],3,3,0,0,0,Db,0,EF,[Dv],0,0,0,0,0,ACH,0,C,[BY],1,3,0,0,0,FH,0,Gn,[],1,0,0,0,0,EK,0,FH,[],0,0,0,0,["gr",N(ADK),"gv",Bm(ABK),"gj",W(RI)],Fy,0,E2,[],1,0,0,0,0,Hd,0,Fy,[],0,0,0,0,["gw",N(AE0),"gk",Bm(ADY),"gj",W(AEg)],F7,0,Gr,[],1,0,0,0,0,Qx,0,F7,[],0,0,0,0,["gx",N(X6)],F2,0,FH,[Dv],1,0,0,0,["gj",W(ABe)],Li,0,F2,[],0,0,0,0,["gr",N(XZ),"gv",Bm(RH)],Om,0,F2,[],0,0,0,0,["gr",N(AHm),"gv",Bm(TL)],FA,0,Fy,[Dv],1,0,0,0,["gj",W(AEs),"cU",W(AFx)]]);
Co([K7,0,FA,[],0,0,0,0,["gw",N(ABn),"gk",Bm(AFr)],M8,0,FA,[],0,0,0,0,["gw",N(RR),"gk",Bm(ABb)],Is,0,BA,[],0,3,0,0,0,Hs,"ReadOnlyBufferException",13,Is,[],0,3,0,0,0,JR,"BufferUnderflowException",13,BA,[],0,3,0,0,0,PO,0,C,[],0,3,0,J9,0,AI4,0,C,[],4,3,0,0,0,XW,0,C,[],4,3,0,0,0,Fq,0,F7,[Dv],1,0,0,0,["cU",W(AFZ)],KY,0,Fq,[],0,0,0,0,["gx",N(VP)],Mr,0,Fq,[],0,0,0,0,["gx",N(ADx)],G2,0,BR,[],12,3,0,0,0,WV,0,C,[],4,3,0,0,0,AFd,0,C,[ED,JO],3,0,0,0,0,IA,"BufferOverflowException",13,BA,[],0,3,0,0,0,JB,0,C,[Fk],0,0,0,0,["gH",
N(Zk)],N_,0,C,[],0,3,0,0,0,MI,0,CM,[],0,0,0,0,0,MG,0,CM,[],0,0,0,0,["fr",N(TX),"gB",N(RY),"gA",Bm(AB8)],WY,0,C,[],0,3,0,0,0,MF,0,C,[H7],1,3,0,0,["gM",N(AKn),"g6",W(U$)],ADB,0,C,[BY],1,3,0,0,0,KQ,0,C,[],32,0,0,JM,0,Ey,0,EV,[],0,0,0,0,["bg",W(UY)],KO,0,CM,[],0,0,0,0,["fr",N(U2),"gB",N(ACK),"gA",Bm(TH)],KP,0,CM,[],0,0,0,0,["fr",N(Yd),"gB",N(Sx),"gA",Bm(YU)],HS,0,C,[Fk],0,0,0,0,["gH",N(AJB)],Id,0,C,[Do],0,0,0,0,["gH",N(Xc)]]);
let AMZ=ALB(AMt),AMV=ALB(T2),AMW=ALB(AMu),AMX=ALB(AMv),AMY=ALB(ACN),AMU=ALB(ACF),AM0=ALB(AD3),AM1=ALB(W3);ALm(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","UTF-8","BIG_ENDIAN","LITTLE_ENDIAN","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","enabled","disabled","childrenOnly","keyboard","scroll","touchDown","touchUp","touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","Class cannot be created (missing no-arg constructor): ",
"none","all","table","cell","actor","OnPlane","Back","Front","bounces cannot be < 2 or > 5: ","loadFactor must be > 0 and < 1: ","key cannot be null.","Lambert","Phong","both","top","bottom","Enabled","EnabledUntilCycleEnd","Disabled","<init>",": ","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ","The value is too big for integer type","The value is too big for int type: ","Illegal radix: ","","java.runtime.name","userAgent","os.name","Windows","OS X",
"no OS",".html","index.html","index-debug.html","assets/","assets.txt","Loading asset : ","gdx.wasm.js","Error compiling shader: ","TrigTools.sin() at "," FPS","index can\'t be >= size: "," >= ","0","LOAD_ASSETS","APP_CREATE","APP_LOOP","Either src or dest is null","java.version","1.8","TeaVM","file.separator","/","path.separator",":","line.separator","\n","java.io.tmpdir","/tmp","java.vm.version","user.home","Unsupported asset type ","Loading script : ","px","mousedown","mouseup","mousemove","wheel","touchstart",
"CSS1Compat","touchmove","touchcancel","touchend","keydown","keypress","keyup","hidden","capacity must be >= 0: ","The required capacity is too large: ","The value is too big for long type","The value is too big for long type: ","Can only cope with FloatBuffer and ShortBuffer at the moment","GL error: ",", ","GLVersion","OpenGL ES (\\d(\\.\\d){0,2})","WebGL (\\d(\\.\\d){0,2})","(\\d(\\.\\d){0,2})","Invalid version string: ","\\.","Error parsing number: ",", assuming: ","libGDX GL","Desktop","HeadlessDesktop",
"Applet","WebGL","iOS","Webaudio","Audiocontext unlocked","OpenGL","GLES","NONE","mp3","ogg","wav","Patter is null","Constructor not found for class: ","Security violation occurred while getting constructor for class: \'","\'.","Security violation while getting constructor for class: ","object","function","string","number","undefined","\\Q","\\E","\\\\E\\Q","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace",
"javaMirrored","javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement",
"Thaana","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation",
"SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows",
"Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri",
"HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS",
"Sm","Sc","Sk","So","Pi","Pf","ErrorLoading: ","i","b","a","Invalid assets description file.","PX","PCT","EM","EX","PT","PC","IN","CM","MM","jpg","jpeg","png","bmp","gif","json","xml","txt","glsl","fnt","pack","obj","atlas","g3dj","Image","Audio","Text","t","Binary","Directory","main","Script loaded: ","#iterator() cannot be used nested.","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","==","=","u_sampler","a_position","a_normal","a_color","a_texCoord","u_projModelView","attribute vec4 a_position;\n",
"attribute vec3 a_normal;\n","attribute vec4 a_color;\n","uniform mat4 u_projModelView;\n","varying vec4 v_col;\n","void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   gl_PointSize = 1.0;\n}\n","   v_tex"," = ",";\n","varying vec2 v_tex","attribute vec2 a_texCoord","#ifdef GL_ES\nprecision mediump float;\n#endif\n","void main() {\n   gl_FragColor = ","vec4(1, 1, 1, 1)","v_col"," * ",";\n}"," texture2D(u_sampler",",  v_tex",") *",")","uniform sampler2D u_sampler",
"vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","No uniform with name \'","\' in shader","An attempted fetch uniform from uncompiled shader \n","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ","attributes must be >= 1","No buffer allocated!","New position "," is outside of range [0;","New limit ","The last float in src "," is outside of array of size ","Length "," must be non-negative","Offset ","Capacity is negative: ",
"data must be a ByteBuffer or FloatBuffer","Index ","Logical","Pixels","Asset loaded: ","data:",";base64,","error"]);
H.prototype.toString=function(){return Br(this);};
H.prototype.valueOf=H.prototype.toString;C.prototype.toString=function(){return Br(LQ(this));};
C.prototype.__teavm_class__=function(){return ALd(this);};
AI7.main=ALM(ADt);
AI7.main.javaException=ALz;
let Be=Symbol('jsoClass');
(function(){var c;c=GU.prototype;c[Be]=true;c.onAnimationFrame=c.gG;c=I5.prototype;c[Be]=true;c.handleEvent=c.gH;c=HA.prototype;c[Be]=true;c.handleEvent=c.gH;c=HB.prototype;c[Be]=true;c.handleEvent=c.gH;c=Jm.prototype;c[Be]=true;c.fullscreenChanged=c.gI;c=I0.prototype;c[Be]=true;c.denied=c.gL;c.prompt=c.gK;c.granted=c.gJ;c=K6.prototype;c.removeEventListener=c.gP;c.dispatchEvent=c.gQ;c.get=c.gM;c.addEventListener=c.gS;Object.defineProperty(c,"length",{get:c.gR});c=Ip.prototype;c[Be]=true;c.handleEvent=c.gH;c
=Iq.prototype;c[Be]=true;c.handleEvent=c.gH;c=Io.prototype;c[Be]=true;c.handleEvent=c.gH;c=HK.prototype;c[Be]=true;c.unlockFunction=c.gT;c=I7.prototype;c[Be]=true;c.accept=c.gU;c=I6.prototype;c[Be]=true;c.accept=c.gU;c=Mm.prototype;c.removeEventListener=c.gZ;c.dispatchEvent=c.gW;c.addEventListener=c.gY;c=Jj.prototype;c[Be]=true;c.handleEvent=c.gH;c=MR.prototype;c[Be]=true;c=Qf.prototype;c.removeEventListener=c.g2;c.dispatchEvent=c.g3;c.addEventListener=c.g4;c=HD.prototype;c[Be]=true;c.handleEvent=c.gH;c=Fi.prototype;c[Be]
=true;c.handleEvent=c.gH;c=JB.prototype;c[Be]=true;c.handleEvent=c.gH;c=MF.prototype;c.get=c.gM;Object.defineProperty(c,"length",{get:c.g6});c=HS.prototype;c[Be]=true;c.handleEvent=c.gH;c=Id.prototype;c[Be]=true;c.handleEvent=c.gH;})();
}));
