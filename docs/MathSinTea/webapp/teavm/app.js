"use strict";
(function(module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(exports);}else{module(typeof self!=='undefined'?self:this);}}(function(AIZ){let AMh=2463534242,Gl=()=>{let x=AMh;x^=x<<13;x^=x>>>17;x^=x<<5;AMh=x;return x;},W=f=>function(){return f(this);},N=f=>function(p1){return f(this,p1);},Bm=f=>function(p1,p2){return f(this,p1,p2);},Z=f=>function(p1,p2,p3){return f(this,
p1,p2,p3,p3);},BG=f=>function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);},ALS=f=>function(){let args=Array.prototype.slice.apply(arguments);AMi(function(){f.apply(this,args);});},ALE=f=>(args,callback)=>{if(!args){args=[];}let javaArgs=R(E0(),args.length);for(let i=0;i<args.length;++i){javaArgs.data[i]=V(args[i]);}AMi(()=>{f.call(null,javaArgs);},callback);},Bz=target=>target.$clinit=()=>{},AK7=obj=>{let cls=obj.constructor,arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}let clsName
="";if(cls.$meta.primitive){clsName=cls.$meta.name;}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;},D=superclass=>{if(superclass===0){return function(){};}if(superclass===void 0){superclass=E0();}return function(){superclass.call(this);};},Bk=cls=>ALM(cls),E0=()=>C,RL=()=>{{return AKP();}},Hu=t=>{{return AE3(t);}};let AMj=()=>{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};},AMk=(name,binaryName)=>{let cls
=AMj();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;},AMl=AMk("boolean","Z"),TX=AMk("char","C"),AMm=AMk("byte","B"),AMn=AMk("short","S"),ACG=AMk("int","I"),ACy=AMk("long","J"),ADV=AMk("float","F"),WY=AMk("double","D"),CQ=AMk("void","V");let AMo=new ArrayBuffer(16),AMp=new DataView(AMo),AMq=new Float32Array(AMo),AMr=new Float64Array(AMo),AMs
=new Int32Array(AMo),AMd;if(typeof BigInt!=='function'){AMd=n=>{AMp.setFloat64(0,n,true);return new AMt(AMp.getInt32(0,true),AMp.getInt32(4,true));};}else if(typeof BigInt64Array!=='function'){AMd=n=>{AMp.setFloat64(0,n,true);let lo=AMp.getInt32(0,true),hi=AMp.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};}else {let AMu=new BigInt64Array(AMo);AMd=n=>{AMr[0]=n;return AMu[0];};}let Im=n=>{AMq[0]=n;return AMs[0];},Ig=n=>{AMs[0]=n;return AMq[0];},B4=(a,b)=>a>b?
1:a<b? -1:a===b?0:1,CB=Math.imul||function(a,b){let ah=a>>>16&0xFFFF,al=a&0xFFFF,bh=b>>>16&0xFFFF,bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;},C8=(a,b)=>(a>>>0)/(b>>>0)>>>0,ALB=(a,b)=>(a>>>0)%(b>>>0)>>>0,DN=(a,b)=>{a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function AMt(lo,hi){this.lo=lo|0;this.hi=hi|0;}AMt.prototype.__teavm_class__=()=>{return "long";};let AMv=a=>(a.hi&0x80000000)===0,AMw=a=>(a.hi&0x80000000)!==0,AMx=1<<18,BM,B,O,C7,ZV,Bd,AMy;if(typeof BigInt!=="function"){AMt.prototype.toString=function()
{let result=[],n=this,positive=AMv(n);if(!positive){n=ALG(n);}let radix=new AMt(10,0);do {let divRem=AMy(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};AMt.prototype.valueOf=function(){return ZV(this);};BM=new AMt(0,0);O=val=>new AMt(val, -(val<0)|0);C7=val=>val>=0?new AMt(val|0,val/0x100000000|0):ALG(new AMt( -val|0, -val/0x100000000|0));B=(lo,hi)=>new AMt(lo,hi);ZV=val=>0x100000000*val.hi
+(val.lo>>>0);Bd=val=>val.lo;}else {BM=BigInt(0);B=(lo,hi)=>BigInt.asIntN(64,BigInt.asUintN(64,BigInt(lo))|BigInt.asUintN(64,BigInt(hi)<<BigInt(32)));O=val=>BigInt.asIntN(64,BigInt(val|0));C7=val=>BigInt.asIntN(64,BigInt(val>=0?Math.floor(val):Math.ceil(val)));ZV=val=>Number(val);Bd=val=>Number(BigInt.asIntN(32,val))|0;}let C6,W7,Wq,AK$,ALa,WP,ALH,Ci,Nj,AMz,U,Jw,Sb,ALJ,ALG,Ch,W6,F6,Ek,ALw,X;if(typeof BigInt!=='function'){C6=(a,b)=>a.hi===b.hi&&a.lo===b.lo;W7=(a,b)=>a.hi!==b.hi||a.lo!==b.lo;Wq=(a,b)=>{if(a.hi
<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};AK$=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};ALa=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};WP=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x
<=y;}return (a.lo&1)<=(b.lo&1);};Ci=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return C7(a.lo+b.lo);}else if(AMA.abs(a.hi)<AMx&&AMA.abs(b.hi)<AMx){return C7(ZV(a)+ZV(b));}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo+b_lolo|0,lohi=a_lohi+b_lohi+(lolo>>16)|0,hilo=a_hilo+b_hilo+(lohi>>16)|0,hihi=a_hihi+b_hihi+(hilo>>16)|0;return new AMt(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};AMz
=a=>{let lo=a.lo+1|0,hi=a.hi;if(lo===0){hi=hi+1|0;}return new AMt(lo,hi);};ALG=a=>AMz(new AMt(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));Nj=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return C7(a.lo -b.lo);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo -b_lolo|0,lohi=a_lohi -b_lohi+(lolo>>16)|0,hilo=a_hilo -b_hilo+(lohi>>16)|0,hihi=a_hihi -b_hihi+(hilo>>16)|0;return new AMt(lolo&0xFFFF|(lohi&0xFFFF)<<16,
hilo&0xFFFF|(hihi&0xFFFF)<<16);};ALH=(a,b)=>{let r=DN(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};U=(a,b)=>{let positive=AMw(a)===AMw(b);if(AMw(a)){a=ALG(a);}if(AMw(b)){b=ALG(b);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=0,lohi=0,hilo=0,hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi
=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;let result=new AMt(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:ALG(result);};Jw=(a,b)=>{if(AMA.abs(a.hi)<AMx&&AMA.abs(b.hi)<AMx){return C7(ZV(a)/ZV(b));}return (AMy(a,b))[0];};ALJ
=(a,b)=>{if(a.hi>=0&&a.hi<AMx&&b.hi>=0&&b.hi<AMx){return C7(ZV(a)/ZV(b));}return (AMB(a,b))[0];};Sb=(a,b)=>{if(AMA.abs(a.hi)<AMx&&AMA.abs(b.hi)<AMx){return C7(ZV(a)%ZV(b));}return (AMy(a,b))[1];};AMy=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}let positive=AMw(a)===AMw(b);if(AMw(a)){a=ALG(a);}if(AMw(b)){b=ALG(b);}a=new AMC(a.lo,a.hi,0);b=new AMC(b.lo,b.hi,0);let q=AMD(a,b);a=new AMt(a.lo,a.hi);q=new AMt(q.lo,q.hi);return positive?[q,a]:[ALG(q),ALG(a)];};let AMB=(a,b)=>{if(b.lo===0&&b.hi
===0){throw new Error("Division by zero");}a=new AMC(a.lo,a.hi,0);b=new AMC(b.lo,b.hi,0);let q=AMD(a,b);a=new AMt(a.lo,a.hi);q=new AMt(q.lo,q.hi);return [q,a];};Ch=(a,b)=>new AMt(a.lo&b.lo,a.hi&b.hi);W6=(a,b)=>new AMt(a.lo|b.lo,a.hi|b.hi);F6=(a,b)=>new AMt(a.lo^b.lo,a.hi^b.hi);Ek=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AMt(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new AMt(0,a.lo);}else {return new AMt(0,a.lo<<b -32);}};ALw=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AMt(a.lo
>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new AMt(a.hi,a.hi>>31);}else {return new AMt(a.hi>>b -32,a.hi>>31);}};X=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AMt(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new AMt(a.hi,0);}else {return new AMt(a.hi>>>b -32,0);}};function AMC(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}let AME=(a,b)=>{let a_lolo=(a.lo&0xFFFF)*b|0,a_lohi=(a.lo>>>16)*b|0,a_hilo=(a.hi&0xFFFF)*b|0,a_hihi=(a.hi>>>16)*b|0,sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)
|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;},AMF=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;let sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF
|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AMG=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;let sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AMH=(a,b)=>{let r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>
1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);},AMI=a=>{let n=0,d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;},AMJ=(a,b)=>{if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi
=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}},AMK=(a,b)=>{if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}},AML=a=>new AMC(a.lo,a.hi,a.sup),AMD=(a,b)=>{let bits=b.hi!==0?AMI(b.hi):AMI(b.lo)+32,sz=1+(bits/16|0),dividentBits=bits%16;AMJ(b,bits);AMJ(a,dividentBits);let q
=new AMC(0,0,0);while(sz-->0){AMJ(q,16);let digitA=(a.hi>>>16)+0x10000*a.sup,digitB=b.hi>>>16,digit=digitA/digitB|0,t=AML(b);AME(t,digit);if(AMH(t,a)>=0){while(AMH(t,a)>0){AMF(t,b); --digit;}}else {while(true){let nextT=AML(t);AMG(nextT,b);if(AMH(nextT,a)>0){break;}t=nextT;++digit;}}AMF(a,t);q.lo|=digit;AMJ(a,16);}AMK(a,bits+16);return q;};}else {C6=(a,b)=>a===b;W7=(a,b)=>a!==b;Wq=(a,b)=>a>b;AK$=(a,b)=>a>=b;ALa=(a,b)=>a<b;WP=(a,b)=>a<=b;Ci=(a,b)=>BigInt.asIntN(64,a+b);AMz=a=>BigInt.asIntN(64,a+1);ALG=a=>BigInt.asIntN(64,
 -a);Nj=(a,b)=>BigInt.asIntN(64,a -b);ALH=(a,b)=>{a=BigInt.asUintN(64,a);b=BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};U=(a,b)=>BigInt.asIntN(64,a*b);Jw=(a,b)=>BigInt.asIntN(64,a/b);ALJ=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)/BigInt.asUintN(64,b));Sb=(a,b)=>BigInt.asIntN(64,a%b);Ch=(a,b)=>BigInt.asIntN(64,a&b);W6=(a,b)=>BigInt.asIntN(64,a|b);F6=(a,b)=>BigInt.asIntN(64,a^b);Ek=(a,b)=>BigInt.asIntN(64,a<<BigInt(b&63));ALw=(a,b)=>BigInt.asIntN(64,a>>BigInt(b&63));X=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,
a)>>BigInt(b&63));}let R=(cls,sz)=>{let data=new Array(sz);data.fill(null);return new (ALt(cls))(data);},P=(cls,data)=>new (ALt(cls))(data),UY;if(typeof BigInt64Array!=='function'){UY=init=>new AMM(init);}else {UY=data=>{let buffer=new BigInt64Array(data.length);buffer.set(data);return new AMM(buffer);};}let G=sz=>new AMN(new Uint16Array(sz)),ALs=data=>{let buffer=new Uint16Array(data.length);buffer.set(data);return new AMN(buffer);},BF=sz=>new AMO(new Int8Array(sz)),ALc=sz=>new AMP(new Int16Array(sz)),AMe=
data=>{let buffer=new Int16Array(data.length);buffer.set(data);return new AMP(buffer);},S=sz=>new AMQ(new Int32Array(sz)),Gk=data=>{let buffer=new Int32Array(data.length);buffer.set(data);return new AMQ(buffer);},Kf=sz=>new AMR(new Int8Array(sz)),Cm=sz=>new AMS(new Float32Array(sz)),ALt=cls=>{let result=cls.$array;if(result===null){function JavaArray(data){(E0()).call(this);this.data=data;}JavaArray.prototype=Object.create((E0()).prototype);JavaArray.prototype.type=cls;JavaArray.prototype.constructor=JavaArray;JavaArray.prototype.toString
=function(){let str="[";for(let i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};JavaArray.prototype.p=function(){let dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for(let i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new (ALt(this.type))(dataCopy);};let name="["+cls.$meta.binaryName;JavaArray.$meta={item:cls,supertypes:[E0()],primitive:false,superclass:E0(),name:name,binaryName
:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};JavaArray.classObject=null;JavaArray.$array=null;result=JavaArray;cls.$array=JavaArray;}return result;};let AMT,ALe=strings=>{AMU();AMT=new Array(strings.length);for(let i=0;i<strings.length;++i){AMT[i]=AMV(V(strings[i]));}},A=index=>AMT[index],L=(array,offset,count)=>{let result="",limit=offset+count;for(let i=offset;i<limit;i=i+1024|0){let next=Math.min(limit,i+1024|0);result+=String.fromCharCode.apply(null,array.subarray(i,next));}return result;},
V=str=>str===null?null:OU(str),Br=str=>str===null?null:str.g7,AMU=()=>(()=>{})(),AMV;{AMV=str=>str;}let G_=(obj,cls)=>obj instanceof E0()&&!!obj.constructor.$meta&&AMW(obj.constructor,cls),AMW=(from,to)=>{if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&AMW(from.$meta.item,to.$meta.item);}let supertypes=from.$meta.supertypes;for(let i=0;i<supertypes.length;i=i+1|0){if(AMW(supertypes[i],to)){return true;}}return false;};let E=ex=>{throw AHn(ex);},AMX=Symbol("javaException"),
AHn=ex=>{let err=ex.$jsException;if(!err){let javaCause=AMY(ex),jsCause=javaCause!==null?javaCause.$jsException:void 0,cause=typeof jsCause==="object"?{cause:jsCause}:void 0;err=new AMZ("Java exception thrown",cause);if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err[AMX]=ex;ex.$jsException=err;AM0(err,ex);}return err;},AM0=(err,ex)=>{if(typeof AM1==="function"&&err.stack){let stack=AM1(err.stack),javaStack=R(AM2(),stack.length),elem,noStack=false;for(let i=0;i<stack.length;++i)
{let element=stack[i];elem=AM3(V(element.className),V(element.methodName),V(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){AM4(ex,javaStack);}}},AMZ;if(typeof AM5==='object'){let AM6=Symbol("defaultMessage");AMZ=function AMZ(message,cause){let self=Reflect.construct(Error,[void 0,cause],AMZ);Object.setPrototypeOf(self,AMZ.prototype);self[AM6]=message;return self;};AMZ.prototype=Object.create(Error.prototype,{constructor:{configurable:true,writable
:true,value:AMZ},message:{get(){try {let javaException=this[AMX];if(typeof javaException==='object'){let javaMessage=AM7(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[AM6];}catch(AM8){return "Exception occurred trying to extract Java exception message: "+AM8;}}}});}else {AMZ=Error;}let ALr=e=>e instanceof Error&&typeof e[AMX]==='object'?e[AMX]:null,BP=err=>{let ex=err[AMX];if(!ex){ex=AM9(V("(JavaScript) "+err.toString()));err[AMX]=ex;ex.$jsException
=err;AM0(err,ex);}return ex;},AM9=message=>AK4(message),AM7=t=>AF1(t),AMY=t=>ALU(t),AM2=()=>E0(),AM3=(className,methodName,fileName,lineNumber)=>{{return null;}},AM4=(e,stack)=>{};let AM$=outputFunction=>{let buffer="";return msg=>{let index=0;while(true){let next=msg.indexOf('\n',index);if(next<0){break;}outputFunction(buffer+msg.substring(index,next));buffer="";index=next+1;}buffer+=msg.substring(index);};},BI=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof console==="object"?AM$(msg=>console.info(msg))
:()=>{},CI=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof console==="object"?AM$(msg=>console.error(msg)):()=>{};let AM_=null,AKW=data=>{let i=0,packages=new Array(data.length);for(let j=0;j<data.length;++j){let prefixIndex=data[i++],prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}AM_=packages;},Co=data=>{let packages=AM_,i=0;while(i<data.length){let cls=data[i++];cls.$meta={};let m=cls.$meta,className=data[i++];m.name=className!==0?className:null;if(m.name
!==null){let packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";let superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=Object.create(m.superclass.prototype);}else {cls.prototype={};}let flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel=data[i++];let innerClassInfo
=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {let enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;let declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;let simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}let clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};let virtualMethods=data[i++];if(virtualMethods!==0){for(let j=0;j<virtualMethods.length;j
+=2){let name=virtualMethods[j],func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(let k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}};function ANa(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}ANa.prototype.push=function(){for(let i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};ANa.prototype.s=ANa.prototype.push;ANa.prototype.pop=function(){return this.stack.pop();};ANa.prototype.l
=ANa.prototype.pop;ANa.prototype.isResuming=function(){return this.status===2;};ANa.prototype.isSuspending=function(){return this.status===1;};ANa.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};ANa.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if(ANb!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:result=>{if(result instanceof Error){throw result;}};this.run();};ANa.prototype.resume
=function(){if(ANb!==null){throw new Error("Another thread is running");}this.status=2;this.run();};ANa.prototype.run=function(){ANb=this;let result;try {result=this.runner();}catch(AM8){result=AM8;}finally {ANb=null;}if(this.suspendCallback!==null){let self=this,callback=this.suspendCallback;this.suspendCallback=null;callback(()=>self.resume());}else if(this.status===0){this.completeCallback(result);}};let Ee=()=>{let thread=Cq();return thread!=null&&thread.isSuspending();},Eg=()=>{let thread=Cq();return thread
!=null&&thread.isResuming();},AMi=(runner,callback)=>(new ANa(runner)).start(callback),ANb=null,Cq=()=>ANb,D9=()=>{throw new Error("Invalid recorded state");};function C(){this.ik=null;this.$id$=0;}
let Er=b=>{let c;if(b.ik===null){c=new Gq;c.ij=BE;b.ik=c;}b=b.ik;c=b.ij;if(c===null)b.ij=BE;else if(c!==BE){c=new CV;c.g9=1;c.g$=1;c.ha=A(0);E(c);}b.iH=b.iH+1|0;},
CO=b=>{let c,d;if(!Ft(b)){c=b.ik;if(c.ij===BE){d=c.iH-1|0;c.iH=d;if(!d)c.ij=null;Ft(b);return;}}b=new GA;b.g9=1;b.g$=1;E(b);},
ALN=b=>{YT(b,1);},
YT=(b,c)=>{let d,$p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.ik===null){d=new Gq;d.ij=BE;b.ik=d;}d=b.ik;if(d.ij===null)d.ij=BE;if(d.ij===BE){d.iH=d.iH+c|0;return;}$p=1;case 1:SM(b,c);if(Ee()){break _;}return;default:D9();}}Cq().s(b,c,d,$p);},
ABa=(b,c,d)=>{let e,f,g;e=BE;f=b.ik;if(f===null){f=new Gq;f.ij=e;b.ik=f;if(e!==e)BE=e;BE.j3=CZ();b=b.ik;b.iH=b.iH+c|0;b=null;d.kE.e(b);return;}if(f.ij===null){f.ij=e;if(e!==e)BE=e;BE.j3=CZ();b=b.ik;b.iH=b.iH+c|0;b=null;d.kE.e(b);return;}if(f.jY===null)f.jY=AAw();f=f.jY;g=new Of;g.o_=e;g.pa=b;g.o9=c;g.o$=d;d=g;f.push(d);},
ALP=b=>{Si(b,1);},
Si=(b,c)=>{let d;if(!Ft(b)){d=b.ik;if(d.ij===BE){c=d.iH-c|0;d.iH=c;if(c>0)return;d.ij=null;d=d.jY;if(d!==null&&!(d.length?0:1)){d=new Q3;d.ps=b;JG(d,0);}else Ft(b);return;}}b=new GA;b.g9=1;b.g$=1;E(b);},
AGE=b=>{let c,d,e;if(!Ft(b)){c=b.ik;if(c.ij===null){b=c.jY;if(b!==null&&!(b.length?0:1)){b=c.jY.shift();Bp();if(b!==null&&!(b instanceof E0()))b=Cd(b);d=b;c.jY=null;b=d.o_;c=d.pa;e=d.o9;d=d.o$;if(BE!==b)BE=b;BE.j3=CZ();c=c.ik;c.ij=b;c.iH=c.iH+e|0;b=null;d.kE.e(b);}return;}}},
Ft=a=>{let b,c;b=a.ik;if(b===null)return 1;a:{if(b.ij===null){c=b.jY;if(!(c!==null&&!(c.length?0:1))){b=b.n$;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.ik=null;return 1;},
BB=a=>{return;},
AK9=()=>{let a=new C();BB(a);return a;},
ALO=a=>{let b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new Ca;c.hF=b;d=c;b.classObject=d;}}return c;},
V2=a=>{let b,c;b=a;if(!b.$id$){c=Gl();b.$id$=c;}return a.$id$;},
AB$=(a,b)=>{return a!==b?0:1;},
LM=a=>{let b,c,d,e,f,g,h,i;b=a;if(!b.$id$){c=Gl();b.$id$=c;}d=Bj(a.$id$,4);b=new K;b.g8=G(16);F(b,b.g6,A(1));e=b.g6;if(d===null)d=A(2);F(b,e,d);c=new H;f=b.g8;g=f.data;h=b.g6;i=g.length;if(h>=0&&h<=(i-0|0)){c.g7=L(f.data,0,h);return c;}b=new I;b.g9=1;b.g$=1;E(b);},
ALA=a=>{let b,c,d;if(!G_(a,DZ)&&a.constructor.$meta.item===null){b=new PM;b.g9=1;b.g$=1;E(b);}b=R2(a);c=b;d=Gl();c.$id$=d;return b;},
J4=a=>{let b,c;b=a.ik;if(!(b!==null&&b.ij===BE?1:0)){b=new GA;b.g9=1;b.g$=1;E(b);}b=b.n$;if(b===null)return;while(!(b.length?0:1)){c=b.shift();Bp();if(c!==null&&!(c instanceof E0()))c=Cd(c);c=c;if(!c.m())JG(c,0);}a.ik.n$=null;},
SM=(b,c)=>{let thread=Cq();let javaThread=RL();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Hu(javaThread);thread.resume();};callback.fo=e=>{thread.attribute=AHn(e);Hu(javaThread);thread.resume();};callback=NR(callback);thread.suspend(()=>{try {ABa(b,c,callback);;}catch(Kd){callback.fo(Kd);}});return null;};
let AHB=D();
let ADl=b=>{let c,d,e,f;QG=G(0);c=new H;c.g7="";I2=c;Ky=new J8;AGj();c=new Bq;c.kK=1.0;c.kJ=0.0;K1=c;c=new Bq;c.kK=0.0;c.kJ=1.0;K0=c;c=new Bq;c.kK=0.0;c.kJ=0.0;M1=c;Mz=new Bq;Ok=new Bq;Tg();O2=new Bq;O5=new Bq;Ve();NU=new Bq;N6=new Bq;c=new Dm;c.jL=0.0;c.jI=0.0;c.jJ=0.0;c.jK=0.0;M9=c;c=new Dm;c.jL=0.0;c.jI=0.0;c.jJ=0.0;c.jK=0.0;M8=c;Mm=new DW;Ox=new DW;P$=0.10000000149011612;AJY();MU=Bk(ADV);RK();Lq=R(GR,111);OQ=new Bq;O0=new Bq;Ms=new C;ZY();KC=Bk(ACG);Xf();LT=Bk(ACy);KB=Bk(TX);O4=R(Jo,128);SO();MK=new Bq;ML
=new Bq;MM=new Bq;Om=0.4000000059604645;KA=0.10000000149011612;PS=new Bq;AEG();No=new Bq;NP=new Bq;Q8=new Bq;Q$=new Bq;Q9=new Bq;AIG();AJW();Wr();Lg=new Bw;AFo();Y6();Nc=Cm(3);ADn();ZK();ABy();C$=1;Vz();Q_=new HF;MA=new HE;AB3();M=1;WG();Gw=new JT;ADS();TW();c=new J_;b=R(H,0);d=b.data;G3(A(3));e=d.length;f=0;while(f<e){G3(d[f]);f=f+1|0;}c.oD=A(3);c.pj=b.p();BX=c;Rg=Bk(WY);YW();c=new FE;c.mD=A(4);Cz=c;c=new FE;c.mD=A(5);Hp=c;AJ8();Ub();c=AJ1(A(6));c.l7=0;c.kM=0;L8(new IG,new Kl,c);};
let KD=D();
let XW=0,X2=0,S_=0,AJ9=0,Wm=0;
let Od=()=>{Od=Bz(KD);ZU();};
let ZU=()=>{XW=Cl(V(navigator.platform),A(7));X2=Cl(V(navigator.platform),A(8));S_=Cl(V(navigator.platform),A(9));AJ9=!Cl(V(navigator.platform),A(10))&&!Cl(V(navigator.platform),A(11))?0:1;Wm=!Cl(V(navigator.platform),A(12))&&!Cl(V(navigator.platform),A(13))&&!Cl(V(navigator.platform),A(14))?0:1;};
let Ks=D(0);
let FU=D();
let CW=D(0);
let AHg=D(FU);
let DO=D(0);
let Em=D();
let CF=D(0);
let BN=D(0);
function BR(){let a=this;C.call(a);a.hv=null;a.hk=0;}
let AG1=a=>{return a.hk;},
YV=a=>{return a.hv;};
let Fz=D(BR);
let AIh=null,AJJ=null,Yq=null,R_=null;
let AGj=()=>{let b,c,d;b=new Fz;b.hv=A(15);b.hk=0;AIh=b;c=new Fz;c.hv=A(16);c.hk=1;AJJ=c;d=new Fz;d.hv=A(17);d.hk=2;Yq=d;R_=P(Fz,[b,c,d]);};
let Es=D();
let I6=D(0);
let Iv=D(Es);
let Mz=null;
let ALu=()=>{Mz=new Bq;};
let EM=D(0);
let C1=D(0);
let Ff=D();
let E1=D(0);
let BJ=D();
let Ok=null;
let AL8=()=>{Ok=new Bq;};
let Fw=D(BJ);
let AEp=D(Fw);
let Ha=D(BR);
let Oe=null,QR=null,PN=null;
let Tg=()=>{let b,c;b=new Ha;b.hv=A(18);b.hk=0;Oe=b;c=new Ha;c.hv=A(19);c.hk=1;QR=c;PN=P(Ha,[b,c]);};
let JM=D(0);
let GC=D(0);
let EY=D(0);
let CK=D();
let AGQ=D(CK);
let JC=D(Ff);
let Ji=D();
let O2=null,O5=null;
let ALh=()=>{O2=new Bq;O5=new Bq;};
let WD=D();
let R7=D();
let QX=D(0);
let ID=D();
let ADU=D(ID);
let ZN=D(Em);
let M6=D();
let Sq=null;
let Rf=()=>{Rf=Bz(M6);ABF();};
let ABF=()=>{let b,c;b=S((PN.p()).data.length);c=b.data;Sq=b;c[Oe.hk]=1;c[QR.hk]=2;};
let AB7=D();
let OF=D();
let Rr=null;
let NF=()=>{NF=Bz(OF);Vh();};
let Vh=()=>{let b,c;b=S((H_.p()).data.length);c=b.data;Rr=b;c[Ib.hk]=1;c[HO.hk]=2;c[Iw.hk]=3;};
let AGP=D(CK);
let D7=D();
let OB=D(D7);
let Q4=D();
let AGF=0,AJn=0,AB8=0,AJC=0,YK=0;
let Pt=()=>{Pt=Bz(Q4);AJh();};
let AJh=()=>{AGF=Cl(V(navigator.platform),A(7));AJn=Cl(V(navigator.platform),A(8));AB8=Cl(V(navigator.platform),A(9));AJC=!Cl(V(navigator.platform),A(10))&&!Cl(V(navigator.platform),A(11))?0:1;YK=!Cl(V(navigator.platform),A(12))&&!Cl(V(navigator.platform),A(13))&&!Cl(V(navigator.platform),A(14))?0:1;};
let IO=D();
let AI8=D(Fw);
let NU=null;
let ALz=()=>{NU=new Bq;};
let XO=D();
let N6=null;
let AMa=()=>{N6=new Bq;};
let PW=D();
let Wl=null,S7=null,AJT=null;
let Qv=()=>{Qv=Bz(PW);AGa();};
let AGa=()=>{let b;b=new Cy;b.iI=1;b.hV=R(C,16);Wl=b;b=new Bb;B_();S7=b;AJT=new DW;};
let JF=D();
let Gt=D(D7);
let QQ=D(D7);
let C9=D(BJ);
let P$=0.0;
let AL1=()=>{P$=0.10000000149011612;};
let QJ=D(Gt);
let Vt=D(Em);
let HQ=D(0);
let ABu=D(Em);
let Y2=D();
let Kj=D();
let UQ=null;
let NV=()=>{NV=Bz(Kj);AH_();};
let AH_=()=>{let b,c;b=S((H_.p()).data.length);c=b.data;UQ=b;c[Lh.hk]=1;c[N9.hk]=2;c[Qb.hk]=3;c[Ib.hk]=4;c[HO.hk]=5;c[Iw.hk]=6;c[L1.hk]=7;c[MB.hk]=8;c[PE.hk]=9;c[MV.hk]=10;};
let CP=D(BR);
let Ib=null,HO=null,Iw=null,L1=null,PE=null,MV=null,MB=null,Lh=null,N9=null,Qb=null,H_=null;
let Ve=()=>{let b,c,d,e,f,g,h,i,j,k;b=new CP;b.hv=A(20);b.hk=0;Ib=b;c=new CP;c.hv=A(21);c.hk=1;HO=c;d=new CP;d.hv=A(22);d.hk=2;Iw=d;e=new CP;e.hv=A(23);e.hk=3;L1=e;f=new CP;f.hv=A(24);f.hk=4;PE=f;g=new CP;g.hv=A(25);g.hk=5;MV=g;h=new CP;h.hv=A(26);h.hk=6;MB=h;i=new CP;i.hv=A(27);i.hk=7;Lh=i;j=new CP;j.hv=A(28);j.hk=8;N9=j;k=new CP;k.hv=A(29);k.hk=9;Qb=k;H_=P(CP,[b,c,d,e,f,g,h,i,j,k]);};
let BS=D();
let DJ=D(BS);
let Zr=D(DJ);
let ADz=D(DJ);
let Cf=D(BS);
let DB=D(Cf);
let Sr=D(DB);
let Us=D();
let J9=D(BS);
let VG=D(J9);
let XF=D(BS);
let ABj=D(BS);
let AFt=D(BS);
let AF5=D();
let II=D(BS);
let AAJ=D(II);
let Wg=D(Cf);
let AGK=D(Cf);
let AHj=D(DB);
let AEd=D(BS);
let AED=D(DB);
let AIL=D(Cf);
let AIa=D(Cf);
let Yc=D(BS);
let AAk=D(Cf);
let AAx=D(BS);
let YB=D(BS);
let AAM=D(DJ);
let Tc=D(Cf);
let AIV=D(BS);
let ADN=D(DB);
let Yo=D(DJ);
let AC5=D(BS);
let Ut=D(Cf);
let ZX=D(Cf);
let Vo=D();
let ZQ=null;
let AJY=()=>{ZQ=P(Ca,[Bk(MS),Bk(Bw),Bk(N$),Bk(OB),Bk(QQ),Bk(Gt),Bk(QJ),Bk(ER),Bk(NC),Bk(PX),Bk(Po),Bk(M7),Bk(Qy),Bk(Hl),Bk(QI),Bk(OC),Bk(K6),Bk(Qq),Bk(E8),Bk(N0),Bk(PT),Bk(NW),Bk(Ni),Bk(Ln)]);};
let Cp=D(Iv);
let DM=D(Cp);
let TN=null,AAr=null,AF4=null,AKh=null,ADj=null,RH=null,Xt=null,ACU=null;
let MI=()=>{MI=Bz(DM);AGv();};
let AGv=()=>{let b,c;b=new Bw;b.iw=0.0;b.iv=0.0;b.iu=1.0;b.it=1.0;Da(b);TN=b;b=new Bw;b.iw=1.0;b.iv=0.0;b.iu=0.0;b.it=1.0;Da(b);AAr=b;b=new Bw;b.iw=0.0;b.iv=1.0;b.iu=0.0;b.it=1.0;Da(b);AF4=b;b=new QO;c=new Cy;c.iI=0;c.hV=R(C,16);b.mo=c;b.mx=2147483647;AKh=b;b=new QN;Gb();ADj=b;RH=new QM;Xt=new QL;ACU=new QK;};
let Ew=D(DM);
let Iu=D(Ew);
let V_=D(Iu);
let AGM=D(BJ);
let Jh=D(Cp);
let NK=D(0);
let Dw=D();
let X5=D(Dw);
let Cx=D(Es);
let Tu=D(Cx);
let AGL=D(BJ);
let BK=D();
let AHU=null,AFA=null,AGI=null,WC=null,AAS=null,Zm=null,AFu=null;
let Gb=()=>{Gb=Bz(BK);T0();};
let T0=()=>{let b;b=new GR;Gb();b.rZ=0.0;AHU=b;AFA=new OL;AGI=new OI;WC=new OH;AAS=new OK;Zm=new OJ;AFu=new OG;};
let OK=D(BK);
let ADW=D(BK);
let HL=D(C9);
let AAC=D(HL);
let QM=D(BK);
let AIB=D(BJ);
let I0=D(DM);
let OQ=null,O0=null;
let AK0=()=>{OQ=new Bq;O0=new Bq;};
let ADX=D(BK);
let EL=D(0);
let DW=D();
let Mm=null,Ox=null;
let ALW=()=>{Mm=new DW;Ox=new DW;};
let C5=D(DW);
let Rm=null;
let Q5=()=>{Q5=Bz(C5);SW();};
let SW=()=>{let b,c,d,e,f,g,h,$$je;Gy();b=Fl;c=Du(b,Bk(C5));b=c<0?null:b.jE.data[c];if(b===null){b=new H8;d=new Cy;d.iI=0;d.hV=R(C,4);b.mo=d;b.mx=100;a:{try{d=Op(Bk(C5),null);break a;}catch($$e){$$je=BP($$e);if($$je instanceof CE){}else{throw $$e;}}try{d=Mj(Bk(C5),null);Pm(d,1);break a;}catch($$e){$$je=BP($$e);if($$je instanceof D_){}else{throw $$e;}}d=null;}b.oI=d;if(d===null){b=new BA;d=new K;d.g8=G(16);F(d,d.g6,A(30));if(Bk(C5).ig===null)Bk(C5).ig=V(Bk(C5).hF.$meta.name);e=Bk(C5).ig;F(d,d.g6,e);e=new H;f
=d.g8;g=f.data;c=d.g6;h=g.length;if(c>=0&&c<=(h-0|0)){e.g7=L(f.data,0,c);b.g9=1;b.g$=1;b.ha=e;E(b);}e=new I;e.g9=1;e.g$=1;E(e);}DE(Fl,Bk(C5),b);}Rm=b;};
let X9=D(Dw);
let Js=D(Cx);
let MK=null,ML=null,MM=null,Om=0.0,KA=0.0;
let AL$=()=>{MK=new Bq;ML=new Bq;MM=new Bq;Om=0.4000000059604645;KA=0.10000000149011612;};
let Wp=D(Js);
let Z1=D(BJ);
let Mc=D(0);
let AFy=D();
let ER=D();
let E8=D(ER);
let Po=D(E8);
let Jx=D(Cx);
let Zb=D(Jx);
let AKb=D(Jh);
let HS=D(Cp);
let AKO=D(Ew);
let JQ=D(Cx);
let QK=D(BK);
let PT=D();
let Yx=D();
let AAF=D(BJ);
let ACe=D(CK);
let Zv=D();
let AE$=D(BJ);
let AJU=D(C9);
let ZZ=D(Ji);
let OG=D(BK);
let OJ=D(BK);
let Oh=D(0);
let Hl=D();
let K6=D(Hl);
let X6=D(Dw);
let AGJ=D(IO);
let AGN=D(JF);
let AIC=D(BJ);
let AID=D(C9);
let QL=D(BK);
let KZ=D();
let Ys=null,ADb=null,Yr=null,ADa=null,RF=null,UR=null,ACL=null,R5=null,AE4=null;
let Pp=()=>{Pp=Bz(KZ);Vu();};
let Vu=()=>{let b;b=new J2;b.oK=0.0;Ys=b;b=new J2;b.oK=1.0;ADb=b;DP();Yr=De.data[128];DP();b=De.data[129];ADa=b;RF=b;DP();UR=De.data[130];DP();ACL=De.data[132];DP();R5=De.data[136];DP();AE4=De.data[144];};
let NC=D(E8);
let AAb=D(BJ);
let TP=D(CK);
let OL=D(BK);
let WJ=D(Cp);
let Z0=D(BJ);
let NW=D();
function GR(){BK.call(this);this.rZ=0.0;}
let Lq=null;
let AL3=()=>{Lq=R(GR,111);};
let Yy=D(HS);
let OH=D(BK);
let ABb=D(Cx);
let PS=null;
let AL4=()=>{PS=new Bq;};
let Z8=D(JC);
let Qq=D();
let Lf=D(Cx);
let Tp=null,WX=null;
let PC=()=>{PC=Bz(Lf);S$();};
let S$=()=>{let b,c;Tp=new Bw;b=new HK;I8();c=new Cy;c.iI=1;c.hV=R(C,1);b.rQ=c;c=new GV;c.nm=1;c.jA=S(2);b.ra=c;WX=b;};
let Ln=D();
let ADZ=D(BK);
let QN=D(BK);
let AF_=D(I0);
let OI=D(BK);
let M7=D();
let AJM=D();
let Ei=D(BR);
let YH=null,TD=null,AEm=null,Se=null,Ux=null,AFF=null;
let AEG=()=>{let b,c,d,e,f;b=new Ei;b.hv=A(31);b.hk=0;YH=b;c=new Ei;c.hv=A(32);c.hk=1;TD=c;d=new Ei;d.hv=A(33);d.hk=2;AEm=d;e=new Ei;e.hv=A(34);e.hk=3;Se=e;f=new Ei;f.hv=A(35);f.hk=4;Ux=f;AFF=P(Ei,[b,c,d,e,f]);};
let AJ2=D(BK);
let ZO=D(CK);
function Cv(){let a=this;C.call(a);a.mx=0;a.mo=null;}
let QO=D(Cv);
let TE=D();
let Qy=D();
let N$=D();
let OC=D();
let JO=D(BJ);
let No=null;
let AKX=()=>{No=new Bq;};
let TO=D(CK);
let AIE=D(JQ);
let TH=D(0);
let AAc=D(BJ);
let AKG=D(Cp);
let ADw=D(Cp);
let Z9=D(C9);
let JE=D();
let X4=D(JE);
let AIg=D(Es);
let SY=D(BJ);
let AGu=D(Ew);
let ACE=D(BJ);
let AJu=D(C9);
let PX=D(ER);
let ADD=D(Cp);
let N0=D();
let Ni=D();
let ACl=D(Cx);
let AJV=D(Ff);
let S0=D(BJ);
let AEW=D(Cp);
let NP=null;
let ALC=()=>{NP=new Bq;};
let AJ_=D(JO);
let S1=D(DM);
let X7=D(Dw);
let Rt=D();
let QI=D();
let Qk=D();
let Up=null,Tf=null,UW=null,AIM=null,AIO=null,AIN=null,WI=null,XQ=null,AJm=null,S5=null,AIW=null;
let Ql=()=>{Ql=Bz(Qk);ABU();};
let ABU=()=>{let b;Up=Cm(16);b=new Dm;b.jL=0.0;b.jI=0.0;b.jJ=0.0;b.jK=1.0;Tf=b;b=new Dm;b.jL=0.0;b.jI=0.0;b.jJ=0.0;b.jK=1.0;UW=b;b=new Bb;B_();AIM=b;AIO=new Bb;AIN=new Bb;WI=new Bb;XQ=D3();AJm=new Bb;S5=new Bb;AIW=new Bb;};
let Bv=D();
let TZ=null,AFY=null,Wu=null,AF3=null,VP=null,Xo=null,AAG=null,Sd=null,AAZ=null,VO=null,ACm=null,WV=null,Xn=null,Td=null,R3=null,AFh=null,YC=null,Xq=null,VT=null,AE1=null,Xp=null,AIb=null,Xu=null,ABe=null,AHR=null,ABM=null,Rq=null,Sa=null,AFU=null,XT=null,AKj=null,AEv=null,AIw=null,AAg=null,AFc=null,AKF=null,Zc=null,Zt=null,Sf=null,AGp=null,AKn=null,AIJ=null,AEE=null,AKv=null;
let Hb=()=>{Hb=Bz(Bv);Ue();};
let Ue=()=>{let b,c;b=new Pi;Hb();TZ=b;AFY=new Pa;Wu=new O_;b=new Pc;AF3=b;VP=b;b=new Dx;b.i0=2;Xo=b;b=new F1;b.i0=2;AAG=b;Sd=b;b=new FW;b.i0=2;AAZ=b;VO=b;ACm=new Pb;WV=new Pe;b=new Dx;b.i0=3;Xn=b;b=new F1;b.i0=3;Td=b;b=new FW;b.i0=3;R3=b;AFh=new Pd;YC=new Pg;b=new Dx;b.i0=4;Xq=b;b=new F1;b.i0=4;VT=b;b=new FW;b.i0=4;AE1=b;b=new Dx;b.i0=5;Xp=b;b=new F1;b.i0=5;AIb=b;b=new FW;b.i0=5;Xu=b;ABe=new Pf;AHR=new Or;ABM=new Ot;b=new Eu;b.kV=2.0;b.k4=10.0;c=EU(2.0,(-10.0));b.lk=c;b.k9=1.0/(1.0-c);Rq=b;b=new IT;b.kV=2.0;b.k4
=10.0;c=EU(2.0,(-10.0));b.lk=c;b.k9=1.0/(1.0-c);Sa=b;b=new J6;b.kV=2.0;b.k4=10.0;c=EU(2.0,(-10.0));b.lk=c;b.k9=1.0/(1.0-c);AFU=b;b=new Eu;b.kV=2.0;b.k4=5.0;c=EU(2.0,(-5.0));b.lk=c;b.k9=1.0/(1.0-c);XT=b;b=new IT;b.kV=2.0;b.k4=5.0;c=EU(2.0,(-5.0));b.lk=c;b.k9=1.0/(1.0-c);AKj=b;b=new J6;b.kV=2.0;b.k4=5.0;c=EU(2.0,(-5.0));b.lk=c;b.k9=1.0/(1.0-c);AEv=b;AIw=new Ou;AAg=new Ov;AFc=new Ow;b=new EX;b.os=2.0;b.ne=10.0;b.nj=1.0;b.nC=(-21.99114990234375);AKF=b;b=new K$;b.os=2.0;b.ne=10.0;b.nj=1.0;b.nC=18.84955596923828;Zc
=b;b=new Nb;b.os=2.0;b.ne=10.0;b.nj=1.0;b.nC=(-21.99114990234375);Zt=b;b=new Nd;b.rt=3.0;Sf=b;b=new LE;b.sy=2.0;AGp=b;b=new QA;b.rV=2.0;AKn=b;b=new MH;Is(b,4);AIJ=b;b=new Nw;Is(b,4);AEE=b;AKv=VZ(4);};
function LE(){Bv.call(this);this.sy=0.0;}
let ZR=D();
let Pd=D(Bv);
let AI3=D();
function Dx(){Bv.call(this);this.i0=0;}
let F1=D(Dx);
let FW=D(Dx);
let G0=D(0);
let VJ=D();
let Pg=D(Bv);
let AG0=D();
let Pc=D(Bv);
function EX(){let a=this;Bv.call(a);a.os=0.0;a.ne=0.0;a.nj=0.0;a.nC=0.0;}
let Pb=D(Bv);
let Pa=D(Bv);
let AD2=D();
let Q8=null,Q$=null,Q9=null;
let AK6=()=>{Q8=new Bq;Q$=new Bq;Q9=new Bq;};
let R6=D(Cv);
let GL=D(0);
function Bq(){let a=this;C.call(a);a.kK=0.0;a.kJ=0.0;}
let K1=null,K0=null,M1=null;
let AK2=()=>{let b;b=new Bq;b.kK=1.0;b.kJ=0.0;K1=b;b=new Bq;b.kK=0.0;b.kJ=1.0;K0=b;b=new Bq;b.kK=0.0;b.kJ=0.0;M1=b;};
let Ov=D(Bv);
function Eu(){let a=this;Bv.call(a);a.kV=0.0;a.k4=0.0;a.lk=0.0;a.k9=0.0;}
let ACh=D();
let Pi=D(Bv);
let J6=D(Eu);
let Yt=D();
let FF=D(BR);
let Wd=null,YL=null,AGB=null,ACH=null;
let AIG=()=>{let b,c,d;b=new FF;b.hv=A(36);b.hk=0;Wd=b;c=new FF;c.hv=A(37);c.hk=1;YL=c;d=new FF;d.hv=A(38);d.hk=2;AGB=d;ACH=P(FF,[b,c,d]);};
let N7=D();
let AIS=null;
let NI=()=>{NI=Bz(N7);AAL();};
let AAL=()=>{let b;b=new Bb;B_();AIS=b;};
function Fa(){let a=this;Bv.call(a);a.rM=null;a.rm=null;}
let Is=(a,b)=>{let c,d,e,f,g,h,i,j;Hb();if(b>=2&&b<=5){a:{c=Cm(b);a.rM=c;d=Cm(b);e=d.data;a.rm=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break a;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break a;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break a;default:break a;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new Bs;g=new K;g.g8=G(16);F(g,g.g6,A(39));J(g,g.g6,b,10);h=new H;c=g.g8;d=c.data;i=g.g6;j=d.length;if(i>=0&&i<=(j-0|0)){h.g7=L(c.data,0,i);f.g9=1;f.g$=1;f.ha=h;E(f);}g=new I;g.g9
=1;g.g$=1;E(g);},
VZ=a=>{let b=new Fa();Is(b,a);return b;};
let Nw=D(Fa);
let Or=D(Bv);
let ACW=D();
let O_=D(Bv);
function EB(){let a=this;C.call(a);a.lz=0.0;a.ly=0.0;a.lA=0.0;a.lx=0.0;}
let AHF=null,AHC=null,AHD=null,AHE=null,Vk=null;
let AJW=()=>{let b;b=new EB;b.lz=1.0;b.ly=0.0;b.lA=0.0;b.lx=0.0;AHF=b;b=new EB;b.lz=0.0;b.ly=1.0;b.lA=0.0;b.lx=0.0;AHC=b;b=new EB;b.lz=0.0;b.ly=0.0;b.lA=1.0;b.lx=0.0;AHD=b;b=new EB;b.lz=0.0;b.ly=0.0;b.lA=0.0;b.lx=1.0;AHE=b;b=new EB;b.lz=0.0;b.ly=0.0;b.lA=0.0;b.lx=0.0;Vk=b;};
let K$=D(EX);
function Nd(){Bv.call(this);this.rt=0.0;}
let Vx=D();
let AKt=D();
let Pe=D(Bv);
function QA(){Bv.call(this);this.rV=0.0;}
let Ow=D(Bv);
let Nb=D(EX);
let Rc=D();
let Xs=null,SJ=null,AJq=null;
let L4=()=>{L4=Bz(Rc);Sv();};
let Sv=()=>{let b,c,d,e,f,g;Xs=R(Bb,15);b=R(Bb,8);SJ=b;c=R(Bb,9);d=c.data;AJq=c;e=0;f=d.length;while(e<f){g=new Bb;B_();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Bb;B_();b[e]=g;e=e+1|0;}};
function HP(){let a=this;C.call(a);a.pU=null;a.p5=null;a.pC=null;a.p6=null;}
let W4=null;
let Kh=()=>{Kh=Bz(HP);AGd();};
let AD6=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.pU;e=b.hb;f=c.hb;if(e<f)f=e;e=b.hd;g=c.hd;if(e<g)g=e;e=b.hc;h=c.hc;if(e<h)h=e;d.hb=f;d.hd=g;d.hc=h;i=a.p5;e=b.hb;g=c.hb;if(e>g)g=e;e=b.hd;h=c.hd;if(e>h)h=e;e=b.hc;f=c.hc;if(e>f)f=e;i.hb=g;i.hd=h;i.hc=f;b=a.pC;h=d.hb;j=d.hd;k=d.hc;b.hb=h;b.hd=j;b.hc=k;e=i.hb;f=i.hd;g=i.hc;h=h+e;j=j+f;k=k+g;b.hb=h;b.hd=j;b.hc=k;f=h*0.5;g=j*0.5;e=k*0.5;b.hb=f;b.hd=g;b.hc=e;b=a.p6;g=i.hb;h=i.hd;j=i.hc;b.hb=g;b.hd=h;b.hc=j;e=d.hb;f=d.hd;k=d.hc;g=g-e;e=h-f;f=j-k;b.hb=g;b.hd=e;b.hc=f;return a;},
AGd=()=>{let b;b=new Bb;B_();W4=b;};
function IM(){let a=this;C.call(a);a.rp=null;a.sf=null;}
let So=null;
let I$=()=>{I$=Bz(IM);AGo();};
let AGo=()=>{let b;b=new Bb;B_();So=b;};
let VR=D();
let SC=D();
let AE6=D();
let Zl=D();
let OS=D();
let Zh=null;
let Je=()=>{Je=Bz(OS);AAi();};
let Xk=b=>{let c;Je();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
AAi=()=>{let b,c,d,e;b=new On;c=W6(Ek(O(4.294967296E9*Math.random()+(-2.147483648E9)|0),32),O(4.294967296E9*Math.random()+(-2.147483648E9)|0));if(C6(c,BM))c=B(0, 2147483648);d=U(F6(c,X(c,33)),B(3981806797, 4283543511));d=U(F6(d,X(d,33)),B(444984403, 3301882366));e=F6(d,X(d,33));d=U(F6(e,X(e,33)),B(3981806797, 4283543511));d=U(F6(d,X(d,33)),B(444984403, 3301882366));d=F6(d,X(d,33));b.q5=e;b.q6=d;Zh=b;};
let P3=D();
let RP=null,RQ=null,RR=null,VA=null,AHe=null,ABk=null,Tr=null,Ts=null,AAX=null,AAT=null,Ya=null,Yd=null,Ye=null,Yg=null,AA0=null,AAV=null,ABx=null,Y_=null,AFx=null,YR=null,AH$=null,AH9=null,AH7=null,ZH=null;
let MG=()=>{MG=Bz(P3);VU();};
let VU=()=>{let b,c;b=new Bb;B_();RP=b;RQ=new Bb;RR=new Bb;b=new JJ;b.qR=1;b.qW=Cm(16);VA=b;b=new JJ;b.qR=1;b.qW=Cm(16);AHe=b;ABk=new Bq;Tr=new Bq;Ts=new Bq;AAX=new Bq;AAT=new Bq;Ya=new Bq;Yd=new Bq;Ye=new Bq;Yg=new Bq;b=new Hf;c=new Bb;b.iF=c;b.i8=0.0;c.hb=0.0;c.hd=0.0;c.hc=0.0;b.i8=0.0;AA0=b;AAV=new Bb;ABx=new Bb;Y_=new Bb;AFx=new Bb;YR=new Bb;AH$=new Bb;AH9=new Bb;AH7=new Bb;ZH=new Bb;};
let TU=D();
let MH=D(Fa);
function Ix(){C.call(this);this.iy=null;}
let K4=null,ABZ=null,AHM=null,GE=null,FK=null,IK=null,Qz=null,LQ=null,ADy=null,AKI=null,ADB=null;
let Dg=()=>{Dg=Bz(Ix);SV();};
let AFI=a=>{let b,c;Dg();b=Cm(16);c=b.data;a.iy=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;},
D3=()=>{let a=new Ix();AFI(a);return a;},
Gm=(a,b)=>{let c;c=b.data;b=a.iy.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;},
ACB=(a,b)=>{let c,d,e,f,g;Dg();c=K4;d=c.data;e=a.iy.data;f=e[0];g=b.iy.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]=e[2]*
g[4]+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return Gm(a,c);},
If=a=>{let b;b=a.iy.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;},
AC3=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;If(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.iy.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;},
Xc=(a,b,c)=>{let d,e,f,g,h,i;Dg();d=GE;e=b.hb;f=b.hd;g=b.hc;d.hb=e;d.hd=f;d.hc=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Dl(f);f=d.hb*e;g=d.hd*e;e=d.hc*e;d.hb=f;d.hd=g;d.hc=e;}d=FK;e=b.hb;f=b.hd;g=b.hc;d.hb=e;d.hd=f;d.hc=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Dl(f);f=d.hb*e;g=d.hd*e;e=d.hc*e;d.hb=f;d.hd=g;d.hc=e;}b=L7(FK,c);e=b.hb;e=e*e;f=b.hd;e=e+f*f;f=b.hc;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/Dl(e);h=b.hb*g;e=b.hd*g;f=b.hc*g;b.hb=h;b.hd=e;b.hc=f;}b=IK;c=FK;e=c.hb;f=c.hd;g=c.hc;b.hb=e;b.hd=f;b.hc=g;b=L7(b,
GE);e=b.hb;e=e*e;f=b.hd;e=e+f*f;f=b.hc;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/Dl(f);f=b.hb*e;g=b.hd*e;e=b.hc*e;b.hb=f;b.hd=g;b.hc=e;}If(a);i=a.iy.data;b=FK;i[0]=b.hb;i[4]=b.hd;i[8]=b.hc;b=IK;i[1]=b.hb;i[5]=b.hd;i[9]=b.hc;b=GE;i[2]= -b.hb;i[6]= -b.hd;i[10]= -b.hc;return a;},
Sn=(b,c)=>{let d,e,f;Dg();d=b.data;c=c.data;e=Cm(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+d[6]*c[5]
+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];Fm(e,0,b,0,16);},
AIt=b=>{Dg();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]*b[4]*b[10]
*b[15]+b[0]*b[5]*b[10]*b[15];},
XA=b=>{let c,d,e;Dg();c=Cm(16);d=AIt(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]*b[10]*
b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]=b[12]*
b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]*b[3]
-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;},
Zz=(b,c,d)=>{let e,f,g,h,i,j,k,l;Dg();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;},
SV=()=>{let b;K4=Cm(16);b=new Dm;b.jL=0.0;b.jI=0.0;b.jJ=0.0;b.jK=1.0;ABZ=b;b=new Dm;b.jL=0.0;b.jI=0.0;b.jJ=0.0;b.jK=1.0;AHM=b;b=new Bb;B_();GE=b;FK=new Bb;IK=new Bb;Qz=new Bb;LQ=D3();ADy=new Bb;AKI=new Bb;ADB=new Bb;};
let LP=D(0);
let I_=D();
function On(){let a=this;I_.call(a);a.q5=BM;a.q6=BM;}
let Ou=D(Bv);
let Pf=D(Bv);
function JB(){let a=this;C.call(a);a.kD=null;a.jT=null;a.mQ=null;}
let AKC=null,Qs=null,AC7=null;
let GF=()=>{GF=Bz(JB);AAU();};
let SI=a=>{let b,c,d,e,f,g;GF();b=R(Hf,6);c=b.data;a.kD=b;b=R(Bb,8);d=b.data;e=new Bb;B_();d[0]=e;d[1]=new Bb;d[2]=new Bb;d[3]=new Bb;d[4]=new Bb;d[5]=new Bb;d[6]=new Bb;d[7]=new Bb;a.jT=b;a.mQ=Cm(24);f=0;while(f<6){e=new Hf;g=new Bb;e.iF=g;e.i8=0.0;g.hb=0.0;g.hd=0.0;g.hc=0.0;e.i8=0.0;c[f]=e;f=f+1|0;}},
AEX=()=>{let a=new JB();SI(a);return a;},
ADP=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;GF();c=Qs;d=c.data;Fm(c,0,a.mQ,0,d.length);c=b.iy;e=a.mQ;f=0;Dg();g=0;while(g<8){Zz(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.jT.data[f];c=a.mQ.data;j=h+1|0;i.hb=c[h];g=j+1|0;i.hd=c[j];h=g+1|0;i.hc=c[g];f=f+1|0;}b=a.kD.data[0];c=a.jT.data;i=c[1];k=c[0];l=c[2];m=b.iF;n=i.hb;o=i.hd;p=i.hc;m.hb=n;m.hd=o;m.hc=p;q=k.hb;r=k.hd;s=k.hc;t=n-q;u=o-r;p=p-s;m.hb=t;m.hd=u;m.hc=p;q=k.hb-l.hb;r=k.hd-l.hd;s=k.hc-l.hc;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.hb=n;m.hd=s;m.hc
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hb*q;s=m.hd*q;q=m.hc*q;m.hb=r;m.hd=s;m.hc=q;}k=b.iF;b.i8= -(i.hb*k.hb+i.hd*k.hd+i.hc*k.hc);b=a.kD.data[1];c=a.jT.data;i=c[4];k=c[5];l=c[7];m=b.iF;n=i.hb;o=i.hd;p=i.hc;m.hb=n;m.hd=o;m.hc=p;q=k.hb;r=k.hd;s=k.hc;t=n-q;u=o-r;p=p-s;m.hb=t;m.hd=u;m.hc=p;q=k.hb-l.hb;r=k.hd-l.hd;s=k.hc-l.hc;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.hb=n;m.hd=s;m.hc=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hb*q;s=m.hd*q;q=m.hc*q;m.hb=r;m.hd=s;m.hc=q;}k=b.iF;b.i8= -(i.hb*k.hb+i.hd
*k.hd+i.hc*k.hc);b=a.kD.data[2];c=a.jT.data;i=c[0];k=c[4];l=c[3];m=b.iF;n=i.hb;o=i.hd;t=i.hc;m.hb=n;m.hd=o;m.hc=t;r=k.hb;q=k.hd;s=k.hc;r=n-r;u=o-q;p=t-s;m.hb=r;m.hd=u;m.hc=p;q=k.hb-l.hb;s=k.hd-l.hd;n=k.hc-l.hc;o=u*n-p*s;n=p*q-r*n;s=r*s-u*q;m.hb=o;m.hd=n;m.hc=s;r=o*o+n*n+s*s;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hb*q;s=m.hd*q;q=m.hc*q;m.hb=r;m.hd=s;m.hc=q;}k=b.iF;b.i8= -(i.hb*k.hb+i.hd*k.hd+i.hc*k.hc);b=a.kD.data[3];c=a.jT.data;k=c[5];i=c[1];l=c[6];m=b.iF;n=k.hb;t=k.hd;u=k.hc;m.hb=n;m.hd=t;m.hc=u;q=i.hb;r=i.hd;s
=i.hc;o=n-q;t=t-r;u=u-s;m.hb=o;m.hd=t;m.hc=u;p=i.hb-l.hb;q=i.hd-l.hd;r=i.hc-l.hc;s=t*r-u*q;r=u*p-o*r;n=o*q-t*p;m.hb=s;m.hd=r;m.hc=n;r=s*s+r*r+n*n;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hb*q;s=m.hd*q;q=m.hc*q;m.hb=r;m.hd=s;m.hc=q;}i=b.iF;b.i8= -(k.hb*i.hb+k.hd*i.hd+k.hc*i.hc);b=a.kD.data[4];c=a.jT.data;i=c[2];k=c[3];l=c[6];m=b.iF;n=i.hb;o=i.hd;p=i.hc;m.hb=n;m.hd=o;m.hc=p;q=k.hb;r=k.hd;s=k.hc;t=n-q;u=o-r;p=p-s;m.hb=t;m.hd=u;m.hc=p;q=k.hb-l.hb;r=k.hd-l.hd;s=k.hc-l.hc;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.hb=n;m.hd=s;m.hc
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hb*q;s=m.hd*q;q=m.hc*q;m.hb=r;m.hd=s;m.hc=q;}k=b.iF;b.i8= -(i.hb*k.hb+i.hd*k.hd+i.hc*k.hc);b=a.kD.data[5];c=a.jT.data;i=c[4];k=c[0];l=c[1];m=b.iF;n=i.hb;o=i.hd;p=i.hc;m.hb=n;m.hd=o;m.hc=p;q=k.hb;r=k.hd;s=k.hc;t=n-q;u=o-r;p=p-s;m.hb=t;m.hd=u;m.hc=p;q=k.hb-l.hb;r=k.hd-l.hd;s=k.hc-l.hc;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.hb=n;m.hd=s;m.hc=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hb*q;s=m.hd*q;q=m.hc*q;m.hb=r;m.hd=s;m.hc=q;}k=b.iF;b.i8= -(i.hb*k.hb+i.hd
*k.hd+i.hc*k.hc);},
AAU=()=>{let b,c,d,e,f,g,h,i,j;b=R(Bb,8);c=b.data;d=new Bb;B_();d.hb=(-1.0);d.hd=(-1.0);d.hc=(-1.0);c[0]=d;d=new Bb;d.hb=1.0;d.hd=(-1.0);d.hc=(-1.0);c[1]=d;d=new Bb;d.hb=1.0;d.hd=1.0;d.hc=(-1.0);c[2]=d;d=new Bb;d.hb=(-1.0);d.hd=1.0;d.hc=(-1.0);c[3]=d;d=new Bb;d.hb=(-1.0);d.hd=(-1.0);d.hc=1.0;c[4]=d;d=new Bb;d.hb=1.0;d.hd=(-1.0);d.hc=1.0;c[5]=d;d=new Bb;d.hb=1.0;d.hd=1.0;d.hc=1.0;c[6]=d;d=new Bb;d.hb=(-1.0);d.hd=1.0;d.hc=1.0;c[7]=d;AKC=b;b=Cm(24);e=b.data;Qs=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1|0;e[f]
=d.hb;j=i+1|0;e[i]=d.hd;f=j+1|0;e[j]=d.hc;h=h+1|0;}AC7=new Bb;};
function Dm(){let a=this;C.call(a);a.jL=0.0;a.jI=0.0;a.jJ=0.0;a.jK=0.0;}
let M9=null,M8=null;
let ALq=()=>{let b;b=new Dm;b.jL=0.0;b.jI=0.0;b.jJ=0.0;b.jK=0.0;M9=b;b=new Dm;b.jL=0.0;b.jI=0.0;b.jJ=0.0;b.jK=0.0;M8=b;};
let RW=D();
let ADu=D();
function Bb(){let a=this;C.call(a);a.hb=0.0;a.hd=0.0;a.hc=0.0;}
let U$=null,U_=null,U9=null,ACx=null,AJa=null;
let B_=()=>{B_=Bz(Bb);Ty();};
let L7=(a,b)=>{let c,d,e,f,g,h,i;c=a.hd;d=b.hc;e=c*d;f=a.hc;g=b.hd;h=e-f*g;e=b.hb;f=f*e;i=a.hb;d=f-i*d;c=i*g-c*e;a.hb=h;a.hd=d;a.hc=c;return a;},
Ty=()=>{let b;b=new Bb;B_();b.hb=1.0;b.hd=0.0;b.hc=0.0;U$=b;b=new Bb;b.hb=0.0;b.hd=1.0;b.hc=0.0;U_=b;b=new Bb;b.hb=0.0;b.hd=0.0;b.hc=1.0;U9=b;b=new Bb;b.hb=0.0;b.hd=0.0;b.hc=0.0;ACx=b;AJa=D3();};
let Yw=D();
let WO=D(Cv);
let IT=D(Eu);
let AD0=D();
let Ui=D();
let AHl=D();
function Hf(){let a=this;C.call(a);a.iF=null;a.i8=0.0;}
let Ot=D(Bv);
let AHo=D();
let Uq=D();
let AEZ=D();
let AHk=D();
let ACT=D(0);
let YI=D();
let AFD=D();
let H0=null;
let Wr=()=>{let b,c;H0=Cm(16384);b=0;while(b<16384){H0.data[b]=P_((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=H0.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);};
function HK(){let a=this;C.call(a);a.rQ=null;a.ra=null;}
let Tq=null,AJf=null;
let I8=()=>{I8=Bz(HK);V5();};
let V5=()=>{let b,c,d,e,f,g,h,$$je;Gy();b=Fl;c=Du(b,Bk(C4));b=c<0?null:b.jE.data[c];if(b===null){b=new H8;d=new Cy;d.iI=0;d.hV=R(C,4);b.mo=d;b.mx=100;a:{try{d=Op(Bk(C4),null);break a;}catch($$e){$$je=BP($$e);if($$je instanceof CE){}else{throw $$e;}}try{d=Mj(Bk(C4),null);Pm(d,1);break a;}catch($$e){$$je=BP($$e);if($$je instanceof D_){}else{throw $$e;}}d=null;}b.oI=d;if(d===null){b=new BA;d=new K;d.g8=G(16);F(d,d.g6,A(30));if(Bk(C4).ig===null)Bk(C4).ig=V(Bk(C4).hF.$meta.name);e=Bk(C4).ig;F(d,d.g6,e);e=new H;f
=d.g8;g=f.data;c=d.g6;h=g.length;if(c>=0&&c<=(h-0|0)){e.g7=L(f.data,0,c);b.g9=1;b.g$=1;b.ha=e;E(b);}e=new I;e.g9=1;e.g$=1;E(e);}DE(Fl,Bk(C4),b);}Tq=b;e=new GV;e.nm=1;e.jA=S(4);AJf=e;};
let JU=D();
let ADq=D(JU);
let MS=D();
let AEK=D();
let Lg=null;
let AL6=()=>{Lg=new Bw;};
function Bw(){let a=this;C.call(a);a.iw=0.0;a.iv=0.0;a.iu=0.0;a.it=0.0;}
let Mv=null,Y3=null,ADg=null,AKk=null,Zy=null,ADJ=0.0,S6=null,AI2=null,R9=null,AHH=null,AIy=null,AEb=null,AG5=null,Yk=null,XL=null,AFm=null,AJe=null,AHz=null,AKB=null,SU=null,Zw=null,AKw=null,AB9=null,AJr=null,AIj=null,AGX=null,AB6=null,Sp=null,ABQ=null,X3=null,Y7=null,Xw=null,ABL=null,AEN=null,AFE=null;
let Da=a=>{let b,c;b=a.iw;if(b<0.0)a.iw=0.0;else if(b>1.0)a.iw=1.0;c=a.iv;if(c<0.0)a.iv=0.0;else if(c>1.0)a.iv=1.0;c=a.iu;if(c<0.0)a.iu=0.0;else if(c>1.0)a.iu=1.0;c=a.it;if(c<0.0)a.it=0.0;else if(c>1.0)a.it=1.0;return a;},
AIc=a=>{return Ig(((255.0*a.it|0)<<24|(255.0*a.iu|0)<<16|(255.0*a.iv|0)<<8|255.0*a.iw|0)&(-16777217));},
BV=(b,c)=>{b.iw=((c&(-16777216))>>>24|0)/255.0;b.iv=((c&16711680)>>>16|0)/255.0;b.iu=((c&65280)>>>8|0)/255.0;b.it=(c&255)/255.0;},
RK=()=>{let b;b=new Bw;b.iw=1.0;b.iv=1.0;b.iu=1.0;b.it=1.0;Da(b);Mv=b;b=new Bw;BV(b,(-1077952513));Y3=b;b=new Bw;BV(b,2139062271);ADg=b;b=new Bw;BV(b,1061109759);AKk=b;b=new Bw;b.iw=0.0;b.iv=0.0;b.iu=0.0;b.it=1.0;Da(b);Zy=b;ADJ=AIc(Mv);b=new Bw;b.iw=0.0;b.iv=0.0;b.iu=0.0;b.it=0.0;Da(b);S6=b;b=new Bw;b.iw=0.0;b.iv=0.0;b.iu=1.0;b.it=1.0;Da(b);AI2=b;b=new Bw;b.iw=0.0;b.iv=0.0;b.iu=0.5;b.it=1.0;Da(b);R9=b;b=new Bw;BV(b,1097458175);AHH=b;b=new Bw;BV(b,1887473919);AIy=b;b=new Bw;BV(b,(-2016482305));AEb=b;b=new Bw;b.iw
=0.0;b.iv=1.0;b.iu=1.0;b.it=1.0;Da(b);AG5=b;b=new Bw;b.iw=0.0;b.iv=0.5;b.iu=0.5;b.it=1.0;Da(b);Yk=b;b=new Bw;BV(b,16711935);XL=b;b=new Bw;BV(b,2147418367);AFm=b;b=new Bw;BV(b,852308735);AJe=b;b=new Bw;BV(b,579543807);AHz=b;b=new Bw;BV(b,1804477439);AKB=b;b=new Bw;BV(b,(-65281));SU=b;b=new Bw;BV(b,(-2686721));Zw=b;b=new Bw;BV(b,(-626712321));AKw=b;b=new Bw;BV(b,(-5963521));AB9=b;b=new Bw;BV(b,(-1958407169));AJr=b;b=new Bw;BV(b,(-759919361));AIj=b;b=new Bw;BV(b,(-1306385665));AGX=b;b=new Bw;BV(b,(-16776961));AB6
=b;b=new Bw;BV(b,(-13361921));Sp=b;b=new Bw;BV(b,(-8433409));ABQ=b;b=new Bw;BV(b,(-92245249));X3=b;b=new Bw;BV(b,(-9849601));Y7=b;b=new Bw;b.iw=1.0;b.iv=0.0;b.iu=1.0;b.it=1.0;Da(b);Xw=b;b=new Bw;BV(b,(-1608453889));ABL=b;b=new Bw;BV(b,(-293409025));AEN=b;b=new Bw;BV(b,(-1339006721));AFE=b;};
let Ke=D();
let AGq=D(Ke);
let AKr=null;
let AFo=()=>{let b,c,d,e;b=new GG;c=Hj(16);b.kj=0;d=R(Ep,c);e=d.data;b.jH=d;b.mW=0.75;b.kY=e.length*0.75|0;AKr=b;};
function Cy(){let a=this;C.call(a);a.hV=null;a.h2=0;a.iI=0;a.m$=null;}
let Di=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=a.hV;d=c.data;e=a.h2;if(e!=d.length)f=c;else{g=e*1.75|0;if(8>g)g=8;h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new Ca;i.hF=h;f=i;h.classObject=f;}}f=DS(i);if(f===null){b=new CU;b.g9=1;b.g$=1;E(b);}if(f===Bk(CQ)){b=new Bs;b.g9=1;b.g$=1;E(b);}if(g<0){b=new DK;b.g9=1;b.g$=1;E(b);}f=D4(f.hF,g);j=f.data;k=a.h2;l=j.length;if(k<l)l=k;GP(c,0,f,0,l);a.hV=f;}f=f.data;g=a.h2;a.h2=g+1|0;f[g]=b;},
W$=a=>{let b,c,d,e,f,g;b=a.hV;c=0;d=a.h2;e=null;if(c>d){e=new Bs;e.g9=1;e.g$=1;E(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.h2=0;},
Nn=a=>{let b;if(KO){b=new Fx;b.i2=1;b.lg=a;b.mv=1;return b;}if(a.m$===null){b=new Lk;b.nI=a;b.om=1;a.m$=b;}return Zk(a.m$);};
function Hs(){let a=this;C.call(a);a.n6=0;a.kk=null;a.jE=null;a.px=0.0;a.oz=0;a.mO=0;a.mL=0;}
let Ms=null;
let ACn=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.px=c;d=G8(b,c);a.oz=d*c|0;b=d-1|0;a.mL=b;a.mO=DV(O(b));a.kk=R(C,d);a.jE=R(C,d);return;}e=new Bs;f=new K;f.g8=G(16);F(f,f.g6,A(40));GS(f,f.g6,c);g=new H;h=f.g8;i=h.data;d=f.g6;j=i.length;if(d>=0&&d<=(j-0|0)){g.g7=L(h.data,0,d);e.g9=1;e.g$=1;e.ha=g;E(e);}f=new I;f.g9=1;f.g$=1;E(f);},
DI=(a,b)=>{let c=new Hs();ACn(c,a,b);return c;},
Du=(a,b)=>{let c,d,e;if(b===null){c=new Bs;c.g9=1;c.g$=1;c.ha=A(41);E(c);}d=a.kk;e=Bd(X(U(O(b.W()),B(2135587861, 2654435769)),a.mO));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.X(b))break;e=(e+1|0)&a.mL;}return e;},
DE=(a,b,c)=>{let d,e,f;d=Du(a,b);if(d>=0){e=a.jE.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.kk.data;e[d]=b;a.jE.data[d]=c;d=a.n6+1|0;a.n6=d;if(d>=a.oz)Vp(a,e.length<<1);return null;},
Vp=(a,b)=>{let c,d,e,f,g,h,i,j;a:{c=a.kk.data.length;a.oz=b*a.px|0;d=b-1|0;a.mL=d;a.mO=DV(O(d));e=a.kk;f=a.jE;a.kk=R(C,b);a.jE=R(C,b);if(a.n6>0){d=0;while(true){if(d>=c)break a;g=e.data[d];if(g!==null){h=f.data[d];i=a.kk;b=Bd(X(U(O(g.W()),B(2135587861, 2654435769)),a.mO));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.mL;}j[b]=g;a.jE.data[b]=h;}d=d+1|0;}}}},
AK_=()=>{Ms=new C;};
let Y$=D(Hs);
let AJK=D();
function Et(){let a=this;C.call(a);a.jh=0;a.jo=0;a.kg=0;a.jZ=0;a.kp=0;a.j9=null;a.mK=0;a.mC=0;}
let AJZ=D();
let AAp=D();
let ADr=D();
let ABH=D();
let Nl=D();
let R8=null;
let Oi=()=>{Oi=Bz(Nl);AAv();};
let AAv=()=>{let b,c,d;b=new HP;Kh();c=new Bb;B_();b.pU=c;d=new Bb;b.p5=d;b.pC=new Bb;b.p6=new Bb;c.hb=0.0;c.hd=0.0;c.hc=0.0;d.hb=0.0;d.hd=0.0;d.hc=0.0;AD6(b,c,d);R8=b;};
let ST=D();
let ACr=D();
let ABl=D();
let AB2=D();
let AGY=D();
let YD=D();
let AIm=D();
let Z6=D();
let Uw=D();
let VB=D();
let He=D(BR);
let AKl=null,AIp=null,X8=null;
let Y6=()=>{let b,c;b=new He;b.hv=A(42);b.hk=0;AKl=b;c=new He;c.hv=A(43);c.hk=1;AIp=c;X8=P(He,[b,c]);};
let ACu=D();
let OZ=D(0);
let CG=D();
let S4=D(CG);
let S3=D(CG);
let AAR=D(CG);
let WH=D(CG);
let AE8=D(CG);
let IP=D(CG);
let Ww=D(IP);
let FO=D(0);
let Xv=D();
let D5=D(0);
let AEY=D();
let AIi=D();
let Va=D();
let DC=D();
let AD8=D(DC);
let FL=D(DC);
let CR=D(FL);
let XK=null;
let MR=()=>{MR=Bz(CR);Tw();};
let Tw=()=>{let b;b=new Bb;B_();XK=b;};
let AEJ=D();
let AGW=D(CR);
let AAh=D(CR);
let AI0=D(DC);
let Nc=null;
let ALg=()=>{Nc=Cm(3);};
let Ik=D(DC);
let SN=D(Ik);
let Ws=D(CR);
let Fj=D(FL);
let ABC=D(Fj);
let AAe=D(CR);
let AB4=D(CR);
let ABA=D(Fj);
let FJ=D(BR);
let ABq=null,AD3=null,XM=null,Vr=null;
let ADn=()=>{let b,c,d;b=new FJ;b.hv=A(44);b.hk=0;ABq=b;c=new FJ;c.hv=A(45);c.hk=1;AD3=c;d=new FJ;d.hv=A(46);d.hk=2;XM=d;Vr=P(FJ,[b,c,d]);};
let Ev=D();
let Ju=D(Ev);
let RC=D(Ju);
let FX=D(BR);
let AIo=null,AIU=null,Rl=null,AI7=null;
let ZK=()=>{let b,c,d;b=new FX;b.hv=A(47);b.hk=0;AIo=b;c=new FX;c.hv=A(48);c.hk=1;AIU=c;d=new FX;d.hv=A(49);d.hk=2;Rl=d;AI7=P(FX,[b,c,d]);};
let Ce=D(Ev);
let F9=D(Ce);
let U1=D();
let E5=D(Ce);
let AHt=null,AHs=null,AHu=null,AIu=null;
let PD=()=>{PD=Bz(E5);AA9();};
let AA9=()=>{let b;b=new Bb;B_();AHt=b;AHs=new Bb;AHu=new Bb;b=new Dm;b.jL=0.0;b.jI=0.0;b.jJ=0.0;b.jK=1.0;AIu=b;};
let Ds=D(E5);
let Ex=D(Ds);
let Xr=D(Ex);
let FV=D(Ce);
let AKx=D(FV);
let AGT=D(Ce);
let Ef=D(Ce);
let SX=D(Ef);
let Fv=D(Ce);
let Xj=D(Ds);
let Zg=D(Ds);
let HZ=D(Ce);
let AD9=D(HZ);
let T9=D(Ef);
let AAn=D(Ex);
let AD1=D(Ce);
let ACd=D(Ef);
let AEc=D(Ce);
let AFz=D(E5);
let Zn=D(Cv);
let UF=D(Cv);
let UU=D(Ds);
let AEB=D(Fv);
let AI1=D(F9);
let AC2=D(F9);
let AFl=D(Fv);
let AA_=D(Ex);
let AJB=D(FV);
let DA=D(Ev);
let ABG=D(DA);
let El=D();
let AET=D(El);
let AFS=D(DA);
let AGS=D(DA);
let AHO=D(El);
let W5=D(DA);
let AGZ=D(El);
let HG=D(0);
let Ko=D(0);
function Ca(){let a=this;C.call(a);a.ig=null;a.hF=null;a.k0=null;}
let PJ=0;
let ALM=b=>{let c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Ca;c.hF=b;d=c;b.classObject=d;}return c;},
DS=a=>{let b,c,d;b=a.hF.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new Ca;c.hF=b;d=c;b.classObject=d;}}return c;},
AAK=()=>{C5.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CQ,callable:null},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:CQ,callable:null}];C4.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CQ,callable:null},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes:[C4],returnType:CQ,callable:null},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CQ,callable:null},{name:"toString",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:H,callable:null}];},
Kb=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.hF.$meta.primitive?1:0)&&!(a.hF.$meta.item===null?0:1)){if(a.k0===null){if(!PJ){PJ=1;AAK();}b=a.hF.$meta.methods;a.k0=R(FN,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof E0())?e:e[Be]===true?e:e.hy;g=V(f.name);if(g===A(50))h=1;else if(!(A(50) instanceof H))h=0;else{e=A(50);h=g.g7!==e.g7?0:1;}if(h){g=f.parameterTypes;i=R(Ca,g.length);j=i.data;h=0;k=j.length;while(h<k){l=g[h];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new Ca;e.hF
=l;m=e;l.classObject=m;}}j[h]=e;h=h+1|0;}j=a.k0.data;h=c+1|0;e=new FN;g=V(f.name);k=f.modifiers;n=f.accessLevel;f=CC(f.callable,"call");e.rN=a;e.rL=g;e.n9=k;e.nG=n;e.n1=i;e.sl=f;j[c]=e;c=h;}d=d+1|0;}i=a.k0;b=i.constructor;if(b===null)e=null;else{e=b.classObject;if(e===null){e=new Ca;e.hF=b;f=e;b.classObject=f;}}e=DS(e);if(e===null){e=new CU;e.g9=1;e.g$=1;E(e);}if(e===Bk(CQ)){e=new Bs;e.g9=1;e.g$=1;E(e);}if(c<0){e=new DK;e.g9=1;e.g$=1;E(e);}i=i.data;f=D4(e.hF,c);d=i.length;if(c<d)d=c;c=0;while(c<d){f.data[c]
=i[c];c=c+1|0;}a.k0=f;}return a.k0.p();}return R(FN,0);},
AJb=a=>{let b,c,d,e,f,g,h,i,j,k;b=(Kb(a)).data;c=b.length;d=R(FN,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(Mh(h.n9,h.nG)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=B4(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new Ca;h.hF=j;k=h;j.classObject=k;}}j=DS(h);if(j===null){h=new CU;h.g9=1;h.g$=1;E(h);}if(j===Bk(CQ)){h=new Bs;h.g9=1;h.g$=1;E(h);}if(f<0){h=new DK;h.g9=1;h.g$=1;E(h);}k=D4(j.hF,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;},
AGA=(a,b)=>{let c,d,e,f;c=(Kb(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new FC;f.g9=1;f.g$=1;E(f);}f=c[e];if(PQ(f.n1.p(),b))break;e=e+1|0;}return f;},
AGy=(a,b)=>{let c,d,e,f,g;c=(Kb(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new FC;f.g9=1;f.g$=1;E(f);}f=c[e];g=!(Mh(f.n9,f.nG)&1)?0:1;if(g&&PQ(f.n1.p(),b))break;e=e+1|0;}return f;};
let VH=D();
let BL=(b,c)=>{let name='jso$functor$'+c;let result=b[name];if(typeof result!=='function'){let fn=function(){return b[c].apply(b,arguments);};result=()=>fn;b[name]=result;}return result();},
CC=(b,c)=>{if(typeof b!=='function')return b;let result={};result[c]=b;return result;};
let UK=D();
let R2=b=>{let copy=new b.constructor();for(let field in b){if(b.hasOwnProperty(field)){copy[field]=b[field];}}return copy;},
OA=(b,c)=>{let d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(OA(d[e],c))return 1;e=e+1|0;}return 0;},
Dz=b=>{setTimeout(()=>{ALS(La)(b);},0);},
La=b=>{b.bg();},
JG=(b,c)=>{setTimeout(()=>{La(b);},c);},
AAw=()=>{return [];};
function CT(){let a=this;C.call(a);a.ha=null;a.kt=null;a.g9=0;a.g$=0;a.rA=null;}
let Y=a=>{a.g9=1;a.g$=1;},
ALY=()=>{let a=new CT();Y(a);return a;},
Bl=a=>{return a;},
AF1=a=>{return a.ha;},
ALk=a=>{return a.bh();},
ALU=a=>{let b;b=a.kt;if(b===a)b=null;return b;},
ALo=a=>{let b,c;if(Ct===null){b=new Eo;c=new B5;c.h8=BF(32);b.ii=c;c=new K;BB(c);c.g8=G(16);b.h$=c;b.h9=G(32);b.ic=0;b.id=BX;Ct=b;}Hq(a,Ct);},
Hq=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new Ca;d.hF=c;e=d;c.classObject=e;}}if(d.ig===null)d.ig=V(d.hF.$meta.name);CI(Br(d.ig));d=a.bh();if(d!==null){c=new K;c.g8=G(16);F(c,c.g6,A(51));F(c,c.g6,d);e=new H;f=c.g8;g=f.data;h=c.g6;i=g.length;if(h>=0&&h<=(i-0|0)){e.g7=L(f.data,0,h);CI(Br(e));}else{b=new I;b.g9=1;b.g$=1;E(b);}}a:{CI("\n");f=a.rA;if(f!==null){f=f.data;j=f.length;h=0;while(true){if(h>=j)break a;e=f[h];CI("\tat ");c=A(2);if(e!==null)c=e.bj();CI(Br(c));CI("\n");h
=h+1|0;}}}c=a.kt;if(c!==null&&c!==a){CI("Caused by: ");Hq(a.kt,b);}};
let CE=D(CT);
let E4=a=>{a.g9=1;a.g$=1;},
AKQ=()=>{let a=new CE();E4(a);return a;};
let BA=D(CE);
let HH=a=>{a.g9=1;a.g$=1;},
ALb=()=>{let a=new BA();HH(a);return a;},
AIQ=(a,b)=>{a.g9=1;a.g$=1;a.ha=b;},
AK4=a=>{let b=new BA();AIQ(b,a);return b;};
let AAa=D(BA);
let J1=D(0);
function H(){C.call(this);this.h4=0;}
let QG=null,I2=null,Ky=null;
let SP=(a,b)=>{a.g7=L(b.data,0,b.data.length);},
AKS=a=>{let b=new H();SP(b,a);return b;},
Yu=(a,b)=>{a.g7=b;},
OU=a=>{let b=new H();Yu(b,a);return b;},
Jn=(a,b,c)=>{let d,e,f;if((c+b.g7.length|0)>a.g7.length)return 0;d=0;a:{b:{while(d<b.g7.length){if(d<0)break a;if(d>=b.g7.length)break a;e=b.g7.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=a.g7.length)break b;if(e!=a.g7.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new Q;b.g9=1;b.g$=1;E(b);}b=new Q;b.g9=1;b.g$=1;E(b);},
FY=(a,b,c)=>{let d,e,f;if(0>c)c=0;if(b<65536){d=b&65535;while(true){if(c>=a.g7.length)return (-1);if(a.g7.charCodeAt(c)==d)break;c=c+1|0;}return c;}e=(55296|(b-65536|0)>>10&1023)&65535;f=(56320|b&1023)&65535;while(true){if(c>=(a.g7.length-1|0))return (-1);if(a.g7.charCodeAt(c)==e&&a.g7.charCodeAt((c+1|0))==f)break;c=c+1|0;}return c;},
Fo=(a,b,c)=>{let d,e,f,g;d=a.g7.length-1|0;if(c<d)d=c;if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.g7.charCodeAt(d)==e)break;d=d+(-1)|0;}return d;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){if(d<1)return (-1);if(a.g7.charCodeAt(d)==g){b=d-1|0;if(a.g7.charCodeAt(b)==f)break;}d=d+(-1)|0;}return b;},
Md=(a,b,c)=>{let d,e,f,g;if(0>c)c=0;d=a.g7.length-b.g7.length|0;a:{b:{c:while(true){if(c>d)return (-1);e=0;while(true){if(e>=b.g7.length)break c;f=c+e|0;if(f<0)break a;if(f>=a.g7.length)break a;g=a.g7.charCodeAt(f);if(e<0)break b;if(e>=b.g7.length)break b;if(g!=b.g7.charCodeAt(e))break;e=e+1|0;}c=c+1|0;}return c;}b=new Q;b.g9=1;b.g$=1;E(b);}b=new Q;b.g9=1;b.g$=1;E(b);},
WS=(a,b,c)=>{let d,e,f;d=a.g7.length-b.g7.length|0;if(c<d)d=c;a:{b:{c:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.g7.length)break c;f=d+e|0;if(f<0)break a;if(f>=a.g7.length)break a;f=a.g7.charCodeAt(f);if(e<0)break b;if(e>=b.g7.length)break b;if(f!=b.g7.charCodeAt(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}b=new Q;b.g9=1;b.g$=1;E(b);}b=new Q;b.g9=1;b.g$=1;E(b);},
Cb=(a,b,c)=>{let d,e,f;d=a.g7.length;e=B4(b,c);if(!e)return I2;if(!b&&c==d)return a;if(b>=0&&e<=0&&c<=d)return OU(a.g7.substring(b,c));f=new Q;f.g9=1;f.g$=1;E(f);},
Cl=(a,b)=>{let c,d,e,f;c=a.g7.length-b.g7.length|0;d=0;a:{b:{while(d<=c){e=0;while(true){if(e>=b.g7.length)return 1;f=d+e|0;if(f<0)break a;if(f>=a.g7.length)break a;f=a.g7.charCodeAt(f);if(e<0)break b;if(e>=b.g7.length)break b;if(f!=b.g7.charCodeAt(e))break;e=e+1|0;}d=d+1|0;}return 0;}b=new Q;b.g9=1;b.g$=1;E(b);}b=new Q;b.g9=1;b.g$=1;E(b);},
Ps=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new K;d.g8=G(16);e=a.g7.length-b.g7.length|0;f=0;a:{b:{c:while(true){if(f>e){b=Cb(a,f,a.g7.length);g=d.g6;if(b===null)b=A(2);F(d,g,b);b=new H;h=d.g8;i=h.data;j=d.g6;e=i.length;if(j>=0&&j<=(e-0|0)){b.g7=L(h.data,0,j);return b;}b=new I;b.g9=1;b.g$=1;E(b);}k=0;d:{while(k<b.g7.length){j=f+k|0;if(j<0)break b;if(j>=a.g7.length)break b;j=a.g7.charCodeAt(j);if(k<0)break c;if(k>=b.g7.length)break c;if(j!=b.g7.charCodeAt(k)){if(f<0)break a;if(f>=a.g7.length)break a;k=a.g7.charCodeAt(f);j
=d.g6;Bn(d,j,j+1|0);d.g8.data[j]=k;break d;}k=k+1|0;}F(d,d.g6,c===null?A(2):c);f=f+(b.g7.length-1|0)|0;}f=f+1|0;}b=new Q;b.g9=1;b.g$=1;E(b);}b=new Q;b.g9=1;b.g$=1;E(b);}b=new Q;b.g9=1;b.g$=1;E(b);},
AAO=a=>{let b,c,d;b=0;c=a.g7.length-1|0;a:{while(true){if(b>c)break a;if(b<0)break;if(b>=a.g7.length)break;if(a.g7.charCodeAt(b)>32)break a;b=b+1|0;}d=new Q;d.g9=1;d.g$=1;E(d);}b:{while(b<=c){if(c<0)break b;if(c>=a.g7.length)break b;if(a.g7.charCodeAt(c)>32)break;c=c+(-1)|0;}return Cb(a,b,c+1|0);}d=new Q;d.g9=1;d.g$=1;E(d);},
Cn=a=>{return a;},
AIv=(a,b)=>{let c;if(a===b)return 1;if(!(b instanceof H))return 0;c=b;return a.g7!==c.g7?0:1;},
ADH=a=>{let b;a:{if(!a.h4){b=0;while(true){if(b>=a.g7.length)break a;a.h4=(31*a.h4|0)+a.g7.charCodeAt(b)|0;b=b+1|0;}}}return a.h4;},
AL2=()=>{let b;QG=G(0);b=new H;b.g7="";I2=b;Ky=new J8;};
let Dr=D();
function Ed(){Dr.call(this);this.jq=0;}
let KC=null,De=null;
let HU=(b,c)=>{if(b!==null)return QF(b,0,b.g7.length,c);b=new B0;b.g9=1;b.g$=1;b.ha=A(52);E(b);},
QF=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;if(c==d){b=new B0;b.g9=1;b.g$=1;b.ha=A(53);E(b);}if(e>=2&&e<=36){f=0;if(c>=0&&c<b.g7.length){a:{switch(b.g7.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=0;i=1+(2147483647/e|0)|0;if(g==d){b=new B0;b.g9=1;b.g$=1;E(b);}b:{while(g<d){j=g+1|0;if(g<0)break b;if(g>=b.g7.length)break b;g=AGk(b.g7.charCodeAt(g));if(g<0){k=new B0;l=Cb(b,c,d);b=new K;b.g8=G(16);F(b,b.g6,A(54));c=b.g6;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.g8;o=n.data;d=b.g6;e
=o.length;if(d>=0&&d<=(e-0|0)){m.g7=L(n.data,0,d);k.g9=1;k.g$=1;k.ha=m;E(k);}b=new I;b.g9=1;b.g$=1;E(b);}if(g>=e){k=new B0;l=Cb(b,c,d);b=new K;b.g8=G(16);F(b,b.g6,A(55));J(b,b.g6,e,10);F(b,b.g6,A(51));c=b.g6;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.g8;o=n.data;d=b.g6;e=o.length;if(d>=0&&d<=(e-0|0)){m.g7=L(n.data,0,d);k.g9=1;k.g$=1;k.ha=m;E(k);}b=new I;b.g9=1;b.g$=1;E(b);}if(h>i){b=new B0;b.g9=1;b.g$=1;b.ha=A(56);E(b);}h=CB(e,h)+g|0;if(h<0){if(j==d&&h==(-2147483648)&&f)return (-2147483648);k=new B0;l=Cb(b,c,d);b
=new K;b.g8=G(16);F(b,b.g6,A(57));c=b.g6;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.g8;o=n.data;d=b.g6;e=o.length;if(d>=0&&d<=(e-0|0)){m.g7=L(n.data,0,d);k.g9=1;k.g$=1;k.ha=m;E(k);}b=new I;b.g9=1;b.g$=1;E(b);}g=j;}if(f)h= -h|0;return h;}b=new Q;b.g9=1;b.g$=1;E(b);}b=new Q;b.g9=1;b.g$=1;E(b);}b=new B0;k=new K;k.g8=G(16);F(k,k.g6,A(58));J(k,k.g6,e,10);m=new H;n=k.g8;o=n.data;d=k.g6;e=o.length;if(d>=0&&d<=(e-0|0)){m.g7=L(n.data,0,d);b.g9=1;b.g$=1;b.ha=m;E(b);}b=new I;b.g9=1;b.g$=1;E(b);},
Ia=b=>{if(b!==null)return QF(b,0,b.g7.length,10);b=new B0;b.g9=1;b.g$=1;b.ha=A(52);E(b);},
DP=()=>{let b,c,d,e,f;a:{if(De===null){b=R(Ed,256);c=b.data;De=b;d=0;e=c.length;while(true){if(d>=e)break a;f=new Ed;f.jq=d-128|0;c[d]=f;d=d+1|0;}}}},
AGk=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
K9=b=>{let c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;},
DX=b=>{let c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;},
ALZ=()=>{KC=Bk(ACG);};
function T(){let a=this;C.call(a);a.g8=null;a.g6=0;}
let Gi=a=>{a.g8=G(16);},
ALj=()=>{let a=new T();Gi(a);return a;},
Dp=(a,b)=>{a.g8=G(b);},
AL7=a=>{let b=new T();Dp(b,a);return b;},
F=(a,b,c)=>{let d,e,f;if(b>=0&&b<=a.g6){if(c===null)c=A(2);else if(c.g7.length?0:1)return a;Gh(a,a.g6+c.g7.length|0);d=a.g6-1|0;while(d>=b){a.g8.data[d+c.g7.length|0]=a.g8.data[d];d=d+(-1)|0;}a.g6=a.g6+c.g7.length|0;e=0;a:{while(e<c.g7.length){f=a.g8;d=b+1|0;if(e<0)break a;if(e>=c.g7.length)break a;f.data[b]=c.g7.charCodeAt(e);e=e+1|0;b=d;}return a;}c=new Q;c.g9=1;c.g$=1;E(c);}c=new Q;c.g9=1;c.g$=1;E(c);},
J=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if(DN(c,d)<0){if(e)Bn(a,b,b+1|0);else{Bn(a,b,b+2|0);f=a.g8.data;g=b+1|0;f[b]=45;b=g;}a.g8.data[b]=J$(c,d);}else{h=1;i=1;j=C8((-1),d);b:{while(true){k=CB(h,d);if(DN(k,c)>0){k=h;break b;}i=i+1|0;if(DN(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bn(a,b,b+i|0);if(e)e=b;else{f=a.g8.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.g8.data;b=e+1|0;f[e]=J$(C8(c,k),d);c=ALB(c,k);k=C8(k,d);e=b;}}}return a;},
GS=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=B4(c,0.0);if(!d){if(1.0/c===Infinity){Bn(a,b,b+3|0);e=a.g8.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bn(a,b,b+4|0);e=a.g8.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bn(a,b,b+3|0);e=a.g8.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bn(a,b,b+8|0);d=b;}else{Bn(a,b,b+9|0);e=a.g8.data;d=b+1|0;e[b]=45;}e=a.g8.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=MY;ACJ(c,f);d=f.nz;g=f.np;h=f.oX;i=1;j=1;if(h)j=2;k=9;l=AHi(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g<0){i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}else{i=g+1|0;o=i+1|0;if(k>o)o=k;g=0;k=o;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bn(a,b,b+(j+(k+m|0)|0)|0);if(!h)j=b;else{e=a.g8.data;j=b+1|0;e[b]=45;}p=100000000;if(n){e=a.g8.data;b=j+1|0;e[j]=48;j=b+1|0;e[b]=46;while(true){b=m+(-1)|0;if(m<=0)break;o
=j+1|0;e[j]=48;m=b;j=o;}}o=0;while(o<k){if(p<=0)q=0;else{q=d/p|0;d=d%p|0;}e=a.g8.data;b=j+1|0;e[j]=(48+q|0)&65535;i=i+(-1)|0;if(i)j=b;else{j=b+1|0;e[b]=46;}p=p/10|0;o=o+1|0;}if(g){e=a.g8.data;b=j+1|0;e[j]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)o=d;else{o=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[o]=(48+(g%10|0)|0)&65535;}return a;},
L_=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=B4(c,0.0);if(!d){if(1.0/c===Infinity){Bn(a,b,b+3|0);e=a.g8.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bn(a,b,b+4|0);e=a.g8.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bn(a,b,b+3|0);e=a.g8.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bn(a,b,b+8|0);d=b;}else{Bn(a,b,b+9|0);e=a.g8.data;d=b+1|0;e[b]=45;}e=a.g8.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=Mk;ZL(c,f);g=f.nV;h=f.nf;i=f.oQ;j=1;k=1;if(i)k=2;l=18;m=AEM(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h<0){j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}else{j=h+1|0;d=j+1|0;if(l>d)d=l;h=0;l=d;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bn(a,b,b+(k+(l+n|0)|0)|0);if(!i)i=b;else{e=a.g8.data;i=b+1|0;e[b]=45;}p=B(1569325056, 23283064);if(o){e=a.g8.data;b=i+1|0;e[i]=48;i=b+1|0;e[b]
=46;while(true){b=n+(-1)|0;if(n<=0)break;d=i+1|0;e[i]=48;n=b;i=d;}}q=0;while(q<l){if(WP(p,BM))d=0;else{d=Bd(Jw(g,p));g=Sb(g,p);}e=a.g8.data;b=i+1|0;e[i]=(48+d|0)&65535;j=j+(-1)|0;if(j)i=b;else{i=b+1|0;e[b]=46;}p=Jw(p,O(10));q=q+1|0;}if(h){e=a.g8.data;n=i+1|0;e[i]=69;if(h>=0)d=n;else{h= -h|0;d=n+1|0;e[n]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;n=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)n=d;else{n=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[n]=(48+(h%10|0)|0)&65535;}return a;},
AHi=b=>{let c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;},
AEM=b=>{let c,d,e,f,g;c=O(1);d=0;e=16;f=Kq.data;g=f.length-1|0;while(g>=0){if(C6(Sb(b,U(c,f[g])),BM)){d=d|e;c=U(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;},
Ii=(a,b,c)=>{F(a,b,c===null?A(2):c.bj());return a;},
Gh=(a,b)=>{let c,d,e,f,g,h;c=a.g8.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=G(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.g8=g;},
ACN=a=>{let b,c,d,e,f;b=new H;c=a.g8;d=c.data;e=a.g6;f=d.length;if(e>=0&&e<=(f-0|0)){b.g7=L(c.data,0,e);return b;}b=new I;b.g9=1;b.g$=1;E(b);},
KR=(a,b,c,d,e)=>{let f,g,h,i;Bn(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.g8.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
Qp=(a,b)=>{let c,d,e,f;if(b>=0){c=a.g6;if(b<c){c=c-1|0;a.g6=c;while(b<c){d=a.g8.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Q;f.g9=1;f.g$=1;E(f);},
AII=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=B4(b,c);if(d<=0){e=a.g6;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.g6=e-(c-b|0)|0;g=0;while(g<f){h=a.g8.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new Q;i.g9=1;i.g$=1;E(i);},
Bn=(a,b,c)=>{let d,e,f,g;d=a.g6;e=d-b|0;a.bp((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.g8.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.g6=a.g6+(c-b|0)|0;};
let Iz=D(0);
let K=D(T);
let AJp=a=>{a.g8=G(16);},
E6=()=>{let a=new K();AJp(a);return a;},
ACY=(a,b)=>{J(a,a.g6,b,10);return a;},
R0=(a,b)=>{let c;c=a.g6;Bn(a,c,c+1|0);a.g8.data[c]=b;return a;},
AIH=(a,b,c)=>{AII(a,b,c);return a;},
Cw=(a,b,c)=>{F(a,b,c);return a;},
AAI=(a,b,c,d,e)=>{let f,g,h,i;Bn(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.g8.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
Wv=(a,b,c,d)=>{let e,f,g,h,i;e=a.g6;Bn(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.g8.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
T7=a=>{return a.g6;},
Fr=a=>{let b,c,d,e,f;b=new H;c=a.g8;d=c.data;e=a.g6;f=d.length;if(e>=0&&e<=(f-0|0)){b.g7=L(c.data,0,e);return b;}b=new I;b.g9=1;b.g$=1;E(b);},
AA4=(a,b)=>{Gh(a,b);},
ABN=(a,b,c)=>{Bn(a,b,b+1|0);a.g8.data[b]=c;return a;},
Cs=(a,b,c)=>{F(a,b,c);return a;};
function M3(){let a=this;C.call(a);a.ov=0;a.qQ=0;a.qb=0;a.o2=null;a.qL=0;a.sE=null;a.oJ=0;a.qX=null;a.l7=0;a.kM=0;a.nq=0;a.oy=0;a.pv=0;a.pd=0;a.qq=0;a.pS=0;a.p0=0;a.on=0;a.mA=0;}
let To=(a,b)=>{a.ov=0;a.qQ=1;a.qb=0;a.qL=1;a.sE=A(59);a.oJ=0;a.l7=(-1);a.kM=(-1);a.nq=0;a.oy=0;a.pv=0;a.pd=0;a.qq=0;a.pS=0;a.p0=0;a.on=0;a.mA=1;a.qX=b;},
AJ1=a=>{let b=new M3();To(b,a);return b;};
let LZ=D(0);
function IG(){let a=this;C.call(a);a.j_=null;a.lG=null;a.pt=null;a.pV=null;a.rX=null;a.jw=null;a.ma=null;a.md=null;a.l3=null;a.j5=null;a.li=null;a.m8=0;a.oo=0;a.rf=null;a.kz=0;a.l5=null;a.rx=null;a.rk=null;a.lR=null;a.oB=null;a.kc=null;}
let Fe=null;
let L8=(a,b,c)=>{let d;d=new Cy;d.iI=1;d.hV=R(C,4);a.l3=d;a.li=JZ;a.m8=(-1);a.oo=1;a.kz=1;a.rx=DI(51,0.800000011920929);d=new Cy;d.iI=1;d.hV=R(C,16);a.lR=d;d=new Cy;d.iI=1;d.hV=R(C,16);a.oB=d;Eh();a.j5=Fs;a.jw=c;a.ma=b;AF$(a);},
AKU=(a,b)=>{let c=new IG();L8(c,a,b);return c;},
AF$=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;Fe=ACQ();EJ();CD(DY,A(60),A(59));b=V(Fe.userAgent);EJ();CD(DY,A(61),b);if(Fe.windows?1:0){EJ();CD(DY,A(62),A(63));}else if(Fe.macOS?1:0){EJ();CD(DY,A(62),A(64));}else if(!(Fe.linux?1:0)){EJ();CD(DY,A(62),A(65));}else{EJ();CD(DY,A(62),A(10));}c=new Lb;d=a.jw.oJ;c.qs=0;c.qV=0;c.iE=1;c.iE=d;ET=c;Eh();b=V(Fs.jd.location.href);a.kc=b;if(Cl(b,A(66))){c=Ps(a.kc,A(67),A(59));a.kc=c;a.kc=Ps(c,A(68),A(59));}e=FY(a.kc,63,0);if(e>=0)a.kc=Cb(a.kc,0,e);c=a.jw;FR=c.qQ;b=AE5(c);a.j_=b;c
=ACP(a.kc,b.h5,a);a.l5=c;d=a.jw.qL;f=ET;g=c.mg;h=new K;h.g8=G(16);i=h.g6;if(g===null)g=A(2);Cw(h,i,g);Cw(h,h.g6,A(69));g=new H;j=h.g8;k=j.data;l=h.g6;m=k.length;if(l>=0&&l<=(m-0|0)){g.g7=L(j.data,0,l);h=new K;h.g8=G(16);F(h,h.g6,g);F(h,h.g6,A(70));g=new H;j=h.g8;k=j.data;l=h.g6;m=k.length;if(l>=0&&l<=(m-0|0)){g.g7=L(j.data,0,l);h=new ME;h.lm=c;h.o0=A(70);h.oZ=d;if(f.iE){if(BH===null){c=new Cj;b=new B5;BB(b);b.h8=BF(32);DL(c);c.ii=b;b=new K;Gi(b);c.h$=b;c.h9=G(32);c.ic=0;c.id=BX;BH=c;}c=new K;c.g8=G(16);Cw(c,
c.g6,A(71));Cw(c,c.g6,g);b=new H;j=c.g8;k=j.data;i=c.g6;l=k.length;if(i>=0&&i<=(l-0|0)){b.g7=L(j.data,0,i);BI(Br(b));BI("\n");}else{c=new I;c.g9=1;c.g$=1;E(c);}}a:{f.hL=f.hL+1|0;c=new Fh;c.jj=f;c.kh=1;c.je=g;c.js=h;b=null;g=null;c.iN=new C;c.iL=1;c.jb=g;c.jr=b;e=B9;B9=e+1|0;c.jp=O(e);b=new Dj;b.jc=c;Dz(b);a.lG=Um(a.j_.h5);c=new Px;c.sm=a.l5;a.pt=c;c=new OV;b=new GG;d=Hj(16);b.kj=0;k=R(Ep,d);j=k.data;b.jH=k;b.mW=0.75;b.kY=j.length*0.75|0;c.rT=b;a.pV=c;a.rf=new M2;c=new OR;c.rU=0;c.mk=1;b=new IY;b.mc=c;c.rq=b;c.nU
=A(59);a.rk=c;if(a.jw.qb){g=a.l5;b=new KG;b.q9=a;n=ET;g=g.mg;h=new K;h.g8=G(16);Cs(h,h.g6,g===null?A(2):Cn(g));Cs(h,h.g6,Cn(A(69)));f=new H;j=h.g8;k=j.data;i=h.g6;l=k.length;if(i>=0&&i<=(l-0|0)){f.g7=L(j.data,0,i);g=new K;g.g8=G(16);Cw(g,g.g6,f);Cw(g,g.g6,A(72));c=new H;j=g.g8;k=j.data;i=g.g6;l=k.length;if(i>=0&&i<=(l-0|0)){c.g7=L(j.data,0,i);Ka(n,1,c,b);break a;}c=new I;c.g9=1;c.g$=1;E(c);}c=new I;c.g9=1;c.g$=1;E(c);}}Dc=a;c=a.j_;Ck=c;b=c.k1;D0=b;Bx=b;En=c.pW;Mf=a.lG;AA1=a.pt;AFe=a.pV;c=new Mx;c.qn=null;c.qn
=AIk();a.rX=c;ABt=c;f=a.j5.jd.document;b=new Hz;b.mX=a;f.addEventListener("visibilitychange",BL(b,"handleEvent"));c=a.j5;c.l9=a;requestAnimationFrame(BL(c,"onAnimationFrame"));c=a.jw;if(!c.l7&&!c.kM?1:0){c=a.j5;g=new HA;g.lv=a;g=CC(g,"handleEvent");c.jd.addEventListener("resize",BL(g,"handleEvent"));}return;}c=new I;c.g9=1;c.g$=1;E(c);}c=new I;c.g9=1;c.g$=1;E(c);},
ZC=a=>{let b,c,d,e,f,g,h,$$je;b=a.li;a:{try{b:{Jd();switch(O$.data[AG1(b)]){case 1:c=ZP(RS());if(!c){a.li=GN;d=window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break b;}e=a.l5.nM;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=E6();R0(ACY(g,f),37);h=Fr(g);d.setProperty("width",Br(h));}}break b;case 2:break;default:break b;}if(a.ma!==null){b=a.md;if(b!==null){AHb(b);XN(a.md);}WZ(a.lG,null);Nm(a.lG);W$(a.lR);a.md
=a.ma;a.ma=null;a.li=HB;a.j_.mR=BM;}S9(a,a.md);}}catch($$e){$$je=BP($$e);if($$je instanceof CT){h=$$je;break a;}else{throw $$e;}}b=a.j5;b.l9=a;requestAnimationFrame(BL(b,"onAnimationFrame"));return;}if(Ct===null){b=new Eo;d=new B5;d.h8=BF(32);BB(b);b.ii=d;d=new K;Dp(d,16);b.h$=d;b.h9=G(32);b.ic=0;b.id=BX;Ct=b;}Hq(h,Ct);E(h);},
S9=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;VV(a.j_);c=Ck.h5.width;d=Ck.h5.height;e=0;if(a.li===HB){a.li=GN;b.qe=CZ();f=new IA;g=XX(Rv(0,1,0),AB5(0,1,0));if(!g.ka){b=new Bf;f=new K;f.g8=G(16);F(f,f.g6,A(73));if(!g.ka)h=g.jz;else{h=Bx.bY(g.iZ);g.jz=h;}F(f,f.g6,h);h=new H;i=f.g8;j=i.data;k=f.g6;d=j.length;if(k>=0&&k<=(d-0|0)){h.g7=L(i.data,0,k);b.g9=1;b.g$=1;b.ha=h;E(b);}b=new I;HH(b);E(b);}NZ(f,2073602,0,1,0,g);f.ss=1;b.l0=f;f=new Ob;h=new Mq;AFd(h);h.oW=1.0;l=new Bb;B_();h.qg=l;h.oj=0.0;f.rJ=new Bb;f.oY
=1.0;f.m2=h;b.mG=f;f=new Mw;f.rg=b;Mf.k_=f;D0.b0(3042);e=1;}if(!(c==a.m8&&d==a.oo&&!e)){a.m8=c;a.oo=d;D0.b1(0,0,c,d);f=b.mG;f.oE=0;f.oF=0;f.p2=c;f.qv=d;m=c;n=f.oY;m=m*n;n=d*n;f.qA=m;f.qN=n;Qi(f,1);Qi(b.mG,1);}f=a.oB;h=a.lR;i=h.hV;k=h.h2;j=f.hV;o=j.data;d=f.h2;c=d+k|0;if(c<=o.length)h=j;else{p=8;if(p<=c)p=c;d=d*1.75|0;if(p>d)d=p;l=j.constructor;if(l===null)h=null;else{h=l.classObject;if(h===null){h=new Ca;h.hF=l;g=h;l.classObject=g;}}q=h.hF.$meta.item;if(q===null)l=null;else{l=q.classObject;if(l===null){l=new Ca;l.hF
=q;h=l;q.classObject=h;}}if(l===null){b=new CU;Y(b);E(b);}if(l===Bk(CQ)){b=new Bs;Y(b);E(b);}if(d<0){b=new DK;Y(b);E(b);}h=D4(l.hF,d);l=h.data;r=f.h2;s=l.length;if(r<s)s=r;GP(j,0,h,0,s);f.hV=h;}GP(i,0,h,f.h2,k);f.h2=c;f=a.lR;i=f.hV;e=0;k=f.h2;h=null;if(e>k){b=new Bs;b.g9=1;b.g$=1;E(b);}while(e<k){j=i.data;d=e+1|0;j[e]=h;e=d;}f.h2=0;k=0;while(true){l=a.oB;e=l.h2;d=B4(k,e);if(d>=0){i=l.hV;k=0;f=null;if(k>e){b=new Bs;b.g9=1;b.g$=1;E(b);}while(k<e){j=i.data;d=k+1|0;j[k]=f;k=d;}l.h2=0;f=a.j_;t=Ci(f.mR,O(1));f.mR
=t;if(Wq(t,O(60))){d=Ck.oA|0;f=new K;f.g8=G(16);F(f,f.g6,A(74));J(f,f.g6,d,10);F(f,f.g6,A(75));h=new H;i=f.g8;j=i.data;k=f.g6;d=j.length;if(k>=0&&k<=(d-0|0)){h.g7=L(i.data,0,k);f=window.document;h=Br(h);f.title=h;D0.b3(0.0,0.0,0.0,1.0);D0.b4(16384);AHd(b);}else{b=new I;Y(b);E(b);}}Nm(a.lG);return;}if(d>=0){f=new I;b=new K;b.g8=G(16);F(b,b.g6,A(76));J(b,b.g6,k,10);F(b,b.g6,A(77));e=l.h2;J(b,b.g6,e,10);h=new H;i=b.g8;j=i.data;k=b.g6;d=j.length;if(k>=0&&k<=(d-0|0)){h.g7=L(i.data,0,k);f.g9=1;f.g$=1;f.ha=h;E(f);}b
=new I;Y(b);E(b);}h=l.hV.data[k];l=h.nT.l$;g=l.hV.constructor;if(g===null)f=null;else{f=g.classObject;if(f===null){f=new Ca;f.hF=g;q=f;g.classObject=q;}}u=f.hF.$meta.item;if(u===null)g=null;else{g=u.classObject;if(g===null){g=new Ca;g.hF=u;q=g;u.classObject=q;}}e=l.h2;if(g===null){b=new CU;Y(b);E(b);}if(g===Bk(CQ)){b=new Bs;Y(b);E(b);}if(e<0)break;f=D4(g.hF,e);GP(l.hV,0,f,0,l.h2);i=f;h.nT.mI.oM.o2.b6(i);k=k+1|0;}b=new DK;Y(b);E(b);};
let QE=D(0);
let Jz=D();
let AHb=a=>{return;},
XN=a=>{return;};
function Kl(){let a=this;Jz.call(a);a.l0=null;a.mG=null;a.qe=BM;}
let AHd=a=>{let b,c,d,e,f,g,h,i,j;b=a.l0;c=a.mG.m2.lO;Gm(b.nS,c.iy);b.pZ=0;d=a.qe;e=ZV(Nj(CZ(),d))*0.03125;f=0;while(f<1920){g=f;h=g-e;i=0;while(i<1080){c=a.l0;j=P_(h);j=Ig(((isNaN(j)?1:0)?2143289344:Im(j))&16777215|(-33554432));c.mp.data[c.lu+c.qk|0]=j;ACc(a.l0,g,i,0.0);i=i+1|0;h=h+0.001953125;}f=f+1|0;}AHT(a.l0);};
let AF0=D();
let Bj=(b,c)=>{let d,e,f,g,h,i,j,k,l;if(!b)return A(78);d=1<<c;e=d-1|0;f=(((32-K9(b)|0)+c|0)-1|0)/c|0;g=G(f);h=g.data;i=CB(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=J$((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new H;l.g7=L(g.data,0,h.length);return l;};
let F5=D(BR);
let JZ=null,HB=null,GN=null,PV=null;
let ABy=()=>{let b,c,d;b=new F5;b.hv=A(79);b.hk=0;JZ=b;c=new F5;c.hv=A(80);c.hk=1;HB=c;d=new F5;d.hv=A(81);d.hk=2;GN=d;PV=P(F5,[b,c,d]);};
let KK=D(0);
let BY=D(0);
let Nk=D(0);
function GU(){let a=this;C.call(a);a.jd=null;a.l9=null;}
let Fs=null;
let Eh=()=>{Eh=Bz(GU);YA();};
let YA=()=>{let b;b=new GU;Eh();b.jd=window;Fs=b;},
AEw=(a,b)=>{let c;b;c=a.l9;a.l9=null;ZC(c);};
let AEf=D();
let MW=D();
let Fl=null;
let Gy=()=>{Gy=Bz(MW);ADk();};
let ADk=()=>{Fl=DI(51,0.800000011920929);};
function J2(){Dr.call(this);this.oK=0.0;}
let MU=null;
let ALR=()=>{MU=Bk(ADV);};
function JJ(){let a=this;C.call(a);a.qW=null;a.qR=0;}
let Zq=D();
let P_=b=>{return Math.sin(b);},
Dl=b=>{return Math.sqrt(b);},
Wi=b=>{return Math.ceil(b);},
EU=(b,c)=>{return Math.pow(b,c);},
TM=b=>{return Math.abs(b);},
CY=b=>{return Math.sign(b);};
let C4=D();
function GV(){let a=this;C.call(a);a.jA=null;a.iK=0;a.nm=0;}
let Nz=(a,b)=>{let c,d,e,f,g;c=a.jA;d=c.data;e=a.iK;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=S(f);g=d.data.length;if(e<g)g=e;Fm(c,0,d,0,g);a.jA=d;}c=d.data;f=a.iK;a.iK=f+1|0;c[f]=b;};
let I1=D(0);
let H5=D();
let DZ=D(0);
function GG(){let a=this;H5.call(a);a.kj=0;a.jH=null;a.mU=0;a.mW=0.0;a.kY=0;}
let Hj=b=>{let c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
AHV=(a,b,c)=>{let d,e,f,g,h,i,j;if(b===null){d=a.jH.data;e=d[0];while(e!==null&&e.jv!==null){e=e.j7;}if(e===null){a.mU=a.mU+1|0;f=null;e=new Ep;b=null;e.jv=f;e.jW=b;e.lJ=0;e.j7=d[0];d[0]=e;g=a.kj+1|0;a.kj=g;if(g>a.kY)MN(a,d.length);}}else{f=b;if(!f.$id$){e=Gl();f.$id$=e;}h=b.$id$;d=a.jH.data;i=d.length;j=h&(i-1|0);e=d[j];while(e!==null){if(e.lJ==h){f=e.jv;if(b!==f&&!(b!==f?0:1)?0:1)break;}e=e.j7;}if(e===null){a.mU=a.mU+1|0;e=new Ep;f=null;e.jv=b;e.jW=f;e.lJ=h;e.j7=d[j];d[j]=e;g=a.kj+1|0;a.kj=g;if(g>a.kY)MN(a,
i);}}f=e.jW;e.jW=c;return f;},
MN=(a,b)=>{let c,d,e,f,g,h,i,j;c=Hj(!b?1:b<<1);d=R(Ep,c);e=d.data;f=0;c=c-1|0;while(true){g=a.jH.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.lJ&c;j=h.j7;h.j7=e[i];e[i]=h;h=j;}f=f+1|0;}a.jH=d;a.kY=e.length*a.mW|0;};
let QV=D(0);
let J8=D();
let Jo=D();
let KB=null,Ij=null,BC=null,BD=null,Jl=null,O4=null,Bu=null,Bt=null,G9=null,G$=null;
let UG=(b,c,d)=>{let e;if(c<d&&c>=0){b=b.data;if(d<=b.length){if(c<(d-1|0)&&((b[c]&64512)!=55296?0:1)){d=c+1|0;if((b[d]&64512)!=56320?0:1)return ((b[c]&1023)<<10|b[d]&1023)+65536|0;}return b[c];}}e=new I;e.g9=1;e.g$=1;E(e);},
B1=(b,c)=>{let d,e;d=b.pR.data;if(c<d.length)return c+d[c]|0;d=b.pH;e=AG2(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;},
AG2=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=B4(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;},
LU=b=>{let c,d,e,f,g,h;if(Ij===null){if(G9===null)G9=Zd();Ij=AJv((G9.value!==null?V(G9.value):null));}c=Ij.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=B4(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);},
J$=(b,c)=>{if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;},
EN=b=>{let c,d;if(!(b>=0&&b<=1114111?1:0)){c=new Bs;c.g9=1;c.g$=1;E(c);}if(b<65536){d=G(1);d.data[0]=b&65535;return d;}return ALs([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);},
B$=b=>{let c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(Jl===null){if(G$===null)G$=AKp();Jl=AKK((G$.value!==null?V(G$.value):null));}e=Jl.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.nW)c=f+1|0;else{d=g.nx;if(b>=d)return g.nA.data[b-d|0];d=f-1|0;}}return 0;},
FG=b=>{a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return B$(b)!=16?0:1;},
AKY=()=>{KB=Bk(TX);O4=R(Jo,128);},
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
Zd=()=>{return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};},
AKp=()=>{return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
let Wj=D();
let ACQ=()=>{var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};};
let AEF=D();
let BH=null,Ct=null,DY=null;
let GP=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=GZ(b)&&(e+f|0)<=GZ(d)){a:{b:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new Ca;h.hF=g;i=h;g.classObject=i;}}j=DS(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new Ca;h.hF=g;i=h;g.classObject=i;}}i=DS(h);if(j!==null&&i!==null){if(j===i)break b;if(!(j.hF.$meta.primitive?1:0)&&!(i.hF.$meta.primitive?1:0)){k=b;l=0;m=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p
=i.hF;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&OA(g.constructor,p)?1:0)){GI(b,c,d,e,l);b=new Hg;b.g9=1;b.g$=1;E(b);}l=l+1|0;m=o;}GI(b,c,d,e,f);return;}if(!(j.hF.$meta.primitive?1:0))break a;if(i.hF.$meta.primitive?1:0)break b;else break a;}b=new Hg;b.g9=1;b.g$=1;E(b);}}GI(b,c,d,e,f);return;}b=new Hg;b.g9=1;b.g$=1;E(b);}b=new I;b.g9=1;b.g$=1;E(b);}d=new CU;d.g9=1;d.g$=1;d.ha=A(82);E(d);},
Fm=(b,c,d,e,f)=>{if(c>=0&&e>=0&&f>=0&&(c+f|0)<=GZ(b)&&(e+f|0)<=GZ(d)){GI(b,c,d,e,f);return;}b=new I;b.g9=1;b.g$=1;E(b);},
GI=(b,c,d,e,f)=>{if(f!==0){if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if(b!==d||e<c){for(let i=0;i<f;i=i+1|0){d.data[e++]=b.data[c++];}}else {c=c+f|0;e=e+f|0;for(let i=0;i<f;i=i+1|0){d.data[ --e]=b.data[ --c];}}}},
CZ=()=>{return C7((new Date()).getTime());},
EJ=()=>{let b,c;if(DY===null){b=new Jt;H1(b,11);CD(b,A(83),A(84));CD(b,A(62),A(85));CD(b,A(86),A(87));CD(b,A(88),A(89));CD(b,A(90),A(91));CD(b,A(92),A(93));CD(b,A(94),A(84));CD(b,A(95),A(87));c=new Jt;H1(c,11);c.r9=b;DY=c;}};
let Ki=D(0);
function Lb(){let a=this;C.call(a);a.hL=0;a.qs=0;a.qV=0;a.iE=0;}
let ZP=a=>{return a.hL;},
Vl=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{JI();switch(PI.data[d.hk]){case 1:if(a.iE){if(BH===null){d=new Cj;e=new B5;e.h8=BF(32);BB(d);d.ii=e;e=new K;Dp(e,16);d.h$=e;d.h9=G(32);d.ic=0;d.id=BX;BH=d;}d=new K;d.g8=G(16);F(d,d.g6,A(71));F(d,d.g6,c===null?A(2):c);e=new H;g=d.g8;h=g.data;i=d.g6;j=h.length;if(i>=0&&i<=(j-0|0)){e.g7=L(g.data,0,i);BI(Br(e));BI("\n");}else{c=new I;Y(c);E(c);}}a.hL=a.hL+1|0;d=new Fh;d.jj=a;d.kh=b;d.je=c;d.js=f;c=null;e=null;d.iN=new C;d.iL=1;d.jb=e;d.jr=c;k=B9;B9=k+1|0;d.jp=O(k);c=new Dj;c.jc
=d;Dz(c);break a;case 2:d=null;l=new KM;l.l4=a;l.lq=f;l.pk=d;l.qP=e;if(a.iE){if(BH===null){d=new Cj;e=new B5;DL(e);e.h8=BF(32);Ez(d,e);d.h$=E6();d.h9=G(32);d.ic=0;d.id=BX;BH=d;}d=new K;d.g8=G(16);Cs(d,d.g6,Cn(A(71)));Cs(d,d.g6,c===null?A(2):Cn(c));e=new H;g=d.g8;h=g.data;i=d.g6;j=h.length;if(i>=0&&i<=(j-0|0)){e.g7=L(g.data,0,i);BI(Br(e));BI("\n");}else{c=new I;HH(c);E(c);}}a.hL=a.hL+1|0;d=new Ey;d.i4=a;d.jO=b;d.i3=c;d.jg=l;c=null;e=null;d.iN=new C;d.iL=1;d.jb=e;d.jr=c;k=B9;B9=k+1|0;d.jp=O(k);c=new Dj;c.jc=d;Dz(c);break a;case 3:if
(a.iE){if(BH===null){d=new Cj;e=new B5;e.h8=BF(32);BB(d);d.ii=e;e=new K;Dp(e,16);d.h$=e;d.h9=G(32);d.ic=0;d.id=BX;BH=d;}d=new K;d.g8=G(16);F(d,d.g6,A(71));F(d,d.g6,c===null?A(2):c);e=new H;g=d.g8;h=g.data;i=d.g6;j=h.length;if(i>=0&&i<=(j-0|0)){e.g7=L(g.data,0,i);BI(Br(e));BI("\n");}else{c=new I;Y(c);E(c);}}a.hL=a.hL+1|0;d=new Ey;d.i4=a;d.jO=b;d.i3=c;d.jg=f;c=null;e=null;d.iN=new C;d.iL=1;d.jb=e;d.jr=c;k=B9;B9=k+1|0;d.jp=O(k);c=new Dj;c.jc=d;Dz(c);break a;case 4:e=new KL;e.sh=a;e.ms=f;if(a.iE){if(BH===null){d
=new Cj;f=new B5;BB(f);f.h8=BF(32);DL(d);d.ii=f;f=new K;Gi(f);d.h$=f;d.h9=G(32);d.ic=0;d.id=BX;BH=d;}d=new K;d.g8=G(16);Cw(d,d.g6,A(71));Cw(d,d.g6,c===null?A(2):c);f=new H;g=d.g8;h=g.data;i=d.g6;j=h.length;if(i>=0&&i<=(j-0|0)){f.g7=L(g.data,0,i);BI(Br(f));BI("\n");}else{c=new I;E4(c);E(c);}}a.hL=a.hL+1|0;d=new Ey;d.i4=a;d.jO=b;d.i3=c;d.jg=e;c=null;e=null;d.iN=new C;d.iL=1;d.jb=e;d.jr=c;k=B9;B9=k+1|0;d.jp=O(k);c=new Dj;c.jc=d;Dz(c);break a;case 5:break;default:c=new Bf;e=new K;e.g8=G(16);F(e,e.g6,A(96));F(e,
e.g6,d.hv);d=new H;g=e.g8;h=g.data;k=e.g6;i=h.length;if(k>=0&&k<=(i-0|0)){d.g7=L(g.data,0,k);c.g9=1;c.g$=1;c.ha=d;E(c);}c=new I;c.g9=1;c.g$=1;Bl(c);E(c);}c=null;Fg(f.lL,f.lU,f.lE,c);c=f.iY.iU;c.k7=1;c.i5=0;}},
Ka=(a,b,c,d)=>{let e,f,g,h,i,j;if(a.iE){if(BH===null){e=new Cj;f=new B5;f.h8=BF(32);e.ii=f;f=new K;BB(f);f.g8=G(16);e.h$=f;e.h9=G(32);e.ic=0;e.id=BX;BH=e;}e=new K;e.g8=G(16);F(e,e.g6,A(97));F(e,e.g6,c===null?A(2):c);f=new H;g=e.g8;h=g.data;i=e.g6;j=h.length;if(i>=0&&i<=(j-0|0)){f.g7=L(g.data,0,i);BI(Br(f));BI("\n");}else{c=new I;c.g9=1;c.g$=1;E(c);}}a.hL=a.hL+1|0;f=new XMLHttpRequest();e=new HC;e.lb=a;e.ks=f;e.nK=b;e.ml=c;e.og=d;e=BL(e,"handleEvent");f.onreadystatechange=e;e=new Fi;e.ol=a;e.l_=d;d=BL(e,"handleEvent");f.onprogress
=d;f.open("GET",Br(c),!!b);f.setRequestHeader("Content-Type","text/plain; charset=utf-8");f.send();};
let VM=D();
let ET=null;
let RS=()=>{return ET;};
let Yj=D();
let C$=0,FR=0;
let ALp=()=>{C$=1;};
let ON=D(0);
function HT(){let a=this;C.call(a);a.nh=null;a.h5=null;a.qC=null;a.k1=null;a.pW=null;a.rr=null;a.oA=0.0;a.m1=BM;a.mR=BM;a.pL=0.0;a.mN=0.0;a.ou=0;}
let AIR=0,AFT=null;
let Jm=()=>{Jm=Bz(HT);TY();};
let ABz=(a,b)=>{let c,d,e,f,g,h,i,j,k;Jm();a.oA=0.0;a.m1=CZ();a.mR=O(-1);a.pL=0.0;a.mN=0.0;a.qC=b;Eh();c=window.document;d=b.qX;a.h5=c.getElementById(Br(d));e=WE();d=!!b.qq;e.alpha=d;d=!!b.pd;e.antialias=d;d=!!b.pv;e.stencil=d;d=!!b.pS;e.premultipliedAlpha=d;d=!!b.p0;e.preserveDrawingBuffer=d;f=a.h5;if(b.ov)a.nh=f.getContext("webgl2",e);a:{if(b.ov){d=a.nh;if(d!==null){if(!b.on)f=AIF(d);else{f=new Lc;Km(f,d);}a.pW=f;a.k1=f;break a;}}f=f.getContext("webgl",e);a.nh=f;if(!b.on)d=AHI(f);else{d=new QB;Ja(d,f);}a.k1
=d;}d=a.k1.cn(7938);c=a.k1.cn(7936);g=a.k1.cn(7937);a.rr=AEC(IC,d,c,g);h=b.l7;if(!(h<0&&b.kM<0)){if(h&&b.kM?1:0)Hx(a,h,b.kM);else{i=Fs;h=i.jd.document.documentElement.clientWidth-b.nq|0;j=i.jd.document.documentElement.clientHeight-b.oy|0;k=!b.mA?1.0:devicePixelRatio||1;Hx(a,k*h|0,k*j|0);}}b=a.h5;d=new Jj;d.rc=a;SH(b,BL(d,"fullscreenChanged"));},
AE5=a=>{let b=new HT();ABz(b,a);return b;},
VV=a=>{let b,c,d;b=CZ();c=ZV(Nj(b,a.m1))/1000.0;a.pL=c;a.m1=b;c=a.mN+c;a.mN=c;d=a.ou+1|0;a.ou=d;if(c>1.0){a.oA=d;a.mN=0.0;a.ou=0;}},
Hx=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a:{d=a.h5;e=b;d.width=e;d=a.h5;e=c;d.height=e;if(a.qC.mA){f=devicePixelRatio||1;e=a.h5.style;g=b/f;Gp();h=new K;h.g8=G(16);L_(h,h.g6,g);F(h,h.g6,A(98));i=new H;j=h.g8;k=j.data;l=h.g6;b=k.length;if(l>=0&&l<=(b-0|0)){i.g7=L(j.data,0,l);e.setProperty("width",Br(i));f=c/f;i=new K;i.g8=G(16);L_(i,i.g6,f);F(i,i.g6,A(98));h=new H;j=i.g8;k=j.data;c=i.g6;m=k.length;if(c<0)break a;if(c>(m-0|0))break a;h.g7=L(j.data,0,c);e.setProperty("height",Br(h));}else{d=new I;d.g9=1;d.g$=1;E(d);}}return;}d
=new I;d.g9=1;d.g$=1;E(d);},
TY=()=>{AIR=0;AFT=Cr(51,0.800000011920929);},
SH=(b,c)=>{if(b.requestFullscreen){document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){document.addEventListener("msfullscreenchange",c,false);}};
function KF(){let a=this;C.call(a);a.n7=null;a.nO=null;a.n2=null;a.ob=null;a.od=null;a.pl=null;a.mb=null;a.nM=0;a.mg=null;}
let AAB=(a,b,c,d)=>{let e;a.n7=DI(51,0.800000011920929);a.nO=DI(51,0.800000011920929);a.n2=DI(51,0.800000011920929);a.ob=DI(51,0.800000011920929);a.od=DI(51,0.800000011920929);a.pl=DI(51,0.800000011920929);e=new Cy;e.iI=1;e.hV=R(C,16);a.mb=e;a.nM=(-1);a.mg=b;AGs(a,c,d);},
ACP=(a,b,c)=>{let d=new KF();AAB(d,a,b,c);return d;},
AGs=(a,b,c)=>{let d,e,f;d=c.jw;if(d.o2!==null){e=b.ownerDocument;f=new Io;f.r4=a;e.addEventListener("dragenter",BL(f,"handleEvent"),!!0);f=new Ip;f.sq=a;e.addEventListener("dragover",BL(f,"handleEvent"),!!0);f=new In;f.o6=a;f.oT=c;f.oM=d;e.addEventListener("drop",BL(f,"handleEvent"));}},
Zj=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(Zx(a,b.nD)){b.mi=b.qH;b.k7=1;b.kT=0;b.i5=0;return 0;}if(b.i5)return 0;b.kT=0;b.k7=0;b.i5=1;c=b.nD;d=b.pb;e=b.o3;f=new MF;f.sB=a;f.iU=b;b=ET;g=a.mg;h=new K;h.g8=G(16);i=h.g6;if(g===null)g=A(2);Cw(h,i,g);Cw(h,h.g6,A(69));g=new H;j=h.g8;k=j.data;l=h.g6;m=k.length;if(l>=0&&l<=(m-0|0)){g.g7=L(j.data,0,l);h=new K;h.g8=G(16);F(h,h.g6,g);F(h,h.g6,c===null?A(2):c);g=new H;k=h.g8;j=k.data;m=h.g6;i=j.length;if(m>=0&&m<=(i-0|0)){g.g7=L(k.data,0,m);h=new MD;h.lL=a;h.iY=f;h.lU=d;h.lE
=c;Vl(b,1,g,d,e,h);return 1;}b=new I;Y(b);E(b);}b=new I;E4(b);E(b);},
Fg=(a,b,c,d)=>{a:{JW();switch(K5.data[b.hk]){case 1:break;case 2:DE(a.nO,c,d);break a;case 3:DE(a.od,c,d);break a;case 4:DE(a.n2,c,d);break a;case 5:DE(a.n7,c,null);break a;default:break a;}DE(a.ob,c,d);}},
Zx=(a,b)=>{let c;c=Du(a.ob,b)<0?0:1;return !c&&!(Du(a.nO,b)<0?0:1)&&!(Du(a.od,b)<0?0:1)&&!(Du(a.n2,b)<0?0:1)&&!(Du(a.n7,b)<0?0:1)?0:1;};
let CM=D();
let ACg=(a,b)=>{return;};
let Oz=D(0);
let Do=D(0);
function I3(){let a=this;C.call(a);a.hS=null;a.lo=0;a.kX=null;a.jC=null;a.iP=null;a.iO=null;a.i_=null;a.ja=null;a.mH=null;a.lw=0;a.m_=null;a.mE=0;a.nP=null;a.oq=null;a.nN=null;a.k_=null;a.j8=BM;a.k$=0;}
let AJR=b=>{let c,d,e,f;c=Fe;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(TM(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;},
AEI=(a,b)=>{a.lo=0;a.kX=Cr(20,0.800000011920929);a.jC=Kf(20);a.iP=S(20);a.iO=S(20);a.i_=S(20);a.ja=S(20);a.mH=K8(51,0.800000011920929);a.lw=0;a.m_=Kf(256);a.mE=0;a.nP=Kf(256);a.oq=Kf(5);a.nN=K8(51,0.800000011920929);a.k$=1;a.hS=b;ACp(a);},
Um=a=>{let b=new I3();AEI(b,a);return b;},
ACp=a=>{let b;b=a.hS.ownerDocument;b.addEventListener("mousedown",BL(a,"handleEvent"),!!0);b.addEventListener("mouseup",BL(a,"handleEvent"),!!0);b.addEventListener("mousemove",BL(a,"handleEvent"),!!0);b.addEventListener("wheel",BL(a,"handleEvent"),!!0);b.addEventListener("keydown",BL(a,"handleEvent"),!!0);b.addEventListener("keyup",BL(a,"handleEvent"),!!0);b.addEventListener("keypress",BL(a,"handleEvent"),!!0);a.hS.addEventListener("touchstart",BL(a,"handleEvent"),!!1);a.hS.addEventListener("touchmove",BL(a,
"handleEvent"),!!1);a.hS.addEventListener("touchcancel",BL(a,"handleEvent"),!!1);a.hS.addEventListener("touchend",BL(a,"handleEvent"),!!1);},
ACS=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;c=V(b.type);if(c!==A(99)){if(!(A(99) instanceof H))d=0;else{e=A(99);d=c.g7!==e.g7?0:1;}}else d=1;a:{if(!d){if(c===A(100))d=1;else if(!(A(100) instanceof H))d=0;else{e=A(100);d=c.g7!==e.g7?0:1;}if(!d){if(c===A(101))d=1;else if(!(A(101) instanceof H))d=0;else{e=A(101);d=c.g7!==e.g7?0:1;}if(d){if(!(JP(a.hS)?1:0)){f=FQ(a,b,a.hS);g=F3(a,b,a.hS);h=a.iP.data;i=f-h[0]|0;j=a.iO.data;d=g-j[0]|0;a.i_.data[0]=i;a.ja.data[0]=d;h[0]=f;j[0]=g;}else{k=b.movementX|0;i=
b.movementY|0;a.i_.data[0]=k;a.ja.data[0]=i;h=a.iP.data;h[0]=h[0]+b.movementX|0;h=a.iO.data;h[0]=h[0]+b.movementY|0;}a.j8=C7(performance.now()*1000000.0);a.k_!==null&&!a.jC.data[0];}else{if(c===A(102))d=1;else if(!(A(102) instanceof H))d=0;else{e=A(102);d=c.g7!==e.g7?0:1;}if(d){if(a.k_!==null)AJR(b);a.j8=C7(performance.now()*1000000.0);}else{if(c===A(103))d=1;else if(!(A(103) instanceof H))d=0;else{e=A(103);d=c.g7!==e.g7?0:1;}if(d){a.lo=1;l=b.changedTouches;d=0;i=l.length;while(d<i){e=l.item(d);k=e.identifier;m
=a.kX;g=0;b:{while(true){if(g>=20){g=(-1);break b;}n=a.kX;if(g>=(-128)&&g<=127){DP();o=De.data[g+128|0];}else{o=new Ed;o.jq=g;}if(!AJX(n,o,0))break;g=g+1|0;}}if(g>=(-128)&&g<=127){DP();n=De.data[g+128|0];}else{n=new Ed;n.jq=g;}Cc(m,k,n);a.jC.data[g]=1;h=a.iP;o=a.hS;p=o.width*1.0/o.clientWidth;k=(e.clientX-(EA(a,o)|0)|0)+(o.scrollLeft|0)|0;n=o.ownerDocument;m=V(n.compatMode);if(m===A(104))f=1;else if(!(A(104) instanceof H))f=0;else{o=A(104);f=m.g7!==o.g7?0:1;}if(f)n=n.documentElement;h=h.data;p=p*(k+(n.scrollLeft
|0)|0);h[g]=p+CY(p)*0.5|0;h=a.iO;o=a.hS;p=o.height*1.0/o.clientHeight;k=(e.clientY-(EZ(a,o)|0)|0)+(o.scrollTop|0)|0;e=o.ownerDocument;o=V(e.compatMode);if(o===A(104))f=1;else if(!(A(104) instanceof H))f=0;else{n=A(104);f=o.g7!==n.g7?0:1;}if(f)e=e.documentElement;h=h.data;p=p*(k+(e.scrollTop|0)|0);h[g]=p+CY(p)*0.5|0;a.i_.data[g]=0;a.ja.data[g]=0;d=d+1|0;}a.j8=C7(performance.now()*1000000.0);b.preventDefault();}}}}else{if(!a.jC.data[0])return;e=a.mH;d=b.button;AIf(e,!d?0:d==2?1:d!=1?0:2);h=a.jC;h.data[0]=a.mH.i7
<=0?0:1;if(!(JP(a.hS)?1:0)){k=FQ(a,b,a.hS)-a.iP.data[0]|0;i=F3(a,b,a.hS)-a.iO.data[0]|0;a.i_.data[0]=k;a.ja.data[0]=i;a.iP.data[0]=FQ(a,b,a.hS);a.iO.data[0]=F3(a,b,a.hS);}else{k=b.movementX|0;i=b.movementY|0;a.i_.data[0]=k;a.ja.data[0]=i;h=a.iP.data;h[0]=h[0]+b.movementX|0;h=a.iO.data;h[0]=h[0]+b.movementY|0;}a.j8=C7(performance.now()*1000000.0);a.jC.data[0]=0;if(a.k_!==null){d=b.button;d&&d!=2&&d!=1;}}}else{window.focus();m=b.target;n=a.hS;if(m!==n?0:1){h=a.jC.data;if(!h[0]){a.k$=1;a.lo=1;h[0]=1;d=b.button;q
=!d?0:d==2?1:d!=1?0:2;VW(a.mH,q);a.oq.data[q]=1;a.i_.data[0]=0;a.ja.data[0]=0;if(!(JP(a.hS)?1:0)){f=FQ(a,b,a.hS);g=F3(a,b,a.hS);a.iP.data[0]=f;a.iO.data[0]=g;}else{h=a.iP.data;h[0]=h[0]+b.movementX|0;h=a.iO.data;h[0]=h[0]+b.movementY|0;}a.j8=C7(performance.now()*1000000.0);if(a.k_!==null){d=b.button;d&&d!=2&&d!=1;}b.preventDefault();b.stopPropagation();break a;}}p=FQ(a,b,n);r=F3(a,b,a.hS);if(!(p>=0.0&&p<=Ck.h5.width&&r>=0.0&&r<=Ck.h5.height))a.k$=0;return;}}if(c===A(105))d=1;else if(!(A(105) instanceof H))d
=0;else{e=A(105);d=c.g7!==e.g7?0:1;}if(d){l=b.changedTouches;d=0;s=l.length;while(d<s){o=l.item(d);k=o.identifier;e=a.kX;if(!k)e=!e.hu?null:e.hs;else{h=e.hq;i=Bd(X(U(O(k),B(2135587861, 2654435769)),e.hw));c:{while(true){f=h.data[i];if(!f){i= -(i+1|0)|0;break c;}if(f==k)break;i=(i+1|0)&e.ht;}}e=i<0?null:e.hr.data[i];}t=e.jq;e=a.hS;p=e.width*1.0/e.clientWidth;k=(o.clientX-(EA(a,e)|0)|0)+(e.scrollLeft|0)|0;e=e.ownerDocument;m=V(e.compatMode);if(m===A(104))i=1;else if(!(A(104) instanceof H))i=0;else{n=A(104);i=
m.g7!==n.g7?0:1;}if(i)e=e.documentElement;p=p*(k+(e.scrollLeft|0)|0);k=(p+CY(p)*0.5|0)-a.iP.data[t]|0;e=a.hS;p=e.height*1.0/e.clientHeight;i=(o.clientY-(EZ(a,e)|0)|0)+(e.scrollTop|0)|0;e=e.ownerDocument;m=V(e.compatMode);if(m===A(104))f=1;else if(!(A(104) instanceof H))f=0;else{n=A(104);f=m.g7!==n.g7?0:1;}if(f)e=e.documentElement;p=p*(i+(e.scrollTop|0)|0);i=(p+CY(p)*0.5|0)-a.iO.data[t]|0;a.i_.data[t]=k;a.ja.data[t]=i;h=a.iP;e=a.hS;p=e.width*1.0/e.clientWidth;k=(o.clientX-(EA(a,e)|0)|0)+(e.scrollLeft|0)|0;e=
e.ownerDocument;m=V(e.compatMode);if(m===A(104))i=1;else if(!(A(104) instanceof H))i=0;else{n=A(104);i=m.g7!==n.g7?0:1;}if(i)e=e.documentElement;h=h.data;p=p*(k+(e.scrollLeft|0)|0);h[t]=p+CY(p)*0.5|0;h=a.iO;e=a.hS;p=e.height*1.0/e.clientHeight;k=(o.clientY-(EZ(a,e)|0)|0)+(e.scrollTop|0)|0;e=e.ownerDocument;o=V(e.compatMode);if(o===A(104))i=1;else if(!(A(104) instanceof H))i=0;else{n=A(104);i=o.g7!==n.g7?0:1;}if(i)e=e.documentElement;h=h.data;p=p*(k+(e.scrollTop|0)|0);h[t]=p+CY(p)*0.5|0;d=d+1|0;}a.j8=C7(performance.now()
*1000000.0);b.preventDefault();}if(c===A(106))d=1;else if(!(A(106) instanceof H))d=0;else{e=A(106);d=c.g7!==e.g7?0:1;}if(d){l=b.changedTouches;d=0;i=l.length;while(d<i){o=l.item(d);u=o.identifier;e=a.kX;if(!u)n=!e.hu?null:e.hs;else{h=e.hq;k=Bd(X(U(O(u),B(2135587861, 2654435769)),e.hw));d:{while(true){f=h.data[k];if(!f){k= -(k+1|0)|0;break d;}if(f==u)break;k=(k+1|0)&e.ht;}}n=k<0?null:e.hr.data[k];}t=n.jq;QC(e,u);a.jC.data[t]=0;e=a.hS;p=e.width*1.0/e.clientWidth;k=(o.clientX-(EA(a,e)|0)|0)+(e.scrollLeft|0)|0;e
=e.ownerDocument;m=V(e.compatMode);if(m===A(104))f=1;else if(!(A(104) instanceof H))f=0;else{n=A(104);f=m.g7!==n.g7?0:1;}if(f)e=e.documentElement;p=p*(k+(e.scrollLeft|0)|0);v=p+CY(p)*0.5|0;e=a.hS;p=e.height*1.0/e.clientHeight;k=(o.clientY-(EZ(a,e)|0)|0)+(e.scrollTop|0)|0;e=e.ownerDocument;o=V(e.compatMode);if(o===A(104))f=1;else if(!(A(104) instanceof H))f=0;else{n=A(104);f=o.g7!==n.g7?0:1;}if(f)e=e.documentElement;p=p*(k+(e.scrollTop|0)|0);g=p+CY(p)*0.5|0;h=a.iP.data;k=v-h[t]|0;j=a.iO.data;f=g-j[t]|0;a.i_.data[t]
=k;a.ja.data[t]=f;h[t]=v;j[t]=g;d=d+1|0;}a.j8=C7(performance.now()*1000000.0);b.preventDefault();}if(c===A(107))d=1;else if(!(A(107) instanceof H))d=0;else{e=A(107);d=c.g7!==e.g7?0:1;}if(d){l=b.changedTouches;d=0;s=l.length;while(d<s){o=l.item(d);k=o.identifier;e=a.kX;if(!k)c=!e.hu?null:e.hs;else{h=e.hq;i=Bd(X(U(O(k),B(2135587861, 2654435769)),e.hw));e:{while(true){f=h.data[i];if(!f){i= -(i+1|0)|0;break e;}if(f==k)break;i=(i+1|0)&e.ht;}}c=i<0?null:e.hr.data[i];}t=c.jq;QC(e,k);a.jC.data[t]=0;e=a.hS;p=e.width
*1.0/e.clientWidth;k=(o.clientX-(EA(a,e)|0)|0)+(e.scrollLeft|0)|0;e=e.ownerDocument;n=V(e.compatMode);if(n===A(104))i=1;else if(!(A(104) instanceof H))i=0;else{c=A(104);i=n.g7!==c.g7?0:1;}if(i)e=e.documentElement;p=p*(k+(e.scrollLeft|0)|0);g=p+CY(p)*0.5|0;e=a.hS;p=e.height*1.0/e.clientHeight;k=(o.clientY-(EZ(a,e)|0)|0)+(e.scrollTop|0)|0;e=e.ownerDocument;n=V(e.compatMode);if(n===A(104))i=1;else if(!(A(104) instanceof H))i=0;else{c=A(104);i=n.g7!==c.g7?0:1;}if(i)e=e.documentElement;p=p*(k+(e.scrollTop|0)|0);f
=p+CY(p)*0.5|0;h=a.iP.data;k=g-h[t]|0;j=a.iO.data;i=f-j[t]|0;a.i_.data[t]=k;a.ja.data[t]=i;h[t]=g;j[t]=f;d=d+1|0;}a.j8=C7(performance.now()*1000000.0);b.preventDefault();}},
Sg=(a,b)=>{let c,d,e,f,g,h;c=V(b.type);if(c===A(108))d=1;else if(!(A(108) instanceof H))d=0;else{e=A(108);d=c.g7!==e.g7?0:1;}if(d&&a.k$){a:{f=NO(b.keyCode);switch(f){case 67:break;case 112:break a;default:break a;}}e=a.nN;if(!f)d=e.k3;else{g=e.j4;d=Bd(X(U(O(f),B(2135587861, 2654435769)),e.kR));b:{while(true){h=g.data[d];if(!h){d= -(d+1|0)|0;break b;}if(h==f)break;d=(d+1|0)&e.jX;}}d=d<0?0:1;}if(d)b.preventDefault();if(!(f!=67&&f!=112))b.preventDefault();else{g=a.m_.data;if(!g[f]){a.lw=a.lw+1|0;g[f]=1;a.mE=1;a.nP.data[f]
=1;}}if(f==61){b.preventDefault();b.stopPropagation();}}else{if(c===A(109))d=1;else if(!(A(109) instanceof H))d=0;else{e=A(109);d=c.g7!==e.g7?0:1;}if(!(d&&a.k$)){if(c===A(110))d=1;else if(!(A(110) instanceof H))d=0;else{e=A(110);d=c.g7!==e.g7?0:1;}if(d&&a.k$){f=NO(b.keyCode);e=a.nN;if(!f)d=e.k3;else{g=e.j4;d=Bd(X(U(O(f),B(2135587861, 2654435769)),e.kR));c:{while(true){h=g.data[d];if(!h){d= -(d+1|0)|0;break c;}if(h==f)break;d=(d+1|0)&e.jX;}}d=d<0?0:1;}if(d)b.preventDefault();g=a.m_.data;if(g[f]){a.lw=a.lw-1|
0;g[f]=0;}if(f==61){b.preventDefault();b.stopPropagation();}}}else if((b.charCode&65535)==9){b.preventDefault();b.stopPropagation();}}},
Nm=a=>{let b,c,d;a:{if(a.lo){a.lo=0;b=0;while(true){c=a.oq.data;if(b>=c.length)break a;c[b]=0;b=b+1|0;}}}b:{if(a.mE){a.mE=0;d=0;while(true){c=a.nP.data;if(d>=c.length)break b;c[d]=0;d=d+1|0;}}}},
FQ=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(EA(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=V(b.compatMode);if(f===A(104))g=1;else if(!(A(104) instanceof H))g=0;else{c=A(104);g=f.g7!==c.g7?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+CY(d)*0.5|0;},
F3=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(EZ(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=V(b.compatMode);if(f===A(104))g=1;else if(!(A(104) instanceof H))g=0;else{c=A(104);g=f.g7!==c.g7?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+CY(d)*0.5|0;},
EZ=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;},
EA=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;},
WZ=(a,b)=>{a.k_=b;},
JP=b=>{if(document.pointerLockElement===canvas||document.mozPointerLockElement===canvas){return true;}return false;},
SR=(a,b)=>{ACS(a,b);Sg(a,b);};
let N3=D(0);
function Px(){C.call(this);this.sm=null;}
function OV(){C.call(this);this.rT=null;}
let OO=D(0);
let M2=D();
let LL=D(0);
function OR(){let a=this;C.call(a);a.rU=0;a.mk=0;a.rq=null;a.nU=null;}
let PH=b=>{if("clipboard" in navigator){navigator.clipboard.writeText(b);}};
let AC9=D();
let Dc=null,Ck=null,ABt=null,Mf=null,AA1=null,AFe=null,D0=null,Bx=null,En=null;
let PA=D(0);
let OX=D(0);
function Mx(){C.call(this);this.qn=null;}
function Hz(){C.call(this);this.mX=null;}
let Xa=(a,b)=>{let c,d,$$je;c=V(a.mX.j5.jd.document.visibilityState);if(A(111)===c)d=1;else if(!(c instanceof H))d=0;else{c=c;d=A(111).g7!==c.g7?0:1;}if(!d){b=a.mX.l3;Er(b);a:{try{c=Nn(b);while(NB(c)){ACV(LX(c));}CO(b);break a;}catch($$e){$$je=BP($$e);c=$$je;}CO(b);E(c);}}else{b=a.mX.l3;Er(b);b:{try{c=Nn(b);while(NB(c)){AGw(LX(c));}CO(b);break b;}catch($$e){$$je=BP($$e);c=$$je;}CO(b);E(c);}}},
AFb=(a,b)=>{Xa(a,b);};
function HA(){C.call(this);this.lv=null;}
let AKs=(a,b)=>{let c,d,e,f,g;c=a.lv.j5.jd.document.documentElement.clientWidth;b=a.lv;d=c-b.jw.nq|0;e=b.j5.jd.document.documentElement.clientHeight;b=a.lv;f=b.jw;c=e-f.oy|0;if(d>0&&c>0){if(b.j_!==null){if(f.mA){g=devicePixelRatio||1;d=d*g|0;c=c*g|0;}Hx(a.lv.j_,d,c);}return;}},
AJi=(a,b)=>{AKs(a,b);};
let Bs=D(BA);
let AHw=D();
let T$=D();
let G8=(b,c)=>{let d,e,f,g,h,i,j;if(b<0){d=new Bs;e=new K;e.g8=G(16);F(e,e.g6,A(112));J(e,e.g6,b,10);f=new H;g=e.g8;h=g.data;i=e.g6;j=h.length;if(i>=0&&i<=(j-0|0)){f.g7=L(g.data,0,i);d.g9=1;d.g$=1;d.ha=f;E(d);}d=new I;d.g9=1;d.g$=1;E(d);}j=Wi(b/c)|0;if(2>j)j=2;i=Xk(j);if(i<=1073741824)return i;d=new Bs;e=new K;e.g8=G(16);F(e,e.g6,A(113));J(e,e.g6,b,10);f=new H;g=e.g8;h=g.data;i=e.g6;j=h.length;if(i>=0&&i<=(j-0|0)){f.g7=L(g.data,0,i);d.g9=1;d.g$=1;d.ha=f;E(d);}d=new I;d.g9=1;d.g$=1;E(d);};
let AA8=D(Dr);
let LT=null;
let AHr=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;if(e>=2&&e<=36){if(c==d){b=new B0;b.g9=1;b.g$=1;b.ha=A(53);E(b);}f=0;if(c>=0&&c<b.g7.length){a:{switch(b.g7.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=BM;i=O(e);j=Ci(O(1),Jw(B(4294967295, 2147483647),i));if(g==d){b=new B0;b.g9=1;b.g$=1;E(b);}b:{while(g<d){k=g+1|0;if(g<0)break b;if(g>=b.g7.length)break b;g=Zu(b.g7.charCodeAt(g));if(g<0){l=new B0;b=Cb(b,c,d);m=new K;m.g8=G(16);F(m,m.g6,A(54));c=m.g6;if(b===null)b=A(2);F(m,c,
b);b=new H;n=m.g8;o=n.data;d=m.g6;e=o.length;if(d>=0&&d<=(e-0|0)){b.g7=L(n.data,0,d);l.g9=1;l.g$=1;l.ha=b;E(l);}b=new I;b.g9=1;b.g$=1;Bl(b);E(b);}if(g>=e){l=new B0;p=Cb(b,c,d);b=new K;b.g8=G(16);F(b,b.g6,A(55));J(b,b.g6,e,10);F(b,b.g6,A(51));c=b.g6;if(p===null)p=A(2);F(b,c,p);m=new H;n=b.g8;o=n.data;d=b.g6;e=o.length;if(d>=0&&d<=(e-0|0)){m.g7=L(n.data,0,d);l.g9=1;l.g$=1;l.ha=m;E(l);}b=new I;b.g9=1;b.g$=1;Bl(b);E(b);}if(Wq(h,j)){b=new B0;b.g9=1;b.g$=1;b.ha=A(114);E(b);}h=Ci(U(i,h),O(g));if(ALa(h,BM)){if(k==d
&&C6(h,B(0, 2147483648))&&f)return B(0, 2147483648);l=new B0;p=Cb(b,c,d);m=new K;m.g8=G(16);F(m,m.g6,A(115));c=m.g6;if(p===null)p=A(2);F(m,c,p);b=new H;n=m.g8;o=n.data;e=m.g6;c=o.length;if(e>=0&&e<=(c-0|0)){b.g7=L(n.data,0,e);l.g9=1;l.g$=1;l.ha=b;E(l);}b=new I;b.g9=1;b.g$=1;Bl(b);E(b);}g=k;}if(f)h=ALG(h);return h;}b=new Q;b.g9=1;b.g$=1;E(b);}b=new Q;b.g9=1;b.g$=1;E(b);}b=new B0;l=new K;l.g8=G(16);F(l,l.g6,A(58));J(l,l.g6,e,10);m=new H;n=l.g8;o=n.data;d=l.g6;e=o.length;if(d>=0&&d<=(e-0|0)){m.g7=L(n.data,0,d);b.g9
=1;b.g$=1;b.ha=m;E(b);}b=new I;b.g9=1;b.g$=1;Bl(b);E(b);},
Zu=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
DV=b=>{let c,d;if(C6(b,BM))return 64;c=0;d=X(b,32);if(W7(d,BM))c=32;else d=b;b=X(d,16);if(C6(b,BM))b=d;else c=c|16;d=X(b,8);if(C6(d,BM))d=b;else c=c|8;b=X(d,4);if(C6(b,BM))b=d;else c=c|4;d=X(b,2);if(C6(d,BM))d=b;else c=c|2;if(W7(X(d,1),BM))c=c|1;return (64-c|0)-1|0;},
DF=(b,c)=>{return ALJ(b,c);},
DU=(b,c)=>{return ALH(b,c);},
ALm=()=>{LT=Bk(ACy);};
let AAH=D();
let WE=()=>{return {};};
let IX=D(0);
function Fb(){let a=this;C.call(a);a.hf=null;a.ko=0;a.ki=0;a.jt=0;a.ru=0;a.rB=0;a.rE=0;a.kv=0;a.h1=null;a.im=null;a.jS=null;a.r5=null;a.rH=null;a.ri=null;a.iV=null;a.ju=0;a.lW=null;a.kr=null;a.lr=null;a.l1=null;a.re=null;}
let Ja=(a,b)=>{a.ko=1;a.ki=1;a.jt=1;a.ru=1;a.rB=1;a.rE=1;a.kv=1;a.h1=Cr(51,0.800000011920929);a.im=Cr(51,0.800000011920929);a.jS=Cr(51,0.800000011920929);a.r5=Cr(51,0.800000011920929);a.rH=Cr(51,0.800000011920929);a.ri=Cr(51,0.800000011920929);a.iV=Cr(51,0.800000011920929);a.ju=0;a.lW=new Float32Array(40000);a.kr=new Int32Array(12000);a.lr=new Int16Array(12000);a.l1=new Int8Array(12000);a.re=new Uint8Array(240000);a.hf=b;b.pixelStorei(37441,0);},
AHI=a=>{let b=new Fb();Ja(b,a);return b;},
AKg=(a,b)=>{let c,d,e,f,g;if(FR){c=(!G_(b,Dv)?null:b.kb.h6.data).buffer;d=b.hl;e=b.he-d|0;return new Float32Array(c,d,e);}if((b.he-b.hl|0)>a.lW.length)a.lW=new Float32Array(b.he-b.hl|0);e=b.hl;d=0;while(true){f=b.he;if(e>=f)break;c=a.lW;g=Z_(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.lW;e=f-b.hl|0;return c.subarray(0,e);},
ABg=(a,b)=>{let c,d,e,f,g;if(FR){c=(!G_(b,Dv)?null:b.lf.h6.data).buffer;d=b.hl;e=b.he-d|0;return new Int16Array(c,d,e);}if((b.he-b.hl|0)>a.lr.length)a.lr=new Int16Array(b.he-b.hl|0);e=b.hl;d=0;while(true){f=b.he;if(e>=f)break;c=a.lr;g=AFs(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.lr;e=f-b.hl|0;return c.subarray(0,e);},
AIA=(a,b)=>{let c,d,e,f,g;if(FR){c=(!G_(b,Dv)?null:b.cU()).buffer;d=b.hl;e=b.he-d|0;return new Int32Array(c,d,e);}if((b.he-b.hl|0)>a.kr.length)a.kr=new Int32Array(b.he-b.hl|0);e=b.hl;d=0;while(true){f=b.he;if(e>=f)break;c=a.kr;g=b.cV(e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.kr;e=f-b.hl|0;return c.subarray(0,e);},
ACO=(a,b)=>{let c,d,e,f,g;if(FR)return !G_(b,Dv)?null:b.cU();if((b.he-b.hl|0)>a.l1.length)a.l1=new Int8Array(b.he-b.hl|0);c=b.hl;d=0;while(true){e=b.he;if(c>=e)break;f=a.l1;g=b.cW(c);f[d]=g;c=c+1|0;d=d+1|0;}f=a.l1;c=e-b.hl|0;return f.subarray(0,c);},
AL5=(a,b)=>{if((b.he-b.hl|0)>a.kr.length)a.kr=new Int32Array(b.he-b.hl|0);},
AKR=(a,b)=>{let c,d,e,f,g;c=a.iV;d=a.ju;if(!d)c=!c.hu?null:c.hs;else{e=c.hq;f=Bd(X(U(O(d),B(2135587861, 2654435769)),c.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==d)break;f=(f+1|0)&c.ht;}}c=f<0?null:c.hr.data[f];}c=c;if(!b)c=!c.hu?null:c.hs;else{e=c.hq;d=Bd(X(U(O(b),B(2135587861, 2654435769)),c.hw));b:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break b;}if(f==b)break;d=(d+1|0)&c.ht;}}c=d<0?null:c.hr.data[d];}Bp();return c===null?null:c[Be]===true?c:c.hy;},
YN=(a,b,c)=>{let d,e,f,g,h,i;d=a.h1;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hy;d=a.im;if(!c)d=!d.hu?null:d.hs;else{e=d.hq;b=Bd(X(U(O(c),B(2135587861, 2654435769)),d.hw));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.ht;}}d=b<0?null:d.hr.data[b];}i=d===null?null:d[Be]===true?d:d.hy;a.hf.attachShader(h,
i);},
AJc=(a,b,c)=>{let d,e,f,g,h;d=a.hf;e=a.jS;if(!c)e=!e.hu?null:e.hs;else{f=e.hq;g=Bd(X(U(O(c),B(2135587861, 2654435769)),e.hw));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.ht;}}e=g<0?null:e.hr.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hy;d.bindBuffer(b,e);},
Ih=(a,b,c,d,e)=>{let f,g;if(d instanceof E2){f=a.hf;d=AKg(a,d);f.bufferData(b,d,e);}else if(d instanceof Gn){f=a.hf;d=AIA(a,d);f.bufferData(b,d,e);}else if(d instanceof Gr){f=a.hf;d=ABg(a,d);f.bufferData(b,d,e);}else if(d instanceof EF){f=a.hf;g=ACO(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new Bf;f.g9=1;f.g$=1;f.ha=A(116);E(f);}a.hf.bufferData(b,c,e);}},
AG8=(a,b)=>{a.hf.clear(b);},
Vc=(a,b,c,d,e)=>{a.hf.clearColor(b,c,d,e);},
ZD=(a,b)=>{let c,d,e,f;c=a.im;if(!b)c=!c.hu?null:c.hs;else{d=c.hq;e=Bd(X(U(O(b),B(2135587861, 2654435769)),c.hw));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.ht;}}c=e<0?null:c.hr.data[e];}Bp();c=c===null?null:c[Be]===true?c:c.hy;a.hf.compileShader(c);},
AJQ=a=>{let b,c;b=a.hf.createProgram();c=a.ko;a.ko=c+1|0;Cc(a.h1,c,Cd(b));return c;},
AEy=(a,b)=>{let c,d;c=a.hf.createShader(b);d=a.ki;a.ki=d+1|0;Cc(a.im,d,Cd(c));return d;},
AEh=(a,b)=>{a.hf.disable(b);},
ACX=(a,b)=>{a.hf.disableVertexAttribArray(b);},
VF=(a,b,c,d)=>{a.hf.drawArrays(b,c,d);},
AAm=(a,b,c,d,e)=>{let f,g;f=a.hf;g=e.hl;f.drawElements(b,c,d,g);},
ACt=(a,b,c,d,e)=>{a.hf.drawElements(b,c,d,e);},
AHK=(a,b)=>{a.hf.enableVertexAttribArray(b);},
ALv=a=>{let b,c;b=a.hf.createBuffer();c=a.jt;a.jt=c+1|0;Cc(a.jS,c,Cd(b));return c;},
HN=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.hf;g=a.h1;if(!b)g=!g.hu?null:g.hs;else{h=g.hq;i=Bd(X(U(O(b),B(2135587861, 2654435769)),g.hw));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.ht;}}g=i<0?null:g.hr.data[i];}Bp();g=g===null?null:g[Be]===true?g:g.hy;g=f.getActiveAttrib(g,c);Dh(d,g.size);Dh(e,g.type);d.hl=0;d.he=d.hE;d.hD=(-1);e.hl=0;e.he=e.hE;e.hD=(-1);return V(g.name);},
IR=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.hf;g=a.h1;if(!b)g=!g.hu?null:g.hs;else{h=g.hq;i=Bd(X(U(O(b),B(2135587861, 2654435769)),g.hw));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.ht;}}g=i<0?null:g.hr.data[i];}Bp();g=g===null?null:g[Be]===true?g:g.hy;g=f.getActiveUniform(g,c);Dh(d,g.size);Dh(e,g.type);d.hl=0;d.he=d.hE;d.hD=(-1);e.hl=0;e.he=e.hE;e.hD=(-1);return V(g.name);},
WW=(a,b,c)=>{let d,e,f,g,h;d=a.h1;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hy;return a.hf.getAttribLocation(h,Br(c));},
AJH=(a,b)=>{let c,d,e,f,g;c=a.hf;d=a.h1;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hy;return V(c.getProgramInfoLog(d));},
I9=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.hf;f=a.h1;if(!b)f=!f.hu?null:f.hs;else{g=f.hq;h=Bd(X(U(O(b),B(2135587861, 2654435769)),f.hw));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.ht;}}f=h<0?null:f.hr.data[h];}Bp();f=f===null?null:f[Be]===true?f:f.hy;Dh(d,e.getProgramParameter(f,c));}else{f=a.hf;e=a.h1;if(!b)e=!e.hu?null:e.hs;else{g=e.hq;h=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hw));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i
==b)break;h=(h+1|0)&e.ht;}}e=h<0?null:e.hr.data[h];}Bp();e=e===null?null:e[Be]===true?e:e.hy;Dh(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.hl=0;d.he=d.hE;d.hD=(-1);},
AAY=(a,b)=>{let c,d,e,f,g;c=a.hf;d=a.im;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hy;return V(c.getShaderInfoLog(d));},
H9=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35713&&c!=35712){e=a.hf;f=a.im;if(!b)f=!f.hu?null:f.hs;else{g=f.hq;h=Bd(X(U(O(b),B(2135587861, 2654435769)),f.hw));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.ht;}}f=h<0?null:f.hr.data[h];}Bp();f=f===null?null:f[Be]===true?f:f.hy;Dh(d,e.getShaderParameter(f,c));}else{f=a.hf;e=a.im;if(!b)e=!e.hu?null:e.hs;else{g=e.hq;h=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hw));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i==b)break;h
=(h+1|0)&e.ht;}}e=h<0?null:e.hr.data[h];}Bp();e=e===null?null:e[Be]===true?e:e.hy;Dh(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.hl=0;d.he=d.hE;d.hD=(-1);},
XJ=(a,b)=>{return V(a.hf.getParameter(b));},
XD=(a,b,c)=>{let d,e,f,g,h;d=a.hf;e=a.h1;if(!b)e=!e.hu?null:e.hs;else{f=e.hq;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hw));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.ht;}}e=g<0?null:e.hr.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hy;d=d.getUniformLocation(e,Br(c));if(d===null)return (-1);c=a.iV;if(!b)c=!c.hu?null:c.hs;else{f=c.hq;h=Bd(X(U(O(b),B(2135587861, 2654435769)),c.hw));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&c.ht;}}c
=h<0?null:c.hr.data[h];}c=c;if(c===null){c=Cr(51,0.800000011920929);Cc(a.iV,b,c);}h=a.kv;a.kv=h+1|0;Cc(c,h,Cd(d));return h;},
TJ=(a,b)=>{let c,d,e,f,g;c=a.hf;d=a.h1;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hy;c.linkProgram(d);},
RG=(a,b,c)=>{let d,e,f,g,h;d=a.hf;e=a.im;if(!b)e=!e.hu?null:e.hs;else{f=e.hq;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hw));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.ht;}}e=g<0?null:e.hr.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hy;d.shaderSource(e,Br(c));},
AEg=(a,b,c)=>{let d,e,f,g,h,i;d=a.iV;e=a.ju;if(!e)d=!d.hu?null:d.hs;else{f=d.hq;g=Bd(X(U(O(e),B(2135587861, 2654435769)),d.hw));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.ht;}}d=g<0?null:d.hr.data[g];}d=d;if(!b)d=!d.hu?null:d.hs;else{f=d.hq;g=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));b:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break b;}if(h==b)break;g=(g+1|0)&d.ht;}}d=g<0?null:d.hr.data[g];}Bp();i=d===null?null:d[Be]===true?d:d.hy;a.hf.uniform1i(i,c);},
XI=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=a.iV;f=a.ju;if(!f)g=!g.hu?null:g.hs;else{h=g.hq;c=Bd(X(U(O(f),B(2135587861, 2654435769)),g.hw));a:{while(true){i=h.data[c];if(!i){c= -(c+1|0)|0;break a;}if(i==f)break;c=(c+1|0)&g.ht;}}g=c<0?null:g.hr.data[c];}g=g;if(!b)g=!g.hu?null:g.hs;else{h=g.hq;c=Bd(X(U(O(b),B(2135587861, 2654435769)),g.hw));b:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break b;}if(f==b)break;c=(c+1|0)&g.ht;}}g=c<0?null:g.hr.data[c];}Bp();j=g===null?null:g[Be]===true?g:g.hy;g=a.hf;k="uniformMatrix4fv";l
=!!d;if(e===null)m=null;else{e=e.data;b=e.length;m=new Array(b);c=0;while(c<b){n=e[c];m[c]=n;c=c+1|0;}}g[k](j,l,m);},
TL=(a,b)=>{let c,d,e,f,g;a.ju=b;c=a.hf;d=a.h1;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hy;c.useProgram(d);},
ABn=(a,b,c,d,e,f,g)=>{a.hf.vertexAttribPointer(b,c,d,!!e,f,g);},
R4=(a,b,c,d,e)=>{a.hf.viewport(b,c,d,e);};
let N1=D(0);
function Hn(){let a=this;Fb.call(a);a.hH=null;a.sv=null;a.sd=0;a.rl=null;a.rz=0;a.rR=null;a.q3=0;a.lP=null;a.lK=0;a.r7=null;}
let Km=(a,b)=>{Ja(a,b);a.sv=Cr(51,0.800000011920929);a.sd=1;a.rl=Cr(51,0.800000011920929);a.rz=1;a.rR=Cr(51,0.800000011920929);a.q3=1;a.lP=Cr(51,0.800000011920929);a.lK=1;a.r7=new Uint32Array(12000);a.hH=b;},
AIF=a=>{let b=new Hn();Km(b,a);return b;},
Yp=(a,b)=>{let c,d,e,f,g;c=a.hH;d=a.lP;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hy;c.bindVertexArray(d);},
ACM=(a,b,c,d,e)=>{a.hH.drawArraysInstanced(b,c,d,e);},
AKm=(a,b,c,d,e,f)=>{a.hH.drawElementsInstanced(b,c,d,e,f);},
ADm=(a,b,c)=>{let d,e,f,g;d=c.hl;e=0;while(e<b){f=a.hH.createVertexArray();g=a.lK;a.lK=g+1|0;Cc(a.lP,g,Cd(f));Dh(c,g);e=e+1|0;}Cu(c,d);};
let Lc=D(Hn);
let W3=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hH;d=a.lP;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hy;c.bindVertexArray(d);b=a.hH.getError();if(!b)return;c=new Bf;h=Bj(b,4);d=new K;d.g8=G(16);F(d,d.g6,A(117));J(d,d.g6,b,10);F(d,d.g6,A(118));b=d.g6;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g8;j=e.data;f=d.g6;g=j.length;if(f>=0&&
f<=(g-0|0)){i.g7=L(e.data,0,f);c.g9=1;c.g$=1;c.ha=i;E(c);}c=new I;Y(c);E(c);},
Uo=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.hH.drawArraysInstanced(b,c,d,e);b=a.hH.getError();if(!b)return;f=new Bf;g=Bj(b,4);h=new K;h.g8=G(16);F(h,h.g6,A(117));J(h,h.g6,b,10);F(h,h.g6,A(118));b=h.g6;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.g8;k=j.data;c=h.g6;d=k.length;if(c>=0&&c<=(d-0|0)){i.g7=L(j.data,0,c);f.g9=1;f.g$=1;f.ha=i;E(f);}f=new I;Y(f);E(f);},
AI6=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a.hH.drawElementsInstanced(b,c,d,e,f);b=a.hH.getError();if(!b)return;g=new Bf;h=Bj(b,4);i=new K;i.g8=G(16);F(i,i.g6,A(117));J(i,i.g6,b,10);F(i,i.g6,A(118));b=i.g6;if(h===null)h=A(2);F(i,b,h);j=new H;k=i.g8;l=k.data;c=i.g6;d=l.length;if(c>=0&&c<=(d-0|0)){j.g7=L(k.data,0,c);g.g9=1;g.g$=1;g.ha=j;E(g);}g=new I;Y(g);E(g);},
Tz=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=c.hl;e=0;while(e<b){f=a.hH.createVertexArray();g=a.lK;a.lK=g+1|0;Cc(a.lP,g,Cd(f));Dh(c,g);e=e+1|0;}Cu(c,d);b=a.hH.getError();if(!b)return;c=new Bf;h=Bj(b,4);f=new K;f.g8=G(16);F(f,f.g6,A(117));J(f,f.g6,b,10);F(f,f.g6,A(118));b=f.g6;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.g8;k=j.data;e=f.g6;l=k.length;if(e>=0&&e<=(l-0|0)){i.g7=L(j.data,0,e);c.g9=1;c.g$=1;c.ha=i;E(c);}c=new I;Y(c);E(c);},
AHa=(a,b)=>{let c,d,e,f,g,h,i,j;a.hf.clear(b);b=a.hH.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g8=G(16);F(e,e.g6,A(117));J(e,e.g6,b,10);F(e,e.g6,A(118));b=e.g6;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g8;h=g.data;i=e.g6;j=h.length;if(i>=0&&i<=(j-0|0)){f.g7=L(g.data,0,i);c.g9=1;c.g$=1;c.ha=f;E(c);}c=new I;Y(c);E(c);},
ABO=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.hf.clearColor(b,c,d,e);f=a.hH.getError();if(!f)return;g=new Bf;h=Bj(f,4);i=new K;i.g8=G(16);F(i,i.g6,A(117));J(i,i.g6,f,10);F(i,i.g6,A(118));f=i.g6;if(h===null)h=A(2);F(i,f,h);j=new H;k=i.g8;l=k.data;m=i.g6;n=l.length;if(m>=0&&m<=(n-0|0)){j.g7=L(k.data,0,m);g.g9=1;g.g$=1;g.ha=j;E(g);}g=new I;Y(g);E(g);},
AHN=(a,b)=>{let c,d,e,f,g,h,i,j;a.hf.disable(b);b=a.hH.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g8=G(16);F(e,e.g6,A(117));J(e,e.g6,b,10);F(e,e.g6,A(118));b=e.g6;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g8;h=g.data;i=e.g6;j=h.length;if(i>=0&&i<=(j-0|0)){f.g7=L(g.data,0,i);c.g9=1;c.g$=1;c.ha=f;E(c);}c=new I;Y(c);E(c);},
Wo=(a,b,c,d)=>{let e,f,g,h,i,j;a.hf.drawArrays(b,c,d);b=a.hH.getError();if(!b)return;e=new Bf;f=Bj(b,4);g=new K;g.g8=G(16);F(g,g.g6,A(117));J(g,g.g6,b,10);F(g,g.g6,A(118));b=g.g6;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.g8;j=i.data;c=g.g6;d=j.length;if(c>=0&&c<=(d-0|0)){h.g7=L(i.data,0,c);e.g9=1;e.g$=1;e.ha=h;E(e);}e=new I;Y(e);E(e);},
AEH=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.hf;g=e.hl;f.drawElements(b,c,d,g);b=a.hH.getError();if(!b)return;e=new Bf;h=Bj(b,4);f=new K;f.g8=G(16);F(f,f.g6,A(117));J(f,f.g6,b,10);F(f,f.g6,A(118));b=f.g6;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.g8;k=j.data;c=f.g6;d=k.length;if(c>=0&&c<=(d-0|0)){i.g7=L(j.data,0,c);e.g9=1;e.g$=1;e.ha=i;E(e);}e=new I;Y(e);E(e);},
Rs=(a,b)=>{return V(a.hf.getParameter(b));},
Yf=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.hf.viewport(b,c,d,e);b=a.hH.getError();if(!b)return;f=new Bf;g=Bj(b,4);h=new K;h.g8=G(16);F(h,h.g6,A(117));J(h,h.g6,b,10);F(h,h.g6,A(118));b=h.g6;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.g8;k=j.data;c=h.g6;d=k.length;if(c>=0&&c<=(d-0|0)){i.g7=L(j.data,0,c);f.g9=1;f.g$=1;f.ha=i;E(f);}f=new I;Y(f);E(f);},
AA5=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.h1;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hy;d=a.im;if(!c)d=!d.hu?null:d.hs;else{e=d.hq;b=Bd(X(U(O(c),B(2135587861, 2654435769)),d.hw));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.ht;}}d=b<0?null:d.hr.data[b];}i=d===null?null:d[Be]===true?
d:d.hy;a.hf.attachShader(h,i);b=a.hH.getError();if(!b)return;d=new Bf;j=Bj(b,4);h=new K;h.g8=G(16);F(h,h.g6,A(117));J(h,h.g6,b,10);F(h,h.g6,A(118));b=h.g6;if(j===null)j=A(2);F(h,b,j);i=new H;e=h.g8;k=e.data;c=h.g6;f=k.length;if(c>=0&&c<=(f-0|0)){i.g7=L(e.data,0,c);d.g9=1;d.g$=1;d.ha=i;E(d);}d=new I;Y(d);E(d);},
AIx=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.hf;e=a.jS;if(!c)e=!e.hu?null:e.hs;else{f=e.hq;g=Bd(X(U(O(c),B(2135587861, 2654435769)),e.hw));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.ht;}}e=g<0?null:e.hr.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hy;d.bindBuffer(b,e);b=a.hH.getError();if(!b)return;d=new Bf;i=Bj(b,4);e=new K;e.g8=G(16);F(e,e.g6,A(117));J(e,e.g6,b,10);F(e,e.g6,A(118));b=e.g6;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.g8;k=f.data;c=e.g6;g=k.length;if(c>=0&&c<=(g
-0|0)){j.g7=L(f.data,0,c);d.g9=1;d.g$=1;d.ha=j;E(d);}d=new I;Y(d);E(d);},
ABY=(a,b,c,d,e)=>{let f,g,h,i,j;Ih(a,b,c,d,e);b=a.hH.getError();if(!b)return;d=new Bf;f=Bj(b,4);g=new K;g.g8=G(16);F(g,g.g6,A(117));J(g,g.g6,b,10);F(g,g.g6,A(118));b=g.g6;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.g8;j=i.data;c=g.g6;e=j.length;if(c>=0&&c<=(e-0|0)){h.g7=L(i.data,0,c);d.g9=1;d.g$=1;d.ha=h;E(d);}d=new I;Y(d);E(d);},
ADd=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.im;if(!b)c=!c.hu?null:c.hs;else{d=c.hq;e=Bd(X(U(O(b),B(2135587861, 2654435769)),c.hw));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.ht;}}c=e<0?null:c.hr.data[e];}Bp();g=c===null?null:c[Be]===true?c:c.hy;a.hf.compileShader(g);b=a.hH.getError();if(!b)return;c=new Bf;h=Bj(b,4);g=new K;g.g8=G(16);F(g,g.g6,A(117));J(g,g.g6,b,10);F(g,g.g6,A(118));b=g.g6;if(h===null)h=A(2);F(g,b,h);i=new H;d=g.g8;j=d.data;e=g.g6;f=j.length;if(e>=0&&e<=(f-0|0))
{i.g7=L(d.data,0,e);c.g9=1;c.g$=1;c.ha=i;E(c);}c=new I;Y(c);E(c);},
AJP=a=>{let b,c,d,e,f,g,h,i,j;b=a.hf.createProgram();c=a.ko;a.ko=c+1|0;Cc(a.h1,c,Cd(b));d=a.hH.getError();if(!d)return c;b=new Bf;e=Bj(d,4);f=new K;f.g8=G(16);F(f,f.g6,A(117));J(f,f.g6,d,10);F(f,f.g6,A(118));d=f.g6;if(e===null)e=A(2);F(f,d,e);g=new H;h=f.g8;i=h.data;c=f.g6;j=i.length;if(c>=0&&c<=(j-0|0)){g.g7=L(h.data,0,c);b.g9=1;b.g$=1;b.ha=g;E(b);}b=new I;Y(b);E(b);},
AEV=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hf.createShader(b);d=a.ki;a.ki=d+1|0;Cc(a.im,d,Cd(c));b=a.hH.getError();if(!b)return d;c=new Bf;e=Bj(b,4);f=new K;f.g8=G(16);F(f,f.g6,A(117));J(f,f.g6,b,10);F(f,f.g6,A(118));b=f.g6;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g8;i=h.data;d=f.g6;j=i.length;if(d>=0&&d<=(j-0|0)){g.g7=L(h.data,0,d);c.g9=1;c.g$=1;c.ha=g;E(c);}c=new I;Y(c);E(c);},
AJE=(a,b)=>{let c,d,e,f,g,h,i,j;a.hf.disableVertexAttribArray(b);b=a.hH.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g8=G(16);F(e,e.g6,A(117));J(e,e.g6,b,10);F(e,e.g6,A(118));b=e.g6;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g8;h=g.data;i=e.g6;j=h.length;if(i>=0&&i<=(j-0|0)){f.g7=L(g.data,0,i);c.g9=1;c.g$=1;c.ha=f;E(c);}c=new I;Y(c);E(c);},
T1=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.hf.drawElements(b,c,d,e);b=a.hH.getError();if(!b)return;f=new Bf;g=Bj(b,4);h=new K;h.g8=G(16);F(h,h.g6,A(117));J(h,h.g6,b,10);F(h,h.g6,A(118));b=h.g6;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.g8;k=j.data;c=h.g6;d=k.length;if(c>=0&&c<=(d-0|0)){i.g7=L(j.data,0,c);f.g9=1;f.g$=1;f.ha=i;E(f);}f=new I;Y(f);E(f);},
AE0=(a,b)=>{let c,d,e,f,g,h,i,j;a.hf.enableVertexAttribArray(b);b=a.hH.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g8=G(16);F(e,e.g6,A(117));J(e,e.g6,b,10);F(e,e.g6,A(118));b=e.g6;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g8;h=g.data;i=e.g6;j=h.length;if(i>=0&&i<=(j-0|0)){f.g7=L(g.data,0,i);c.g9=1;c.g$=1;c.ha=f;E(c);}c=new I;Y(c);E(c);},
Zo=(a,b,c,d,e)=>{let f,g,h,i,j;f=HN(a,b,c,d,e);b=a.hH.getError();if(!b)return f;d=new Bf;g=Bj(b,4);e=new K;e.g8=G(16);F(e,e.g6,A(117));J(e,e.g6,b,10);F(e,e.g6,A(118));b=e.g6;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.g8;i=h.data;c=e.g6;j=i.length;if(c>=0&&c<=(j-0|0)){f.g7=L(h.data,0,c);d.g9=1;d.g$=1;d.ha=f;E(d);}d=new I;Y(d);E(d);},
AG9=(a,b,c,d,e)=>{let f,g,h,i,j;f=IR(a,b,c,d,e);b=a.hH.getError();if(!b)return f;d=new Bf;g=Bj(b,4);e=new K;e.g8=G(16);F(e,e.g6,A(117));J(e,e.g6,b,10);F(e,e.g6,A(118));b=e.g6;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.g8;i=h.data;c=e.g6;j=i.length;if(c>=0&&c<=(j-0|0)){f.g7=L(h.data,0,c);d.g9=1;d.g$=1;d.ha=f;E(d);}d=new I;Y(d);E(d);},
ACz=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.h1;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hy;b=a.hf.getAttribLocation(h,Br(c));f=a.hH.getError();if(!f)return b;c=new Bf;i=Bj(f,4);d=new K;d.g8=G(16);F(d,d.g6,A(117));J(d,d.g6,f,10);F(d,d.g6,A(118));b=d.g6;if(i===null)i=A(2);F(d,b,i);h=new H;e=d.g8;j=e.data;f=d.g6;g=j.length;if(f
>=0&&f<=(g-0|0)){h.g7=L(e.data,0,f);c.g9=1;c.g$=1;c.ha=h;E(c);}c=new I;Y(c);E(c);},
Vf=(a,b,c,d)=>{let e,f,g,h,i,j;I9(a,b,c,d);b=a.hH.getError();if(!b)return;d=new Bf;e=Bj(b,4);f=new K;f.g8=G(16);F(f,f.g6,A(117));J(f,f.g6,b,10);F(f,f.g6,A(118));b=f.g6;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g8;i=h.data;c=f.g6;j=i.length;if(c>=0&&c<=(j-0|0)){g.g7=L(h.data,0,c);d.g9=1;d.g$=1;d.ha=g;E(d);}d=new I;Y(d);E(d);},
Sw=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hf;d=a.h1;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hy;c=V(c.getProgramInfoLog(d));b=a.hH.getError();if(!b)return c;c=new Bf;h=Bj(b,4);d=new K;d.g8=G(16);F(d,d.g6,A(117));J(d,d.g6,b,10);F(d,d.g6,A(118));b=d.g6;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g8;j=e.data;f=d.g6;g=j.length;if(f
>=0&&f<=(g-0|0)){i.g7=L(e.data,0,f);c.g9=1;c.g$=1;c.ha=i;E(c);}c=new I;Y(c);E(c);},
AJN=(a,b,c,d)=>{let e,f,g,h,i,j;H9(a,b,c,d);b=a.hH.getError();if(!b)return;d=new Bf;e=Bj(b,4);f=new K;f.g8=G(16);F(f,f.g6,A(117));J(f,f.g6,b,10);F(f,f.g6,A(118));b=f.g6;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g8;i=h.data;c=f.g6;j=i.length;if(c>=0&&c<=(j-0|0)){g.g7=L(h.data,0,c);d.g9=1;d.g$=1;d.ha=g;E(d);}d=new I;Y(d);E(d);},
Ti=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hf;d=a.im;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hy;c=V(c.getShaderInfoLog(d));b=a.hH.getError();if(!b)return c;c=new Bf;h=Bj(b,4);d=new K;d.g8=G(16);F(d,d.g6,A(117));J(d,d.g6,b,10);F(d,d.g6,A(118));b=d.g6;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g8;j=e.data;f=d.g6;g=j.length;if(f>=
0&&f<=(g-0|0)){i.g7=L(e.data,0,f);c.g9=1;c.g$=1;c.ha=i;E(c);}c=new I;Y(c);E(c);},
Sy=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.hf;e=a.h1;if(!b)e=!e.hu?null:e.hs;else{f=e.hq;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hw));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.ht;}}e=g<0?null:e.hr.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hy;c=d.getUniformLocation(e,Br(c));if(c===null)h=(-1);else{d=a.iV;if(!b)d=!d.hu?null:d.hs;else{f=d.hq;h=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&d.ht;}}d
=h<0?null:d.hr.data[h];}d=d;if(d===null){d=Cr(51,0.800000011920929);Cc(a.iV,b,d);}h=a.kv;a.kv=h+1|0;Cc(d,h,Cd(c));}b=a.hH.getError();if(!b)return h;c=new Bf;i=Bj(b,4);d=new K;d.g8=G(16);F(d,d.g6,A(117));J(d,d.g6,b,10);F(d,d.g6,A(118));b=d.g6;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.g8;j=f.data;h=d.g6;g=j.length;if(h>=0&&h<=(g-0|0)){e.g7=L(f.data,0,h);c.g9=1;c.g$=1;c.ha=e;E(c);}c=new I;Y(c);E(c);},
AIX=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hf;d=a.h1;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hy;c.linkProgram(d);b=a.hH.getError();if(!b)return;c=new Bf;h=Bj(b,4);d=new K;d.g8=G(16);F(d,d.g6,A(117));J(d,d.g6,b,10);F(d,d.g6,A(118));b=d.g6;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g8;j=e.data;f=d.g6;g=j.length;if(f>=0&&f<=(g-0
|0)){i.g7=L(e.data,0,f);c.g9=1;c.g$=1;c.ha=i;E(c);}c=new I;Y(c);E(c);},
Su=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.hf;e=a.im;if(!b)e=!e.hu?null:e.hs;else{f=e.hq;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hw));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.ht;}}e=g<0?null:e.hr.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hy;d.shaderSource(e,Br(c));b=a.hH.getError();if(!b)return;c=new Bf;i=Bj(b,4);d=new K;d.g8=G(16);F(d,d.g6,A(117));J(d,d.g6,b,10);F(d,d.g6,A(118));b=d.g6;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.g8;j=f.data;g=d.g6;h=j.length;if(g>=0&&g
<=(h-0|0)){e.g7=L(f.data,0,g);c.g9=1;c.g$=1;c.ha=e;E(c);}c=new I;Y(c);E(c);},
UE=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.iV;e=a.ju;if(!e)d=!d.hu?null:d.hs;else{f=d.hq;g=Bd(X(U(O(e),B(2135587861, 2654435769)),d.hw));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.ht;}}d=g<0?null:d.hr.data[g];}d=d;if(!b)d=!d.hu?null:d.hs;else{f=d.hq;e=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.ht;}}d=e<0?null:d.hr.data[e];}Bp();i=d===null?null:d[Be]===true?d:d.hy;a.hf.uniform1i(i,c);b=a.hH.getError();if
(!b)return;d=new Bf;i=Bj(b,4);j=new K;j.g8=G(16);F(j,j.g6,A(117));J(j,j.g6,b,10);F(j,j.g6,A(118));b=j.g6;if(i===null)i=A(2);F(j,b,i);k=new H;f=j.g8;l=f.data;c=j.g6;e=l.length;if(c>=0&&c<=(e-0|0)){k.g7=L(f.data,0,c);d.g9=1;d.g$=1;d.ha=k;E(d);}d=new I;Y(d);E(d);},
AKq=(a,b)=>{let c,d,e,f,g,h,i,j;a.ju=b;c=a.hf;d=a.h1;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hy;c.useProgram(d);b=a.hH.getError();if(!b)return;c=new Bf;h=Bj(b,4);d=new K;d.g8=G(16);F(d,d.g6,A(117));J(d,d.g6,b,10);F(d,d.g6,A(118));b=d.g6;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g8;j=e.data;f=d.g6;g=j.length;if(f>=0&&f
<=(g-0|0)){i.g7=L(e.data,0,f);c.g9=1;c.g$=1;c.ha=i;E(c);}c=new I;Y(c);E(c);},
AFB=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.hf.vertexAttribPointer(b,c,d,!!e,f,g);b=a.hH.getError();if(!b)return;h=new Bf;i=Bj(b,4);j=new K;j.g8=G(16);F(j,j.g6,A(117));J(j,j.g6,b,10);F(j,j.g6,A(118));b=j.g6;if(i===null)i=A(2);F(j,b,i);k=new H;l=j.g8;m=l.data;c=j.g6;d=m.length;if(c>=0&&c<=(d-0|0)){k.g7=L(l.data,0,c);h.g9=1;h.g$=1;h.ha=k;E(h);}h=new I;Y(h);E(h);};
function Mo(){let a=this;C.call(a);a.ow=0;a.n8=0;a.oc=0;a.q_=null;a.rS=null;a.ke=null;a.q0=A(119);}
let AAW=(a,b,c,d,e)=>{a.q0=A(119);if(b===QY)a.ke=GY;else if(b===Pr)a.ke=GY;else if(b===PB)a.ke=Hd;else if(b===OW)a.ke=Hd;else if(b!==IC)a.ke=NY;else a.ke=IB;b=a.ke;if(b===GY)It(a,A(120),c);else if(b===IB)It(a,A(121),c);else if(b===Hd)It(a,A(122),c);else{a.ow=(-1);a.n8=(-1);a.oc=(-1);d=A(59);e=A(59);}a.q_=d;a.rS=e;},
AEC=(a,b,c,d)=>{let e=new Mo();AAW(e,a,b,c,d);return e;},
It=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,$$je;a:{d=My(Gx(b,0),c);if(!MP(d)){e=Dc;b=new K;b.g8=G(16);F(b,b.g6,A(123));F(b,b.g6,c);c=new H;f=b.g8;g=f.data;h=b.g6;i=g.length;if(h>=0&&h<=(i-0|0)){c.g7=L(f.data,0,h);if(e.kz>=2){if(BH===null){b=new Cj;e=new B5;BB(e);e.h8=BF(32);DL(b);b.ii=e;e=new K;Gi(e);b.h$=e;b.h9=G(32);b.ic=0;b.id=BX;BH=b;}b=new K;b.g8=G(16);Cw(b,b.g6,A(119));Cw(b,b.g6,A(51));Cw(b,b.g6,c);c=new H;f=b.g8;g=f.data;h=b.g6;i=g.length;if(h>=0&&h<=(i-0|0)){c.g7=L(f.data,0,h);BI(Br(c));BI("\n");}else{b
=new I;b.g9=1;b.g$=1;E(b);}}a.ow=2;a.n8=0;a.oc=0;break a;}b=new I;b.g9=1;b.g$=1;E(b);}b=d.jF;j=b.j1;if(!j){b=new CV;b.g9=1;b.g$=1;Bl(b);E(b);}k=B4(1,b.kP);if(k>=0){b=new I;c=new K;BB(c);c.g8=G(16);J(c,c.g6,1,10);e=new H;f=c.g8;g=f.data;h=c.g6;i=g.length;if(h>=0&&h<=(i-0|0)){e.g7=L(f.data,0,h);b.g9=1;b.g$=1;b.ha=e;E(b);}b=new I;b.g9=1;b.g$=1;E(b);}f=b.ib.data;if(f[2]<0)e=null;else{b=b.kZ;if(!j){b=new CV;b.g9=1;b.g$=1;Bl(b);E(b);}if(k>=0){b=new I;c=new K;BB(c);c.g8=G(16);J(c,c.g6,1,10);e=new H;f=c.g8;g=f.data;h
=c.g6;i=g.length;if(h>=0&&h<=(i-0|0)){e.g7=L(f.data,0,h);b.g9=1;b.g$=1;b.ha=e;E(b);}b=new I;b.g9=1;b.g$=1;E(b);}h=f[2];if(!j){b=new CV;b.g9=1;b.g$=1;Bl(b);E(b);}if(k>=0){b=new I;c=new K;BB(c);c.g8=G(16);J(c,c.g6,1,10);e=new H;f=c.g8;g=f.data;h=c.g6;i=g.length;if(h>=0&&h<=(i-0|0)){e.g7=L(f.data,0,h);b.g9=1;b.g$=1;b.ha=e;E(b);}b=new I;b.g9=1;b.g$=1;E(b);}e=Cb(b,h,f[3]);}f=(HM(Gx(A(124),0),e,0)).data;b=f[0];b:{try{h=Ia(b);break b;}catch($$e){$$je=BP($$e);if($$je instanceof B0){}else{throw $$e;}}d=Dc;e=new K;e.g8
=G(16);F(e,e.g6,A(125));F(e,e.g6,b);F(e,e.g6,A(126));J(e,e.g6,2,10);l=new H;g=e.g8;m=g.data;i=e.g6;j=m.length;if(i>=0&&i<=(j-0|0)){l.g7=L(g.data,0,i);if(d.kz>=1){if(Ct===null){b=new Eo;e=new B5;DL(e);e.h8=BF(32);Ez(b,e);b.h$=E6();b.h9=G(32);b.ic=0;b.id=BX;Ct=b;}b=new K;b.g8=G(16);Cs(b,b.g6,Cn(A(127)));Cs(b,b.g6,Cn(A(51)));Cs(b,b.g6,Cn(l));c=new H;g=b.g8;m=g.data;i=b.g6;j=m.length;if(i>=0&&i<=(j-0|0)){c.g7=L(g.data,0,i);CI(Br(c));CI("\n");}else{b=new I;b.g9=1;b.g$=1;E(b);}}h=2;}else{b=new I;b.g9=1;b.g$=1;E(b);}}a.ow
=h;n=f.length;if(n<2)i=0;else{b=f[1];c:{try{i=Ia(b);break c;}catch($$e){$$je=BP($$e);if($$je instanceof B0){}else{throw $$e;}}d=Dc;e=new K;e.g8=G(16);F(e,e.g6,A(125));F(e,e.g6,b);F(e,e.g6,A(126));J(e,e.g6,0,10);l=new H;g=e.g8;m=g.data;j=e.g6;k=m.length;if(j>=0&&j<=(k-0|0)){l.g7=L(g.data,0,j);if(d.kz>=1){if(Ct===null){b=new Eo;e=new B5;DL(e);e.h8=BF(32);Ez(b,e);b.h$=E6();b.h9=G(32);b.ic=0;b.id=BX;Ct=b;}b=new K;b.g8=G(16);Cs(b,b.g6,Cn(A(127)));Cs(b,b.g6,Cn(A(51)));Cs(b,b.g6,Cn(l));c=new H;g=b.g8;m=g.data;j=b.g6;k
=m.length;if(j>=0&&j<=(k-0|0)){c.g7=L(g.data,0,j);CI(Br(c));CI("\n");}else{b=new I;b.g9=1;b.g$=1;E(b);}}i=0;}else{b=new I;b.g9=1;b.g$=1;E(b);}}}a.n8=i;if(n<3)h=0;else{b=f[2];d:{try{h=Ia(b);break d;}catch($$e){$$je=BP($$e);if($$je instanceof B0){}else{throw $$e;}}e=Dc;d=new K;d.g8=G(16);F(d,d.g6,A(125));F(d,d.g6,b);F(d,d.g6,A(126));J(d,d.g6,0,10);b=new H;g=d.g8;f=g.data;h=d.g6;i=f.length;if(h>=0&&h<=(i-0|0)){b.g7=L(g.data,0,h);if(e.kz>=1){if(Ct===null){e=new Eo;d=new B5;DL(d);d.h8=BF(32);Ez(e,d);e.h$=E6();e.h9
=G(32);e.ic=0;e.id=BX;Ct=e;}e=new K;e.g8=G(16);Cs(e,e.g6,Cn(A(127)));Cs(e,e.g6,Cn(A(51)));Cs(e,e.g6,Cn(b));b=new H;f=e.g8;g=f.data;i=e.g6;j=g.length;if(i>=0&&i<=(j-0|0)){b.g7=L(f.data,0,i);CI(Br(b));CI("\n");}else{b=new I;b.g9=1;b.g$=1;E(b);}}h=0;}else{b=new I;b.g9=1;b.g$=1;E(b);}}}a.oc=h;}};
let DQ=D(BR);
let QY=null,PB=null,U2=null,OW=null,IC=null,Pr=null,X_=null;
let Vz=()=>{let b,c,d,e,f,g;b=new DQ;b.hv=A(7);b.hk=0;QY=b;c=new DQ;c.hv=A(128);c.hk=1;PB=c;d=new DQ;d.hv=A(129);d.hk=2;U2=d;e=new DQ;e.hv=A(130);e.hk=3;OW=e;f=new DQ;f.hv=A(131);f.hk=4;IC=f;g=new DQ;g.hv=A(132);g.hk=5;Pr=g;X_=P(DQ,[b,c,d,e,f,g]);};
let O3=D(0);
function Jj(){C.call(this);this.rc=null;}
let We=a=>{return;};
let QB=D(Fb);
let Vj=(a,b)=>{let c,d,e,f,g,h,i,j;a.hf.clear(b);b=a.hf.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g8=G(16);F(e,e.g6,A(117));J(e,e.g6,b,10);F(e,e.g6,A(118));b=e.g6;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g8;h=g.data;i=e.g6;j=h.length;if(i>=0&&i<=(j-0|0)){f.g7=L(g.data,0,i);c.g9=1;c.g$=1;c.ha=f;E(c);}c=new I;Y(c);E(c);},
V8=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.hf.clearColor(b,c,d,e);f=a.hf.getError();if(!f)return;g=new Bf;h=Bj(f,4);i=new K;i.g8=G(16);F(i,i.g6,A(117));J(i,i.g6,f,10);F(i,i.g6,A(118));f=i.g6;if(h===null)h=A(2);F(i,f,h);j=new H;k=i.g8;l=k.data;m=i.g6;n=l.length;if(m>=0&&m<=(n-0|0)){j.g7=L(k.data,0,m);g.g9=1;g.g$=1;g.ha=j;E(g);}g=new I;Y(g);E(g);},
AJ3=(a,b)=>{let c,d,e,f,g,h,i,j;a.hf.disable(b);b=a.hf.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g8=G(16);F(e,e.g6,A(117));J(e,e.g6,b,10);F(e,e.g6,A(118));b=e.g6;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g8;h=g.data;i=e.g6;j=h.length;if(i>=0&&i<=(j-0|0)){f.g7=L(g.data,0,i);c.g9=1;c.g$=1;c.ha=f;E(c);}c=new I;Y(c);E(c);},
ZB=(a,b,c,d)=>{let e,f,g,h,i,j;a.hf.drawArrays(b,c,d);b=a.hf.getError();if(!b)return;e=new Bf;f=Bj(b,4);g=new K;g.g8=G(16);F(g,g.g6,A(117));J(g,g.g6,b,10);F(g,g.g6,A(118));b=g.g6;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.g8;j=i.data;c=g.g6;d=j.length;if(c>=0&&c<=(d-0|0)){h.g7=L(i.data,0,c);e.g9=1;e.g$=1;e.ha=h;E(e);}e=new I;Y(e);E(e);},
AJy=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.hf;g=e.hl;f.drawElements(b,c,d,g);b=a.hf.getError();if(!b)return;e=new Bf;h=Bj(b,4);f=new K;f.g8=G(16);F(f,f.g6,A(117));J(f,f.g6,b,10);F(f,f.g6,A(118));b=f.g6;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.g8;k=j.data;c=f.g6;d=k.length;if(c>=0&&c<=(d-0|0)){i.g7=L(j.data,0,c);e.g9=1;e.g$=1;e.ha=i;E(e);}e=new I;Y(e);E(e);},
AAN=(a,b)=>{return V(a.hf.getParameter(b));},
AJI=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.hf.viewport(b,c,d,e);b=a.hf.getError();if(!b)return;f=new Bf;g=Bj(b,4);h=new K;h.g8=G(16);F(h,h.g6,A(117));J(h,h.g6,b,10);F(h,h.g6,A(118));b=h.g6;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.g8;k=j.data;c=h.g6;d=k.length;if(c>=0&&c<=(d-0|0)){i.g7=L(j.data,0,c);f.g9=1;f.g$=1;f.ha=i;E(f);}f=new I;Y(f);E(f);},
Ss=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.h1;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hy;d=a.im;if(!c)d=!d.hu?null:d.hs;else{e=d.hq;b=Bd(X(U(O(c),B(2135587861, 2654435769)),d.hw));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.ht;}}d=b<0?null:d.hr.data[b];}i=d===null?null:d[Be]===true?d
:d.hy;a.hf.attachShader(h,i);b=a.hf.getError();if(!b)return;d=new Bf;j=Bj(b,4);h=new K;h.g8=G(16);F(h,h.g6,A(117));J(h,h.g6,b,10);F(h,h.g6,A(118));b=h.g6;if(j===null)j=A(2);F(h,b,j);i=new H;e=h.g8;k=e.data;c=h.g6;f=k.length;if(c>=0&&c<=(f-0|0)){i.g7=L(e.data,0,c);d.g9=1;d.g$=1;d.ha=i;E(d);}d=new I;Y(d);E(d);},
Rp=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.hf;e=a.jS;if(!c)e=!e.hu?null:e.hs;else{f=e.hq;g=Bd(X(U(O(c),B(2135587861, 2654435769)),e.hw));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.ht;}}e=g<0?null:e.hr.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hy;d.bindBuffer(b,e);b=a.hf.getError();if(!b)return;d=new Bf;i=Bj(b,4);e=new K;e.g8=G(16);F(e,e.g6,A(117));J(e,e.g6,b,10);F(e,e.g6,A(118));b=e.g6;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.g8;k=f.data;c=e.g6;g=k.length;if(c>=0&&c<=(g
-0|0)){j.g7=L(f.data,0,c);d.g9=1;d.g$=1;d.ha=j;E(d);}d=new I;Y(d);E(d);},
AAl=(a,b,c,d,e)=>{let f,g,h,i,j;Ih(a,b,c,d,e);b=a.hf.getError();if(!b)return;d=new Bf;f=Bj(b,4);g=new K;g.g8=G(16);F(g,g.g6,A(117));J(g,g.g6,b,10);F(g,g.g6,A(118));b=g.g6;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.g8;j=i.data;c=g.g6;e=j.length;if(c>=0&&c<=(e-0|0)){h.g7=L(i.data,0,c);d.g9=1;d.g$=1;d.ha=h;E(d);}d=new I;Y(d);E(d);},
AKc=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.im;if(!b)c=!c.hu?null:c.hs;else{d=c.hq;e=Bd(X(U(O(b),B(2135587861, 2654435769)),c.hw));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.ht;}}c=e<0?null:c.hr.data[e];}Bp();g=c===null?null:c[Be]===true?c:c.hy;a.hf.compileShader(g);b=a.hf.getError();if(!b)return;c=new Bf;h=Bj(b,4);g=new K;g.g8=G(16);F(g,g.g6,A(117));J(g,g.g6,b,10);F(g,g.g6,A(118));b=g.g6;if(h===null)h=A(2);F(g,b,h);i=new H;d=g.g8;j=d.data;e=g.g6;f=j.length;if(e>=0&&e<=(f-0|0))
{i.g7=L(d.data,0,e);c.g9=1;c.g$=1;c.ha=i;E(c);}c=new I;Y(c);E(c);},
ADM=a=>{let b,c,d,e,f,g,h,i,j;b=a.hf.createProgram();c=a.ko;a.ko=c+1|0;Cc(a.h1,c,Cd(b));d=a.hf.getError();if(!d)return c;b=new Bf;e=Bj(d,4);f=new K;f.g8=G(16);F(f,f.g6,A(117));J(f,f.g6,d,10);F(f,f.g6,A(118));d=f.g6;if(e===null)e=A(2);F(f,d,e);g=new H;h=f.g8;i=h.data;c=f.g6;j=i.length;if(c>=0&&c<=(j-0|0)){g.g7=L(h.data,0,c);b.g9=1;b.g$=1;b.ha=g;E(b);}b=new I;Y(b);E(b);},
AJS=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hf.createShader(b);d=a.ki;a.ki=d+1|0;Cc(a.im,d,Cd(c));b=a.hf.getError();if(!b)return d;c=new Bf;e=Bj(b,4);f=new K;f.g8=G(16);F(f,f.g6,A(117));J(f,f.g6,b,10);F(f,f.g6,A(118));b=f.g6;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g8;i=h.data;d=f.g6;j=i.length;if(d>=0&&d<=(j-0|0)){g.g7=L(h.data,0,d);c.g9=1;c.g$=1;c.ha=g;E(c);}c=new I;Y(c);E(c);},
ADG=(a,b)=>{let c,d,e,f,g,h,i,j;a.hf.disableVertexAttribArray(b);b=a.hf.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g8=G(16);F(e,e.g6,A(117));J(e,e.g6,b,10);F(e,e.g6,A(118));b=e.g6;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g8;h=g.data;i=e.g6;j=h.length;if(i>=0&&i<=(j-0|0)){f.g7=L(g.data,0,i);c.g9=1;c.g$=1;c.ha=f;E(c);}c=new I;Y(c);E(c);},
YE=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.hf.drawElements(b,c,d,e);b=a.hf.getError();if(!b)return;f=new Bf;g=Bj(b,4);h=new K;h.g8=G(16);F(h,h.g6,A(117));J(h,h.g6,b,10);F(h,h.g6,A(118));b=h.g6;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.g8;k=j.data;c=h.g6;d=k.length;if(c>=0&&c<=(d-0|0)){i.g7=L(j.data,0,c);f.g9=1;f.g$=1;f.ha=i;E(f);}f=new I;Y(f);E(f);},
AJ4=(a,b)=>{let c,d,e,f,g,h,i,j;a.hf.enableVertexAttribArray(b);b=a.hf.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g8=G(16);F(e,e.g6,A(117));J(e,e.g6,b,10);F(e,e.g6,A(118));b=e.g6;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g8;h=g.data;i=e.g6;j=h.length;if(i>=0&&i<=(j-0|0)){f.g7=L(g.data,0,i);c.g9=1;c.g$=1;c.ha=f;E(c);}c=new I;Y(c);E(c);},
AAo=(a,b,c,d,e)=>{let f,g,h,i,j;f=HN(a,b,c,d,e);b=a.hf.getError();if(!b)return f;d=new Bf;g=Bj(b,4);e=new K;e.g8=G(16);F(e,e.g6,A(117));J(e,e.g6,b,10);F(e,e.g6,A(118));b=e.g6;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.g8;i=h.data;c=e.g6;j=i.length;if(c>=0&&c<=(j-0|0)){f.g7=L(h.data,0,c);d.g9=1;d.g$=1;d.ha=f;E(d);}d=new I;Y(d);E(d);},
Un=(a,b,c,d,e)=>{let f,g,h,i,j;f=IR(a,b,c,d,e);b=a.hf.getError();if(!b)return f;d=new Bf;g=Bj(b,4);e=new K;e.g8=G(16);F(e,e.g6,A(117));J(e,e.g6,b,10);F(e,e.g6,A(118));b=e.g6;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.g8;i=h.data;c=e.g6;j=i.length;if(c>=0&&c<=(j-0|0)){f.g7=L(h.data,0,c);d.g9=1;d.g$=1;d.ha=f;E(d);}d=new I;Y(d);E(d);},
YO=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.h1;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hy;b=a.hf.getAttribLocation(h,Br(c));f=a.hf.getError();if(!f)return b;c=new Bf;i=Bj(f,4);d=new K;d.g8=G(16);F(d,d.g6,A(117));J(d,d.g6,f,10);F(d,d.g6,A(118));b=d.g6;if(i===null)i=A(2);F(d,b,i);h=new H;e=d.g8;j=e.data;f=d.g6;g=j.length;if(f>=
0&&f<=(g-0|0)){h.g7=L(e.data,0,f);c.g9=1;c.g$=1;c.ha=h;E(c);}c=new I;Y(c);E(c);},
Xg=(a,b,c,d)=>{let e,f,g,h,i,j;I9(a,b,c,d);b=a.hf.getError();if(!b)return;d=new Bf;e=Bj(b,4);f=new K;f.g8=G(16);F(f,f.g6,A(117));J(f,f.g6,b,10);F(f,f.g6,A(118));b=f.g6;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g8;i=h.data;c=f.g6;j=i.length;if(c>=0&&c<=(j-0|0)){g.g7=L(h.data,0,c);d.g9=1;d.g$=1;d.ha=g;E(d);}d=new I;Y(d);E(d);},
Xm=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hf;d=a.h1;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hy;c=V(c.getProgramInfoLog(d));b=a.hf.getError();if(!b)return c;c=new Bf;h=Bj(b,4);d=new K;d.g8=G(16);F(d,d.g6,A(117));J(d,d.g6,b,10);F(d,d.g6,A(118));b=d.g6;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g8;j=e.data;f=d.g6;g=j.length;if(f
>=0&&f<=(g-0|0)){i.g7=L(e.data,0,f);c.g9=1;c.g$=1;c.ha=i;E(c);}c=new I;Y(c);E(c);},
SE=(a,b,c,d)=>{let e,f,g,h,i,j;H9(a,b,c,d);b=a.hf.getError();if(!b)return;d=new Bf;e=Bj(b,4);f=new K;f.g8=G(16);F(f,f.g6,A(117));J(f,f.g6,b,10);F(f,f.g6,A(118));b=f.g6;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g8;i=h.data;c=f.g6;j=i.length;if(c>=0&&c<=(j-0|0)){g.g7=L(h.data,0,c);d.g9=1;d.g$=1;d.ha=g;E(d);}d=new I;Y(d);E(d);},
AFH=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hf;d=a.im;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hy;c=V(c.getShaderInfoLog(d));b=a.hf.getError();if(!b)return c;c=new Bf;h=Bj(b,4);d=new K;d.g8=G(16);F(d,d.g6,A(117));J(d,d.g6,b,10);F(d,d.g6,A(118));b=d.g6;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g8;j=e.data;f=d.g6;g=j.length;if(f
>=0&&f<=(g-0|0)){i.g7=L(e.data,0,f);c.g9=1;c.g$=1;c.ha=i;E(c);}c=new I;Y(c);E(c);},
AHv=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.hf;e=a.h1;if(!b)e=!e.hu?null:e.hs;else{f=e.hq;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hw));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.ht;}}e=g<0?null:e.hr.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hy;c=d.getUniformLocation(e,Br(c));if(c===null)h=(-1);else{d=a.iV;if(!b)d=!d.hu?null:d.hs;else{f=d.hq;h=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&
d.ht;}}d=h<0?null:d.hr.data[h];}d=d;if(d===null){d=Cr(51,0.800000011920929);Cc(a.iV,b,d);}h=a.kv;a.kv=h+1|0;Cc(d,h,Cd(c));}b=a.hf.getError();if(!b)return h;c=new Bf;i=Bj(b,4);d=new K;d.g8=G(16);F(d,d.g6,A(117));J(d,d.g6,b,10);F(d,d.g6,A(118));b=d.g6;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.g8;j=f.data;h=d.g6;g=j.length;if(h>=0&&h<=(g-0|0)){e.g7=L(f.data,0,h);c.g9=1;c.g$=1;c.ha=e;E(c);}c=new I;Y(c);E(c);},
ABv=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hf;d=a.h1;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hy;c.linkProgram(d);b=a.hf.getError();if(!b)return;c=new Bf;h=Bj(b,4);d=new K;d.g8=G(16);F(d,d.g6,A(117));J(d,d.g6,b,10);F(d,d.g6,A(118));b=d.g6;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g8;j=e.data;f=d.g6;g=j.length;if(f>=0&&f<=(g-0
|0)){i.g7=L(e.data,0,f);c.g9=1;c.g$=1;c.ha=i;E(c);}c=new I;Y(c);E(c);},
AJw=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.hf;e=a.im;if(!b)e=!e.hu?null:e.hs;else{f=e.hq;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hw));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.ht;}}e=g<0?null:e.hr.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hy;d.shaderSource(e,Br(c));b=a.hf.getError();if(!b)return;c=new Bf;i=Bj(b,4);d=new K;d.g8=G(16);F(d,d.g6,A(117));J(d,d.g6,b,10);F(d,d.g6,A(118));b=d.g6;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.g8;j=f.data;g=d.g6;h=j.length;if(g>=0&&
g<=(h-0|0)){e.g7=L(f.data,0,g);c.g9=1;c.g$=1;c.ha=e;E(c);}c=new I;Y(c);E(c);},
AJO=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.iV;e=a.ju;if(!e)d=!d.hu?null:d.hs;else{f=d.hq;g=Bd(X(U(O(e),B(2135587861, 2654435769)),d.hw));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.ht;}}d=g<0?null:d.hr.data[g];}d=d;if(!b)d=!d.hu?null:d.hs;else{f=d.hq;e=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.ht;}}d=e<0?null:d.hr.data[e];}Bp();i=d===null?null:d[Be]===true?d:d.hy;a.hf.uniform1i(i,c);b=a.hf.getError();if
(!b)return;d=new Bf;i=Bj(b,4);j=new K;j.g8=G(16);F(j,j.g6,A(117));J(j,j.g6,b,10);F(j,j.g6,A(118));b=j.g6;if(i===null)i=A(2);F(j,b,i);k=new H;f=j.g8;l=f.data;c=j.g6;e=l.length;if(c>=0&&c<=(e-0|0)){k.g7=L(f.data,0,c);d.g9=1;d.g$=1;d.ha=k;E(d);}d=new I;Y(d);E(d);},
SG=(a,b)=>{let c,d,e,f,g,h,i,j;a.ju=b;c=a.hf;d=a.h1;if(!b)d=!d.hu?null:d.hs;else{e=d.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hw));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.ht;}}d=f<0?null:d.hr.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hy;c.useProgram(d);b=a.hf.getError();if(!b)return;c=new Bf;h=Bj(b,4);d=new K;d.g8=G(16);F(d,d.g6,A(117));J(d,d.g6,b,10);F(d,d.g6,A(118));b=d.g6;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g8;j=e.data;f=d.g6;g=j.length;if(f>=0&&f<=
(g-0|0)){i.g7=L(e.data,0,f);c.g9=1;c.g$=1;c.ha=i;E(c);}c=new I;Y(c);E(c);},
U6=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.hf.vertexAttribPointer(b,c,d,!!e,f,g);b=a.hf.getError();if(!b)return;h=new Bf;i=Bj(b,4);j=new K;j.g8=G(16);F(j,j.g6,A(117));J(j,j.g6,b,10);F(j,j.g6,A(118));b=j.g6;if(i===null)i=A(2);F(j,b,i);k=new H;l=j.g8;m=l.data;c=j.g6;d=m.length;if(c>=0&&c<=(d-0|0)){k.g7=L(l.data,0,c);h.g9=1;h.g$=1;h.ha=k;E(h);}h=new I;Y(h);E(h);};
function O8(){let a=this;C.call(a);a.jM=0;a.hq=null;a.hr=null;a.hs=null;a.hu=0;a.pm=0.0;a.m3=0;a.hw=0;a.ht=0;}
let Yn=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.pm=c;d=G8(b,c);a.m3=d*c|0;b=d-1|0;a.ht=b;a.hw=DV(O(b));a.hq=S(d);a.hr=R(C,d);return;}e=new Bs;f=new K;f.g8=G(16);F(f,f.g6,A(40));GS(f,f.g6,c);g=new H;h=f.g8;i=h.data;d=f.g6;j=i.length;if(d>=0&&d<=(j-0|0)){g.g7=L(h.data,0,d);e.g9=1;e.g$=1;e.ha=g;E(e);}f=new I;f.g9=1;f.g$=1;E(f);},
Cr=(a,b)=>{let c=new O8();Yn(c,a,b);return c;},
Cc=(a,b,c)=>{let d,e,f,g,h;if(!b){d=a.hs;a.hs=c;if(!a.hu){a.hu=1;a.jM=a.jM+1|0;}return d;}e=a.hq;f=Bd(X(U(O(b),B(2135587861, 2654435769)),a.hw));a:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.ht;}}if(f>=0){e=a.hr.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.hr.data[f]=c;b=a.jM+1|0;a.jM=b;if(b>=a.m3)AGD(a,g.length<<1);return null;},
QC=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.hu)return null;a.hu=0;c=a.hs;a.hs=null;a.jM=a.jM-1|0;return c;}d=a.hq;e=U(O(b),B(2135587861, 2654435769));f=a.hw;g=Bd(X(e,f));a:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break a;}if(i==b)break;g=(g+1|0)&a.ht;}}if(g<0)return null;j=a.hr.data;k=j[g];l=a.ht;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=Bd(X(U(O(n),B(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.jM=a.jM-1|0;return k;},
AJX=(a,b,c)=>{let d,e,f,g;a:{d=a.hr;if(b===null){if(a.hu&&a.hs===null)return 1;d=d.data;e=a.hq;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.hs)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.hu){g=a.hs;if(b===g?1:g instanceof Ed&&g.jq==b.jq?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof Ed&&g.jq==b.jq?1:0)return 1;f=f+(-1)|0;}}return 0;},
AGD=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.hq.data.length;a.m3=b*a.pm|0;d=b-1|0;a.ht=d;d=DV(O(d));a.hw=d;e=a.hq;f=a.hr;g=S(b);a.hq=g;h=R(C,b);a.hr=h;if(a.jM>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k){l=f.data[j];b=Bd(X(U(O(k),B(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.ht;}h[b]=k;i[b]=l;}j=j+1|0;}}}};
function NJ(){let a=this;C.call(a);a.i7=0;a.j4=null;a.k3=0;a.qS=0.0;a.ng=0;a.kR=0;a.jX=0;}
let WF=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.qS=c;d=G8(b,c);a.ng=d*c|0;b=d-1|0;a.jX=b;a.kR=DV(O(b));a.j4=S(d);return;}e=new Bs;f=new K;f.g8=G(16);F(f,f.g6,A(40));GS(f,f.g6,c);g=new H;h=f.g8;i=h.data;d=f.g6;j=i.length;if(d>=0&&d<=(j-0|0)){g.g7=L(h.data,0,d);e.g9=1;e.g$=1;e.ha=g;E(e);}f=new I;f.g9=1;f.g$=1;E(f);},
K8=(a,b)=>{let c=new NJ();WF(c,a,b);return c;},
VW=(a,b)=>{let c,d,e,f;if(!b){if(a.k3)return 0;a.k3=1;a.i7=a.i7+1|0;return 1;}c=a.j4;d=Bd(X(U(O(b),B(2135587861, 2654435769)),a.kR));a:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break a;}if(f==b)break;d=(d+1|0)&a.jX;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.i7+1|0;a.i7=b;if(b>=a.ng)V6(a,e.length<<1);return 1;},
AIf=(a,b)=>{let c,d,e,f,g,h,i,j;if(!b){if(!a.k3)return 0;a.k3=0;a.i7=a.i7-1|0;return 1;}c=a.j4;d=U(O(b),B(2135587861, 2654435769));e=a.kR;f=Bd(X(d,e));a:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.jX;}}if(f<0)return 0;h=a.jX;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=Bd(X(U(O(b),B(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.i7=a.i7-1|0;return 1;},
V6=(a,b)=>{let c,d,e,f,g,h,i;a:{c=a.j4.data.length;a.ng=b*a.qS|0;d=b-1|0;a.jX=d;d=DV(O(d));a.kR=d;e=a.j4;f=S(b);a.j4=f;if(a.i7>0){f=f.data;g=0;while(true){if(g>=c)break a;h=e.data[g];if(h){i=Bd(X(U(O(h),B(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.jX;}f[i]=h;}g=g+1|0;}}}};
let PP=D(0);
function IY(){C.call(this);this.mc=null;}
let Sk=a=>{let b;b=a.mc;b.mk=1;PH(Br(b.nU));},
VQ=a=>{let b;b=a.mc;b.mk=1;PH(Br(b.nU));},
RZ=a=>{a.mc.mk=0;};
let QT=D(0);
function Q1(){let a=this;C.call(a);a.la=null;a.oi=null;a.sg=null;}
let GT=0;
let AHZ=a=>{let b,c,d,e,f,g,h,i,$$je;b=UN();a.la=b;c=ADE(b);a.oi=c;b=new NQ;d=a.la;e=new Cy;e.iI=0;e.hV=R(C,16);b.mo=e;b.mx=2147483647;b.rs=d;b.rD=c;a.sg=b;b=Dc.l3;Er(b);a:{try{Di(b,a);CO(b);break a;}catch($$e){$$je=BP($$e);d=$$je;}CO(b);E(d);}if(a.la.state!=='running'?1:0){b=new HJ;b.se=a;U3(a.la,BL(b,"unlockFunction"));}else{if(!GT&&Dc.kz>=2){if(BH===null){c=new Cj;e=new B5;DL(e);e.h8=BF(32);Ez(c,e);c.h$=E6();c.h9=G(32);c.ic=0;c.id=BX;BH=c;}c=new K;c.g8=G(16);Cs(c,c.g6,Cn(A(133)));Cs(c,c.g6,Cn(A(51)));Cs(c,
c.g6,Cn(A(134)));b=new H;f=c.g8;g=f.data;h=c.g6;i=g.length;if(h>=0&&h<=(i-0|0)){b.g7=L(f.data,0,h);BI(Br(b));BI("\n");}else{b=new I;b.g9=1;b.g$=1;E(b);}}GT=1;}},
AIk=()=>{let a=new Q1();AHZ(a);return a;},
AGw=a=>{a.oi.disconnect(a.la.destination);},
ACV=a=>{a.oi.connect(a.la.destination);},
U3=(b,c)=>{var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){document.addEventListener(eventName,unlock);});},
UN=()=>{var AudioContext=window.AudioContext||window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;},
ADE=b=>{var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;};
function KG(){CM.call(this);this.q9=null;}
let PM=D(CE);
function H8(){Cv.call(this);this.oI=null;}
let I=D(BA);
let UV=a=>{a.g9=1;a.g$=1;},
Tv=()=>{let a=new I();UV(a);return a;};
let DT=D(0);
let L5=D(0);
let Np=D(0);
let Ng=D(0);
let Os=D(0);
let QP=D(0);
let Ph=D(0);
let LN=D(0);
let H6=D(0);
let K2=D();
let AD_=(a,b)=>{b=a.dh(b);Bp();return b===null?null:b instanceof E0()&&b instanceof DD?(b[Be]===true?b:b.hy):b;},
AGR=(a,b,c)=>{a.di(V(b),CC(c,"handleEvent"));},
AGb=(a,b,c)=>{a.dj(V(b),CC(c,"handleEvent"));},
ADY=(a,b,c,d)=>{a.dk(V(b),CC(c,"handleEvent"),d?1:0);},
AIK=(a,b)=>{return !!a.dl(b);},
U7=a=>{return a.dm();},
RY=(a,b,c,d)=>{a.dn(V(b),CC(c,"handleEvent"),d?1:0);};
let IF=D();
function Hh(){let a=this;IF.call(a);a.m7=0;a.kn=null;a.pM=0.0;a.ni=0;a.lZ=0;a.lH=0;a.qU=0;}
let Q_=null,MA=null;
let H1=(a,b)=>{let c,d,e;a.lH=(-1);if(b<0){c=new Bs;c.g9=1;c.g$=1;E(c);}a.m7=0;if(!b)b=1;d=R(Gv,b);e=d.data;a.kn=d;b=e.length;a.lZ=b;a.pM=0.75;a.ni=b*0.75|0;},
ALi=a=>{let b=new Hh();H1(b,a);return b;},
CD=(a,b,c)=>{let d,e,f,g,h,i,j;Er(a);try{if(b!==null&&c!==null){a:{if(!b.h4){d=0;while(true){if(d>=b.g7.length)break a;b.h4=(31*b.h4|0)+b.g7.charCodeAt(d)|0;d=d+1|0;}}}e=b.h4&2147483647;f=a.kn.data;g=e%f.length|0;h=f[g];while(h!==null){b:{d=h.p8;if(!b.h4){i=0;while(true){if(i>=b.g7.length)break b;b.h4=(31*b.h4|0)+b.g7.charCodeAt(i)|0;i=i+1|0;}}}if(d==b.h4&&h.jv.X(b)?1:0)break;h=h.mF;}if(h!==null){j=h.jW;h.jW=c;return j;}a.qU=a.qU+1|0;d=a.m7+1|0;a.m7=d;if(d>a.ni){ABX(a);g=e%a.kn.data.length|0;}if(g<a.lZ)a.lZ
=g;if(g>a.lH)a.lH=g;c:{j=new Gv;j.jv=b;j.jW=c;if(!b.h4){d=0;while(true){if(d>=b.g7.length)break c;b.h4=(31*b.h4|0)+b.g7.charCodeAt(d)|0;d=d+1|0;}}}j.p8=b.h4;f=a.kn.data;j.mF=f[g];f[g]=j;return null;}b=new CU;b.g9=1;b.g$=1;E(b);}finally{CO(a);}},
ABX=a=>{let b,c,d,e,f,g,h,i,j;b=(a.kn.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=R(Gv,b);e=d.data;f=a.lH+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.lZ)break;h=a.kn.data[f];while(h!==null){i=(h.jv.W()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.mF;h.mF=e[i];e[i]=h;h=j;}}a.lZ=g;a.lH=c;a.kn=d;a.ni=e.length*a.pM|0;},
AMb=()=>{Q_=new HF;MA=new HE;};
function Jt(){Hh.call(this);this.r9=null;}
let Y0=D();
let E3=D(BR);
let Hd=null,GY=null,IB=null,NY=null,AFg=null;
let AB3=()=>{let b,c,d,e;b=new E3;b.hv=A(135);b.hk=0;Hd=b;c=new E3;c.hv=A(136);c.hk=1;GY=c;d=new E3;d.hv=A(131);d.hk=2;IB=d;e=new E3;e.hv=A(137);e.hk=3;NY=e;AFg=P(E3,[b,c,d,e]);};
let CN=D();
let WA=D(CN);
let VS=D(CN);
let AAt=D(CN);
let ADf=D(CN);
let Ze=D(CN);
function Io(){C.call(this);this.r4=null;}
let Z2=(a,b)=>{b.preventDefault();};
function Ip(){C.call(this);this.sq=null;}
let AJz=(a,b)=>{b.preventDefault();};
function In(){let a=this;C.call(a);a.oT=null;a.oM=null;a.o6=null;}
let ACC=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new Cy;e.iI=1;e.hV=R(C,16);f=0;while(true){if(f>=d)break a;g=c[f];h=V(g.name);i=Fo(h,46,h.g7.length-1|0);b=i==(-1)?A(59):Cb(h,i+1|0,h.g7.length);j=b.g7.toLowerCase();if(j!==b.g7)b=OU(j);if(Ur(b))j=Ej;else{if(b===A(138))k=1;else if(!(A(138) instanceof H))k=0;else{j=A(138);k=b.g7!==j.g7?0:1;}b:{if(!k){if(b===A(139))k=1;else if(!(A(139) instanceof H))k=0;else{j=A(139);k=b.g7!==j.g7?0:1;}if(!k){if(b===A(140))k
=1;else if(!(A(140) instanceof H))k=0;else{j=A(140);k=b.g7!==j.g7?0:1;}if(!k){k=0;break b;}}}k=1;}j=k?D6:!Zs(b)?Ea:Eq;}l=new FileReader();b=new Jg;b.mI=a;b.nw=j;b.ox=h;b.l$=e;b.oC=d;l.addEventListener("load",BL(b,"handleEvent"));if(j!==Ea&&j!==D6){if(j===Ej)l.readAsDataURL(g);else if(j===Eq)l.readAsText(g);}else l.readAsArrayBuffer(g);f=f+1|0;}}}},
AEO=(a,b)=>{ACC(a,b);};
function NQ(){let a=this;Cv.call(a);a.rs=null;a.rD=null;}
let PU=D(0);
function HJ(){C.call(this);this.se=null;}
let WR=a=>{let b,c,d,e,f,g;if(!GT&&Dc.kz>=2){if(BH===null){b=new Cj;Qt(b,AHA(32),0);BH=b;}b=new K;b.g8=G(16);Ii(b,b.g6,A(133));Ii(b,b.g6,A(51));Ii(b,b.g6,A(134));c=new H;d=b.g8;e=d.data;f=b.g6;g=e.length;if(f>=0&&f<=(g-0|0)){c.g7=L(d.data,0,f);BI(Br(c));BI("\n");}else E(Tv());}GT=1;};
let VE=D(CN);
function Na(){let a=this;C.call(a);a.hG=null;a.ih=0;a.nn=null;a.oR=0;a.k5=0;a.j6=0;a.iz=0;a.pO=null;}
let HM=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new HV;d.h_=R(C,10);e=My(a,b);f=0;g=0;if(!b.g7.length){h=R(H,1);h.data[0]=A(59);return h;}a:{while(true){if(!MP(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.jF;if(!j.j1){b=new CV;b.g9=1;b.g$=1;Bl(b);E(b);}if(0>=j.kP){b=new I;d=new K;BB(d);d.g8=G(16);J(d,d.g6,0,10);e=new H;h=d.g8;k=h.data;f=d.g6;g=k.length;if(f>=0&&f<=(g-0|0)){e.g7=L(h.data,0,f);b.g9=1;b.g$=1;b.ha=e;E(b);}b=new I;b.g9=1;b.g$=1;E(b);}j=Cb(b,g,j.ib.data[0]);Fn(d,d.hI+1|0);h=d.h_.data;f=d.hI;d.hI=f+1|0;h[f]
=j;d.iD=d.iD+1|0;j=e.jF;if(!j.j1)break;if(0>=j.kP){b=new I;d=new K;BB(d);d.g8=G(16);J(d,d.g6,0,10);e=new H;h=d.g8;k=h.data;f=d.g6;g=k.length;if(f>=0&&f<=(g-0|0)){e.g7=L(h.data,0,f);b.g9=1;b.g$=1;b.ha=e;E(b);}b=new I;b.g9=1;b.g$=1;E(b);}g=j.ib.data[1];f=i;}b=new CV;b.g9=1;b.g$=1;Bl(b);E(b);}b:{b=Cb(b,g,b.g7.length);Fn(d,d.hI+1|0);h=d.h_.data;i=d.hI;d.hI=i+1|0;h[i]=b;d.iD=d.iD+1|0;f=f+1|0;if(!c){while(true){f=f+(-1)|0;if(f<0)break b;if(f<0)break;if(f>=d.hI)break;if(d.h_.data[f].g7.length)break b;Pz(d,f);}b=new I;b.g9
=1;b.g$=1;E(b);}}if(f<0)f=0;return W2(d,R(H,f));},
Gx=(b,c)=>{let d;if(b===null){b=new CU;b.g9=1;b.g$=1;b.ha=A(141);E(b);}if(c&&(c|255)!=255){b=new Bs;b.g9=1;b.g$=1;b.ha=A(59);E(b);}M=1;d=new Na;d.nn=R(CA,10);d.k5=(-1);d.j6=(-1);d.iz=(-1);return XE(d,b,c);},
XE=(a,b,c)=>{let d,e,f;a.hG=Xh(b,c);a.ih=c;b=Q7(a,(-1),c,null);a.pO=b;d=a.hG;if(!d.hZ&&!d.hm&&d.hi==d.il&&!(d.hK===null?0:1)?1:0){if(a.oR)b.dz();return a;}b=new BT;e=d.hW;f=d.iT;b.g9=1;b.g$=1;b.hA=(-1);b.hY=A(59);b.hU=e;b.hA=f;E(b);},
AI5=(a,b)=>{let c,d,e,f,g,h;c=new B7;d=a.ih;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;g=new Ba;g.hg=S(64);c.hj=g;g=new Ba;g.hg=S(2);c.hn=g;c.my=e;c.m9=f;while(true){h=a.hG;d=h.hZ;if(!d&&!h.hm&&h.hi==h.il&&!(h.hK===null?0:1)?1:0)break;f=!d&&!h.hm&&h.hi==h.il&&!(h.hK===null?0:1)?1:0;if(!(!f&&!(h.hK===null?0:1)&&(d<0?0:1)?1:0))break;f=h.hm;if(f&&f!=(-536870788)&&f!=(-536870871))break;Bi(h);Cg(c,h.jV);g=a.hG;if(g.hZ!=(-536870788))continue;Bi(g);}g=IU(a,c);g.dD(b);return g;},
Q7=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new HV;e.h_=R(C,10);f=a.ih;g=0;if(c!=f)a.ih=c;a:{switch(b){case -1073741784:h=new ND;i=a.iz+1|0;a.iz=i;C3();c=M;M=c+1|0;d=new T;d.g8=G(20);h.hh=(J(d,d.g6,c,10)).bj();h.ie=i;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Mg;i=a.iz+1|0;a.iz=i;C3();c=M;M=c+1|0;d=new T;d.g8=G(20);h.hh=(J(d,d.g6,c,10)).bj();h.ie=i;break a;case -33554392:h=new Oa;i=a.iz+1|0;a.iz=i;C3();c=M;M=c+1|0;d=new T;d.g8=G(20);h.hh=(J(d,d.g6,c,10)).bj();h.ie=i;break a;default:i
=a.k5+1|0;a.k5=i;if(d!==null){h=new CA;C3();c=M;M=c+1|0;d=new T;d.g8=G(20);h.hh=(J(d,d.g6,c,10)).bj();h.ie=i;}else{h=new EW;C3();j=M;M=j+1|0;d=new T;d.g8=G(20);h.hh=(J(d,d.g6,j,10)).bj();h.ie=0;g=1;}c=a.k5;if(c<=(-1))break a;if(c>=10)break a;a.nn.data[c]=h;break a;}h=new Q2;C3();j=M;M=j+1|0;d=new T;d.g8=G(20);h.hh=(J(d,d.g6,j,10)).bj();h.ie=(-1);}while(true){k=a.hG;l=k.hZ;j=!l&&!k.hm&&k.hi==k.il&&!(k.hK===null?0:1)?1:0;j=!j&&!(k.hK===null?0:1)&&(l<0?0:1)?1:0;if(j&&k.hm==(-536870788))k=AI5(a,h);else if(l==(-536870788))
{k=new D2;j=M;M=j+1|0;d=new T;d.g8=G(20);k.hh=(J(d,d.g6,j,10)).bj();k.g_=h;k.hC=1;k.hP=1;k.hC=0;Bi(a.hG);}else{k=LW(a,h);d=a.hG;if(d.hZ==(-536870788))Bi(d);}if(k!==null){Fn(e,e.hI+1|0);m=e.h_.data;l=e.hI;e.hI=l+1|0;m[l]=k;e.iD=e.iD+1|0;}k=a.hG;j=k.hZ;if(!j&&!k.hm&&k.hi==k.il&&!(k.hK===null?0:1)?1:0)break;if(j==(-536870871))break;}if(k.jV==(-536870788)){k=new D2;c=M;M=c+1|0;d=new T;d.g8=G(20);k.hh=(J(d,d.g6,c,10)).bj();k.g_=h;k.hC=1;k.hP=1;k.hC=0;Fn(e,e.hI+1|0);m=e.h_.data;j=e.hI;e.hI=j+1|0;m[j]=k;e.iD=e.iD+
1|0;}if(a.ih!=f&&!g){a.ih=f;k=a.hG;k.hR=f;k.hm=k.hZ;k.jB=k.hK;j=k.iT;k.hi=j+1|0;k.lD=j;Bi(k);}switch(b){case -1073741784:break;case -536870872:d=new Ku;b=M;M=b+1|0;k=new T;BB(k);k.g8=G(20);d.hh=(J(k,k.g6,b,10)).bj();d.h0=e;d.iA=h;d.hT=h.ie;return d;case -268435416:d=new P9;b=M;M=b+1|0;k=new T;BB(k);k.g8=G(20);d.hh=(J(k,k.g6,b,10)).bj();d.h0=e;d.iA=h;d.hT=h.ie;return d;case -134217688:d=new Ne;b=M;M=b+1|0;k=new T;BB(k);k.g8=G(20);d.hh=(J(k,k.g6,b,10)).bj();d.h0=e;d.iA=h;d.hT=h.ie;return d;case -67108824:k=new Oq;b
=M;M=b+1|0;d=new T;BB(d);d.g8=G(20);k.hh=(J(d,d.g6,b,10)).bj();k.h0=e;k.iA=h;k.hT=h.ie;return k;case -33554392:d=new Dk;b=M;M=b+1|0;k=new T;k.g8=G(20);d.hh=(J(k,k.g6,b,10)).bj();d.h0=e;d.iA=h;d.hT=h.ie;return d;default:c=e.hI;switch(c){case 0:d=new D2;b=M;M=b+1|0;e=new T;e.g8=G(20);d.hh=(J(e,e.g6,b,10)).bj();d.g_=h;d.hC=1;d.hP=1;d.hC=0;return d;case 1:d=new EP;if(0>=c){d=new I;d.g9=1;d.g$=1;E(d);}e=e.h_.data[0];b=M;M=b+1|0;k=new T;k.g8=G(20);d.hh=(J(k,k.g6,b,10)).bj();d.iJ=e;d.iA=h;d.hT=h.ie;return d;default:}d
=new BU;b=M;M=b+1|0;k=new T;k.g8=G(20);d.hh=(J(k,k.g6,b,10)).bj();d.h0=e;d.iA=h;d.hT=h.ie;return d;}k=new Hm;j=M;M=j+1|0;d=new T;d.g8=G(20);k.hh=(J(d,d.g6,j,10)).bj();k.h0=e;k.iA=h;k.hT=h.ie;return k;},
AFW=a=>{let b,c,d,e,f,g,h,i,j,k;b=new Ll;b.g8=G(16);while(true){c=a.hG;d=c.hZ;if(!d&&!c.hm&&c.hi==c.il&&!(c.hK===null?0:1)?1:0)break;e=!d&&!c.hm&&c.hi==c.il&&!(c.hK===null?0:1)?1:0;if(!(!e&&!(c.hK===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.jB;d=f===null?0:1;if(!(!d&&!c.hm)){d=f===null?0:1;if(!(!d&&(c.hm<0?0:1))){g=c.hm;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}}Bi(c);e=c.jV;if(!(e>=65536&&e<=1114111
?1:0)){d=e&65535;e=b.g6;Bn(b,e,e+1|0);b.g8.data[e]=d;}else{h=(EN(e)).data;d=0;e=h.length;g=b.g6;Bn(b,g,g+e|0);i=e+d|0;while(d<i){j=b.g8.data;k=g+1|0;e=d+1|0;j[g]=h[d];g=k;d=e;}}}e=a.ih;if(!((e&2)!=2?0:1))return ZJ(b);if(!((e&64)!=64?0:1)){c=new KW;d=M;M=d+1|0;f=new T;f.g8=G(20);c.hh=(J(f,f.g6,d,10)).bj();c.hC=1;f=new H;h=b.g8;j=h.data;e=b.g6;g=j.length;if(e>=0&&e<=(g-0|0)){f.g7=L(h.data,0,e);c.lF=f;c.hC=b.g6;return c;}b=new I;b.g9=1;b.g$=1;E(b);}c=new Kp;d=M;M=d+1|0;f=new T;f.g8=G(20);c.hh=(J(f,f.g6,d,10)).bj();c.hC
=1;f=new K;f.g8=G(16);e=0;while(true){d=B4(e,b.g6);if(d>=0){b=new H;h=f.g8;j=h.data;g=f.g6;d=j.length;if(g>=0&&g<=(d-0|0)){b.g7=L(h.data,0,g);c.mw=b;c.hC=f.g6;return c;}b=new I;b.g9=1;b.g$=1;E(b);}if(e<0)break;if(d>=0)break;d=b.g8.data[e];if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}d=B1(BC,d)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}i=B1(BD,d)&65535;g=f.g6;Bn(f,g,g+1|0);f.g8.data[g]=i;e=e+1|0;}b=new I;b.g9=1;b.g$=1;E(b);},
AF8=a=>{let b,c,d,e,f,g,h,i,j;b=S(4);c=(-1);d=(-1);e=a.hG;f=e.hZ;if(!(!f&&!e.hm&&e.hi==e.il&&!(e.hK===null?0:1)?1:0)){g=!f&&!e.hm&&e.hi==e.il&&!(e.hK===null?0:1)?1:0;if(!g&&!(e.hK===null?0:1)&&(f<0?0:1)?1:0){h=b.data;Bi(e);c=e.jV;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=G(3);b=h.data;b[0]=c&65535;e=a.hG;i=e.hZ;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;Bi(e);e=a.hG;i=e.hZ;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;Bi(e);e=new Go;c=M;M=c+1|0;j=new T;j.g8=G(20);e.hh=(J(j,j.g6,c,10)).bj();e.kd=h;e.lQ=3;return e;}e=new Go;c
=M;M=c+1|0;j=new T;j.g8=G(20);e.hh=(J(j,j.g6,c,10)).bj();e.kd=h;e.lQ=2;return e;}i=a.ih;if(!((i&2)!=2?0:1)){e=new C_;i=b[0];c=M;M=c+1|0;j=new T;j.g8=G(20);e.hh=(J(j,j.g6,c,10)).bj();e.hC=1;e.iB=i;return e;}if(!((i&64)!=64?0:1)){e=new Hv;i=b[0];c=M;M=c+1|0;j=new T;j.g8=G(20);e.hh=(J(j,j.g6,c,10)).bj();e.hC=1;e.op=i;e.na=EE(i);return e;}e=new JY;i=b[0];c=M;M=c+1|0;j=new T;j.g8=G(20);e.hh=(J(j,j.g6,c,10)).bj();e.hC=1;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}i=B1(BC,i)&65535;if
(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}e.mZ=B1(BD,i)&65535;return e;}h=b.data;c=1;while(c<4){e=a.hG;g=e.hZ;if(!g&&!e.hm&&e.hi==e.il&&!(e.hK===null?0:1)?1:0)break;i=!g&&!e.hm&&e.hi==e.il&&!(e.hK===null?0:1)?1:0;if(!(!i&&!(e.hK===null?0:1)&&(g<0?0:1)?1:0))break;i=c+1|0;Bi(e);h[c]=e.jV;c=i;}if(c==1){i=h[0];if(!(Uf.cV(i)==AGn?0:1))return Q0(a,h[0]);}d=a.ih;if(!((d&2)!=2?0:1)){e=new Ec;i=M;M=i+1|0;j=new T;j.g8=G(20);e.hh=(J(j,j.g6,i,10)).bj();e.kw=1;e.kI=b;e.kF=c;return e;}if
((d&64)!=64?0:1){e=new QU;i=M;M=i+1|0;j=new T;j.g8=G(20);e.hh=(J(j,j.g6,i,10)).bj();e.kw=1;e.kI=b;e.kF=c;return e;}e=new OM;i=M;M=i+1|0;j=new T;j.g8=G(20);e.hh=(J(j,j.g6,i,10)).bj();e.kw=1;e.kI=b;e.kF=c;return e;},
LW=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hG;d=c.hZ;e=!d&&!c.hm&&c.hi==c.il&&!(c.hK===null?0:1)?1:0;e=!e&&!(c.hK===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.jB===null?0:1)&&(c.hm<0?0:1)){if(!((a.ih&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!(d<=57343&&d>=56320?1:0)?AFW(a):J3(a,b,QS(a,b));}else{f=AF8(a);g=a.hG;e=g.hZ;if(!(!e&&!g.hm&&g.hi==g.il&&!(g.hK===null?0:1)?1:0)&&!(e==(-536870871)&&!(b instanceof EW))&&e!=(-536870788)){h=!e&&!g.hm&&g.hi==g.il&&!(g.hK===null?0:1)?1:0;if(!(!h&&!(g.hK===null?0:1)&&(e<0?0:1)?1:0))f
=J3(a,b,f);}}}else if(d!=(-536870871))f=J3(a,b,QS(a,b));else{if(b instanceof EW){b=new BT;g=c.hW;h=c.iT;b.g9=1;b.g$=1;b.hA=(-1);b.hY=A(59);b.hU=g;b.hA=h;E(b);}f=new D2;e=M;M=e+1|0;c=new T;c.g8=G(20);f.hh=(J(c,c.g6,e,10)).bj();f.g_=b;f.hC=1;f.hP=1;f.hC=0;}c=a.hG;d=c.hZ;e=!d&&!c.hm&&c.hi==c.il&&!(c.hK===null?0:1)?1:0;if(!e&&!(d==(-536870871)&&!(b instanceof EW))&&d!=(-536870788)){g=LW(a,b);if(f instanceof CJ&&!(f instanceof D$)&&!(f instanceof CL)&&!(f instanceof D8)){b=f;if(!g.dT(b.hz)){f=new Qj;c=b.hz;i=b.g_;j
=b.hP;e=M;M=e+1|0;b=new T;b.g8=G(20);f.hh=(J(b,b.g6,e,10)).bj();f.g_=i;f.hz=c;f.hP=j;f.hJ=c;c.dD(f);}}if((g.dU()&65535)!=43)f.dD(g);else f.dD(g.hz);}else{if(f===null)return null;f.dD(b);}if((f.dU()&65535)!=43)return f;return f.hz;},
J3=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.hG;e=d.hZ;if(c!==null&&!(c instanceof B2)){switch(e){case -2147483606:Bi(d);d=new Rh;f=M;M=f+1|0;g=new T;g.g8=G(20);d.hh=(J(g,g.g6,f,10)).bj();d.g_=b;d.hz=c;d.hP=e;C3();c.dD(F4);return d;case -2147483605:Bi(d);d=new Mb;h=M;M=h+1|0;g=new T;g.g8=G(20);d.hh=(J(g,g.g6,h,10)).bj();d.g_=b;d.hz=c;d.hP=(-2147483606);C3();c.dD(F4);return d;case -2147483585:Bi(d);d=new L3;h=M;M=h+1|0;g=new T;BB(g);g.g8=G(20);d.hh=(J(g,g.g6,h,10)).bj();d.g_=b;d.hz=c;d.hP=(-536870849);C3();c.dD(F4);return d;case -2147483525:g
=new KT;i=d.hK;Bi(d);d=i;f=a.j6+1|0;a.j6=f;j=M;M=j+1|0;i=new T;BB(i);i.g8=G(20);g.hh=(J(i,i.g6,j,10)).bj();g.g_=b;g.hz=c;g.hP=(-536870849);g.jU=d;g.iX=f;C3();c.dD(F4);return g;case -1073741782:case -1073741781:Bi(d);d=new Nt;f=M;M=f+1|0;g=new T;g.g8=G(20);d.hh=(J(g,g.g6,f,10)).bj();d.g_=b;d.hz=c;d.hP=e;c.dD(d);return d;case -1073741761:Bi(d);d=new MQ;h=M;M=h+1|0;g=new T;BB(g);g.g8=G(20);d.hh=(J(g,g.g6,h,10)).bj();d.g_=b;d.hz=c;d.hP=(-536870849);c.dD(b);return d;case -1073741701:g=new Pl;i=d.hK;Bi(d);d=i;h=a.j6
+1|0;a.j6=h;j=M;M=j+1|0;i=new T;BB(i);i.g8=G(20);g.hh=(J(i,i.g6,j,10)).bj();g.g_=b;g.hz=c;g.hP=(-536870849);g.jU=d;g.iX=h;c.dD(g);return g;case -536870870:case -536870869:Bi(d);if(c.dU()!=(-2147483602)){d=new CL;f=M;M=f+1|0;g=new T;g.g8=G(20);d.hh=(J(g,g.g6,f,10)).bj();d.g_=b;d.hz=c;d.hP=e;}else{h=a.ih;if((h&32)!=32?0:1){d=new Nv;f=M;M=f+1|0;g=new T;g.g8=G(20);d.hh=(J(g,g.g6,f,10)).bj();d.g_=b;d.hz=c;d.hP=e;}else{d=new Ls;if(!(h&1)){g=EG;if(g===null){g=new G6;EG=g;}}else{g=EQ;if(g===null){g=new G5;EQ=g;}}f=
M;M=f+1|0;i=new T;i.g8=G(20);d.hh=(J(i,i.g6,f,10)).bj();d.g_=b;d.hz=c;d.hP=e;d.mh=g;}}c.dD(d);return d;case -536870849:Bi(d);d=new E_;h=M;M=h+1|0;g=new T;g.g8=G(20);d.hh=(J(g,g.g6,h,10)).bj();d.g_=b;d.hz=c;d.hP=(-536870849);c.dD(b);return d;case -536870789:g=new EI;i=d.hK;Bi(d);d=i;h=a.j6+1|0;a.j6=h;j=M;M=j+1|0;i=new T;i.g8=G(20);g.hh=(J(i,i.g6,j,10)).bj();g.g_=b;g.hz=c;g.hP=(-536870849);g.jU=d;g.iX=h;c.dD(g);return g;default:}return c;}i=null;if(c!==null)i=c;switch(e){case -2147483606:case -2147483605:Bi(d);d
=new Rj;f=M;M=f+1|0;c=new T;c.g8=G(20);d.hh=(J(c,c.g6,f,10)).bj();d.g_=b;d.hz=i;d.hP=e;d.hJ=i;i.g_=d;return d;case -2147483585:Bi(d);c=new Qd;h=M;M=h+1|0;d=new T;BB(d);d.g8=G(20);c.hh=(J(d,d.g6,h,10)).bj();c.g_=b;c.hz=i;c.hP=(-2147483585);c.hJ=i;return c;case -2147483525:c=new LV;g=d.hK;Bi(d);d=g;h=M;M=h+1|0;g=new T;BB(g);g.g8=G(20);c.hh=(J(g,g.g6,h,10)).bj();c.g_=b;c.hz=i;c.hP=(-2147483525);c.hJ=i;c.lc=d;return c;case -1073741782:case -1073741781:Bi(d);d=new MJ;f=M;M=f+1|0;c=new T;c.g8=G(20);d.hh=(J(c,c.g6,
f,10)).bj();d.g_=b;d.hz=i;d.hP=e;d.hJ=i;i.g_=d;return d;case -1073741761:Bi(d);c=new OP;h=M;M=h+1|0;d=new T;BB(d);d.g8=G(20);c.hh=(J(d,d.g6,h,10)).bj();c.g_=b;c.hz=i;c.hP=(-1073741761);c.hJ=i;return c;case -1073741701:c=new Nf;g=d.hK;Bi(d);d=g;h=M;M=h+1|0;g=new T;BB(g);g.g8=G(20);c.hh=(J(g,g.g6,h,10)).bj();c.g_=b;c.hz=i;c.hP=(-1073741701);c.hJ=i;c.lc=d;return c;case -536870870:case -536870869:Bi(d);d=new CJ;f=M;M=f+1|0;c=new T;c.g8=G(20);d.hh=(J(c,c.g6,f,10)).bj();d.g_=b;d.hz=i;d.hP=e;d.hJ=i;i.g_=d;return d;case -536870849:Bi(d);c
=new D8;h=M;M=h+1|0;d=new T;d.g8=G(20);c.hh=(J(d,d.g6,h,10)).bj();c.g_=b;c.hz=i;c.hP=(-536870849);c.hJ=i;return c;case -536870789:c=new D$;g=d.hK;Bi(d);d=g;h=M;M=h+1|0;g=new T;g.g8=G(20);c.hh=(J(g,g.g6,h,10)).bj();c.g_=b;c.hz=i;c.hP=(-536870789);c.hJ=i;c.lc=d;return c;default:}return c;},
QS=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=null;d=b instanceof EW;while(true){a:{e=a.hG;f=e.hZ;if((f&(-2147418113))==(-2147483608)){Bi(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.ih=g;else{if(f!=(-1073741784))g=a.ih;c=Q7(a,f,g,b);e=a.hG;if(e.hZ!=(-536870871)){b=new BT;h=e.hW;i=e.iT;b.g9=1;b.g$=1;b.hA=(-1);b.hY=A(59);b.hU=h;b.hA=i;E(b);}Bi(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:j
=(f&2147483647)-48|0;if(a.k5<j){c=new BT;h=e.hW;i=e.iT;c.g9=1;c.g$=1;c.hA=(-1);c.hY=A(59);c.hU=h;c.hA=i;E(c);}Bi(e);g=a.iz+1|0;a.iz=g;i=a.ih;if(!((i&2)!=2?0:1)){c=new Qm;k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();c.lp=j;c.kC=g;}else if(!((i&64)!=64?0:1)){c=new E7;k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();c.lp=j;c.kC=g;}else{c=new M$;k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();c.lp=j;c.kC=g;}a.nn.data[j].nk=1;a.oR=1;break a;case -2147483583:break;case -2147483582:Bi(e);c
=new Ie;k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();c.ok=0;break a;case -2147483577:Bi(e);c=new Lo;k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();break a;case -2147483558:Bi(e);c=new JX;j=a.iz+1|0;a.iz=j;k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();c.kW=j;break a;case -2147483550:Bi(e);c=new Ie;k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();c.ok=1;break a;case -2147483526:Bi(e);c=new Qr;k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();break a;case -536870876:break b;case -536870866:Bi(e);i
=a.ih;if((i&32)!=32?0:1){c=new Qo;i=M;M=i+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,i,10)).bj();break a;}c=new LR;if(!(i&1)){h=EG;if(h===null){h=new G6;EG=h;}}else{h=EQ;if(h===null){h=new G5;EQ=h;}}k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();c.nQ=h;break a;case -536870821:Bi(e);i=0;c=a.hG;if(c.hZ==(-536870818)){i=1;Bi(c);}c=IU(a,Fp(a,i));c.dD(b);h=a.hG;k=h.hZ;if(k!=(-536870819)){b=new BT;e=h.hW;i=h.iT;b.g9=1;b.g$=1;b.hA=(-1);b.hY=A(59);b.hU=e;b.hA=i;E(b);}h.jD=1;h.hm=k;h.jB=h.hK;h.hi=h.lD;h.lD=h.iT;Bi(h);Bi(a.hG);break a;case -536870818:break c;case 0:c
=e.hK;h=c;if(h!==null)c=IU(a,h);else{if(!f&&!e.hm&&e.hi==e.il&&!(c===null?0:1)?1:0){c=new D2;k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();c.g_=b;c.hC=1;c.hP=1;c.hC=0;break a;}c=new C_;j=f&65535;k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();c.hC=1;c.iB=j;}Bi(a.hG);break a;default:if(f>=0&&!(e.hK===null?0:1)){c=Q0(a,f);Bi(a.hG);break a;}if(f==(-536870788)){c=new D2;k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();c.g_=b;c.hC=1;c.hP=1;c.hC=0;break a;}if(f!=(-536870871)){b=new BT;c
=e.hK;if(c===null?0:1)c=c.bj();else{k=f&65535;c=new H;l=G(1);m=l.data;m[0]=k;c.g7=L(l.data,0,m.length);}e=a.hG;h=e.hW;i=e.iT;b.g9=1;b.g$=1;b.hA=(-1);b.hY=c;b.hU=h;b.hA=i;E(b);}if(d){b=new BT;h=e.hW;i=e.iT;b.g9=1;b.g$=1;b.hA=(-1);b.hY=A(59);b.hU=h;b.hA=i;E(b);}c=new D2;k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();c.g_=b;c.hC=1;c.hP=1;c.hC=0;break a;}Bi(e);c=new IE;k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();break a;}Bi(e);a.iz=a.iz+1|0;i=a.ih;if(!((i&8)!=8?0:1)){c=new IE;k=M;M=k+1|
0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();break a;}c=new KY;if(!(i&1)){h=EG;if(h===null){h=new G6;EG=h;}}else{h=EQ;if(h===null){h=new G5;EQ=h;}}k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();c.pJ=h;break a;}Bi(e);j=a.iz+1|0;a.iz=j;i=a.ih;if((i&8)!=8?0:1){if((i&1)!=1?0:1){c=new Oc;i=M;M=i+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,i,10)).bj();c.mz=j;}else{c=new Kr;k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();c.lh=j;}}else if((i&1)!=1?0:1){c=new Qe;k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=
(J(e,e.g6,k,10)).bj();c.mn=j;}else{c=new JX;k=M;M=k+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,k,10)).bj();c.kW=j;}}}if(f!=(-16777176))break;}return c;},
Fp=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;c=new B7;d=a.ih;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;f=new Ba;f.hg=S(64);c.hj=f;f=new Ba;f.hg=S(2);c.hn=f;c.my=e;c.m9=d;DH(c,b);g=(-1);h=0;i=0;j=1;a:{b:{c:while(true){k=a.hG;b=k.hZ;if(!b&&!k.hm&&k.hi==k.il&&!(k.hK===null?0:1)?1:0)break a;i=b==(-536870819)&&!j?0:1;if(!i)break a;d:{switch(b){case -536870874:if(g>=0)Cg(c,g);f=a.hG;Bi(f);g=f.jV;f=a.hG;if(f.hZ!=(-536870874)){g=38;break d;}if(f.hm==(-536870821)){Bi(f);h=1;g=(-1);break d;}Bi(f);if(j){c=Fp(a,0);break d;}if(a.hG.hZ
==(-536870819))break d;Qw(c,Fp(a,0));break d;case -536870867:if(!j){b=k.hm;if(b!=(-536870819)&&b!=(-536870821)&&g>=0){Bi(k);k=a.hG;d=k.hZ;if(k.hK===null?0:1)break c;if(d<0){b=k.hm;if(b!=(-536870819)&&b!=(-536870821)&&g>=0)break c;}e:{try{if(Y1(d))break e;d=d&65535;break e;}catch($$e){$$je=BP($$e);if($$je instanceof CE){break b;}else{throw $$e;}}}try{By(c,g,d);}catch($$e){$$je=BP($$e);if($$je instanceof CE){break b;}else{throw $$e;}}Bi(a.hG);g=(-1);break d;}}if(g>=0)Cg(c,g);g=45;Bi(a.hG);break d;case -536870821:if
(g>=0){Cg(c,g);g=(-1);}Bi(a.hG);e=0;f=a.hG;if(f.hZ==(-536870818)){Bi(f);e=1;}if(!h)RM(c,Fp(a,e));else Qw(c,Fp(a,e));h=0;Bi(a.hG);break d;case -536870819:break;case -536870818:if(g>=0)Cg(c,g);g=94;Bi(a.hG);break d;case 0:if(g>=0)Cg(c,g);f=a.hG.hK;if(f===null)g=0;else{AKD(c,f);g=(-1);}Bi(a.hG);break d;default:if(g>=0)Cg(c,g);f=a.hG;Bi(f);g=f.jV;break d;}if(g>=0)Cg(c,g);g=93;Bi(a.hG);}j=0;}c=new BT;l=k.hW;g=k.iT;c.g9=1;c.g$=1;c.hA=(-1);c.hY=A(59);c.hU=l;c.hA=g;E(c);}c=new BT;k=a.hG;l=k.hW;g=k.iT;c.g9=1;c.g$=1;c.hA
=(-1);c.hY=A(59);c.hU=l;c.hA=g;E(c);}if(!i){if(g>=0)Cg(c,g);return c;}c=new BT;l=k.hW;b=k.iT-1|0;c.g9=1;c.g$=1;c.hA=(-1);c.hY=A(59);c.hU=l;c.hA=b;E(c);},
Q0=(a,b)=>{let c,d,e,f,g,h;c=b>=65536&&b<=1114111?1:0;d=a.ih;if((d&2)!=2?0:1){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}e=new Hv;b=b&65535;f=M;M=f+1|0;g=new T;g.g8=G(20);e.hh=(J(g,g.g6,f,10)).bj();e.hC=1;e.op=b;e.na=EE(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new Kn;f=M;M=f+1|0;g=new T;g.g8=G(20);e.hh=(J(g,g.g6,f,10)).bj();e.hC=1;e.hC=2;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b);if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null
?V(Bu.value):null)));}e.py=B1(BD,b);return e;}if(b<=57343&&b>=56320?1:0){e=new FS;b=b&65535;f=M;M=f+1|0;g=new T;g.g8=G(20);e.hh=(J(g,g.g6,f,10)).bj();e.kx=b;return e;}if(b<=56319&&b>=55296?1:0){e=new FZ;b=b&65535;f=M;M=f+1|0;g=new T;g.g8=G(20);e.hh=(J(g,g.g6,f,10)).bj();e.km=b;return e;}e=new JY;b=b&65535;f=M;M=f+1|0;g=new T;g.g8=G(20);e.hh=(J(g,g.g6,f,10)).bj();e.hC=1;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value
!==null?V(Bu.value):null)));}e.mZ=B1(BD,b)&65535;return e;}}if(c){e=new Dq;f=M;M=f+1|0;g=new T;g.g8=G(20);e.hh=(J(g,g.g6,f,10)).bj();e.hC=1;e.hC=2;e.kL=b;h=(EN(b)).data;e.ll=h[0];e.kS=h[1];return e;}if(b<=57343&&b>=56320?1:0){e=new FS;b=b&65535;f=M;M=f+1|0;g=new T;g.g8=G(20);e.hh=(J(g,g.g6,f,10)).bj();e.kx=b;return e;}if(b<=56319&&b>=55296?1:0){e=new FZ;b=b&65535;f=M;M=f+1|0;g=new T;g.g8=G(20);e.hh=(J(g,g.g6,f,10)).bj();e.km=b;return e;}e=new C_;b=b&65535;f=M;M=f+1|0;g=new T;g.g8=G(20);e.hh=(J(g,g.g6,f,10)).bj();e.hC
=1;e.iB=b;return e;},
IU=(a,b)=>{let c,d,e,f,g,h;if(!ACa(b)){if(b.hM){if(!b.d3()){c=new CS;d=M;M=d+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,d,10)).bj();c.iR=b.d4();c.mr=b.hx;return c;}c=new Hy;d=M;M=d+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,d,10)).bj();c.iR=b.d4();c.mr=b.hx;return c;}if(b.d3()){c=new H2;d=M;M=d+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,d,10)).bj();c.hC=1;c.nF=b.d4();c.pq=b.hx;return c;}c=new Dd;d=M;M=d+1|0;e=new T;e.g8=G(20);c.hh=(J(e,e.g6,d,10)).bj();c.hC=1;c.i9=b.d4();c.p4=b.hx;return c;}c=TA(b);e=new Kz;d=M;M=d+1|0;f=
new T;f.g8=G(20);e.hh=(J(f,f.g6,d,10)).bj();e.pi=c;e.q7=c.hx;if(b.hM){if(!b.d3()){c=new FB;f=new CS;b=Gj(b);d=M;M=d+1|0;g=new T;g.g8=G(20);f.hh=(J(g,g.g6,d,10)).bj();f.iR=b;f.mr=b.hx;d=M;M=d+1|0;b=new T;b.g8=G(20);c.hh=(J(b,b.g6,d,10)).bj();c.le=f;c.k6=e;return c;}c=new FB;f=new Hy;g=Gj(b);h=M;M=h+1|0;b=new T;b.g8=G(20);f.hh=(J(b,b.g6,h,10)).bj();f.iR=g;f.mr=g.hx;d=M;M=d+1|0;b=new T;b.g8=G(20);c.hh=(J(b,b.g6,d,10)).bj();c.le=f;c.k6=e;return c;}if(b.d3()){c=new FB;f=new H2;b=Gj(b);d=M;M=d+1|0;g=new T;g.g8=G(20);f.hh
=(J(g,g.g6,d,10)).bj();f.hC=1;f.nF=b;f.pq=b.hx;d=M;M=d+1|0;b=new T;b.g8=G(20);c.hh=(J(b,b.g6,d,10)).bj();c.le=f;c.k6=e;return c;}c=new FB;f=new Dd;b=Gj(b);d=M;M=d+1|0;g=new T;g.g8=G(20);f.hh=(J(g,g.g6,d,10)).bj();f.hC=1;f.i9=b;f.p4=b.hx;d=M;M=d+1|0;b=new T;b.g8=G(20);c.hh=(J(b,b.g6,d,10)).bj();c.le=f;c.k6=e;return c;},
EE=b=>{if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;};
let JS=D(0);
function N4(){let a=this;C.call(a);a.rw=null;a.qB=null;a.mm=null;a.jF=null;a.mf=0;a.nv=0;}
let Kv=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.mm.g7.length;if(b>=0&&b<=c){d=a.jF;d.j1=0;d.lT=2;e=d.ib.data;f=0;g=e.length;if(f>g){d=new Bs;Y(d);E(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}e=d.hQ.data;f=0;g=e.length;if(f>g){d=new Bs;Y(d);E(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}d.jN=d.iG;d.lT=1;d.jN=b;c=d.lV;if(c<0)c=b;d.lV=c;b=a.qB.d7(b,a.mm,d);if(b==(-1))a.jF.iC=1;if(b>=0){d=a.jF;b=d.j1;if(b){e=d.ib.data;if(e[0]==(-1)){f=d.jN;e[0]=f;e[1]=f;}if(!b){d=new CV;d.g9=1;d.g$=1;Bl(d);E(d);}if(0<d.kP){d.lV=e[1];return 1;}d=new I;i
=new K;BB(i);i.g8=G(16);J(i,i.g6,0,10);j=new H;e=i.g8;k=e.data;c=i.g6;f=k.length;if(c>=0&&c<=(f-0|0)){j.g7=L(e.data,0,c);d.g9=1;d.g$=1;d.ha=j;E(d);}d=new I;d.g9=1;d.g$=1;E(d);}}a.jF.jN=(-1);return 0;}d=new I;i=new K;i.g8=G(16);J(i,i.g6,b,10);j=new H;e=i.g8;k=e.data;c=i.g6;f=k.length;if(c>=0&&c<=(f-0|0)){j.g7=L(e.data,0,c);d.g9=1;d.g$=1;d.ha=j;E(d);}d=new I;d.g9=1;d.g$=1;E(d);},
MP=a=>{let b,c,d,e,f,g,h,i,j,k,l;b=a.mm.g7.length;c=a.jF;if(!c.mt)b=a.nv;if(c.jN>=0&&c.lT==1){d=c.j1;if(!d){c=new CV;c.g9=1;c.g$=1;E(c);}e=B4(0,c.kP);if(e>=0){c=new I;f=new K;f.g8=G(16);J(f,f.g6,0,10);g=new H;h=f.g8;i=h.data;b=f.g6;j=i.length;if(b>=0&&b<=(j-0|0)){g.g7=L(h.data,0,b);c.g9=1;c.g$=1;c.ha=g;E(c);}c=new I;c.g9=1;c.g$=1;E(c);}h=c.ib.data;k=h[1];c.jN=k;if(!d){c=new CV;c.g9=1;c.g$=1;E(c);}if(e>=0){c=new I;f=new K;f.g8=G(16);J(f,f.g6,0,10);g=new H;h=f.g8;i=h.data;b=f.g6;j=i.length;if(b>=0&&b<=(j-0|0))
{g.g7=L(h.data,0,b);c.g9=1;c.g$=1;c.ha=g;E(c);}c=new I;c.g9=1;c.g$=1;E(c);}j=h[1];if(!d){c=new CV;c.g9=1;c.g$=1;E(c);}if(e<0){if(j==h[0])c.jN=k+1|0;l=c.jN;return l<=b&&Kv(a,l)?1:0;}c=new I;f=new K;f.g8=G(16);J(f,f.g6,0,10);g=new H;h=f.g8;i=h.data;b=f.g6;j=i.length;if(b>=0&&b<=(j-0|0)){g.g7=L(h.data,0,b);c.g9=1;c.g$=1;c.ha=g;E(c);}c=new I;c.g9=1;c.g$=1;E(c);}return Kv(a,a.mf);},
Rw=(a,b,c)=>{let d,e;a.mf=(-1);a.nv=(-1);a.rw=b;a.qB=b.pO;a.mm=c;a.mf=0;d=c.g7.length;a.nv=d;e=AHJ(c,a.mf,d,b.k5,b.j6+1|0,b.iz+1|0);a.jF=e;e.ku=1;},
My=(a,b)=>{let c=new N4();Rw(c,a,b);return c;};
let Uu=D();
let Op=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(c!==null&&c.data.length){a:{b:{try{d=Lr(AGy(b,c));}catch($$e){$$je=BP($$e);if($$je instanceof HX){d=$$je;break a;}else if($$je instanceof FC){d=$$je;break b;}else{throw $$e;}}return d;}e=new D_;if(b.ig===null)b.ig=V(b.hF.$meta.name);f=b.ig;b=new K;b.g8=G(16);F(b,b.g6,A(142));g=b.g6;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.g8;i=c.data;j=b.g6;k=i.length;if(j>=0&&j<=(k-0|0)){h.g7=L(c.data,0,j);e.g9=1;e.g$=1;e.ha=h;e.kt=d;E(e);}b=new I;b.g9=1;b.g$=1;E(b);}e=new D_;if(b.ig
===null)b.ig=V(b.hF.$meta.name);f=b.ig;b=new K;b.g8=G(16);F(b,b.g6,A(143));g=b.g6;if(f===null)f=A(2);F(b,g,f);F(b,b.g6,A(144));h=new H;c=b.g8;i=c.data;j=b.g6;k=i.length;if(j>=0&&j<=(k-0|0)){h.g7=L(c.data,0,j);e.g9=1;e.g$=1;e.ha=h;e.kt=d;E(e);}b=new I;b.g9=1;b.g$=1;E(b);}c=(AJb(b)).data;if(c.length<=0)b=null;else{b=new H3;b.p7=c[0];}return b;},
Mj=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;a:{try{d=Lr(AGA(b,c));}catch($$e){$$je=BP($$e);if($$je instanceof HX){d=$$je;break a;}else if($$je instanceof FC){d=$$je;e=new D_;if(b.ig===null)b.ig=V(b.hF.$meta.name);f=b.ig;b=new K;b.g8=G(16);F(b,b.g6,A(142));g=b.g6;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.g8;i=c.data;j=b.g6;k=i.length;if(j>=0&&j<=(k-0|0)){h.g7=L(c.data,0,j);e.g9=1;e.g$=1;e.ha=h;e.kt=d;E(e);}b=new I;b.g9=1;b.g$=1;E(b);}else{throw $$e;}}return d;}e=new D_;if(b.ig===null)b.ig=V(b.hF.$meta.name);f=b.ig;b=new K;b.g8
=G(16);F(b,b.g6,A(145));g=b.g6;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.g8;i=c.data;k=b.g6;j=i.length;if(k>=0&&k<=(j-0|0)){h.g7=L(c.data,0,k);e.g9=1;e.g$=1;e.ha=h;e.kt=d;E(e);}b=new I;b.g9=1;b.g$=1;E(b);};
function H3(){C.call(this);this.p7=null;}
let AIe=(a,b)=>{a.p7=b;},
Lr=a=>{let b=new H3();AIe(b,a);return b;},
Pm=(a,b)=>{return;};
let D_=D(CE);
function DD(){C.call(this);this.hy=null;}
let AEP=null,Jv=null,Fu=null,F_=null,L$=null,QH=null,LO=null;
let Bp=()=>{Bp=Bz(DD);Vg();};
let Cd=b=>{let c,d,e,f,g,h,i;Bp();if(b===null)return null;c=b;d=V(typeof c);if(d===A(146))e=1;else if(!(A(146) instanceof H))e=0;else{f=A(146);e=d.g7!==f.g7?0:1;}a:{if(!e){if(d===A(147))e=1;else if(!(A(147) instanceof H))e=0;else{f=A(147);e=d.g7!==f.g7?0:1;}if(!e){e=0;break a;}}e=1;}if(e&&b[Be]===true)return b;b=Jv;if(b!==null){if(e){f=b.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DD;h.hy=c;Jv.set(c,new WeakRef(h));return h;}if(d===A(148))e=1;else if
(!(A(148) instanceof H))e=0;else{b=A(148);e=d.g7!==b.g7?0:1;}if(e){f=Fu.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DD;h.hy=c;i=h;Fu.set(c,new WeakRef(i));K7(QH,i,c);return h;}if(d===A(149))e=1;else if(!(A(149) instanceof H))e=0;else{b=A(149);e=d.g7!==b.g7?0:1;}if(e){f=F_.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DD;h.hy=c;i=h;F_.set(c,new WeakRef(i));K7(LO,i,c);return h;}if(d===A(150))e=1;else if
(!(A(150) instanceof H))e=0;else{b=A(150);e=d.g7!==b.g7?0:1;}if(e){f=L$;g=f===null?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DD;h.hy=c;L$=new WeakRef(h);return h;}}b=new DD;b.hy=c;return b;},
Vg=()=>{AEP=new WeakMap();Jv=!(typeof WeakRef!=='undefined'?1:0)?null:new WeakMap();Fu=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();F_=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();QH=Fu===null?null:new FinalizationRegistry(BL(new I5,"accept"));LO=F_===null?null:new FinalizationRegistry(BL(new I4,"accept"));},
K7=(b,c,d)=>{return b.register(c,d);};
let MX=D(0);
let HF=D();
let G4=D(0);
let HE=D();
function Pu(){let a=this;C.call(a);a.ib=null;a.hQ=null;a.jf=null;a.kZ=null;a.kP=0;a.j1=0;a.iG=0;a.hB=0;a.jN=0;a.mt=0;a.ku=0;a.iC=0;a.si=0;a.lV=0;a.lT=0;}
let AC6=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.lV=(-1);h=e+1|0;a.kP=h;i=S(h*2|0);a.ib=i;j=S(g);k=j.data;a.hQ=j;e=0;g=k.length;l=B4(e,g);if(l>0){b=new Bs;b.g9=1;b.g$=1;E(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.jf=S(f);i=i.data;h=0;m=i.length;e=B4(h,m);if(e>0){b=new Bs;b.g9=1;b.g$=1;E(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.j1=0;a.lT=2;f=0;if(e>0){b=new Bs;b.g9=1;b.g$=1;E(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new Bs;b.g9=1;b.g$=1;E(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.kZ=b;if(c
>=0){a.iG=c;a.hB=d;}a.jN=a.iG;},
AHJ=(a,b,c,d,e,f)=>{let g=new Pu();AC6(g,a,b,c,d,e,f);return g;};
let B0=D(Bs);
let HX=D(BA);
let IL=D(CE);
let FC=D(IL);
let CU=D(BA);
function BO(){let a=this;C.call(a);a.g_=null;a.is=0;a.hh=null;a.hP=0;}
let M=0;
let Wa=(a,b,c,d)=>{let e;e=d.hB;while(true){if(b>e)return (-1);if(a.ed(b,c,d)>=0)break;b=b+1|0;}return b;},
YF=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);if(a.ed(c,d,e)>=0)break;c=c+(-1)|0;}return c;},
AK3=(a,b)=>{a.hP=b;},
UD=a=>{return a.hP;},
ALX=a=>{return a.g_;},
AH0=(a,b)=>{a.g_=b;},
AHY=(a,b)=>{return 1;},
AJo=a=>{return null;},
Ga=a=>{let b;a.is=1;b=a.g_;if(b!==null){if(!b.is){b=b.ee();if(b!==null){a.g_.is=1;a.g_=b;}a.g_.dz();}else if(b instanceof EP&&b.iA.nk)a.g_=b.g_;}},
AMc=()=>{M=1;};
let Jq=D();
let AJd=D();
let XY=D();
let AKH=D();
let H$=D(0);
let I5=D();
let AH8=(a,b)=>{let c;Bp();b=b===null?null:b instanceof E0()?b:Cd(b);c=Fu;b=b===null?null:b[Be]===true?b:b.hy;c.delete(b);};
let Za=D();
let I4=D();
let Tn=(a,b)=>{let c;Bp();b=b===null?null:b instanceof E0()?b:Cd(b);c=F_;b=b===null?null:b[Be]===true?b:b.hy;c.delete(b);};
let Kk=D(0);
function FM(){let a=this;C.call(a);a.jv=null;a.jW=null;}
function Gv(){let a=this;FM.call(a);a.mF=null;a.p8=0;}
function CA(){let a=this;BO.call(a);a.nk=0;a.ie=0;}
let F4=null;
let C3=()=>{C3=Bz(CA);Xb();};
let TI=(a,b,c,d)=>{let e,f,g;e=a.ie;f=d.ib.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.g_.ed(b,c,d);if(g<0){b=a.ie;d.ib.data[(b*2|0)+1|0]=e;}return g;},
ALF=a=>{return a.ie;},
Uk=(a,b)=>{return 0;},
Xb=()=>{let b,c,d;b=new Lm;c=M;M=c+1|0;d=new T;d.g8=G(20);b.hh=(J(d,d.g6,c,10)).bj();F4=b;};
function OE(){let a=this;C.call(a);a.hX=null;a.hR=0;a.jD=0;a.qE=0;a.jV=0;a.hZ=0;a.hm=0;a.il=0;a.hK=null;a.jB=null;a.hi=0;a.hO=0;a.iT=0;a.lD=0;a.hW=null;}
let Mr=null,Uf=null,AGn=0;
let AH2=(a,b,c)=>{let d,e,f,g,h,i,j;a.jD=1;a.hW=b;if((c&16)>0){d=new K;d.g8=G(16);F(d,d.g6,A(151));e=0;while(true){f=Md(b,A(152),e);if(f<0)break;g=f+2|0;h=Cb(b,e,g);F(d,d.g6,h);F(d,d.g6,A(153));e=g;}b=Cb(b,e,b.g7.length);F(d,d.g6,b);F(d,d.g6,A(152));b=new H;i=d.g8;j=i.data;e=d.g6;f=j.length;if(e>=0&&e<=(f-0|0))b.g7=L(i.data,0,e);else{b=new I;b.g9=1;b.g$=1;E(b);}}a.hX=G(b.g7.length+2|0);j=G(b.g7.length);i=j.data;e=0;f=i.length;while(true){if(e>=f){Fm(j,0,a.hX,0,b.g7.length);i=a.hX.data;g=i.length;i[g-1|0]=0;i[g
-2|0]=0;a.il=g;a.hR=c;Bi(a);Bi(a);return;}if(e<0)break;if(e>=b.g7.length)break;i[e]=b.g7.charCodeAt(e);e=e+1|0;}b=new Q;b.g9=1;b.g$=1;E(b);},
Xh=(a,b)=>{let c=new OE();AH2(c,a,b);return c;},
Bi=a=>{let b,c,d,e,f,g,h,i,j,k,$$je;a.jV=a.hZ;a.hZ=a.hm;a.hK=a.jB;a.iT=a.lD;a.lD=a.hi;a:{while(true){b=0;c=a.hi>=a.hX.data.length?0:JD(a);a.hm=c;a.jB=null;if(a.jD==4){if(c!=92)return;c=a.hi;d=a.hX.data;if(c>=d.length)c=0;else{a.hO=c;if(a.hR&4)BW(a);else a.hi=c+1|0;c=d[a.hO];}a.hm=c;switch(c){case 69:break;default:a.hm=92;a.hi=a.hO;return;}a.jD=a.qE;a.hm=a.hi>(a.hX.data.length-2|0)?0:JD(a);}b:{c=a.hm;if(c==92){c=a.hi>=(a.hX.data.length-2|0)?(-1):JD(a);c:{d:{a.hm=c;switch(c){case -1:e=new BT;f=a.hW;c=a.hi;e.g9
=1;e.g$=1;e.hA=(-1);e.hY=A(59);e.hU=f;e.hA=c;E(e);case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.hm
=ADK(a);break b;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.jD!=1)break b;a.hm=(-2147483648)|c;break b;case 65:a.hm=(-2147483583);break b;case 66:a.hm=(-2147483582);break b;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:e=new BT;f=a.hW;c=a.hi;e.g9=1;e.g$=1;e.hA=(-1);e.hY=A(59);e.hU=f;e.hA=c;E(e);case 68:case 83:case 87:case 100:case 115:case 119:break d;case 71:a.hm
=(-2147483577);break b;case 80:case 112:break c;case 81:a.qE=a.jD;a.jD=4;b=1;break b;case 90:a.hm=(-2147483558);break b;case 97:a.hm=7;break b;case 98:a.hm=(-2147483550);break b;case 99:c=a.hi;d=a.hX.data;if(c>=(d.length-2|0)){e=new BT;f=a.hW;e.g9=1;e.g$=1;e.hA=(-1);e.hY=A(59);e.hU=f;e.hA=c;E(e);}a.hO=c;if(a.hR&4)BW(a);else a.hi=c+1|0;a.hm=d[a.hO]&31;break b;case 101:a.hm=27;break b;case 102:a.hm=12;break b;case 110:a.hm=10;break b;case 114:a.hm=13;break b;case 116:a.hm=9;break b;case 117:a.hm=Me(a,4);break b;case 120:a.hm
=Me(a,2);break b;case 122:a.hm=(-2147483526);break b;default:}break b;}e=new H;d=a.hX;g=d.data;h=a.hO;i=g.length;if(h<0)break a;if(1>(i-h|0))break a;e.g7=L(d.data,h,1);e=QD(Gw,e);if(e.jG===null)e.jG=e.el();a.jB=e.jG;a.hm=0;break b;}e=ACZ(a);j=0;if(a.hm==80)j=1;try{a.jB=AA3(e,j);}catch($$e){$$je=BP($$e);if($$je instanceof HD){e=new BT;f=a.hW;c=a.hi;e.g9=1;e.g$=1;e.hA=(-1);e.hY=A(59);e.hU=f;e.hA=c;E(e);}else{throw $$e;}}a.hm=0;}else{h=a.jD;if(h==1)switch(c){case 36:a.hm=(-536870876);break b;case 40:d=a.hX.data;c
=a.hi;if(d[c]!=63){a.hm=(-2147483608);break b;}a.hO=c;if(a.hR&4)BW(a);else a.hi=c+1|0;c=a.hX.data[a.hi];h=0;while(true){e:{if(h){h=0;switch(c){case 33:break;case 61:a.hm=(-134217688);k=a.hi;a.hO=k;if(a.hR&4)BW(a);else a.hi=k+1|0;break e;default:e=new BT;f=a.hW;c=a.hi;e.g9=1;e.g$=1;e.hA=(-1);e.hY=A(59);e.hU=f;e.hA=c;E(e);}a.hm=(-67108824);j=a.hi;a.hO=j;if(a.hR&4)BW(a);else a.hi=j+1|0;}else{switch(c){case 33:break;case 60:h=a.hi;a.hO=h;if(a.hR&4)BW(a);else a.hi=h+1|0;c=a.hX.data[a.hi];h=1;break e;case 61:a.hm
=(-536870872);j=a.hi;a.hO=j;if(a.hR&4)BW(a);else a.hi=j+1|0;break e;case 62:a.hm=(-33554392);j=a.hi;a.hO=j;if(a.hR&4)BW(a);else a.hi=j+1|0;break e;default:i=AJ$(a);a.hm=i;if(i<256){a.hR=i;i=i<<16;a.hm=i;a.hm=(-1073741784)|i;break e;}i=i&255;a.hm=i;a.hR=i;i=i<<16;a.hm=i;a.hm=(-16777176)|i;break e;}a.hm=(-268435416);j=a.hi;a.hO=j;if(a.hR&4)BW(a);else a.hi=j+1|0;}}if(!h)break;}break b;case 41:a.hm=(-536870871);break b;case 42:case 43:case 63:h=a.hi;d=a.hX.data;switch(h>=d.length?42:d[h]){case 43:a.hm=c|(-2147483648);a.hO
=h;if(a.hR&4)BW(a);else a.hi=h+1|0;break b;case 63:a.hm=c|(-1073741824);a.hO=h;if(a.hR&4)BW(a);else a.hi=h+1|0;break b;default:}a.hm=c|(-536870912);break b;case 46:a.hm=(-536870866);break b;case 91:a.hm=(-536870821);a.jD=2;break b;case 93:if(h!=2)break b;a.hm=(-536870819);break b;case 94:a.hm=(-536870818);break b;case 123:a.jB=AIl(a,c);break b;case 124:a.hm=(-536870788);break b;default:}else if(h==2)switch(c){case 38:a.hm=(-536870874);break b;case 45:a.hm=(-536870867);break b;case 91:a.hm=(-536870821);break b;case 93:a.hm
=(-536870819);break b;case 94:a.hm=(-536870818);break b;default:}}}if(b)continue;else break;}return;}e=new I;e.g9=1;e.g$=1;E(e);},
ACZ=a=>{let b,c,d,e,f,g,h,i;b=new K;b.g8=G(10);c=a.hi;d=a.hX;e=d.data;f=e.length;if(c<(f-2|0)){if(e[c]!=123){b=new H;a.hO=c;if(a.hR&4)BW(a);else a.hi=c+1|0;g=a.hO;if(g>=0&&1<=(f-g|0)){b.g7=L(d.data,g,1);h=new K;h.g8=G(16);F(h,h.g6,A(154));F(h,h.g6,b);b=new H;d=h.g8;e=d.data;f=h.g6;g=e.length;if(f>=0&&f<=(g-0|0)){b.g7=L(d.data,0,f);return b;}b=new I;b.g9=1;b.g$=1;E(b);}b=new I;b.g9=1;b.g$=1;E(b);}a.hO=c;if(a.hR&4)BW(a);else a.hi=c+1|0;c=0;a:{while(true){f=a.hi;d=a.hX.data;if(f>=(d.length-2|0))break;a.hO=f;if
(a.hR&4)BW(a);else a.hi=f+1|0;c=d[a.hO];if(c==125)break a;f=b.g6;Bn(b,f,f+1|0);b.g8.data[f]=c;}}if(c!=125){b=new BT;i=a.hW;c=a.hi;b.g9=1;b.g$=1;b.hA=(-1);b.hY=A(59);b.hU=i;b.hA=c;E(b);}}c=b.g6;if(!c){b=new BT;i=a.hW;c=a.hi;b.g9=1;b.g$=1;b.hA=(-1);b.hY=A(59);b.hU=i;b.hA=c;E(b);}h=new H;d=b.g8;g=d.data.length;if(c>=0&&c<=(g-0|0)){h.g7=L(d.data,0,c);if(h.g7.length==1){b=new K;b.g8=G(16);F(b,b.g6,A(154));F(b,b.g6,h);h=new H;d=b.g8;e=d.data;f=b.g6;g=e.length;if(f>=0&&f<=(g-0|0)){h.g7=L(d.data,0,f);return h;}b=new I;b.g9
=1;b.g$=1;E(b);}b:{c:{if(h.g7.length>3){if(h===A(154)?1:Jn(h,A(154),0))break c;if(h===A(155)?1:Jn(h,A(155),0))break c;}break b;}h=Cb(h,2,h.g7.length);}return h;}b=new I;b.g9=1;b.g$=1;E(b);},
AIl=(a,b)=>{let c,d,e,f,g,h,i,$$je;c=new K;c.g8=G(4);d=(-1);e=2147483647;a:{while(true){f=a.hi;g=a.hX.data;if(f>=g.length)break a;a.hO=f;if(a.hR&4)BW(a);else a.hi=f+1|0;b=g[a.hO];if(b==125)break a;if(b==44&&d<0)try{d=HU(Fr(c),10);AIH(c,0,T7(c));continue;}catch($$e){$$je=BP($$e);if($$je instanceof B0){break;}else{throw $$e;}}h=b&65535;f=c.g6;Bn(c,f,f+1|0);c.g8.data[f]=h;}c=new BT;i=a.hW;b=a.hi;c.g9=1;c.g$=1;c.hA=(-1);c.hY=A(59);c.hU=i;c.hA=b;E(c);}if(b!=125){c=new BT;i=a.hW;b=a.hi;c.g9=1;c.g$=1;c.hA=(-1);c.hY
=A(59);c.hU=i;c.hA=b;E(c);}if(c.g6>0)b:{try{e=HU(Fr(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=BP($$e);if($$je instanceof B0){}else{throw $$e;}}c=new BT;i=a.hW;b=a.hi;c.g9=1;c.g$=1;c.hA=(-1);c.hY=A(59);c.hU=i;c.hA=b;E(c);}else if(d<0){c=new BT;i=a.hW;b=a.hi;c.g9=1;c.g$=1;c.hA=(-1);c.hY=A(59);c.hU=i;c.hA=b;E(c);}if((d|e|(e-d|0))<0){c=new BT;i=a.hW;b=a.hi;c.g9=1;c.g$=1;c.hA=(-1);c.hY=A(59);c.hU=i;c.hA=b;E(c);}f=a.hi;g=a.hX.data;h=f>=g.length?42:g[f];c:{switch(h){case 43:a.hm=(-2147483525);a.hO=f;if(a.hR
&4)BW(a);else a.hi=f+1|0;break c;case 63:a.hm=(-1073741701);a.hO=f;if(a.hR&4)BW(a);else a.hi=f+1|0;break c;default:}a.hm=(-536870789);}c=new KP;c.j2=d;c.j0=e;return c;},
Y1=b=>{return b<0?0:1;},
Me=(a,b)=>{let c,d,e,f,g,h,i,j,$$je;c=new K;c.g8=G(b);d=a.hX.data.length-2|0;e=0;while(true){f=B4(e,b);if(f>=0)break;g=a.hi;if(g>=d)break;h=a.hX;a.hO=g;if(a.hR&4)BW(a);else a.hi=g+1|0;g=h.data[a.hO];i=c.g6;Bn(c,i,i+1|0);c.g8.data[i]=g;e=e+1|0;}if(!f)a:{try{b=HU(Fr(c),16);}catch($$e){$$je=BP($$e);if($$je instanceof B0){break a;}else{throw $$e;}}return b;}c=new BT;j=a.hW;b=a.hi;c.g9=1;c.g$=1;c.hA=(-1);c.hY=A(59);c.hU=j;c.hA=b;E(c);},
ADK=a=>{let b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.hX.data;e=d.length-2|0;f=LU(d[a.hi]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.hi;a.hO=g;if(a.hR&4)BW(a);else a.hi=g+1|0;a:{while(true){if(c>=b)break a;h=a.hi;if(h>=e)break a;i=LU(a.hX.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.hi;a.hO=g;if(a.hR&4)BW(a);else a.hi=g+1|0;c=c+1|0;}}return f;}j=new BT;k=a.hW;b=a.hi;j.g9=1;j.g$=1;j.hA=(-1);j.hY=A(59);j.hU=k;j.hA=b;E(j);},
AJ$=a=>{let b,c,d,e,f,g,h;b=1;c=a.hR;a:while(true){d=a.hi;e=a.hX.data;if(d>=e.length){f=new BT;g=a.hW;f.g9=1;f.g$=1;f.hA=(-1);f.hY=A(59);f.hU=g;f.hA=d;E(f);}b:{c:{switch(e[d]){case 41:a.hO=d;if(a.hR&4)BW(a);else a.hi=d+1|0;return c|256;case 45:if(!b){h=new BT;g=a.hW;h.g9=1;h.g$=1;h.hA=(-1);h.hY=A(59);h.hU=g;h.hA=d;E(h);}b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c
=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}a.hO=d;if(a.hR&4)BW(a);else a.hi=d+1|0;}a.hO=d;if(a.hR&4)BW(a);else a.hi=d+1|0;return c;},
BW=a=>{let b,c,d,e;b=a.hX.data.length-2|0;a.hi=a.hi+1|0;a:while(true){c=a.hi;if(c<b){b:{c=a.hX.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break b;default:c:{switch(B$(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break b;}c=1;}if(c){a.hi=a.hi+1|0;continue;}}c=a.hi;if(c>=b)break;d=a.hX.data;if(d[c]!=35)break;a.hi=c+1|0;while(true){e=a.hi;if(e>=b)continue a;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.hi
=e+1|0;}}return c;},
V9=b=>{let c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?Gk([d,e]):Gk([d,e,4519+f|0]);}return null;},
AEA=b=>{return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);},
JD=a=>{let b,c,d,e,f;b=a.hX;c=a.hi;a.hO=c;if(a.hR&4)BW(a);else a.hi=c+1|0;b=b.data;d=a.hO;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.hX.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.hi;a.hO=d;if(a.hR&4)BW(a);else a.hi=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;};
function BT(){let a=this;Bs.call(a);a.hY=null;a.hU=null;a.hA=0;}
let AJj=a=>{let b,c,d,e,f,g,h,i,j,k;b=A(59);c=a.hA;if(c>=1){d=G(c);e=d.data;c=0;f=e.length;if(c>f){b=new Bs;b.g9=1;b.g$=1;E(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new H;b.g7=L(d.data,0,f);}a:{h=a.hY;i=a.hU;if(i!==null&&i.g7.length){j=a.hA;i=a.hU;k=new K;k.g8=G(16);J(k,k.g6,j,10);F(k,k.g6,A(118));j=k.g6;if(i===null)i=A(2);F(k,j,i);F(k,k.g6,A(118));F(k,k.g6,b);b=new H;d=k.g8;e=d.data;c=k.g6;f=e.length;if(c>=0&&c<=(f-0|0)){b.g7=L(d.data,0,c);break a;}b=new I;b.g9=1;b.g$=1;Bl(b);E(b);}b=A(59);}i=new K;i.g8=G(16);j
=i.g6;if(h===null)h=A(2);F(i,j,h);F(i,i.g6,b);b=new H;d=i.g8;e=d.data;c=i.g6;f=e.length;if(c>=0&&c<=(f-0|0)){b.g7=L(d.data,0,c);return b;}b=new I;b.g9=1;b.g$=1;Bl(b);E(b);};
let TQ=D();
let AEn=(b,c,d,e)=>{let f,g,h,i,j;if(c>d){f=new Bs;f.g9=1;f.g$=1;E(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;},
AFJ=(b,c,d,e)=>{let f,g,h,i;if(c>d){f=new Bs;f.g9=1;f.g$=1;E(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=B4(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;},
PQ=(b,c)=>{let d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;a:{while(true){if(e>=d){e=(-1);break a;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;};
let HW=D(0);
let IW=D();
let W2=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.data;d=a.hI;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new Ca;b.hF=f;c=b;f.classObject=c;}}b=DS(b);if(b===null){b=new CU;b.g9=1;b.g$=1;E(b);}if(b===Bk(CQ)){b=new Bs;b.g9=1;b.g$=1;E(b);}if(d<0){b=new DK;b.g9=1;b.g$=1;E(b);}b=D4(b.hF,d);}e=0;g=0;h=a.iD;i=a.hI;d=B4(h,h);a:{while(true){j=B4(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new JR;b.g9=1;b.g$=1;E(b);}k=g+1|0;if(g<0)break a;if(j>=0)break a;b.data[e]
=a.h_.data[g];e=h;g=k;}return b;}b=new I;b.g9=1;b.g$=1;E(b);};
let NH=D(0);
let KE=D(0);
function HY(){IW.call(this);this.iD=0;}
let OT=D(0);
function HV(){let a=this;HY.call(a);a.h_=null;a.hI=0;}
let Fn=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.h_;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new Ca;i.hF=h;j=i;h.classObject=j;}}h=DS(i);if(h===null){i=new CU;i.g9=1;i.g$=1;E(i);}if(h===Bk(CQ)){i=new Bs;i.g9=1;i.g$=1;E(i);}if(f<0){i=new DK;i.g9=1;i.g$=1;E(i);}j=D4(h.hF,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.h_=j;}},
ZW=(a,b,c)=>{let d,e,f;if(b>=0){d=a.hI;if(b<=d){Fn(a,d+1|0);d=a.hI;e=d;while(e>b){f=a.h_.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.h_.data[b]=c;a.hI=d+1|0;a.iD=a.iD+1|0;return;}}c=new I;c.g9=1;c.g$=1;E(c);},
Pz=(a,b)=>{let c,d,e,f;if(b>=0){c=a.hI;if(b<c){d=a.h_.data;e=d[b];c=c-1|0;a.hI=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.iD=a.iD+1|0;return e;}}e=new I;e.g9=1;e.g$=1;E(e);};
let ND=D(CA);
let SD=(a,b,c,d)=>{let e,f;e=a.ie;f=d.hQ.data;f[e]=b-f[e]|0;return a.g_.ed(b,c,d);},
AF9=(a,b)=>{return 0;};
let Q2=D(CA);
let Vy=(a,b,c,d)=>{return b;};
let Mg=D(CA);
let UB=(a,b,c,d)=>{let e;e=a.ie;if(d.hQ.data[e]!=b)b=(-1);return b;};
function Oa(){CA.call(this);this.oN=0;}
let SZ=(a,b,c,d)=>{let e,f;e=a.ie;f=d.hQ.data;f[e]=b-f[e]|0;a.oN=b;return b;},
AEz=(a,b)=>{return 0;};
let EW=D(CA);
let AIr=(a,b,c,d)=>{if(d.lT!=1&&b!=d.hB)return (-1);d.j1=1;d.ib.data[1]=b;return b;};
function B2(){BO.call(this);this.hC=0;}
let AKd=(a,b,c,d)=>{let e;if((b+a.ev()|0)>d.hB){d.iC=1;return (-1);}e=a.ew(b,c);if(e<0)return (-1);return a.g_.ed(b+e|0,c,d);},
AHc=a=>{return a.hC;},
Z4=(a,b)=>{return 1;};
let D2=D(B2);
let AGt=(a,b,c)=>{return 0;},
Xl=(a,b,c,d)=>{let e,f,g;e=d.hB;f=d.iG;a:{b:{while(true){g=B4(b,e);if(g>0)return (-1);if(g<0){if(b<0)break b;if(b>=c.g7.length)break b;if(((c.g7.charCodeAt(b)&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break a;if(g>=c.g7.length)break a;if((c.g7.charCodeAt(g)&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.g_.ed(b,c,d)>=0)break;b=b+1|0;}return b;}c=new Q;c.g9=1;c.g$=1;E(c);}c=new Q;c.g9=1;c.g$=1;E(c);},
Vi=(a,b,c,d,e)=>{let f,g,h;f=e.hB;g=e.iG;a:{b:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break b;if(c>=d.g7.length)break b;if(((d.g7.charCodeAt(c)&64512)!=56320?0:1)&&c>g){h=c-1|0;if(h<0)break a;if(h>=d.g7.length)break a;if((d.g7.charCodeAt(h)&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.g_.ed(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new Q;d.g9=1;d.g$=1;E(d);}d=new Q;d.g9=1;d.g$=1;E(d);},
SQ=(a,b)=>{return 0;};
function BU(){let a=this;BO.call(a);a.h0=null;a.iA=null;a.hT=0;}
let YG=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.h0;if(e===null)return (-1);f=a.hT;g=d.ib.data;h=f*2|0;i=g[h];g[h]=b;f=e.hI;j=0;a:{while(true){if(j>=f){b=a.hT;d.ib.data[b*2|0]=i;return (-1);}e=a.h0;if(j<0)break a;if(j>=e.hI)break a;h=e.h_.data[j].ed(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new I;c.g9=1;c.g$=1;E(c);},
AEr=(a,b)=>{a.iA.g_=b;},
ABs=(a,b)=>{let c,d,e,f,g;a:{b:{c=a.h0;if(c!==null){d=0;e=c.iD;f=c.hI;while(true){if(!(d>=f?0:1))break b;if(e<c.iD){b=new JR;b.g9=1;b.g$=1;E(b);}g=d+1|0;if(d<0)break a;if(d>=c.hI)break a;if(c.h_.data[d].dT(b))break;d=g;}return 1;}}return 0;}b=new I;b.g9=1;b.g$=1;E(b);},
AFf=(a,b)=>{let c,d,e;c=a.hT;d=b.ib.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;},
Vd=a=>{let b,c,d,e;a.is=1;b=a.iA;if(b!==null&&!b.is)Ga(b);a:{b:{b=a.h0;if(b!==null){c=b.hI;d=0;while(true){if(d>=c)break b;b=a.h0;if(d<0)break a;if(d>=b.hI)break a;b=b.h_.data[d];e=b.ee();if(e===null)e=b;else{b.is=1;Pz(a.h0,d);ZW(a.h0,d,e);}if(!e.is)e.dz();d=d+1|0;}}}if(a.g_!==null)Ga(a);return;}b=new I;b.g9=1;b.g$=1;E(b);};
let Hm=D(BU);
let AD7=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.hT;f=d.hQ.data;g=f[e];f[e]=b;h=a.h0.hI;e=0;a:{while(true){if(e>=h){b=a.hT;d.hQ.data[b]=g;return (-1);}i=a.h0;if(e<0)break a;if(e>=i.hI)break a;j=i.h_.data[e].ed(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new I;c.g9=1;c.g$=1;E(c);},
AFK=(a,b)=>{let c;c=a.hT;return !b.hQ.data[c]?0:1;};
let Dk=D(Hm);
let Wh=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.hT;f=d.hQ.data;g=f[e];f[e]=b;h=a.h0.hI;i=0;a:{while(i<h){j=a.h0;if(i<0)break a;if(i>=j.hI)break a;if(j.h_.data[i].ed(b,c,d)>=0)return a.g_.ed(a.iA.oN,c,d);i=i+1|0;}b=a.hT;d.hQ.data[b]=g;return (-1);}c=new I;c.g9=1;c.g$=1;E(c);},
AFn=(a,b)=>{a.g_=b;};
let Ku=D(Dk);
let AEj=(a,b,c,d)=>{let e,f,g;e=a.h0.hI;f=0;a:{while(f<e){g=a.h0;if(f<0)break a;if(f>=g.hI)break a;if(g.h_.data[f].ed(b,c,d)>=0)return a.g_.ed(b,c,d);f=f+1|0;}return (-1);}c=new I;c.g9=1;c.g$=1;E(c);},
AH3=(a,b)=>{return 0;};
let P9=D(Dk);
let Ua=(a,b,c,d)=>{let e,f,g;e=a.h0.hI;f=0;a:{while(true){if(f>=e)return a.g_.ed(b,c,d);g=a.h0;if(f<0)break a;if(f>=g.hI)break a;if(g.h_.data[f].ed(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new I;c.g9=1;c.g$=1;E(c);},
AHq=(a,b)=>{return 0;};
let Ne=D(Dk);
let U8=(a,b,c,d)=>{let e,f,g,h,i;e=a.h0.hI;f=d.mt?0:d.iG;a:{b:{g=a.g_.ed(b,c,d);if(g>=0){h=a.hT;d.hQ.data[h]=b;h=0;while(true){if(h>=e)break b;i=a.h0;if(h<0)break a;if(h>=i.hI)break a;if(i.h_.data[h].ey(f,b,c,d)>=0){b=a.hT;d.hQ.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new I;c.g9=1;c.g$=1;E(c);},
AKJ=(a,b)=>{return 0;};
let Oq=D(Dk);
let RT=(a,b,c,d)=>{let e,f,g;e=a.h0.hI;f=a.hT;d.hQ.data[f]=b;f=0;a:{while(true){if(f>=e)return a.g_.ed(b,c,d);g=a.h0;if(f<0)break a;if(f>=g.hI)break a;if(g.h_.data[f].ey(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new I;c.g9=1;c.g$=1;E(c);},
AFX=(a,b)=>{return 0;};
function EP(){BU.call(this);this.iJ=null;}
let Sm=(a,b,c,d)=>{let e,f,g;e=a.hT;f=d.ib.data;e=e*2|0;g=f[e];f[e]=b;e=a.iJ.ed(b,c,d);if(e>=0)return e;e=a.hT;d.ib.data[e*2|0]=g;return (-1);},
ABP=(a,b,c,d)=>{let e;e=a.iJ.d7(b,c,d);if(e>=0){b=a.hT;d.ib.data[b*2|0]=e;}return e;},
AGc=(a,b,c,d,e)=>{let f;f=a.iJ.ey(b,c,d,e);if(f>=0){b=a.hT;e.ib.data[b*2|0]=f;}return f;},
ABi=(a,b)=>{return a.iJ.dT(b);},
AEt=a=>{let b,c,d,e,f;b=new KS;c=a.iJ;d=a.iA;e=M;M=e+1|0;f=new T;f.g8=G(20);b.hh=(J(f,f.g6,e,10)).bj();b.iJ=c;b.iA=d;b.hT=d.ie;a.g_=b;return b;},
AJx=a=>{let b;a.is=1;b=a.iA;if(b!==null&&!b.is)Ga(b);b=a.iJ;if(b!==null&&!b.is){b=b.ee();if(b!==null){a.iJ.is=1;a.iJ=b;}a.iJ.dz();}};
let AC1=D();
let GZ=b=>{if(b===null||b.constructor.$meta.item==='undefined'){E(AKZ());}return b.data.length;},
D4=(b,c)=>{if(b.$meta.primitive){switch(b){};}return R(b,c);};
let Hg=D(BA);
let F0=D();
function Bc(){let a=this;F0.call(a);a.hx=0;a.iq=0;a.hj=null;a.mT=null;a.nc=null;a.hM=0;}
let Gw=null;
let Ud=a=>{return null;},
Th=a=>{return a.hj;},
ACa=a=>{return !a.iq?(F$(a.hj,0)>=2048?0:1):AEQ(a.hj,0)>=2048?0:1;},
ALn=a=>{return a.hM;},
AG4=a=>{return a;},
TA=a=>{let b,c;if(a.nc===null){b=a.eB();c=new Qg;c.so=a;c.oV=b;b=new Ba;b.hg=S(64);c.hj=b;a.nc=c;DH(c,a.iq);}return a.nc;},
Gj=a=>{let b,c;if(a.mT===null){b=a.eB();c=new Qf;c.sb=a;c.qu=b;c.qI=a;b=new Ba;b.hg=S(64);c.hj=b;a.mT=c;DH(c,a.hx);a.mT.hM=a.hM;}return a.mT;},
AJl=a=>{return 0;},
DH=(a,b)=>{let c;c=a.hx;if(c^b){a.hx=c?0:1;a.iq=a.iq?0:1;}if(!a.hM)a.hM=1;return a;},
ALf=a=>{return a.hx;},
AA3=(b,c)=>{b=QD(Gw,b);if(!c&&b.jG===null)b.jG=b.el();else if(c&&b.kU===null)b.kU=DH(b.el(),1);return c?b.kU:b.jG;},
AK5=()=>{Gw=new JT;};
function HD(){let a=this;BA.call(a);a.sz=null;a.sr=null;}
function B7(){let a=this;Bc.call(a);a.my=0;a.m9=0;a.k8=0;a.nJ=0;a.jl=0;a.iW=0;a.hn=null;a.hN=null;}
let Cg=(a,b)=>{let c;a:{if(a.my){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.jl){Kg(a.hn,EE(b&65535));break a;}Jr(a.hn,EE(b&65535));break a;}if(a.m9&&b>128){a.k8=1;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b);if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}b=B1(BD,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.nJ)Kg(a.hj,b-55296|0);else Jr(a.hj,b-55296|0);}if(a.jl)Kg(a.hn,b);else Jr(a.hn,
b);if(!a.hM&&(b>=65536&&b<=1114111?1:0))a.hM=1;return a;},
AKD=(a,b)=>{let c,d,e;if(!a.hM&&b.hM)a.hM=1;if(a.nJ){if(!b.iq)Fc(a.hj,b.eB());else C2(a.hj,b.eB());}else if(!b.iq)E$(a.hj,b.eB());else{ES(a.hj,b.eB());C2(a.hj,b.eB());a.iq=a.iq?0:1;a.nJ=1;}if(!a.iW&&b.eI()!==null){if(a.jl){if(!b.hx)Fc(a.hn,b.eI());else C2(a.hn,b.eI());}else if(!b.hx)E$(a.hn,b.eI());else{ES(a.hn,b.eI());C2(a.hn,b.eI());a.hx=a.hx?0:1;a.jl=1;}}else{c=a.hx;d=a.hN;if(d!==null){if(!c){e=new LH;e.ro=a;e.qO=c;e.qD=d;e.qx=b;b=new Ba;b.hg=S(64);e.hj=b;a.hN=e;}else{e=new LI;e.sF=a;e.pE=c;e.pz=d;e.pr=b;b
=new Ba;b.hg=S(64);e.hj=b;a.hN=e;}}else{if(c&&!a.jl&&(a.hn.h3?0:1)){d=new LD;d.r2=a;d.pB=b;b=new Ba;b.hg=S(64);d.hj=b;a.hN=d;}else if(!c){d=new LB;d.nB=a;d.m0=c;d.o4=b;b=new Ba;b.hg=S(64);d.hj=b;a.hN=d;}else{d=new LC;d.n_=a;d.m5=c;d.qz=b;b=new Ba;b.hg=S(64);d.hj=b;a.hN=d;}a.iW=1;}}return a;},
By=(a,b,c)=>{let d;if(b>c){d=new Bs;d.g9=1;d.g$=1;E(d);}a:{b:{if(!a.my){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Cg(a,b);b=b+1|0;}}if(a.jl)SB(a.hn,b,c+1|0);else GB(a.hn,b,c+1|0);}return a;},
RM=(a,b)=>{let c,d,e,f;if(!a.hM&&b.hM)a.hM=1;if(b.k8)a.k8=1;c=a.iq;if(!(c^b.iq)){if(!c)E$(a.hj,b.hj);else C2(a.hj,b.hj);}else if(c)Fc(a.hj,b.hj);else{ES(a.hj,b.hj);C2(a.hj,b.hj);a.iq=1;}a:{if(!a.iW){d=b.iW;if((!d?b.hn:null)!==null){c=a.hx;if(!(c^b.hx)){if(!c){E$(a.hn,!d?b.hn:null);break a;}C2(a.hn,!d?b.hn:null);break a;}if(c){Fc(a.hn,!d?b.hn:null);break a;}ES(a.hn,!d?b.hn:null);C2(a.hn,!b.iW?b.hn:null);a.hx=1;break a;}}c=a.hx;e=a.hN;if(e!==null){if(!c){f=new Lw;f.rb=a;f.qj=c;f.qy=e;f.qK=b;b=new Ba;b.hg=S(64);f.hj
=b;a.hN=f;}else{f=new LY;f.ry=a;f.qJ=c;f.oL=e;f.oP=b;b=new Ba;b.hg=S(64);f.hj=b;a.hN=f;}}else{if(!a.jl&&(a.hn.h3?0:1)){if(!c){e=new LF;e.sH=a;e.pn=b;b=new Ba;b.hg=S(64);e.hj=b;a.hN=e;}else{e=new LG;e.rC=a;e.qG=b;b=new Ba;b.hg=S(64);e.hj=b;a.hN=e;}}else if(!c){e=new LJ;e.ql=a;e.pN=b;e.pA=c;b=new Ba;b.hg=S(64);e.hj=b;a.hN=e;}else{e=new LK;e.pT=a;e.p1=b;e.p$=c;b=new Ba;b.hg=S(64);e.hj=b;a.hN=e;}a.iW=1;}}},
Qw=(a,b)=>{let c,d,e,f;if(!a.hM&&b.hM)a.hM=1;if(b.k8)a.k8=1;c=a.iq;if(!(c^b.iq)){if(!c)C2(a.hj,b.hj);else E$(a.hj,b.hj);}else if(!c)Fc(a.hj,b.hj);else{ES(a.hj,b.hj);C2(a.hj,b.hj);a.iq=0;}a:{if(!a.iW){d=b.iW;if((!d?b.hn:null)!==null){c=a.hx;if(!(c^b.hx)){if(!c){C2(a.hn,!d?b.hn:null);break a;}E$(a.hn,!d?b.hn:null);break a;}if(!c){Fc(a.hn,!d?b.hn:null);break a;}ES(a.hn,!d?b.hn:null);C2(a.hn,!b.iW?b.hn:null);a.hx=0;break a;}}c=a.hx;e=a.hN;if(e!==null){if(!c){f=new Ly;f.rn=a;f.qm=c;f.oU=e;f.pD=b;b=new Ba;b.hg=S(64);f.hj
=b;a.hN=f;}else{f=new Lz;f.rI=a;f.p_=c;f.oG=e;f.qi=b;b=new Ba;b.hg=S(64);f.hj=b;a.hN=f;}}else{if(!a.jl&&(a.hn.h3?0:1)){if(!c){e=new Lu;e.rF=a;e.pg=b;b=new Ba;b.hg=S(64);e.hj=b;a.hN=e;}else{e=new Lv;e.sC=a;e.ph=b;b=new Ba;b.hg=S(64);e.hj=b;a.hN=e;}}else if(!c){e=new LA;e.qY=a;e.qM=b;e.pY=c;b=new Ba;b.hg=S(64);e.hj=b;a.hN=e;}else{e=new Lt;e.pX=a;e.qf=b;e.pF=c;b=new Ba;b.hg=S(64);e.hj=b;a.hN=e;}a.iW=1;}}},
Vn=(a,b)=>{let c;c=a.hN;if(c!==null)return a.hx^c.eL(b);return a.hx^B6(a.hn,b);},
AKE=a=>{if(!a.iW)return a.hn;return null;},
W_=a=>{return a.hj;},
AHP=a=>{let b,c;if(a.hN!==null)return a;b=!a.iW?a.hn:null;c=new Lx;c.q8=a;c.me=b;b=new Ba;b.hg=S(64);c.hj=b;return DH(c,a.hx);},
AC$=a=>{let b,c,d,e,f,g,h,i,j,k;b=new K;b.g8=G(16);c=F$(a.hn,0);while(c>=0){d=(EN(c)).data;e=0;f=d.length;g=b.g6;Bn(b,g,g+f|0);f=f+e|0;while(e<f){h=b.g8.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.g6;Bn(b,g,g+1|0);b.g8.data[g]=124;c=F$(a.hn,c+1|0);}e=b.g6;if(e>0)Qp(b,e-1|0);k=new H;d=b.g8;h=d.data;e=b.g6;g=h.length;if(e>=0&&e<=(g-0|0)){k.g7=L(d.data,0,e);return k;}b=new I;b.g9=1;b.g$=1;Bl(b);E(b);},
Xx=a=>{return a.k8;};
function Dy(){BO.call(this);this.hz=null;}
let AMf=a=>{return a.hz;},
AGe=(a,b)=>{return !a.hz.dT(b)&&!a.g_.dT(b)?0:1;},
AIn=(a,b)=>{return 1;},
ACo=a=>{let b;a.is=1;b=a.g_;if(b!==null&&!b.is){b=b.ee();if(b!==null){a.g_.is=1;a.g_=b;}a.g_.dz();}b=a.hz;if(b!==null){if(!b.is){b=b.ee();if(b!==null){a.hz.is=1;a.hz=b;}a.hz.dz();}else if(b instanceof EP&&b.iA.nk)a.hz=b.g_;}};
function CJ(){Dy.call(this);this.hJ=null;}
let RV=(a,b,c,d)=>{let e,f;e=0;a:{while((b+a.hJ.ev()|0)<=d.hB){f=a.hJ.ew(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.g_.ed(b,c,d);if(f>=0)break;b=b-a.hJ.ev()|0;e=e+(-1)|0;}return f;};
function D$(){CJ.call(this);this.lc=null;}
let TK=(a,b,c,d)=>{let e,f,g,h,i;e=a.lc;f=e.j2;g=e.j0;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.hJ.ev()|0)>d.hB)break a;i=a.hJ.ew(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.g_.ed(b,c,d);if(i>=0)break;b=b-a.hJ.ev()|0;h=h+(-1)|0;}return i;}if((b+a.hJ.ev()|0)>d.hB){d.iC=1;return (-1);}i=a.hJ.ew(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);};
let CL=D(Dy);
let Sj=(a,b,c,d)=>{let e;if(!a.hz.eO(d))return a.g_.ed(b,c,d);e=a.hz.ed(b,c,d);if(e>=0)return e;return a.g_.ed(b,c,d);};
let D8=D(CJ);
let ABW=(a,b,c,d)=>{let e;e=a.hz.ed(b,c,d);if(e<0)e=a.g_.ed(b,c,d);return e;},
AKL=(a,b)=>{a.g_=b;a.hz.dD(b);};
let Qj=D(CJ);
let AJ0=(a,b,c,d)=>{while((b+a.hJ.ev()|0)<=d.hB&&a.hJ.ew(b,c)>0){b=b+a.hJ.ev()|0;}return a.g_.ed(b,c,d);},
AC0=(a,b,c,d)=>{let e,f,g;e=a.g_.d7(b,c,d);if(e<0)return (-1);f=e-a.hJ.ev()|0;while(f>=b&&a.hJ.ew(f,c)>0){g=f-a.hJ.ev()|0;e=f;f=g;}return e;};
let JT=D();
let SF=null,ZS=null,OY=null;
let QD=(a,b)=>{let c,d,e,f,g;c=0;while(true){d=OY.data;if(c>=d.length){e=new HD;e.g9=1;e.g$=1;e.ha=A(59);e.sz=A(59);e.sr=b;E(e);}d=d[c].data;f=d[0];if(b===f)g=1;else if(!(f instanceof H))g=0;else{f=f;g=b.g7!==f.g7?0:1;}if(g)break;c=c+1|0;}return d[1];},
WG=()=>{let b,c,d,e,f,g;b=new GQ;SF=b;c=new Gu;ZS=c;d=R(ALt(C),194);e=d.data;e[0]=P(C,[A(156),new O7]);e[1]=P(C,[A(157),new PG]);e[2]=P(C,[A(158),new PK]);e[3]=P(C,[A(159),new GM]);e[4]=P(C,[A(160),c]);e[5]=P(C,[A(161),new G1]);e[6]=P(C,[A(162),new Rb]);e[7]=P(C,[A(163),new Ht]);e[8]=P(C,[A(164),new Nx]);e[9]=P(C,[A(165),new NS]);e[10]=P(C,[A(166),new Ma]);e[11]=P(C,[A(167),new L2]);e[12]=P(C,[A(168),new PO]);e[13]=P(C,[A(169),new Ri]);e[14]=P(C,[A(170),new Pj]);e[15]=P(C,[A(171),new O1]);e[16]=P(C,[A(172),
new P8]);e[17]=P(C,[A(173),new K_]);e[18]=P(C,[A(174),new KQ]);e[19]=P(C,[A(175),new Pq]);e[20]=P(C,[A(176),new Py]);e[21]=P(C,[A(177),new Mu]);e[22]=P(C,[A(178),new NX]);e[23]=P(C,[A(179),new QW]);e[24]=P(C,[A(180),new Pw]);e[25]=P(C,[A(181),new M4]);e[26]=P(C,[A(182),new Mt]);e[27]=P(C,[A(183),new Re]);e[28]=P(C,[A(184),b]);e[29]=P(C,[A(185),new Gf]);e[30]=P(C,[A(186),new Qa]);e[31]=P(C,[A(187),b]);e[32]=P(C,[A(188),new NA]);e[33]=P(C,[A(189),c]);e[34]=P(C,[A(190),new Mp]);f=R(C,2);g=f.data;g[0]=A(191);b=
new Bg;b.ho=0;b.hp=127;g[1]=b;e[35]=f;f=R(C,2);g=f.data;g[0]=A(192);b=new Bg;b.ho=128;b.hp=255;g[1]=b;e[36]=f;f=R(C,2);g=f.data;g[0]=A(193);b=new Bg;b.ho=256;b.hp=383;g[1]=b;e[37]=f;f=R(C,2);g=f.data;g[0]=A(194);b=new Bg;b.ho=384;b.hp=591;g[1]=b;e[38]=f;f=R(C,2);g=f.data;g[0]=A(195);b=new Bg;b.ho=592;b.hp=687;g[1]=b;e[39]=f;f=R(C,2);g=f.data;g[0]=A(196);b=new Bg;b.ho=688;b.hp=767;g[1]=b;e[40]=f;f=R(C,2);g=f.data;g[0]=A(197);b=new Bg;b.ho=768;b.hp=879;g[1]=b;e[41]=f;f=R(C,2);g=f.data;g[0]=A(198);b=new Bg;b.ho
=880;b.hp=1023;g[1]=b;e[42]=f;f=R(C,2);g=f.data;g[0]=A(199);b=new Bg;b.ho=1024;b.hp=1279;g[1]=b;e[43]=f;f=R(C,2);g=f.data;g[0]=A(200);b=new Bg;b.ho=1280;b.hp=1327;g[1]=b;e[44]=f;f=R(C,2);g=f.data;g[0]=A(201);b=new Bg;b.ho=1328;b.hp=1423;g[1]=b;e[45]=f;f=R(C,2);g=f.data;g[0]=A(202);b=new Bg;b.ho=1424;b.hp=1535;g[1]=b;e[46]=f;f=R(C,2);g=f.data;g[0]=A(203);b=new Bg;b.ho=1536;b.hp=1791;g[1]=b;e[47]=f;f=R(C,2);g=f.data;g[0]=A(204);b=new Bg;b.ho=1792;b.hp=1871;g[1]=b;e[48]=f;f=R(C,2);g=f.data;g[0]=A(205);b=new Bg;b.ho
=1872;b.hp=1919;g[1]=b;e[49]=f;f=R(C,2);g=f.data;g[0]=A(206);b=new Bg;b.ho=1920;b.hp=1983;g[1]=b;e[50]=f;f=R(C,2);g=f.data;g[0]=A(207);b=new Bg;b.ho=2304;b.hp=2431;g[1]=b;e[51]=f;f=R(C,2);g=f.data;g[0]=A(208);b=new Bg;b.ho=2432;b.hp=2559;g[1]=b;e[52]=f;f=R(C,2);g=f.data;g[0]=A(209);b=new Bg;b.ho=2560;b.hp=2687;g[1]=b;e[53]=f;f=R(C,2);g=f.data;g[0]=A(210);b=new Bg;b.ho=2688;b.hp=2815;g[1]=b;e[54]=f;f=R(C,2);g=f.data;g[0]=A(211);b=new Bg;b.ho=2816;b.hp=2943;g[1]=b;e[55]=f;f=R(C,2);g=f.data;g[0]=A(212);b=new Bg;b.ho
=2944;b.hp=3071;g[1]=b;e[56]=f;f=R(C,2);g=f.data;g[0]=A(213);b=new Bg;b.ho=3072;b.hp=3199;g[1]=b;e[57]=f;f=R(C,2);g=f.data;g[0]=A(214);b=new Bg;b.ho=3200;b.hp=3327;g[1]=b;e[58]=f;f=R(C,2);g=f.data;g[0]=A(215);b=new Bg;b.ho=3328;b.hp=3455;g[1]=b;e[59]=f;f=R(C,2);g=f.data;g[0]=A(216);b=new Bg;b.ho=3456;b.hp=3583;g[1]=b;e[60]=f;f=R(C,2);g=f.data;g[0]=A(217);b=new Bg;b.ho=3584;b.hp=3711;g[1]=b;e[61]=f;f=R(C,2);g=f.data;g[0]=A(218);b=new Bg;b.ho=3712;b.hp=3839;g[1]=b;e[62]=f;f=R(C,2);g=f.data;g[0]=A(219);b=new Bg;b.ho
=3840;b.hp=4095;g[1]=b;e[63]=f;f=R(C,2);g=f.data;g[0]=A(220);b=new Bg;b.ho=4096;b.hp=4255;g[1]=b;e[64]=f;f=R(C,2);g=f.data;g[0]=A(221);b=new Bg;b.ho=4256;b.hp=4351;g[1]=b;e[65]=f;f=R(C,2);g=f.data;g[0]=A(222);b=new Bg;b.ho=4352;b.hp=4607;g[1]=b;e[66]=f;f=R(C,2);g=f.data;g[0]=A(223);b=new Bg;b.ho=4608;b.hp=4991;g[1]=b;e[67]=f;f=R(C,2);g=f.data;g[0]=A(224);b=new Bg;b.ho=4992;b.hp=5023;g[1]=b;e[68]=f;f=R(C,2);g=f.data;g[0]=A(225);b=new Bg;b.ho=5024;b.hp=5119;g[1]=b;e[69]=f;f=R(C,2);g=f.data;g[0]=A(226);b=new Bg;b.ho
=5120;b.hp=5759;g[1]=b;e[70]=f;f=R(C,2);g=f.data;g[0]=A(227);b=new Bg;b.ho=5760;b.hp=5791;g[1]=b;e[71]=f;f=R(C,2);g=f.data;g[0]=A(228);b=new Bg;b.ho=5792;b.hp=5887;g[1]=b;e[72]=f;f=R(C,2);g=f.data;g[0]=A(229);b=new Bg;b.ho=5888;b.hp=5919;g[1]=b;e[73]=f;f=R(C,2);g=f.data;g[0]=A(230);b=new Bg;b.ho=5920;b.hp=5951;g[1]=b;e[74]=f;f=R(C,2);g=f.data;g[0]=A(231);b=new Bg;b.ho=5952;b.hp=5983;g[1]=b;e[75]=f;f=R(C,2);g=f.data;g[0]=A(232);b=new Bg;b.ho=5984;b.hp=6015;g[1]=b;e[76]=f;f=R(C,2);g=f.data;g[0]=A(233);b=new Bg;b.ho
=6016;b.hp=6143;g[1]=b;e[77]=f;f=R(C,2);g=f.data;g[0]=A(234);b=new Bg;b.ho=6144;b.hp=6319;g[1]=b;e[78]=f;f=R(C,2);g=f.data;g[0]=A(235);b=new Bg;b.ho=6400;b.hp=6479;g[1]=b;e[79]=f;f=R(C,2);g=f.data;g[0]=A(236);b=new Bg;b.ho=6480;b.hp=6527;g[1]=b;e[80]=f;f=R(C,2);g=f.data;g[0]=A(237);b=new Bg;b.ho=6528;b.hp=6623;g[1]=b;e[81]=f;f=R(C,2);g=f.data;g[0]=A(238);b=new Bg;b.ho=6624;b.hp=6655;g[1]=b;e[82]=f;f=R(C,2);g=f.data;g[0]=A(239);b=new Bg;b.ho=6656;b.hp=6687;g[1]=b;e[83]=f;f=R(C,2);g=f.data;g[0]=A(240);b=new Bg;b.ho
=7424;b.hp=7551;g[1]=b;e[84]=f;f=R(C,2);g=f.data;g[0]=A(241);b=new Bg;b.ho=7552;b.hp=7615;g[1]=b;e[85]=f;f=R(C,2);g=f.data;g[0]=A(242);b=new Bg;b.ho=7616;b.hp=7679;g[1]=b;e[86]=f;f=R(C,2);g=f.data;g[0]=A(243);b=new Bg;b.ho=7680;b.hp=7935;g[1]=b;e[87]=f;f=R(C,2);g=f.data;g[0]=A(244);b=new Bg;b.ho=7936;b.hp=8191;g[1]=b;e[88]=f;f=R(C,2);g=f.data;g[0]=A(245);b=new Bg;b.ho=8192;b.hp=8303;g[1]=b;e[89]=f;f=R(C,2);g=f.data;g[0]=A(246);b=new Bg;b.ho=8304;b.hp=8351;g[1]=b;e[90]=f;f=R(C,2);g=f.data;g[0]=A(247);b=new Bg;b.ho
=8352;b.hp=8399;g[1]=b;e[91]=f;f=R(C,2);g=f.data;g[0]=A(248);b=new Bg;b.ho=8400;b.hp=8447;g[1]=b;e[92]=f;f=R(C,2);g=f.data;g[0]=A(249);b=new Bg;b.ho=8448;b.hp=8527;g[1]=b;e[93]=f;f=R(C,2);g=f.data;g[0]=A(250);b=new Bg;b.ho=8528;b.hp=8591;g[1]=b;e[94]=f;f=R(C,2);g=f.data;g[0]=A(251);b=new Bg;b.ho=8592;b.hp=8703;g[1]=b;e[95]=f;f=R(C,2);g=f.data;g[0]=A(252);b=new Bg;b.ho=8704;b.hp=8959;g[1]=b;e[96]=f;f=R(C,2);g=f.data;g[0]=A(253);b=new Bg;b.ho=8960;b.hp=9215;g[1]=b;e[97]=f;f=R(C,2);g=f.data;g[0]=A(254);b=new Bg;b.ho
=9216;b.hp=9279;g[1]=b;e[98]=f;f=R(C,2);g=f.data;g[0]=A(255);b=new Bg;b.ho=9280;b.hp=9311;g[1]=b;e[99]=f;f=R(C,2);g=f.data;g[0]=A(256);b=new Bg;b.ho=9312;b.hp=9471;g[1]=b;e[100]=f;f=R(C,2);g=f.data;g[0]=A(257);b=new Bg;b.ho=9472;b.hp=9599;g[1]=b;e[101]=f;f=R(C,2);g=f.data;g[0]=A(258);b=new Bg;b.ho=9600;b.hp=9631;g[1]=b;e[102]=f;e[103]=P(C,[A(259),Bo(9632,9727)]);e[104]=P(C,[A(260),Bo(9728,9983)]);e[105]=P(C,[A(261),Bo(9984,10175)]);e[106]=P(C,[A(262),Bo(10176,10223)]);e[107]=P(C,[A(263),Bo(10224,10239)]);e[108]
=P(C,[A(264),Bo(10240,10495)]);e[109]=P(C,[A(265),Bo(10496,10623)]);e[110]=P(C,[A(266),Bo(10624,10751)]);e[111]=P(C,[A(267),Bo(10752,11007)]);e[112]=P(C,[A(268),Bo(11008,11263)]);e[113]=P(C,[A(269),Bo(11264,11359)]);e[114]=P(C,[A(270),Bo(11392,11519)]);e[115]=P(C,[A(271),Bo(11520,11567)]);e[116]=P(C,[A(272),Bo(11568,11647)]);e[117]=P(C,[A(273),Bo(11648,11743)]);e[118]=P(C,[A(274),Bo(11776,11903)]);e[119]=P(C,[A(275),Bo(11904,12031)]);e[120]=P(C,[A(276),Bo(12032,12255)]);e[121]=P(C,[A(277),Bo(12272,12287)]);e[122]
=P(C,[A(278),Bo(12288,12351)]);e[123]=P(C,[A(279),Bo(12352,12447)]);e[124]=P(C,[A(280),Bo(12448,12543)]);e[125]=P(C,[A(281),Bo(12544,12591)]);e[126]=P(C,[A(282),Bo(12592,12687)]);e[127]=P(C,[A(283),Bo(12688,12703)]);e[128]=P(C,[A(284),Bo(12704,12735)]);e[129]=P(C,[A(285),Bo(12736,12783)]);e[130]=P(C,[A(286),Bo(12784,12799)]);e[131]=P(C,[A(287),Bo(12800,13055)]);e[132]=P(C,[A(288),Bo(13056,13311)]);e[133]=P(C,[A(289),Bo(13312,19893)]);e[134]=P(C,[A(290),Bo(19904,19967)]);e[135]=P(C,[A(291),Bo(19968,40959)]);e[136]
=P(C,[A(292),Bo(40960,42127)]);e[137]=P(C,[A(293),Bo(42128,42191)]);e[138]=P(C,[A(294),Bo(42752,42783)]);e[139]=P(C,[A(295),Bo(43008,43055)]);e[140]=P(C,[A(296),Bo(44032,55203)]);e[141]=P(C,[A(297),Bo(55296,56191)]);e[142]=P(C,[A(298),Bo(56192,56319)]);e[143]=P(C,[A(299),Bo(56320,57343)]);e[144]=P(C,[A(300),Bo(57344,63743)]);e[145]=P(C,[A(301),Bo(63744,64255)]);e[146]=P(C,[A(302),Bo(64256,64335)]);e[147]=P(C,[A(303),Bo(64336,65023)]);e[148]=P(C,[A(304),Bo(65024,65039)]);e[149]=P(C,[A(305),Bo(65040,65055)]);e[150]
=P(C,[A(306),Bo(65056,65071)]);e[151]=P(C,[A(307),Bo(65072,65103)]);e[152]=P(C,[A(308),Bo(65104,65135)]);e[153]=P(C,[A(309),Bo(65136,65279)]);e[154]=P(C,[A(310),Bo(65280,65519)]);e[155]=P(C,[A(32),Bo(0,1114111)]);f=R(C,2);g=f.data;g[0]=A(311);b=new Ml;ACs(b);g[1]=b;e[156]=f;e[157]=P(C,[A(312),BQ(0,1)]);e[158]=P(C,[A(313),E9(62,1)]);e[159]=P(C,[A(314),BQ(1,1)]);e[160]=P(C,[A(315),BQ(2,1)]);e[161]=P(C,[A(316),BQ(3,0)]);e[162]=P(C,[A(317),BQ(4,0)]);e[163]=P(C,[A(318),BQ(5,1)]);e[164]=P(C,[A(319),E9(448,1)]);e[165]
=P(C,[A(320),BQ(6,1)]);e[166]=P(C,[A(321),BQ(7,0)]);e[167]=P(C,[A(322),BQ(8,1)]);e[168]=P(C,[A(323),E9(3584,1)]);e[169]=P(C,[A(324),BQ(9,1)]);e[170]=P(C,[A(325),BQ(10,1)]);e[171]=P(C,[A(326),BQ(11,1)]);e[172]=P(C,[A(327),E9(28672,0)]);e[173]=P(C,[A(328),BQ(12,0)]);e[174]=P(C,[A(329),BQ(13,0)]);e[175]=P(C,[A(330),BQ(14,0)]);e[176]=P(C,[A(331),ZG(983040,1,1)]);e[177]=P(C,[A(332),BQ(15,0)]);e[178]=P(C,[A(333),BQ(16,1)]);e[179]=P(C,[A(334),BQ(18,1)]);e[180]=P(C,[A(335),ABo(19,0,1)]);e[181]=P(C,[A(336),E9(1643118592,
1)]);e[182]=P(C,[A(337),BQ(20,0)]);e[183]=P(C,[A(338),BQ(21,0)]);e[184]=P(C,[A(339),BQ(22,0)]);e[185]=P(C,[A(340),BQ(23,0)]);e[186]=P(C,[A(341),BQ(24,1)]);e[187]=P(C,[A(342),E9(2113929216,1)]);e[188]=P(C,[A(343),BQ(25,1)]);e[189]=P(C,[A(344),BQ(26,0)]);e[190]=P(C,[A(345),BQ(27,0)]);e[191]=P(C,[A(346),BQ(28,1)]);e[192]=P(C,[A(347),BQ(29,0)]);e[193]=P(C,[A(348),BQ(30,0)]);OY=d;};
function Bh(){let a=this;C.call(a);a.jG=null;a.kU=null;}
let ACs=a=>{return;},
ALT=(a,b)=>{if(!b&&a.jG===null)a.jG=a.el();else if(b&&a.kU===null)a.kU=DH(a.el(),1);if(b)return a.kU;return a.jG;};
function KP(){let a=this;F0.call(a);a.j2=0;a.j0=0;}
let ADh=a=>{let b,c,d,e,f,g,h;b=a.j2;c=a.j0;if(c==2147483647)d=A(59);else{d=new T;d.g8=G(20);d=(J(d,d.g6,c,10)).bj();}e=new K;e.g8=G(16);c=e.g6;Bn(e,c,c+1|0);e.g8.data[c]=123;J(e,e.g6,b,10);b=e.g6;Bn(e,b,b+1|0);e.g8.data[b]=44;f=e.g6;if(d===null)d=A(2);F(e,f,d);b=e.g6;Bn(e,b,b+1|0);g=e.g8;h=g.data;h[b]=125;d=new H;b=e.g6;c=h.length;if(b>=0&&b<=(c-0|0)){d.g7=L(g.data,0,b);return d;}d=new I;d.g9=1;d.g$=1;Bl(d);E(d);};
let Lm=D(BO);
let AAA=(a,b,c,d)=>{return b;},
AEq=(a,b)=>{return 0;};
function Ba(){let a=this;C.call(a);a.hg=null;a.h3=0;}
let Jr=(a,b)=>{let c,d,e;if(b<0){c=new I;c.g9=1;c.g$=1;E(c);}d=b/32|0;if(b>=a.h3){GX(a,d+1|0);a.h3=b+1|0;}e=a.hg.data;e[d]=e[d]|1<<(b%32|0);},
GB=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=B4(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.h3){GX(a,e+1|0);a.h3=c;}if(d==e){f=a.hg.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.hg.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new I;i.g9=1;i.g$=1;E(i);},
Kg=(a,b)=>{let c,d,e,f,g;if(b<0){c=new I;c.g9=1;c.g$=1;E(c);}d=b/32|0;e=a.hg.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.h3-1|0))F8(a);}},
SB=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0&&b<=c){d=a.h3;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.hg.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.hg.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}F8(a);return;}i=new I;i.g9=1;i.g$=1;E(i);},
B6=(a,b)=>{let c,d,e;if(b<0){c=new I;c.g9=1;c.g$=1;E(c);}d=b/32|0;e=a.hg.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;},
F$=(a,b)=>{let c,d,e,f,g;if(b<0){c=new I;c.g9=1;c.g$=1;E(c);}d=a.h3;if(b>=d)return (-1);e=b/32|0;f=a.hg.data;g=f[e]>>>(b%32|0)|0;if(g)return DX(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+DX(f[g])|0;g=g+1|0;}return (-1);},
AEQ=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new I;c.g9=1;c.g$=1;E(c);}d=a.h3;if(b>=d)return b;e=b/32|0;f=a.hg.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return DX(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+DX(f[h]^(-1))|0;h=h+1|0;}return d;},
GX=(a,b)=>{let c,d,e,f,g,h;c=a.hg.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=S(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.hg=g;},
F8=a=>{let b,c,d;b=(a.h3+31|0)/32|0;a.h3=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=K9(a.hg.data[c]);if(d<32)break;c=c+(-1)|0;a.h3=a.h3-32|0;}a.h3=a.h3-d|0;}},
GW=(a,b)=>{let c,d,e,f,g;c=a.hg.data;d=c.length;e=b.hg.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;},
C2=(a,b)=>{let c,d,e,f,g,h,i;c=a.hg.data;d=c.length;e=b.hg.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.h3;i=b.h3;if(h<i)i=h;a.h3=i;F8(a);},
Fc=(a,b)=>{let c,d,e,f,g;c=a.hg.data;d=c.length;e=b.hg.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}F8(a);},
E$=(a,b)=>{let c,d,e,f,g;c=a.h3;d=b.h3;if(c>d)d=c;a.h3=d;GX(a,(d+31|0)/32|0);e=a.hg.data;c=e.length;f=b.hg.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}},
ES=(a,b)=>{let c,d,e,f,g;c=a.h3;d=b.h3;if(c>d)d=c;a.h3=d;GX(a,(d+31|0)/32|0);e=a.hg.data;c=e.length;f=b.hg.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}F8(a);};
function Kz(){let a=this;BU.call(a);a.pi=null;a.q7=0;}
let Zi=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.iG;f=d.hB;g=b+1|0;f=B4(g,f);if(f>0){d.iC=1;return (-1);}if(b>=0&&b<c.g7.length){h=c.g7.charCodeAt(b);if(!a.pi.eL(h))return (-1);i=h&64512;j=i!=55296?0:1;a:{if(j){if(f>=0)break a;if(g>=0&&g<c.g7.length){if((c.g7.charCodeAt(g)&64512)!=56320?0:1)return (-1);break a;}c=new Q;c.g9=1;c.g$=1;E(c);}if((i!=56320?0:1)&&b>e){j=b-1|0;if(j>=0&&j<c.g7.length){if(!((c.g7.charCodeAt(j)&64512)!=55296?0:1))break a;return (-1);}c=new Q;c.g9=1;c.g$=1;E(c);}}return a.g_.ed(g,c,d);}c=new Q;c.g9
=1;c.g$=1;E(c);};
function FB(){let a=this;BU.call(a);a.le=null;a.k6=null;}
let TB=(a,b,c,d)=>{let e;e=a.le.ed(b,c,d);if(e<0)e=Zi(a.k6,b,c,d);if(e>=0)return e;return (-1);},
AD4=(a,b)=>{a.g_=b;a.k6.g_=b;a.le.dD(b);},
UH=(a,b)=>{return 1;},
Uc=(a,b)=>{return 1;};
function CS(){let a=this;BU.call(a);a.iR=null;a.mr=0;}
let W0=(a,b,c,d)=>{let e,f,g,h;a:{e=d.hB;if(b<e){f=b+1|0;if(b>=0&&b<c.g7.length){g=c.g7.charCodeAt(b);if(a.eL(g)){h=a.g_.ed(f,c,d);if(h>0)return h;}if(f>=e)break a;e=f+1|0;if(f>=0&&f<c.g7.length){f=c.g7.charCodeAt(f);b=(g&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.eL(((g&1023)<<10|f&1023)+65536|0))break a;else return a.g_.ed(e,c,d);}c=new Q;c.g9=1;c.g$=1;E(c);}c=new Q;c.g9=1;c.g$=1;E(c);}}return (-1);},
XP=(a,b)=>{return a.iR.eL(b);},
Tt=(a,b)=>{let c,d;if(b instanceof Dq)return a.iR.eL(b.kL);if(b instanceof C_)return a.iR.eL(b.iB);if(b instanceof CS){c=a.iR;b=b.iR;return c.eI()!==null&&b.eI()!==null?GW(c.eI(),b.eI()):1;}if(!(b instanceof Dd))return 1;c=a.iR;d=b.i9;return c.eI()!==null&&d.eI()!==null?GW(c.eI(),d.eI()):1;},
ALy=a=>{return a.iR;},
AGU=(a,b)=>{a.g_=b;},
Xd=(a,b)=>{return 1;};
let Hy=D(CS);
let Z5=(a,b)=>{let c;c=a.iR;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b);if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}return c.eL(B1(BD,b));};
function H2(){let a=this;B2.call(a);a.nF=null;a.pq=0;}
let AAD=(a,b,c)=>{let d;d=a.nF;if(b>=0&&b<c.g7.length){b=c.g7.charCodeAt(b);if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}return !d.eL(B1(BD,b)&65535)?(-1):1;}c=new Q;c.g9=1;c.g$=1;E(c);};
function Dd(){let a=this;B2.call(a);a.i9=null;a.p4=0;}
let Ro=(a,b,c)=>{let d;d=a.i9;if(b>=0&&b<c.g7.length)return !d.eL(c.g7.charCodeAt(b))?(-1):1;c=new Q;c.g9=1;c.g$=1;E(c);},
AEs=(a,b)=>{let c,d;if(b instanceof C_)return a.i9.eL(b.iB);if(b instanceof Dd){c=a.i9;b=b.i9;return c.eI()!==null&&b.eI()!==null?GW(c.eI(),b.eI()):1;}if(!(b instanceof CS)){if(!(b instanceof Dq))return 1;return 0;}c=a.i9;d=b.iR;return c.eI()!==null&&d.eI()!==null?GW(c.eI(),d.eI()):1;};
function Go(){let a=this;BU.call(a);a.kd=null;a.ld=null;a.lQ=0;}
let ABV=(a,b)=>{a.g_=b;},
RI=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=d.hB;f=S(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0&&b<c.g7.length){j=c.g7.charCodeAt(b);k=V9(j);if(k!==null){f=k.data;l=0;b=f.length;m=a.lQ;if(b!=m)return (-1);while(true){if(l>=m)return a.g_.ed(i,c,d);if(f[l]!=a.kd.data[l])break;l=l+1|0;}return (-1);}k=f.data;k[0]=j;m=j-4352|0;if(m>=0&&m<19){if(i<e){if(i>=0&&i<c.g7.length){j=c.g7.charCodeAt(i);g=j-4449|0;}else{c=new Q;c.g9=1;c.g$=1;E(c);}}if(g>=0&&g<21){b=i+1|0;k[1]=j;if(b<e){if(b>=0&&b<c.g7.length){j=c.g7.charCodeAt(b);h
=j-4519|0;}else{c=new Q;c.g9=1;c.g$=1;E(c);}}if(h>=0&&h<28){a:{b=b+1|0;k[2]=j;if(a.lQ==3){m=k[0];f=a.kd.data;if(m==f[0]&&k[1]==f[1]&&k[2]==f[2]){b=a.g_.ed(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.lQ==2){m=k[0];f=a.kd.data;if(m==f[0]&&k[1]==f[1]){b=a.g_.ed(b,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}c=new Q;c.g9=1;c.g$=1;E(c);},
Uy=(a,b)=>{let c,d,e;a:{if(b instanceof Go){b=b;if(b.ld===null){c=new H;d=b.kd;c.g7=L(d.data,0,d.data.length);b.ld=c;}c=b.ld;if(a.ld===null){b=new H;d=a.kd;b.g7=L(d.data,0,d.data.length);a.ld=b;}b=a.ld;if(c===b)e=1;else if(!(b instanceof H))e=0;else{b=b;e=c.g7!==b.g7?0:1;}if(!e){e=0;break a;}}e=1;}return e;},
AHS=(a,b)=>{return 1;};
function C_(){B2.call(this);this.iB=0;}
let AAj=a=>{return 1;},
YX=(a,b,c)=>{let d;d=a.iB;if(b>=0&&b<c.g7.length)return d!=c.g7.charCodeAt(b)?(-1):1;c=new Q;c.g9=1;c.g$=1;E(c);},
WU=(a,b,c,d)=>{let e,f,g,h,i;if(c instanceof H){e=d.hB;while(true){if(b>=e)return (-1);f=FY(c,a.iB,b);if(f<0)return (-1);g=a.g_;b=f+1|0;if(g.ed(b,c,d)>=0)break;}return f;}h=d.hB;a:{b:{while(true){if(b>h){b=(-1);break b;}i=b+1|0;if(i>d.hB){d.iC=1;e=(-1);}else{e=a.iB;if(b<0)break a;if(b>=c.g7.length)break a;e=e!=c.g7.charCodeAt(b)?(-1):1;e=e<0?(-1):a.g_.ed(b+e|0,c,d);}if(e>=0)break;b=i;}}return b;}c=new Q;Y(c);E(c);},
AAs=(a,b,c,d,e)=>{let f;if(d instanceof H){a:{while(true){if(c<b)return (-1);c=Fo(d,a.iB,c);if(c<0)break a;if(c<b)break a;if(a.g_.ed(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}b:{c:{while(true){if(c<b){c=(-1);break c;}if((c+1|0)>e.hB){e.iC=1;f=(-1);}else{f=a.iB;if(c<0)break b;if(c>=d.g7.length)break b;f=f!=d.g7.charCodeAt(c)?(-1):1;f=f<0?(-1):a.g_.ed(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new Q;Y(d);E(d);},
AHL=(a,b)=>{let c,d,e,f;if(b instanceof C_)return b.iB!=a.iB?0:1;if(!(b instanceof Dd)){if(b instanceof CS)return b.eL(a.iB);if(!(b instanceof Dq))return 1;return 0;}b=b;c=a.iB;d=new H;e=G(1);f=e.data;f[0]=c;d.g7=L(e.data,0,f.length);b=b.i9;if(0>=d.g7.length){b=new Q;b.g9=1;b.g$=1;E(b);}return (!b.eL(d.g7.charCodeAt(0))?(-1):1)<=0?0:1;};
function JY(){B2.call(this);this.mZ=0;}
let Rx=(a,b,c)=>{let d;d=a.mZ;if(b>=0&&b<c.g7.length){b=c.g7.charCodeAt(b);if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}return d!=(B1(BD,b)&65535)?(-1):1;}c=new Q;c.g9=1;c.g$=1;E(c);};
function Hv(){let a=this;B2.call(a);a.op=0;a.na=0;}
let Sc=(a,b,c)=>{let d;d=a.op;if(b>=0&&b<c.g7.length){a:{b:{if(d!=c.g7.charCodeAt(b)){d=a.na;if(b<0)break a;if(b>=c.g7.length)break a;if(d!=c.g7.charCodeAt(b)){b=(-1);break b;}}b=1;}return b;}c=new Q;c.g9=1;c.g$=1;E(c);}c=new Q;c.g9=1;c.g$=1;E(c);};
function Ec(){let a=this;BU.call(a);a.kw=0;a.kQ=null;a.kI=null;a.kF=0;}
let AJs=(a,b)=>{a.g_=b;},
AD5=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=S(4);f=d.hB;if(b>=f)return (-1);g=IJ(a,b,c,f);h=b+a.kw|0;i=Mr.eX(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;Fm(i,0,e,0,b);b=0+b|0;}a:{if(h<f){i=e.data;g=IJ(a,h,c,f);while(b<4){if(!AEA(g)){k=b+1|0;i[b]=g;}else{j=(Mr.eX(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.kw|0;if(h>=f){b=k;break a;}g=IJ(a,h,c,f);b=k;}}}if(b!=a.kF)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.g_.ed(h,c,d);if(j[g]!=a.kI.data[g])break;g
=g+1|0;}return (-1);},
IJ=(a,b,c,d)=>{let e,f,g,h;a:{a.kw=1;if(b>=(d-1|0)){if(b>=0&&b<c.g7.length){e=c.g7.charCodeAt(b);break a;}c=new Q;c.g9=1;c.g$=1;E(c);}d=b+1|0;if(b>=0&&b<c.g7.length){e=c.g7.charCodeAt(b);if(d>=0&&d<c.g7.length){f=c.g7.charCodeAt(d);b=(e&64512)!=55296?0:1;if(b&&((f&64512)!=56320?0:1)?1:0){g=G(2);h=g.data;h[0]=e;h[1]=f;e=UG(g,0,h.length);a.kw=2;}break a;}c=new Q;c.g9=1;c.g$=1;E(c);}c=new Q;c.g9=1;c.g$=1;E(c);}return e;},
AAE=(a,b)=>{let c,d,e,f,g,h,i;a:{if(b instanceof Ec){b=b;if(b.kQ===null){c=new K;c.g8=G(16);d=0;while(d<b.kF){e=EN(b.kI.data[d]);f=e.data.length;KR(c,c.g6,e,0,f);d=d+1|0;}g=new H;e=c.g8;h=e.data;i=c.g6;f=h.length;if(i>=0&&i<=(f-0|0)){g.g7=L(e.data,0,i);b.kQ=g;}else{b=new I;Y(b);E(b);}}g=b.kQ;if(a.kQ===null){b=new K;b.g8=G(16);d=0;while(d<a.kF){e=EN(a.kI.data[d]);f=e.data.length;KR(b,b.g6,e,0,f);d=d+1|0;}c=new H;e=b.g8;h=e.data;f=b.g6;i=h.length;if(f>=0&&f<=(i-0|0)){c.g7=L(e.data,0,f);a.kQ=c;}else{b=new I;Y(b);E(b);}}b
=a.kQ;if(g===b)d=1;else if(!(b instanceof H))d=0;else{b=b;d=g.g7!==b.g7?0:1;}if(!d){d=0;break a;}}d=1;}return d;},
AFq=(a,b)=>{return 1;};
let QU=D(Ec);
let OM=D(Ec);
let Rh=D(CL);
let VD=(a,b,c,d)=>{let e;while(true){e=a.hz.ed(b,c,d);if(e<=0)break;b=e;}return a.g_.ed(b,c,d);};
let Mb=D(CL);
let ACK=(a,b,c,d)=>{let e;e=a.hz.ed(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.hz.ed(e,c,d);if(b<=e)break;e=b;}b=e;}return a.g_.ed(b,c,d);};
let E_=D(CL);
let AGO=(a,b,c,d)=>{let e;if(!a.hz.eO(d))return a.g_.ed(b,c,d);e=a.hz.ed(b,c,d);if(e>=0)return e;return a.g_.ed(b,c,d);},
AIz=(a,b)=>{a.g_=b;a.hz.dD(b);};
let L3=D(E_);
let AAq=(a,b,c,d)=>{let e;e=a.hz.ed(b,c,d);if(e<=0)e=b;return a.g_.ed(e,c,d);},
ADi=(a,b)=>{a.g_=b;};
function EI(){let a=this;CL.call(a);a.jU=null;a.iX=0;}
let AKz=(a,b,c,d)=>{let e,f,g,h;e=a.iX;e=d.jf.data[e];if(!a.hz.eO(d))return a.g_.ed(b,c,d);if(e>=a.jU.j0)return a.g_.ed(b,c,d);f=a.iX;e=e+1|0;d.jf.data[f]=e;g=a.hz.ed(b,c,d);if(g>=0){b=a.iX;d.jf.data[b]=0;return g;}g=a.iX;e=e+(-1)|0;h=d.jf.data;h[g]=e;if(e>=a.jU.j2)return a.g_.ed(b,c,d);h[g]=0;return (-1);};
let KT=D(EI);
let ZA=(a,b,c,d)=>{let e,f,g;e=0;f=a.jU.j0;a:{while(true){g=a.hz.ed(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.jU.j2)return (-1);return a.g_.ed(b,c,d);};
let Nt=D(CL);
let AJG=(a,b,c,d)=>{let e;if(!a.hz.eO(d))return a.g_.ed(b,c,d);e=a.g_.ed(b,c,d);if(e>=0)return e;return a.hz.ed(b,c,d);};
let MQ=D(E_);
let UJ=(a,b,c,d)=>{let e;if(!a.hz.eO(d))return a.g_.ed(b,c,d);e=a.g_.ed(b,c,d);if(e<0)e=a.hz.ed(b,c,d);return e;};
let Pl=D(EI);
let S8=(a,b,c,d)=>{let e,f,g;e=a.iX;f=d.jf.data[e];if(!a.hz.eO(d))return a.g_.ed(b,c,d);g=a.jU;if(f>=g.j0){e=a.iX;d.jf.data[e]=0;return a.g_.ed(b,c,d);}if(f<g.j2){e=a.iX;d.jf.data[e]=f+1|0;e=a.hz.ed(b,c,d);}else{e=a.g_.ed(b,c,d);if(e>=0){b=a.iX;d.jf.data[b]=0;return e;}e=a.iX;d.jf.data[e]=f+1|0;e=a.hz.ed(b,c,d);}return e;};
let Nv=D(Dy);
let AKi=(a,b,c,d)=>{let e;e=d.hB;if(e>b)return a.g_.ey(b,e,c,d);return a.g_.ed(b,c,d);},
AG6=(a,b,c,d)=>{let e;e=d.hB;if(a.g_.ey(b,e,c,d)>=0)return b;return (-1);};
function Ls(){Dy.call(this);this.mh=null;}
let AEu=(a,b,c,d)=>{let e,f,g;e=d.hB;f=b;a:{while(true){if(f>=e){f=(-1);break a;}g=a.mh;if(f<0)break;if(f>=c.g7.length)break;if(g.e1(c.g7.charCodeAt(f)))break a;f=f+1|0;}c=new Q;c.g9=1;c.g$=1;E(c);}if(f>=0)e=f;if(e>b)return a.g_.ey(b,e,c,d);return a.g_.ed(b,c,d);},
RO=(a,b,c,d)=>{let e,f,g,h,i;e=d.hB;f=a.g_.d7(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.mh;if(g<0)break;if(g>=c.g7.length)break;if(h.e1(c.g7.charCodeAt(g)))break a;g=g+1|0;}c=new Q;c.g9=1;c.g$=1;E(c);}if(g>=0)e=g;g=a.g_.ey(f,e,c,d);if(f>g)g=f;if(g<=0)i=g?(-1):0;else{i=g-1|0;b:{while(true){if(i<b){i=(-1);break b;}d=a.mh;if(i<0)break;if(i>=c.g7.length)break;if(d.e1(c.g7.charCodeAt(i)))break b;i=i+(-1)|0;}c=new Q;c.g9=1;c.g$=1;E(c);}}if(i>=b)b=i>=g?i:i+1|0;return b;};
let FP=D();
let EQ=null,EG=null;
let Rj=D(CJ);
let Ta=(a,b,c,d)=>{let e;a:{while(true){if((b+a.hJ.ev()|0)>d.hB)break a;e=a.hJ.ew(b,c);if(e<1)break;b=b+e|0;}}return a.g_.ed(b,c,d);};
let Qd=D(D8);
let ACF=(a,b,c,d)=>{let e;if((b+a.hJ.ev()|0)<=d.hB){e=a.hJ.ew(b,c);if(e>=1)b=b+e|0;}return a.g_.ed(b,c,d);};
let LV=D(D$);
let AGg=(a,b,c,d)=>{let e,f,g,h,i;e=a.lc;f=e.j2;g=e.j0;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.hJ.ev()|0)>d.hB)break a;i=a.hJ.ew(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.g_.ed(b,c,d);}if((b+a.hJ.ev()|0)>d.hB){d.iC=1;return (-1);}i=a.hJ.ew(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);};
let MJ=D(CJ);
let AEl=(a,b,c,d)=>{let e;while(true){e=a.g_.ed(b,c,d);if(e>=0)break;if((b+a.hJ.ev()|0)<=d.hB){e=a.hJ.ew(b,c);b=b+e|0;}if(e<1)return (-1);}return e;};
let OP=D(D8);
let Tl=(a,b,c,d)=>{let e;e=a.g_.ed(b,c,d);if(e>=0)return e;return a.hz.ed(b,c,d);};
let Nf=D(D$);
let AGz=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lc;f=e.j2;g=e.j0;h=0;while(true){if(h>=f){a:{while(true){i=a.g_.ed(b,c,d);if(i>=0)break;if((b+a.hJ.ev()|0)<=d.hB){i=a.hJ.ew(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.hJ.ev()|0)>d.hB){d.iC=1;return (-1);}j=a.hJ.ew(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);};
let IE=D(BO);
let ABm=(a,b,c,d)=>{if(b&&!(d.ku&&b==d.iG))return (-1);return a.g_.ed(b,c,d);},
ZM=(a,b)=>{return 0;};
function Ie(){BO.call(this);this.ok=0;}
let T_=(a,b,c,d)=>{let e,f,g;if(b>=d.hB)e=32;else if(b>=0&&b<c.g7.length)e=c.g7.charCodeAt(b);else{c=new Q;c.g9=1;c.g$=1;E(c);}if(!b)f=32;else{f=b-1|0;if(f>=0&&f<c.g7.length)f=c.g7.charCodeAt(f);else{c=new Q;c.g9=1;c.g$=1;E(c);}}g=d.mt?0:d.iG;return (e!=32&&!MT(a,e,b,g,c)?0:1)^(f!=32&&!MT(a,f,b-1|0,g,c)?0:1)^a.ok?(-1):a.g_.ed(b,c,d);},
Uv=(a,b)=>{return 0;},
MT=(a,b,c,d,e)=>{let f;a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}f=1;break a;}f=0;}if(!f&&b!=95){c:{d:{if(B$(b)==6)while(true){c=c+(-1)|0;if(c<d)break d;if(c<0)break c;if(c>=e.g7.length)break c;e:{f:{f=e.g7.charCodeAt(c);switch(B$(f)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break f;default:break f;}b=1;break e;}b=0;}if(b)return 0;if(B$(f)!=6)return 1;}}return 1;}e=new Q;e.g9=1;e.g$=1;E(e);}return 0;};
let Lo=D(BO);
let Z$=(a,b,c,d)=>{if(b!=d.lV)return (-1);return a.g_.ed(b,c,d);},
AKu=(a,b)=>{return 0;};
function JX(){BO.call(this);this.kW=0;}
let AE9=(a,b,c,d)=>{let e,f,g;e=!d.ku?c.g7.length:d.hB;if(b>=e){f=a.kW;d.hQ.data[f]=0;return a.g_.ed(b,c,d);}a:{e=e-b|0;if(e==2){if(b>=0&&b<c.g7.length){if(c.g7.charCodeAt(b)!=13)break a;g=b+1|0;if(g>=0&&g<c.g7.length){if(c.g7.charCodeAt(g)!=10)break a;f=a.kW;d.hQ.data[f]=0;return a.g_.ed(b,c,d);}c=new Q;c.g9=1;c.g$=1;E(c);}c=new Q;c.g9=1;c.g$=1;E(c);}}b:{c:{if(e==1){if(b>=0&&b<c.g7.length){f=c.g7.charCodeAt(b);if(f==10)break b;if(f==13)break b;if(f==133)break b;if((f|1)!=8233)break c;else break b;}c=new Q;c.g9
=1;c.g$=1;E(c);}}return (-1);}e=a.kW;d.hQ.data[e]=0;return a.g_.ed(b,c,d);},
Vs=(a,b)=>{let c,d,e;c=a.kW;d=b.hQ.data;e=!d[c]?0:1;d[c]=(-1);return e;};
let Qr=D(BO);
let ADT=(a,b,c,d)=>{if(b<(!d.mt?d.hB:c.g7.length))return (-1);d.iC=1;d.si=1;return a.g_.ed(b,c,d);},
Ru=(a,b)=>{return 0;};
function KY(){BO.call(this);this.pJ=null;}
let Vb=(a,b,c,d)=>{let e,f;a:{b:{c:{if(b!=d.hB){if(!b)break b;if(d.ku&&b==d.iG)break b;e=a.pJ;f=b-1|0;if(f>=0&&f<c.g7.length){f=c.g7.charCodeAt(f);if(b<0)break a;if(b>=c.g7.length)break a;if(!e.e3(f,c.g7.charCodeAt(b)))break c;else break b;}c=new Q;c.g9=1;c.g$=1;E(c);}}return (-1);}return a.g_.ed(b,c,d);}c=new Q;c.g9=1;c.g$=1;E(c);},
Yi=(a,b)=>{return 0;};
let Qo=D(BU);
let AJL=(a,b,c,d)=>{let e,f,g,h,i;e=d.hB;f=b+1|0;if(f>e){d.iC=1;return (-1);}if(b>=0&&b<c.g7.length){g=B4(c.g7.charCodeAt(b)&64512,55296);h=g?0:1;a:{if(h){i=b+2|0;if(i<=e){if(f>=0&&f<c.g7.length){h=c.g7.charCodeAt(f);b=g?0:1;if(!(b&&((h&64512)!=56320?0:1)?1:0))break a;else return a.g_.ed(i,c,d);}c=new Q;c.g9=1;c.g$=1;E(c);}}}return a.g_.ed(f,c,d);}c=new Q;c.g9=1;c.g$=1;E(c);},
UA=(a,b)=>{a.g_=b;},
ADs=a=>{return (-2147483602);},
Uz=(a,b)=>{return 1;};
function LR(){BU.call(this);this.nQ=null;}
let ADO=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.hB;f=b+1|0;if(f>e){d.iC=1;return (-1);}if(b>=0&&b<c.g7.length){g=c.g7.charCodeAt(b);h=B4(g&64512,55296);i=h?0:1;a:{if(i){j=b+2|0;if(j<=e){if(f>=0&&f<c.g7.length){i=c.g7.charCodeAt(f);b=h?0:1;if(!(b&&((i&64512)!=56320?0:1)?1:0))break a;else return a.nQ.e1(((g&1023)<<10|i&1023)+65536|0)?(-1):a.g_.ed(j,c,d);}c=new Q;c.g9=1;c.g$=1;E(c);}}}return a.nQ.e1(g)?(-1):a.g_.ed(f,c,d);}c=new Q;c.g9=1;c.g$=1;E(c);},
AF2=(a,b)=>{a.g_=b;},
Rk=a=>{return (-2147483602);},
AKa=(a,b)=>{return 1;};
function Qe(){BO.call(this);this.mn=0;}
let AAP=(a,b,c,d)=>{let e,f;e=!d.ku?c.g7.length:d.hB;if(b>=e){e=a.mn;d.hQ.data[e]=0;return a.g_.ed(b,c,d);}a:{if((e-b|0)==1){if(b>=0&&b<c.g7.length){if(c.g7.charCodeAt(b)!=10)break a;else{f=a.mn;d.hQ.data[f]=1;return a.g_.ed(b+1|0,c,d);}}c=new Q;c.g9=1;c.g$=1;E(c);}}return (-1);},
XZ=(a,b)=>{let c,d,e;c=a.mn;d=b.hQ.data;e=!d[c]?0:1;d[c]=(-1);return e;};
function Oc(){BO.call(this);this.mz=0;}
let ADR=(a,b,c,d)=>{let e;if((!d.ku?c.g7.length-b|0:d.hB-b|0)<=0){e=a.mz;d.hQ.data[e]=0;return a.g_.ed(b,c,d);}if(b>=0&&b<c.g7.length){if(c.g7.charCodeAt(b)!=10)return (-1);e=a.mz;d.hQ.data[e]=1;return a.g_.ed(b+1|0,c,d);}c=new Q;c.g9=1;c.g$=1;E(c);},
XH=(a,b)=>{let c,d,e;c=a.mz;d=b.hQ.data;e=!d[c]?0:1;d[c]=(-1);return e;};
function Kr(){BO.call(this);this.lh=0;}
let ZF=(a,b,c,d)=>{let e,f,g;e=!d.ku?c.g7.length-b|0:d.hB-b|0;if(!e){e=a.lh;d.hQ.data[e]=0;return a.g_.ed(b,c,d);}a:{if(e<2){if(b>=0&&b<c.g7.length){f=c.g7.charCodeAt(b);g=97;break a;}c=new Q;c.g9=1;c.g$=1;E(c);}if(b>=0&&b<c.g7.length){f=c.g7.charCodeAt(b);e=b+1|0;if(e>=0&&e<c.g7.length){g=c.g7.charCodeAt(e);break a;}c=new Q;c.g9=1;c.g$=1;E(c);}c=new Q;c.g9=1;c.g$=1;E(c);}switch(f){case 10:case 133:case 8232:case 8233:e=a.lh;d.hQ.data[e]=0;return a.g_.ed(b,c,d);case 13:if(g!=10){e=a.lh;d.hQ.data[e]=0;return a.g_.ed(b,
c,d);}e=a.lh;d.hQ.data[e]=0;return a.g_.ed(b,c,d);default:}return (-1);},
Vw=(a,b)=>{let c,d,e;c=a.lh;d=b.hQ.data;e=!d[c]?0:1;d[c]=(-1);return e;};
function E7(){let a=this;BU.call(a);a.lp=0;a.kC=0;}
let Te=(a,b,c,d)=>{let e,f,g,h,i;e=Gs(a,d);if(e!==null&&(b+e.g7.length|0)<=d.hB){f=0;a:{b:{c:{d:{while(true){if(f>=e.g7.length){g=a.kC;d.hQ.data[g]=e.g7.length;return a.g_.ed(b+e.g7.length|0,c,d);}if(f<0)break c;if(f>=e.g7.length)break c;h=e.g7.charCodeAt(f);i=b+f|0;if(i<0)break d;if(i>=c.g7.length)break d;if(h!=c.g7.charCodeAt(i)){if(f<0)break a;if(f>=e.g7.length)break a;g=EE(e.g7.charCodeAt(f));if(i<0)break b;if(i>=c.g7.length)break b;if(g!=c.g7.charCodeAt(i))break;}f=f+1|0;}return (-1);}c=new Q;c.g9=1;c.g$
=1;E(c);}c=new Q;c.g9=1;c.g$=1;E(c);}c=new Q;c.g9=1;c.g$=1;E(c);}c=new Q;c.g9=1;c.g$=1;E(c);}return (-1);},
AFk=(a,b)=>{a.g_=b;},
Gs=(a,b)=>{let c,d,e,f,g;c=a.lp;d=b.ib.data;e=c*2|0;f=d[e];g=d[e+1|0];return (g|f|(g-f|0))>=0&&g<=b.kZ.g7.length?Cb(b.kZ,f,g):null;},
AFL=(a,b)=>{let c,d,e;c=a.kC;d=b.hQ.data;e=!d[c]?0:1;d[c]=(-1);return e;};
let Qm=D(E7);
let VC=(a,b,c,d)=>{let e,f,g;e=Gs(a,d);if(e!==null&&(b+e.g7.length|0)<=d.hB){f=!Jn(c,e,b)?(-1):e.g7.length;if(f<0)return (-1);g=a.kC;d.hQ.data[g]=f;return a.g_.ed(b+f|0,c,d);}return (-1);},
AH1=(a,b,c,d)=>{let e,f,g;e=Gs(a,d);f=d.iG;if(e!==null&&(b+e.g7.length|0)<=f){while(true){if(b>f)return (-1);g=Md(c,e,b);if(g<0)return (-1);if(a.g_.ed(g+e.g7.length|0,c,d)>=0)break;b=g+1|0;}return g;}return (-1);},
SK=(a,b,c,d,e)=>{let f,g;f=Gs(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=WS(d,f,c);if(g<0)break a;if(g<b)break a;if(a.g_.ed(g+f.g7.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);},
ACv=(a,b)=>{return 1;};
let M$=D(E7);
let ABJ=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lp;f=d.ib.data;g=e*2|0;h=f[g];i=f[g+1|0];j=(i|h|(i-h|0))>=0&&i<=d.kZ.g7.length?Cb(d.kZ,h,i):null;if(j!==null&&(b+j.g7.length|0)<=d.hB){i=0;a:{b:{while(true){if(i>=j.g7.length){e=a.kC;d.hQ.data[e]=j.g7.length;return a.g_.ed(b+j.g7.length|0,c,d);}if(i<0)break a;if(i>=j.g7.length)break a;e=j.g7.charCodeAt(i);if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}e=B1(BC,e)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value)
:null)));}g=B1(BD,e)&65535;h=b+i|0;if(h<0)break b;if(h>=c.g7.length)break b;e=c.g7.charCodeAt(h);if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}e=B1(BC,e)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}if(g!=(B1(BD,e)&65535))break;i=i+1|0;}return (-1);}c=new Q;c.g9=1;c.g$=1;E(c);}c=new Q;c.g9=1;c.g$=1;E(c);}return (-1);};
let Ll=D(T);
let Xy=(a,b,c,d,e)=>{let f,g,h,i;Bn(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.g8.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
Uh=(a,b,c,d)=>{let e,f,g,h,i;e=a.g6;Bn(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.g8.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
US=(a,b)=>{Gh(a,b);},
AG$=(a,b,c)=>{Bn(a,b,b+1|0);a.g8.data[b]=c;return a;};
function Ny(){let a=this;B2.call(a);a.io=null;a.ns=null;a.nZ=null;}
let V7=(a,b)=>{let c,d,e,f,g,h;c=M;M=c+1|0;d=new T;d.g8=G(20);a.hh=(J(d,d.g6,c,10)).bj();a.hC=1;d=new H;e=b.g8;f=e.data;g=b.g6;h=f.length;if(g>=0&&g<=(h-0|0)){d.g7=L(e.data,0,g);a.io=d;c=b.g6;a.hC=c;a.ns=Oy(c);a.nZ=Oy(a.hC);c=0;a:{b:{while(c<(a.hC-1|0)){b=a.ns;d=a.io;if(c<0)break a;if(c>=d.g7.length)break a;Nh(b,d.g7.charCodeAt(c),(a.hC-c|0)-1|0);b=a.nZ;d=a.io;g=(a.hC-c|0)-1|0;if(g<0)break b;if(g>=d.g7.length)break b;Nh(b,d.g7.charCodeAt(g),(a.hC-c|0)-1|0);c=c+1|0;}return;}b=new Q;b.g9=1;b.g$=1;E(b);}b=new Q;b.g9
=1;b.g$=1;E(b);}b=new I;b.g9=1;b.g$=1;E(b);},
ZJ=a=>{let b=new Ny();V7(b,a);return b;},
V$=(a,b,c)=>{let d,e,f,g;d=0;a:{b:{c:{while(d<a.hC){e=d+b|0;if(e<0)break a;if(e>=c.g7.length)break a;f=c.g7.charCodeAt(e);g=a.io;if(d<0)break b;if(d>=g.g7.length)break b;if(f!=g.g7.charCodeAt(d)){b=0;break c;}d=d+1|0;}b=1;}return !b?(-1):a.hC;}c=new Q;c.g9=1;c.g$=1;E(c);}c=new Q;c.g9=1;c.g$=1;E(c);},
T4=(a,b,c,d)=>{let e,f;e=d.hB;while(true){if(b>e)return (-1);f=AId(a,c,b,e);if(f<0)return (-1);if(a.g_.ed(f+a.hC|0,c,d)>=0)break;b=f+1|0;}return f;},
Yb=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);c=AG_(a,d,b,c);if(c<0)return (-1);if(a.g_.ed(c+a.hC|0,d,e)>=0)break;c=c+(-1)|0;}return c;},
Y9=(a,b)=>{let c,d,e;if(b instanceof C_){c=b.iB;b=a.io;if(0<b.g7.length)return c!=b.g7.charCodeAt(0)?0:1;b=new Q;b.g9=1;b.g$=1;E(b);}if(b instanceof Dd){b=b;d=Cb(a.io,0,1);b=b.i9;if(0>=d.g7.length){b=new Q;b.g9=1;b.g$=1;E(b);}return (!b.eL(d.g7.charCodeAt(0))?(-1):1)<=0?0:1;}if(!(b instanceof CS)){if(!(b instanceof Dq))return 1;a:{if(a.io.g7.length>1){e=b.kL;b=a.io;if(0>=b.g7.length){b=new Q;b.g9=1;b.g$=1;E(b);}c=b.g7.charCodeAt(0);b=a.io;if(1>=b.g7.length){b=new Q;b.g9=1;b.g$=1;E(b);}if(e==(((c&1023)<<10|b.g7.charCodeAt(1)
&1023)+65536|0)){c=1;break a;}}c=0;}return c;}b=b;d=a.io;if(0>=d.g7.length){b=new Q;b.g9=1;b.g$=1;E(b);}b:{c:{if(!b.eL(d.g7.charCodeAt(0))){if(a.io.g7.length<=1)break c;d=a.io;if(0>=d.g7.length){b=new Q;b.g9=1;b.g$=1;E(b);}c=d.g7.charCodeAt(0);d=a.io;if(1>=d.g7.length){b=new Q;b.g9=1;b.g$=1;E(b);}if(!b.eL(((c&1023)<<10|d.g7.charCodeAt(1)&1023)+65536|0))break c;}c=1;break b;}c=0;}return c;},
AId=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.io;f=a.hC-1|0;if(f>=0&&f<e.g7.length){g=e.g7.charCodeAt(f);a:{b:{c:{while(true){f=a.hC;if(c>(d-f|0))return (-1);f=(c+f|0)-1|0;if(f<0)break c;if(f>=b.g7.length)break c;h=b.g7.charCodeAt(f);if(h==g){f=0;d:{while(f<a.hC){i=f+c|0;if(i<0)break a;if(i>=b.g7.length)break a;j=b.g7.charCodeAt(i);e=a.io;if(f<0)break b;if(f>=e.g7.length)break b;if(j!=e.g7.charCodeAt(f)){f=0;break d;}f=f+1|0;}f=1;}if(f)break;}c=c+N_(a.ns,h)|0;}return c;}b=new Q;b.g9=1;b.g$=1;E(b);}b=new Q;b.g9=1;b.g$
=1;E(b);}b=new Q;b.g9=1;b.g$=1;E(b);}b=new Q;b.g9=1;b.g$=1;E(b);},
AG_=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.io;if(0>=e.g7.length){b=new Q;b.g9=1;b.g$=1;E(b);}f=e.g7.charCodeAt(0);g=(b.g7.length-d|0)-a.hC|0;if(g<=0)d=d+g|0;a:{b:{c:{while(true){if(d<c)return (-1);if(d<0)break c;if(d>=b.g7.length)break c;h=b.g7.charCodeAt(d);if(h==f){g=0;d:{while(g<a.hC){i=g+d|0;if(i<0)break a;if(i>=b.g7.length)break a;j=b.g7.charCodeAt(i);e=a.io;if(g<0)break b;if(g>=e.g7.length)break b;if(j!=e.g7.charCodeAt(g)){g=0;break d;}g=g+1|0;}g=1;}if(g)break;}d=d-N_(a.nZ,h)|0;}return d;}b=new Q;b.g9=1;b.g$
=1;E(b);}b=new Q;b.g9=1;b.g$=1;E(b);}b=new Q;b.g9=1;b.g$=1;E(b);};
function Kp(){B2.call(this);this.mw=null;}
let ABS=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{while(true){if(d>=a.mw.g7.length)return a.mw.g7.length;e=a.mw;if(d<0)break a;if(d>=e.g7.length)break a;f=e.g7.charCodeAt(d);g=b+d|0;if(g<0)break b;if(g>=c.g7.length)break b;h=c.g7.charCodeAt(g);if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}h=B1(BC,h)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}if(f!=(B1(BD,h)&65535))break;d=d+1|0;}return (-1);}c=new Q;c.g9=1;c.g$=1;E(c);}c=new Q;c.g9=1;c.g$
=1;E(c);};
function KW(){B2.call(this);this.lF=null;}
let AGi=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{c:{d:{while(true){if(d>=a.lF.g7.length)return a.lF.g7.length;e=a.lF;if(d<0)break c;if(d>=e.g7.length)break c;f=e.g7.charCodeAt(d);g=b+d|0;if(g<0)break d;if(g>=c.g7.length)break d;if(f!=c.g7.charCodeAt(g)){e=a.lF;if(d<0)break a;if(d>=e.g7.length)break a;h=EE(e.g7.charCodeAt(d));if(g<0)break b;if(g>=c.g7.length)break b;if(h!=c.g7.charCodeAt(g))break;}d=d+1|0;}return (-1);}c=new Q;c.g9=1;c.g$=1;E(c);}c=new Q;c.g9=1;c.g$=1;E(c);}c=new Q;c.g9=1;c.g$=1;E(c);}c=new Q;c.g9=
1;c.g$=1;E(c);};
let AKM=D();
function Kn(){B2.call(this);this.py=0;}
let AGm=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.g7.length){e=c.g7.charCodeAt(b);if(d>=0&&d<c.g7.length){d=c.g7.charCodeAt(d);b=a.py;d=((e&1023)<<10|d&1023)+65536|0;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}d=B1(BC,d);if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}return b!=B1(BD,d)?(-1):2;}c=new Q;c.g9=1;c.g$=1;E(c);}c=new Q;c.g9=1;c.g$=1;E(c);};
function FS(){BU.call(this);this.kx=0;}
let AEi=(a,b)=>{a.g_=b;},
H7=(a,b,c,d)=>{let e,f;e=b+1|0;if(e>d.hB){d.iC=1;return (-1);}if(b>=0&&b<c.g7.length){a:{f=c.g7.charCodeAt(b);if(b>d.iG){b=b-1|0;if(b>=0&&b<c.g7.length){if(!((c.g7.charCodeAt(b)&64512)!=55296?0:1))break a;return (-1);}c=new Q;c.g9=1;c.g$=1;E(c);}}if(a.kx!=f)return (-1);return a.g_.ed(e,c,d);}c=new Q;c.g9=1;c.g$=1;E(c);},
Y5=(a,b,c,d)=>{let e,f,g,h,i;if(!(c instanceof H)){e=d.hB;a:{while(true){if(b>e){b=(-1);break a;}if(H7(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.iG;g=d.hB;b:{while(true){if(b>=g)return (-1);h=FY(c,a.kx,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break b;if(b>=c.g7.length)break b;if((c.g7.charCodeAt(b)&64512)!=55296?0:1){b=h+1|0;continue;}}i=a.g_;b=h+1|0;if(i.ed(b,c,d)>=0)break;}return h;}c=new Q;c.g9=1;c.g$=1;E(c);},
Wn=(a,b,c,d,e)=>{let f,g;if(!(d instanceof H)){a:{while(true){if(c<b){c=(-1);break a;}if(H7(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.iG;b:{c:{while(true){if(c<b)return (-1);g=Fo(d,a.kx,c);if(g<0)break c;if(g<b)break c;if(g>f){c=g-1|0;if(c<0)break b;if(c>=d.g7.length)break b;if((d.g7.charCodeAt(c)&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.g_.ed(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new Q;d.g9=1;d.g$=1;E(d);},
SA=(a,b)=>{if(b instanceof C_)return 0;if(b instanceof Dd)return 0;if(b instanceof CS)return 0;if(b instanceof Dq)return 0;if(b instanceof FZ)return 0;if(!(b instanceof FS))return 1;return b.kx!=a.kx?0:1;},
AHx=(a,b)=>{return 1;};
function FZ(){BU.call(this);this.km=0;}
let UO=(a,b)=>{a.g_=b;},
Hw=(a,b,c,d)=>{let e,f,g;e=d.hB;f=b+1|0;e=B4(f,e);if(e>0){d.iC=1;return (-1);}if(b>=0&&b<c.g7.length){a:{g=c.g7.charCodeAt(b);if(e<0){if(f>=0&&f<c.g7.length){if(!((c.g7.charCodeAt(f)&64512)!=56320?0:1))break a;return (-1);}c=new Q;c.g9=1;c.g$=1;E(c);}}if(a.km!=g)return (-1);return a.g_.ed(f,c,d);}c=new Q;c.g9=1;c.g$=1;E(c);},
AEL=(a,b,c,d)=>{let e,f;if(!(c instanceof H)){e=d.hB;a:{while(true){if(b>e){b=(-1);break a;}if(Hw(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.hB;b:{while(true){if(b>=e)return (-1);f=FY(c,a.km,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break b;if(b>=c.g7.length)break b;if((c.g7.charCodeAt(b)&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.g_.ed(b,c,d)>=0)break;}return f;}c=new Q;c.g9=1;c.g$=1;E(c);},
AGh=(a,b,c,d,e)=>{let f,g;if(!(d instanceof H)){a:{while(true){if(c<b){c=(-1);break a;}if(Hw(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.hB;b:{c:{while(true){if(c<b)return (-1);g=Fo(d,a.km,c);if(g<0)break c;if(g<b)break c;c=g+1|0;if(c<f){if(c<0)break b;if(c>=d.g7.length)break b;if((d.g7.charCodeAt(c)&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.g_.ed(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new Q;d.g9=1;d.g$=1;E(d);},
Wb=(a,b)=>{if(b instanceof C_)return 0;if(b instanceof Dd)return 0;if(b instanceof CS)return 0;if(b instanceof Dq)return 0;if(b instanceof FS)return 0;if(!(b instanceof FZ))return 1;return b.km!=a.km?0:1;},
AEU=(a,b)=>{return 1;};
function Dq(){let a=this;B2.call(a);a.ll=0;a.kS=0;a.kL=0;}
let AFM=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.g7.length){e=c.g7.charCodeAt(b);if(d>=0&&d<c.g7.length){d=c.g7.charCodeAt(d);return a.ll==e&&a.kS==d?2:(-1);}c=new Q;c.g9=1;c.g$=1;E(c);}c=new Q;c.g9=1;c.g$=1;E(c);},
ADc=(a,b,c,d)=>{let e,f,g,h;if(c instanceof H){e=d.hB;a:{while(b<e){b=FY(c,a.ll,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;if(b>=c.g7.length)break a;f=c.g7.charCodeAt(b);if(a.kS==f&&a.g_.ed(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new Q;c.g9=1;c.g$=1;E(c);}g=d.hB;b:{c:{d:{while(true){if(b>g){b=(-1);break d;}if((b+a.hC|0)>d.hB){d.iC=1;h=(-1);}else{h=b+1|0;if(b<0)break b;if(b>=c.g7.length)break b;e=c.g7.charCodeAt(b);if(h<0)break c;if(h>=c.g7.length)break c;f=c.g7.charCodeAt(h);h
=a.ll==e&&a.kS==f?2:(-1);h=h<0?(-1):a.g_.ed(b+h|0,c,d);}if(h>=0)break;b=b+1|0;}}return b;}c=new Q;Y(c);E(c);}c=new Q;Y(c);E(c);},
UM=(a,b,c,d,e)=>{let f,g,h;if(d instanceof H){a:{b:{while(true){if(c<b)return (-1);c=Fo(d,a.kS,c)+(-1)|0;if(c<0)break b;if(c<b)break b;f=a.ll;if(c<0)break a;if(c>=d.g7.length)break a;if(f==d.g7.charCodeAt(c)&&a.g_.ed(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new Q;d.g9=1;d.g$=1;E(d);}c:{d:{e:{while(true){if(c<b){c=(-1);break e;}if((c+a.hC|0)>e.hB){e.iC=1;f=(-1);}else{g=c+1|0;if(c<0)break c;if(c>=d.g7.length)break c;h=d.g7.charCodeAt(c);if(g<0)break d;if(g>=d.g7.length)break d;g=d.g7.charCodeAt(g);f
=a.ll==h&&a.kS==g?2:(-1);f=f<0?(-1):a.g_.ed(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new Q;Y(d);E(d);}d=new Q;Y(d);E(d);},
AFv=(a,b)=>{if(b instanceof Dq)return b.kL!=a.kL?0:1;if(b instanceof CS)return b.eL(a.kL);if(b instanceof C_)return 0;if(!(b instanceof Dd))return 1;return 0;};
let G5=D(FP);
let UZ=(a,b)=>{return b!=10?0:1;},
AFC=(a,b,c)=>{return b!=10?0:1;};
let G6=D(FP);
let AGC=(a,b)=>{return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;},
AJg=(a,b,c)=>{a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;};
function Pk(){let a=this;C.call(a);a.ot=null;a.m4=null;a.lt=0;a.qT=0;}
let Z7=(a,b)=>{let c,d;while(true){c=a.lt;if(b<c)break;a.lt=c<<1|1;}d=c<<1|1;a.lt=d;d=d+1|0;a.ot=S(d);a.m4=S(d);a.qT=b;},
Oy=a=>{let b=new Pk();Z7(b,a);return b;},
Nh=(a,b,c)=>{let d,e,f,g;d=0;e=a.lt;f=b&e;while(true){g=a.ot.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.m4.data[f]=c;},
N_=(a,b)=>{let c,d,e,f;c=a.lt;d=b&c;e=0;while(true){f=a.ot.data[d];if(!f)break;if(f==b)return a.m4.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.qT;};
let GQ=D(Bh);
let Zp=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;return Cg(By(b,9,13),32);};
let Gu=D(Bh);
let ABK=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;return By(b,48,57);};
let O7=D(Bh);
let AF6=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;return By(b,97,122);};
let PG=D(Bh);
let AHy=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;return By(b,65,90);};
let PK=D(Bh);
let W1=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;return By(b,0,127);};
let GM=D(Bh);
let Vm=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;return By(By(b,97,122),65,90);};
let G1=D(GM);
let XS=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;return By(By(By(b,97,122),65,90),48,57);};
let Rb=D(Bh);
let Y4=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;return By(By(By(b,33,64),91,96),123,126);};
let Ht=D(G1);
let RB=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;return By(By(By(By(By(By(b,97,122),65,90),48,57),33,64),91,96),123,126);};
let Nx=D(Ht);
let ACq=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;return Cg(By(By(By(By(By(By(b,97,122),65,90),48,57),33,64),91,96),123,126),32);};
let NS=D(Bh);
let V4=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;return Cg(Cg(b,32),9);};
let Ma=D(Bh);
let ACj=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;return Cg(By(b,0,31),127);};
let L2=D(Bh);
let AJk=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;return By(By(By(b,48,57),97,102),65,70);};
let PO=D(Bh);
let ADo=a=>{let b,c;b=new Og;b.r0=a;c=new Ba;c.hg=S(64);b.hj=c;b.hM=1;return b;};
let Ri=D(Bh);
let RJ=a=>{let b,c;b=new Kx;b.r3=a;c=new Ba;c.hg=S(64);b.hj=c;b.hM=1;return b;};
let Pj=D(Bh);
let ZI=a=>{let b,c;b=new NM;b.rO=a;c=new Ba;c.hg=S(64);b.hj=c;return b;};
let O1=D(Bh);
let AFP=a=>{let b,c;b=new NL;b.rG=a;c=new Ba;c.hg=S(64);b.hj=c;return b;};
let P8=D(Bh);
let V1=a=>{let b,c;b=new Qx;b.sk=a;c=new Ba;c.hg=S(64);b.hj=c;GB(c,0,2048);b.hM=1;return b;};
let K_=D(Bh);
let Wx=a=>{let b,c;b=new LS;b.r6=a;c=new Ba;c.hg=S(64);b.hj=c;b.hM=1;return b;};
let KQ=D(Bh);
let AI_=a=>{let b,c;b=new Li;b.sA=a;c=new Ba;c.hg=S(64);b.hj=c;b.hM=1;return b;};
let Pq=D(Bh);
let Ry=a=>{let b,c;b=new M0;b.r1=a;c=new Ba;c.hg=S(64);b.hj=c;return b;};
let Py=D(Bh);
let AA2=a=>{let b,c;b=new Kt;b.q1=a;c=new Ba;c.hg=S(64);b.hj=c;b.hM=1;return b;};
let Mu=D(Bh);
let WK=a=>{let b,c;b=new Kw;b.r8=a;c=new Ba;c.hg=S(64);b.hj=c;b.hM=1;return b;};
let NX=D(Bh);
let Ym=a=>{let b,c;b=new Ld;b.sj=a;c=new Ba;c.hg=S(64);b.hj=c;b.hM=1;return b;};
let QW=D(Bh);
let AA6=a=>{let b,c;b=new L6;b.su=a;c=new Ba;c.hg=S(64);b.hj=c;b.hM=1;return b;};
let Pw=D(Bh);
let AHW=a=>{let b,c;b=new L9;b.rP=a;c=new Ba;c.hg=S(64);b.hj=c;return b;};
let M4=D(Bh);
let AE2=a=>{let b,c;b=new OD;b.r$=a;c=new Ba;c.hg=S(64);b.hj=c;return b;};
let Mt=D(Bh);
let ADe=a=>{let b,c;b=new N5;b.q4=a;c=new Ba;c.hg=S(64);b.hj=c;b.hM=1;return b;};
let Re=D(Bh);
let AFZ=a=>{let b,c;b=new KH;b.sI=a;c=new Ba;c.hg=S(64);b.hj=c;b.hM=1;return b;};
let Gf=D(Bh);
let ABr=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;return Cg(By(By(By(b,97,122),65,90),48,57),95);};
let Qa=D(Gf);
let ACR=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;b=DH(Cg(By(By(By(b,97,122),65,90),48,57),95),1);b.hM=1;return b;};
let NA=D(GQ);
let T2=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;b=DH(Cg(By(b,9,13),32),1);b.hM=1;return b;};
let Mp=D(Gu);
let YU=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;b=DH(By(b,48,57),1);b.hM=1;return b;};
function Bg(){let a=this;Bh.call(a);a.ho=0;a.hp=0;}
let AI9=(a,b,c)=>{a.ho=b;a.hp=c;},
Bo=(a,b)=>{let c=new Bg();AI9(c,a,b);return c;},
ABw=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;return By(b,a.ho,a.hp);};
let Ml=D(Bh);
let AIY=a=>{let b,c;b=new B7;c=new Ba;c.hg=S(64);b.hj=c;c=new Ba;c.hg=S(2);b.hn=c;return By(By(b,65279,65279),65520,65533);};
function IH(){let a=this;Bh.call(a);a.oh=0;a.mY=0;a.o7=0;}
let Vv=(a,b,c)=>{a.mY=c;a.oh=b;},
BQ=(a,b)=>{let c=new IH();Vv(c,a,b);return c;},
AI$=(a,b,c,d)=>{a.o7=d;a.mY=c;a.oh=b;},
ABo=(a,b,c)=>{let d=new IH();AI$(d,a,b,c);return d;},
XC=a=>{let b,c,d;b=new Hk;c=a.oh;d=new Ba;d.hg=S(64);b.hj=d;b.mB=c;if(a.o7)GB(d,0,2048);b.hM=a.mY;return b;};
function IN(){let a=this;Bh.call(a);a.of=0;a.m6=0;a.oO=0;}
let WL=(a,b,c)=>{a.m6=c;a.of=b;},
E9=(a,b)=>{let c=new IN();WL(c,a,b);return c;},
RA=(a,b,c,d)=>{a.oO=d;a.m6=c;a.of=b;},
ZG=(a,b,c)=>{let d=new IN();RA(d,a,b,c);return d;},
Rz=a=>{let b,c,d;b=new NE;c=a.of;d=new Ba;d.hg=S(64);b.hj=d;b.mB=c;if(a.oO)GB(d,0,2048);b.hM=a.m6;return b;};
let DK=D(BA);
let S2=D();
let Wc=D();
let UI=D();
let AJv=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=new JA;d=G(b.g7.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.nl=d;f=EC(c);d=S(f*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<f){l=EC(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=EC(c);g=l/2|0;if(l%2|0)g= -g|0;j=j+g|0;g=h+1|0;e[h]=i;h=g+1|0;e[g]=j;k=k+1|0;}return d;}if(f<0)break;if(f>=b.g7.length)break;e[f]=b.g7.charCodeAt(f);f=f+1|0;}b=new Q;b.g9=1;b.g$=1;E(b);},
B3=b=>{let c,d,e,f,g,h,i,j,k,l;c=new JA;d=G(b.g7.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.nl=d;f=EC(c);d=S(f*2|0);e=d.data;h=0;i=0;while(i<f){h=h+EC(c)|0;g=i*2|0;e[g]=h;j=g+1|0;k=EC(c);l=k/2|0;if(k%2|0)l= -l|0;e[j]=l;i=i+1|0;}return d;}if(f<0)break;if(f>=b.g7.length)break;e[f]=b.g7.charCodeAt(f);f=f+1|0;}b=new Q;b.g9=1;b.g$=1;E(b);},
BZ=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=S(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new Bs;l.g9=1;l.g$=1;E(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new PR;l.pH=b;l.pR=c;return l;},
GH=b=>{if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;},
AKK=b=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=R(Ge,16384);d=c.data;e=BF(16384).data;f=0;g=0;h=0;i=0;a:{b:{c:{while(true){if(i>=b.g7.length){j=c.constructor;if(j===null)b=null;else{b=j.classObject;if(b===null){b=new Ca;b.hF=j;k=b;j.classObject=k;}}b=DS(b);if(b===null){b=new CU;b.g9=1;b.g$=1;E(b);}if(b===Bk(CQ)){b=new Bs;b.g9=1;b.g$=1;E(b);}if(g<0){b=new DK;b.g9=1;b.g$=1;E(b);}k=D4(b.hF,g);f=d.length;if(g<f)f=g;g=0;while(g<f){k.data[g]=d[g];g=g+1|0;}return k;}if(i<0)break c;if(i>=b.g7.length)break c;l=GH(b.g7.charCodeAt(i));if
(l==64){i=i+1|0;if(i<0)break b;if(i>=b.g7.length)break b;l=GH(b.g7.charCodeAt(i));m=0;n=1;o=0;while(o<3){i=i+1|0;if(i<0)break a;if(i>=b.g7.length)break a;m=m|CB(n,GH(b.g7.charCodeAt(i)));n=n*64|0;o=o+1|0;}}else if(l<32)m=1;else{l=(l-32|0)<<24>>24;i=i+1|0;if(i<0)break;if(i>=b.g7.length)break;m=GH(b.g7.charCodeAt(i));}if(!l&&m>=128){if(f>0){p=g+1|0;j=new Ge;l=h+f|0;q=BF(f);o=e.length;if(f<o)o=f;r=q.data;s=0;while(s<o){r[s]=e[s];s=s+1|0;}j.nx=h;j.nW=l;j.nA=q;d[g]=j;g=p;}h=h+(f+m|0)|0;f=0;}else{n=f+m|0;o=e.length;if
(n<o)s=g;else{s=g+1|0;j=new Ge;t=h+f|0;q=BF(f);if(f<o)o=f;r=q.data;f=0;while(f<o){r[f]=e[f];f=f+1|0;}j.nx=h;j.nW=t;j.nA=q;d[g]=j;h=h+n|0;f=0;}while(true){g=m+(-1)|0;if(m<=0)break;p=f+1|0;e[f]=l;f=p;m=g;}g=s;}i=i+1|0;}b=new Q;b.g9=1;b.g$=1;E(b);}b=new Q;b.g9=1;b.g$=1;E(b);}b=new Q;b.g9=1;b.g$=1;E(b);}b=new Q;b.g9=1;b.g$=1;E(b);};
function PR(){let a=this;C.call(a);a.pH=null;a.pR=null;}
function Ge(){let a=this;C.call(a);a.nx=0;a.nW=0;a.nA=null;}
function JA(){let a=this;C.call(a);a.nl=null;a.pw=0;}
let YZ=D();
let EC=b=>{let c,d,e,f,g;c=0;d=1;while(true){e=b.nl.data;f=b.pw;b.pw=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+CB(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;};
let AF7=D();
function ME(){let a=this;CM.call(a);a.o0=null;a.oZ=0;a.lm=null;}
let AG7=(a,b)=>{return;},
WN=(a,b)=>{let c,d,e,f,g,h;if(BH===null){b=new Cj;c=new B5;c.h8=BF(32);b.ii=c;c=new K;BB(c);c.g8=G(16);b.h$=c;b.h9=G(32);b.ic=0;b.id=BX;BH=b;}b=a.o0;c=new K;c.g8=G(16);F(c,c.g6,A(349));d=c.g6;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.g8;f=e.data;g=c.g6;h=f.length;if(g>=0&&g<=(h-0|0)){b.g7=L(e.data,0,g);BI(Br(b));BI("\n");return;}b=new I;b.g9=1;b.g$=1;Bl(b);E(b);},
Tb=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=(HM(Gx(A(91),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){a:{b=a.lm;b.nM=b.mb.h2;if(a.oZ){e=0;while(true){b=a.lm;c=b.mb;f=B4(e,c.h2);if(f>=0)break a;if(f>=0){g=new I;b=new K;b.g8=G(16);F(b,b.g6,A(76));J(b,b.g6,e,10);F(b,b.g6,A(77));e=c.h2;J(b,b.g6,e,10);c=new H;d=b.g8;h=d.data;f=b.g6;i=h.length;if(f>=0&&f<=(i-0|0)){c.g7=L(d.data,0,f);g.g9=1;g.g$=1;g.ha=c;E(g);}b=new I;Y(b);E(b);}Zj(b,c.hV.data[e]);e=e+1|0;}}}return 0;}j=d[f];h=(HM(Gx(A(89),0),j,0)).data;if(h.length
!=4)break;k=h[0];l=AAO(h[1]);b=h[2];if(b===null){b=new B0;b.g9=1;b.g$=1;b.ha=A(52);E(b);}m=AHr(b,0,b.g7.length,10);n=h[3];o=Eq;if(k===A(350))i=1;else if(!(A(350) instanceof H))i=0;else{b=A(350);i=k.g7!==b.g7?0:1;}if(i)o=Ej;if(k===A(351))i=1;else if(!(A(351) instanceof H))i=0;else{b=A(351);i=k.g7!==b.g7?0:1;}if(i)o=Ea;if(k===A(352))i=1;else if(!(A(352) instanceof H))i=0;else{b=A(352);i=k.g7!==b.g7?0:1;}if(i)o=D6;if(k===A(189))i=1;else if(!(A(189) instanceof H))i=0;else{b=A(189);i=k.g7!==b.g7?0:1;}if(i)o=Hi;if
(o===D6&&!ET.qs)m=BM;g=new N8;g.nD=l;g.pb=o;g.qH=m;g.o3=n;DE(a.lm.pl,l,l);Di(a.lm.mb,g);f=f+1|0;}b=new Bf;b.g9=1;b.g$=1;b.ha=A(353);E(b);},
AC4=(a,b,c)=>{return Tb(a,b,c);};
let B8=D(BR);
let U0=null,ADv=null,VY=null,VX=null,U4=null,UL=null,Uj=null,VN=null,T3=null,AAy=null;
let Gp=()=>{Gp=Bz(B8);SS();};
let SS=()=>{let b,c,d,e,f,g,h,i,j;b=new P1;Gp();b.hv=A(354);b.hk=0;U0=b;c=new P2;c.hv=A(355);c.hk=1;ADv=c;d=new P6;d.hv=A(356);d.hk=2;VY=d;e=new P7;e.hv=A(357);e.hk=3;VX=e;f=new P4;f.hv=A(358);f.hk=4;U4=f;g=new P5;g.hv=A(359);g.hk=5;UL=g;h=new PZ;h.hv=A(360);h.hk=6;Uj=h;i=new P0;i.hv=A(361);i.hk=7;VN=i;j=new PY;j.hv=A(362);j.hk=8;T3=j;AAy=P(B8,[b,c,d,e,f,g,h,i,j]);};
function Ep(){let a=this;FM.call(a);a.lJ=0;a.j7=null;}
let AJ7=D(0);
let Ur=b=>{let c,d;if(b===A(363))c=1;else if(!(A(363) instanceof H))c=0;else{d=A(363);c=b.g7!==d.g7?0:1;}a:{if(!c){if(b===A(364))c=1;else if(!(A(364) instanceof H))c=0;else{d=A(364);c=b.g7!==d.g7?0:1;}if(!c){if(b===A(365))c=1;else if(!(A(365) instanceof H))c=0;else{d=A(365);c=b.g7!==d.g7?0:1;}if(!c){if(b===A(366))c=1;else if(!(A(366) instanceof H))c=0;else{d=A(366);c=b.g7!==d.g7?0:1;}if(!c){if(b===A(367))c=1;else if(!(A(367) instanceof H))c=0;else{d=A(367);c=b.g7!==d.g7?0:1;}if(!c){c=0;break a;}}}}}c=1;}return c;},
Zs=b=>{let c,d;if(b===A(368))c=1;else if(!(A(368) instanceof H))c=0;else{d=A(368);c=b.g7!==d.g7?0:1;}a:{b:{if(c)break b;if(b===A(369))c=1;else if(!(A(369) instanceof H))c=0;else{d=A(369);c=b.g7!==d.g7?0:1;}if(c)break b;if(b===A(370))c=1;else if(!(A(370) instanceof H))c=0;else{d=A(370);c=b.g7!==d.g7?0:1;}if(c)break b;if(b===A(371))c=1;else if(!(A(371) instanceof H))c=0;else{d=A(371);c=b.g7!==d.g7?0:1;}if(c)break b;if(b===A(372))c=1;else if(!(A(372) instanceof H))c=0;else{d=A(372);c=b.g7!==d.g7?0:1;}if(c)break b;if
(b===A(373))c=1;else if(!(A(373) instanceof H))c=0;else{d=A(373);c=b.g7!==d.g7?0:1;}if(c)break b;if(b===A(374))c=1;else if(!(A(374) instanceof H))c=0;else{d=A(374);c=b.g7!==d.g7?0:1;}if(c)break b;if(b===A(375))c=1;else if(!(A(375) instanceof H))c=0;else{d=A(375);c=b.g7!==d.g7?0:1;}if(c)break b;if(b===A(376))c=1;else if(!(A(376) instanceof H))c=0;else{d=A(376);c=b.g7!==d.g7?0:1;}if(!c){c=0;break a;}}c=1;}return c;};
let O9=D(0);
let Mi=D();
let AI4=(a,b,c)=>{a.fd(V(b),CC(c,"handleEvent"));},
ADA=(a,b)=>{return !!a.fe(b);},
UP=(a,b,c)=>{a.ff(V(b),CC(c,"handleEvent"));},
AAu=(a,b,c,d)=>{a.fg(V(b),CC(c,"handleEvent"),d?1:0);},
AGH=(a,b,c,d)=>{a.fh(V(b),CC(c,"handleEvent"),d?1:0);};
function Jg(){let a=this;C.call(a);a.nw=null;a.ox=null;a.l$=null;a.oC=0;a.mI=null;}
let ADL=(a,b)=>{let c,d,e;c=b.target;d=null;e=a.nw;if(e!==Ea&&e!==D6){if(e===Ej){b=window.document.createElement("img");d=Br(V(c.result));b.src=d;e=c.result;c=new Int8Array(e);d=new Gd;d.jk=c;d.n5=e;d.qd=b;}else if(e===Eq)d=V(c.result);}else{e=c.result;b=new Int8Array(e);d=new Gd;d.jk=b;d.n5=e;}if(d!==null){Fg(a.mI.o6,a.nw,a.ox,d);Di(a.l$,a.ox);if(a.l$.h2==a.oC){b=a.mI.oT;d=new KJ;d.nT=a;Di(b.lR,d);}}},
AB0=(a,b)=>{ADL(a,b);};
function Eb(){BR.call(this);this.lN=null;}
let Ej=null,D6=null,Eq=null,Ea=null,Hi=null,J7=null;
let ADS=()=>{let b,c,d,e,f;b=new Eb;b.hv=A(377);b.hk=0;b.lN=A(350);Ej=b;c=new Eb;c.hv=A(378);c.hk=1;c.lN=A(352);D6=c;d=new Eb;d.hv=A(379);d.hk=2;d.lN=A(380);Eq=d;e=new Eb;e.hv=A(381);e.hk=3;e.lN=A(351);Ea=e;f=new Eb;f.hv=A(382);f.hk=4;f.lN=A(189);Hi=f;J7=P(Eb,[b,c,d,e,f]);};
let ZE=D();
let Ug=null;
let SO=()=>{Ug=Gk([1,4,2,1024,8,16,128,64,32,256,2048,512]);};
let Nr=D(0);
function FN(){let a=this;Jq.call(a);a.rN=null;a.rL=null;a.n9=0;a.nG=0;a.n1=null;a.sl=null;}
let Q=D(I);
function Qg(){let a=this;Bc.call(a);a.oV=null;a.so=null;}
let W8=(a,b)=>{let c;c=b-55296|0;return c>=0&&c<2048?a.iq^B6(a.oV,c):0;};
function Qf(){let a=this;Bc.call(a);a.qu=null;a.qI=null;a.sb=null;}
let Sh=(a,b)=>{let c,d;c=b-55296|0;d=c>=0&&c<2048?a.iq^B6(a.qu,c):0;return a.qI.eL(b)&&!d?1:0;};
function Lx(){let a=this;Bc.call(a);a.me=null;a.q8=null;}
let ABd=(a,b)=>{return a.hx^B6(a.me,b);},
Yz=a=>{let b,c,d,e,f,g,h,i,j,k;b=new K;b.g8=G(16);c=F$(a.me,0);while(c>=0){d=(EN(c)).data;e=0;f=d.length;g=b.g6;Bn(b,g,g+f|0);f=f+e|0;while(e<f){h=b.g8.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.g6;Bn(b,g,g+1|0);b.g8.data[g]=124;c=F$(a.me,c+1|0);}e=b.g6;if(e>0)Qp(b,e-1|0);k=new H;d=b.g8;h=d.data;e=b.g6;g=h.length;if(e>=0&&e<=(g-0|0)){k.g7=L(d.data,0,e);return k;}b=new I;b.g9=1;b.g$=1;Bl(b);E(b);};
function LD(){let a=this;Bc.call(a);a.pB=null;a.r2=null;}
let AFN=(a,b)=>{return a.pB.eL(b);};
function LB(){let a=this;Bc.call(a);a.m0=0;a.o4=null;a.nB=null;}
let AGl=(a,b)=>{return !(a.m0^B6(a.nB.hn,b))&&!(a.m0^a.nB.jl^a.o4.eL(b))?0:1;};
function LC(){let a=this;Bc.call(a);a.m5=0;a.qz=null;a.n_=null;}
let ABR=(a,b)=>{return !(a.m5^B6(a.n_.hn,b))&&!(a.m5^a.n_.jl^a.qz.eL(b))?1:0;};
function LH(){let a=this;Bc.call(a);a.qO=0;a.qD=null;a.qx=null;a.ro=null;}
let WB=(a,b)=>{return a.qO^(!a.qD.eL(b)&&!a.qx.eL(b)?0:1);};
function LI(){let a=this;Bc.call(a);a.pE=0;a.pz=null;a.pr=null;a.sF=null;}
let Rn=(a,b)=>{return a.pE^(!a.pz.eL(b)&&!a.pr.eL(b)?0:1)?0:1;};
function LF(){let a=this;Bc.call(a);a.pn=null;a.sH=null;}
let YJ=(a,b)=>{let c,d;c=a.pn;d=c.hN;return d!==null?c.hx^d.eL(b):c.hx^B6(c.hn,b);};
function LG(){let a=this;Bc.call(a);a.qG=null;a.rC=null;}
let ABT=(a,b)=>{let c,d;c=a.qG;d=c.hN;return (d!==null?c.hx^d.eL(b):c.hx^B6(c.hn,b))?0:1;};
function LJ(){let a=this;Bc.call(a);a.pN=null;a.pA=0;a.ql=null;}
let AH4=(a,b)=>{let c,d,e;c=a.pN;d=c.hN;e=d!==null?c.hx^d.eL(b):c.hx^B6(c.hn,b);return !e&&!(a.pA^B6(a.ql.hn,b))?0:1;};
function LK(){let a=this;Bc.call(a);a.p1=null;a.p$=0;a.pT=null;}
let VL=(a,b)=>{let c,d,e;c=a.p1;d=c.hN;e=d!==null?c.hx^d.eL(b):c.hx^B6(c.hn,b);return !e&&!(a.p$^B6(a.pT.hn,b))?1:0;};
function Lw(){let a=this;Bc.call(a);a.qj=0;a.qy=null;a.qK=null;a.rb=null;}
let AKN=(a,b)=>{let c,d;a:{if(!(a.qj^a.qy.eL(b))){c=a.qK;d=c.hN;if(!(d!==null?c.hx^d.eL(b):c.hx^B6(c.hn,b))){b=0;break a;}}b=1;}return b;};
function LY(){let a=this;Bc.call(a);a.qJ=0;a.oL=null;a.oP=null;a.ry=null;}
let YQ=(a,b)=>{let c,d;a:{if(!(a.qJ^a.oL.eL(b))){c=a.oP;d=c.hN;if(!(d!==null?c.hx^d.eL(b):c.hx^B6(c.hn,b))){b=1;break a;}}b=0;}return b;};
function Lu(){let a=this;Bc.call(a);a.pg=null;a.rF=null;}
let VI=(a,b)=>{let c,d;c=a.pg;d=c.hN;return d!==null?c.hx^d.eL(b):c.hx^B6(c.hn,b);};
function Lv(){let a=this;Bc.call(a);a.ph=null;a.sC=null;}
let XV=(a,b)=>{let c,d;c=a.ph;d=c.hN;return (d!==null?c.hx^d.eL(b):c.hx^B6(c.hn,b))?0:1;};
function LA(){let a=this;Bc.call(a);a.qM=null;a.pY=0;a.qY=null;}
let AAd=(a,b)=>{let c,d,e;c=a.qM;d=c.hN;e=d!==null?c.hx^d.eL(b):c.hx^B6(c.hn,b);return e&&a.pY^B6(a.qY.hn,b)?1:0;};
function Lt(){let a=this;Bc.call(a);a.qf=null;a.pF=0;a.pX=null;}
let AHG=(a,b)=>{let c,d,e;c=a.qf;d=c.hN;e=d!==null?c.hx^d.eL(b):c.hx^B6(c.hn,b);return e&&a.pF^B6(a.pX.hn,b)?0:1;};
function Ly(){let a=this;Bc.call(a);a.qm=0;a.oU=null;a.pD=null;a.rn=null;}
let Ul=(a,b)=>{let c,d;a:{if(a.qm^a.oU.eL(b)){c=a.pD;d=c.hN;if(d!==null?c.hx^d.eL(b):c.hx^B6(c.hn,b)){b=1;break a;}}b=0;}return b;};
function Lz(){let a=this;Bc.call(a);a.p_=0;a.oG=null;a.qi=null;a.rI=null;}
let AER=(a,b)=>{let c,d;a:{if(a.p_^a.oG.eL(b)){c=a.qi;d=c.hN;if(d!==null?c.hx^d.eL(b):c.hx^B6(c.hn,b)){b=0;break a;}}b=1;}return b;};
function Gq(){let a=this;C.call(a);a.jY=null;a.n$=null;a.ij=null;a.iH=0;}
function EV(){let a=this;C.call(a);a.sG=null;a.jp=BM;a.j3=BM;a.iN=null;a.pc=null;a.jb=null;a.iL=0;a.jr=null;}
let GJ=null,BE=null,B9=0,Dn=0,Ns=null;
let ABc=a=>{let b,c,$$je;a:{b:{c:{d:{try{Dn=Dn+1|0;AE3(a);a.bg();}catch($$e){$$je=BP($$e);if($$je instanceof CT){b=$$je;break d;}else{b=$$je;break c;}}b=a.iN;Er(b);e:{try{J4(b);CO(b);break e;}catch($$e){$$je=BP($$e);c=$$je;}CO(b);E(c);}a.iL=0;Dn=Dn-1|0;b=GJ;if(BE!==b)BE=b;BE.j3=CZ();break a;}try{Tj(Y8(a),a,b);break b;}catch($$e){$$je=BP($$e);b=$$je;}}c=a.iN;Er(c);f:{try{J4(c);CO(c);break f;}catch($$e){$$je=BP($$e);b=$$je;}CO(c);E(b);}a.iL=0;Dn=Dn-1|0;c=GJ;if(BE!==c)BE=c;BE.j3=CZ();E(b);}b=a.iN;Er(b);g:{try{J4(b);CO(b);break g;}
catch($$e){$$je=BP($$e);c=$$je;}CO(b);E(c);}a.iL=0;Dn=Dn-1|0;b=GJ;if(BE!==b)BE=b;BE.j3=CZ();}},
AE3=b=>{if(BE!==b)BE=b;BE.j3=CZ();},
AKP=()=>{return BE;},
Id=b=>{let $p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHX(b);if(Ee()){break _;}return;default:D9();}}Cq().s(b,$p);},
Wy=(b,c)=>{let d,e;d=BE;e=new Lj;e.qZ=d;e.qw=c;e.sp=JG(e,AK$(b,O(2147483647))?2147483647:Bd(b));d.pc=e;},
Y8=a=>{let b;b=a.sG;if(b!==null)return b;return Ns;},
TW=()=>{let b,c,d;b=new EV;c=null;b.iN=new C;b.iL=1;b.jb=A(383);b.jr=c;d=B9;B9=d+1|0;b.jp=O(d);GJ=b;BE=b;B9=1;Dn=1;Ns=new NN;},
AHX=b=>{let thread=Cq();let javaThread=RL();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Hu(javaThread);thread.resume();};callback.fo=e=>{thread.attribute=AHn(e);Hu(javaThread);thread.resume();};callback=NR(callback);thread.suspend(()=>{try {Wy(b,callback);;}catch(Kd){callback.fo(Kd);}});return null;};
let CV=D(BA);
let GA=D(BA);
let AFQ=D();
let NO=b=>{a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;};
let X0=D();
let Sz=D();
let ED=D(0);
function Q3(){C.call(this);this.ps=null;}
let AH6=a=>{AGE(a.ps);};
let P1=D(B8);
let P2=D(B8);
let P6=D(B8);
let P7=D(B8);
let P4=D(B8);
let P5=D(B8);
let PZ=D(B8);
let P0=D(B8);
let PY=D(B8);
let KV=D(0);
let NN=D();
let Tj=(a,b,c)=>{let d;if(Ct===null){b=new Eo;d=new B5;d.h8=BF(32);BB(b);b.ii=d;d=new K;Dp(d,16);b.h$=d;b.h9=G(32);b.ic=0;b.id=BX;Ct=b;}Hq(c,Ct);};
let MO=D();
let Nq=D(0);
function M_(){C.call(this);this.kE=null;}
let NR=b=>{let c;c=new M_;c.kE=b;return c;},
AAz=(a,b)=>{a.kE.e(b);},
AJD=(a,b)=>{a.kE.fo(b);};
function Of(){let a=this;C.call(a);a.o_=null;a.pa=null;a.o9=0;a.o$=null;}
let KS=D(EP);
let XG=(a,b,c,d)=>{let e,f,g,h,i,j;e=0;f=d.hB;a:{while(true){if(b>f){b=e;break a;}g=a.hT;h=d.ib.data;i=g*2|0;j=h[i];h[i]=b;e=a.iJ.ed(b,c,d);if(e>=0)break;i=a.hT;d.ib.data[i*2|0]=j;b=b+1|0;}}return b;},
AKy=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;a:{while(true){if(c<b){c=f;break a;}g=a.hT;h=e.ib.data;i=g*2|0;j=h[i];h[i]=c;f=a.iJ.ed(c,d,e);if(f>=0)break;i=a.hT;e.ib.data[i*2|0]=j;c=c+(-1)|0;}}return c;},
Vq=a=>{return null;};
function Og(){Bc.call(this);this.r0=null;}
let AIq=(a,b)=>{return B$(b)!=2?0:1;};
function Kx(){Bc.call(this);this.r3=null;}
let TV=(a,b)=>{return B$(b)!=1?0:1;};
function NM(){Bc.call(this);this.rO=null;}
let Tk=(a,b)=>{a:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break a;default:b:{switch(B$(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}break a;}b=1;}return b;};
function NL(){Bc.call(this);this.rG=null;}
let Xz=(a,b)=>{return 0;};
function Qx(){Bc.call(this);this.sk=null;}
let ZT=(a,b)=>{return !B$(b)?0:1;};
function LS(){Bc.call(this);this.r6=null;}
let AIs=(a,b)=>{return B$(b)!=9?0:1;};
function Li(){Bc.call(this);this.sA=null;}
let AEa=(a,b)=>{return FG(b);};
function M0(){Bc.call(this);this.r1=null;}
let AFV=(a,b)=>{a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;};
function Kt(){Bc.call(this);this.q1=null;}
let AJ6=(a,b)=>{a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FG(b);}return b;};
function Kw(){Bc.call(this);this.r8=null;}
let Wk=(a,b)=>{a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FG(b);}return b;};
function Ld(){Bc.call(this);this.sj=null;}
let AIT=(a,b)=>{a:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;};
function L6(){Bc.call(this);this.su=null;}
let ACf=(a,b)=>{a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}b=1;break a;}b=0;}return b;};
function L9(){Bc.call(this);this.rP=null;}
let AFi=(a,b)=>{a:{switch(B$(b)){case 12:case 13:case 14:break;default:b=0;break a;}b=1;}return b;};
function OD(){Bc.call(this);this.r$=null;}
let AH5=(a,b)=>{return B$(b)!=3?0:1;};
function N5(){Bc.call(this);this.q4=null;}
let AJA=(a,b)=>{a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=FG(b);}return b;};
function KH(){Bc.call(this);this.sI=null;}
let V3=(a,b)=>{a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=FG(b);}return b;};
function Hk(){Bc.call(this);this.mB=0;}
let AEe=(a,b)=>{return a.hx^(a.mB!=B$(b&65535)?0:1);};
let NE=D(Hk);
let AGV=(a,b)=>{return a.hx^(!(a.mB>>B$(b&65535)&1)?0:1);};
function Tm(){let a=this;C.call(a);a.sM=0;a.sN=0;a.sK=0;a.sL=0;a.sJ=null;}
function Fh(){let a=this;EV.call(a);a.kh=0;a.je=null;a.js=null;a.jj=null;}
let AEo=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new Jy;c.jx=a;c.k2=b;c=BL(c,"handleEvent");b.onreadystatechange=c;c=a.jj;d=a.js;e=new Fi;e.ol=c;e.l_=d;c=BL(e,"handleEvent");b.onprogress=c;d=a.je;f=a.kh;b.open("GET",Br(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();};
let KI=D();
let O$=null;
let Jd=()=>{Jd=Bz(KI);AGf();};
let AGf=()=>{let b,c;b=S((PV.p()).data.length);c=b.data;O$=b;c[JZ.hk]=1;c[GN.hk]=2;};
let Qc=D();
let ABp=(a,b,c)=>{a.di(V(b),CC(c,"handleEvent"));},
ACi=(a,b,c)=>{a.dj(V(b),CC(c,"handleEvent"));},
RX=(a,b,c,d)=>{a.dk(V(b),CC(c,"handleEvent"),d?1:0);},
R$=(a,b)=>{return !!a.dl(b);},
YM=(a,b,c,d)=>{a.dn(V(b),CC(c,"handleEvent"),d?1:0);};
let Fk=D(0);
function HC(){let a=this;C.call(a);a.ks=null;a.nK=0;a.ml=null;a.og=null;a.lb=null;}
let AJF=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.ks.readyState==4){if(a.ks.status==200){if(a.lb.iE){if(BH===null){b=new Cj;c=new B5;c.h8=BF(32);b.ii=c;c=new K;BB(c);c.g8=G(16);b.h$=c;b.h9=G(32);b.ic=0;b.id=BX;BH=b;}b=a.ml;c=new K;c.g8=G(16);F(c,c.g6,A(384));d=c.g6;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.g8;f=e.data;g=c.g6;h=f.length;if(g
>=0&&g<=(h-0|0)){b.g7=L(e.data,0,g);BI(Br(b));BI("\n");}else{b=new I;b.g9=1;b.g$=1;Bl(b);E(b);}}c=a.ks.response;Eh();i=Fs.jd.document;j=i.createElement("script");b=i.createTextNode(c);j.appendChild(b);i.body.appendChild(j);V(a.ks.responseText);}else if(a.ks.status!=404&&a.ks.status!=403){try{k=O(100);$p=1;continue _;}catch($$e){$$je=BP($$e);if($$je instanceof CT){}else{throw $$e;}}Ka(a.lb,a.nK,a.ml,a.og);}b=a.lb;b.hL=b.hL-1|0;}return;case 1:a:{try{Id(k);if(Ee()){break _;}break a;}catch($$e){$$je=BP($$e);if($$je instanceof CT)
{}else{throw $$e;}}}Ka(a.lb,a.nK,a.ml,a.og);b=a.lb;b.hL=b.hL-1|0;return;default:D9();}}Cq().s(a,b,c,d,e,f,g,h,i,j,k,$p);},
Z3=(a,b)=>{let $p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJF(a,b);if(Ee()){break _;}return;default:D9();}}Cq().s(a,b,$p);};
let ACI=D();
let KO=0;
function Fx(){let a=this;C.call(a);a.lg=null;a.mv=0;a.ls=0;a.i2=0;}
let NB=a=>{let b;if(a.i2)return a.ls>=a.lg.h2?0:1;b=new Bf;b.g9=1;b.g$=1;b.ha=A(385);E(b);},
LX=a=>{let b,c,d,e,f,g,h;b=a.ls;c=a.lg;if(b<c.h2){if(a.i2){d=c.hV.data;a.ls=b+1|0;return d[b];}c=new Bf;c.g9=1;c.g$=1;c.ha=A(385);E(c);}c=new Ra;e=new K;e.g8=G(16);J(e,e.g6,b,10);f=new H;d=e.g8;g=d.data;b=e.g6;h=g.length;if(b>=0&&b<=(h-0|0)){f.g7=L(d.data,0,b);c.g9=1;c.g$=1;c.ha=f;E(c);}c=new I;Y(c);E(c);};
function Lk(){let a=this;C.call(a);a.nI=null;a.om=0;a.n3=null;a.n4=null;}
let Zk=a=>{let b,c,d;if(KO){b=new Fx;c=a.nI;d=a.om;b.i2=1;b.lg=c;b.mv=d;return b;}if(a.n3===null){b=new Fx;c=a.nI;d=a.om;b.i2=1;b.lg=c;b.mv=d;a.n3=b;b=new Fx;b.i2=1;b.lg=c;b.mv=d;a.n4=b;}b=a.n3;if(b.i2){c=a.n4;c.ls=0;c.i2=1;b.i2=0;return c;}b.ls=0;b.i2=1;a.n4.i2=0;return b;};
function Gd(){let a=this;C.call(a);a.n5=null;a.jk=null;a.qd=null;}
let AFO=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.jk.length;c=new K;c.g8=G(((b*4|0)/3|0)+2|0);d=0;a:{b:{c:{d:{e:{f:{g:{h:{while(true){if(d>=b){e=new H;f=c.g8;g=f.data;b=c.g6;h=g.length;if(b>=0&&b<=(h-0|0)){e.g7=L(f.data,0,b);return e;}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);}i=b-d|0;if(i>=3){j=(((a.jk[d]&255)<<16)+((a.jk[d+1|0]&255)<<8)|0)+(a.jk[d+2|0]&255)|0;h=j>>18&63;if(h<0)break f;if(h>=A(386).g7.length)break f;h=A(386).g7.charCodeAt(h);i=c.g6;Bn(c,i,i+1|0);c.g8.data[i]=h;h=j>>12&63;if(h<0)break g;if(h>=A(386).g7.length)break g;h
=A(386).g7.charCodeAt(h);i=c.g6;Bn(c,i,i+1|0);c.g8.data[i]=h;h=j>>6&63;if(h<0)break h;if(h>=A(386).g7.length)break h;h=A(386).g7.charCodeAt(h);i=c.g6;Bn(c,i,i+1|0);c.g8.data[i]=h;i=j&63;if(i<0)break;if(i>=A(386).g7.length)break;h=A(386).g7.charCodeAt(i);i=c.g6;Bn(c,i,i+1|0);c.g8.data[i]=h;}else if(i<2){j=(a.jk[d]&255)<<16;h=j>>18&63;if(h<0)break d;if(h>=A(386).g7.length)break d;h=A(386).g7.charCodeAt(h);i=c.g6;Bn(c,i,i+1|0);c.g8.data[i]=h;h=j>>12&63;if(h<0)break e;if(h>=A(386).g7.length)break e;h=A(386).g7.charCodeAt(h);i
=c.g6;Bn(c,i,i+1|0);c.g8.data[i]=h;F(c,c.g6,A(387));}else{k=((a.jk[d]&255)<<16)+((a.jk[d+1|0]&255)<<8)|0;h=k>>18&63;if(h<0)break a;if(h>=A(386).g7.length)break a;h=A(386).g7.charCodeAt(h);i=c.g6;Bn(c,i,i+1|0);c.g8.data[i]=h;h=k>>12&63;if(h<0)break b;if(h>=A(386).g7.length)break b;h=A(386).g7.charCodeAt(h);i=c.g6;Bn(c,i,i+1|0);c.g8.data[i]=h;h=k>>6&63;if(h<0)break c;if(h>=A(386).g7.length)break c;h=A(386).g7.charCodeAt(h);i=c.g6;Bn(c,i,i+1|0);c.g8.data[i]=h;F(c,c.g6,A(388));}d=d+3|0;}e=new Q;e.g9=1;e.g$=1;E(e);}e
=new Q;e.g9=1;e.g$=1;E(e);}e=new Q;e.g9=1;e.g$=1;E(e);}e=new Q;e.g9=1;e.g$=1;E(e);}e=new Q;e.g9=1;e.g$=1;E(e);}e=new Q;e.g9=1;e.g$=1;E(e);}e=new Q;e.g9=1;e.g$=1;E(e);}e=new Q;e.g9=1;e.g$=1;E(e);}e=new Q;e.g9=1;e.g$=1;E(e);};
function KJ(){C.call(this);this.nT=null;}
let Q6=D(0);
let Oo=D(0);
let O6=D(0);
let FI=D();
let DL=a=>{return;};
function Gg(){FI.call(this);this.ii=null;}
let Ez=(a,b)=>{a.ii=b;},
AL_=a=>{let b=new Gg();Ez(b,a);return b;};
function Gz(){let a=this;Gg.call(a);a.ic=0;a.h$=null;a.h9=null;a.id=null;}
let Qt=(a,b,c)=>{a.ii=b;b=new K;b.g8=G(16);a.h$=b;a.h9=G(32);a.ic=c;a.id=BX;},
ALI=(a,b)=>{let c=new Gz();Qt(c,a,b);return c;};
let FD=D(Gz);
let Cj=D(FD);
let AAf=(a,b)=>{BI(Br(b));};
function Fi(){let a=this;C.call(a);a.l_=null;a.ol=null;}
let ADF=(a,b)=>{a.l_.fr(b.loaded);};
let T8=D();
function B5(){FI.call(this);this.h8=null;}
let TR=(a,b)=>{a.h8=BF(b);},
AHA=a=>{let b=new B5();TR(b,a);return b;};
function HI(){let a=this;C.call(a);a.oD=null;a.pj=null;}
let G3=b=>{let c,d,e;if(b.g7.length?0:1){c=new G7;c.g9=1;c.g$=1;c.nd=b;E(c);}if(0>=b.g7.length){b=new Q;b.g9=1;b.g$=1;E(b);}if(!Pv(b.g7.charCodeAt(0))){c=new G7;c.g9=1;c.g$=1;c.nd=b;E(c);}d=1;a:{while(d<b.g7.length){if(d<0)break a;if(d>=b.g7.length)break a;b:{e=b.g7.charCodeAt(d);switch(e){case 43:case 45:case 46:case 58:case 95:break;default:if(Pv(e))break b;else{c=new G7;c.g9=1;c.g$=1;c.nd=b;E(c);}}}d=d+1|0;}return;}b=new Q;b.g9=1;b.g$=1;E(b);},
Pv=b=>{a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;};
let J_=D(HI);
let BX=null;
let ALd=()=>{let b,c,d,e,f;b=new J_;c=R(H,0);d=c.data;G3(A(3));e=d.length;f=0;while(f<e){G3(d[f]);f=f+1|0;}b.oD=A(3);b.pj=c.p();BX=b;};
function G7(){Bs.call(this);this.nd=null;}
let L0=D(0);
function IA(){let a=this;C.call(a);a.pZ=0;a.lu=0;a.qr=0;a.rj=0;a.l8=0;a.jm=null;a.lI=null;a.ss=0;a.qF=0;a.pp=0;a.r_=0;a.qk=0;a.q$=0;a.nS=null;a.mp=null;a.nL=null;}
let NZ=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o;a.nS=D3();a.rj=b;a.qF=e;a.lI=f;g=T6(a,c,d,e);h=new N2;h.o5=1;h.mP=0;f=new Bb;B_();h.sa=f;f=YS(g);h.iS=En===null?ABB(0,b,f):AAQ(0,b,f);f=new NG;f.lY=1;f.nE=0;f.rK=1;if(!C$){g=ALc(0);d=g.data.length;i=new Qu;j=0+d|0;AG3(i,d);i.hl=0;i.he=j;i.qh=0;i.q2=0;i.po=g;}else{k=new Db;g=BF(0);BB(k);k.hD=(-1);k.hE=0;k.he=0;k.ia=Cz;k.ix=0;k.h6=g;k.hl=0;k.he=0;k.ji=1;k.ip=0;k.ia=Df();i=AKe(k);}f.jR=i;i.he=i.hl;i.hl=0;i.hD=(-1);i=Bx;k=i.hf.createBuffer();d=i.jt;i.jt=d+1|0;Cc(i.jS,
d,Cd(k));f.o1=d;f.pQ=35048;h.kq=f;h.qo=0;f=Dc;i=JH;if(f===null){i=i.jH.data[0];while(i!==null&&i.jv!==null){i=i.j7;}}else{k=f;if(!k.$id$){l=Gl();k.$id$=l;}m=f.$id$;g=i.jH.data;i=g[m&(g.length-1|0)];while(i!==null){if(i.lJ==m){k=i.jv;if(f!==k&&!(f!==k?0:1)?0:1)break;}i=i.j7;}}i=i===null?null:i.jW;if(i===null){i=new Cy;i.iI=1;i.hV=R(C,16);}Di(i,h);AHV(JH,f,i);a.jm=h;a.mp=Cm(CB(b,(h.iS.fz()).i$/4|0));a.pp=(a.jm.iS.fz()).i$/4|0;g=(a.jm.iS.fz()).ir.data;b=g.length;d=0;a:{while(d<b){if(g[d].jh==8){f=g[d];break a;}d
=d+1|0;}f=null;}if(f===null)b=0;else{g=(a.jm.iS.fz()).ir.data;m=g.length;c=0;b:{while(c<m){if(g[c].jh==8){f=g[c];break b;}c=c+1|0;}f=null;}b=f.kp/4|0;}a.r_=b;g=(a.jm.iS.fz()).ir.data;m=g.length;c=0;c:{while(c<m){if(g[c].jh==4){f=g[c];break c;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.jm.iS.fz()).ir.data;m=g.length;c=0;d:{while(c<m){if(g[c].jh==4){f=g[c];break d;}c=c+1|0;}f=null;}b=f.kp/4|0;}a.qk=b;g=(a.jm.iS.fz()).ir.data;m=g.length;c=0;e:{while(c<m){if(g[c].jh==16){f=g[c];break e;}c=c+1|0;}f=null;}if(f===
null)b=0;else{g=(a.jm.iS.fz()).ir.data;m=g.length;c=0;f:{while(c<m){if(g[c].jh==16){f=g[c];break f;}c=c+1|0;}f=null;}b=f.kp/4|0;}a.q$=b;a.nL=R(H,e);m=0;g:{while(m<e){g=a.nL;f=new K;f.g8=G(16);F(f,f.g6,A(389));J(f,f.g6,m,10);i=new H;n=f.g8;o=n.data;c=f.g6;d=o.length;if(c<0)break g;if(c>(d-0|0))break g;g=g.data;i.g7=L(n.data,0,c);g[m]=i;m=m+1|0;}return;}f=new I;f.g9=1;f.g$=1;Bl(f);E(f);},
ALx=(a,b,c,d,e)=>{let f=new IA();NZ(f,a,b,c,d,e);return f;},
T6=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new Cy;e.iI=1;e.hV=R(C,16);f=new Et;f.jh=1;f.jo=3;f.jZ=5126;f.kg=0;f.j9=A(390);f.mK=0;f.mC=DX(1);Di(e,f);if(b){g=new Et;g.jh=8;g.jo=3;g.jZ=5126;g.kg=0;g.j9=A(391);g.mK=0;g.mC=DX(8);Di(e,g);}if(c){g=new Et;g.jh=4;g.jo=4;g.jZ=5121;g.kg=1;g.j9=A(392);g.mK=0;g.mC=DX(4);Di(e,g);}h=0;while(true){if(h>=d){b=e.h2;i=R(Et,b);j=i.data;h=0;while(true){c=B4(h,b);if(c>=0)break;if(c>=0){f=new I;g=new K;g.g8=G(16);F(g,g.g6,A(76));J(g,g.g6,h,10);F(g,g.g6,A(77));b=e.h2;J(g,g.g6,b,10);e=
new H;i=g.g8;j=i.data;c=g.g6;d=j.length;if(c>=0&&c<=(d-0|0)){e.g7=L(i.data,0,c);f.g9=1;f.g$=1;f.ha=e;E(f);}e=new I;Y(e);E(e);}j[h]=e.hV.data[h];h=h+1|0;}return i;}g=new Et;f=new K;f.g8=G(16);F(f,f.g6,A(393));J(f,f.g6,h,10);k=new H;i=f.g8;j=i.data;l=f.g6;m=j.length;if(l<0)break;if(l>(m-0|0))break;k.g7=L(i.data,0,l);g.jh=16;g.jo=2;g.jZ=5126;g.kg=0;g.j9=k;g.mK=0;g.mC=DX(16);Di(e,g);h=h+1|0;}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);},
ACc=(a,b,c,d)=>{let e,f;e=a.lu;f=a.mp.data;f[e]=b;f[e+1|0]=c;f[e+2|0]=d;a.qr=0;a.lu=e+a.pp|0;a.l8=a.l8+1|0;},
AHT=a=>{let b,c,d,e,f,g,h;if(!a.l8)return;b=a.lI;c=Bx;if(b.h7){CH(b,b.iM,b.iQ);b.h7=0;}c.fB(b.iZ);c=a.lI;d=a.nS;Ho();e=NT(c,A(394),Jf);b=Bx;if(c.h7){CH(c,c.iM,c.iQ);c.h7=0;}XI(b,e,1,0,d.iy,0);f=0;while(f<a.qF){b=a.lI;c=a.nL.data[f];d=Bx;if(b.h7){CH(b,b.iM,b.iQ);b.h7=0;}d.fE(NT(b,c,Jf),f);f=f+1|0;}b=a.jm;g=a.mp;h=a.lu;b.iS.fF(g,0,h);b=a.jm;c=a.lI;f=a.pZ;d=b.kq.jR;ACw(b,c,f,0,d.hE<=0?b.iS.fH():d.he,b.o5);a.qr=0;a.lu=0;a.l8=0;},
Rv=(b,c,d)=>{let e,f,g,h,i,j,k;e=new K;e.g8=G(16);F(e,e.g6,A(395));f=!b?A(59):A(396);F(e,e.g6,f);f=!c?A(59):A(397);F(e,e.g6,f);f=new H;g=e.g8;h=g.data;i=e.g6;j=h.length;if(i>=0&&i<=(j-0|0)){f.g7=L(g.data,0,i);i=0;while(true){if(i>=d){e=new K;e.g8=G(16);F(e,e.g6,f);F(e,e.g6,A(398));f=!c?A(59):A(399);F(e,e.g6,f);f=new H;g=e.g8;h=g.data;b=e.g6;j=h.length;if(b>=0&&b<=(j-0|0)){f.g7=L(g.data,0,b);i=0;while(true){if(i>=d){e=new K;e.g8=G(16);F(e,e.g6,f);F(e,e.g6,A(400));f=new H;g=e.g8;h=g.data;i=e.g6;j=h.length;if(i
>=0&&i<=(j-0|0)){f.g7=L(g.data,0,i);if(c){e=new K;e.g8=G(16);F(e,e.g6,f);F(e,e.g6,A(401));f=new H;g=e.g8;h=g.data;c=e.g6;i=h.length;if(c>=0&&c<=(i-0|0))f.g7=L(g.data,0,c);else{e=new I;e.g9=1;e.g$=1;Bl(e);E(e);}}i=0;while(true){if(i>=d){e=new K;e.g8=G(16);F(e,e.g6,f);F(e,e.g6,A(402));f=new H;g=e.g8;h=g.data;c=e.g6;d=h.length;if(c>=0&&c<=(d-0|0)){f.g7=L(g.data,0,c);return f;}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);}e=new K;e.g8=G(16);F(e,e.g6,f);F(e,e.g6,A(403));J(e,e.g6,i,10);F(e,e.g6,A(404));F(e,e.g6,A(393));J(e,e.g6,
i,10);F(e,e.g6,A(405));f=new H;g=e.g8;h=g.data;c=e.g6;j=h.length;if(c<0)break;if(c>(j-0|0))break;f.g7=L(g.data,0,c);i=i+1|0;}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);}e=new K;e.g8=G(16);F(e,e.g6,f);F(e,e.g6,A(406));J(e,e.g6,i,10);F(e,e.g6,A(405));f=new H;g=e.g8;h=g.data;j=e.g6;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.g7=L(g.data,0,j);i=i+1|0;}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);}e=new K;e.g8=G(16);F(e,e.g6,f);F(e,e.g6,A(407));J(e,e.g6,i,10);F(e,e.g6,
A(405));f=new H;g=e.g8;h=g.data;j=e.g6;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.g7=L(g.data,0,j);i=i+1|0;}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);},
AB5=(b,c,d)=>{let e,f,g,h,i,j,k;e=A(408);if(c){f=new K;f.g8=G(16);F(f,f.g6,e);F(f,f.g6,A(399));e=new H;g=f.g8;h=g.data;i=f.g6;j=h.length;if(i>=0&&i<=(j-0|0))e.g7=L(g.data,0,i);else{e=new I;e.g9=1;e.g$=1;Bl(e);E(e);}}i=0;a:{while(true){if(i>=d){f=new K;f.g8=G(16);F(f,f.g6,e);F(f,f.g6,A(409));e=!c?A(410):A(411);F(f,f.g6,e);e=new H;h=f.g8;g=h.data;b=f.g6;c=g.length;if(b>=0&&b<=(c-0|0)){e.g7=L(h.data,0,b);if(d>0){f=new K;f.g8=G(16);F(f,f.g6,e);F(f,f.g6,A(412));e=new H;g=f.g8;h=g.data;c=f.g6;i=h.length;if(c>=0&&
c<=(i-0|0))e.g7=L(g.data,0,c);else{e=new I;e.g9=1;e.g$=1;Bl(e);E(e);}}i=0;c=d-1|0;b:{while(true){if(i>=d){f=new K;f.g8=G(16);F(f,f.g6,e);F(f,f.g6,A(413));e=new H;g=f.g8;h=g.data;c=f.g6;d=h.length;if(c>=0&&c<=(d-0|0)){e.g7=L(g.data,0,c);return e;}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);}if(i!=c){f=new K;f.g8=G(16);F(f,f.g6,e);F(f,f.g6,A(414));J(f,f.g6,i,10);F(f,f.g6,A(415));J(f,f.g6,i,10);F(f,f.g6,A(416));e=new H;g=f.g8;h=g.data;j=f.g6;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.g7=L(g.data,0,j);}else{f=new K;f.g8
=G(16);F(f,f.g6,e);F(f,f.g6,A(414));J(f,f.g6,i,10);F(f,f.g6,A(415));J(f,f.g6,i,10);F(f,f.g6,A(417));e=new H;g=f.g8;h=g.data;j=f.g6;k=h.length;if(j<0)break b;if(j>(k-0|0))break b;e.g7=L(g.data,0,j);}i=i+1|0;}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);}f=new K;f.g8=G(16);F(f,f.g6,e);F(f,f.g6,A(406));J(f,f.g6,i,10);F(f,f.g6,A(405));e=new H;g=f.g8;h=g.data;j=f.g6;k=h.length;if(j<0)break a;if(j>(k-0|0))break a;e.g7=L(g.data,0,j);f=new K;f.g8=G(16);F(f,f.g6,
e);F(f,f.g6,A(418));J(f,f.g6,i,10);F(f,f.g6,A(405));e=new H;g=f.g8;h=g.data;j=f.g6;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.g7=L(g.data,0,j);i=i+1|0;}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);};
function Kc(){let a=this;C.call(a);a.m2=null;a.qA=0.0;a.qN=0.0;a.oE=0;a.oF=0;a.p2=0;a.qv=0;a.rJ=null;}
let Qi=(a,b)=>{let c,d,e,f;ABf(a.oE,a.oF,a.p2,a.qv);c=a.m2;d=a.qA;c.nt=d;e=a.qN;c.nY=e;if(b){f=c.nX;d=d/2.0;e=e/2.0;f.hb=d;f.hd=e;f.hc=0.0;}AKA(c,1);};
function Ob(){Kc.call(this);this.oY=0.0;}
function Mw(){FU.call(this);this.rg=null;}
let R1=D();
let Ra=D(BA);
let Bf=D(BA);
let Wf=D();
let Mh=(b,c)=>{let d;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;};
function Dj(){C.call(this);this.jc=null;}
let Tx=a=>{ABc(a.jc);};
let Xi=D();
let QZ=D();
let K5=null;
let JW=()=>{JW=Bz(QZ);AGG();};
let AGG=()=>{let b,c;b=S((J7.p()).data.length);c=b.data;K5=b;c[Eq.hk]=1;c[Ej.hk]=2;c[Ea.hk]=3;c[D6.hk]=4;c[Hi.hk]=5;};
let JR=D(BA);
function J0(){let a=this;C.call(a);a.nX=null;a.pK=null;a.qa=null;a.ny=null;a.oe=null;a.lO=null;a.mj=null;a.oj=0.0;a.p9=0.0;a.nt=0.0;a.nY=0.0;a.p3=null;a.rv=null;a.rd=null;}
let AFd=a=>{let b,c,d;b=new Bb;B_();a.nX=b;b=new Bb;b.hb=0.0;b.hd=0.0;b.hc=(-1.0);a.pK=b;b=new Bb;b.hb=0.0;b.hd=1.0;b.hc=0.0;a.qa=b;a.ny=D3();a.oe=D3();a.lO=D3();a.mj=D3();a.oj=1.0;a.p9=100.0;a.nt=0.0;a.nY=0.0;a.p3=AEX();a.rv=new Bb;b=new IM;I$();c=new Bb;b.rp=c;d=new Bb;b.sf=d;c.hb=0.0;c.hd=0.0;c.hc=0.0;d.hb=0.0;d.hd=0.0;d.hc=0.0;a.rd=b;};
function Mq(){let a=this;J0.call(a);a.oW=0.0;a.qg=null;}
let AKA=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.ny;d=a.oW;e=a.nt;f=d* -e/2.0;e=d*e/2.0;g=a.nY;AC3(c,f,e,d* -(g/2.0),d*g/2.0,a.oj,a.p9);c=a.oe;h=a.nX;i=a.qg;d=h.hb;j=h.hd;f=h.hc;i.hb=d;i.hd=j;i.hc=f;k=a.pK;l=k.hb;e=k.hd;g=k.hc;d=d+l;j=j+e;f=f+g;i.hb=d;i.hd=j;i.hc=f;i=a.qa;k=Qz;k.hb=d;k.hd=j;k.hc=f;l=h.hb;e=h.hd;g=h.hc;l=d-l;e=j-e;g=f-g;k.hb=l;k.hd=e;k.hc=g;Xc(c,k,i);i=LQ;l= -h.hb;e= -h.hd;g= -h.hc;If(i);m=i.iy.data;m[12]=l;m[13]=e;m[14]=g;ACB(c,i);Gm(a.lO,a.ny.iy);Sn(a.lO.iy,a.oe.iy);if(b){Gm(a.mj,a.lO.iy);XA(a.mj.iy);ADP(a.p3,
a.mj);}};
let Eo=D(FD);
let Yl=(a,b)=>{CI(Br(b));};
let Wt=D(Dr);
let Rg=null;
let AK1=()=>{Rg=Bk(WY);};
let AEx=D();
let Kq=null,Mk=null,MY=null;
let ZY=()=>{Kq=UY([O(1),O(10),O(100),O(10000),O(100000000),B(1874919424, 2328306)]);Mk=new Jk;MY=new PF;};
let AE_=D();
let H4=BM,Sl=null,FT=null,Gc=null;
let ZL=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!(isNaN(b)?1:0)?AMd(b):B(0, 2146959360);c.oQ=C6(Ch(d,B(0, 2147483648)),BM)?0:1;e=Ch(d,B(4294967295, 1048575));f=Bd(ALw(d,52))&2047;if(C6(e,BM)&&!f){c.nV=BM;c.nf=0;return;}if(f)e=W6(e,B(0, 1048576));else{e=Ek(e,1);while(C6(Ch(e,B(0, 1048576)),BM)){e=Ek(e,1);f=f+(-1)|0;}}g=Gc;h=AFJ(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=Gc.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=GD(e,FT.data[i],j);if(WP(k,H4)){while(DU(k,H4)<=0){h=h+(-1)|0;k=Ci(U(k,O(10)),O(9));}g=Gc.data;i=h+1
|0;j=12+(f-g[i]|0)|0;k=GD(e,FT.data[i],j);}e=Ek(e,1);d=Ci(e,O(1));g=FT.data;i=h+1|0;l=g[i];f=j-1|0;m=GD(d,l,f);l=GD(Nj(e,O(1)),FT.data[i],f);n=O(1);while(true){o=U(n,O(10));if(DU(DF(k,o),DF(l,o))<=0)break;n=o;}p=O(1);while(true){q=U(p,O(10));if(DU(DF(k,q),DF(m,q))>=0)break;p=q;}i=DU(n,p);e=i>0?U(DF(k,n),n):i<0?Ci(U(DF(k,p),p),p):U(DF(Ci(k,Jw(p,O(2))),p),p);if(DU(e,B(2808348672, 232830643))>=0)while(true){h=h+1|0;e=DF(e,O(10));if(DU(e,B(2808348672, 232830643))<0)break;}else if(DU(e,B(1569325056, 23283064))<0)
{h=h+(-1)|0;e=U(e,O(10));}c.nV=e;c.nf=h-330|0;},
GD=(b,c,d)=>{let e,f,g,h,i,j,k,l;e=Ch(b,O(65535));f=Ch(X(b,16),O(65535));g=Ch(X(b,32),O(65535));h=Ch(X(b,48),O(65535));i=Ch(c,O(65535));j=Ch(X(c,16),O(65535));k=Ch(X(c,32),O(65535));l=Ch(X(c,48),O(65535));return Ci(Ci(Ci(Ek(U(l,h),32+d|0),Ek(Ci(U(l,g),U(k,h)),16+d|0)),Ek(Ci(Ci(U(l,f),U(k,g)),U(j,h)),d)),X(Ci(Ci(Ci(U(k,e),U(j,f)),U(i,g)),Ek(Ci(Ci(Ci(U(l,e),U(k,f)),U(j,g)),U(i,h)),16)),32-d|0));},
YW=()=>{H4=DF(O(-1),O(10));Sl=ADx();FT=UY([B(3251292512, 2194092222),B(1766094183, 3510547556),B(553881887, 2808438045),B(443105509, 2246750436),B(3285949193, 3594800697),B(910772436, 2875840558),B(2446604867, 2300672446),B(2196580869, 3681075914),B(2616258154, 2944860731),B(1234013064, 2355888585),B(1974420903, 3769421736),B(720543263, 3015537389),B(1435428070, 2412429911),B(578697993, 3859887858),B(2180945313, 3087910286),B(885762791, 2470328229),B(3135207384, 3952525166),B(1649172448, 3162020133),B(3037324877, 2529616106),
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
B(3348809418, 2876309015),B(2679047534, 2301047212),B(850502218, 3681675540),B(680401775, 2945340432),B(3121301797, 2356272345),B(699115580, 3770035753),B(2277279382, 3016028602),B(103836587, 2412822882),B(1025131999, 3860516611),B(4256079436, 3088413288),B(827883168, 2470730631),B(3901593088, 3953169009)]);Gc=AMe([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);};
function Jk(){let a=this;C.call(a);a.nV=BM;a.nf=0;a.oQ=0;}
let UC=a=>{return;},
ADx=()=>{let a=new Jk();UC(a);return a;};
function IV(){let a=this;C.call(a);a.jz=null;a.ka=0;a.l2=null;a.pu=null;a.qc=null;a.pI=null;a.kA=null;a.pG=null;a.qp=null;a.pf=null;a.iZ=0;a.nu=0;a.oH=0;a.sx=null;a.iM=null;a.iQ=null;a.h7=0;a.sn=0;a.i1=null;a.ln=null;}
let Jf=0,JV=null,IS=null,JL=null,AGr=null;
let Ho=()=>{Ho=Bz(IV);AFw();};
let AJ5=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;Ho();a.jz=A(59);a.l2=EO(51,0.800000011920929);a.pu=EO(51,0.800000011920929);a.qc=EO(51,0.800000011920929);a.kA=EO(51,0.800000011920929);a.pG=EO(51,0.800000011920929);a.qp=EO(51,0.800000011920929);a.sn=0;if(!C$){d=S(1);e=d.data.length;f=new EK;g=0+e|0;f.hD=(-1);f.hE=e;f.he=e;f.hl=0;f.he=g;f.ky=0;f.lj=0;f.kl=d;}else{h=new Db;d=BF(4);h.hD=(-1);h.hE=4;h.he=4;h.ia=Cz;h.ix=0;h.h6=d;h.hl=0;h.he=4;h.ji=1;h.ip=0;h.ia=Df();f=Fd(h);}a.i1=f;if(!C$){d=S(1);e=d.data.length;f=new EK;g
=0+e|0;f.hD=(-1);f.hE=e;f.he=e;f.hl=0;f.he=g;f.ky=0;f.lj=0;f.kl=d;}else{h=new Db;d=BF(4);h.hD=(-1);h.hE=4;h.he=4;h.ia=Cz;h.ix=0;h.h6=d;h.hl=0;h.he=4;h.ji=1;h.ip=0;h.ia=Df();f=Fd(h);}a.ln=f;if(b===null){b=new Bs;b.g9=1;b.g$=1;b.ha=A(419);E(b);}if(c===null){b=new Bs;b.g9=1;b.g$=1;b.ha=A(420);E(b);}f=JV;if(f!==null&&f.g7.length>0){f=new K;f.g8=G(16);h=JV;F(f,f.g6,h);F(f,f.g6,b);b=new H;d=f.g8;i=d.data;e=f.g6;j=i.length;if(e>=0&&e<=(j-0|0))b.g7=L(d.data,0,e);else{b=new I;b.g9=1;b.g$=1;Bl(b);E(b);}}f=IS;if(f!==null
&&f.g7.length>0){f=new K;f.g8=G(16);h=IS;F(f,f.g6,h);F(f,f.g6,c);c=new H;d=f.g8;i=d.data;e=f.g6;j=i.length;if(e>=0&&e<=(j-0|0))c.g7=L(d.data,0,e);else{b=new I;b.g9=1;b.g$=1;Bl(b);E(b);}}a.iM=b;a.iQ=c;if(!C$){i=Cm(16);k=i.data.length;f=new Hc;l=0+k|0;f.hD=(-1);f.hE=k;f.he=k;f.hl=0;f.he=l;f.lX=0;f.mq=0;f.lC=i;}else{f=new Db;d=BF(64);f.hD=(-1);f.hE=64;f.he=64;f.ia=Cz;f.ix=0;f.h6=d;f.hl=0;f.he=64;f.ji=1;f.ip=0;f.ia=Df();f=I7(f);}a.sx=f;CH(a,b,c);if(a.ka){XB(a);ACb(a);b=Dc;c=JL;l=Du(c,b);c=l<0?null:c.jE.data[l];if
(c===null){c=new Cy;c.iI=1;c.hV=R(C,16);}Di(c,a);DE(JL,b,c);}},
XX=(a,b)=>{let c=new IV();AJ5(c,a,b);return c;},
CH=(a,b,c)=>{let d;a.nu=Rd(a,35633,b);d=Rd(a,35632,c);a.oH=d;if(a.nu!=(-1)&&d!=(-1)){d=Bx.fZ();if(!d)d=(-1);d=AHm(a,d);a.iZ=d;if(d!=(-1)){a.ka=1;return;}a.ka=0;return;}a.ka=0;},
Rd=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=Bx;if(!C$){e=S(1);f=e.data.length;g=new EK;h=0+f|0;g.hD=(-1);g.hE=f;g.he=f;g.hl=0;g.he=h;g.ky=0;g.lj=0;g.kl=e;}else{g=new Db;e=BF(4);g.hD=(-1);g.hE=4;g.he=4;g.ia=Cz;g.ix=0;g.h6=e;g.hl=0;g.he=4;g.ji=1;g.ip=0;g.ia=Df();g=Fd(g);}i=d.f1(b);if(!i)return (-1);d.f2(i,c);d.f3(i);d.c7(i,35713,g);if(DR(g,0))return i;j=d.f4(i);c=new K;c.g8=G(16);d=a.jz;F(c,c.g6,d);d=b!=35633?A(421):A(422);F(c,c.g6,d);d=new H;e=c.g8;k=e.data;i=c.g6;l=k.length;if(i>=0&&i<=(l-0|0)){d.g7=L(e.data,0,i);a.jz
=d;c=new K;c.g8=G(16);F(c,c.g6,d);F(c,c.g6,j);d=new H;e=c.g8;k=e.data;i=c.g6;l=k.length;if(i>=0&&i<=(l-0|0)){d.g7=L(e.data,0,i);a.jz=d;return (-1);}c=new I;c.g9=1;c.g$=1;Bl(c);E(c);}c=new I;c.g9=1;c.g$=1;Bl(c);E(c);},
AHm=(a,b)=>{let c,d,e,f;c=Bx;if(b==(-1))return (-1);c.f5(b,a.nu);c.f5(b,a.oH);c.f6(b);d=new Db;e=BF(4);d.hD=(-1);d.hE=4;d.he=4;d.ia=Cz;d.ix=0;d.h6=e;d.hl=0;d.he=4;d.ji=1;d.ip=0;d.ia=Df();f=Fd(d);c.c6(b,35714,f);if(DR(f,0))return b;a.jz=Bx.bY(b);return (-1);},
NT=(a,b,c)=>{let d,e,f,g,h,i;d=a.l2;e=(-2);f=EH(d,b);if(f>=0)e=d.i6.data[f];if(e==(-2)){e=Bx.f7(a.iZ,b);if(e==(-1)&&c){if(a.ka){d=new Bs;g=new K;g.g8=G(16);F(g,g.g6,A(423));F(g,g.g6,b);F(g,g.g6,A(424));b=new H;h=g.g8;i=h.data;e=g.g6;f=i.length;if(e>=0&&e<=(f-0|0)){b.g7=L(h.data,0,e);d.g9=1;d.g$=1;d.ha=b;E(d);}b=new I;b.g9=1;b.g$=1;Bl(b);E(b);}b=new CV;d=new K;d.g8=G(16);F(d,d.g6,A(425));if(!a.ka)g=a.jz;else{g=Bx.bY(a.iZ);a.jz=g;}F(d,d.g6,g);g=new H;h=d.g8;i=h.data;e=d.g6;f=i.length;if(e>=0&&e<=(f-0|0)){g.g7
=L(h.data,0,e);b.g9=1;b.g$=1;b.ha=g;E(b);}b=new I;b.g9=1;b.g$=1;Bl(b);E(b);}D1(a.l2,b,e);}return e;},
ACb=a=>{let b,c,d,e,f;b=a.i1;b.hl=0;b.he=b.hE;b.hD=(-1);Bx.c6(a.iZ,35718,b);c=DR(a.i1,0);a.pI=R(H,c);d=0;while(d<c){b=a.i1;b.hl=0;b.he=b.hE;b.hD=(-1);Qn(b,0,1);b=a.ln;b.hl=0;b.he=b.hE;b.hD=(-1);e=Bx.c5(a.iZ,d,a.i1,b);f=Bx.f7(a.iZ,e);D1(a.l2,e,f);D1(a.pu,e,DR(a.ln,0));D1(a.qc,e,DR(a.i1,0));a.pI.data[d]=e;d=d+1|0;}},
XB=a=>{let b,c,d,e,f;b=a.i1;b.hl=0;b.he=b.hE;b.hD=(-1);Bx.c6(a.iZ,35721,b);c=DR(a.i1,0);a.pf=R(H,c);d=0;while(d<c){b=a.i1;b.hl=0;b.he=b.hE;b.hD=(-1);Qn(b,0,1);b=a.ln;b.hl=0;b.he=b.hE;b.hD=(-1);e=Bx.c4(a.iZ,d,a.i1,b);f=Bx.f$(a.iZ,e);D1(a.kA,e,f);D1(a.pG,e,DR(a.ln,0));D1(a.qp,e,DR(a.i1,0));a.pf.data[d]=e;d=d+1|0;}},
AFw=()=>{let b,c,d,e;Jf=1;JV=A(59);IS=A(59);JL=DI(51,0.800000011920929);if(!C$){b=S(1);c=b.data.length;d=new EK;e=0+c|0;d.hD=(-1);d.hE=c;d.he=c;d.hl=0;d.he=e;d.ky=0;d.lj=0;d.kl=b;}else{d=new Db;b=BF(4);d.hD=(-1);d.hE=4;d.he=4;d.ia=Cz;d.ix=0;d.h6=b;d.hl=0;d.he=4;d.ji=1;d.ip=0;d.ia=Df();d=Fd(d);}AGr=d;};
function N2(){let a=this;C.call(a);a.iS=null;a.kq=null;a.o5=0;a.qo=0;a.lB=null;a.mP=0;a.sa=null;}
let JH=null;
let ACw=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;if(!e)return;if(f){g=null;h=null;a.iS.f_(b,g);g=a.lB;if(g!==null&&g.ga()>0)a.lB.f_(b,h);g=a.kq;if(g.jR.he>0)AIP(g);}if(a.qo){h=a.kq;g=h.jR;if(g.he<=0)Bx.gc(c,d,e);else{h.lY=h.lY|0;i=g.hl;Cu(g,d);Bx.gd(c,e,5123,g);Cu(g,i);}}else{j=0;if(a.mP)j=a.lB.ga();g=a.kq.jR;if(g.he<=0){if(a.mP&&j>0)En.ge(c,d,e,j);else Bx.gc(c,d,e);}else{if((e+d|0)>g.hE){b=new Bf;g=new K;g.g8=G(16);F(g,g.g6,A(426));J(g,g.g6,e,10);F(g,g.g6,A(427));J(g,g.g6,d,10);F(g,g.g6,A(428));e=a.kq.jR.hE;J(g,g.g6,
e,10);F(g,g.g6,A(417));h=new H;k=g.g8;l=k.data;d=g.g6;e=l.length;if(d>=0&&d<=(e-0|0)){h.g7=L(k.data,0,d);b.g9=1;b.g$=1;b.ha=h;E(b);}b=new I;b.g9=1;b.g$=1;Bl(b);E(b);}if(a.mP&&j>0)En.gf(c,e,5123,d*2|0,j);else Bx.gg(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.iS.gh(b,g);g=a.lB;if(g!==null&&g.ga()>0)a.lB.gh(b,h);b=a.kq;if(b.jR.he>0){Bx.gi(34963,0);b.nE=0;}}},
AJ8=()=>{let b,c,d,e;b=new GG;c=Hj(16);b.kj=0;d=R(Ep,c);e=d.data;b.jH=d;b.mW=0.75;b.kY=e.length*0.75|0;JH=b;};
function Lp(){let a=this;C.call(a);a.ir=null;a.i$=0;a.rh=BM;a.rW=0;a.sc=0;}
let ACk=(a,b)=>{let c,d,e,f,g,h;b=b.data;a.rh=O(-1);a.rW=(-1);a.sc=(-1);c=b.length;if(!c){d=new Bs;d.g9=1;d.g$=1;d.ha=A(429);E(d);}e=R(Et,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.ir=e;c=0;h=0;while(h<f.length){a:{b:{d=f[h];d.kp=c;switch(d.jZ){case 5120:case 5121:break;case 5122:case 5123:g=2*d.jo|0;break a;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break b;case 5126:case 5132:g=4*d.jo|0;break a;default:break b;}g=d.jo;break a;}g=0;}c=c+g|0;h=h+1|0;}a.i$=c;},
YS=a=>{let b=new Lp();ACk(b,a);return b;};
let JK=D(0);
let Qh=D(0);
function Lj(){let a=this;C.call(a);a.qZ=null;a.qw=null;a.rY=0;a.sp=0;}
let AFa=a=>{let b,c;if(!a.rY){b=a.qZ;b.pc=null;if(BE!==b)BE=b;BE.j3=CZ();c=a.qw;b=null;c.kE.e(b);}};
function Pn(){let a=this;C.call(a);a.nb=0;a.kf=null;a.i6=null;a.pe=0.0;a.no=0;a.mS=0;a.mM=0;}
let YY=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.pe=c;d=G8(b,c);a.no=d*c|0;b=d-1|0;a.mM=b;a.mS=DV(O(b));a.kf=R(C,d);a.i6=S(d);return;}e=new Bs;f=new K;f.g8=G(16);F(f,f.g6,A(40));GS(f,f.g6,c);g=new H;h=f.g8;i=h.data;d=f.g6;j=i.length;if(d>=0&&d<=(j-0|0)){g.g7=L(h.data,0,d);e.g9=1;e.g$=1;e.ha=g;E(e);}f=new I;f.g9=1;f.g$=1;Bl(f);E(f);},
EO=(a,b)=>{let c=new Pn();YY(c,a,b);return c;},
EH=(a,b)=>{let c,d,e,f,g,h;if(b===null){c=new Bs;c.g9=1;c.g$=1;c.ha=A(41);E(c);}a:{d=a.kf;if(!b.h4){e=0;while(true){if(e>=b.g7.length)break a;b.h4=(31*b.h4|0)+b.g7.charCodeAt(e)|0;e=e+1|0;}}}f=Bd(X(U(O(b.h4),B(2135587861, 2654435769)),a.mS));while(true){c=d.data[f];if(c===null)return  -(f+1|0)|0;if(c===b)g=1;else if(!(b instanceof H))g=0;else{h=b;g=c.g7!==h.g7?0:1;}if(g)break;f=(f+1|0)&a.mM;}return f;},
D1=(a,b,c)=>{let d,e;d=EH(a,b);if(d>=0){a.i6.data[d]=c;return;}d= -(d+1|0)|0;e=a.kf.data;e[d]=b;a.i6.data[d]=c;c=a.nb+1|0;a.nb=c;if(c>=a.no)AHp(a,e.length<<1);},
AHp=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.kf.data.length;a.no=b*a.pe|0;d=b-1|0;a.mM=d;a.mS=DV(O(d));e=a.kf;f=a.i6;a.kf=R(C,b);a.i6=S(b);if(a.nb>0){g=0;while(true){if(g>=c)break a;h=e.data[g];if(h!==null){b:{i=f.data[g];j=a.kf;if(!h.h4){k=0;while(true){if(k>=h.g7.length)break b;h.h4=(31*h.h4|0)+h.g7.charCodeAt(k)|0;k=k+1|0;}}}b=Bd(X(U(O(h.h4),B(2135587861, 2654435769)),a.mS));while(true){l=j.data;if(l[b]===null)break;b=(b+1|0)&a.mM;}l[b]=h;a.i6.data[b]=i;}g=g+1|0;}}}};
let AFr=D();
let KX=D(0);
function NG(){let a=this;C.call(a);a.jR=null;a.o1=0;a.rK=0;a.lY=0;a.nE=0;a.pQ=0;}
let AIP=a=>{let b,c,d;b=a.o1;if(!b){c=new Bf;c.g9=1;c.g$=1;c.ha=A(430);E(c);}Bx.gi(34963,b);if(a.lY){c=Bx;d=a.jR;c.c3(34963,d.he,d,a.pQ);a.lY=0;}a.nE=1;};
function PF(){let a=this;C.call(a);a.nz=0;a.np=0;a.oX=0;}
function DG(){let a=this;C.call(a);a.hE=0;a.hl=0;a.he=0;a.hD=0;}
let AG3=(a,b)=>{a.hD=(-1);a.hE=b;a.he=b;},
Cu=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.he){a.hl=b;if(b<a.hD)a.hD=0;return a;}c=new Bs;d=a.he;e=new K;e.g8=G(16);F(e,e.g6,A(431));J(e,e.g6,b,10);F(e,e.g6,A(432));J(e,e.g6,d,10);d=e.g6;Bn(e,d,d+1|0);f=e.g8;g=f.data;g[d]=93;h=new H;d=e.g6;i=g.length;if(d>=0&&d<=(i-0|0)){h.g7=L(f.data,0,d);c.g9=1;c.g$=1;c.ha=h;E(c);}c=new I;c.g9=1;c.g$=1;Bl(c);E(c);},
Dt=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.hE){if(a.hD>b)a.hD=(-1);a.he=b;if(a.hl>b)a.hl=b;return a;}c=new Bs;d=a.hE;e=new K;e.g8=G(16);F(e,e.g6,A(433));J(e,e.g6,b,10);F(e,e.g6,A(432));J(e,e.g6,d,10);d=e.g6;Bn(e,d,d+1|0);f=e.g8;g=f.data;g[d]=93;h=new H;d=e.g6;i=g.length;if(d>=0&&d<=(i-0|0)){h.g7=L(f.data,0,d);c.g9=1;c.g$=1;c.ha=h;E(c);}c=new I;c.g9=1;c.g$=1;Bl(c);E(c);};
let Gn=D(DG);
let AKT=(a,b)=>{Cu(a,b);return a;},
ALK=a=>{a.hl=0;a.he=a.hE;a.hD=(-1);return a;};
function EF(){let a=this;DG.call(a);a.ix=0;a.h6=null;a.ia=null;}
function FE(){C.call(this);this.mD=null;}
let Cz=null,Hp=null,IZ=null;
let Df=()=>{let b;if(IZ===null){b=new ArrayBuffer(2);new Int16Array(b)[0]=1;IZ=(new Int8Array(b))[0]?Hp:Cz;}return IZ;},
AMg=()=>{let b;b=new FE;b.mD=A(4);Cz=b;b=new FE;b.mD=A(5);Hp=b;};
let E2=D(DG);
let Ol=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.gj()){e=new Hr;e.g9=1;e.g$=1;E(e);}f=a.he;g=a.hl;if((f-g|0)<d){e=new Iy;e.g9=1;e.g$=1;E(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new I;j=new K;j.g8=G(16);F(j,j.g6,A(434));J(j,j.g6,i,10);F(j,j.g6,A(435));J(j,j.g6,f,10);k=new H;b=j.g8;h=b.data;d=j.g6;f=h.length;if(d>=0&&d<=(f-0|0)){k.g7=L(b.data,0,d);e.g9=1;e.g$=1;e.ha=k;E(e);}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.gk(g,h[c]);i=i+1|0;g=l;c=f;}a.hl=a.hl+d|0;return a;}e
=new I;j=new K;j.g8=G(16);F(j,j.g6,A(436));J(j,j.g6,d,10);F(j,j.g6,A(437));k=new H;b=j.g8;h=b.data;d=j.g6;f=h.length;if(d>=0&&d<=(f-0|0)){k.g7=L(b.data,0,d);e.g9=1;e.g$=1;e.ha=k;E(e);}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);}}b=b.data;e=new I;d=b.length;j=new K;j.g8=G(16);F(j,j.g6,A(438));J(j,j.g6,c,10);F(j,j.g6,A(432));J(j,j.g6,d,10);d=j.g6;Bn(j,d,d+1|0);b=j.g8;h=b.data;h[d]=41;k=new H;d=j.g6;f=h.length;if(d>=0&&d<=(f-0|0)){k.g7=L(b.data,0,d);e.g9=1;e.g$=1;e.ha=k;E(e);}e=new I;e.g9=1;e.g$=1;Bl(e);E(e);},
ALl=(a,b)=>{Dt(a,b);return a;},
ALL=(a,b)=>{Cu(a,b);return a;},
ALQ=(a,b)=>{Dt(a,b);return a;},
AL9=(a,b)=>{Cu(a,b);return a;};
let Jc=D(0);
function Nu(){let a=this;C.call(a);a.jn=null;a.kB=null;a.pP=0;a.st=0;a.nH=0;a.lS=0;a.l6=0;}
let AC8=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.lS=0;a.l6=0;a.st=b;a.jn=d;c=CB(d.i$/4|0,c);if(!C$){e=Cm(c);f=e.data.length;d=new Hc;g=0+f|0;d.hD=(-1);d.hE=f;d.he=f;d.hl=0;d.he=g;d.lX=0;d.mq=0;d.lC=e;}else{c=c*4|0;if(c<0){d=new Bs;h=new K;h.g8=G(16);Cw(h,h.g6,A(439));J(h,h.g6,c,10);i=new H;e=h.g8;j=e.data;c=h.g6;k=j.length;if(c>=0&&c<=(k-0|0)){i.g7=L(e.data,0,c);d.g9=1;d.g$=1;d.ha=i;E(d);}d=new I;E4(d);E(d);}h=new Db;e=BF(c);h.hD=(-1);h.hE=c;h.he=c;h.ia=Cz;h.ix=0;h.h6=e;h.hl=0;h.he=c;h.ji=1;h.ip=0;h.ia=Df();d=I7(h);}a.kB
=d;d.he=d.hl;d.hl=0;d.hD=(-1);d=Bx;h=d.hf.createBuffer();k=d.jt;d.jt=k+1|0;Cc(d.jS,k,Cd(h));a.pP=k;a.nH=!b?35048:35044;},
ABB=(a,b,c)=>{let d=new Nu();AC8(d,a,b,c);return d;},
Yh=a=>{return a.jn;},
AFG=a=>{return a.kB.he/(a.jn.i$/4|0)|0;},
ADI=(a,b,c,d)=>{let e,f,g;a.lS=1;e=a.kB;f=null;g=e instanceof EF;if(g)f=e.fV();else if(e instanceof E2)f=e;if(f===null){f=new Bf;f.g9=1;f.g$=1;f.ha=A(440);E(f);}f.hl=0;f.he=f.hE;f.hD=(-1);Cu(e,0);Ol(f,b,c,d);Cu(e,0);if(!g)Dt(e,d);else Dt(e,d<<2);Cu(a.kB,0);Dt(a.kB,d);if(a.l6){e=Bx;f=a.kB;e.c3(34962,f.he,f,a.nH);a.lS=0;}},
Xe=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=Bx;d.gi(34962,a.pP);if(a.lS){e=a.kB;d.c3(34962,e.he,e,a.nH);a.lS=0;}a:{f=a.jn.ir.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.jn.ir.data[g];j=h[g];if(j>=0){e=Bx;if(b.h7){CH(b,b.iM,b.iQ);b.h7=0;}e.gn(j);k=i.jo;l=i.jZ;m=i.kg;n=a.jn.i$;o=i.kp;e=Bx;if(b.h7){CH(b,b.iM,b.iQ);b.h7=0;}e.go(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.jn.ir.data[g];d=i.j9;e=b.kA;p=(-1);j=EH(e,d);if(j>=0)p=e.i6.data[j];if(p>=0){e=Bx;if(b.h7){CH(b,b.iM,b.iQ);b.h7=0;}e.gn(p);j
=i.jo;k=i.jZ;l=i.kg;m=a.jn.i$;n=i.kp;e=Bx;if(b.h7){CH(b,b.iM,b.iQ);b.h7=0;}e.go(p,j,k,l,m,n);}g=g+1|0;}}a.l6=1;},
TF=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Bx;e=a.jn.ir.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Bx;if(b.h7){CH(b,b.iM,b.iQ);b.h7=0;}h.gp(g);}f=f+1|0;}}i=0;while(i<e){j=a.jn.ir.data[i].j9;k=Bx;if(b.h7){CH(b,b.iM,b.iQ);b.h7=0;}l=Bx;h=b.kA;g=(-2);f=EH(h,j);if(f>=0)g=h.i6.data[f];if(g==(-2)){g=l.f$(b.iZ,j);D1(b.kA,j,g);}if(g!=(-1))k.gp(g);i=i+1|0;}}d.gi(34962,0);a.l6=0;};
function Il(){let a=this;C.call(a);a.jQ=null;a.j$=null;a.oa=0;a.sw=0;a.n0=0;a.lM=0;a.mV=0;a.nr=0;a.jy=null;}
let Jb=null;
let Iq=()=>{Iq=Bz(Il);AKo();};
let V0=(a,b,c,d)=>{let e,f,g,h,i,j;Iq();a.lM=0;a.mV=0;a.nr=(-1);e=new GV;e.nm=1;e.jA=S(16);a.jy=e;a.sw=b;a.jQ=d;c=CB(d.i$/4|0,c);if(!C$){f=Cm(c);g=f.data.length;d=new Hc;h=0+g|0;d.hD=(-1);d.hE=g;d.he=g;d.hl=0;d.he=h;d.lX=0;d.mq=0;d.lC=f;}else{c=c*4|0;if(c<0){d=new Bs;e=new K;e.g8=G(16);Cw(e,e.g6,A(439));J(e,e.g6,c,10);i=new H;f=e.g8;j=f.data;c=e.g6;g=j.length;if(c>=0&&c<=(g-0|0)){i.g7=L(f.data,0,c);d.g9=1;d.g$=1;d.ha=i;E(d);}d=new I;E4(d);E(d);}e=new Db;f=BF(c);e.hD=(-1);e.hE=c;e.he=c;e.ia=Cz;e.ix=0;e.h6=f;e.hl
=0;e.he=c;e.ji=1;e.ip=0;e.ia=Df();d=I7(e);}a.j$=d;d.he=d.hl;d.hl=0;d.hD=(-1);d=Bx;e=d.hf.createBuffer();g=d.jt;d.jt=g+1|0;Cc(d.jS,g,Cd(e));a.oa=g;a.n0=!b?35048:35044;d=Jb;d.hl=0;d.he=d.hE;d.hD=(-1);En.gq(1,d);d=Jb;c=d.hl;if(c<d.he){d.hl=c+1|0;a.nr=d.gr(c);return;}d=new JN;d.g9=1;d.g$=1;E(d);},
AAQ=(a,b,c)=>{let d=new Il();V0(d,a,b,c);return d;},
TT=a=>{return a.jQ;},
AC_=a=>{return (a.j$.he*4|0)/a.jQ.i$|0;},
T5=(a,b,c,d)=>{let e,f,g;a.lM=1;e=a.j$;f=null;g=e instanceof EF;if(g)f=e.fV();else if(e instanceof E2)f=e;if(f===null){f=new Bf;f.g9=1;f.g$=1;f.ha=A(440);E(f);}f.hl=0;f.he=f.hE;f.hD=(-1);Cu(e,0);Ol(f,b,c,d);Cu(e,0);if(!g)Dt(e,d);else Dt(e,d<<2);Cu(a.j$,0);Dt(a.j$,d);if(a.mV){e=Bx;f=a.j$;e.c3(34962,f.he,f,a.n0);a.lM=0;}},
AHh=(a,b,c)=>{let d;d=En;d.gs(a.nr);AGx(a,b,c);if(a.lM){d.gi(34962,a.oa);b=a.j$;Dt(b,b.he);b=a.j$;d.c3(34962,b.he,b,a.n0);a.lM=0;}a.mV=1;},
AGx=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.jy;e=d.iK;f=!e?0:1;a:{g=a.jQ.ir.data.length;if(f){if(c===null){e=0;b:{while(true){if(!f)break b;if(e>=g)break b;d=a.jQ.ir.data[e].j9;h=b.kA;i=(-1);f=EH(h,d);if(f>=0)i=h.i6.data[f];d=a.jy;if(e>=d.iK)break;f=i!=d.jA.data[e]?0:1;e=e+1|0;}h=new I;b=new K;b.g8=G(16);F(b,b.g6,A(76));J(b,b.g6,e,10);F(b,b.g6,A(77));e=d.iK;J(b,b.g6,e,10);d=new H;c=b.g8;j=c.data;f=b.g6;g=j.length;if(f>=0&&f<=(g-0|0)){d.g7=L(c.data,0,f);h.g9=1;h.g$=1;h.ha=d;E(h);}b=new I;Y(b);E(b);}}else
{j=c.data;f=j.length!=e?0:1;i=0;while(true){if(!f)break a;if(i>=g)break a;f=j[i];if(i>=e)break;f=f!=d.jA.data[i]?0:1;i=i+1|0;}h=new I;b=new K;b.g8=G(16);F(b,b.g6,A(76));J(b,b.g6,i,10);F(b,b.g6,A(77));e=d.iK;J(b,b.g6,e,10);d=new H;c=b.g8;j=c.data;f=b.g6;g=j.length;if(f>=0&&f<=(g-0|0)){d.g7=L(c.data,0,f);h.g9=1;h.g$=1;h.ha=d;E(h);}b=new I;Y(b);E(b);}}}c:{if(!f){d:{D0.gi(34962,a.oa);if(a.jy.iK){k=a.jQ.ir.data.length;e=0;while(true){if(e>=k)break d;d=a.jy;if(e>=d.iK)break;i=d.jA.data[e];if(i>=0){d=Bx;if(b.h7){CH(b,
b.iM,b.iQ);b.h7=0;}d.gp(i);}e=e+1|0;}h=new I;b=new K;b.g8=G(16);F(b,b.g6,A(76));J(b,b.g6,e,10);F(b,b.g6,A(77));e=d.iK;J(b,b.g6,e,10);d=new H;c=b.g8;j=c.data;f=b.g6;g=j.length;if(f>=0&&f<=(g-0|0)){d.g7=L(c.data,0,f);h.g9=1;h.g$=1;h.ha=d;E(h);}b=new I;E4(b);E(b);}}a.jy.iK=0;e=0;while(true){if(e>=g)break c;h=a.jQ.ir.data[e];if(c!==null){j=c.data;Nz(a.jy,j[e]);}else{l=a.jy;m=h.j9;d=b.kA;i=(-1);f=EH(d,m);if(f>=0)i=d.i6.data[f];Nz(l,i);}d=a.jy;if(e>=d.iK){h=new I;b=new K;b.g8=G(16);F(b,b.g6,A(76));J(b,b.g6,e,10);F(b,
b.g6,A(77));e=d.iK;J(b,b.g6,e,10);d=new H;c=b.g8;j=c.data;f=b.g6;g=j.length;if(f>=0&&f<=(g-0|0)){d.g7=L(c.data,0,f);h.g9=1;h.g$=1;h.ha=d;E(h);}b=new I;Y(b);E(b);}n=d.jA.data[e];if(n>=0){d=Bx;if(b.h7){CH(b,b.iM,b.iQ);b.h7=0;}d.gn(n);f=h.jo;i=h.jZ;k=h.kg;o=a.jQ.i$;p=h.kp;d=Bx;if(b.h7){CH(b,b.iM,b.iQ);b.h7=0;}d.go(n,f,i,k,o,p);}e=e+1|0;}}}},
Wz=(a,b,c)=>{En.gs(0);a.mV=0;},
AKo=()=>{let b,c,d,e;if(!C$){b=S(1);c=b.data.length;d=new EK;e=0+c|0;d.hD=(-1);d.hE=c;d.he=c;d.hl=0;d.he=e;d.ky=0;d.lj=0;d.kl=b;}else{d=new Db;b=BF(4);d.hD=(-1);d.hE=4;d.he=4;d.ia=Cz;d.ix=0;d.h6=b;d.hl=0;d.he=4;d.ji=1;d.ip=0;d.ia=Df();d=Fd(d);}Jb=d;};
let Gr=D(DG);
let ALV=(a,b)=>{Cu(a,b);return a;},
AKV=(a,b)=>{Cu(a,b);return a;};
let Dv=D(0);
function Db(){let a=this;EF.call(a);a.ji=0;a.ip=0;}
let AKe=a=>{let b,c,d,e,f,g;b=a.he;c=a.hl;d=(b-c|0)/2|0;if(a.ia!==Cz){e=new KU;f=a.ix+c|0;c=a.ip;e.hD=(-1);e.hE=d;e.he=d;e.hl=0;e.he=d;e.mu=f;e.lf=a;e.o8=c;return e;}e=new Mn;b=a.ix+c|0;g=a.ip;e.hD=(-1);e.hE=d;e.he=d;e.hl=0;e.he=d;e.mu=b;e.lf=a;e.o8=g;return e;},
Fd=a=>{let b,c,d,e,f,g;b=a.he;c=a.hl;d=(b-c|0)/4|0;if(a.ia!==Cz){e=new Le;f=a.ix+c|0;c=a.ip;e.hD=(-1);e.hE=d;e.he=d;e.hl=0;e.he=d;e.kO=f;e.kN=a;e.nR=c;return e;}e=new Oj;b=a.ix+c|0;g=a.ip;e.hD=(-1);e.hE=d;e.he=d;e.hl=0;e.he=d;e.kO=b;e.kN=a;e.nR=g;return e;},
I7=a=>{let b,c,d,e,f,g;b=a.he;c=a.hl;d=(b-c|0)/4|0;if(a.ia!==Hp){e=new K3;f=a.ix+c|0;c=a.ip;e.hD=(-1);e.hE=d;e.he=d;e.hl=0;e.he=d;e.kG=f;e.kb=a;e.or=c;return e;}e=new M5;b=a.ix+c|0;g=a.ip;e.hD=(-1);e.hE=d;e.he=d;e.hl=0;e.he=d;e.kG=b;e.kb=a;e.or=g;return e;};
let ACA=D();
let FH=D(Gn);
let AL0=a=>{let b,c;b=a.hl;if(b<a.he){a.hl=b+1|0;return a.gr(b);}c=new JN;c.g9=1;c.g$=1;E(c);},
Dh=(a,b)=>{let c,d;if(a.gj()){c=new Hr;c.g9=1;c.g$=1;E(c);}d=a.hl;if(d<a.he){a.hl=d+1|0;a.gv(d,b);return a;}c=new Iy;c.g9=1;c.g$=1;E(c);},
DR=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.he)return a.gr(b);c=new I;d=a.he;e=new K;e.g8=G(16);F(e,e.g6,A(441));J(e,e.g6,b,10);F(e,e.g6,A(432));J(e,e.g6,d,10);d=e.g6;Bn(e,d,d+1|0);f=e.g8;g=f.data;g[d]=41;h=new H;d=e.g6;i=g.length;if(d>=0&&d<=(i-0|0)){h.g7=L(f.data,0,d);c.g9=1;c.g$=1;c.ha=h;E(c);}c=new I;c.g9=1;c.g$=1;Bl(c);E(c);},
Qn=(a,b,c)=>{let d,e,f,g,h,i;if(a.gj()){d=new Hr;d.g9=1;d.g$=1;E(d);}if(b>=0&&b<a.he){a.gv(b,c);return a;}d=new I;c=a.he;e=new K;e.g8=G(16);F(e,e.g6,A(441));J(e,e.g6,b,10);F(e,e.g6,A(432));J(e,e.g6,c,10);c=e.g6;Bn(e,c,c+1|0);f=e.g8;g=f.data;g[c]=41;h=new H;c=e.g6;i=g.length;if(c>=0&&c<=(i-0|0)){h.g7=L(f.data,0,c);d.g9=1;d.g$=1;d.ha=h;E(d);}d=new I;d.g9=1;d.g$=1;Bl(d);E(d);},
ALD=a=>{return a.gj();};
function EK(){let a=this;FH.call(a);a.lj=0;a.ky=0;a.kl=null;}
let ADC=(a,b)=>{return a.kl.data[b+a.ky|0];},
ABE=(a,b,c)=>{a.kl.data[b+a.ky|0]=c;},
RE=a=>{return a.lj;};
let Fy=D(E2);
let Z_=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.he)return a.gw(b);c=new I;d=a.he;e=new K;e.g8=G(16);F(e,e.g6,A(441));J(e,e.g6,b,10);F(e,e.g6,A(432));J(e,e.g6,d,10);d=e.g6;Bn(e,d,d+1|0);f=e.g8;g=f.data;g[d]=41;h=new H;d=e.g6;i=g.length;if(d>=0&&d<=(i-0|0)){h.g7=L(f.data,0,d);c.g9=1;c.g$=1;c.ha=h;E(c);}c=new I;c.g9=1;c.g$=1;Bl(c);E(c);},
AK8=a=>{return a.gj();};
function Hc(){let a=this;Fy.call(a);a.mq=0;a.lX=0;a.lC=null;}
let AES=(a,b)=>{return a.lC.data[b+a.lX|0];},
ADQ=(a,b,c)=>{a.lC.data[b+a.lX|0]=c;},
AD$=a=>{return a.mq;};
let F7=D(Gr);
let AFs=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.he)return a.gx(b);c=new I;d=a.he;e=new K;e.g8=G(16);F(e,e.g6,A(441));J(e,e.g6,b,10);F(e,e.g6,A(432));J(e,e.g6,d,10);d=e.g6;Bn(e,d,d+1|0);f=e.g8;g=f.data;g[d]=41;h=new H;d=e.g6;i=g.length;if(d>=0&&d<=(i-0|0)){h.g7=L(f.data,0,d);c.g9=1;c.g$=1;c.ha=h;E(c);}c=new I;c.g9=1;c.g$=1;Bl(c);E(c);};
function Qu(){let a=this;F7.call(a);a.q2=0;a.qh=0;a.po=null;}
let X1=(a,b)=>{return a.po.data[b+a.qh|0];};
function F2(){let a=this;FH.call(a);a.kN=null;a.nR=0;a.kO=0;}
let AA$=a=>{return a.nR;};
let Le=D(F2);
let XU=(a,b)=>{let c;c=a.kN.h6.data;b=a.kO+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;},
RD=(a,b,c)=>{let d;d=a.kN.h6.data;b=a.kO+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;};
let Oj=D(F2);
let AHf=(a,b)=>{let c;c=a.kN.h6.data;b=a.kO+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;},
TG=(a,b,c)=>{let d;d=a.kN.h6.data;b=a.kO+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;};
function FA(){let a=this;Fy.call(a);a.kb=null;a.or=0;a.kG=0;}
let AEk=a=>{return a.or;},
AFp=a=>{return a.kb.h6.data;};
let K3=D(FA);
let ABh=(a,b)=>{let c;c=a.kb.h6.data;b=a.kG+(b*4|0)|0;return Ig((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);},
AFj=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:Im(c);e=a.kb.h6.data;b=a.kG+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;};
let M5=D(FA);
let RN=(a,b)=>{let c;c=a.kb.h6.data;b=a.kG+(b*4|0)|0;return Ig(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);},
AA7=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:Im(c);e=a.kb.h6.data;b=a.kG+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;};
let Ir=D(BA);
let Hr=D(Ir);
let JN=D(BA);
let PL=D();
let MZ=null;
let J5=()=>{J5=Bz(PL);SL();};
let ABf=(b,c,d,e)=>{J5();a:{b:{if(MZ===Jp){if(Ck.h5.width!=Ck.h5.width)break b;if(Ck.h5.height!=Ck.h5.height)break b;}D0.b1(b,c,d,e);break a;}D0.b1(CB(b,Ck.h5.width)/Ck.h5.width|0,CB(c,Ck.h5.height)/Ck.h5.height|0,CB(d,Ck.h5.width)/Ck.h5.width|0,CB(e,Ck.h5.height)/Ck.h5.height|0);}},
SL=()=>{MZ=Jp;};
let XR=D();
function Fq(){let a=this;F7.call(a);a.lf=null;a.o8=0;a.mu=0;}
let AFR=a=>{return a.lf.h6.data;};
let KU=D(Fq);
let VK=(a,b)=>{let c;c=a.lf.h6.data;b=a.mu+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;};
let Mn=D(Fq);
let ADp=(a,b)=>{let c;c=a.lf.h6.data;b=a.mu+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;};
let G2=D(BR);
let Jp=null,AB_=null,WM=null;
let Ub=()=>{let b,c;b=new G2;b.hv=A(442);b.hk=0;Jp=b;c=new G2;c.hv=A(443);c.hk=1;AB_=c;WM=P(G2,[b,c]);};
let WQ=D();
let IQ=0,GO=null,GK=null;
let ACJ=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=(isNaN(b)?1:0)?2143289344:Im(b);c.oX=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.nz=0;c.np=0;return;}if(f)d=e|8388608;else{d=e<<1;while(C6(Ch(O(d),O(8388608)),BM)){d=d<<1;f=f+(-1)|0;}}g=GK;h=AEn(g,0,g.data.length,f);if(h<0)h= -h|0;g=GK.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=GO.data[e];j=Ch(O(d),B(4294967295, 0));k=Bd(X(U(j,Ch(O(e),B(4294967295, 0))),32-i|0));if(k<IQ){while(DN(k,IQ)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g=GK.data;e=h+1|0;i=9+(f-g[e]|0)|
0;k=Bd(X(U(j,Ch(O(GO.data[e]),B(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=GO.data;f=h+1|0;e=g[f];m=i-1|0;n=U(Ch(O(l),B(4294967295, 0)),Ch(O(e),B(4294967295, 0)));e=32-m|0;o=Bd(X(n,e));p=Bd(X(U(Ch(O(d-1|0),B(4294967295, 0)),Ch(O(g[f]),B(4294967295, 0))),e));q=1;while(true){r=q*10|0;if(DN(C8(k,r),C8(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if(DN(C8(k,l),C8(o,l))>=0)break;m=l;}s=DN(q,m);d=s>0?CB(C8(k,q),q):s<0?CB(C8(k,m),m)+m|0:CB(C8((k+(m/2|0)|0),m),m);if(DU(O(d),O(1000000000))>=0)while(true){h=h+1|0;d=
C8(d,10);if(DN(d,1000000000)<0)break;}else if(DN(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.nz=d;c.np=h-50|0;},
Xf=()=>{IQ=C8((-1),10);GO=Gk([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),(-742253618),
(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),(-1272652747),
(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);GK=Gk([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,79,82,85,89,92,
95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);};
let AE7=D(0);
let Iy=D(BA);
function Jy(){let a=this;C.call(a);a.k2=null;a.jx=null;}
let AHQ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.k2.readyState==4){if(a.k2.status==200){if(a.jx.jj.iE){if(BH===null){b=new Cj;c=new B5;c.h8=BF(32);b.ii=c;c=new K;BB(c);c.g8=G(16);b.h$=c;b.h9=G(32);b.ic=0;b.id=BX;BH=b;}b=a.jx.je;c=new K;c.g8=G(16);F(c,c.g6,A(444));d=c.g6;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.g8;f=e.data;g
=c.g6;h=f.length;if(g>=0&&g<=(h-0|0)){b.g7=L(e.data,0,g);BI(Br(b));BI("\n");}else{b=new I;b.g9=1;b.g$=1;Bl(b);E(b);}}b=a.jx;b.js.gz(b.je,V(a.k2.responseText));}else if(a.k2.status!=404&&a.k2.status!=403){try{i=O(100);$p=1;continue _;}catch($$e){$$je=BP($$e);if($$je instanceof CT){}else{throw $$e;}}b=a.jx;c=b.jj;d=b.kh;j=b.je;b=b.js;if(c.iE){if(BH===null){k=new Cj;l=new B5;l.h8=BF(32);BB(k);k.ii=l;l=new K;Dp(l,16);k.h$=l;k.h9=G(32);k.ic=0;k.id=BX;BH=k;}k=new K;k.g8=G(16);F(k,k.g6,A(71));F(k,k.g6,j===null?A(2)
:j);l=new H;e=k.g8;f=e.data;h=k.g6;m=f.length;if(h>=0&&h<=(m-0|0)){l.g7=L(e.data,0,h);BI(Br(l));BI("\n");}else{b=new I;Y(b);E(b);}}c.hL=c.hL+1|0;k=new Fh;k.jj=c;k.kh=d;k.je=j;k.js=b;b=null;c=null;k.iN=new C;k.iL=1;k.jb=c;k.jr=b;g=B9;B9=g+1|0;k.jp=O(g);b=new Dj;b.jc=k;Dz(b);}else{b=a.jx;b.js.gA(b.je);}b=a.jx.jj;b.hL=b.hL-1|0;}return;case 1:a:{try{Id(i);if(Ee()){break _;}break a;}catch($$e){$$je=BP($$e);if($$je instanceof CT){}else{throw $$e;}}}b=a.jx;c=b.jj;d=b.kh;j=b.je;b=b.js;if(c.iE){if(BH===null){k=new Cj;l
=new B5;l.h8=BF(32);BB(k);k.ii=l;l=new K;Dp(l,16);k.h$=l;k.h9=G(32);k.ic=0;k.id=BX;BH=k;}k=new K;k.g8=G(16);F(k,k.g6,A(71));F(k,k.g6,j===null?A(2):j);l=new H;e=k.g8;f=e.data;h=k.g6;m=f.length;if(h>=0&&h<=(m-0|0)){l.g7=L(e.data,0,h);BI(Br(l));BI("\n");}else{b=new I;Y(b);E(b);}}c.hL=c.hL+1|0;k=new Fh;k.jj=c;k.kh=d;k.je=j;k.js=b;b=null;c=null;k.iN=new C;k.iL=1;k.jb=c;k.jr=b;g=B9;B9=g+1|0;k.jp=O(g);b=new Dj;b.jc=k;Dz(b);b=a.jx.jj;b.hL=b.hL-1|0;return;default:D9();}}Cq().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);},
Zf=(a,b)=>{let $p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHQ(a,b);if(Ee()){break _;}return;default:D9();}}Cq().s(a,b,$p);};
function N8(){let a=this;C.call(a);a.k7=0;a.kT=0;a.i5=0;a.mi=BM;a.nD=null;a.pb=null;a.qH=BM;a.o3=null;}
function MF(){let a=this;CM.call(a);a.iU=null;a.sB=null;}
function MD(){let a=this;CM.call(a);a.iY=null;a.lU=null;a.lE=null;a.lL=null;}
let TS=(a,b)=>{a.iY.iU.mi=C7(b);},
RU=(a,b)=>{b=a.iY.iU;b.kT=1;b.i5=0;},
AB1=(a,b,c)=>{Fg(a.lL,a.lU,a.lE,c);b=a.iY.iU;b.k7=1;b.i5=0;return 0;};
let WT=D();
let MC=D();
let AKf=(a,b)=>{b=a.dh(b);Bp();return b===null?null:b instanceof E0()&&b instanceof DD?(b[Be]===true?b:b.hy):b;},
U5=a=>{return a.dm();};
let ADt=D();
let KN=D();
let PI=null;
let JI=()=>{JI=Bz(KN);ABD();};
let ABD=()=>{let b,c;b=S((J7.p()).data.length);c=b.data;PI=b;c[Eq.hk]=1;c[Ej.hk]=2;c[Ea.hk]=3;c[D6.hk]=4;c[Hi.hk]=5;};
function Ey(){let a=this;EV.call(a);a.jO=0;a.i3=null;a.jg=null;a.i4=null;}
let UT=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new HR;c.jP=a;c.kH=b;c=BL(c,"handleEvent");b.onreadystatechange=c;c=a.i4;d=a.jg;e=new Fi;e.ol=c;e.l_=d;c=BL(e,"handleEvent");b.onprogress=c;d=a.i3;f=a.jO;b.open("GET",Br(d),!!f);if(a.jO){d="arraybuffer";b.responseType=d;}b.send();};
function KL(){let a=this;CM.call(a);a.ms=null;a.sh=null;}
let UX=(a,b)=>{a.ms.iY.iU.mi=C7(b);},
ACD=(a,b)=>{b=a.ms.iY.iU;b.kT=1;b.i5=0;},
TC=(a,b,c)=>{c=a.ms;b=null;Fg(c.lL,c.lU,c.lE,b);b=c.iY.iU;b.k7=1;b.i5=0;return 0;};
function KM(){let a=this;CM.call(a);a.lq=null;a.pk=null;a.qP=null;a.l4=null;}
let X$=(a,b)=>{a.lq.iY.iU.mi=C7(b);},
St=(a,b)=>{b=a.lq.iY.iU;b.kT=1;b.i5=0;},
Sx=(a,b,c)=>{let d,e,f,g,h,i,j;d=window.document.createElement("img");e=a.pk;if(e!==null)d.setAttribute("crossOrigin",Br(e));a:{e=a.l4;e.hL=e.hL+1|0;e=new Ic;e.mJ=a;e.sD=b;e.qt=c;e.oS=d;d.addEventListener("load",BL(e,"handleEvent"),!!0);d.addEventListener("error",BL(e,"handleEvent"),!!0);if(!a.l4.qV){b=Br(b);d.src=b;}else{b=a.qP;c=AFO(c);e=new K;e.g8=G(16);F(e,e.g6,A(445));f=e.g6;if(b===null)b=A(2);F(e,f,b);F(e,e.g6,A(446));f=e.g6;if(c===null)c=A(2);F(e,f,c);b=new H;g=e.g8;h=g.data;i=e.g6;j=h.length;if(i<0)break a;if
(i>(j-0|0))break a;b.g7=L(g.data,0,i);b=Br(b);d.src=b;}return 0;}b=new I;b.g9=1;b.g$=1;Bl(b);E(b);},
YP=(a,b,c)=>{return Sx(a,b,c);};
function HR(){let a=this;C.call(a);a.kH=null;a.jP=null;}
let ABI=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.kH.readyState==4){if(a.kH.status==200){if(a.jP.i4.iE){if(BH===null){b=new Cj;c=new B5;c.h8=BF(32);b.ii=c;c=new K;BB(c);c.g8=G(16);b.h$=c;b.h9=G(32);b.ic=0;b.id=BX;BH=b;}b=a.jP.i3;c=new K;c.g8=G(16);F(c,c.g6,A(444));d=c.g6;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.g8;f=e.data;g
=c.g6;h=f.length;if(g>=0&&g<=(h-0|0)){b.g7=L(e.data,0,g);BI(Br(b));BI("\n");}else{b=new I;b.g9=1;b.g$=1;Bl(b);E(b);}}i=a.kH.response;j=new Int8Array(i);b=a.jP;c=b.jg;k=b.i3;b=new Gd;b.jk=j;b.n5=i;c.gz(k,b);}else if(a.kH.status!=404&&a.kH.status!=403){try{l=O(100);$p=1;continue _;}catch($$e){$$je=BP($$e);if($$je instanceof CT){}else{throw $$e;}}b=a.jP;c=b.i4;d=b.jO;k=b.i3;b=b.jg;if(c.iE){if(BH===null){i=new Cj;j=new B5;j.h8=BF(32);BB(i);i.ii=j;j=new K;Dp(j,16);i.h$=j;i.h9=G(32);i.ic=0;i.id=BX;BH=i;}i=new K;i.g8
=G(16);F(i,i.g6,A(71));F(i,i.g6,k===null?A(2):k);j=new H;e=i.g8;f=e.data;h=i.g6;m=f.length;if(h>=0&&h<=(m-0|0)){j.g7=L(e.data,0,h);BI(Br(j));BI("\n");}else{b=new I;Y(b);E(b);}}c.hL=c.hL+1|0;i=new Ey;i.i4=c;i.jO=d;i.i3=k;i.jg=b;b=null;c=null;i.iN=new C;i.iL=1;i.jb=c;i.jr=b;g=B9;B9=g+1|0;i.jp=O(g);b=new Dj;b.jc=i;Dz(b);}else{b=a.jP;b.jg.gA(b.i3);}b=a.jP.i4;b.hL=b.hL-1|0;}return;case 1:a:{try{Id(l);if(Ee()){break _;}break a;}catch($$e){$$je=BP($$e);if($$je instanceof CT){}else{throw $$e;}}}b=a.jP;c=b.i4;d=b.jO;k
=b.i3;b=b.jg;if(c.iE){if(BH===null){i=new Cj;j=new B5;j.h8=BF(32);BB(i);i.ii=j;j=new K;Dp(j,16);i.h$=j;i.h9=G(32);i.ic=0;i.id=BX;BH=i;}i=new K;i.g8=G(16);F(i,i.g6,A(71));F(i,i.g6,k===null?A(2):k);j=new H;e=i.g8;f=e.data;h=i.g6;m=f.length;if(h>=0&&h<=(m-0|0)){j.g7=L(e.data,0,h);BI(Br(j));BI("\n");}else{b=new I;Y(b);E(b);}}c.hL=c.hL+1|0;i=new Ey;i.i4=c;i.jO=d;i.i3=k;i.jg=b;b=null;c=null;i.iN=new C;i.iL=1;i.jb=c;i.jr=b;g=B9;B9=g+1|0;i.jp=O(g);b=new Dj;b.jc=i;Dz(b);b=a.jP.i4;b.hL=b.hL-1|0;return;default:D9();}}Cq().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,$p);},
AJt=(a,b)=>{let $p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABI(a,b);if(Ee()){break _;}return;default:D9();}}Cq().s(a,b,$p);};
function Ic(){let a=this;C.call(a);a.sD=null;a.qt=null;a.oS=null;a.mJ=null;}
let Yv=(a,b)=>{let c,d;c=V(b.type);if(c===A(447))d=1;else if(!(A(447) instanceof H))d=0;else{b=A(447);d=c.g7!==b.g7?0:1;}if(d){b=a.mJ.lq.iY.iU;b.kT=1;b.i5=0;}else{b=a.qt;b.qd=a.oS;c=a.mJ.lq;Fg(c.lL,c.lU,c.lE,b);b=c.iY.iU;b.k7=1;b.i5=0;}b=a.mJ.l4;b.hL=b.hL-1|0;},
W9=(a,b)=>{Yv(a,b);};
AKW([-1,"com",0,"badlogic",1,"gdx",2,"utils",3,"reflect",2,"scenes",5,"scene2d",6,"ui",2,"graphics",8,"g2d",-1,"java",10,"util",11,"regex",10,"nio",13,"charset",10,"lang"]);
Co([C,0,0,[],0,3,0,0,["W",W(V2),"X",N(AB$),"bj",W(LM)],AHB,0,C,[],0,3,0,0,0,KD,0,C,[],0,3,0,Od,0,Ks,0,C,[],3,3,0,0,0,FU,0,C,[Ks],0,3,0,0,0,CW,0,C,[],3,3,0,0,0,AHg,0,FU,[CW],0,3,0,0,0,DO,0,C,[],3,3,0,0,0,Em,0,C,[DO],0,3,0,0,0,CF,0,C,[],3,3,0,0,0,BN,0,C,[],3,3,0,0,0,BR,0,C,[CF,BN],1,3,0,0,["bj",W(YV)],Fz,0,BR,[],12,3,0,0,0,Es,0,C,[],0,3,0,0,0,I6,0,C,[],3,3,0,0,0,Iv,0,Es,[I6],0,3,0,0,0,EM,0,C,[],3,3,0,0,0,C1,0,C,[],3,3,0,0,0,Ff,0,C,[EM,C1],0,3,0,0,0,E1,0,C,[],3,3,0,0,0,BJ,0,C,[E1],0,3,0,0,0,Fw,0,BJ,[],0,3,0,0,
0,AEp,0,Fw,[],0,0,0,0,0,Ha,0,BR,[],12,3,0,0,0,JM,0,C,[],3,3,0,0,0,GC,0,C,[JM],3,3,0,0,0,EY,0,C,[],3,3,0,0,0,CK,0,C,[EY],1,3,0,0,0,AGQ,0,CK,[],0,0,0,0,0,JC,0,Ff,[],0,3,0,0,0,Ji,0,C,[E1],0,3,0,0,0,WD,0,C,[],1,3,0,0,0,R7,0,C,[],0,3,0,0,0,QX,0,C,[],3,3,0,0,0,ID,0,C,[QX],0,3,0,0,0,ADU,0,ID,[],0,0,0,0,0,ZN,0,Em,[],0,3,0,0,0,M6,0,C,[],32,0,0,Rf,0,AB7,0,C,[],1,3,0,0,0,OF,0,C,[],32,0,0,NF,0,AGP,0,CK,[],0,0,0,0,0,D7,0,C,[JM],0,3,0,0,0,OB,0,D7,[GC],0,3,0,0,0,Q4,0,C,[],4,3,0,Pt,0,IO,0,C,[E1],1,3,0,0,0,AI8,0,Fw,[],0,3,0,
0,0,XO,0,C,[],0,3,0,0,0,PW,0,C,[],0,3,0,Qv,0,JF,0,C,[E1],1,3,0,0,0,Gt,0,D7,[GC],0,3,0,0,0]);
Co([QQ,0,D7,[GC],0,3,0,0,0,C9,0,BJ,[],0,3,0,0,0,QJ,0,Gt,[],0,3,0,0,0,Vt,0,Em,[],0,3,0,0,0,HQ,0,C,[],3,3,0,0,0,ABu,0,Em,[],0,3,0,0,0,Y2,0,C,[DO],4,3,0,0,0,Kj,0,C,[],32,0,0,NV,0,CP,0,BR,[],12,3,0,0,0,BS,0,C,[DO],1,3,0,0,0,DJ,0,BS,[],1,3,0,0,0,Zr,0,DJ,[],0,3,0,0,0,ADz,0,DJ,[],0,3,0,0,0,Cf,0,BS,[],1,3,0,0,0,DB,0,Cf,[],1,3,0,0,0,Sr,0,DB,[],0,3,0,0,0,Us,0,C,[E1],0,0,0,0,0,J9,0,BS,[],0,3,0,0,0,VG,0,J9,[],0,3,0,0,0,XF,0,BS,[],0,3,0,0,0,ABj,0,BS,[],0,3,0,0,0,AFt,0,BS,[],0,3,0,0,0,AF5,0,C,[],0,3,0,0,0,II,0,BS,[],1,3,
0,0,0,AAJ,0,II,[],0,3,0,0,0,Wg,0,Cf,[],0,3,0,0,0,AGK,0,Cf,[],0,3,0,0,0,AHj,0,DB,[],0,3,0,0,0,AEd,0,BS,[],0,3,0,0,0,AED,0,DB,[],0,3,0,0,0,AIL,0,Cf,[],0,3,0,0,0,AIa,0,Cf,[],0,3,0,0,0,Yc,0,BS,[],0,3,0,0,0,AAk,0,Cf,[],0,3,0,0,0,AAx,0,BS,[],0,3,0,0,0,YB,0,BS,[],0,3,0,0,0,AAM,0,DJ,[],0,3,0,0,0,Tc,0,Cf,[],0,3,0,0,0,AIV,0,BS,[],0,3,0,0,0,ADN,0,DB,[],0,3,0,0,0,Yo,0,DJ,[],0,3,0,0,0,AC5,0,BS,[],0,3,0,0,0,Ut,0,Cf,[],0,3,0,0,0,ZX,0,Cf,[],0,3,0,0,0,Vo,0,C,[CW],0,3,0,0,0,Cp,0,Iv,[HQ],0,3,0,0,0,DM,0,Cp,[],0,3,0,MI,0,Ew,0,DM,
[EM],0,3,0,0,0,Iu,0,Ew,[],0,3,0,0,0,V_,0,Iu,[],0,3,0,0,0]);
Co([AGM,0,BJ,[],0,0,0,0,0,Jh,0,Cp,[],0,3,0,0,0,NK,0,C,[],3,3,0,0,0,Dw,0,C,[NK],1,3,0,0,0,X5,0,Dw,[],0,0,0,0,0,Cx,0,Es,[HQ],0,3,0,0,0,Tu,0,Cx,[],0,3,0,0,0,AGL,0,BJ,[],0,0,0,0,0,BK,0,C,[],1,3,0,Gb,0,OK,0,BK,[],0,0,0,0,0,ADW,0,BK,[],0,0,0,0,0,HL,0,C9,[],0,3,0,0,0,AAC,0,HL,[],0,3,0,0,0,QM,0,BK,[],0,0,0,0,0,AIB,0,BJ,[],0,0,0,0,0,I0,0,DM,[],0,3,0,0,0,ADX,0,BK,[],0,0,0,0,0,EL,0,C,[],3,3,0,0,0,DW,0,C,[BN,EL],0,3,0,0,0,C5,"Table$DebugRect",7,DW,[],0,3,0,Q5,0,X9,0,Dw,[],0,0,0,0,0,Js,0,Cx,[EM],0,3,0,0,0,Wp,0,Js,[],0,3,
0,0,0,Z1,0,BJ,[],0,0,0,0,0,Mc,0,C,[],3,3,0,0,0,AFy,0,C,[Mc],0,3,0,0,0,ER,0,C,[],0,3,0,0,0,E8,0,ER,[],0,3,0,0,0,Po,0,E8,[],0,3,0,0,0,Jx,0,Cx,[EM],0,3,0,0,0,Zb,0,Jx,[],0,3,0,0,0,AKb,0,Jh,[],0,0,0,0,0,HS,0,Cp,[],0,3,0,0,0,AKO,0,Ew,[],0,3,0,0,0,JQ,0,Cx,[I6],0,3,0,0,0,QK,0,BK,[],0,0,0,0,0,PT,0,C,[],0,3,0,0,0,Yx,0,C,[EY],0,0,0,0,0,AAF,0,BJ,[],0,0,0,0,0,ACe,0,CK,[],0,0,0,0,0,Zv,0,C,[],0,3,0,0,0,AE$,0,BJ,[],0,0,0,0,0,AJU,0,C9,[],0,0,0,0,0,ZZ,0,Ji,[],0,0,0,0,0,OG,0,BK,[],0,0,0,0,0,OJ,0,BK,[],0,0,0,0,0,Oh,0,C,[],3,3,
0,0,0,Hl,0,C,[],0,3,0,0,0,K6,0,Hl,[],0,3,0,0,0,X6,0,Dw,[],0,0,0,0,0]);
Co([AGJ,0,IO,[],0,0,0,0,0,AGN,0,JF,[],0,0,0,0,0,AIC,0,BJ,[],0,0,0,0,0,AID,0,C9,[],0,0,0,0,0,QL,0,BK,[],0,0,0,0,0,KZ,0,C,[DO],0,3,0,Pp,0,NC,0,E8,[],0,3,0,0,0,AAb,0,BJ,[],0,0,0,0,0,TP,0,CK,[],0,0,0,0,0,OL,0,BK,[],0,0,0,0,0,WJ,0,Cp,[],0,3,0,0,0,Z0,0,BJ,[],0,0,0,0,0,NW,0,C,[],0,3,0,0,0,GR,0,BK,[],0,3,0,0,0,Yy,0,HS,[],0,3,0,0,0,OH,0,BK,[],0,0,0,0,0,ABb,0,Cx,[EM],0,3,0,0,0,Z8,0,JC,[],0,0,0,0,0,Qq,0,C,[],0,3,0,0,0,Lf,0,Cx,[],0,3,0,PC,0,Ln,0,C,[],0,3,0,0,0,ADZ,0,BK,[],0,0,0,0,0,QN,0,BK,[],0,0,0,0,0,AF_,0,I0,[],0,3,
0,0,0,OI,0,BK,[],0,0,0,0,0,M7,0,C,[],0,3,0,0,0,AJM,0,C,[],0,3,0,0,0,Ei,0,BR,[],12,3,0,0,0,AJ2,0,BK,[],0,0,0,0,0,ZO,0,CK,[],0,0,0,0,0,Cv,0,C,[],1,3,0,0,0,QO,0,Cv,[],0,0,0,0,0,TE,0,C,[Oh],0,3,0,0,0,Qy,0,C,[],0,3,0,0,0,N$,0,C,[],0,3,0,0,0,OC,0,C,[],0,3,0,0,0,JO,0,BJ,[],0,3,0,0,0,TO,0,CK,[],0,0,0,0,0,AIE,0,JQ,[],0,0,0,0,0,TH,0,C,[],3,3,0,0,0,AAc,0,BJ,[],0,0,0,0,0,AKG,0,Cp,[],0,3,0,0,0,ADw,0,Cp,[],0,3,0,0,0,Z9,0,C9,[],0,0,0,0,0,JE,0,C,[],0,3,0,0,0,X4,0,JE,[],0,0,0,0,0,AIg,0,Es,[CW],0,3,0,0,0,SY,0,BJ,[],0,0,0,0,0,AGu,
0,Ew,[],0,3,0,0,0,ACE,0,BJ,[],0,0,0,0,0]);
Co([AJu,0,C9,[],0,0,0,0,0,PX,0,ER,[],0,3,0,0,0,ADD,0,Cp,[],0,3,0,0,0,N0,0,C,[],0,3,0,0,0,Ni,0,C,[],0,3,0,0,0,ACl,0,Cx,[],0,3,0,0,0,AJV,0,Ff,[],0,0,0,0,0,S0,0,BJ,[],0,0,0,0,0,AEW,0,Cp,[],0,3,0,0,0,AJ_,0,JO,[],0,3,0,0,0,S1,0,DM,[],0,0,0,0,0,X7,0,Dw,[],0,0,0,0,0,Rt,0,C,[],1,3,0,0,0,QI,0,C,[],0,3,0,0,0,Qk,0,C,[BN],0,3,0,Ql,0,Bv,0,C,[],1,3,0,Hb,0,LE,0,Bv,[],0,3,0,0,0,ZR,0,C,[],0,3,0,0,0,Pd,0,Bv,[],0,0,0,0,0,AI3,0,C,[],0,3,0,0,0,Dx,0,Bv,[],0,3,0,0,0,F1,0,Dx,[],0,3,0,0,0,FW,0,Dx,[],0,3,0,0,0,G0,0,C,[],3,3,0,0,0,VJ,
0,C,[G0],0,3,0,0,0,Pg,0,Bv,[],0,0,0,0,0,AG0,0,C,[EL],0,3,0,0,0,Pc,0,Bv,[],0,0,0,0,0,EX,0,Bv,[],0,3,0,0,0,Pb,0,Bv,[],0,0,0,0,0,Pa,0,Bv,[],0,0,0,0,0,AD2,0,C,[],4,3,0,0,0,R6,0,Cv,[],0,0,0,0,0,GL,0,C,[],3,3,0,0,0,Bq,0,C,[BN,GL],0,3,0,0,0,Ov,0,Bv,[],0,0,0,0,0,Eu,0,Bv,[],0,3,0,0,0,ACh,0,C,[],0,3,0,0,0,Pi,0,Bv,[],0,0,0,0,0,J6,0,Eu,[],0,3,0,0,0,Yt,0,C,[DO],0,3,0,0,0,FF,0,BR,[],12,3,0,0,0,N7,0,C,[],0,3,0,NI,0,Fa,0,Bv,[],0,3,0,0,0,Nw,0,Fa,[],0,3,0,0,0,Or,0,Bv,[],0,0,0,0,0,ACW,0,C,[BN],4,3,0,0,0,O_,0,Bv,[],0,0,0,0,0,EB,
0,C,[BN,GL],0,3,0,0,0,K$,0,EX,[],0,3,0,0,0]);
Co([Nd,0,Bv,[],0,3,0,0,0,Vx,0,C,[],0,3,0,0,0,AKt,0,C,[EL],0,3,0,0,0,Pe,0,Bv,[],0,0,0,0,0,QA,0,Bv,[],0,3,0,0,0,Ow,0,Bv,[],0,0,0,0,0,Nb,0,EX,[],0,3,0,0,0,Rc,0,C,[BN],0,3,0,L4,0,HP,0,C,[BN],0,3,0,Kh,0,IM,0,C,[BN],0,3,0,I$,0,VR,0,C,[BN],0,3,0,0,0,SC,0,C,[BN],0,3,0,0,0,AE6,0,C,[BN,EL],0,3,0,0,0,Zl,0,C,[G0],0,3,0,0,0,OS,0,C,[],4,3,0,Je,0,P3,0,C,[],4,3,0,MG,0,TU,0,C,[],4,3,0,0,0,MH,0,Fa,[],0,3,0,0,0,Ix,0,C,[BN],0,3,0,Dg,0,LP,0,C,[],3,3,0,0,0,I_,0,C,[LP,BN],0,3,0,0,0,On,0,I_,[],0,3,0,0,0,Ou,0,Bv,[],0,0,0,0,0,Pf,0,Bv,
[],0,0,0,0,0,JB,0,C,[],0,3,0,GF,0,Dm,0,C,[BN],0,3,0,0,0,RW,0,C,[],0,3,0,0,0,ADu,0,C,[],0,3,0,0,0,Bb,0,C,[BN,GL],0,3,0,B_,0,Yw,0,C,[BN,EL],0,3,0,0,0,WO,0,Cv,[],0,0,0,0,0,IT,0,Eu,[],0,3,0,0,0,AD0,0,C,[G0],0,3,0,0,0,Ui,0,C,[],0,3,0,0,0,AHl,0,C,[BN],0,3,0,0,0,Hf,0,C,[BN],0,3,0,0,0,Ot,0,Bv,[],0,0,0,0,0,AHo,0,C,[],0,3,0,0,0,Uq,0,C,[],0,3,0,0,0,AEZ,0,C,[],0,3,0,0,0,AHk,0,C,[BN],0,3,0,0,0,ACT,0,C,[],3,3,0,0,0,YI,0,C,[BN],0,3,0,0,0,AFD,0,C,[],0,0,0,0,0,HK,0,C,[DO],0,3,0,I8,0,JU,0,C,[],0,3,0,0,0,ADq,0,JU,[],0,3,0,0,0,MS,
0,C,[CW],0,3,0,0,0,AEK,0,C,[],0,3,0,0,0,Bw,0,C,[],0,3,0,0,0]);
Co([Ke,0,C,[CW],1,3,0,0,0,AGq,0,Ke,[],0,3,0,0,0,Cy,0,C,[C1],0,3,0,0,0,Hs,0,C,[C1],0,3,0,0,0,Y$,0,Hs,[],0,3,0,0,0,AJK,0,C,[C1],0,3,0,0,0,Et,0,C,[],4,3,0,0,0,AJZ,0,C,[],0,3,0,0,0,AAp,0,C,[],0,3,0,0,0,ADr,0,C,[],0,3,0,0,0,ABH,0,C,[],0,3,0,0,0,Nl,0,C,[],0,3,0,Oi,0,ST,0,C,[],0,3,0,0,0,ACr,0,C,[],0,3,0,0,0,ABl,0,C,[],0,3,0,0,0,AB2,0,C,[],0,3,0,0,0,AGY,0,C,[],0,3,0,0,0,YD,0,C,[],0,3,0,0,0,AIm,0,C,[],0,3,0,0,0,Z6,0,C,[],0,3,0,0,0,Uw,0,C,[],0,3,0,0,0,VB,0,C,[],0,3,0,0,0,He,0,BR,[],12,3,0,0,0,ACu,0,C,[],0,3,0,0,0,OZ,
0,C,[],3,3,0,0,0,CG,0,C,[],0,3,0,0,0,S4,0,CG,[],0,3,0,0,0,S3,0,CG,[],0,3,0,0,0,AAR,0,CG,[],0,3,0,0,0,WH,0,CG,[],0,3,0,0,0,AE8,0,CG,[],0,3,0,0,0,IP,0,CG,[],0,3,0,0,0,Ww,0,IP,[],0,3,0,0,0,FO,0,C,[],3,3,0,0,0,Xv,0,C,[CW,FO],0,3,0,0,0,D5,0,C,[],3,3,0,0,0,AEY,0,C,[D5,FO],0,3,0,0,0,AIi,0,C,[D5],0,3,0,0,0,Va,0,C,[],0,3,0,0,0,DC,0,C,[D5],0,3,0,0,0,AD8,0,DC,[],0,3,0,0,0,FL,0,DC,[FO,D5],1,3,0,0,0,CR,0,FL,[],1,3,0,MR,0,AEJ,0,C,[],0,3,0,0,0,AGW,0,CR,[],4,3,0,0,0,AAh,0,CR,[],4,3,0,0,0,AI0,0,DC,[],0,3,0,0,0,Ik,0,DC,[],0,
3,0,0,0,SN,0,Ik,[],0,3,0,0,0,Ws,0,CR,[],4,3,0,0,0]);
Co([Fj,0,FL,[],1,3,0,0,0,ABC,0,Fj,[],4,3,0,0,0,AAe,0,CR,[],4,3,0,0,0,AB4,0,CR,[],4,3,0,0,0,ABA,0,Fj,[],4,3,0,0,0,FJ,0,BR,[],12,3,0,0,0,Ev,0,C,[CW,D5,FO],1,3,0,0,0,Ju,0,Ev,[D5],1,3,0,0,0,RC,0,Ju,[D5],0,3,0,0,0,FX,0,BR,[],12,3,0,0,0,Ce,0,Ev,[],1,3,0,0,0,F9,0,Ce,[],1,3,0,0,0,U1,0,C,[],0,3,0,0,0,E5,0,Ce,[],1,3,0,PD,0,Ds,0,E5,[],1,3,0,0,0,Ex,0,Ds,[],1,3,0,0,0,Xr,0,Ex,[],0,3,0,0,0,FV,0,Ce,[],1,3,0,0,0,AKx,0,FV,[],0,3,0,0,0,AGT,0,Ce,[],0,3,0,0,0,Ef,0,Ce,[],1,3,0,0,0,SX,0,Ef,[],0,3,0,0,0,Fv,0,Ce,[],1,3,0,0,0,Xj,0,Ds,
[],0,3,0,0,0,Zg,0,Ds,[],0,3,0,0,0,HZ,0,Ce,[],1,3,0,0,0,AD9,0,HZ,[],0,3,0,0,0,T9,0,Ef,[],0,3,0,0,0,AAn,0,Ex,[],0,3,0,0,0,AD1,0,Ce,[],0,3,0,0,0,ACd,0,Ef,[],0,3,0,0,0,AEc,0,Ce,[],0,3,0,0,0,AFz,0,E5,[],0,3,0,0,0,Zn,0,Cv,[],0,0,0,0,0,UF,0,Cv,[],0,0,0,0,0,UU,0,Ds,[],0,3,0,0,0,AEB,0,Fv,[],0,3,0,0,0,AI1,0,F9,[],0,3,0,0,0,AC2,0,F9,[],0,3,0,0,0,AFl,0,Fv,[],0,3,0,0,0,AA_,0,Ex,[],0,3,0,0,0,AJB,0,FV,[],0,3,0,0,0,DA,0,Ev,[],1,3,0,0,0,ABG,0,DA,[],0,3,0,0,0,El,0,C,[],1,3,0,0,0,AET,0,El,[],0,3,0,0,0,AFS,0,DA,[],0,3,0,0,0,AGS,
0,DA,[],0,3,0,0,0,AHO,0,El,[],0,3,0,0,0,W5,0,DA,[],0,3,0,0,0]);
Co([AGZ,0,El,[],0,3,0,0,0,HG,0,C,[],3,3,0,0,0,Ko,0,C,[],3,3,0,0,0,Ca,0,C,[HG,Ko],0,3,0,0,0,VH,0,C,[],4,0,0,0,0,UK,0,C,[],4,3,0,0,0,CT,0,C,[],0,3,0,0,["bh",W(AF1)],CE,0,CT,[],0,3,0,0,0,BA,"RuntimeException",15,CE,[],0,3,0,0,0,AAa,"ClassCastException",15,BA,[],0,3,0,0,0,J1,0,C,[],3,3,0,0,0,H,0,C,[BN,CF,J1],0,3,0,0,["bj",W(Cn),"X",N(AIv),"W",W(ADH)],Dr,0,C,[BN],1,3,0,0,0,Ed,0,Dr,[CF],0,3,0,0,0,T,0,C,[BN,J1],0,0,0,0,["bp",N(Gh),"bj",W(ACN)],Iz,0,C,[],3,3,0,0,0,K,0,T,[Iz],0,3,0,0,["e0",BG(AAI),"gD",Z(Wv),"bj",W(Fr),
"bp",N(AA4),"gE",Bm(ABN)],M3,0,C,[],0,3,0,0,0,LZ,0,C,[],3,3,0,0,0,IG,0,C,[LZ,EY],0,3,0,0,0,QE,0,C,[],3,3,0,0,0,Jz,0,C,[QE],1,3,0,0,0,Kl,0,Jz,[],0,3,0,0,0,AF0,0,C,[],4,3,0,0,0,F5,0,BR,[],12,3,0,0,0,KK,0,C,[],3,3,0,0,0,BY,0,C,[],3,3,0,0,0,Nk,0,C,[BY],3,3,0,0,0,GU,0,C,[KK,Nk],0,3,0,Eh,["gF",N(AEw)],AEf,0,C,[],0,3,0,0,0,MW,0,C,[],0,3,0,Gy,0,J2,0,Dr,[CF],0,3,0,0,0,JJ,0,C,[],0,3,0,0,0,Zq,0,C,[],4,3,0,0,0,C4,"GlyphLayout$GlyphRun",9,C,[DO],0,3,0,0,0,GV,0,C,[],0,3,0,0,0,I1,0,C,[],3,3,0,0,0,H5,0,C,[I1],1,3,0,0,0,DZ,
0,C,[],3,3,0,0,0,GG,0,H5,[DZ,BN],0,3,0,0,0,QV,0,C,[],3,3,0,0,0,J8,0,C,[QV],0,3,0,0,0,Jo,0,C,[CF],0,3,0,0,0,Wj,0,C,[],0,3,0,0,0,AEF,0,C,[],4,3,0,0,0,Ki,0,C,[],3,3,0,0,0,Lb,0,C,[Ki],0,3,0,0,0,VM,0,C,[],0,3,0,0,0,Yj,0,C,[],0,3,0,0,0,ON,0,C,[],3,3,0,0,0]);
Co([HT,0,C,[ON],0,3,0,Jm,0,KF,0,C,[],0,3,0,0,0,CM,0,C,[],0,3,0,0,["fr",N(ACg)],Oz,0,C,[],3,3,0,0,0,Do,0,C,[BY],3,3,0,0,0,I3,0,C,[Oz,Do],0,3,0,0,["gG",N(SR)],N3,0,C,[],3,3,0,0,0,Px,0,C,[N3],0,3,0,0,0,OV,0,C,[OZ],0,3,0,0,0,OO,0,C,[],3,3,0,0,0,M2,0,C,[OO],0,3,0,0,0,LL,0,C,[],3,3,0,0,0,OR,0,C,[LL],0,3,0,0,0,AC9,0,C,[],0,3,0,0,0,PA,0,C,[],3,3,0,0,0,OX,0,C,[PA],3,3,0,0,0,Mx,0,C,[OX],0,3,0,0,0,Hz,0,C,[Do],0,0,0,0,["gG",N(AFb)],HA,0,C,[Do],0,0,0,0,["gG",N(AJi)],Bs,"IllegalArgumentException",15,BA,[],0,3,0,0,0,AHw,0,
C,[],4,3,0,0,0,T$,0,C,[C1],0,3,0,0,0,AA8,0,Dr,[CF],0,3,0,0,0,AAH,0,C,[BY],1,3,0,0,0,IX,0,C,[],3,3,0,0,0,Fb,0,C,[IX],0,3,0,0,["f5",Bm(YN),"gi",Bm(AJc),"c3",BG(Ih),"b4",N(AG8),"b3",BG(Vc),"f3",N(ZD),"fZ",W(AJQ),"f1",N(AEy),"b0",N(AEh),"gp",N(ACX),"gc",Z(VF),"gd",BG(AAm),"gg",BG(ACt),"gn",N(AHK),"c4",BG(HN),"c5",BG(IR),"f$",Bm(WW),"bY",N(AJH),"c6",Z(I9),"f4",N(AAY),"c7",Z(H9),"cn",N(XJ),"f7",Bm(XD),"f6",N(TJ),"f2",Bm(RG),"fE",Bm(AEg),"fB",N(TL),"go",function(b,c,d,e,f,g){ABn(this,b,c,d,e,f,g);},"b1",BG(R4)],N1,
0,C,[IX],3,3,0,0,0,Hn,0,Fb,[N1],0,3,0,0,["gs",N(Yp),"ge",BG(ACM),"gf",function(b,c,d,e,f){AKm(this,b,c,d,e,f);},"gq",Bm(ADm)],Lc,0,Hn,[],0,3,0,0,["gs",N(W3),"ge",BG(Uo),"gf",function(b,c,d,e,f){AI6(this,b,c,d,e,f);},"gq",Bm(Tz),"b4",N(AHa),"b3",BG(ABO),"b0",N(AHN),"gc",Z(Wo),"gd",BG(AEH),"cn",N(Rs),"b1",BG(Yf),"f5",Bm(AA5),"gi",Bm(AIx),"c3",BG(ABY),"f3",N(ADd),"fZ",W(AJP),"f1",N(AEV),"gp",N(AJE),"gg",BG(T1),"gn",N(AE0),"c4",BG(Zo),"c5",BG(AG9),"f$",Bm(ACz),"c6",Z(Vf),"bY",N(Sw),"c7",Z(AJN),"f4",N(Ti),"f7",Bm(Sy),
"f6",N(AIX),"f2",Bm(Su),"fE",Bm(UE),"fB",N(AKq),"go",function(b,c,d,e,f,g){AFB(this,b,c,d,e,f,g);}],Mo,0,C,[],0,3,0,0,0,DQ,0,BR,[],12,3,0,0,0,O3,0,C,[BY],3,3,0,0,0,Jj,0,C,[O3],0,0,0,0,["gH",W(We)],QB,0,Fb,[],0,3,0,0,["b4",N(Vj),"b3",BG(V8),"b0",N(AJ3),"gc",Z(ZB),"gd",BG(AJy),"cn",N(AAN),"b1",BG(AJI),"f5",Bm(Ss),"gi",Bm(Rp),"c3",BG(AAl),"f3",N(AKc),"fZ",W(ADM),"f1",N(AJS),"gp",N(ADG),"gg",BG(YE),"gn",N(AJ4),"c4",BG(AAo),"c5",BG(Un),"f$",Bm(YO),"c6",Z(Xg),"bY",N(Xm),"c7",Z(SE),"f4",N(AFH),"f7",Bm(AHv),"f6",N(ABv),
"f2",Bm(AJw),"fE",Bm(AJO),"fB",N(SG),"go",function(b,c,d,e,f,g){U6(this,b,c,d,e,f,g);}],O8,0,C,[C1],0,3,0,0,0,NJ,0,C,[],0,3,0,0,0,PP,0,C,[BY],3,3,0,0,0,IY,0,C,[PP],0,0,0,0,["gI",W(Sk),"gJ",W(VQ),"gK",W(RZ)],QT,0,C,[],3,3,0,0,0,Q1,0,C,[QT],0,3,0,0,0,KG,0,CM,[],0,0,0,0,0,PM,"CloneNotSupportedException",15,CE,[],0,3,0,0,0,H8,0,Cv,[],0,3,0,0,0,I,"IndexOutOfBoundsException",15,BA,[],0,3,0,0,0,DT,0,C,[BY],3,3,0,0,0,L5,0,C,[DT],3,3,0,0,0,Np,0,C,[DT],3,3,0,0,0,Ng,0,C,[DT],3,3,0,0,0,Os,0,C,[DT],3,3,0,0,0,QP,0,C,[DT],
3,3,0,0,0]);
Co([Ph,0,C,[DT,L5,Np,Ng,Os,QP],3,3,0,0,0,LN,0,C,[],3,3,0,0,0,H6,0,C,[BY],3,3,0,0,0,K2,0,C,[BY,Ph,LN,H6],1,3,0,0,["gL",N(AD_),"gM",Bm(AGR),"gN",Bm(AGb),"gO",Z(ADY),"gP",N(AIK),"gQ",W(U7),"gR",Z(RY)],IF,0,C,[],1,3,0,0,0,Hh,0,IF,[I1,DZ,BN],0,3,0,0,0,Jt,0,Hh,[],0,3,0,0,0,Y0,0,C,[],0,3,0,0,0,E3,0,BR,[],12,3,0,0,0,CN,0,C,[BY],1,3,0,0,0,WA,0,CN,[],1,3,0,0,0,VS,0,CN,[],1,3,0,0,0,AAt,0,CN,[],1,3,0,0,0,ADf,0,CN,[],1,3,0,0,0,Ze,0,CN,[],1,3,0,0,0,Io,0,C,[Do],0,0,0,0,["gG",N(Z2)],Ip,0,C,[Do],0,0,0,0,["gG",N(AJz)],In,0,C,
[Do],0,0,0,0,["gG",N(AEO)],NQ,0,Cv,[],0,3,0,0,0,PU,0,C,[BY],3,3,0,0,0,HJ,0,C,[PU],0,0,0,0,["gS",W(WR)],VE,0,CN,[],1,3,0,0,0,Na,0,C,[BN],4,3,0,0,0,JS,0,C,[],3,3,0,0,0,N4,0,C,[JS],4,3,0,0,0,Uu,0,C,[],4,3,0,0,0,H3,0,C,[],4,3,0,0,0,D_,"ReflectionException",4,CE,[],0,3,0,0,0,DD,0,C,[],4,3,0,Bp,0,MX,0,C,[],3,3,0,0,0,HF,0,C,[MX],0,0,0,0,0,G4,0,C,[],3,3,0,0,0,HE,0,C,[G4],0,0,0,0,0,Pu,0,C,[JS],0,0,0,0,0,B0,"NumberFormatException",15,Bs,[],0,3,0,0,0,HX,0,BA,[],0,3,0,0,0,IL,0,CE,[],0,3,0,0,0,FC,"NoSuchMethodException",
15,IL,[],0,3,0,0,0,CU,"NullPointerException",15,BA,[],0,3,0,0,0,BO,0,C,[],1,0,0,0,["d7",Z(Wa),"ey",BG(YF),"dU",W(UD),"dD",N(AH0),"dT",N(AHY),"ee",W(AJo),"dz",W(Ga)],Jq,0,C,[HG],0,3,0,0,0,AJd,0,C,[BY],1,3,0,0,0,XY,0,C,[BY],1,3,0,0,0,AKH,0,C,[BY],1,3,0,0,0,H$,0,C,[BY],3,3,0,0,0,I5,0,C,[H$],0,3,0,0,["gT",N(AH8)],Za,0,C,[BY],1,3,0,0,0,I4,0,C,[H$],0,3,0,0,["gT",N(Tn)],Kk,0,C,[],3,3,0,0,0,FM,0,C,[Kk,DZ],0,0,0,0,0]);
Co([Gv,0,FM,[],0,0,0,0,0,CA,0,BO,[],0,0,0,C3,["ed",Z(TI),"eO",N(Uk)],OE,0,C,[],0,0,0,0,0,BT,"PatternSyntaxException",12,Bs,[],0,3,0,0,["bh",W(AJj)],TQ,0,C,[],0,3,0,0,0,HW,0,C,[C1],3,3,0,0,0,IW,0,C,[HW],1,3,0,0,0,NH,0,C,[HW],3,3,0,0,0,KE,0,C,[NH],3,3,0,0,0,HY,0,IW,[KE],1,3,0,0,0,OT,0,C,[],3,3,0,0,0,HV,0,HY,[DZ,BN,OT],0,3,0,0,0,ND,0,CA,[],0,0,0,0,["ed",Z(SD),"eO",N(AF9)],Q2,0,CA,[],0,0,0,0,["ed",Z(Vy)],Mg,0,CA,[],0,0,0,0,["ed",Z(UB)],Oa,0,CA,[],0,0,0,0,["ed",Z(SZ),"eO",N(AEz)],EW,0,CA,[],0,0,0,0,["ed",Z(AIr)],B2,
0,BO,[],1,0,0,0,["ed",Z(AKd),"ev",W(AHc),"eO",N(Z4)],D2,0,B2,[],0,0,0,0,["ew",Bm(AGt),"d7",Z(Xl),"ey",BG(Vi),"eO",N(SQ)],BU,0,BO,[],0,0,0,0,["ed",Z(YG),"dD",N(AEr),"dT",N(ABs),"eO",N(AFf),"dz",W(Vd)],Hm,0,BU,[],0,0,0,0,["ed",Z(AD7),"eO",N(AFK)],Dk,0,Hm,[],0,0,0,0,["ed",Z(Wh),"dD",N(AFn)],Ku,0,Dk,[],0,0,0,0,["ed",Z(AEj),"eO",N(AH3)],P9,0,Dk,[],0,0,0,0,["ed",Z(Ua),"eO",N(AHq)],Ne,0,Dk,[],0,0,0,0,["ed",Z(U8),"eO",N(AKJ)],Oq,0,Dk,[],0,0,0,0,["ed",Z(RT),"eO",N(AFX)],EP,0,BU,[],0,0,0,0,["ed",Z(Sm),"d7",Z(ABP),"ey",
BG(AGc),"dT",N(ABi),"ee",W(AEt),"dz",W(AJx)],AC1,0,C,[],4,3,0,0,0,Hg,"ArrayStoreException",15,BA,[],0,3,0,0,0,F0,0,C,[],1,0,0,0,0,Bc,0,F0,[],1,0,0,0,["eI",W(Ud),"eB",W(Th),"d4",W(AG4),"d3",W(AJl)],HD,"MissingResourceException",11,BA,[],0,3,0,0,0,B7,0,Bc,[],0,0,0,0,["eL",N(Vn),"eI",W(AKE),"eB",W(W_),"d4",W(AHP),"bj",W(AC$),"d3",W(Xx)],Dy,0,BO,[],1,0,0,0,["dT",N(AGe),"eO",N(AIn),"dz",W(ACo)],CJ,0,Dy,[],0,0,0,0,["ed",Z(RV)],D$,0,CJ,[],0,0,0,0,["ed",Z(TK)],CL,0,Dy,[],0,0,0,0,["ed",Z(Sj)],D8,0,CJ,[],0,0,0,0,["ed",
Z(ABW),"dD",N(AKL)],Qj,0,CJ,[],0,0,0,0,["ed",Z(AJ0),"d7",Z(AC0)],JT,0,C,[],4,0,0,0,0,Bh,0,C,[],1,0,0,0,0,KP,0,F0,[DZ],0,0,0,0,["bj",W(ADh)],Lm,0,BO,[],0,0,0,0,["ed",Z(AAA),"eO",N(AEq)],Ba,0,C,[DZ,BN],0,3,0,0,0,Kz,0,BU,[],0,0,0,0,0,FB,0,BU,[],0,0,0,0,["ed",Z(TB),"dD",N(AD4),"eO",N(UH),"dT",N(Uc)],CS,0,BU,[],0,0,0,0,["ed",Z(W0),"eL",N(XP),"dT",N(Tt),"dD",N(AGU),"eO",N(Xd)],Hy,0,CS,[],0,0,0,0,["eL",N(Z5)],H2,0,B2,[],0,0,0,0,["ew",Bm(AAD)],Dd,0,B2,[],0,0,0,0,["ew",Bm(Ro),"dT",N(AEs)]]);
Co([Go,0,BU,[],0,0,0,0,["dD",N(ABV),"ed",Z(RI),"dT",N(Uy),"eO",N(AHS)],C_,0,B2,[],0,0,0,0,["ev",W(AAj),"ew",Bm(YX),"d7",Z(WU),"ey",BG(AAs),"dT",N(AHL)],JY,0,B2,[],0,0,0,0,["ew",Bm(Rx)],Hv,0,B2,[],0,0,0,0,["ew",Bm(Sc)],Ec,0,BU,[],0,0,0,0,["dD",N(AJs),"ed",Z(AD5),"dT",N(AAE),"eO",N(AFq)],QU,0,Ec,[],0,0,0,0,0,OM,0,Ec,[],0,0,0,0,0,Rh,0,CL,[],0,0,0,0,["ed",Z(VD)],Mb,0,CL,[],0,0,0,0,["ed",Z(ACK)],E_,0,CL,[],0,0,0,0,["ed",Z(AGO),"dD",N(AIz)],L3,0,E_,[],0,0,0,0,["ed",Z(AAq),"dD",N(ADi)],EI,0,CL,[],0,0,0,0,["ed",Z(AKz)],KT,
0,EI,[],0,0,0,0,["ed",Z(ZA)],Nt,0,CL,[],0,0,0,0,["ed",Z(AJG)],MQ,0,E_,[],0,0,0,0,["ed",Z(UJ)],Pl,0,EI,[],0,0,0,0,["ed",Z(S8)],Nv,0,Dy,[],0,0,0,0,["ed",Z(AKi),"d7",Z(AG6)],Ls,0,Dy,[],0,0,0,0,["ed",Z(AEu),"d7",Z(RO)],FP,0,C,[],1,0,0,0,0,Rj,0,CJ,[],0,0,0,0,["ed",Z(Ta)],Qd,0,D8,[],0,0,0,0,["ed",Z(ACF)],LV,0,D$,[],0,0,0,0,["ed",Z(AGg)],MJ,0,CJ,[],0,0,0,0,["ed",Z(AEl)],OP,0,D8,[],0,0,0,0,["ed",Z(Tl)],Nf,0,D$,[],0,0,0,0,["ed",Z(AGz)],IE,0,BO,[],4,0,0,0,["ed",Z(ABm),"eO",N(ZM)],Ie,0,BO,[],0,0,0,0,["ed",Z(T_),"eO",N(Uv)],Lo,
0,BO,[],0,0,0,0,["ed",Z(Z$),"eO",N(AKu)],JX,0,BO,[],4,0,0,0,["ed",Z(AE9),"eO",N(Vs)],Qr,0,BO,[],0,0,0,0,["ed",Z(ADT),"eO",N(Ru)],KY,0,BO,[],0,0,0,0,["ed",Z(Vb),"eO",N(Yi)],Qo,0,BU,[],0,0,0,0,["ed",Z(AJL),"dD",N(UA),"dU",W(ADs),"eO",N(Uz)],LR,0,BU,[],4,0,0,0,["ed",Z(ADO),"dD",N(AF2),"dU",W(Rk),"eO",N(AKa)],Qe,0,BO,[],4,0,0,0,["ed",Z(AAP),"eO",N(XZ)],Oc,0,BO,[],0,0,0,0,["ed",Z(ADR),"eO",N(XH)],Kr,0,BO,[],0,0,0,0,["ed",Z(ZF),"eO",N(Vw)],E7,0,BU,[],0,0,0,0,["ed",Z(Te),"dD",N(AFk),"eO",N(AFL)],Qm,0,E7,[],0,0,0,0,
["ed",Z(VC),"d7",Z(AH1),"ey",BG(SK),"dT",N(ACv)],M$,0,E7,[],0,0,0,0,["ed",Z(ABJ)],Ll,0,T,[Iz],0,3,0,0,["e0",BG(Xy),"gD",Z(Uh),"bp",N(US),"gE",Bm(AG$)],Ny,0,B2,[],0,0,0,0,["ew",Bm(V$),"d7",Z(T4),"ey",BG(Yb),"dT",N(Y9)],Kp,0,B2,[],0,0,0,0,["ew",Bm(ABS)],KW,0,B2,[],0,0,0,0,["ew",Bm(AGi)],AKM,0,C,[],4,3,0,0,0,Kn,0,B2,[],0,0,0,0,["ew",Bm(AGm)],FS,0,BU,[],0,0,0,0,["dD",N(AEi),"ed",Z(H7),"d7",Z(Y5),"ey",BG(Wn),"dT",N(SA),"eO",N(AHx)],FZ,0,BU,[],0,0,0,0,["dD",N(UO),"ed",Z(Hw),"d7",Z(AEL),"ey",BG(AGh),"dT",N(Wb),"eO",
N(AEU)],Dq,0,B2,[],0,0,0,0,["ew",Bm(AFM),"d7",Z(ADc),"ey",BG(UM),"dT",N(AFv)],G5,0,FP,[],0,0,0,0,["e1",N(UZ),"e3",Bm(AFC)],G6,0,FP,[],0,0,0,0,["e1",N(AGC),"e3",Bm(AJg)]]);
Co([Pk,0,C,[],0,0,0,0,0,GQ,0,Bh,[],0,0,0,0,["el",W(Zp)],Gu,0,Bh,[],0,0,0,0,["el",W(ABK)],O7,0,Bh,[],0,0,0,0,["el",W(AF6)],PG,0,Bh,[],0,0,0,0,["el",W(AHy)],PK,0,Bh,[],0,0,0,0,["el",W(W1)],GM,0,Bh,[],0,0,0,0,["el",W(Vm)],G1,0,GM,[],0,0,0,0,["el",W(XS)],Rb,0,Bh,[],0,0,0,0,["el",W(Y4)],Ht,0,G1,[],0,0,0,0,["el",W(RB)],Nx,0,Ht,[],0,0,0,0,["el",W(ACq)],NS,0,Bh,[],0,0,0,0,["el",W(V4)],Ma,0,Bh,[],0,0,0,0,["el",W(ACj)],L2,0,Bh,[],0,0,0,0,["el",W(AJk)],PO,0,Bh,[],0,0,0,0,["el",W(ADo)],Ri,0,Bh,[],0,0,0,0,["el",W(RJ)],Pj,
0,Bh,[],0,0,0,0,["el",W(ZI)],O1,0,Bh,[],0,0,0,0,["el",W(AFP)],P8,0,Bh,[],0,0,0,0,["el",W(V1)],K_,0,Bh,[],0,0,0,0,["el",W(Wx)],KQ,0,Bh,[],0,0,0,0,["el",W(AI_)],Pq,0,Bh,[],0,0,0,0,["el",W(Ry)],Py,0,Bh,[],0,0,0,0,["el",W(AA2)],Mu,0,Bh,[],0,0,0,0,["el",W(WK)],NX,0,Bh,[],0,0,0,0,["el",W(Ym)],QW,0,Bh,[],0,0,0,0,["el",W(AA6)],Pw,0,Bh,[],0,0,0,0,["el",W(AHW)],M4,0,Bh,[],0,0,0,0,["el",W(AE2)],Mt,0,Bh,[],0,0,0,0,["el",W(ADe)],Re,0,Bh,[],0,0,0,0,["el",W(AFZ)],Gf,0,Bh,[],0,0,0,0,["el",W(ABr)],Qa,0,Gf,[],0,0,0,0,["el",W(ACR)],NA,
0,GQ,[],0,0,0,0,["el",W(T2)],Mp,0,Gu,[],0,0,0,0,["el",W(YU)],Bg,0,Bh,[],0,0,0,0,["el",W(ABw)],Ml,0,Bh,[],0,0,0,0,["el",W(AIY)],IH,0,Bh,[],0,0,0,0,["el",W(XC)],IN,0,Bh,[],0,0,0,0,["el",W(Rz)],DK,"NegativeArraySizeException",15,BA,[],0,3,0,0,0,S2,0,C,[],0,0,0,0,0,Wc,0,C,[],4,0,0,0,0,UI,0,C,[],4,3,0,0,0,PR,0,C,[],0,3,0,0,0,Ge,0,C,[],0,3,0,0,0,JA,0,C,[],0,3,0,0,0,YZ,0,C,[],4,3,0,0,0,AF7,0,C,[],4,3,0,0,0,ME,0,CM,[],0,0,0,0,["fr",N(AG7),"gA",N(WN),"gz",Bm(AC4)],B8,0,BR,[],9,3,0,Gp,0,Ep,0,FM,[],0,0,0,0,0]);
Co([AJ7,0,C,[],3,3,0,0,0,O9,0,C,[BY],3,3,0,0,0,Mi,0,C,[O9,BY],1,3,0,0,["gU",Bm(AI4),"gV",N(ADA),"gW",Bm(UP),"gX",Z(AAu),"gY",Z(AGH)],Jg,0,C,[Do],0,0,0,0,["gG",N(AB0)],Eb,0,BR,[],12,3,0,0,0,ZE,0,C,[],0,3,0,0,0,Nr,0,C,[],3,3,0,0,0,FN,0,Jq,[Nr],0,3,0,0,0,Q,"StringIndexOutOfBoundsException",15,I,[],0,3,0,0,0,Qg,0,Bc,[],0,0,0,0,["eL",N(W8)],Qf,0,Bc,[],0,0,0,0,["eL",N(Sh)],Lx,0,Bc,[],0,0,0,0,["eL",N(ABd),"bj",W(Yz)],LD,0,Bc,[],0,0,0,0,["eL",N(AFN)],LB,0,Bc,[],0,0,0,0,["eL",N(AGl)],LC,0,Bc,[],0,0,0,0,["eL",N(ABR)],LH,
0,Bc,[],0,0,0,0,["eL",N(WB)],LI,0,Bc,[],0,0,0,0,["eL",N(Rn)],LF,0,Bc,[],0,0,0,0,["eL",N(YJ)],LG,0,Bc,[],0,0,0,0,["eL",N(ABT)],LJ,0,Bc,[],0,0,0,0,["eL",N(AH4)],LK,0,Bc,[],0,0,0,0,["eL",N(VL)],Lw,0,Bc,[],0,0,0,0,["eL",N(AKN)],LY,0,Bc,[],0,0,0,0,["eL",N(YQ)],Lu,0,Bc,[],0,0,0,0,["eL",N(VI)],Lv,0,Bc,[],0,0,0,0,["eL",N(XV)],LA,0,Bc,[],0,0,0,0,["eL",N(AAd)],Lt,0,Bc,[],0,0,0,0,["eL",N(AHG)],Ly,0,Bc,[],0,0,0,0,["eL",N(Ul)],Lz,0,Bc,[],0,0,0,0,["eL",N(AER)],Gq,0,C,[],0,0,0,0,0,EV,0,C,[EY],0,3,0,0,0,CV,"IllegalStateException",
15,BA,[],0,3,0,0,0,GA,"IllegalMonitorStateException",15,BA,[],0,3,0,0,0,AFQ,0,C,[],0,3,0,0,0,X0,0,C,[],4,3,0,0,0,Sz,0,C,[BY],1,3,0,0,0,ED,0,C,[],3,3,0,0,0,Q3,0,C,[ED],0,3,0,0,["bg",W(AH6)],P1,0,B8,[],12,0,0,0,0,P2,0,B8,[],12,0,0,0,0,P6,0,B8,[],12,0,0,0,0,P7,0,B8,[],12,0,0,0,0,P4,0,B8,[],12,0,0,0,0,P5,0,B8,[],12,0,0,0,0,PZ,0,B8,[],12,0,0,0,0,P0,0,B8,[],12,0,0,0,0,PY,0,B8,[],12,0,0,0,0,KV,0,C,[],3,3,0,0,0,NN,0,C,[KV],0,3,0,0,0,MO,0,C,[BY],4,3,0,0,0]);
Co([Nq,0,C,[],3,3,0,0,0,M_,0,C,[Nq],0,0,0,0,["e",N(AAz),"fo",N(AJD)],Of,0,C,[ED],0,3,0,0,0,KS,0,EP,[],0,0,0,0,["d7",Z(XG),"ey",BG(AKy),"ee",W(Vq)],Og,0,Bc,[],0,0,0,0,["eL",N(AIq)],Kx,0,Bc,[],0,0,0,0,["eL",N(TV)],NM,0,Bc,[],0,0,0,0,["eL",N(Tk)],NL,0,Bc,[],0,0,0,0,["eL",N(Xz)],Qx,0,Bc,[],0,0,0,0,["eL",N(ZT)],LS,0,Bc,[],0,0,0,0,["eL",N(AIs)],Li,0,Bc,[],0,0,0,0,["eL",N(AEa)],M0,0,Bc,[],0,0,0,0,["eL",N(AFV)],Kt,0,Bc,[],0,0,0,0,["eL",N(AJ6)],Kw,0,Bc,[],0,0,0,0,["eL",N(Wk)],Ld,0,Bc,[],0,0,0,0,["eL",N(AIT)],L6,0,Bc,
[],0,0,0,0,["eL",N(ACf)],L9,0,Bc,[],0,0,0,0,["eL",N(AFi)],OD,0,Bc,[],0,0,0,0,["eL",N(AH5)],N5,0,Bc,[],0,0,0,0,["eL",N(AJA)],KH,0,Bc,[],0,0,0,0,["eL",N(V3)],Hk,0,Bc,[],0,0,0,0,["eL",N(AEe)],NE,0,Hk,[],0,0,0,0,["eL",N(AGV)],Tm,0,C,[G4],0,0,0,0,0,Fh,0,EV,[],0,0,0,0,["bg",W(AEo)],KI,0,C,[],32,0,0,Jd,0,Qc,0,C,[BY,DT],1,3,0,0,["gZ",Bm(ABp),"g0",Bm(ACi),"g1",Z(RX),"g2",N(R$),"g3",Z(YM)],Fk,0,C,[BY],3,3,0,0,0,HC,0,C,[Fk],0,0,0,0,["gG",N(Z3)],ACI,0,C,[],0,3,0,0,0,Fx,0,C,[G4,C1],0,3,0,0,0,Lk,0,C,[C1],0,3,0,0,0,Gd,0,C,
[],4,3,0,0,0,KJ,0,C,[EY],0,0,0,0,0,Q6,0,C,[],3,3,0,0,0,Oo,0,C,[Q6],3,3,0,0,0,O6,0,C,[],3,3,0,0,0,FI,0,C,[Oo,O6],1,3,0,0,0,Gg,0,FI,[],0,3,0,0,0,Gz,0,Gg,[],0,3,0,0,0,FD,0,Gz,[],1,3,0,0,0,Cj,0,FD,[],0,3,0,0,["g4",N(AAf)],Fi,0,C,[Fk],0,0,0,0,["gG",N(ADF)],T8,0,C,[],0,0,0,0,0,B5,0,FI,[],0,3,0,0,0,HI,0,C,[CF],1,3,0,0,0,J_,0,HI,[],0,3,0,0,0,G7,"IllegalCharsetNameException",14,Bs,[],0,3,0,0,0,L0,0,C,[],3,3,0,0,0,IA,0,C,[L0],0,3,0,0,0,Kc,0,C,[],1,3,0,0,0]);
Co([Ob,0,Kc,[],0,3,0,0,0,Mw,0,FU,[],0,0,0,0,0,R1,0,C,[],4,3,0,0,0,Ra,"NoSuchElementException",11,BA,[],0,3,0,0,0,Bf,"GdxRuntimeException",3,BA,[],0,3,0,0,0,Wf,0,C,[],4,3,0,0,0,Dj,0,C,[ED],0,3,0,0,["bg",W(Tx)],Xi,0,C,[],4,3,0,0,0,QZ,0,C,[],32,0,0,JW,0,JR,"ConcurrentModificationException",11,BA,[],0,3,0,0,0,J0,0,C,[],1,3,0,0,0,Mq,0,J0,[],0,3,0,0,0,Eo,0,FD,[],0,3,0,0,["g4",N(Yl)],Wt,0,Dr,[CF],0,3,0,0,0,AEx,0,C,[],0,0,0,0,0,AE_,0,C,[],4,3,0,0,0,Jk,0,C,[],0,3,0,0,0,IV,0,C,[CW],0,3,0,Ho,0,N2,0,C,[CW],0,3,0,0,0,Lp,
0,C,[C1,CF],4,3,0,0,0,JK,0,C,[],3,3,0,0,0,Qh,0,C,[],3,3,0,0,0,Lj,0,C,[ED,JK,Qh],0,0,0,0,["bg",W(AFa)],Pn,0,C,[C1],0,3,0,0,0,AFr,0,C,[],4,3,0,0,0,KX,0,C,[CW],3,3,0,0,0,NG,0,C,[KX],0,3,0,0,0,PF,0,C,[],0,3,0,0,0,DG,0,C,[],1,3,0,0,0,Gn,0,DG,[CF],1,3,0,0,0,EF,0,DG,[CF],1,3,0,0,0,FE,0,C,[],4,3,0,0,0,E2,0,DG,[CF],1,3,0,0,0,Jc,0,C,[CW],3,3,0,0,0,Nu,0,C,[Jc],0,3,0,0,["fz",W(Yh),"fH",W(AFG),"fF",Z(ADI),"f_",Bm(Xe),"gh",Bm(TF)],Il,0,C,[Jc],0,3,0,Iq,["fz",W(TT),"fH",W(AC_),"fF",Z(T5),"f_",Bm(AHh),"gh",Bm(Wz)],Gr,0,DG,[CF],
1,3,0,0,0,Dv,0,C,[],3,3,0,0,0,Db,0,EF,[Dv],0,0,0,0,0,ACA,0,C,[BY],1,3,0,0,0,FH,0,Gn,[],1,0,0,0,0,EK,0,FH,[],0,0,0,0,["gr",N(ADC),"gv",Bm(ABE),"gj",W(RE)],Fy,0,E2,[],1,0,0,0,0,Hc,0,Fy,[],0,0,0,0,["gw",N(AES),"gk",Bm(ADQ),"gj",W(AD$)],F7,0,Gr,[],1,0,0,0,0,Qu,0,F7,[],0,0,0,0,["gx",N(X1)],F2,0,FH,[Dv],1,0,0,0,["gj",W(AA$)],Le,0,F2,[],0,0,0,0,["gr",N(XU),"gv",Bm(RD)],Oj,0,F2,[],0,0,0,0,["gr",N(AHf),"gv",Bm(TG)],FA,0,Fy,[Dv],1,0,0,0,["gj",W(AEk),"cU",W(AFp)]]);
Co([K3,0,FA,[],0,0,0,0,["gw",N(ABh),"gk",Bm(AFj)],M5,0,FA,[],0,0,0,0,["gw",N(RN),"gk",Bm(AA7)],Ir,0,BA,[],0,3,0,0,0,Hr,"ReadOnlyBufferException",13,Ir,[],0,3,0,0,0,JN,"BufferUnderflowException",13,BA,[],0,3,0,0,0,PL,0,C,[],0,3,0,J5,0,XR,0,C,[],4,3,0,0,0,Fq,0,F7,[Dv],1,0,0,0,["cU",W(AFR)],KU,0,Fq,[],0,0,0,0,["gx",N(VK)],Mn,0,Fq,[],0,0,0,0,["gx",N(ADp)],G2,0,BR,[],12,3,0,0,0,WQ,0,C,[],4,3,0,0,0,AE7,0,C,[ED,JK],3,0,0,0,0,Iy,"BufferOverflowException",13,BA,[],0,3,0,0,0,Jy,0,C,[Fk],0,0,0,0,["gG",N(Zf)],N8,0,C,[],
0,3,0,0,0,MF,0,CM,[],0,0,0,0,0,MD,0,CM,[],0,0,0,0,["fr",N(TS),"gA",N(RU),"gz",Bm(AB1)],WT,0,C,[],0,3,0,0,0,MC,0,C,[H6],1,3,0,0,["gL",N(AKf),"g5",W(U5)],ADt,0,C,[BY],1,3,0,0,0,KN,0,C,[],32,0,0,JI,0,Ey,0,EV,[],0,0,0,0,["bg",W(UT)],KL,0,CM,[],0,0,0,0,["fr",N(UX),"gA",N(ACD),"gz",Bm(TC)],KM,0,CM,[],0,0,0,0,["fr",N(X$),"gA",N(St),"gz",Bm(YP)],HR,0,C,[Fk],0,0,0,0,["gG",N(AJt)],Ic,0,C,[Do],0,0,0,0,["gG",N(W9)]]);
let AMR=ALt(AMl),AMN=ALt(TX),AMO=ALt(AMm),AMP=ALt(AMn),AMQ=ALt(ACG),AMM=ALt(ACy),AMS=ALt(ADV);ALe(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","UTF-8","BIG_ENDIAN","LITTLE_ENDIAN","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","enabled","disabled","childrenOnly","keyboard","scroll","touchDown","touchUp","touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","Class cannot be created (missing no-arg constructor): ","none",
"all","table","cell","actor","OnPlane","Back","Front","bounces cannot be < 2 or > 5: ","loadFactor must be > 0 and < 1: ","key cannot be null.","Lambert","Phong","both","top","bottom","Enabled","EnabledUntilCycleEnd","Disabled","<init>",": ","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ","The value is too big for integer type","The value is too big for int type: ","Illegal radix: ","","java.runtime.name","userAgent","os.name","Windows","OS X","no OS",
".html","index.html","index-debug.html","assets/","assets.txt","Loading asset : ","gdx.wasm.js","Error compiling shader: ","Math.sin() at "," FPS","index can\'t be >= size: "," >= ","0","LOAD_ASSETS","APP_CREATE","APP_LOOP","Either src or dest is null","java.version","1.8","TeaVM","file.separator","/","path.separator",":","line.separator","\n","java.io.tmpdir","/tmp","java.vm.version","user.home","Unsupported asset type ","Loading script : ","px","mousedown","mouseup","mousemove","wheel","touchstart","CSS1Compat",
"touchmove","touchcancel","touchend","keydown","keypress","keyup","hidden","capacity must be >= 0: ","The required capacity is too large: ","The value is too big for long type","The value is too big for long type: ","Can only cope with FloatBuffer and ShortBuffer at the moment","GL error: ",", ","GLVersion","OpenGL ES (\\d(\\.\\d){0,2})","WebGL (\\d(\\.\\d){0,2})","(\\d(\\.\\d){0,2})","Invalid version string: ","\\.","Error parsing number: ",", assuming: ","libGDX GL","Desktop","HeadlessDesktop","Applet","WebGL",
"iOS","Webaudio","Audiocontext unlocked","OpenGL","GLES","NONE","mp3","ogg","wav","Patter is null","Constructor not found for class: ","Security violation occurred while getting constructor for class: \'","\'.","Security violation while getting constructor for class: ","object","function","string","number","undefined","\\Q","\\E","\\\\E\\Q","Is","In","Lower","Upper","ASCII","Alpha","Digit","Alnum","Punct","Graph","Print","Blank","Cntrl","XDigit","javaLowerCase","javaUpperCase","javaWhitespace","javaMirrored",
"javaDefined","javaDigit","javaIdentifierIgnorable","javaISOControl","javaJavaIdentifierPart","javaJavaIdentifierStart","javaLetter","javaLetterOrDigit","javaSpaceChar","javaTitleCase","javaUnicodeIdentifierPart","javaUnicodeIdentifierStart","Space","w","W","s","S","d","D","BasicLatin","Latin-1Supplement","LatinExtended-A","LatinExtended-B","IPAExtensions","SpacingModifierLetters","CombiningDiacriticalMarks","Greek","Cyrillic","CyrillicSupplement","Armenian","Hebrew","Arabic","Syriac","ArabicSupplement","Thaana",
"Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","HangulJamo","Ethiopic","EthiopicSupplement","Cherokee","UnifiedCanadianAboriginalSyllabics","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","TaiLe","NewTaiLue","KhmerSymbols","Buginese","PhoneticExtensions","PhoneticExtensionsSupplement","CombiningDiacriticalMarksSupplement","LatinExtendedAdditional","GreekExtended","GeneralPunctuation",
"SuperscriptsandSubscripts","CurrencySymbols","CombiningMarksforSymbols","LetterlikeSymbols","NumberForms","Arrows","MathematicalOperators","MiscellaneousTechnical","ControlPictures","OpticalCharacterRecognition","EnclosedAlphanumerics","BoxDrawing","BlockElements","GeometricShapes","MiscellaneousSymbols","Dingbats","MiscellaneousMathematicalSymbols-A","SupplementalArrows-A","BraillePatterns","SupplementalArrows-B","MiscellaneousMathematicalSymbols-B","SupplementalMathematicalOperators","MiscellaneousSymbolsandArrows",
"Glagolitic","Coptic","GeorgianSupplement","Tifinagh","EthiopicExtended","SupplementalPunctuation","CJKRadicalsSupplement","KangxiRadicals","IdeographicDescriptionCharacters","CJKSymbolsandPunctuation","Hiragana","Katakana","Bopomofo","HangulCompatibilityJamo","Kanbun","BopomofoExtended","CJKStrokes","KatakanaPhoneticExtensions","EnclosedCJKLettersandMonths","CJKCompatibility","CJKUnifiedIdeographsExtensionA","YijingHexagramSymbols","CJKUnifiedIdeographs","YiSyllables","YiRadicals","ModifierToneLetters","SylotiNagri",
"HangulSyllables","HighSurrogates","HighPrivateUseSurrogates","LowSurrogates","PrivateUseArea","CJKCompatibilityIdeographs","AlphabeticPresentationForms","ArabicPresentationForms-A","VariationSelectors","VerticalForms","CombiningHalfMarks","CJKCompatibilityForms","SmallFormVariants","ArabicPresentationForms-B","HalfwidthandFullwidthForms","Specials","Cn","IsL","Lu","Ll","Lt","Lm","Lo","IsM","Mn","Me","Mc","N","Nd","Nl","No","IsZ","Zs","Zl","Zp","IsC","Cc","Cf","Co","Cs","IsP","Pd","Ps","Pe","Pc","Po","IsS",
"Sm","Sc","Sk","So","Pi","Pf","ErrorLoading: ","i","b","a","Invalid assets description file.","PX","PCT","EM","EX","PT","PC","IN","CM","MM","jpg","jpeg","png","bmp","gif","json","xml","txt","glsl","fnt","pack","obj","atlas","g3dj","Image","Audio","Text","t","Binary","Directory","main","Script loaded: ","#iterator() cannot be used nested.","ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/","==","=","u_sampler","a_position","a_normal","a_color","a_texCoord","u_projModelView","attribute vec4 a_position;\n",
"attribute vec3 a_normal;\n","attribute vec4 a_color;\n","uniform mat4 u_projModelView;\n","varying vec4 v_col;\n","void main() {\n   gl_Position = u_projModelView * a_position;\n","   v_col = a_color;\n   v_col.a *= 255.0 / 254.0;\n","   gl_PointSize = 1.0;\n}\n","   v_tex"," = ",";\n","varying vec2 v_tex","attribute vec2 a_texCoord","#ifdef GL_ES\nprecision mediump float;\n#endif\n","void main() {\n   gl_FragColor = ","vec4(1, 1, 1, 1)","v_col"," * ",";\n}"," texture2D(u_sampler",",  v_tex",") *",")","uniform sampler2D u_sampler",
"vertex shader must not be null","fragment shader must not be null","Fragment shader:\n","Vertex shader\n","No uniform with name \'","\' in shader","An attempted fetch uniform from uncompiled shader \n","Mesh attempting to access memory outside of the index buffer (count: ",", offset: ",", max: ","attributes must be >= 1","No buffer allocated!","New position "," is outside of range [0;","New limit ","The last float in src "," is outside of array of size ","Length "," must be non-negative","Offset ","Capacity is negative: ",
"data must be a ByteBuffer or FloatBuffer","Index ","Logical","Pixels","Asset loaded: ","data:",";base64,","error"]);
H.prototype.toString=function(){return Br(this);};
H.prototype.valueOf=H.prototype.toString;C.prototype.toString=function(){return Br(LM(this));};
C.prototype.__teavm_class__=function(){return AK7(this);};
AIZ.main=ALE(ADl);
AIZ.main.javaException=ALr;
let Be=Symbol('jsoClass');
(function(){var c;c=GU.prototype;c[Be]=true;c.onAnimationFrame=c.gF;c=I3.prototype;c[Be]=true;c.handleEvent=c.gG;c=Hz.prototype;c[Be]=true;c.handleEvent=c.gG;c=HA.prototype;c[Be]=true;c.handleEvent=c.gG;c=Jj.prototype;c[Be]=true;c.fullscreenChanged=c.gH;c=IY.prototype;c[Be]=true;c.denied=c.gK;c.prompt=c.gJ;c.granted=c.gI;c=K2.prototype;c.removeEventListener=c.gO;c.dispatchEvent=c.gP;c.get=c.gL;c.addEventListener=c.gR;Object.defineProperty(c,"length",{get:c.gQ});c=Io.prototype;c[Be]=true;c.handleEvent=c.gG;c
=Ip.prototype;c[Be]=true;c.handleEvent=c.gG;c=In.prototype;c[Be]=true;c.handleEvent=c.gG;c=HJ.prototype;c[Be]=true;c.unlockFunction=c.gS;c=I5.prototype;c[Be]=true;c.accept=c.gT;c=I4.prototype;c[Be]=true;c.accept=c.gT;c=Mi.prototype;c.removeEventListener=c.gY;c.dispatchEvent=c.gV;c.addEventListener=c.gX;c=Jg.prototype;c[Be]=true;c.handleEvent=c.gG;c=MO.prototype;c[Be]=true;c=Qc.prototype;c.removeEventListener=c.g1;c.dispatchEvent=c.g2;c.addEventListener=c.g3;c=HC.prototype;c[Be]=true;c.handleEvent=c.gG;c=Fi.prototype;c[Be]
=true;c.handleEvent=c.gG;c=Jy.prototype;c[Be]=true;c.handleEvent=c.gG;c=MC.prototype;c.get=c.gL;Object.defineProperty(c,"length",{get:c.g5});c=HR.prototype;c[Be]=true;c.handleEvent=c.gG;c=Ic.prototype;c[Be]=true;c.handleEvent=c.gG;})();
}));
