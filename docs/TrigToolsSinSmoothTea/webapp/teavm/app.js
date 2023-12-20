"use strict";
(function(module){if(typeof define==='function'&&define.amd){define(['exports'],function(exports){module(exports);});}else if(typeof exports==='object'&&exports!==null&&typeof exports.nodeName!=='string'){module(exports);}else{module(typeof self!=='undefined'?self:this);}}(function(AI8){let AMq=2463534242,Gl=()=>{let x=AMq;x^=x<<13;x^=x>>>17;x^=x<<5;AMq=x;return x;},W=f=>function(){return f(this);},N=f=>function(p1){return f(this,p1);},Bm=f=>function(p1,p2){return f(this,p1,p2);},Z=f=>function(p1,p2,p3){return f(this,
p1,p2,p3,p3);},BG=f=>function(p1,p2,p3,p4){return f(this,p1,p2,p3,p4);},AL1=f=>function(){let args=Array.prototype.slice.apply(arguments);AMr(function(){f.apply(this,args);});},ALN=f=>(args,callback)=>{if(!args){args=[];}let javaArgs=R(E0(),args.length);for(let i=0;i<args.length;++i){javaArgs.data[i]=V(args[i]);}AMr(()=>{f.call(null,javaArgs);},callback);},Bz=target=>target.$clinit=()=>{},ALe=obj=>{let cls=obj.constructor,arrayDegree=0;while(cls.$meta&&cls.$meta.item){++arrayDegree;cls=cls.$meta.item;}let clsName
="";if(cls.$meta.primitive){clsName=cls.$meta.name;}else {clsName=cls.$meta?cls.$meta.name||"a/"+cls.name:"@"+cls.name;}while(arrayDegree-->0){clsName+="[]";}return clsName;},D=superclass=>{if(superclass===0){return function(){};}if(superclass===void 0){superclass=E0();}return function(){superclass.call(this);};},Bk=cls=>ALV(cls),E0=()=>C,RR=()=>{{return AKY();}},Hu=t=>{{return AE_(t);}};let AMs=()=>{return {$array:null,classObject:null,$meta:{supertypes:[],superclass:null}};},AMt=(name,binaryName)=>{let cls
=AMs();cls.$meta.primitive=true;cls.$meta.name=name;cls.$meta.binaryName=binaryName;cls.$meta.enum=false;cls.$meta.item=null;cls.$meta.simpleName=null;cls.$meta.declaringClass=null;cls.$meta.enclosingClass=null;return cls;},AMu=AMt("boolean","Z"),T4=AMt("char","C"),AMv=AMt("byte","B"),AMw=AMt("short","S"),ACO=AMt("int","I"),ACG=AMt("long","J"),AD3=AMt("float","F"),W4=AMt("double","D"),CQ=AMt("void","V");let AMx=new ArrayBuffer(16),AMy=new DataView(AMx),AMz=new Float32Array(AMx),AMA=new Float64Array(AMx),AMB
=new Int32Array(AMx),AMm;if(typeof BigInt!=='function'){AMm=n=>{AMy.setFloat64(0,n,true);return new AMC(AMy.getInt32(0,true),AMy.getInt32(4,true));};}else if(typeof BigInt64Array!=='function'){AMm=n=>{AMy.setFloat64(0,n,true);let lo=AMy.getInt32(0,true),hi=AMy.getInt32(4,true);return BigInt.asIntN(64,BigInt.asUintN(32,BigInt(lo))|BigInt(hi)<<BigInt(32));};}else {let AMD=new BigInt64Array(AMx);AMm=n=>{AMA[0]=n;return AMD[0];};}let Im=n=>{AMz[0]=n;return AMB[0];},Ig=n=>{AMB[0]=n;return AMz[0];},B4=(a,b)=>a>b?
1:a<b? -1:a===b?0:1,CB=Math.imul||function(a,b){let ah=a>>>16&0xFFFF,al=a&0xFFFF,bh=b>>>16&0xFFFF,bl=b&0xFFFF;return al*bl+(ah*bl+al*bh<<16>>>0)|0;},C8=(a,b)=>(a>>>0)/(b>>>0)>>>0,ALK=(a,b)=>(a>>>0)%(b>>>0)>>>0,DN=(a,b)=>{a>>>=0;b>>>=0;return a<b? -1:a>b?1:0;};function AMC(lo,hi){this.lo=lo|0;this.hi=hi|0;}AMC.prototype.__teavm_class__=()=>{return "long";};let AME=a=>(a.hi&0x80000000)===0,AMF=a=>(a.hi&0x80000000)!==0,AMG=1<<18,BM,B,O,C7,Z1,Bd,AMH;if(typeof BigInt!=="function"){AMC.prototype.toString=function()
{let result=[],n=this,positive=AME(n);if(!positive){n=ALP(n);}let radix=new AMC(10,0);do {let divRem=AMH(n,radix);result.push(String.fromCharCode(48+divRem[1].lo));n=divRem[0];}while(n.lo!==0||n.hi!==0);result=(result.reverse()).join('');return positive?result:"-"+result;};AMC.prototype.valueOf=function(){return Z1(this);};BM=new AMC(0,0);O=val=>new AMC(val, -(val<0)|0);C7=val=>val>=0?new AMC(val|0,val/0x100000000|0):ALP(new AMC( -val|0, -val/0x100000000|0));B=(lo,hi)=>new AMC(lo,hi);Z1=val=>0x100000000*val.hi
+(val.lo>>>0);Bd=val=>val.lo;}else {BM=BigInt(0);B=(lo,hi)=>BigInt.asIntN(64,BigInt.asUintN(64,BigInt(lo))|BigInt.asUintN(64,BigInt(hi)<<BigInt(32)));O=val=>BigInt.asIntN(64,BigInt(val|0));C7=val=>BigInt.asIntN(64,BigInt(val>=0?Math.floor(val):Math.ceil(val)));Z1=val=>Number(val);Bd=val=>Number(BigInt.asIntN(32,val))|0;}let C6,Xb,Ww,ALh,ALj,WV,ALQ,Cj,Nn,AMI,U,Jy,Sh,ALS,ALP,Ci,Xa,F6,Ek,ALF,X;if(typeof BigInt!=='function'){C6=(a,b)=>a.hi===b.hi&&a.lo===b.lo;Xb=(a,b)=>a.hi!==b.hi||a.lo!==b.lo;Ww=(a,b)=>{if(a.hi
<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>y;}return (a.lo&1)>(b.lo&1);};ALh=(a,b)=>{if(a.hi<b.hi){return false;}if(a.hi>b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x>=y;}return (a.lo&1)>=(b.lo&1);};ALj=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x<y;}return (a.lo&1)<(b.lo&1);};WV=(a,b)=>{if(a.hi>b.hi){return false;}if(a.hi<b.hi){return true;}let x=a.lo>>>1,y=b.lo>>>1;if(x!==y){return x
<=y;}return (a.lo&1)<=(b.lo&1);};Cj=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return C7(a.lo+b.lo);}else if(AMJ.abs(a.hi)<AMG&&AMJ.abs(b.hi)<AMG){return C7(Z1(a)+Z1(b));}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo+b_lolo|0,lohi=a_lohi+b_lohi+(lolo>>16)|0,hilo=a_hilo+b_hilo+(lohi>>16)|0,hihi=a_hihi+b_hihi+(hilo>>16)|0;return new AMC(lolo&0xFFFF|(lohi&0xFFFF)<<16,hilo&0xFFFF|(hihi&0xFFFF)<<16);};AMI
=a=>{let lo=a.lo+1|0,hi=a.hi;if(lo===0){hi=hi+1|0;}return new AMC(lo,hi);};ALP=a=>AMI(new AMC(a.lo^0xFFFFFFFF,a.hi^0xFFFFFFFF));Nn=(a,b)=>{if(a.hi===a.lo>>31&&b.hi===b.lo>>31){return C7(a.lo -b.lo);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=a_lolo -b_lolo|0,lohi=a_lohi -b_lohi+(lolo>>16)|0,hilo=a_hilo -b_hilo+(lohi>>16)|0,hihi=a_hihi -b_hihi+(hilo>>16)|0;return new AMC(lolo&0xFFFF|(lohi&0xFFFF)<<16,
hilo&0xFFFF|(hihi&0xFFFF)<<16);};ALQ=(a,b)=>{let r=DN(a.hi,b.hi);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);};U=(a,b)=>{let positive=AMF(a)===AMF(b);if(AMF(a)){a=ALP(a);}if(AMF(b)){b=ALP(b);}let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16,lolo=0,lohi=0,hilo=0,hihi=0;lolo=a_lolo*b_lolo|0;lohi=lolo>>>16;lohi=(lohi&0xFFFF)+a_lohi*b_lolo|0;hilo=hilo+(lohi>>>16)|0;lohi
=(lohi&0xFFFF)+a_lolo*b_lohi|0;hilo=hilo+(lohi>>>16)|0;hihi=hilo>>>16;hilo=(hilo&0xFFFF)+a_hilo*b_lolo|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lohi*b_lohi|0;hihi=hihi+(hilo>>>16)|0;hilo=(hilo&0xFFFF)+a_lolo*b_hilo|0;hihi=hihi+(hilo>>>16)|0;hihi=hihi+a_hihi*b_lolo+a_hilo*b_lohi+a_lohi*b_hilo+a_lolo*b_hihi|0;let result=new AMC(lolo&0xFFFF|lohi<<16,hilo&0xFFFF|hihi<<16);return positive?result:ALP(result);};Jy=(a,b)=>{if(AMJ.abs(a.hi)<AMG&&AMJ.abs(b.hi)<AMG){return C7(Z1(a)/Z1(b));}return (AMH(a,b))[0];};ALS
=(a,b)=>{if(a.hi>=0&&a.hi<AMG&&b.hi>=0&&b.hi<AMG){return C7(Z1(a)/Z1(b));}return (AMK(a,b))[0];};Sh=(a,b)=>{if(AMJ.abs(a.hi)<AMG&&AMJ.abs(b.hi)<AMG){return C7(Z1(a)%Z1(b));}return (AMH(a,b))[1];};AMH=(a,b)=>{if(b.lo===0&&b.hi===0){throw new Error("Division by zero");}let positive=AMF(a)===AMF(b);if(AMF(a)){a=ALP(a);}if(AMF(b)){b=ALP(b);}a=new AML(a.lo,a.hi,0);b=new AML(b.lo,b.hi,0);let q=AMM(a,b);a=new AMC(a.lo,a.hi);q=new AMC(q.lo,q.hi);return positive?[q,a]:[ALP(q),ALP(a)];};let AMK=(a,b)=>{if(b.lo===0&&b.hi
===0){throw new Error("Division by zero");}a=new AML(a.lo,a.hi,0);b=new AML(b.lo,b.hi,0);let q=AMM(a,b);a=new AMC(a.lo,a.hi);q=new AMC(q.lo,q.hi);return [q,a];};Ci=(a,b)=>new AMC(a.lo&b.lo,a.hi&b.hi);Xa=(a,b)=>new AMC(a.lo|b.lo,a.hi|b.hi);F6=(a,b)=>new AMC(a.lo^b.lo,a.hi^b.hi);Ek=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AMC(a.lo<<b,a.lo>>>32 -b|a.hi<<b);}else if(b===32){return new AMC(0,a.lo);}else {return new AMC(0,a.lo<<b -32);}};ALF=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AMC(a.lo
>>>b|a.hi<<32 -b,a.hi>>b);}else if(b===32){return new AMC(a.hi,a.hi>>31);}else {return new AMC(a.hi>>b -32,a.hi>>31);}};X=(a,b)=>{b&=63;if(b===0){return a;}else if(b<32){return new AMC(a.lo>>>b|a.hi<<32 -b,a.hi>>>b);}else if(b===32){return new AMC(a.hi,0);}else {return new AMC(a.hi>>>b -32,0);}};function AML(lo,hi,sup){this.lo=lo;this.hi=hi;this.sup=sup;}let AMN=(a,b)=>{let a_lolo=(a.lo&0xFFFF)*b|0,a_lohi=(a.lo>>>16)*b|0,a_hilo=(a.hi&0xFFFF)*b|0,a_hihi=(a.hi>>>16)*b|0,sup=a.sup*b|0;a_lohi=a_lohi+(a_lolo>>>16)
|0;a_hilo=a_hilo+(a_lohi>>>16)|0;a_hihi=a_hihi+(a_hilo>>>16)|0;sup=sup+(a_hihi>>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup&0xFFFF;},AMO=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo -b_lolo|0;a_lohi=a_lohi -b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo -b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi -b_hihi+(a_hilo>>16)|0;let sup=a.sup -b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF
|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AMP=(a,b)=>{let a_lolo=a.lo&0xFFFF,a_lohi=a.lo>>>16,a_hilo=a.hi&0xFFFF,a_hihi=a.hi>>>16,b_lolo=b.lo&0xFFFF,b_lohi=b.lo>>>16,b_hilo=b.hi&0xFFFF,b_hihi=b.hi>>>16;a_lolo=a_lolo+b_lolo|0;a_lohi=a_lohi+b_lohi+(a_lolo>>16)|0;a_hilo=a_hilo+b_hilo+(a_lohi>>16)|0;a_hihi=a_hihi+b_hihi+(a_hilo>>16)|0;let sup=a.sup+b.sup+(a_hihi>>16)|0;a.lo=a_lolo&0xFFFF|a_lohi<<16;a.hi=a_hilo&0xFFFF|a_hihi<<16;a.sup=sup;},AMQ=(a,b)=>{let r=a.sup -b.sup;if(r!==0){return r;}r=(a.hi>>>
1) -(b.hi>>>1);if(r!==0){return r;}r=(a.hi&1) -(b.hi&1);if(r!==0){return r;}r=(a.lo>>>1) -(b.lo>>>1);if(r!==0){return r;}return (a.lo&1) -(b.lo&1);},AMR=a=>{let n=0,d=16;while(d>0){if(a>>>d!==0){a>>>=d;n=n+d|0;}d=d/2|0;}return 31 -n;},AMS=(a,b)=>{if(b===0){return;}if(b<32){a.sup=(a.hi>>>32 -b|a.sup<<b)&0xFFFF;a.hi=a.lo>>>32 -b|a.hi<<b;a.lo<<=b;}else if(b===32){a.sup=a.hi&0xFFFF;a.hi=a.lo;a.lo=0;}else if(b<64){a.sup=(a.lo>>>64 -b|a.hi<<b -32)&0xFFFF;a.hi=a.lo<<b;a.lo=0;}else if(b===64){a.sup=a.lo&0xFFFF;a.hi
=0;a.lo=0;}else {a.sup=a.lo<<b -64&0xFFFF;a.hi=0;a.lo=0;}},AMT=(a,b)=>{if(b===0){return;}if(b===32){a.lo=a.hi;a.hi=a.sup;a.sup=0;}else if(b<32){a.lo=a.lo>>>b|a.hi<<32 -b;a.hi=a.hi>>>b|a.sup<<32 -b;a.sup>>>=b;}else if(b===64){a.lo=a.sup;a.hi=0;a.sup=0;}else if(b<64){a.lo=a.hi>>>b -32|a.sup<<64 -b;a.hi=a.sup>>>b -32;a.sup=0;}else {a.lo=a.sup>>>b -64;a.hi=0;a.sup=0;}},AMU=a=>new AML(a.lo,a.hi,a.sup),AMM=(a,b)=>{let bits=b.hi!==0?AMR(b.hi):AMR(b.lo)+32,sz=1+(bits/16|0),dividentBits=bits%16;AMS(b,bits);AMS(a,dividentBits);let q
=new AML(0,0,0);while(sz-->0){AMS(q,16);let digitA=(a.hi>>>16)+0x10000*a.sup,digitB=b.hi>>>16,digit=digitA/digitB|0,t=AMU(b);AMN(t,digit);if(AMQ(t,a)>=0){while(AMQ(t,a)>0){AMO(t,b); --digit;}}else {while(true){let nextT=AMU(t);AMP(nextT,b);if(AMQ(nextT,a)>0){break;}t=nextT;++digit;}}AMO(a,t);q.lo|=digit;AMS(a,16);}AMT(a,bits+16);return q;};}else {C6=(a,b)=>a===b;Xb=(a,b)=>a!==b;Ww=(a,b)=>a>b;ALh=(a,b)=>a>=b;ALj=(a,b)=>a<b;WV=(a,b)=>a<=b;Cj=(a,b)=>BigInt.asIntN(64,a+b);AMI=a=>BigInt.asIntN(64,a+1);ALP=a=>BigInt.asIntN(64,
 -a);Nn=(a,b)=>BigInt.asIntN(64,a -b);ALQ=(a,b)=>{a=BigInt.asUintN(64,a);b=BigInt.asUintN(64,b);return a<b? -1:a>b?1:0;};U=(a,b)=>BigInt.asIntN(64,a*b);Jy=(a,b)=>BigInt.asIntN(64,a/b);ALS=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,a)/BigInt.asUintN(64,b));Sh=(a,b)=>BigInt.asIntN(64,a%b);Ci=(a,b)=>BigInt.asIntN(64,a&b);Xa=(a,b)=>BigInt.asIntN(64,a|b);F6=(a,b)=>BigInt.asIntN(64,a^b);Ek=(a,b)=>BigInt.asIntN(64,a<<BigInt(b&63));ALF=(a,b)=>BigInt.asIntN(64,a>>BigInt(b&63));X=(a,b)=>BigInt.asIntN(64,BigInt.asUintN(64,
a)>>BigInt(b&63));}let R=(cls,sz)=>{let data=new Array(sz);data.fill(null);return new (ALC(cls))(data);},P=(cls,data)=>new (ALC(cls))(data),U5;if(typeof BigInt64Array!=='function'){U5=init=>new AMV(init);}else {U5=data=>{let buffer=new BigInt64Array(data.length);buffer.set(data);return new AMV(buffer);};}let G=sz=>new AMW(new Uint16Array(sz)),ALB=data=>{let buffer=new Uint16Array(data.length);buffer.set(data);return new AMW(buffer);},BF=sz=>new AMX(new Int8Array(sz)),ALl=sz=>new AMY(new Int16Array(sz)),AMn=
data=>{let buffer=new Int16Array(data.length);buffer.set(data);return new AMY(buffer);},S=sz=>new AMZ(new Int32Array(sz)),Gk=data=>{let buffer=new Int32Array(data.length);buffer.set(data);return new AMZ(buffer);},Kj=sz=>new AM0(new Int8Array(sz)),Cb=sz=>new AM1(new Float32Array(sz)),ABN=sz=>new AM2(new Float64Array(sz)),ALC=cls=>{let result=cls.$array;if(result===null){function JavaArray(data){(E0()).call(this);this.data=data;}JavaArray.prototype=Object.create((E0()).prototype);JavaArray.prototype.type=cls;JavaArray.prototype.constructor
=JavaArray;JavaArray.prototype.toString=function(){let str="[";for(let i=0;i<this.data.length;++i){if(i>0){str+=", ";}str+=this.data[i].toString();}str+="]";return str;};JavaArray.prototype.p=function(){let dataCopy;if('slice' in this.data){dataCopy=this.data.slice();}else {dataCopy=new this.data.constructor(this.data.length);for(let i=0;i<dataCopy.length;++i){dataCopy[i]=this.data[i];}}return new (ALC(this.type))(dataCopy);};let name="["+cls.$meta.binaryName;JavaArray.$meta={item:cls,supertypes:[E0()],primitive
:false,superclass:E0(),name:name,binaryName:name,enum:false,simpleName:null,declaringClass:null,enclosingClass:null};JavaArray.classObject=null;JavaArray.$array=null;result=JavaArray;cls.$array=JavaArray;}return result;};let AM3,ALn=strings=>{AM4();AM3=new Array(strings.length);for(let i=0;i<strings.length;++i){AM3[i]=AM5(V(strings[i]));}},A=index=>AM3[index],L=(array,offset,count)=>{let result="",limit=offset+count;for(let i=offset;i<limit;i=i+1024|0){let next=Math.min(limit,i+1024|0);result+=String.fromCharCode.apply(null,
array.subarray(i,next));}return result;},V=str=>str===null?null:OY(str),Br=str=>str===null?null:str.g9,AM4=()=>(()=>{})(),AM5;{AM5=str=>str;}let G_=(obj,cls)=>obj instanceof E0()&&!!obj.constructor.$meta&&AM6(obj.constructor,cls),AM6=(from,to)=>{if(from===to){return true;}if(to.$meta.item!==null){return from.$meta.item!==null&&AM6(from.$meta.item,to.$meta.item);}let supertypes=from.$meta.supertypes;for(let i=0;i<supertypes.length;i=i+1|0){if(AM6(supertypes[i],to)){return true;}}return false;};let E=ex=>{throw AHv(ex);},
AM7=Symbol("javaException"),AHv=ex=>{let err=ex.$jsException;if(!err){let javaCause=AM8(ex),jsCause=javaCause!==null?javaCause.$jsException:void 0,cause=typeof jsCause==="object"?{cause:jsCause}:void 0;err=new AM9("Java exception thrown",cause);if(typeof Error.captureStackTrace==="function"){Error.captureStackTrace(err);}err[AM7]=ex;ex.$jsException=err;AM$(err,ex);}return err;},AM$=(err,ex)=>{if(typeof AM_==="function"&&err.stack){let stack=AM_(err.stack),javaStack=R(ANa(),stack.length),elem,noStack=false;for
(let i=0;i<stack.length;++i){let element=stack[i];elem=ANb(V(element.className),V(element.methodName),V(element.fileName),element.lineNumber);if(elem==null){noStack=true;break;}javaStack.data[i]=elem;}if(!noStack){ANc(ex,javaStack);}}},AM9;if(typeof ANd==='object'){let ANe=Symbol("defaultMessage");AM9=function AM9(message,cause){let self=Reflect.construct(Error,[void 0,cause],AM9);Object.setPrototypeOf(self,AM9.prototype);self[ANe]=message;return self;};AM9.prototype=Object.create(Error.prototype,{constructor
:{configurable:true,writable:true,value:AM9},message:{get(){try {let javaException=this[AM7];if(typeof javaException==='object'){let javaMessage=ANf(javaException);if(typeof javaMessage==="object"){return javaMessage!==null?javaMessage.toString():null;}}return this[ANe];}catch(ANg){return "Exception occurred trying to extract Java exception message: "+ANg;}}}});}else {AM9=Error;}let ALA=e=>e instanceof Error&&typeof e[AM7]==='object'?e[AM7]:null,BP=err=>{let ex=err[AM7];if(!ex){ex=ANh(V("(JavaScript) "+err.toString()));err[AM7]
=ex;ex.$jsException=err;AM$(err,ex);}return ex;},ANh=message=>ALb(message),ANf=t=>AF$(t),AM8=t=>AL3(t),ANa=()=>E0(),ANb=(className,methodName,fileName,lineNumber)=>{{return null;}},ANc=(e,stack)=>{};let ANi=outputFunction=>{let buffer="";return msg=>{let index=0;while(true){let next=msg.indexOf('\n',index);if(next<0){break;}outputFunction(buffer+msg.substring(index,next));buffer="";index=next+1;}buffer+=msg.substring(index);};},BI=typeof $rt_putStdoutCustom==="function"?$rt_putStdoutCustom:typeof console===
"object"?ANi(msg=>console.info(msg)):()=>{},CI=typeof $rt_putStderrCustom==="function"?$rt_putStderrCustom:typeof console==="object"?ANi(msg=>console.error(msg)):()=>{};let ANj=null,AK5=data=>{let i=0,packages=new Array(data.length);for(let j=0;j<data.length;++j){let prefixIndex=data[i++],prefix=prefixIndex>=0?packages[prefixIndex]:"";packages[j]=prefix+data[i++]+".";}ANj=packages;},Co=data=>{let packages=ANj,i=0;while(i<data.length){let cls=data[i++];cls.$meta={};let m=cls.$meta,className=data[i++];m.name=
className!==0?className:null;if(m.name!==null){let packageIndex=data[i++];if(packageIndex>=0){m.name=packages[packageIndex]+m.name;}}m.binaryName="L"+m.name+";";let superclass=data[i++];m.superclass=superclass!==0?superclass:null;m.supertypes=data[i++];if(m.superclass){m.supertypes.push(m.superclass);cls.prototype=Object.create(m.superclass.prototype);}else {cls.prototype={};}let flags=data[i++];m.enum=(flags&8)!==0;m.flags=flags;m.primitive=false;m.item=null;cls.prototype.constructor=cls;cls.classObject=null;m.accessLevel
=data[i++];let innerClassInfo=data[i++];if(innerClassInfo===0){m.simpleName=null;m.declaringClass=null;m.enclosingClass=null;}else {let enclosingClass=innerClassInfo[0];m.enclosingClass=enclosingClass!==0?enclosingClass:null;let declaringClass=innerClassInfo[1];m.declaringClass=declaringClass!==0?declaringClass:null;let simpleName=innerClassInfo[2];m.simpleName=simpleName!==0?simpleName:null;}let clinit=data[i++];cls.$clinit=clinit!==0?clinit:function(){};let virtualMethods=data[i++];if(virtualMethods!==0){for
(let j=0;j<virtualMethods.length;j+=2){let name=virtualMethods[j],func=virtualMethods[j+1];if(typeof name==='string'){name=[name];}for(let k=0;k<name.length;++k){cls.prototype[name[k]]=func;}}}cls.$array=null;}};function ANk(runner){this.status=3;this.stack=[];this.suspendCallback=null;this.runner=runner;this.attribute=null;this.completeCallback=null;}ANk.prototype.push=function(){for(let i=0;i<arguments.length;++i){this.stack.push(arguments[i]);}return this;};ANk.prototype.s=ANk.prototype.push;ANk.prototype.pop
=function(){return this.stack.pop();};ANk.prototype.l=ANk.prototype.pop;ANk.prototype.isResuming=function(){return this.status===2;};ANk.prototype.isSuspending=function(){return this.status===1;};ANk.prototype.suspend=function(callback){this.suspendCallback=callback;this.status=1;};ANk.prototype.start=function(callback){if(this.status!==3){throw new Error("Thread already started");}if(ANl!==null){throw new Error("Another thread is running");}this.status=0;this.completeCallback=callback?callback:result=>{if(result instanceof Error)
{throw result;}};this.run();};ANk.prototype.resume=function(){if(ANl!==null){throw new Error("Another thread is running");}this.status=2;this.run();};ANk.prototype.run=function(){ANl=this;let result;try {result=this.runner();}catch(ANg){result=ANg;}finally {ANl=null;}if(this.suspendCallback!==null){let self=this,callback=this.suspendCallback;this.suspendCallback=null;callback(()=>self.resume());}else if(this.status===0){this.completeCallback(result);}};let Ee=()=>{let thread=Cq();return thread!=null&&thread.isSuspending();},
Eg=()=>{let thread=Cq();return thread!=null&&thread.isResuming();},AMr=(runner,callback)=>(new ANk(runner)).start(callback),ANl=null,Cq=()=>ANl,D9=()=>{throw new Error("Invalid recorded state");};function C(){this.im=null;this.$id$=0;}
let Er=b=>{let c;if(b.im===null){c=new Gq;c.il=BE;b.im=c;}b=b.im;c=b.il;if(c===null)b.il=BE;else if(c!==BE){c=new CV;c.g_=1;c.ha=1;c.hc=A(0);E(c);}b.iJ=b.iJ+1|0;},
CO=b=>{let c,d;if(!Ft(b)){c=b.im;if(c.il===BE){d=c.iJ-1|0;c.iJ=d;if(!d)c.il=null;Ft(b);return;}}b=new GA;b.g_=1;b.ha=1;E(b);},
ALW=b=>{YZ(b,1);},
YZ=(b,c)=>{let d,$p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();d=$T.l();c=$T.l();b=$T.l();}_:while(true){switch($p){case 0:if(b.im===null){d=new Gq;d.il=BE;b.im=d;}d=b.im;if(d.il===null)d.il=BE;if(d.il===BE){d.iJ=d.iJ+c|0;return;}$p=1;case 1:SS(b,c);if(Ee()){break _;}return;default:D9();}}Cq().s(b,c,d,$p);},
ABh=(b,c,d)=>{let e,f,g;e=BE;f=b.im;if(f===null){f=new Gq;f.il=e;b.im=f;if(e!==e)BE=e;BE.j5=CZ();b=b.im;b.iJ=b.iJ+c|0;b=null;d.kG.e(b);return;}if(f.il===null){f.il=e;if(e!==e)BE=e;BE.j5=CZ();b=b.im;b.iJ=b.iJ+c|0;b=null;d.kG.e(b);return;}if(f.j0===null)f.j0=AAD();f=f.j0;g=new Oj;g.pc=e;g.pd=b;g.pa=c;g.pb=d;d=g;f.push(d);},
ALY=b=>{So(b,1);},
So=(b,c)=>{let d;if(!Ft(b)){d=b.im;if(d.il===BE){c=d.iJ-c|0;d.iJ=c;if(c>0)return;d.il=null;d=d.j0;if(d!==null&&!(d.length?0:1)){d=new Q8;d.pv=b;JJ(d,0);}else Ft(b);return;}}b=new GA;b.g_=1;b.ha=1;E(b);},
AGN=b=>{let c,d,e;if(!Ft(b)){c=b.im;if(c.il===null){b=c.j0;if(b!==null&&!(b.length?0:1)){b=c.j0.shift();Bp();if(b!==null&&!(b instanceof E0()))b=Ce(b);d=b;c.j0=null;b=d.pc;c=d.pd;e=d.pa;d=d.pb;if(BE!==b)BE=b;BE.j5=CZ();c=c.im;c.il=b;c.iJ=c.iJ+e|0;b=null;d.kG.e(b);}return;}}},
Ft=a=>{let b,c;b=a.im;if(b===null)return 1;a:{if(b.il===null){c=b.j0;if(!(c!==null&&!(c.length?0:1))){b=b.oa;if(b===null)break a;if(b.length?0:1)break a;}}return 0;}a.im=null;return 1;},
BB=a=>{return;},
ALg=()=>{let a=new C();BB(a);return a;},
ALX=a=>{let b,c,d;b=a.constructor;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new Ca;c.hH=b;d=c;b.classObject=d;}}return c;},
V9=a=>{let b,c;b=a;if(!b.$id$){c=Gl();b.$id$=c;}return a.$id$;},
ACg=(a,b)=>{return a!==b?0:1;},
LP=a=>{let b,c,d,e,f,g,h,i;b=a;if(!b.$id$){c=Gl();b.$id$=c;}d=Bj(a.$id$,4);b=new K;b.g$=G(16);F(b,b.g8,A(1));e=b.g8;if(d===null)d=A(2);F(b,e,d);c=new H;f=b.g$;g=f.data;h=b.g8;i=g.length;if(h>=0&&h<=(i-0|0)){c.g9=L(f.data,0,h);return c;}b=new I;b.g_=1;b.ha=1;E(b);},
ALJ=a=>{let b,c,d;if(!G_(a,DZ)&&a.constructor.$meta.item===null){b=new PR;b.g_=1;b.ha=1;E(b);}b=R8(a);c=b;d=Gl();c.$id$=d;return b;},
J8=a=>{let b,c;b=a.im;if(!(b!==null&&b.il===BE?1:0)){b=new GA;b.g_=1;b.ha=1;E(b);}b=b.oa;if(b===null)return;while(!(b.length?0:1)){c=b.shift();Bp();if(c!==null&&!(c instanceof E0()))c=Ce(c);c=c;if(!c.m())JJ(c,0);}a.im.oa=null;},
SS=(b,c)=>{let thread=Cq();let javaThread=RR();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Hu(javaThread);thread.resume();};callback.fp=e=>{thread.attribute=AHv(e);Hu(javaThread);thread.resume();};callback=NV(callback);thread.suspend(()=>{try {ABh(b,c,callback);;}catch(Kh){callback.fp(Kh);}});return null;};
let AHJ=D();
let ADt=b=>{let c,d,e,f;QL=G(0);c=new H;c.g9="";I3=c;KB=new Ka;AGs();c=new Bq;c.kM=1.0;c.kL=0.0;K4=c;c=new Bq;c.kM=0.0;c.kL=1.0;K3=c;c=new Bq;c.kM=0.0;c.kL=0.0;M5=c;MD=new Bq;Oo=new Bq;Tm();O6=new Bq;O$=new Bq;Vl();NY=new Bq;N$=new Bq;c=new Dm;c.jN=0.0;c.jK=0.0;c.jL=0.0;c.jM=0.0;Nb=c;c=new Dm;c.jN=0.0;c.jK=0.0;c.jL=0.0;c.jM=0.0;Na=c;Mr=new DW;OB=new DW;Qd=0.10000000149011612;AJ7();MY=Bk(AD3);RQ();Lt=R(GR,111);OU=new Bq;O4=new Bq;Mx=new C;Z4();KF=Bk(ACO);Xl();LW=Bk(ACG);KE=Bk(T4);O9=R(Jq,128);SU();MO=new Bq;MP
=new Bq;MQ=new Bq;Oq=0.4000000059604645;KD=0.10000000149011612;PX=new Bq;AEO();Ns=new Bq;NT=new Bq;Rb=new Bq;Rd=new Bq;Rc=new Bq;AIO();AJ5();Wx();Lj=new Bw;AFx();Za();Ng=Cb(3);ADv();ZQ();ABF();C$=1;VG();Re=new HF;ME=new HE;AB_();M=1;WM();Gw=new JX;AD0();T3();c=new Kd;b=R(H,0);d=b.data;G3(A(3));e=d.length;f=0;while(f<e){G3(d[f]);f=f+1|0;}c.oF=A(3);c.pm=b.p();BX=c;Rl=Bk(W4);Y2();c=new FE;c.mF=A(4);Cz=c;c=new FE;c.mF=A(5);Hp=c;AKf();Ui();AAo();c=AJ$(A(6));c.l9=0;c.kO=0;Ma(new IH,new L9,c);};
let KG=D();
let X2=0,X8=0,Tf=0,AKg=0,Ws=0;
let Oh=()=>{Oh=Bz(KG);Z0();};
let Z0=()=>{X2=Cm(V(navigator.platform),A(7));X8=Cm(V(navigator.platform),A(8));Tf=Cm(V(navigator.platform),A(9));AKg=!Cm(V(navigator.platform),A(10))&&!Cm(V(navigator.platform),A(11))?0:1;Ws=!Cm(V(navigator.platform),A(12))&&!Cm(V(navigator.platform),A(13))&&!Cm(V(navigator.platform),A(14))?0:1;};
let Kv=D(0);
let FU=D();
let CW=D(0);
let AHo=D(FU);
let DO=D(0);
let Em=D();
let CF=D(0);
let BN=D(0);
function BR(){let a=this;C.call(a);a.hx=null;a.hm=0;}
let AG$=a=>{return a.hm;},
Y1=a=>{return a.hx;};
let Fz=D(BR);
let AIp=null,AJS=null,Yw=null,Sf=null;
let AGs=()=>{let b,c,d;b=new Fz;b.hx=A(15);b.hm=0;AIp=b;c=new Fz;c.hx=A(16);c.hm=1;AJS=c;d=new Fz;d.hx=A(17);d.hm=2;Yw=d;Sf=P(Fz,[b,c,d]);};
let Es=D();
let I8=D(0);
let Iv=D(Es);
let MD=null;
let ALD=()=>{MD=new Bq;};
let EM=D(0);
let C1=D(0);
let Ff=D();
let E1=D(0);
let BJ=D();
let Oo=null;
let AMf=()=>{Oo=new Bq;};
let Fw=D(BJ);
let AEx=D(Fw);
let Ha=D(BR);
let Oi=null,QW=null,PS=null;
let Tm=()=>{let b,c;b=new Ha;b.hx=A(18);b.hm=0;Oi=b;c=new Ha;c.hx=A(19);c.hm=1;QW=c;PS=P(Ha,[b,c]);};
let JQ=D(0);
let GC=D(0);
let EY=D(0);
let CK=D();
let AGZ=D(CK);
let JE=D(Ff);
let Jk=D();
let O6=null,O$=null;
let ALq=()=>{O6=new Bq;O$=new Bq;};
let WJ=D();
let Sb=D();
let Q2=D(0);
let IE=D();
let AD2=D(IE);
let ZT=D(Em);
let M$=D();
let Sw=null;
let Rk=()=>{Rk=Bz(M$);ABM();};
let ABM=()=>{let b,c;b=S((PS.p()).data.length);c=b.data;Sw=b;c[Oi.hm]=1;c[QW.hm]=2;};
let ACd=D();
let OJ=D();
let Rw=null;
let NJ=()=>{NJ=Bz(OJ);Vo();};
let Vo=()=>{let b,c;b=S((H_.p()).data.length);c=b.data;Rw=b;c[Ib.hm]=1;c[HO.hm]=2;c[Iw.hm]=3;};
let AGY=D(CK);
let D7=D();
let OF=D(D7);
let Q9=D();
let AGO=0,AJw=0,ACe=0,AJL=0,YQ=0;
let Py=()=>{Py=Bz(Q9);AJq();};
let AJq=()=>{AGO=Cm(V(navigator.platform),A(7));AJw=Cm(V(navigator.platform),A(8));ACe=Cm(V(navigator.platform),A(9));AJL=!Cm(V(navigator.platform),A(10))&&!Cm(V(navigator.platform),A(11))?0:1;YQ=!Cm(V(navigator.platform),A(12))&&!Cm(V(navigator.platform),A(13))&&!Cm(V(navigator.platform),A(14))?0:1;};
let IP=D();
let AJf=D(Fw);
let NY=null;
let ALI=()=>{NY=new Bq;};
let XU=D();
let N$=null;
let AMj=()=>{N$=new Bq;};
let P1=D();
let Wr=null,Tb=null,AJ2=null;
let QA=()=>{QA=Bz(P1);AGj();};
let AGj=()=>{let b;b=new Cy;b.iK=1;b.hX=R(C,16);Wr=b;b=new Bb;B_();Tb=b;AJ2=new DW;};
let JI=D();
let Gt=D(D7);
let QV=D(D7);
let C9=D(BJ);
let Qd=0.0;
let AL$=()=>{Qd=0.10000000149011612;};
let QO=D(Gt);
let VA=D(Em);
let HQ=D(0);
let ABB=D(Em);
let Y8=D();
let Kn=D();
let UX=null;
let NZ=()=>{NZ=Bz(Kn);AIh();};
let AIh=()=>{let b,c;b=S((H_.p()).data.length);c=b.data;UX=b;c[Lk.hm]=1;c[Ob.hm]=2;c[Qg.hm]=3;c[Ib.hm]=4;c[HO.hm]=5;c[Iw.hm]=6;c[L4.hm]=7;c[MF.hm]=8;c[PJ.hm]=9;c[MZ.hm]=10;};
let CP=D(BR);
let Ib=null,HO=null,Iw=null,L4=null,PJ=null,MZ=null,MF=null,Lk=null,Ob=null,Qg=null,H_=null;
let Vl=()=>{let b,c,d,e,f,g,h,i,j,k;b=new CP;b.hx=A(20);b.hm=0;Ib=b;c=new CP;c.hx=A(21);c.hm=1;HO=c;d=new CP;d.hx=A(22);d.hm=2;Iw=d;e=new CP;e.hx=A(23);e.hm=3;L4=e;f=new CP;f.hx=A(24);f.hm=4;PJ=f;g=new CP;g.hx=A(25);g.hm=5;MZ=g;h=new CP;h.hx=A(26);h.hm=6;MF=h;i=new CP;i.hx=A(27);i.hm=7;Lk=i;j=new CP;j.hx=A(28);j.hm=8;Ob=j;k=new CP;k.hx=A(29);k.hm=9;Qg=k;H_=P(CP,[b,c,d,e,f,g,h,i,j,k]);};
let BS=D();
let DJ=D(BS);
let Zx=D(DJ);
let ADH=D(DJ);
let Cg=D(BS);
let DB=D(Cg);
let Sx=D(DB);
let Uz=D();
let Kb=D(BS);
let VN=D(Kb);
let XL=D(BS);
let ABq=D(BS);
let AFC=D(BS);
let AGc=D();
let IJ=D(BS);
let AAQ=D(IJ);
let Wn=D(Cg);
let AGT=D(Cg);
let AHr=D(DB);
let AEl=D(BS);
let AEL=D(DB);
let AIT=D(Cg);
let AIi=D(Cg);
let Yi=D(BS);
let AAr=D(Cg);
let AAE=D(BS);
let YH=D(BS);
let AAT=D(DJ);
let Ti=D(Cg);
let AI3=D(BS);
let ADV=D(DB);
let Yu=D(DJ);
let ADb=D(BS);
let UA=D(Cg);
let Z3=D(Cg);
let Vv=D();
let ZW=null;
let AJ7=()=>{ZW=P(Ca,[Bk(MW),Bk(Bw),Bk(Oc),Bk(OF),Bk(QV),Bk(Gt),Bk(QO),Bk(ER),Bk(NG),Bk(P2),Bk(Pt),Bk(M_),Bk(QD),Bk(Hl),Bk(QN),Bk(OG),Bk(K9),Bk(Qv),Bk(E8),Bk(N4),Bk(PY),Bk(N0),Bk(Nm),Bk(Lq)]);};
let Cp=D(Iv);
let DM=D(Cp);
let TU=null,AAy=null,AGb=null,AKq=null,ADr=null,RN=null,Xz=null,AC2=null;
let MM=()=>{MM=Bz(DM);AGE();};
let AGE=()=>{let b,c;b=new Bw;b.iy=0.0;b.ix=0.0;b.iw=1.0;b.iv=1.0;Da(b);TU=b;b=new Bw;b.iy=1.0;b.ix=0.0;b.iw=0.0;b.iv=1.0;Da(b);AAy=b;b=new Bw;b.iy=0.0;b.ix=1.0;b.iw=0.0;b.iv=1.0;Da(b);AGb=b;b=new QT;c=new Cy;c.iK=0;c.hX=R(C,16);b.mq=c;b.mz=2147483647;AKq=b;b=new QS;Gb();ADr=b;RN=new QR;Xz=new QQ;AC2=new QP;};
let Ew=D(DM);
let Iu=D(Ew);
let Wg=D(Iu);
let AGV=D(BJ);
let Jj=D(Cp);
let NO=D(0);
let Dw=D();
let X_=D(Dw);
let Cx=D(Es);
let TB=D(Cx);
let AGU=D(BJ);
let BK=D();
let AH2=null,AFJ=null,AGR=null,WI=null,AAZ=null,Zs=null,AFD=null;
let Gb=()=>{Gb=Bz(BK);T7();};
let T7=()=>{let b;b=new GR;Gb();b.r0=0.0;AH2=b;AFJ=new OP;AGR=new OM;WI=new OL;AAZ=new OO;Zs=new ON;AFD=new OK;};
let OO=D(BK);
let AD4=D(BK);
let HL=D(C9);
let AAJ=D(HL);
let QR=D(BK);
let AIJ=D(BJ);
let I1=D(DM);
let OU=null,O4=null;
let AK9=()=>{OU=new Bq;O4=new Bq;};
let AD5=D(BK);
let EL=D(0);
let DW=D();
let Mr=null,OB=null;
let AL5=()=>{Mr=new DW;OB=new DW;};
let C5=D(DW);
let Rr=null;
let Q$=()=>{Q$=Bz(C5);S2();};
let S2=()=>{let b,c,d,e,f,g,h,$$je;Gy();b=Fl;c=Du(b,Bk(C5));b=c<0?null:b.jG.data[c];if(b===null){b=new H8;d=new Cy;d.iK=0;d.hX=R(C,4);b.mq=d;b.mz=100;a:{try{d=Ot(Bk(C5),null);break a;}catch($$e){$$je=BP($$e);if($$je instanceof CE){}else{throw $$e;}}try{d=Mo(Bk(C5),null);Pr(d,1);break a;}catch($$e){$$je=BP($$e);if($$je instanceof D_){}else{throw $$e;}}d=null;}b.oK=d;if(d===null){b=new BA;d=new K;d.g$=G(16);F(d,d.g8,A(30));if(Bk(C5).ii===null)Bk(C5).ii=V(Bk(C5).hH.$meta.name);e=Bk(C5).ii;F(d,d.g8,e);e=new H;f
=d.g$;g=f.data;c=d.g8;h=g.length;if(c>=0&&c<=(h-0|0)){e.g9=L(f.data,0,c);b.g_=1;b.ha=1;b.hc=e;E(b);}e=new I;e.g_=1;e.ha=1;E(e);}DE(Fl,Bk(C5),b);}Rr=b;};
let Yd=D(Dw);
let Ju=D(Cx);
let MO=null,MP=null,MQ=null,Oq=0.0,KD=0.0;
let AMh=()=>{MO=new Bq;MP=new Bq;MQ=new Bq;Oq=0.4000000059604645;KD=0.10000000149011612;};
let Wv=D(Ju);
let Z7=D(BJ);
let Mh=D(0);
let AFH=D();
let ER=D();
let E8=D(ER);
let Pt=D(E8);
let Jz=D(Cx);
let Zh=D(Jz);
let AKk=D(Jj);
let HS=D(Cp);
let AKX=D(Ew);
let JU=D(Cx);
let QP=D(BK);
let PY=D();
let YD=D();
let AAM=D(BJ);
let ACm=D(CK);
let ZB=D();
let AFg=D(BJ);
let AJ3=D(C9);
let Z5=D(Jk);
let OK=D(BK);
let ON=D(BK);
let Ol=D(0);
let Hl=D();
let K9=D(Hl);
let Ya=D(Dw);
let AGS=D(IP);
let AGW=D(JI);
let AIK=D(BJ);
let AIL=D(C9);
let QQ=D(BK);
let K2=D();
let Yy=null,ADj=null,Yx=null,ADi=null,RK=null,UY=null,ACT=null,R_=null,AFa=null;
let Pu=()=>{Pu=Bz(K2);VB();};
let VB=()=>{let b;b=new J6;b.oM=0.0;Yy=b;b=new J6;b.oM=1.0;ADj=b;DP();Yx=De.data[128];DP();b=De.data[129];ADi=b;RK=b;DP();UY=De.data[130];DP();ACT=De.data[132];DP();R_=De.data[136];DP();AFa=De.data[144];};
let NG=D(E8);
let AAh=D(BJ);
let TW=D(CK);
let OP=D(BK);
let WP=D(Cp);
let Z6=D(BJ);
let N0=D();
function GR(){BK.call(this);this.r0=0.0;}
let Lt=null;
let AMa=()=>{Lt=R(GR,111);};
let YE=D(HS);
let OL=D(BK);
let ABi=D(Cx);
let PX=null;
let AMb=()=>{PX=new Bq;};
let AAc=D(JE);
let Qv=D();
let Li=D(Cx);
let Tw=null,W3=null;
let PH=()=>{PH=Bz(Li);Te();};
let Te=()=>{let b,c;Tw=new Bw;b=new HK;I$();c=new Cy;c.iK=1;c.hX=R(C,1);b.rR=c;c=new GV;c.no=1;c.jC=S(2);b.rc=c;W3=b;};
let Lq=D();
let AD7=D(BK);
let QS=D(BK);
let AGi=D(I1);
let OM=D(BK);
let M_=D();
let AJV=D();
let Ei=D(BR);
let YN=null,TK=null,AEu=null,Sk=null,UE=null,AFO=null;
let AEO=()=>{let b,c,d,e,f;b=new Ei;b.hx=A(31);b.hm=0;YN=b;c=new Ei;c.hx=A(32);c.hm=1;TK=c;d=new Ei;d.hx=A(33);d.hm=2;AEu=d;e=new Ei;e.hx=A(34);e.hm=3;Sk=e;f=new Ei;f.hx=A(35);f.hm=4;UE=f;AFO=P(Ei,[b,c,d,e,f]);};
let AJ_=D(BK);
let ZU=D(CK);
function Cv(){let a=this;C.call(a);a.mz=0;a.mq=null;}
let QT=D(Cv);
let TL=D();
let QD=D();
let Oc=D();
let OG=D();
let JS=D(BJ);
let Ns=null;
let AK6=()=>{Ns=new Bq;};
let TV=D(CK);
let AIM=D(JU);
let TO=D(0);
let AAi=D(BJ);
let AKP=D(Cp);
let ADE=D(Cp);
let AAd=D(C9);
let JG=D();
let X$=D(JG);
let AIo=D(Es);
let S4=D(BJ);
let AGD=D(Ew);
let ACM=D(BJ);
let AJD=D(C9);
let P2=D(ER);
let ADL=D(Cp);
let N4=D();
let Nm=D();
let ACt=D(Cx);
let AJ4=D(Ff);
let S6=D(BJ);
let AE4=D(Cp);
let NT=null;
let ALL=()=>{NT=new Bq;};
let AKi=D(JS);
let S7=D(DM);
let Yb=D(Dw);
let Ry=D();
let QN=D();
let Qp=D();
let Uw=null,Tl=null,U3=null,AIU=null,AIW=null,AIV=null,WO=null,XW=null,AJv=null,S_=null,AI4=null;
let Qq=()=>{Qq=Bz(Qp);AB2();};
let AB2=()=>{let b;Uw=Cb(16);b=new Dm;b.jN=0.0;b.jK=0.0;b.jL=0.0;b.jM=1.0;Tl=b;b=new Dm;b.jN=0.0;b.jK=0.0;b.jL=0.0;b.jM=1.0;U3=b;b=new Bb;B_();AIU=b;AIW=new Bb;AIV=new Bb;WO=new Bb;XW=D3();AJv=new Bb;S_=new Bb;AI4=new Bb;};
let Bv=D();
let T6=null,AF7=null,WA=null,AGa=null,VW=null,Xu=null,AAN=null,Sj=null,AA6=null,VV=null,ACu=null,W1=null,Xt=null,Tj=null,R9=null,AFq=null,YI=null,Xw=null,V0=null,AE9=null,Xv=null,AIj=null,XA=null,ABl=null,AHZ=null,ABU=null,Rv=null,Sg=null,AF3=null,XZ=null,AKs=null,AED=null,AIE=null,AAm=null,AFl=null,AKO=null,Zi=null,Zz=null,Sl=null,AGy=null,AKw=null,AIR=null,AEM=null,AKE=null;
let Hb=()=>{Hb=Bz(Bv);Ul();};
let Ul=()=>{let b,c;b=new Pn;Hb();T6=b;AF7=new Pf;WA=new Pe;b=new Ph;AGa=b;VW=b;b=new Dx;b.i2=2;Xu=b;b=new F1;b.i2=2;AAN=b;Sj=b;b=new FW;b.i2=2;AA6=b;VV=b;ACu=new Pg;W1=new Pj;b=new Dx;b.i2=3;Xt=b;b=new F1;b.i2=3;Tj=b;b=new FW;b.i2=3;R9=b;AFq=new Pi;YI=new Pl;b=new Dx;b.i2=4;Xw=b;b=new F1;b.i2=4;V0=b;b=new FW;b.i2=4;AE9=b;b=new Dx;b.i2=5;Xv=b;b=new F1;b.i2=5;AIj=b;b=new FW;b.i2=5;XA=b;ABl=new Pk;AHZ=new Ov;ABU=new Ox;b=new Eu;b.kX=2.0;b.k6=10.0;c=EU(2.0,(-10.0));b.lm=c;b.k_=1.0/(1.0-c);Rv=b;b=new IU;b.kX=2.0;b.k6
=10.0;c=EU(2.0,(-10.0));b.lm=c;b.k_=1.0/(1.0-c);Sg=b;b=new J$;b.kX=2.0;b.k6=10.0;c=EU(2.0,(-10.0));b.lm=c;b.k_=1.0/(1.0-c);AF3=b;b=new Eu;b.kX=2.0;b.k6=5.0;c=EU(2.0,(-5.0));b.lm=c;b.k_=1.0/(1.0-c);XZ=b;b=new IU;b.kX=2.0;b.k6=5.0;c=EU(2.0,(-5.0));b.lm=c;b.k_=1.0/(1.0-c);AKs=b;b=new J$;b.kX=2.0;b.k6=5.0;c=EU(2.0,(-5.0));b.lm=c;b.k_=1.0/(1.0-c);AED=b;AIE=new Oy;AAm=new Oz;AFl=new OA;b=new EX;b.ou=2.0;b.ng=10.0;b.nl=1.0;b.nE=(-21.99114990234375);AKO=b;b=new Lb;b.ou=2.0;b.ng=10.0;b.nl=1.0;b.nE=18.84955596923828;Zi
=b;b=new Nf;b.ou=2.0;b.ng=10.0;b.nl=1.0;b.nE=(-21.99114990234375);Zz=b;b=new Nh;b.ru=3.0;Sl=b;b=new LH;b.sA=2.0;AGy=b;b=new QF;b.rW=2.0;AKw=b;b=new ML;Is(b,4);AIR=b;b=new NA;Is(b,4);AEM=b;AKE=V6(4);};
function LH(){Bv.call(this);this.sA=0.0;}
let ZX=D();
let Pi=D(Bv);
let AJa=D();
function Dx(){Bv.call(this);this.i2=0;}
let F1=D(Dx);
let FW=D(Dx);
let G0=D(0);
let VQ=D();
let Pl=D(Bv);
let AG9=D();
let Ph=D(Bv);
function EX(){let a=this;Bv.call(a);a.ou=0.0;a.ng=0.0;a.nl=0.0;a.nE=0.0;}
let Pg=D(Bv);
let Pf=D(Bv);
let AD$=D();
let Rb=null,Rd=null,Rc=null;
let ALd=()=>{Rb=new Bq;Rd=new Bq;Rc=new Bq;};
let Sa=D(Cv);
let GL=D(0);
function Bq(){let a=this;C.call(a);a.kM=0.0;a.kL=0.0;}
let K4=null,K3=null,M5=null;
let AK_=()=>{let b;b=new Bq;b.kM=1.0;b.kL=0.0;K4=b;b=new Bq;b.kM=0.0;b.kL=1.0;K3=b;b=new Bq;b.kM=0.0;b.kL=0.0;M5=b;};
let Oz=D(Bv);
function Eu(){let a=this;Bv.call(a);a.kX=0.0;a.k6=0.0;a.lm=0.0;a.k_=0.0;}
let ACp=D();
let Pn=D(Bv);
let J$=D(Eu);
let Yz=D();
let FF=D(BR);
let Wk=null,YR=null,AGK=null,ACP=null;
let AIO=()=>{let b,c,d;b=new FF;b.hx=A(36);b.hm=0;Wk=b;c=new FF;c.hx=A(37);c.hm=1;YR=c;d=new FF;d.hx=A(38);d.hm=2;AGK=d;ACP=P(FF,[b,c,d]);};
let N_=D();
let AI0=null;
let NM=()=>{NM=Bz(N_);AAS();};
let AAS=()=>{let b;b=new Bb;B_();AI0=b;};
function Fa(){let a=this;Bv.call(a);a.rN=null;a.rn=null;}
let Is=(a,b)=>{let c,d,e,f,g,h,i,j;Hb();if(b>=2&&b<=5){a:{c=Cb(b);a.rN=c;d=Cb(b);e=d.data;a.rn=d;e[0]=1.0;switch(b){case 2:break;case 3:d=c.data;d[0]=0.4000000059604645;d[1]=0.4000000059604645;d[2]=0.20000000298023224;e[1]=0.33000001311302185;e[2]=0.10000000149011612;break a;case 4:d=c.data;d[0]=0.3400000035762787;d[1]=0.3400000035762787;d[2]=0.20000000298023224;d[3]=0.15000000596046448;e[1]=0.25999999046325684;e[2]=0.10999999940395355;e[3]=0.029999999329447746;break a;case 5:d=c.data;d[0]=0.30000001192092896;d[1]
=0.30000001192092896;d[2]=0.20000000298023224;d[3]=0.10000000149011612;d[4]=0.10000000149011612;e[1]=0.44999998807907104;e[2]=0.30000001192092896;e[3]=0.15000000596046448;e[4]=0.05999999865889549;break a;default:break a;}d=c.data;d[0]=0.6000000238418579;d[1]=0.4000000059604645;e[1]=0.33000001311302185;}c=c.data;c[0]=c[0]*2.0;return;}f=new Bs;g=new K;g.g$=G(16);F(g,g.g8,A(39));J(g,g.g8,b,10);h=new H;c=g.g$;d=c.data;i=g.g8;j=d.length;if(i>=0&&i<=(j-0|0)){h.g9=L(c.data,0,i);f.g_=1;f.ha=1;f.hc=h;E(f);}g=new I;g.g_
=1;g.ha=1;E(g);},
V6=a=>{let b=new Fa();Is(b,a);return b;};
let NA=D(Fa);
let Ov=D(Bv);
let AC4=D();
let Pe=D(Bv);
function EB(){let a=this;C.call(a);a.lC=0.0;a.lB=0.0;a.lD=0.0;a.lA=0.0;}
let AHN=null,AHK=null,AHL=null,AHM=null,Vr=null;
let AJ5=()=>{let b;b=new EB;b.lC=1.0;b.lB=0.0;b.lD=0.0;b.lA=0.0;AHN=b;b=new EB;b.lC=0.0;b.lB=1.0;b.lD=0.0;b.lA=0.0;AHK=b;b=new EB;b.lC=0.0;b.lB=0.0;b.lD=1.0;b.lA=0.0;AHL=b;b=new EB;b.lC=0.0;b.lB=0.0;b.lD=0.0;b.lA=1.0;AHM=b;b=new EB;b.lC=0.0;b.lB=0.0;b.lD=0.0;b.lA=0.0;Vr=b;};
let Lb=D(EX);
function Nh(){Bv.call(this);this.ru=0.0;}
let VE=D();
let AKC=D();
let Pj=D(Bv);
function QF(){Bv.call(this);this.rW=0.0;}
let OA=D(Bv);
let Nf=D(EX);
let Rh=D();
let Xy=null,SP=null,AJz=null;
let L7=()=>{L7=Bz(Rh);SB();};
let SB=()=>{let b,c,d,e,f,g;Xy=R(Bb,15);b=R(Bb,8);SP=b;c=R(Bb,9);d=c.data;AJz=c;e=0;f=d.length;while(e<f){g=new Bb;B_();d[e]=g;e=e+1|0;}b=b.data;e=0;f=b.length;while(e<f){g=new Bb;B_();b[e]=g;e=e+1|0;}};
function HP(){let a=this;C.call(a);a.pX=null;a.p8=null;a.pF=null;a.p9=null;}
let W$=null;
let Kl=()=>{Kl=Bz(HP);AGm();};
let AEc=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.pX;e=b.hd;f=c.hd;if(e<f)f=e;e=b.hf;g=c.hf;if(e<g)g=e;e=b.he;h=c.he;if(e<h)h=e;d.hd=f;d.hf=g;d.he=h;i=a.p8;e=b.hd;g=c.hd;if(e>g)g=e;e=b.hf;h=c.hf;if(e>h)h=e;e=b.he;f=c.he;if(e>f)f=e;i.hd=g;i.hf=h;i.he=f;b=a.pF;h=d.hd;j=d.hf;k=d.he;b.hd=h;b.hf=j;b.he=k;e=i.hd;f=i.hf;g=i.he;h=h+e;j=j+f;k=k+g;b.hd=h;b.hf=j;b.he=k;f=h*0.5;g=j*0.5;e=k*0.5;b.hd=f;b.hf=g;b.he=e;b=a.p9;g=i.hd;h=i.hf;j=i.he;b.hd=g;b.hf=h;b.he=j;e=d.hd;f=d.hf;k=d.he;g=g-e;e=h-f;f=j-k;b.hd=g;b.hf=e;b.he=f;return a;},
AGm=()=>{let b;b=new Bb;B_();W$=b;};
function IN(){let a=this;C.call(a);a.rq=null;a.sg=null;}
let Su=null;
let Ja=()=>{Ja=Bz(IN);AGx();};
let AGx=()=>{let b;b=new Bb;B_();Su=b;};
let VY=D();
let SI=D();
let AFc=D();
let Zr=D();
let OW=D();
let Zn=null;
let Jg=()=>{Jg=Bz(OW);AAp();};
let Xq=b=>{let c;Jg();if(!b)return 1;c=b+(-1)|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
AAp=()=>{let b,c,d,e;b=new Or;c=Xa(Ek(O(4.294967296E9*Math.random()+(-2.147483648E9)|0),32),O(4.294967296E9*Math.random()+(-2.147483648E9)|0));if(C6(c,BM))c=B(0, 2147483648);d=U(F6(c,X(c,33)),B(3981806797, 4283543511));d=U(F6(d,X(d,33)),B(444984403, 3301882366));e=F6(d,X(d,33));d=U(F6(e,X(e,33)),B(3981806797, 4283543511));d=U(F6(d,X(d,33)),B(444984403, 3301882366));d=F6(d,X(d,33));b.q7=e;b.q8=d;Zn=b;};
let P8=D();
let RV=null,RW=null,RX=null,VH=null,AHm=null,ABr=null,Ty=null,Tz=null,AA4=null,AA0=null,Yg=null,Yj=null,Yk=null,Ym=null,AA7=null,AA2=null,ABE=null,Zf=null,AFG=null,YX=null,AIg=null,AIf=null,AId=null,ZN=null;
let MK=()=>{MK=Bz(P8);V1();};
let V1=()=>{let b,c;b=new Bb;B_();RV=b;RW=new Bb;RX=new Bb;b=new JM;b.qT=1;b.qY=Cb(16);VH=b;b=new JM;b.qT=1;b.qY=Cb(16);AHm=b;ABr=new Bq;Ty=new Bq;Tz=new Bq;AA4=new Bq;AA0=new Bq;Yg=new Bq;Yj=new Bq;Yk=new Bq;Ym=new Bq;b=new Hf;c=new Bb;b.iH=c;b.i$=0.0;c.hd=0.0;c.hf=0.0;c.he=0.0;b.i$=0.0;AA7=b;AA2=new Bb;ABE=new Bb;Zf=new Bb;AFG=new Bb;YX=new Bb;AIg=new Bb;AIf=new Bb;AId=new Bb;ZN=new Bb;};
let T1=D();
let ML=D(Fa);
function Ix(){C.call(this);this.iA=null;}
let K7=null,AB7=null,AHU=null,GE=null,FK=null,IL=null,QE=null,LT=null,ADG=null,AKR=null,ADJ=null;
let Dg=()=>{Dg=Bz(Ix);S1();};
let AFR=a=>{let b,c;Dg();b=Cb(16);c=b.data;a.iA=b;c[0]=1.0;c[5]=1.0;c[10]=1.0;c[15]=1.0;},
D3=()=>{let a=new Ix();AFR(a);return a;},
Gm=(a,b)=>{let c;c=b.data;b=a.iA.data;b[0]=c[0];b[1]=c[1];b[2]=c[2];b[3]=c[3];b[4]=c[4];b[5]=c[5];b[6]=c[6];b[7]=c[7];b[8]=c[8];b[9]=c[9];b[10]=c[10];b[11]=c[11];b[12]=c[12];b[13]=c[13];b[14]=c[14];b[15]=c[15];return a;},
ACJ=(a,b)=>{let c,d,e,f,g;Dg();c=K7;d=c.data;e=a.iA.data;f=e[0];g=b.iA.data;d[0]=f*g[0]+e[4]*g[1]+e[8]*g[2]+e[12]*g[3];d[4]=e[0]*g[4]+e[4]*g[5]+e[8]*g[6]+e[12]*g[7];d[8]=e[0]*g[8]+e[4]*g[9]+e[8]*g[10]+e[12]*g[11];d[12]=e[0]*g[12]+e[4]*g[13]+e[8]*g[14]+e[12]*g[15];d[1]=e[1]*g[0]+e[5]*g[1]+e[9]*g[2]+e[13]*g[3];d[5]=e[1]*g[4]+e[5]*g[5]+e[9]*g[6]+e[13]*g[7];d[9]=e[1]*g[8]+e[5]*g[9]+e[9]*g[10]+e[13]*g[11];d[13]=e[1]*g[12]+e[5]*g[13]+e[9]*g[14]+e[13]*g[15];d[2]=e[2]*g[0]+e[6]*g[1]+e[10]*g[2]+e[14]*g[3];d[6]=e[2]*
g[4]+e[6]*g[5]+e[10]*g[6]+e[14]*g[7];d[10]=e[2]*g[8]+e[6]*g[9]+e[10]*g[10]+e[14]*g[11];d[14]=e[2]*g[12]+e[6]*g[13]+e[10]*g[14]+e[14]*g[15];d[3]=e[3]*g[0]+e[7]*g[1]+e[11]*g[2]+e[15]*g[3];d[7]=e[3]*g[4]+e[7]*g[5]+e[11]*g[6]+e[15]*g[7];d[11]=e[3]*g[8]+e[7]*g[9]+e[11]*g[10]+e[15]*g[11];d[15]=e[3]*g[12]+e[7]*g[13]+e[11]*g[14]+e[15]*g[15];return Gm(a,c);},
If=a=>{let b;b=a.iA.data;b[0]=1.0;b[4]=0.0;b[8]=0.0;b[12]=0.0;b[1]=0.0;b[5]=1.0;b[9]=0.0;b[13]=0.0;b[2]=0.0;b[6]=0.0;b[10]=1.0;b[14]=0.0;b[3]=0.0;b[7]=0.0;b[11]=0.0;b[15]=1.0;return a;},
AC_=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m,n;If(a);h=c-b;i=2.0/h;j=e-d;k=2.0/j;l=g-f;m=(-2.0)/l;h= -(c+b)/h;j= -(e+d)/j;l= -(g+f)/l;n=a.iA.data;n[0]=i;n[1]=0.0;n[2]=0.0;n[3]=0.0;n[4]=0.0;n[5]=k;n[6]=0.0;n[7]=0.0;n[8]=0.0;n[9]=0.0;n[10]=m;n[11]=0.0;n[12]=h;n[13]=j;n[14]=l;n[15]=1.0;return a;},
Xi=(a,b,c)=>{let d,e,f,g,h,i;Dg();d=GE;e=b.hd;f=b.hf;g=b.he;d.hd=e;d.hf=f;d.he=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Dl(f);f=d.hd*e;g=d.hf*e;e=d.he*e;d.hd=f;d.hf=g;d.he=e;}d=FK;e=b.hd;f=b.hf;g=b.he;d.hd=e;d.hf=f;d.he=g;f=e*e+f*f+g*g;if(f!==0.0&&f!==1.0){e=1.0/Dl(f);f=d.hd*e;g=d.hf*e;e=d.he*e;d.hd=f;d.hf=g;d.he=e;}b=L_(FK,c);e=b.hd;e=e*e;f=b.hf;e=e+f*f;f=b.he;e=e+f*f;if(e!==0.0&&e!==1.0){g=1.0/Dl(e);h=b.hd*g;e=b.hf*g;f=b.he*g;b.hd=h;b.hf=e;b.he=f;}b=IL;c=FK;e=c.hd;f=c.hf;g=c.he;b.hd=e;b.hf=f;b.he=g;b=L_(b,
GE);e=b.hd;e=e*e;f=b.hf;e=e+f*f;f=b.he;f=e+f*f;if(f!==0.0&&f!==1.0){e=1.0/Dl(f);f=b.hd*e;g=b.hf*e;e=b.he*e;b.hd=f;b.hf=g;b.he=e;}If(a);i=a.iA.data;b=FK;i[0]=b.hd;i[4]=b.hf;i[8]=b.he;b=IL;i[1]=b.hd;i[5]=b.hf;i[9]=b.he;b=GE;i[2]= -b.hd;i[6]= -b.hf;i[10]= -b.he;return a;},
St=(b,c)=>{let d,e,f;Dg();d=b.data;c=c.data;e=Cb(16);f=e.data;f[0]=d[0]*c[0]+d[4]*c[1]+d[8]*c[2]+d[12]*c[3];f[4]=d[0]*c[4]+d[4]*c[5]+d[8]*c[6]+d[12]*c[7];f[8]=d[0]*c[8]+d[4]*c[9]+d[8]*c[10]+d[12]*c[11];f[12]=d[0]*c[12]+d[4]*c[13]+d[8]*c[14]+d[12]*c[15];f[1]=d[1]*c[0]+d[5]*c[1]+d[9]*c[2]+d[13]*c[3];f[5]=d[1]*c[4]+d[5]*c[5]+d[9]*c[6]+d[13]*c[7];f[9]=d[1]*c[8]+d[5]*c[9]+d[9]*c[10]+d[13]*c[11];f[13]=d[1]*c[12]+d[5]*c[13]+d[9]*c[14]+d[13]*c[15];f[2]=d[2]*c[0]+d[6]*c[1]+d[10]*c[2]+d[14]*c[3];f[6]=d[2]*c[4]+d[6]*c[5]
+d[10]*c[6]+d[14]*c[7];f[10]=d[2]*c[8]+d[6]*c[9]+d[10]*c[10]+d[14]*c[11];f[14]=d[2]*c[12]+d[6]*c[13]+d[10]*c[14]+d[14]*c[15];f[3]=d[3]*c[0]+d[7]*c[1]+d[11]*c[2]+d[15]*c[3];f[7]=d[3]*c[4]+d[7]*c[5]+d[11]*c[6]+d[15]*c[7];f[11]=d[3]*c[8]+d[7]*c[9]+d[11]*c[10]+d[15]*c[11];f[15]=d[3]*c[12]+d[7]*c[13]+d[11]*c[14]+d[15]*c[15];Fm(e,0,b,0,16);},
AIB=b=>{Dg();b=b.data;return b[3]*b[6]*b[9]*b[12]-b[2]*b[7]*b[9]*b[12]-b[3]*b[5]*b[10]*b[12]+b[1]*b[7]*b[10]*b[12]+b[2]*b[5]*b[11]*b[12]-b[1]*b[6]*b[11]*b[12]-b[3]*b[6]*b[8]*b[13]+b[2]*b[7]*b[8]*b[13]+b[3]*b[4]*b[10]*b[13]-b[0]*b[7]*b[10]*b[13]-b[2]*b[4]*b[11]*b[13]+b[0]*b[6]*b[11]*b[13]+b[3]*b[5]*b[8]*b[14]-b[1]*b[7]*b[8]*b[14]-b[3]*b[4]*b[9]*b[14]+b[0]*b[7]*b[9]*b[14]+b[1]*b[4]*b[11]*b[14]-b[0]*b[5]*b[11]*b[14]-b[2]*b[5]*b[8]*b[15]+b[1]*b[6]*b[8]*b[15]+b[2]*b[4]*b[9]*b[15]-b[0]*b[6]*b[9]*b[15]-b[1]*b[4]*b[10]
*b[15]+b[0]*b[5]*b[10]*b[15];},
XG=b=>{let c,d,e;Dg();c=Cb(16);d=AIB(b);if(d===0.0)return 0;c=c.data;b=b.data;c[0]=b[9]*b[14]*b[7]-b[13]*b[10]*b[7]+b[13]*b[6]*b[11]-b[5]*b[14]*b[11]-b[9]*b[6]*b[15]+b[5]*b[10]*b[15];c[4]=b[12]*b[10]*b[7]-b[8]*b[14]*b[7]-b[12]*b[6]*b[11]+b[4]*b[14]*b[11]+b[8]*b[6]*b[15]-b[4]*b[10]*b[15];c[8]=b[8]*b[13]*b[7]-b[12]*b[9]*b[7]+b[12]*b[5]*b[11]-b[4]*b[13]*b[11]-b[8]*b[5]*b[15]+b[4]*b[9]*b[15];c[12]=b[12]*b[9]*b[6]-b[8]*b[13]*b[6]-b[12]*b[5]*b[10]+b[4]*b[13]*b[10]+b[8]*b[5]*b[14]-b[4]*b[9]*b[14];c[1]=b[13]*b[10]*
b[3]-b[9]*b[14]*b[3]-b[13]*b[2]*b[11]+b[1]*b[14]*b[11]+b[9]*b[2]*b[15]-b[1]*b[10]*b[15];c[5]=b[8]*b[14]*b[3]-b[12]*b[10]*b[3]+b[12]*b[2]*b[11]-b[0]*b[14]*b[11]-b[8]*b[2]*b[15]+b[0]*b[10]*b[15];c[9]=b[12]*b[9]*b[3]-b[8]*b[13]*b[3]-b[12]*b[1]*b[11]+b[0]*b[13]*b[11]+b[8]*b[1]*b[15]-b[0]*b[9]*b[15];c[13]=b[8]*b[13]*b[2]-b[12]*b[9]*b[2]+b[12]*b[1]*b[10]-b[0]*b[13]*b[10]-b[8]*b[1]*b[14]+b[0]*b[9]*b[14];c[2]=b[5]*b[14]*b[3]-b[13]*b[6]*b[3]+b[13]*b[2]*b[7]-b[1]*b[14]*b[7]-b[5]*b[2]*b[15]+b[1]*b[6]*b[15];c[6]=b[12]*
b[6]*b[3]-b[4]*b[14]*b[3]-b[12]*b[2]*b[7]+b[0]*b[14]*b[7]+b[4]*b[2]*b[15]-b[0]*b[6]*b[15];c[10]=b[4]*b[13]*b[3]-b[12]*b[5]*b[3]+b[12]*b[1]*b[7]-b[0]*b[13]*b[7]-b[4]*b[1]*b[15]+b[0]*b[5]*b[15];c[14]=b[12]*b[5]*b[2]-b[4]*b[13]*b[2]-b[12]*b[1]*b[6]+b[0]*b[13]*b[6]+b[4]*b[1]*b[14]-b[0]*b[5]*b[14];c[3]=b[9]*b[6]*b[3]-b[5]*b[10]*b[3]-b[9]*b[2]*b[7]+b[1]*b[10]*b[7]+b[5]*b[2]*b[11]-b[1]*b[6]*b[11];c[7]=b[4]*b[10]*b[3]-b[8]*b[6]*b[3]+b[8]*b[2]*b[7]-b[0]*b[10]*b[7]-b[4]*b[2]*b[11]+b[0]*b[6]*b[11];c[11]=b[8]*b[5]*b[3]
-b[4]*b[9]*b[3]-b[8]*b[1]*b[7]+b[0]*b[9]*b[7]+b[4]*b[1]*b[11]-b[0]*b[5]*b[11];c[15]=b[4]*b[9]*b[2]-b[8]*b[5]*b[2]+b[8]*b[1]*b[6]-b[0]*b[9]*b[6]-b[4]*b[1]*b[10]+b[0]*b[5]*b[10];e=1.0/d;b[0]=c[0]*e;b[4]=c[4]*e;b[8]=c[8]*e;b[12]=c[12]*e;b[1]=c[1]*e;b[5]=c[5]*e;b[9]=c[9]*e;b[13]=c[13]*e;b[2]=c[2]*e;b[6]=c[6]*e;b[10]=c[10]*e;b[14]=c[14]*e;b[3]=c[3]*e;b[7]=c[7]*e;b[11]=c[11]*e;b[15]=c[15]*e;return 1;},
ZF=(b,c,d)=>{let e,f,g,h,i,j,k,l;Dg();b=b.data;c=c.data;e=d+0|0;f=c[e]*b[3];g=d+1|0;h=f+c[g]*b[7];i=d+2|0;j=1.0/(h+c[i]*b[11]+b[15]);k=(c[e]*b[0]+c[g]*b[4]+c[i]*b[8]+b[12])*j;l=(c[e]*b[1]+c[g]*b[5]+c[i]*b[9]+b[13])*j;f=(c[e]*b[2]+c[g]*b[6]+c[i]*b[10]+b[14])*j;c[e]=k;c[g]=l;c[i]=f;},
S1=()=>{let b;K7=Cb(16);b=new Dm;b.jN=0.0;b.jK=0.0;b.jL=0.0;b.jM=1.0;AB7=b;b=new Dm;b.jN=0.0;b.jK=0.0;b.jL=0.0;b.jM=1.0;AHU=b;b=new Bb;B_();GE=b;FK=new Bb;IL=new Bb;QE=new Bb;LT=D3();ADG=new Bb;AKR=new Bb;ADJ=new Bb;};
let LS=D(0);
let Jb=D();
function Or(){let a=this;Jb.call(a);a.q7=BM;a.q8=BM;}
let Oy=D(Bv);
let Pk=D(Bv);
function JD(){let a=this;C.call(a);a.kF=null;a.jV=null;a.mS=null;}
let AKL=null,Qx=null,ADd=null;
let GF=()=>{GF=Bz(JD);AA1();};
let SO=a=>{let b,c,d,e,f,g;GF();b=R(Hf,6);c=b.data;a.kF=b;b=R(Bb,8);d=b.data;e=new Bb;B_();d[0]=e;d[1]=new Bb;d[2]=new Bb;d[3]=new Bb;d[4]=new Bb;d[5]=new Bb;d[6]=new Bb;d[7]=new Bb;a.jV=b;a.mS=Cb(24);f=0;while(f<6){e=new Hf;g=new Bb;e.iH=g;e.i$=0.0;g.hd=0.0;g.hf=0.0;g.he=0.0;e.i$=0.0;c[f]=e;f=f+1|0;}},
AE5=()=>{let a=new JD();SO(a);return a;},
ADX=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;GF();c=Qx;d=c.data;Fm(c,0,a.mS,0,d.length);c=b.iA;e=a.mS;f=0;Dg();g=0;while(g<8){ZF(c,e,f);f=f+3|0;g=g+1|0;}f=0;h=0;while(f<8){i=a.jV.data[f];c=a.mS.data;j=h+1|0;i.hd=c[h];g=j+1|0;i.hf=c[j];h=g+1|0;i.he=c[g];f=f+1|0;}b=a.kF.data[0];c=a.jV.data;i=c[1];k=c[0];l=c[2];m=b.iH;n=i.hd;o=i.hf;p=i.he;m.hd=n;m.hf=o;m.he=p;q=k.hd;r=k.hf;s=k.he;t=n-q;u=o-r;p=p-s;m.hd=t;m.hf=u;m.he=p;q=k.hd-l.hd;r=k.hf-l.hf;s=k.he-l.he;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.hd=n;m.hf=s;m.he
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hd*q;s=m.hf*q;q=m.he*q;m.hd=r;m.hf=s;m.he=q;}k=b.iH;b.i$= -(i.hd*k.hd+i.hf*k.hf+i.he*k.he);b=a.kF.data[1];c=a.jV.data;i=c[4];k=c[5];l=c[7];m=b.iH;n=i.hd;o=i.hf;p=i.he;m.hd=n;m.hf=o;m.he=p;q=k.hd;r=k.hf;s=k.he;t=n-q;u=o-r;p=p-s;m.hd=t;m.hf=u;m.he=p;q=k.hd-l.hd;r=k.hf-l.hf;s=k.he-l.he;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.hd=n;m.hf=s;m.he=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hd*q;s=m.hf*q;q=m.he*q;m.hd=r;m.hf=s;m.he=q;}k=b.iH;b.i$= -(i.hd*k.hd+i.hf
*k.hf+i.he*k.he);b=a.kF.data[2];c=a.jV.data;i=c[0];k=c[4];l=c[3];m=b.iH;n=i.hd;o=i.hf;t=i.he;m.hd=n;m.hf=o;m.he=t;r=k.hd;q=k.hf;s=k.he;r=n-r;u=o-q;p=t-s;m.hd=r;m.hf=u;m.he=p;q=k.hd-l.hd;s=k.hf-l.hf;n=k.he-l.he;o=u*n-p*s;n=p*q-r*n;s=r*s-u*q;m.hd=o;m.hf=n;m.he=s;r=o*o+n*n+s*s;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hd*q;s=m.hf*q;q=m.he*q;m.hd=r;m.hf=s;m.he=q;}k=b.iH;b.i$= -(i.hd*k.hd+i.hf*k.hf+i.he*k.he);b=a.kF.data[3];c=a.jV.data;k=c[5];i=c[1];l=c[6];m=b.iH;n=k.hd;t=k.hf;u=k.he;m.hd=n;m.hf=t;m.he=u;q=i.hd;r=i.hf;s
=i.he;o=n-q;t=t-r;u=u-s;m.hd=o;m.hf=t;m.he=u;p=i.hd-l.hd;q=i.hf-l.hf;r=i.he-l.he;s=t*r-u*q;r=u*p-o*r;n=o*q-t*p;m.hd=s;m.hf=r;m.he=n;r=s*s+r*r+n*n;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hd*q;s=m.hf*q;q=m.he*q;m.hd=r;m.hf=s;m.he=q;}i=b.iH;b.i$= -(k.hd*i.hd+k.hf*i.hf+k.he*i.he);b=a.kF.data[4];c=a.jV.data;i=c[2];k=c[3];l=c[6];m=b.iH;n=i.hd;o=i.hf;p=i.he;m.hd=n;m.hf=o;m.he=p;q=k.hd;r=k.hf;s=k.he;t=n-q;u=o-r;p=p-s;m.hd=t;m.hf=u;m.he=p;q=k.hd-l.hd;r=k.hf-l.hf;s=k.he-l.he;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.hd=n;m.hf=s;m.he
=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hd*q;s=m.hf*q;q=m.he*q;m.hd=r;m.hf=s;m.he=q;}k=b.iH;b.i$= -(i.hd*k.hd+i.hf*k.hf+i.he*k.he);b=a.kF.data[5];c=a.jV.data;i=c[4];k=c[0];l=c[1];m=b.iH;n=i.hd;o=i.hf;p=i.he;m.hd=n;m.hf=o;m.he=p;q=k.hd;r=k.hf;s=k.he;t=n-q;u=o-r;p=p-s;m.hd=t;m.hf=u;m.he=p;q=k.hd-l.hd;r=k.hf-l.hf;s=k.he-l.he;n=u*s-p*r;s=p*q-t*s;o=t*r-u*q;m.hd=n;m.hf=s;m.he=o;r=n*n+s*s+o*o;if(r!==0.0&&r!==1.0){q=1.0/Dl(r);r=m.hd*q;s=m.hf*q;q=m.he*q;m.hd=r;m.hf=s;m.he=q;}k=b.iH;b.i$= -(i.hd*k.hd+i.hf
*k.hf+i.he*k.he);},
AA1=()=>{let b,c,d,e,f,g,h,i,j;b=R(Bb,8);c=b.data;d=new Bb;B_();d.hd=(-1.0);d.hf=(-1.0);d.he=(-1.0);c[0]=d;d=new Bb;d.hd=1.0;d.hf=(-1.0);d.he=(-1.0);c[1]=d;d=new Bb;d.hd=1.0;d.hf=1.0;d.he=(-1.0);c[2]=d;d=new Bb;d.hd=(-1.0);d.hf=1.0;d.he=(-1.0);c[3]=d;d=new Bb;d.hd=(-1.0);d.hf=(-1.0);d.he=1.0;c[4]=d;d=new Bb;d.hd=1.0;d.hf=(-1.0);d.he=1.0;c[5]=d;d=new Bb;d.hd=1.0;d.hf=1.0;d.he=1.0;c[6]=d;d=new Bb;d.hd=(-1.0);d.hf=1.0;d.he=1.0;c[7]=d;AKL=b;b=Cb(24);e=b.data;Qx=b;f=0;g=c.length;h=0;while(h<g){d=c[h];i=f+1|0;e[f]
=d.hd;j=i+1|0;e[i]=d.hf;f=j+1|0;e[j]=d.he;h=h+1|0;}ADd=new Bb;};
function Dm(){let a=this;C.call(a);a.jN=0.0;a.jK=0.0;a.jL=0.0;a.jM=0.0;}
let Nb=null,Na=null;
let ALz=()=>{let b;b=new Dm;b.jN=0.0;b.jK=0.0;b.jL=0.0;b.jM=0.0;Nb=b;b=new Dm;b.jN=0.0;b.jK=0.0;b.jL=0.0;b.jM=0.0;Na=b;};
let R2=D();
let ADC=D();
function Bb(){let a=this;C.call(a);a.hd=0.0;a.hf=0.0;a.he=0.0;}
let Vf=null,Vg=null,Ve=null,ACF=null,AJj=null;
let B_=()=>{B_=Bz(Bb);TF();};
let L_=(a,b)=>{let c,d,e,f,g,h,i;c=a.hf;d=b.he;e=c*d;f=a.he;g=b.hf;h=e-f*g;e=b.hd;f=f*e;i=a.hd;d=f-i*d;c=i*g-c*e;a.hd=h;a.hf=d;a.he=c;return a;},
TF=()=>{let b;b=new Bb;B_();b.hd=1.0;b.hf=0.0;b.he=0.0;Vf=b;b=new Bb;b.hd=0.0;b.hf=1.0;b.he=0.0;Vg=b;b=new Bb;b.hd=0.0;b.hf=0.0;b.he=1.0;Ve=b;b=new Bb;b.hd=0.0;b.hf=0.0;b.he=0.0;ACF=b;AJj=D3();};
let YC=D();
let WU=D(Cv);
let IU=D(Eu);
let AD8=D();
let Up=D();
let AHt=D();
function Hf(){let a=this;C.call(a);a.iH=null;a.i$=0.0;}
let Ox=D(Bv);
let AHw=D();
let Ux=D();
let AE7=D();
let AHs=D();
let AC1=D(0);
let YO=D();
let AFM=D();
let H0=null;
let Wx=()=>{let b,c;H0=Cb(16384);b=0;while(b<16384){H0.data[b]=Qe((b+0.5)/16384.0*6.2831854820251465);b=b+1|0;}c=H0.data;c[0]=0.0;c[4096]=1.0;c[8192]=0.0;c[12288]=(-1.0);};
function HK(){let a=this;C.call(a);a.rR=null;a.rc=null;}
let Tx=null,AJo=null;
let I$=()=>{I$=Bz(HK);Wa();};
let Wa=()=>{let b,c,d,e,f,g,h,$$je;Gy();b=Fl;c=Du(b,Bk(C4));b=c<0?null:b.jG.data[c];if(b===null){b=new H8;d=new Cy;d.iK=0;d.hX=R(C,4);b.mq=d;b.mz=100;a:{try{d=Ot(Bk(C4),null);break a;}catch($$e){$$je=BP($$e);if($$je instanceof CE){}else{throw $$e;}}try{d=Mo(Bk(C4),null);Pr(d,1);break a;}catch($$e){$$je=BP($$e);if($$je instanceof D_){}else{throw $$e;}}d=null;}b.oK=d;if(d===null){b=new BA;d=new K;d.g$=G(16);F(d,d.g8,A(30));if(Bk(C4).ii===null)Bk(C4).ii=V(Bk(C4).hH.$meta.name);e=Bk(C4).ii;F(d,d.g8,e);e=new H;f
=d.g$;g=f.data;c=d.g8;h=g.length;if(c>=0&&c<=(h-0|0)){e.g9=L(f.data,0,c);b.g_=1;b.ha=1;b.hc=e;E(b);}e=new I;e.g_=1;e.ha=1;E(e);}DE(Fl,Bk(C4),b);}Tx=b;e=new GV;e.no=1;e.jC=S(4);AJo=e;};
let JY=D();
let ADy=D(JY);
let MW=D();
let AES=D();
let Lj=null;
let AMd=()=>{Lj=new Bw;};
function Bw(){let a=this;C.call(a);a.iy=0.0;a.ix=0.0;a.iw=0.0;a.iv=0.0;}
let MA=null,Y9=null,ADo=null,AKt=null,ZE=null,ADR=0.0,Ta=null,AI_=null,Sd=null,AHP=null,AIG=null,AEj=null,AHc=null,Yq=null,XR=null,AFv=null,AJn=null,AHH=null,AKK=null,S0=null,ZC=null,AKF=null,ACf=null,AJA=null,AIr=null,AG6=null,ACc=null,Sv=null,ABY=null,X9=null,Zb=null,XC=null,ABT=null,AEV=null,AFN=null;
let Da=a=>{let b,c;b=a.iy;if(b<0.0)a.iy=0.0;else if(b>1.0)a.iy=1.0;c=a.ix;if(c<0.0)a.ix=0.0;else if(c>1.0)a.ix=1.0;c=a.iw;if(c<0.0)a.iw=0.0;else if(c>1.0)a.iw=1.0;c=a.iv;if(c<0.0)a.iv=0.0;else if(c>1.0)a.iv=1.0;return a;},
AIk=a=>{return Ig(((255.0*a.iv|0)<<24|(255.0*a.iw|0)<<16|(255.0*a.ix|0)<<8|255.0*a.iy|0)&(-16777217));},
BV=(b,c)=>{b.iy=((c&(-16777216))>>>24|0)/255.0;b.ix=((c&16711680)>>>16|0)/255.0;b.iw=((c&65280)>>>8|0)/255.0;b.iv=(c&255)/255.0;},
RQ=()=>{let b;b=new Bw;b.iy=1.0;b.ix=1.0;b.iw=1.0;b.iv=1.0;Da(b);MA=b;b=new Bw;BV(b,(-1077952513));Y9=b;b=new Bw;BV(b,2139062271);ADo=b;b=new Bw;BV(b,1061109759);AKt=b;b=new Bw;b.iy=0.0;b.ix=0.0;b.iw=0.0;b.iv=1.0;Da(b);ZE=b;ADR=AIk(MA);b=new Bw;b.iy=0.0;b.ix=0.0;b.iw=0.0;b.iv=0.0;Da(b);Ta=b;b=new Bw;b.iy=0.0;b.ix=0.0;b.iw=1.0;b.iv=1.0;Da(b);AI_=b;b=new Bw;b.iy=0.0;b.ix=0.0;b.iw=0.5;b.iv=1.0;Da(b);Sd=b;b=new Bw;BV(b,1097458175);AHP=b;b=new Bw;BV(b,1887473919);AIG=b;b=new Bw;BV(b,(-2016482305));AEj=b;b=new Bw;b.iy
=0.0;b.ix=1.0;b.iw=1.0;b.iv=1.0;Da(b);AHc=b;b=new Bw;b.iy=0.0;b.ix=0.5;b.iw=0.5;b.iv=1.0;Da(b);Yq=b;b=new Bw;BV(b,16711935);XR=b;b=new Bw;BV(b,2147418367);AFv=b;b=new Bw;BV(b,852308735);AJn=b;b=new Bw;BV(b,579543807);AHH=b;b=new Bw;BV(b,1804477439);AKK=b;b=new Bw;BV(b,(-65281));S0=b;b=new Bw;BV(b,(-2686721));ZC=b;b=new Bw;BV(b,(-626712321));AKF=b;b=new Bw;BV(b,(-5963521));ACf=b;b=new Bw;BV(b,(-1958407169));AJA=b;b=new Bw;BV(b,(-759919361));AIr=b;b=new Bw;BV(b,(-1306385665));AG6=b;b=new Bw;BV(b,(-16776961));ACc
=b;b=new Bw;BV(b,(-13361921));Sv=b;b=new Bw;BV(b,(-8433409));ABY=b;b=new Bw;BV(b,(-92245249));X9=b;b=new Bw;BV(b,(-9849601));Zb=b;b=new Bw;b.iy=1.0;b.ix=0.0;b.iw=1.0;b.iv=1.0;Da(b);XC=b;b=new Bw;BV(b,(-1608453889));ABT=b;b=new Bw;BV(b,(-293409025));AEV=b;b=new Bw;BV(b,(-1339006721));AFN=b;};
let Ki=D();
let AGz=D(Ki);
let AKA=null;
let AFx=()=>{let b,c,d,e;b=new GG;c=Hj(16);b.kl=0;d=R(Ep,c);e=d.data;b.jJ=d;b.mY=0.75;b.k0=e.length*0.75|0;AKA=b;};
function Cy(){let a=this;C.call(a);a.hX=null;a.h4=0;a.iK=0;a.na=null;}
let Di=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;c=a.hX;d=c.data;e=a.h4;if(e!=d.length)f=c;else{g=e*1.75|0;if(8>g)g=8;h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new Ca;i.hH=h;f=i;h.classObject=f;}}f=DS(i);if(f===null){b=new CU;b.g_=1;b.ha=1;E(b);}if(f===Bk(CQ)){b=new Bs;b.g_=1;b.ha=1;E(b);}if(g<0){b=new DK;b.g_=1;b.ha=1;E(b);}f=D4(f.hH,g);j=f.data;k=a.h4;l=j.length;if(k<l)l=k;GP(c,0,f,0,l);a.hX=f;}f=f.data;g=a.h4;a.h4=g+1|0;f[g]=b;},
Xe=a=>{let b,c,d,e,f,g;b=a.hX;c=0;d=a.h4;e=null;if(c>d){e=new Bs;e.g_=1;e.ha=1;E(e);}while(c<d){f=b.data;g=c+1|0;f[c]=e;c=g;}a.h4=0;},
Nr=a=>{let b;if(KR){b=new Fx;b.i4=1;b.li=a;b.mx=1;return b;}if(a.na===null){b=new Ln;b.nK=a;b.oo=1;a.na=b;}return Zq(a.na);};
function Hs(){let a=this;C.call(a);a.n8=0;a.km=null;a.jG=null;a.pA=0.0;a.oB=0;a.mQ=0;a.mN=0;}
let Mx=null;
let ACv=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.pA=c;d=G8(b,c);a.oB=d*c|0;b=d-1|0;a.mN=b;a.mQ=DV(O(b));a.km=R(C,d);a.jG=R(C,d);return;}e=new Bs;f=new K;f.g$=G(16);F(f,f.g8,A(40));GS(f,f.g8,c);g=new H;h=f.g$;i=h.data;d=f.g8;j=i.length;if(d>=0&&d<=(j-0|0)){g.g9=L(h.data,0,d);e.g_=1;e.ha=1;e.hc=g;E(e);}f=new I;f.g_=1;f.ha=1;E(f);},
DI=(a,b)=>{let c=new Hs();ACv(c,a,b);return c;},
Du=(a,b)=>{let c,d,e;if(b===null){c=new Bs;c.g_=1;c.ha=1;c.hc=A(41);E(c);}d=a.km;e=Bd(X(U(O(b.W()),B(2135587861, 2654435769)),a.mQ));while(true){c=d.data[e];if(c===null)return  -(e+1|0)|0;if(c.X(b))break;e=(e+1|0)&a.mN;}return e;},
DE=(a,b,c)=>{let d,e,f;d=Du(a,b);if(d>=0){e=a.jG.data;f=e[d];e[d]=c;return f;}d= -(d+1|0)|0;e=a.km.data;e[d]=b;a.jG.data[d]=c;d=a.n8+1|0;a.n8=d;if(d>=a.oB)Vw(a,e.length<<1);return null;},
Vw=(a,b)=>{let c,d,e,f,g,h,i,j;a:{c=a.km.data.length;a.oB=b*a.pA|0;d=b-1|0;a.mN=d;a.mQ=DV(O(d));e=a.km;f=a.jG;a.km=R(C,b);a.jG=R(C,b);if(a.n8>0){d=0;while(true){if(d>=c)break a;g=e.data[d];if(g!==null){h=f.data[d];i=a.km;b=Bd(X(U(O(g.W()),B(2135587861, 2654435769)),a.mQ));while(true){j=i.data;if(j[b]===null)break;b=(b+1|0)&a.mN;}j[b]=g;a.jG.data[b]=h;}d=d+1|0;}}}},
ALi=()=>{Mx=new C;};
let Ze=D(Hs);
let AJT=D();
function Et(){let a=this;C.call(a);a.jj=0;a.jq=0;a.ki=0;a.j1=0;a.kr=0;a.j_=null;a.mM=0;a.mE=0;}
let AJ8=D();
let AAw=D();
let ADz=D();
let ABP=D();
let Np=D();
let Sc=null;
let Om=()=>{Om=Bz(Np);AAC();};
let AAC=()=>{let b,c,d;b=new HP;Kl();c=new Bb;B_();b.pX=c;d=new Bb;b.p8=d;b.pF=new Bb;b.p9=new Bb;c.hd=0.0;c.hf=0.0;c.he=0.0;d.hd=0.0;d.hf=0.0;d.he=0.0;AEc(b,c,d);Sc=b;};
let SZ=D();
let ACz=D();
let ABs=D();
let AB$=D();
let AG7=D();
let YJ=D();
let AIu=D();
let AAa=D();
let UD=D();
let VI=D();
let He=D(BR);
let AKu=null,AIx=null,Yc=null;
let Za=()=>{let b,c;b=new He;b.hx=A(42);b.hm=0;AKu=b;c=new He;c.hx=A(43);c.hm=1;AIx=c;Yc=P(He,[b,c]);};
let ACC=D();
let O3=D(0);
let CG=D();
let S$=D(CG);
let S9=D(CG);
let AAY=D(CG);
let WN=D(CG);
let AFe=D(CG);
let IQ=D(CG);
let WC=D(IQ);
let FO=D(0);
let XB=D();
let D5=D(0);
let AE6=D();
let AIq=D();
let Vh=D();
let DC=D();
let AEe=D(DC);
let FL=D(DC);
let CR=D(FL);
let XQ=null;
let MV=()=>{MV=Bz(CR);TD();};
let TD=()=>{let b;b=new Bb;B_();XQ=b;};
let AER=D();
let AG5=D(CR);
let AAn=D(CR);
let AI9=D(DC);
let Ng=null;
let ALp=()=>{Ng=Cb(3);};
let Ik=D(DC);
let ST=D(Ik);
let Wy=D(CR);
let Fj=D(FL);
let ABJ=D(Fj);
let AAk=D(CR);
let ACa=D(CR);
let ABH=D(Fj);
let FJ=D(BR);
let ABx=null,AD_=null,XS=null,Vy=null;
let ADv=()=>{let b,c,d;b=new FJ;b.hx=A(44);b.hm=0;ABx=b;c=new FJ;c.hx=A(45);c.hm=1;AD_=c;d=new FJ;d.hx=A(46);d.hm=2;XS=d;Vy=P(FJ,[b,c,d]);};
let Ev=D();
let Jw=D(Ev);
let RH=D(Jw);
let FX=D(BR);
let AIw=null,AI2=null,Rq=null,AJe=null;
let ZQ=()=>{let b,c,d;b=new FX;b.hx=A(47);b.hm=0;AIw=b;c=new FX;c.hx=A(48);c.hm=1;AI2=c;d=new FX;d.hx=A(49);d.hm=2;Rq=d;AJe=P(FX,[b,c,d]);};
let Cf=D(Ev);
let F9=D(Cf);
let U8=D();
let E5=D(Cf);
let AHB=null,AHA=null,AHC=null,AIC=null;
let PI=()=>{PI=Bz(E5);ABe();};
let ABe=()=>{let b;b=new Bb;B_();AHB=b;AHA=new Bb;AHC=new Bb;b=new Dm;b.jN=0.0;b.jK=0.0;b.jL=0.0;b.jM=1.0;AIC=b;};
let Ds=D(E5);
let Ex=D(Ds);
let Xx=D(Ex);
let FV=D(Cf);
let AKG=D(FV);
let AG2=D(Cf);
let Ef=D(Cf);
let S3=D(Ef);
let Fv=D(Cf);
let Xp=D(Ds);
let Zm=D(Ds);
let HZ=D(Cf);
let AEf=D(HZ);
let Ue=D(Ef);
let AAu=D(Ex);
let AD9=D(Cf);
let ACl=D(Ef);
let AEk=D(Cf);
let AFI=D(E5);
let Zt=D(Cv);
let UM=D(Cv);
let U1=D(Ds);
let AEJ=D(Fv);
let AI$=D(F9);
let AC$=D(F9);
let AFu=D(Fv);
let ABg=D(Ex);
let AJK=D(FV);
let DA=D(Ev);
let ABO=D(DA);
let El=D();
let AE1=D(El);
let AF1=D(DA);
let AG1=D(DA);
let AHW=D(El);
let W_=D(DA);
let AG8=D(El);
let HG=D(0);
let Kr=D(0);
function Ca(){let a=this;C.call(a);a.ii=null;a.hH=null;a.k2=null;}
let PO=0;
let ALV=b=>{let c,d;if(b===null)return null;c=b.classObject;if(c===null){c=new Ca;c.hH=b;d=c;b.classObject=d;}return c;},
DS=a=>{let b,c,d;b=a.hH.$meta.item;if(b===null)c=null;else{c=b.classObject;if(c===null){c=new Ca;c.hH=b;d=c;b.classObject=d;}}return c;},
AAR=()=>{C5.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CQ,callable:null},{name:"<clinit>",modifiers:512,accessLevel:0,parameterTypes:[],returnType:CQ,callable:null}];C4.$meta.methods=[{name:"<init>",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CQ,callable:null},{name:"appendRun",modifiers:0,accessLevel:0,parameterTypes:[C4],returnType:CQ,callable:null},{name:"reset",modifiers:0,accessLevel:3,parameterTypes:[],returnType:CQ,callable:null},{name:"toString",modifiers
:0,accessLevel:3,parameterTypes:[],returnType:H,callable:null}];},
Kf=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;if(!(a.hH.$meta.primitive?1:0)&&!(a.hH.$meta.item===null?0:1)){if(a.k2===null){if(!PO){PO=1;AAR();}b=a.hH.$meta.methods;a.k2=R(FN,b.length);c=0;d=0;while(d<b.length){e=b[d];f=e===null?null:!(e instanceof E0())?e:e[Be]===true?e:e.hA;g=V(f.name);if(g===A(50))h=1;else if(!(A(50) instanceof H))h=0;else{e=A(50);h=g.g9!==e.g9?0:1;}if(h){g=f.parameterTypes;i=R(Ca,g.length);j=i.data;h=0;k=j.length;while(h<k){l=g[h];if(l===null)e=null;else{e=l.classObject;if(e===null){e=new Ca;e.hH
=l;m=e;l.classObject=m;}}j[h]=e;h=h+1|0;}j=a.k2.data;h=c+1|0;e=new FN;g=V(f.name);k=f.modifiers;n=f.accessLevel;f=CC(f.callable,"call");e.rO=a;e.rM=g;e.n_=k;e.nI=n;e.n3=i;e.sm=f;j[c]=e;c=h;}d=d+1|0;}i=a.k2;b=i.constructor;if(b===null)e=null;else{e=b.classObject;if(e===null){e=new Ca;e.hH=b;f=e;b.classObject=f;}}e=DS(e);if(e===null){e=new CU;e.g_=1;e.ha=1;E(e);}if(e===Bk(CQ)){e=new Bs;e.g_=1;e.ha=1;E(e);}if(c<0){e=new DK;e.g_=1;e.ha=1;E(e);}i=i.data;f=D4(e.hH,c);d=i.length;if(c<d)d=c;c=0;while(c<d){f.data[c]
=i[c];c=c+1|0;}a.k2=f;}return a.k2.p();}return R(FN,0);},
AJk=a=>{let b,c,d,e,f,g,h,i,j,k;b=(Kf(a)).data;c=b.length;d=R(FN,c);e=d.data;f=0;g=0;while(g<c){h=b[g];if(!(Mm(h.n_,h.nI)&1)?0:1){i=f+1|0;e[f]=h;f=i;}g=g+1|0;}c=e.length;i=B4(f,c);if(i<0){j=d.constructor;if(j===null)h=null;else{h=j.classObject;if(h===null){h=new Ca;h.hH=j;k=h;j.classObject=k;}}j=DS(h);if(j===null){h=new CU;h.g_=1;h.ha=1;E(h);}if(j===Bk(CQ)){h=new Bs;h.g_=1;h.ha=1;E(h);}if(f<0){h=new DK;h.g_=1;h.ha=1;E(h);}k=D4(j.hH,f);if(i<0)c=f;f=0;while(f<c){k.data[f]=e[f];f=f+1|0;}d=k;}return d;},
AGJ=(a,b)=>{let c,d,e,f;c=(Kf(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new FC;f.g_=1;f.ha=1;E(f);}f=c[e];if(PV(f.n3.p(),b))break;e=e+1|0;}return f;},
AGH=(a,b)=>{let c,d,e,f,g;c=(Kf(a)).data;d=c.length;e=0;while(true){if(e>=d){f=new FC;f.g_=1;f.ha=1;E(f);}f=c[e];g=!(Mm(f.n_,f.nI)&1)?0:1;if(g&&PV(f.n3.p(),b))break;e=e+1|0;}return f;};
let VO=D();
let BL=(b,c)=>{let name='jso$functor$'+c;let result=b[name];if(typeof result!=='function'){let fn=function(){return b[c].apply(b,arguments);};result=()=>fn;b[name]=result;}return result();},
CC=(b,c)=>{if(typeof b!=='function')return b;let result={};result[c]=b;return result;};
let UR=D();
let R8=b=>{let copy=new b.constructor();for(let field in b){if(b.hasOwnProperty(field)){copy[field]=b[field];}}return copy;},
OE=(b,c)=>{let d,e;if(b===c)return 1;d=b.$meta.supertypes;e=0;while(e<d.length){if(OE(d[e],c))return 1;e=e+1|0;}return 0;},
Dz=b=>{setTimeout(()=>{AL1(Ld)(b);},0);},
Ld=b=>{b.bg();},
JJ=(b,c)=>{setTimeout(()=>{Ld(b);},c);},
AAD=()=>{return [];};
function CT(){let a=this;C.call(a);a.hc=null;a.kv=null;a.g_=0;a.ha=0;a.rB=null;}
let Y=a=>{a.g_=1;a.ha=1;},
AL7=()=>{let a=new CT();Y(a);return a;},
Bl=a=>{return a;},
AF$=a=>{return a.hc;},
ALt=a=>{return a.bh();},
AL3=a=>{let b;b=a.kv;if(b===a)b=null;return b;},
ALx=a=>{let b,c;if(Ct===null){b=new Eo;c=new B5;c.h$=BF(32);b.ik=c;c=new K;BB(c);c.g$=G(16);b.ia=c;b.h_=G(32);b.ie=0;b.ig=BX;Ct=b;}Hq(a,Ct);},
Hq=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.constructor;if(c===null)d=null;else{d=c.classObject;if(d===null){d=new Ca;d.hH=c;e=d;c.classObject=e;}}if(d.ii===null)d.ii=V(d.hH.$meta.name);CI(Br(d.ii));d=a.bh();if(d!==null){c=new K;c.g$=G(16);F(c,c.g8,A(51));F(c,c.g8,d);e=new H;f=c.g$;g=f.data;h=c.g8;i=g.length;if(h>=0&&h<=(i-0|0)){e.g9=L(f.data,0,h);CI(Br(e));}else{b=new I;b.g_=1;b.ha=1;E(b);}}a:{CI("\n");f=a.rB;if(f!==null){f=f.data;j=f.length;h=0;while(true){if(h>=j)break a;e=f[h];CI("\tat ");c=A(2);if(e!==null)c=e.bj();CI(Br(c));CI("\n");h
=h+1|0;}}}c=a.kv;if(c!==null&&c!==a){CI("Caused by: ");Hq(a.kv,b);}};
let CE=D(CT);
let E4=a=>{a.g_=1;a.ha=1;},
AKZ=()=>{let a=new CE();E4(a);return a;};
let BA=D(CE);
let HH=a=>{a.g_=1;a.ha=1;},
ALk=()=>{let a=new BA();HH(a);return a;},
AIY=(a,b)=>{a.g_=1;a.ha=1;a.hc=b;},
ALb=a=>{let b=new BA();AIY(b,a);return b;};
let AAg=D(BA);
let J5=D(0);
function H(){C.call(this);this.h6=0;}
let QL=null,I3=null,KB=null;
let SV=(a,b)=>{a.g9=L(b.data,0,b.data.length);},
AK1=a=>{let b=new H();SV(b,a);return b;},
YA=(a,b)=>{a.g9=b;},
OY=a=>{let b=new H();YA(b,a);return b;},
Jp=(a,b,c)=>{let d,e,f;if((c+b.g9.length|0)>a.g9.length)return 0;d=0;a:{b:{while(d<b.g9.length){if(d<0)break a;if(d>=b.g9.length)break a;e=b.g9.charCodeAt(d);f=c+1|0;if(c<0)break b;if(c>=a.g9.length)break b;if(e!=a.g9.charCodeAt(c))return 0;d=d+1|0;c=f;}return 1;}b=new Q;b.g_=1;b.ha=1;E(b);}b=new Q;b.g_=1;b.ha=1;E(b);},
FY=(a,b,c)=>{let d,e,f;if(0>c)c=0;if(b<65536){d=b&65535;while(true){if(c>=a.g9.length)return (-1);if(a.g9.charCodeAt(c)==d)break;c=c+1|0;}return c;}e=(55296|(b-65536|0)>>10&1023)&65535;f=(56320|b&1023)&65535;while(true){if(c>=(a.g9.length-1|0))return (-1);if(a.g9.charCodeAt(c)==e&&a.g9.charCodeAt((c+1|0))==f)break;c=c+1|0;}return c;},
Fo=(a,b,c)=>{let d,e,f,g;d=a.g9.length-1|0;if(c<d)d=c;if(b<65536){e=b&65535;while(true){if(d<0)return (-1);if(a.g9.charCodeAt(d)==e)break;d=d+(-1)|0;}return d;}f=(55296|(b-65536|0)>>10&1023)&65535;g=(56320|b&1023)&65535;while(true){if(d<1)return (-1);if(a.g9.charCodeAt(d)==g){b=d-1|0;if(a.g9.charCodeAt(b)==f)break;}d=d+(-1)|0;}return b;},
Mi=(a,b,c)=>{let d,e,f,g;if(0>c)c=0;d=a.g9.length-b.g9.length|0;a:{b:{c:while(true){if(c>d)return (-1);e=0;while(true){if(e>=b.g9.length)break c;f=c+e|0;if(f<0)break a;if(f>=a.g9.length)break a;g=a.g9.charCodeAt(f);if(e<0)break b;if(e>=b.g9.length)break b;if(g!=b.g9.charCodeAt(e))break;e=e+1|0;}c=c+1|0;}return c;}b=new Q;b.g_=1;b.ha=1;E(b);}b=new Q;b.g_=1;b.ha=1;E(b);},
WY=(a,b,c)=>{let d,e,f;d=a.g9.length-b.g9.length|0;if(c<d)d=c;a:{b:{c:while(true){if(d<0)return (-1);e=0;while(true){if(e>=b.g9.length)break c;f=d+e|0;if(f<0)break a;if(f>=a.g9.length)break a;f=a.g9.charCodeAt(f);if(e<0)break b;if(e>=b.g9.length)break b;if(f!=b.g9.charCodeAt(e))break;e=e+1|0;}d=d+(-1)|0;}return d;}b=new Q;b.g_=1;b.ha=1;E(b);}b=new Q;b.g_=1;b.ha=1;E(b);},
Cc=(a,b,c)=>{let d,e,f;d=a.g9.length;e=B4(b,c);if(!e)return I3;if(!b&&c==d)return a;if(b>=0&&e<=0&&c<=d)return OY(a.g9.substring(b,c));f=new Q;f.g_=1;f.ha=1;E(f);},
Cm=(a,b)=>{let c,d,e,f;c=a.g9.length-b.g9.length|0;d=0;a:{b:{while(d<=c){e=0;while(true){if(e>=b.g9.length)return 1;f=d+e|0;if(f<0)break a;if(f>=a.g9.length)break a;f=a.g9.charCodeAt(f);if(e<0)break b;if(e>=b.g9.length)break b;if(f!=b.g9.charCodeAt(e))break;e=e+1|0;}d=d+1|0;}return 0;}b=new Q;b.g_=1;b.ha=1;E(b);}b=new Q;b.g_=1;b.ha=1;E(b);},
Px=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new K;d.g$=G(16);e=a.g9.length-b.g9.length|0;f=0;a:{b:{c:while(true){if(f>e){b=Cc(a,f,a.g9.length);g=d.g8;if(b===null)b=A(2);F(d,g,b);b=new H;h=d.g$;i=h.data;j=d.g8;e=i.length;if(j>=0&&j<=(e-0|0)){b.g9=L(h.data,0,j);return b;}b=new I;b.g_=1;b.ha=1;E(b);}k=0;d:{while(k<b.g9.length){j=f+k|0;if(j<0)break b;if(j>=a.g9.length)break b;j=a.g9.charCodeAt(j);if(k<0)break c;if(k>=b.g9.length)break c;if(j!=b.g9.charCodeAt(k)){if(f<0)break a;if(f>=a.g9.length)break a;k=a.g9.charCodeAt(f);j
=d.g8;Bn(d,j,j+1|0);d.g$.data[j]=k;break d;}k=k+1|0;}F(d,d.g8,c===null?A(2):c);f=f+(b.g9.length-1|0)|0;}f=f+1|0;}b=new Q;b.g_=1;b.ha=1;E(b);}b=new Q;b.g_=1;b.ha=1;E(b);}b=new Q;b.g_=1;b.ha=1;E(b);},
AAV=a=>{let b,c,d;b=0;c=a.g9.length-1|0;a:{while(true){if(b>c)break a;if(b<0)break;if(b>=a.g9.length)break;if(a.g9.charCodeAt(b)>32)break a;b=b+1|0;}d=new Q;d.g_=1;d.ha=1;E(d);}b:{while(b<=c){if(c<0)break b;if(c>=a.g9.length)break b;if(a.g9.charCodeAt(c)>32)break;c=c+(-1)|0;}return Cc(a,b,c+1|0);}d=new Q;d.g_=1;d.ha=1;E(d);},
Cn=a=>{return a;},
AID=(a,b)=>{let c;if(a===b)return 1;if(!(b instanceof H))return 0;c=b;return a.g9!==c.g9?0:1;},
ADP=a=>{let b;a:{if(!a.h6){b=0;while(true){if(b>=a.g9.length)break a;a.h6=(31*a.h6|0)+a.g9.charCodeAt(b)|0;b=b+1|0;}}}return a.h6;},
AL_=()=>{let b;QL=G(0);b=new H;b.g9="";I3=b;KB=new Ka;};
let Dr=D();
function Ed(){Dr.call(this);this.js=0;}
let KF=null,De=null;
let HU=(b,c)=>{if(b!==null)return QK(b,0,b.g9.length,c);b=new B0;b.g_=1;b.ha=1;b.hc=A(52);E(b);},
QK=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o;if(c==d){b=new B0;b.g_=1;b.ha=1;b.hc=A(53);E(b);}if(e>=2&&e<=36){f=0;if(c>=0&&c<b.g9.length){a:{switch(b.g9.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=0;i=1+(2147483647/e|0)|0;if(g==d){b=new B0;b.g_=1;b.ha=1;E(b);}b:{while(g<d){j=g+1|0;if(g<0)break b;if(g>=b.g9.length)break b;g=AGt(b.g9.charCodeAt(g));if(g<0){k=new B0;l=Cc(b,c,d);b=new K;b.g$=G(16);F(b,b.g8,A(54));c=b.g8;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.g$;o=n.data;d=b.g8;e
=o.length;if(d>=0&&d<=(e-0|0)){m.g9=L(n.data,0,d);k.g_=1;k.ha=1;k.hc=m;E(k);}b=new I;b.g_=1;b.ha=1;E(b);}if(g>=e){k=new B0;l=Cc(b,c,d);b=new K;b.g$=G(16);F(b,b.g8,A(55));J(b,b.g8,e,10);F(b,b.g8,A(51));c=b.g8;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.g$;o=n.data;d=b.g8;e=o.length;if(d>=0&&d<=(e-0|0)){m.g9=L(n.data,0,d);k.g_=1;k.ha=1;k.hc=m;E(k);}b=new I;b.g_=1;b.ha=1;E(b);}if(h>i){b=new B0;b.g_=1;b.ha=1;b.hc=A(56);E(b);}h=CB(e,h)+g|0;if(h<0){if(j==d&&h==(-2147483648)&&f)return (-2147483648);k=new B0;l=Cc(b,c,d);b
=new K;b.g$=G(16);F(b,b.g8,A(57));c=b.g8;if(l===null)l=A(2);F(b,c,l);m=new H;n=b.g$;o=n.data;d=b.g8;e=o.length;if(d>=0&&d<=(e-0|0)){m.g9=L(n.data,0,d);k.g_=1;k.ha=1;k.hc=m;E(k);}b=new I;b.g_=1;b.ha=1;E(b);}g=j;}if(f)h= -h|0;return h;}b=new Q;b.g_=1;b.ha=1;E(b);}b=new Q;b.g_=1;b.ha=1;E(b);}b=new B0;k=new K;k.g$=G(16);F(k,k.g8,A(58));J(k,k.g8,e,10);m=new H;n=k.g$;o=n.data;d=k.g8;e=o.length;if(d>=0&&d<=(e-0|0)){m.g9=L(n.data,0,d);b.g_=1;b.ha=1;b.hc=m;E(b);}b=new I;b.g_=1;b.ha=1;E(b);},
Ia=b=>{if(b!==null)return QK(b,0,b.g9.length,10);b=new B0;b.g_=1;b.ha=1;b.hc=A(52);E(b);},
DP=()=>{let b,c,d,e,f;a:{if(De===null){b=R(Ed,256);c=b.data;De=b;d=0;e=c.length;while(true){if(d>=e)break a;f=new Ed;f.js=d-128|0;c[d]=f;d=d+1|0;}}}},
AGt=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
La=b=>{let c,d;if(!b)return 32;c=0;d=b>>>16|0;if(d)c=16;else d=b;b=d>>>8|0;if(!b)b=d;else c=c|8;d=b>>>4|0;if(!d)d=b;else c=c|4;b=d>>>2|0;if(!b)b=d;else c=c|2;if(b>>>1|0)c=c|1;return (32-c|0)-1|0;},
DX=b=>{let c,d;if(!b)return 32;c=0;d=b<<16;if(d)c=16;else d=b;b=d<<8;if(!b)b=d;else c=c|8;d=b<<4;if(!d)d=b;else c=c|4;b=d<<2;if(!b)b=d;else c=c|2;if(b<<1)c=c|1;return (32-c|0)-1|0;},
AL8=()=>{KF=Bk(ACO);};
function T(){let a=this;C.call(a);a.g$=null;a.g8=0;}
let Gi=a=>{a.g$=G(16);},
ALs=()=>{let a=new T();Gi(a);return a;},
Dp=(a,b)=>{a.g$=G(b);},
AMe=a=>{let b=new T();Dp(b,a);return b;},
F=(a,b,c)=>{let d,e,f;if(b>=0&&b<=a.g8){if(c===null)c=A(2);else if(c.g9.length?0:1)return a;Gh(a,a.g8+c.g9.length|0);d=a.g8-1|0;while(d>=b){a.g$.data[d+c.g9.length|0]=a.g$.data[d];d=d+(-1)|0;}a.g8=a.g8+c.g9.length|0;e=0;a:{while(e<c.g9.length){f=a.g$;d=b+1|0;if(e<0)break a;if(e>=c.g9.length)break a;f.data[b]=c.g9.charCodeAt(e);e=e+1|0;b=d;}return a;}c=new Q;c.g_=1;c.ha=1;E(c);}c=new Q;c.g_=1;c.ha=1;E(c);},
J=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=1;if(c<0){e=0;c= -c|0;}a:{if(DN(c,d)<0){if(e)Bn(a,b,b+1|0);else{Bn(a,b,b+2|0);f=a.g$.data;g=b+1|0;f[b]=45;b=g;}a.g$.data[b]=Kc(c,d);}else{h=1;i=1;j=C8((-1),d);b:{while(true){k=CB(h,d);if(DN(k,c)>0){k=h;break b;}i=i+1|0;if(DN(k,j)>0)break;h=k;}}if(!e)i=i+1|0;Bn(a,b,b+i|0);if(e)e=b;else{f=a.g$.data;e=b+1|0;f[b]=45;}while(true){if(!k)break a;f=a.g$.data;b=e+1|0;f[e]=Kc(C8(c,k),d);c=ALK(c,k);k=C8(k,d);e=b;}}}return a;},
GS=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=B4(c,0.0);if(!d){if(1.0/c===Infinity){Bn(a,b,b+3|0);e=a.g$.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bn(a,b,b+4|0);e=a.g$.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bn(a,b,b+3|0);e=a.g$.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bn(a,b,b+8|0);d=b;}else{Bn(a,b,b+9|0);e=a.g$.data;d=b+1|0;e[b]=45;}e=a.g$.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=M2;ACR(c,f);d=f.nB;g=f.nr;h=f.o0;i=1;j=1;if(h)j=2;k=9;l=AHq(d);if(l>0)k=k-l|0;m=0;n=0;if(g<7&&g>=(-3)){if(g<0){i=0;m=( -g|0)-1|0;n=1;j=j+1|0;g=0;}else{i=g+1|0;o=i+1|0;if(k>o)o=k;g=0;k=o;}}if(g){j=j+2|0;if(!(g>(-10)&&g<10))j=j+1|0;if(g<0)j=j+1|0;}if(g&&k==i)k=k+1|0;Bn(a,b,b+(j+(k+m|0)|0)|0);if(!h)j=b;else{e=a.g$.data;j=b+1|0;e[b]=45;}p=100000000;if(n){e=a.g$.data;b=j+1|0;e[j]=48;j=b+1|0;e[b]=46;while(true){b=m+(-1)|0;if(m<=0)break;o
=j+1|0;e[j]=48;m=b;j=o;}}o=0;while(o<k){if(p<=0)q=0;else{q=d/p|0;d=d%p|0;}e=a.g$.data;b=j+1|0;e[j]=(48+q|0)&65535;i=i+(-1)|0;if(i)j=b;else{j=b+1|0;e[b]=46;}p=p/10|0;o=o+1|0;}if(g){e=a.g$.data;b=j+1|0;e[j]=69;if(g>=0)d=b;else{g= -g|0;d=b+1|0;e[b]=45;}if(g<10)o=d;else{o=d+1|0;e[d]=(48+(g/10|0)|0)&65535;}e[o]=(48+(g%10|0)|0)&65535;}return a;},
Me=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=B4(c,0.0);if(!d){if(1.0/c===Infinity){Bn(a,b,b+3|0);e=a.g$.data;d=b+1|0;e[b]=48;b=d+1|0;e[d]=46;e[b]=48;return a;}Bn(a,b,b+4|0);e=a.g$.data;d=b+1|0;e[b]=45;b=d+1|0;e[d]=48;d=b+1|0;e[b]=46;e[d]=48;return a;}if(isNaN(c)?1:0){Bn(a,b,b+3|0);e=a.g$.data;d=b+1|0;e[b]=78;b=d+1|0;e[d]=97;e[b]=78;return a;}if(!isFinite(c)?1:0){if(d>0){Bn(a,b,b+8|0);d=b;}else{Bn(a,b,b+9|0);e=a.g$.data;d=b+1|0;e[b]=45;}e=a.g$.data;b=d+1|0;e[d]=73;d=b+1|0;e[b]=110;b=d+1|0;e[d]=102;d=b+1|0;e[b]
=105;b=d+1|0;e[d]=110;d=b+1|0;e[b]=105;b=d+1|0;e[d]=116;e[b]=121;return a;}f=Mp;ZR(c,f);g=f.nX;h=f.nh;i=f.oT;j=1;k=1;if(i)k=2;l=18;m=AEU(g);if(m>0)l=l-m|0;n=0;o=0;if(h<7&&h>=(-3)){if(h<0){j=0;n=( -h|0)-1|0;o=1;k=k+1|0;h=0;}else{j=h+1|0;d=j+1|0;if(l>d)d=l;h=0;l=d;}}if(h){k=k+2|0;if(!(h>(-10)&&h<10))k=k+1|0;if(!(h>(-100)&&h<100))k=k+1|0;if(h<0)k=k+1|0;}if(h&&l==j)l=l+1|0;Bn(a,b,b+(k+(l+n|0)|0)|0);if(!i)i=b;else{e=a.g$.data;i=b+1|0;e[b]=45;}p=B(1569325056, 23283064);if(o){e=a.g$.data;b=i+1|0;e[i]=48;i=b+1|0;e[b]
=46;while(true){b=n+(-1)|0;if(n<=0)break;d=i+1|0;e[i]=48;n=b;i=d;}}q=0;while(q<l){if(WV(p,BM))d=0;else{d=Bd(Jy(g,p));g=Sh(g,p);}e=a.g$.data;b=i+1|0;e[i]=(48+d|0)&65535;j=j+(-1)|0;if(j)i=b;else{i=b+1|0;e[b]=46;}p=Jy(p,O(10));q=q+1|0;}if(h){e=a.g$.data;n=i+1|0;e[i]=69;if(h>=0)d=n;else{h= -h|0;d=n+1|0;e[n]=45;}if(h>=100){b=d+1|0;e[d]=(48+(h/100|0)|0)&65535;h=h%100|0;n=b+1|0;e[b]=(48+(h/10|0)|0)&65535;}else if(h<10)n=d;else{n=d+1|0;e[d]=(48+(h/10|0)|0)&65535;}e[n]=(48+(h%10|0)|0)&65535;}return a;},
AHq=b=>{let c,d,e;if(!(b%1000000000|0))return 9;c=0;d=1;if(!(b%100000000|0)){c=8;d=100000000;}e=d*10000|0;if(b%e|0)e=d;else c=c|4;d=e*100|0;if(b%d|0)d=e;else c=c|2;if(!(b%(d*10|0)|0))c=c|1;return c;},
AEU=b=>{let c,d,e,f,g;c=O(1);d=0;e=16;f=Kt.data;g=f.length-1|0;while(g>=0){if(C6(Sh(b,U(c,f[g])),BM)){d=d|e;c=U(c,f[g]);}e=e>>>1|0;g=g+(-1)|0;}return d;},
Ii=(a,b,c)=>{F(a,b,c===null?A(2):c.bj());return a;},
Gh=(a,b)=>{let c,d,e,f,g,h;c=a.g$.data;d=c.length;if(d>=b)return;if(d>=1073741823)e=2147483647;else{f=d*2|0;e=5;if(f>e)e=f;if(b>e)e=b;}g=G(e);if(e<d)d=e;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.g$=g;},
ACV=a=>{let b,c,d,e,f;b=new H;c=a.g$;d=c.data;e=a.g8;f=d.length;if(e>=0&&e<=(f-0|0)){b.g9=L(c.data,0,e);return b;}b=new I;b.g_=1;b.ha=1;E(b);},
KU=(a,b,c,d,e)=>{let f,g,h,i;Bn(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.g$.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
Qu=(a,b)=>{let c,d,e,f;if(b>=0){c=a.g8;if(b<c){c=c-1|0;a.g8=c;while(b<c){d=a.g$.data;e=b+1|0;d[b]=d[e];b=e;}return a;}}f=new Q;f.g_=1;f.ha=1;E(f);},
AIQ=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=B4(b,c);if(d<=0){e=a.g8;if(b<=e){if(!d)return a;if(c>e)c=e;f=e-c|0;a.g8=e-(c-b|0)|0;g=0;while(g<f){h=a.g$.data;e=b+1|0;d=c+1|0;h[b]=h[c];g=g+1|0;b=e;c=d;}return a;}}}i=new Q;i.g_=1;i.ha=1;E(i);},
Bn=(a,b,c)=>{let d,e,f,g;d=a.g8;e=d-b|0;a.bp((d+c|0)-b|0);f=e-1|0;while(f>=0){g=a.g$.data;g[c+f|0]=g[b+f|0];f=f+(-1)|0;}a.g8=a.g8+(c-b|0)|0;};
let IA=D(0);
let K=D(T);
let AJy=a=>{a.g$=G(16);},
E6=()=>{let a=new K();AJy(a);return a;},
AC6=(a,b)=>{J(a,a.g8,b,10);return a;},
R6=(a,b)=>{let c;c=a.g8;Bn(a,c,c+1|0);a.g$.data[c]=b;return a;},
AIP=(a,b,c)=>{AIQ(a,b,c);return a;},
Cw=(a,b,c)=>{F(a,b,c);return a;},
AAP=(a,b,c,d,e)=>{let f,g,h,i;Bn(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.g$.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
WB=(a,b,c,d)=>{let e,f,g,h,i;e=a.g8;Bn(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.g$.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
Uc=a=>{return a.g8;},
Fr=a=>{let b,c,d,e,f;b=new H;c=a.g$;d=c.data;e=a.g8;f=d.length;if(e>=0&&e<=(f-0|0)){b.g9=L(c.data,0,e);return b;}b=new I;b.g_=1;b.ha=1;E(b);},
AA_=(a,b)=>{Gh(a,b);},
ABV=(a,b,c)=>{Bn(a,b,b+1|0);a.g$.data[b]=c;return a;},
Cs=(a,b,c)=>{F(a,b,c);return a;};
function M7(){let a=this;C.call(a);a.ox=0;a.qS=0;a.qe=0;a.o5=null;a.qN=0;a.sG=null;a.oL=0;a.qZ=null;a.l9=0;a.kO=0;a.ns=0;a.oA=0;a.py=0;a.pg=0;a.qs=0;a.pV=0;a.p3=0;a.op=0;a.mC=0;}
let Tv=(a,b)=>{a.ox=0;a.qS=1;a.qe=0;a.qN=1;a.sG=A(59);a.oL=0;a.l9=(-1);a.kO=(-1);a.ns=0;a.oA=0;a.py=0;a.pg=0;a.qs=0;a.pV=0;a.p3=0;a.op=0;a.mC=1;a.qZ=b;},
AJ$=a=>{let b=new M7();Tv(b,a);return b;};
let L2=D(0);
function IH(){let a=this;C.call(a);a.kb=null;a.lJ=null;a.pw=null;a.pY=null;a.rY=null;a.jy=null;a.mc=null;a.mf=null;a.l5=null;a.j7=null;a.lk=null;a.m$=0;a.oq=0;a.rh=null;a.kB=0;a.l7=null;a.ry=null;a.rl=null;a.lU=null;a.oD=null;a.ke=null;}
let Fe=null;
let Ma=(a,b,c)=>{let d;d=new Cy;d.iK=1;d.hX=R(C,4);a.l5=d;a.lk=J3;a.m$=(-1);a.oq=1;a.kB=1;a.ry=DI(51,0.800000011920929);d=new Cy;d.iK=1;d.hX=R(C,16);a.lU=d;d=new Cy;d.iK=1;d.hX=R(C,16);a.oD=d;Eh();a.j7=Fs;a.jy=c;a.mc=b;AGh(a);},
AK3=(a,b)=>{let c=new IH();Ma(c,a,b);return c;},
AGh=a=>{let b,c,d,e,f,g,h,i,j,k,l,m,n;Fe=ACY();EJ();CD(DY,A(60),A(59));b=V(Fe.userAgent);EJ();CD(DY,A(61),b);if(Fe.windows?1:0){EJ();CD(DY,A(62),A(63));}else if(Fe.macOS?1:0){EJ();CD(DY,A(62),A(64));}else if(!(Fe.linux?1:0)){EJ();CD(DY,A(62),A(65));}else{EJ();CD(DY,A(62),A(10));}c=new Le;d=a.jy.oL;c.qu=0;c.qX=0;c.iG=1;c.iG=d;ET=c;Eh();b=V(Fs.jf.location.href);a.ke=b;if(Cm(b,A(66))){c=Px(a.ke,A(67),A(59));a.ke=c;a.ke=Px(c,A(68),A(59));}e=FY(a.ke,63,0);if(e>=0)a.ke=Cc(a.ke,0,e);c=a.jy;FR=c.qS;b=AFb(c);a.kb=b;c
=ACX(a.ke,b.h7,a);a.l7=c;d=a.jy.qN;f=ET;g=c.mi;h=new K;h.g$=G(16);i=h.g8;if(g===null)g=A(2);Cw(h,i,g);Cw(h,h.g8,A(69));g=new H;j=h.g$;k=j.data;l=h.g8;m=k.length;if(l>=0&&l<=(m-0|0)){g.g9=L(j.data,0,l);h=new K;h.g$=G(16);F(h,h.g8,g);F(h,h.g8,A(70));g=new H;j=h.g$;k=j.data;l=h.g8;m=k.length;if(l>=0&&l<=(m-0|0)){g.g9=L(j.data,0,l);h=new MI;h.lo=c;h.o3=A(70);h.o2=d;if(f.iG){if(BH===null){c=new Ck;b=new B5;BB(b);b.h$=BF(32);DL(c);c.ik=b;b=new K;Gi(b);c.ia=b;c.h_=G(32);c.ie=0;c.ig=BX;BH=c;}c=new K;c.g$=G(16);Cw(c,
c.g8,A(71));Cw(c,c.g8,g);b=new H;j=c.g$;k=j.data;i=c.g8;l=k.length;if(i>=0&&i<=(l-0|0)){b.g9=L(j.data,0,i);BI(Br(b));BI("\n");}else{c=new I;c.g_=1;c.ha=1;E(c);}}a:{f.hN=f.hN+1|0;c=new Fh;c.jl=f;c.kj=1;c.jg=g;c.ju=h;b=null;g=null;c.iP=new C;c.iN=1;c.jd=g;c.jt=b;e=B9;B9=e+1|0;c.jr=O(e);b=new Dj;b.je=c;Dz(b);a.lJ=Ut(a.kb.h7);c=new PC;c.sn=a.l7;a.pw=c;c=new OZ;b=new GG;d=Hj(16);b.kl=0;k=R(Ep,d);j=k.data;b.jJ=k;b.mY=0.75;b.k0=j.length*0.75|0;c.rU=b;a.pY=c;a.rh=new M6;c=new OV;c.rV=0;c.mm=1;b=new IZ;b.me=c;c.rr=b;c.nW
=A(59);a.rl=c;if(a.jy.qe){g=a.l7;b=new KJ;b.q_=a;n=ET;g=g.mi;h=new K;h.g$=G(16);Cs(h,h.g8,g===null?A(2):Cn(g));Cs(h,h.g8,Cn(A(69)));f=new H;j=h.g$;k=j.data;i=h.g8;l=k.length;if(i>=0&&i<=(l-0|0)){f.g9=L(j.data,0,i);g=new K;g.g$=G(16);Cw(g,g.g8,f);Cw(g,g.g8,A(72));c=new H;j=g.g$;k=j.data;i=g.g8;l=k.length;if(i>=0&&i<=(l-0|0)){c.g9=L(j.data,0,i);Ke(n,1,c,b);break a;}c=new I;c.g_=1;c.ha=1;E(c);}c=new I;c.g_=1;c.ha=1;E(c);}}Dc=a;c=a.kb;Cl=c;b=c.k3;D0=b;Bx=b;En=c.pZ;Mk=a.lJ;AA8=a.pw;AFn=a.pY;c=new MB;c.qp=null;c.qp
=AIs();a.rY=c;ABA=c;f=a.j7.jf.document;b=new Hz;b.mZ=a;f.addEventListener("visibilitychange",BL(b,"handleEvent"));c=a.j7;c.l_=a;requestAnimationFrame(BL(c,"onAnimationFrame"));c=a.jy;if(!c.l9&&!c.kO?1:0){c=a.j7;g=new HA;g.ly=a;g=CC(g,"handleEvent");c.jf.addEventListener("resize",BL(g,"handleEvent"));}return;}c=new I;c.g_=1;c.ha=1;E(c);}c=new I;c.g_=1;c.ha=1;E(c);},
ZI=a=>{let b,c,d,e,f,g,h,$$je;b=a.lk;a:{try{b:{Jf();switch(Pd.data[AG$(b)]){case 1:c=ZV(RY());if(!c){a.lk=GN;d=window.document.getElementById("progress");if(d!==null)d.style.setProperty("display","none");break b;}e=a.l7.nO;if(e>0){f=25+((75*(e-c|0)|0)/e|0)|0;g=window.document.getElementById("progress-bar");if(g!==null){d=g.style;g=E6();R6(AC6(g,f),37);h=Fr(g);d.setProperty("width",Br(h));}}break b;case 2:break;default:break b;}if(a.mc!==null){b=a.mf;if(b!==null){AHk(b);XT(a.mf);}W5(a.lJ,null);Nq(a.lJ);Xe(a.lU);a.mf
=a.mc;a.mc=null;a.lk=HB;a.kb.mT=BM;}Td(a,a.mf);}}catch($$e){$$je=BP($$e);if($$je instanceof CT){h=$$je;break a;}else{throw $$e;}}b=a.j7;b.l_=a;requestAnimationFrame(BL(b,"onAnimationFrame"));return;}if(Ct===null){b=new Eo;d=new B5;d.h$=BF(32);BB(b);b.ik=d;d=new K;Dp(d,16);b.ia=d;b.h_=G(32);b.ie=0;b.ig=BX;Ct=b;}Hq(h,Ct);E(h);},
Td=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u;V2(a.kb);c=Cl.h7.width;d=Cl.h7.height;e=0;if(a.lk===HB){a.lk=GN;b.oO=CZ();f=new IB;g=X3(RA(0,1,0),ACb(0,1,0));if(!g.kc){b=new Bf;f=new K;f.g$=G(16);F(f,f.g8,A(73));if(!g.kc)h=g.jB;else{h=Bx.bY(g.i1);g.jB=h;}F(f,f.g8,h);h=new H;i=f.g$;j=i.data;k=f.g8;d=j.length;if(k>=0&&k<=(d-0|0)){h.g9=L(i.data,0,k);b.g_=1;b.ha=1;b.hc=h;E(b);}b=new I;HH(b);E(b);}N3(f,2073602,0,1,0,g);f.st=1;b.lv=f;f=new Of;h=new Mv;AFm(h);h.oZ=1.0;l=new Bb;B_();h.qi=l;h.ol=0.0;f.rK=new Bb;f.o1
=1.0;f.m4=h;b.mI=f;f=new O7;f.sw=b;Mk.lb=f;D0.b0(3042);e=1;}if(!(c==a.m$&&d==a.oq&&!e)){a.m$=c;a.oq=d;D0.b1(0,0,c,d);f=b.mI;f.oG=0;f.oH=0;f.p5=c;f.qx=d;m=c;n=f.o1;m=m*n;n=d*n;f.qC=m;f.qP=n;Qn(f,1);Qn(b.mI,1);}f=a.oD;h=a.lU;i=h.hX;k=h.h4;j=f.hX;o=j.data;d=f.h4;c=d+k|0;if(c<=o.length)h=j;else{p=8;if(p<=c)p=c;d=d*1.75|0;if(p>d)d=p;l=j.constructor;if(l===null)h=null;else{h=l.classObject;if(h===null){h=new Ca;h.hH=l;g=h;l.classObject=g;}}q=h.hH.$meta.item;if(q===null)l=null;else{l=q.classObject;if(l===null){l=new Ca;l.hH
=q;h=l;q.classObject=h;}}if(l===null){b=new CU;Y(b);E(b);}if(l===Bk(CQ)){b=new Bs;Y(b);E(b);}if(d<0){b=new DK;Y(b);E(b);}h=D4(l.hH,d);l=h.data;r=f.h4;s=l.length;if(r<s)s=r;GP(j,0,h,0,s);f.hX=h;}GP(i,0,h,f.h4,k);f.h4=c;f=a.lU;i=f.hX;e=0;k=f.h4;h=null;if(e>k){b=new Bs;b.g_=1;b.ha=1;E(b);}while(e<k){j=i.data;d=e+1|0;j[e]=h;e=d;}f.h4=0;k=0;while(true){l=a.oD;e=l.h4;d=B4(k,e);if(d>=0){i=l.hX;k=0;f=null;if(k>e){b=new Bs;b.g_=1;b.ha=1;E(b);}while(k<e){j=i.data;d=k+1|0;j[k]=f;k=d;}l.h4=0;f=a.kb;t=Cj(f.mT,O(1));f.mT
=t;if(Ww(t,O(60))){d=Cl.oC|0;f=new K;f.g$=G(16);F(f,f.g8,A(74));J(f,f.g8,d,10);F(f,f.g8,A(75));h=new H;i=f.g$;j=i.data;k=f.g8;d=j.length;if(k>=0&&k<=(d-0|0)){h.g9=L(i.data,0,k);f=window.document;h=Br(h);f.title=h;D0.b3(0.0,0.0,0.0,1.0);D0.b4(16384);AFh(b);}else{b=new I;Y(b);E(b);}}Nq(a.lJ);return;}if(d>=0){f=new I;b=new K;b.g$=G(16);F(b,b.g8,A(76));J(b,b.g8,k,10);F(b,b.g8,A(77));e=l.h4;J(b,b.g8,e,10);h=new H;i=b.g$;j=i.data;k=b.g8;d=j.length;if(k>=0&&k<=(d-0|0)){h.g9=L(i.data,0,k);f.g_=1;f.ha=1;f.hc=h;E(f);}b
=new I;Y(b);E(b);}h=l.hX.data[k];l=h.nV.ma;g=l.hX.constructor;if(g===null)f=null;else{f=g.classObject;if(f===null){f=new Ca;f.hH=g;q=f;g.classObject=q;}}u=f.hH.$meta.item;if(u===null)g=null;else{g=u.classObject;if(g===null){g=new Ca;g.hH=u;q=g;u.classObject=q;}}e=l.h4;if(g===null){b=new CU;Y(b);E(b);}if(g===Bk(CQ)){b=new Bs;Y(b);E(b);}if(e<0)break;f=D4(g.hH,e);GP(l.hX,0,f,0,l.h4);i=f;h.nV.mK.oP.o5.b6(i);k=k+1|0;}b=new DK;Y(b);E(b);};
let QJ=D(0);
let JB=D();
let AHk=a=>{return;},
XT=a=>{return;};
function L9(){let a=this;JB.call(a);a.lv=null;a.mI=null;a.oO=BM;}
let AFh=a=>{let b,c,d,e,f,g,h,i,j;b=a.lv;c=a.mI.m4.lR;Gm(b.nU,c.iA);b.p2=0;d=a.oO;e=Z1(Nn(CZ(),d))*0.03125;f=0;while(f<1920){g=f;h=g-e;i=0;while(i<1080){c=a.lv;j=RM(h);j=Ig(((isNaN(j)?1:0)?2143289344:Im(j))&16777215|(-33554432));c.mr.data[c.lx+c.qm|0]=j;ACk(a.lv,g,i,0.0);i=i+1|0;h=h+0.001953125;}f=f+1|0;}AH1(a.lv);};
let AF9=D();
let Bj=(b,c)=>{let d,e,f,g,h,i,j,k,l;if(!b)return A(78);d=1<<c;e=d-1|0;f=(((32-La(b)|0)+c|0)-1|0)/c|0;g=G(f);h=g.data;i=CB(f-1|0,c);j=0;while(i>=0){k=j+1|0;h[j]=Kc((b>>>i|0)&e,d);i=i-c|0;j=k;}l=new H;l.g9=L(g.data,0,h.length);return l;};
let F5=D(BR);
let J3=null,HB=null,GN=null,P0=null;
let ABF=()=>{let b,c,d;b=new F5;b.hx=A(79);b.hm=0;J3=b;c=new F5;c.hx=A(80);c.hm=1;HB=c;d=new F5;d.hx=A(81);d.hm=2;GN=d;P0=P(F5,[b,c,d]);};
let KN=D(0);
let BY=D(0);
let No=D(0);
function GU(){let a=this;C.call(a);a.jf=null;a.l_=null;}
let Fs=null;
let Eh=()=>{Eh=Bz(GU);YG();};
let YG=()=>{let b;b=new GU;Eh();b.jf=window;Fs=b;},
AEE=(a,b)=>{let c;b;c=a.l_;a.l_=null;ZI(c);};
let AEn=D();
let M0=D();
let Fl=null;
let Gy=()=>{Gy=Bz(M0);ADs();};
let ADs=()=>{Fl=DI(51,0.800000011920929);};
function J6(){Dr.call(this);this.oM=0.0;}
let MY=null;
let AL0=()=>{MY=Bk(AD3);};
function JM(){let a=this;C.call(a);a.qY=null;a.qT=0;}
let Zw=D();
let Qe=b=>{return Math.sin(b);},
Tp=b=>{return Math.cos(b);},
Dl=b=>{return Math.sqrt(b);},
Mb=b=>{return Math.ceil(b);},
EU=(b,c)=>{return Math.pow(b,c);},
TT=b=>{return Math.abs(b);},
CY=b=>{return Math.sign(b);};
let C4=D();
function GV(){let a=this;C.call(a);a.jC=null;a.iM=0;a.no=0;}
let ND=(a,b)=>{let c,d,e,f,g;c=a.jC;d=c.data;e=a.iM;if(e!=d.length)d=c;else{f=e*1.75|0;if(8>f)f=8;d=S(f);g=d.data.length;if(e<g)g=e;Fm(c,0,d,0,g);a.jC=d;}c=d.data;f=a.iM;a.iM=f+1|0;c[f]=b;};
let I2=D(0);
let H5=D();
let DZ=D(0);
function GG(){let a=this;H5.call(a);a.kl=0;a.jJ=null;a.mW=0;a.mY=0.0;a.k0=0;}
let Hj=b=>{let c;if(b>=1073741824)return 1073741824;if(!b)return 16;c=b-1|0;b=c|c>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;},
AH3=(a,b,c)=>{let d,e,f,g,h,i,j;if(b===null){d=a.jJ.data;e=d[0];while(e!==null&&e.jx!==null){e=e.j9;}if(e===null){a.mW=a.mW+1|0;f=null;e=new Ep;b=null;e.jx=f;e.jY=b;e.lM=0;e.j9=d[0];d[0]=e;g=a.kl+1|0;a.kl=g;if(g>a.k0)MR(a,d.length);}}else{f=b;if(!f.$id$){e=Gl();f.$id$=e;}h=b.$id$;d=a.jJ.data;i=d.length;j=h&(i-1|0);e=d[j];while(e!==null){if(e.lM==h){f=e.jx;if(b!==f&&!(b!==f?0:1)?0:1)break;}e=e.j9;}if(e===null){a.mW=a.mW+1|0;e=new Ep;f=null;e.jx=b;e.jY=f;e.lM=h;e.j9=d[j];d[j]=e;g=a.kl+1|0;a.kl=g;if(g>a.k0)MR(a,
i);}}f=e.jY;e.jY=c;return f;},
MR=(a,b)=>{let c,d,e,f,g,h,i,j;c=Hj(!b?1:b<<1);d=R(Ep,c);e=d.data;f=0;c=c-1|0;while(true){g=a.jJ.data;if(f>=g.length)break;h=g[f];g[f]=null;while(h!==null){i=h.lM&c;j=h.j9;h.j9=e[i];e[i]=h;h=j;}f=f+1|0;}a.jJ=d;a.k0=e.length*a.mY|0;};
let Q0=D(0);
let Ka=D();
let Jq=D();
let KE=null,Ij=null,BC=null,BD=null,Jn=null,O9=null,Bu=null,Bt=null,G9=null,G$=null;
let UN=(b,c,d)=>{let e;if(c<d&&c>=0){b=b.data;if(d<=b.length){if(c<(d-1|0)&&((b[c]&64512)!=55296?0:1)){d=c+1|0;if((b[d]&64512)!=56320?0:1)return ((b[c]&1023)<<10|b[d]&1023)+65536|0;}return b[c];}}e=new I;e.g_=1;e.ha=1;E(e);},
B1=(b,c)=>{let d,e;d=b.pU.data;if(c<d.length)return c+d[c]|0;d=b.pK;e=AG_(d,c);if(e>=0){d=d.data;e=e*2|0;if(e<d.length)return c+d[e+1|0]|0;}return 0;},
AG_=(b,c)=>{let d,e,f,g;b=b.data;d=0;e=(b.length/2|0)-1|0;while(true){f=(d+e|0)/2|0;g=B4(b[f*2|0],c);if(!g)break;if(g<=0){d=f+1|0;if(d>e)return f;}else{e=f-1|0;if(e<d)return e;}}return f;},
LX=b=>{let c,d,e,f,g,h;if(Ij===null){if(G9===null)G9=Zj();Ij=AJE((G9.value!==null?V(G9.value):null));}c=Ij.data;d=0;e=(c.length/2|0)-1|0;while(e>=d){f=(d+e|0)/2|0;g=f*2|0;h=B4(b,c[g]);if(h>0)d=f+1|0;else{if(h>=0)return c[g+1|0];e=f-1|0;}}return (-1);},
Kc=(b,c)=>{if(c>=2&&c<=36&&b>=0&&b<c)return b<10?(48+b|0)&65535:((97+b|0)-10|0)&65535;return 0;},
EN=b=>{let c,d;if(!(b>=0&&b<=1114111?1:0)){c=new Bs;c.g_=1;c.ha=1;E(c);}if(b<65536){d=G(1);d.data[0]=b&65535;return d;}return ALB([(55296|(b-65536|0)>>10&1023)&65535,(56320|b&1023)&65535]);},
B$=b=>{let c,d,e,f,g;if(b>0&&b<=65535?1:0){c=b&65535&64512;d=c!=55296?0:1;if(!d&&!(c!=56320?0:1)?0:1)return 19;}if(Jn===null){if(G$===null)G$=AKy();Jn=AKT((G$.value!==null?V(G$.value):null));}e=Jn.data;c=0;d=e.length-1|0;while(c<=d){f=(c+d|0)/2|0;g=e[f];if(b>=g.nY)c=f+1|0;else{d=g.nz;if(b>=d)return g.nC.data[b-d|0];d=f-1|0;}}return 0;},
FG=b=>{a:{if(!(b>=0&&b<=8)&&!(b>=14&&b<=27)){if(b<127)break a;if(b>159)break a;}return 1;}return B$(b)!=16?0:1;},
AK7=()=>{KE=Bk(T4);O9=R(Jq,128);},
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
Zj=()=>{return {"value":"&C*% %%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%_H#T#%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%{CG%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%6)G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%!i#G"
+"%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%*;G%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%:/G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%{/G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%=G%%%%%%%%%%%%%%%%%%R@dG%%%%%%%%%%%%%%%%%%R[G%%%%%%%%%%%%%%%%%%c#G%%%%%%%%%%%%%%%%%%_1G%%%%%%%%%%%%%%%%%%!#G%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%cCG%%%%%%%%%%%%%%%%%%o*IG%%%%%%%%%%%%%%%%%%A%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%=,#%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%c:#T#%%%%%%%%%%%%%%%%%%w&%G%%%%%"
+"%%%%%%%%%%%%%BhG%%%%%%%%%%%%%%%%%%Z+G%%%%%%%%%%%%%%%%%%_%G%%%%%%%%%%%%%%%%%%>-G%%%%%%%%%%%%%%%%%%.9G%%%%%%%%%%%%%%%%%%w=G%%%%%%%%%%%%%%%%%%2+G%%%%%%%%%%%%%%%%%%>AG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%N)G%%%%%%%%%%%%%%%%%%!dG%%%%%%%%%%%%%%%%%%g5G%%%%%%%%%%%%%%%%%%*\'G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%*0EG%%%%%%%%%%%%%%%%%%k\'G%%%%%%%%%%%%%%%%%%s+G%%%%%%%%%%%%%%%%%%28UG%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%%%%%G%%%%%%%%%%%%%%%"
+"%%%!8%G%%%%%%%%%%%%%%%%%%FEG%%%%%%%%%%%%%%%%%%sKG%%%%%%%%%%%%%%%%%%>&#G%%%%%%%%%%%%%%%%%%wN)G%%%%%%%%%%%%%%%%%%"};},
AKy=()=>{return {"value":"PA-Y$;Y$679:95Y#J+Y#Z$Y#B;697<8<C;6:7:PB-9[%=9<=&>:1=<=:L#<#Y#<,&?L$9B8:B(C9:C)!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#B##!#!C$B##!#B##B$C#B%#B##B$C$B##B##!#!#B##!C#!#B##B$#!#B#C#&!C$F%!$#!$#!$#!#!#!#!#!#!#!#!C#!#!#!#!#!#!#!#!#!C#!$#!#B$#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!#!C(B##B#C#!#B%#!#!#!#!Cg&C<E3]%E-]/E&](%<%]2b\'Q! !#!#%<!#A#%C$9!A%]#!9B$ ! B##B2 B*CD!C#B$C$!#!#!#!#!#!#!#!#!#!#!#!C&!#:!#B#C#BTCQ!#!#!#!#"
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
let Wp=D();
let ACY=()=>{var userAgent=navigator.userAgent.toLowerCase();return {firefox:userAgent.indexOf('firefox')!= -1,chrome:userAgent.indexOf('chrome')!= -1,safari:userAgent.indexOf('safari')!= -1,opera:userAgent.indexOf('opera')!= -1,IE:userAgent.indexOf('msie')!= -1,macOS:userAgent.indexOf('mac')!= -1,linux:userAgent.indexOf('linux')!= -1,windows:userAgent.indexOf('win')!= -1,userAgent:userAgent};};
let AEN=D();
let BH=null,Ct=null,DY=null;
let GP=(b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o,p;if(b!==null&&d!==null){if(c>=0&&e>=0&&f>=0&&(c+f|0)<=GZ(b)&&(e+f|0)<=GZ(d)){a:{b:{if(b!==d){g=b.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new Ca;h.hH=g;i=h;g.classObject=i;}}j=DS(h);g=d.constructor;if(g===null)h=null;else{h=g.classObject;if(h===null){h=new Ca;h.hH=g;i=h;g.classObject=i;}}i=DS(h);if(j!==null&&i!==null){if(j===i)break b;if(!(j.hH.$meta.primitive?1:0)&&!(i.hH.$meta.primitive?1:0)){k=b;l=0;m=c;while(l<f){n=k.data;o=m+1|0;g=n[m];p
=i.hH;if(!(g!==null&&!(typeof g.constructor.$meta==='undefined'?1:0)&&OE(g.constructor,p)?1:0)){GI(b,c,d,e,l);b=new Hg;b.g_=1;b.ha=1;E(b);}l=l+1|0;m=o;}GI(b,c,d,e,f);return;}if(!(j.hH.$meta.primitive?1:0))break a;if(i.hH.$meta.primitive?1:0)break b;else break a;}b=new Hg;b.g_=1;b.ha=1;E(b);}}GI(b,c,d,e,f);return;}b=new Hg;b.g_=1;b.ha=1;E(b);}b=new I;b.g_=1;b.ha=1;E(b);}d=new CU;d.g_=1;d.ha=1;d.hc=A(82);E(d);},
Fm=(b,c,d,e,f)=>{if(c>=0&&e>=0&&f>=0&&(c+f|0)<=GZ(b)&&(e+f|0)<=GZ(d)){GI(b,c,d,e,f);return;}b=new I;b.g_=1;b.ha=1;E(b);},
GI=(b,c,d,e,f)=>{if(f!==0){if(typeof b.data.buffer!=='undefined'){d.data.set(b.data.subarray(c,c+f),e);}else if(b!==d||e<c){for(let i=0;i<f;i=i+1|0){d.data[e++]=b.data[c++];}}else {c=c+f|0;e=e+f|0;for(let i=0;i<f;i=i+1|0){d.data[ --e]=b.data[ --c];}}}},
CZ=()=>{return C7((new Date()).getTime());},
EJ=()=>{let b,c;if(DY===null){b=new Jv;H1(b,11);CD(b,A(83),A(84));CD(b,A(62),A(85));CD(b,A(86),A(87));CD(b,A(88),A(89));CD(b,A(90),A(91));CD(b,A(92),A(93));CD(b,A(94),A(84));CD(b,A(95),A(87));c=new Jv;H1(c,11);c.r$=b;DY=c;}};
let Km=D(0);
function Le(){let a=this;C.call(a);a.hN=0;a.qu=0;a.qX=0;a.iG=0;}
let ZV=a=>{return a.hN;},
Vs=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a:{JL();switch(PN.data[d.hm]){case 1:if(a.iG){if(BH===null){d=new Ck;e=new B5;e.h$=BF(32);BB(d);d.ik=e;e=new K;Dp(e,16);d.ia=e;d.h_=G(32);d.ie=0;d.ig=BX;BH=d;}d=new K;d.g$=G(16);F(d,d.g8,A(71));F(d,d.g8,c===null?A(2):c);e=new H;g=d.g$;h=g.data;i=d.g8;j=h.length;if(i>=0&&i<=(j-0|0)){e.g9=L(g.data,0,i);BI(Br(e));BI("\n");}else{c=new I;Y(c);E(c);}}a.hN=a.hN+1|0;d=new Fh;d.jl=a;d.kj=b;d.jg=c;d.ju=f;c=null;e=null;d.iP=new C;d.iN=1;d.jd=e;d.jt=c;k=B9;B9=k+1|0;d.jr=O(k);c=new Dj;c.je
=d;Dz(c);break a;case 2:d=null;l=new KP;l.l6=a;l.ls=f;l.pn=d;l.qR=e;if(a.iG){if(BH===null){d=new Ck;e=new B5;DL(e);e.h$=BF(32);Ez(d,e);d.ia=E6();d.h_=G(32);d.ie=0;d.ig=BX;BH=d;}d=new K;d.g$=G(16);Cs(d,d.g8,Cn(A(71)));Cs(d,d.g8,c===null?A(2):Cn(c));e=new H;g=d.g$;h=g.data;i=d.g8;j=h.length;if(i>=0&&i<=(j-0|0)){e.g9=L(g.data,0,i);BI(Br(e));BI("\n");}else{c=new I;HH(c);E(c);}}a.hN=a.hN+1|0;d=new Ey;d.i6=a;d.jQ=b;d.i5=c;d.ji=l;c=null;e=null;d.iP=new C;d.iN=1;d.jd=e;d.jt=c;k=B9;B9=k+1|0;d.jr=O(k);c=new Dj;c.je=d;Dz(c);break a;case 3:if
(a.iG){if(BH===null){d=new Ck;e=new B5;e.h$=BF(32);BB(d);d.ik=e;e=new K;Dp(e,16);d.ia=e;d.h_=G(32);d.ie=0;d.ig=BX;BH=d;}d=new K;d.g$=G(16);F(d,d.g8,A(71));F(d,d.g8,c===null?A(2):c);e=new H;g=d.g$;h=g.data;i=d.g8;j=h.length;if(i>=0&&i<=(j-0|0)){e.g9=L(g.data,0,i);BI(Br(e));BI("\n");}else{c=new I;Y(c);E(c);}}a.hN=a.hN+1|0;d=new Ey;d.i6=a;d.jQ=b;d.i5=c;d.ji=f;c=null;e=null;d.iP=new C;d.iN=1;d.jd=e;d.jt=c;k=B9;B9=k+1|0;d.jr=O(k);c=new Dj;c.je=d;Dz(c);break a;case 4:e=new KO;e.si=a;e.mu=f;if(a.iG){if(BH===null){d
=new Ck;f=new B5;BB(f);f.h$=BF(32);DL(d);d.ik=f;f=new K;Gi(f);d.ia=f;d.h_=G(32);d.ie=0;d.ig=BX;BH=d;}d=new K;d.g$=G(16);Cw(d,d.g8,A(71));Cw(d,d.g8,c===null?A(2):c);f=new H;g=d.g$;h=g.data;i=d.g8;j=h.length;if(i>=0&&i<=(j-0|0)){f.g9=L(g.data,0,i);BI(Br(f));BI("\n");}else{c=new I;E4(c);E(c);}}a.hN=a.hN+1|0;d=new Ey;d.i6=a;d.jQ=b;d.i5=c;d.ji=e;c=null;e=null;d.iP=new C;d.iN=1;d.jd=e;d.jt=c;k=B9;B9=k+1|0;d.jr=O(k);c=new Dj;c.je=d;Dz(c);break a;case 5:break;default:c=new Bf;e=new K;e.g$=G(16);F(e,e.g8,A(96));F(e,
e.g8,d.hx);d=new H;g=e.g$;h=g.data;k=e.g8;i=h.length;if(k>=0&&k<=(i-0|0)){d.g9=L(g.data,0,k);c.g_=1;c.ha=1;c.hc=d;E(c);}c=new I;c.g_=1;c.ha=1;Bl(c);E(c);}c=null;Fg(f.lO,f.lX,f.lH,c);c=f.i0.iW;c.k9=1;c.i7=0;}},
Ke=(a,b,c,d)=>{let e,f,g,h,i,j;if(a.iG){if(BH===null){e=new Ck;f=new B5;f.h$=BF(32);e.ik=f;f=new K;BB(f);f.g$=G(16);e.ia=f;e.h_=G(32);e.ie=0;e.ig=BX;BH=e;}e=new K;e.g$=G(16);F(e,e.g8,A(97));F(e,e.g8,c===null?A(2):c);f=new H;g=e.g$;h=g.data;i=e.g8;j=h.length;if(i>=0&&i<=(j-0|0)){f.g9=L(g.data,0,i);BI(Br(f));BI("\n");}else{c=new I;c.g_=1;c.ha=1;E(c);}}a.hN=a.hN+1|0;f=new XMLHttpRequest();e=new HC;e.ld=a;e.ku=f;e.nM=b;e.mn=c;e.oi=d;e=BL(e,"handleEvent");f.onreadystatechange=e;e=new Fi;e.on=a;e.mb=d;d=BL(e,"handleEvent");f.onprogress
=d;f.open("GET",Br(c),!!b);f.setRequestHeader("Content-Type","text/plain; charset=utf-8");f.send();};
let VT=D();
let ET=null;
let RY=()=>{return ET;};
let Yp=D();
let C$=0,FR=0;
let ALy=()=>{C$=1;};
let OR=D(0);
function HT(){let a=this;C.call(a);a.nj=null;a.h7=null;a.qE=null;a.k3=null;a.pZ=null;a.rs=null;a.oC=0.0;a.m3=BM;a.mT=BM;a.pO=0.0;a.mP=0.0;a.ow=0;}
let AIZ=0,AF2=null;
let Jo=()=>{Jo=Bz(HT);T5();};
let ABG=(a,b)=>{let c,d,e,f,g,h,i,j,k;Jo();a.oC=0.0;a.m3=CZ();a.mT=O(-1);a.pO=0.0;a.mP=0.0;a.qE=b;Eh();c=window.document;d=b.qZ;a.h7=c.getElementById(Br(d));e=WK();d=!!b.qs;e.alpha=d;d=!!b.pg;e.antialias=d;d=!!b.py;e.stencil=d;d=!!b.pV;e.premultipliedAlpha=d;d=!!b.p3;e.preserveDrawingBuffer=d;f=a.h7;if(b.ox)a.nj=f.getContext("webgl2",e);a:{if(b.ox){d=a.nj;if(d!==null){if(!b.op)f=AIN(d);else{f=new Lf;Kp(f,d);}a.pZ=f;a.k3=f;break a;}}f=f.getContext("webgl",e);a.nj=f;if(!b.op)d=AHQ(f);else{d=new QG;Jc(d,f);}a.k3
=d;}d=a.k3.co(7938);c=a.k3.co(7936);g=a.k3.co(7937);a.rs=AEK(ID,d,c,g);h=b.l9;if(!(h<0&&b.kO<0)){if(h&&b.kO?1:0)Hx(a,h,b.kO);else{i=Fs;h=i.jf.document.documentElement.clientWidth-b.ns|0;j=i.jf.document.documentElement.clientHeight-b.oA|0;k=!b.mC?1.0:devicePixelRatio||1;Hx(a,k*h|0,k*j|0);}}b=a.h7;d=new Jl;d.re=a;SN(b,BL(d,"fullscreenChanged"));},
AFb=a=>{let b=new HT();ABG(b,a);return b;},
V2=a=>{let b,c,d;b=CZ();c=Z1(Nn(b,a.m3))/1000.0;a.pO=c;a.m3=b;c=a.mP+c;a.mP=c;d=a.ow+1|0;a.ow=d;if(c>1.0){a.oC=d;a.mP=0.0;a.ow=0;}},
Hx=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m;a:{d=a.h7;e=b;d.width=e;d=a.h7;e=c;d.height=e;if(a.qE.mC){f=devicePixelRatio||1;e=a.h7.style;g=b/f;Gp();h=new K;h.g$=G(16);Me(h,h.g8,g);F(h,h.g8,A(98));i=new H;j=h.g$;k=j.data;l=h.g8;b=k.length;if(l>=0&&l<=(b-0|0)){i.g9=L(j.data,0,l);e.setProperty("width",Br(i));f=c/f;i=new K;i.g$=G(16);Me(i,i.g8,f);F(i,i.g8,A(98));h=new H;j=i.g$;k=j.data;c=i.g8;m=k.length;if(c<0)break a;if(c>(m-0|0))break a;h.g9=L(j.data,0,c);e.setProperty("height",Br(h));}else{d=new I;d.g_=1;d.ha=1;E(d);}}return;}d
=new I;d.g_=1;d.ha=1;E(d);},
T5=()=>{AIZ=0;AF2=Cr(51,0.800000011920929);},
SN=(b,c)=>{if(b.requestFullscreen){document.addEventListener("fullscreenchange",c,false);}if(b.webkitRequestFullScreen){document.addEventListener("webkitfullscreenchange",c,false);}if(b.mozRequestFullScreen){document.addEventListener("mozfullscreenchange",c,false);}if(b.msRequestFullscreen){document.addEventListener("msfullscreenchange",c,false);}};
function KI(){let a=this;C.call(a);a.n9=null;a.nQ=null;a.n4=null;a.od=null;a.of=null;a.po=null;a.md=null;a.nO=0;a.mi=null;}
let AAI=(a,b,c,d)=>{let e;a.n9=DI(51,0.800000011920929);a.nQ=DI(51,0.800000011920929);a.n4=DI(51,0.800000011920929);a.od=DI(51,0.800000011920929);a.of=DI(51,0.800000011920929);a.po=DI(51,0.800000011920929);e=new Cy;e.iK=1;e.hX=R(C,16);a.md=e;a.nO=(-1);a.mi=b;AGB(a,c,d);},
ACX=(a,b,c)=>{let d=new KI();AAI(d,a,b,c);return d;},
AGB=(a,b,c)=>{let d,e,f;d=c.jy;if(d.o5!==null){e=b.ownerDocument;f=new Io;f.r5=a;e.addEventListener("dragenter",BL(f,"handleEvent"),!!0);f=new Ip;f.sr=a;e.addEventListener("dragover",BL(f,"handleEvent"),!!0);f=new In;f.o9=a;f.oW=c;f.oP=d;e.addEventListener("drop",BL(f,"handleEvent"));}},
Zp=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;if(ZD(a,b.nF)){b.mk=b.qJ;b.k9=1;b.kV=0;b.i7=0;return 0;}if(b.i7)return 0;b.kV=0;b.k9=0;b.i7=1;c=b.nF;d=b.pe;e=b.o6;f=new MJ;f.sD=a;f.iW=b;b=ET;g=a.mi;h=new K;h.g$=G(16);i=h.g8;if(g===null)g=A(2);Cw(h,i,g);Cw(h,h.g8,A(69));g=new H;j=h.g$;k=j.data;l=h.g8;m=k.length;if(l>=0&&l<=(m-0|0)){g.g9=L(j.data,0,l);h=new K;h.g$=G(16);F(h,h.g8,g);F(h,h.g8,c===null?A(2):c);g=new H;k=h.g$;j=k.data;m=h.g8;i=j.length;if(m>=0&&m<=(i-0|0)){g.g9=L(k.data,0,m);h=new MH;h.lO=a;h.i0=f;h.lX=d;h.lH
=c;Vs(b,1,g,d,e,h);return 1;}b=new I;Y(b);E(b);}b=new I;E4(b);E(b);},
Fg=(a,b,c,d)=>{a:{J0();switch(K8.data[b.hm]){case 1:break;case 2:DE(a.nQ,c,d);break a;case 3:DE(a.of,c,d);break a;case 4:DE(a.n4,c,d);break a;case 5:DE(a.n9,c,null);break a;default:break a;}DE(a.od,c,d);}},
ZD=(a,b)=>{let c;c=Du(a.od,b)<0?0:1;return !c&&!(Du(a.nQ,b)<0?0:1)&&!(Du(a.of,b)<0?0:1)&&!(Du(a.n4,b)<0?0:1)&&!(Du(a.n9,b)<0?0:1)?0:1;};
let CM=D();
let ACo=(a,b)=>{return;};
let OD=D(0);
let Do=D(0);
function I4(){let a=this;C.call(a);a.hU=null;a.lq=0;a.kZ=null;a.jE=null;a.iR=null;a.iQ=null;a.jb=null;a.jc=null;a.mJ=null;a.lz=0;a.nb=null;a.mG=0;a.nR=null;a.os=null;a.nP=null;a.lb=null;a.j$=BM;a.la=0;}
let AJ0=b=>{let c,d,e,f;c=Fe;d=0.0;e=b.detail;f=b.wheelDelta;if(c.firefox?1:0)d=(c.macOS?1:0)?1.0*e:1.0*e/3.0;else if(c.opera?1:0)d=!(c.linux?1:0)?(-1.0)*f/40.0:(-1.0)*f/80.0;else if(!(!(c.chrome?1:0)&&!(c.safari?1:0)&&!(c.IE?1:0))){d=(-1.0)*f;e=d/120.0;if(TT(e)>=1.0)d=e;else if(!(c.windows?1:0))d=!(c.macOS?1:0)?e:d/3.0;}return d;},
AEQ=(a,b)=>{a.lq=0;a.kZ=Cr(20,0.800000011920929);a.jE=Kj(20);a.iR=S(20);a.iQ=S(20);a.jb=S(20);a.jc=S(20);a.mJ=K_(51,0.800000011920929);a.lz=0;a.nb=Kj(256);a.mG=0;a.nR=Kj(256);a.os=Kj(5);a.nP=K_(51,0.800000011920929);a.la=1;a.hU=b;ACx(a);},
Ut=a=>{let b=new I4();AEQ(b,a);return b;},
ACx=a=>{let b;b=a.hU.ownerDocument;b.addEventListener("mousedown",BL(a,"handleEvent"),!!0);b.addEventListener("mouseup",BL(a,"handleEvent"),!!0);b.addEventListener("mousemove",BL(a,"handleEvent"),!!0);b.addEventListener("wheel",BL(a,"handleEvent"),!!0);b.addEventListener("keydown",BL(a,"handleEvent"),!!0);b.addEventListener("keyup",BL(a,"handleEvent"),!!0);b.addEventListener("keypress",BL(a,"handleEvent"),!!0);a.hU.addEventListener("touchstart",BL(a,"handleEvent"),!!1);a.hU.addEventListener("touchmove",BL(a,
"handleEvent"),!!1);a.hU.addEventListener("touchcancel",BL(a,"handleEvent"),!!1);a.hU.addEventListener("touchend",BL(a,"handleEvent"),!!1);},
AC0=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v;c=V(b.type);if(c!==A(99)){if(!(A(99) instanceof H))d=0;else{e=A(99);d=c.g9!==e.g9?0:1;}}else d=1;a:{if(!d){if(c===A(100))d=1;else if(!(A(100) instanceof H))d=0;else{e=A(100);d=c.g9!==e.g9?0:1;}if(!d){if(c===A(101))d=1;else if(!(A(101) instanceof H))d=0;else{e=A(101);d=c.g9!==e.g9?0:1;}if(d){if(!(JT(a.hU)?1:0)){f=FQ(a,b,a.hU);g=F3(a,b,a.hU);h=a.iR.data;i=f-h[0]|0;j=a.iQ.data;d=g-j[0]|0;a.jb.data[0]=i;a.jc.data[0]=d;h[0]=f;j[0]=g;}else{k=b.movementX|0;i=
b.movementY|0;a.jb.data[0]=k;a.jc.data[0]=i;h=a.iR.data;h[0]=h[0]+b.movementX|0;h=a.iQ.data;h[0]=h[0]+b.movementY|0;}a.j$=C7(performance.now()*1000000.0);a.lb!==null&&!a.jE.data[0];}else{if(c===A(102))d=1;else if(!(A(102) instanceof H))d=0;else{e=A(102);d=c.g9!==e.g9?0:1;}if(d){if(a.lb!==null)AJ0(b);a.j$=C7(performance.now()*1000000.0);}else{if(c===A(103))d=1;else if(!(A(103) instanceof H))d=0;else{e=A(103);d=c.g9!==e.g9?0:1;}if(d){a.lq=1;l=b.changedTouches;d=0;i=l.length;while(d<i){e=l.item(d);k=e.identifier;m
=a.kZ;g=0;b:{while(true){if(g>=20){g=(-1);break b;}n=a.kZ;if(g>=(-128)&&g<=127){DP();o=De.data[g+128|0];}else{o=new Ed;o.js=g;}if(!AJ6(n,o,0))break;g=g+1|0;}}if(g>=(-128)&&g<=127){DP();n=De.data[g+128|0];}else{n=new Ed;n.js=g;}Cd(m,k,n);a.jE.data[g]=1;h=a.iR;o=a.hU;p=o.width*1.0/o.clientWidth;k=(e.clientX-(EA(a,o)|0)|0)+(o.scrollLeft|0)|0;n=o.ownerDocument;m=V(n.compatMode);if(m===A(104))f=1;else if(!(A(104) instanceof H))f=0;else{o=A(104);f=m.g9!==o.g9?0:1;}if(f)n=n.documentElement;h=h.data;p=p*(k+(n.scrollLeft
|0)|0);h[g]=p+CY(p)*0.5|0;h=a.iQ;o=a.hU;p=o.height*1.0/o.clientHeight;k=(e.clientY-(EZ(a,o)|0)|0)+(o.scrollTop|0)|0;e=o.ownerDocument;o=V(e.compatMode);if(o===A(104))f=1;else if(!(A(104) instanceof H))f=0;else{n=A(104);f=o.g9!==n.g9?0:1;}if(f)e=e.documentElement;h=h.data;p=p*(k+(e.scrollTop|0)|0);h[g]=p+CY(p)*0.5|0;a.jb.data[g]=0;a.jc.data[g]=0;d=d+1|0;}a.j$=C7(performance.now()*1000000.0);b.preventDefault();}}}}else{if(!a.jE.data[0])return;e=a.mJ;d=b.button;AIn(e,!d?0:d==2?1:d!=1?0:2);h=a.jE;h.data[0]=a.mJ.i9
<=0?0:1;if(!(JT(a.hU)?1:0)){k=FQ(a,b,a.hU)-a.iR.data[0]|0;i=F3(a,b,a.hU)-a.iQ.data[0]|0;a.jb.data[0]=k;a.jc.data[0]=i;a.iR.data[0]=FQ(a,b,a.hU);a.iQ.data[0]=F3(a,b,a.hU);}else{k=b.movementX|0;i=b.movementY|0;a.jb.data[0]=k;a.jc.data[0]=i;h=a.iR.data;h[0]=h[0]+b.movementX|0;h=a.iQ.data;h[0]=h[0]+b.movementY|0;}a.j$=C7(performance.now()*1000000.0);a.jE.data[0]=0;if(a.lb!==null){d=b.button;d&&d!=2&&d!=1;}}}else{window.focus();m=b.target;n=a.hU;if(m!==n?0:1){h=a.jE.data;if(!h[0]){a.la=1;a.lq=1;h[0]=1;d=b.button;q
=!d?0:d==2?1:d!=1?0:2;V3(a.mJ,q);a.os.data[q]=1;a.jb.data[0]=0;a.jc.data[0]=0;if(!(JT(a.hU)?1:0)){f=FQ(a,b,a.hU);g=F3(a,b,a.hU);a.iR.data[0]=f;a.iQ.data[0]=g;}else{h=a.iR.data;h[0]=h[0]+b.movementX|0;h=a.iQ.data;h[0]=h[0]+b.movementY|0;}a.j$=C7(performance.now()*1000000.0);if(a.lb!==null){d=b.button;d&&d!=2&&d!=1;}b.preventDefault();b.stopPropagation();break a;}}p=FQ(a,b,n);r=F3(a,b,a.hU);if(!(p>=0.0&&p<=Cl.h7.width&&r>=0.0&&r<=Cl.h7.height))a.la=0;return;}}if(c===A(105))d=1;else if(!(A(105) instanceof H))d
=0;else{e=A(105);d=c.g9!==e.g9?0:1;}if(d){l=b.changedTouches;d=0;s=l.length;while(d<s){o=l.item(d);k=o.identifier;e=a.kZ;if(!k)e=!e.hw?null:e.hu;else{h=e.hs;i=Bd(X(U(O(k),B(2135587861, 2654435769)),e.hy));c:{while(true){f=h.data[i];if(!f){i= -(i+1|0)|0;break c;}if(f==k)break;i=(i+1|0)&e.hv;}}e=i<0?null:e.ht.data[i];}t=e.js;e=a.hU;p=e.width*1.0/e.clientWidth;k=(o.clientX-(EA(a,e)|0)|0)+(e.scrollLeft|0)|0;e=e.ownerDocument;m=V(e.compatMode);if(m===A(104))i=1;else if(!(A(104) instanceof H))i=0;else{n=A(104);i=
m.g9!==n.g9?0:1;}if(i)e=e.documentElement;p=p*(k+(e.scrollLeft|0)|0);k=(p+CY(p)*0.5|0)-a.iR.data[t]|0;e=a.hU;p=e.height*1.0/e.clientHeight;i=(o.clientY-(EZ(a,e)|0)|0)+(e.scrollTop|0)|0;e=e.ownerDocument;m=V(e.compatMode);if(m===A(104))f=1;else if(!(A(104) instanceof H))f=0;else{n=A(104);f=m.g9!==n.g9?0:1;}if(f)e=e.documentElement;p=p*(i+(e.scrollTop|0)|0);i=(p+CY(p)*0.5|0)-a.iQ.data[t]|0;a.jb.data[t]=k;a.jc.data[t]=i;h=a.iR;e=a.hU;p=e.width*1.0/e.clientWidth;k=(o.clientX-(EA(a,e)|0)|0)+(e.scrollLeft|0)|0;e=
e.ownerDocument;m=V(e.compatMode);if(m===A(104))i=1;else if(!(A(104) instanceof H))i=0;else{n=A(104);i=m.g9!==n.g9?0:1;}if(i)e=e.documentElement;h=h.data;p=p*(k+(e.scrollLeft|0)|0);h[t]=p+CY(p)*0.5|0;h=a.iQ;e=a.hU;p=e.height*1.0/e.clientHeight;k=(o.clientY-(EZ(a,e)|0)|0)+(e.scrollTop|0)|0;e=e.ownerDocument;o=V(e.compatMode);if(o===A(104))i=1;else if(!(A(104) instanceof H))i=0;else{n=A(104);i=o.g9!==n.g9?0:1;}if(i)e=e.documentElement;h=h.data;p=p*(k+(e.scrollTop|0)|0);h[t]=p+CY(p)*0.5|0;d=d+1|0;}a.j$=C7(performance.now()
*1000000.0);b.preventDefault();}if(c===A(106))d=1;else if(!(A(106) instanceof H))d=0;else{e=A(106);d=c.g9!==e.g9?0:1;}if(d){l=b.changedTouches;d=0;i=l.length;while(d<i){o=l.item(d);u=o.identifier;e=a.kZ;if(!u)n=!e.hw?null:e.hu;else{h=e.hs;k=Bd(X(U(O(u),B(2135587861, 2654435769)),e.hy));d:{while(true){f=h.data[k];if(!f){k= -(k+1|0)|0;break d;}if(f==u)break;k=(k+1|0)&e.hv;}}n=k<0?null:e.ht.data[k];}t=n.js;QH(e,u);a.jE.data[t]=0;e=a.hU;p=e.width*1.0/e.clientWidth;k=(o.clientX-(EA(a,e)|0)|0)+(e.scrollLeft|0)|0;e
=e.ownerDocument;m=V(e.compatMode);if(m===A(104))f=1;else if(!(A(104) instanceof H))f=0;else{n=A(104);f=m.g9!==n.g9?0:1;}if(f)e=e.documentElement;p=p*(k+(e.scrollLeft|0)|0);v=p+CY(p)*0.5|0;e=a.hU;p=e.height*1.0/e.clientHeight;k=(o.clientY-(EZ(a,e)|0)|0)+(e.scrollTop|0)|0;e=e.ownerDocument;o=V(e.compatMode);if(o===A(104))f=1;else if(!(A(104) instanceof H))f=0;else{n=A(104);f=o.g9!==n.g9?0:1;}if(f)e=e.documentElement;p=p*(k+(e.scrollTop|0)|0);g=p+CY(p)*0.5|0;h=a.iR.data;k=v-h[t]|0;j=a.iQ.data;f=g-j[t]|0;a.jb.data[t]
=k;a.jc.data[t]=f;h[t]=v;j[t]=g;d=d+1|0;}a.j$=C7(performance.now()*1000000.0);b.preventDefault();}if(c===A(107))d=1;else if(!(A(107) instanceof H))d=0;else{e=A(107);d=c.g9!==e.g9?0:1;}if(d){l=b.changedTouches;d=0;s=l.length;while(d<s){o=l.item(d);k=o.identifier;e=a.kZ;if(!k)c=!e.hw?null:e.hu;else{h=e.hs;i=Bd(X(U(O(k),B(2135587861, 2654435769)),e.hy));e:{while(true){f=h.data[i];if(!f){i= -(i+1|0)|0;break e;}if(f==k)break;i=(i+1|0)&e.hv;}}c=i<0?null:e.ht.data[i];}t=c.js;QH(e,k);a.jE.data[t]=0;e=a.hU;p=e.width
*1.0/e.clientWidth;k=(o.clientX-(EA(a,e)|0)|0)+(e.scrollLeft|0)|0;e=e.ownerDocument;n=V(e.compatMode);if(n===A(104))i=1;else if(!(A(104) instanceof H))i=0;else{c=A(104);i=n.g9!==c.g9?0:1;}if(i)e=e.documentElement;p=p*(k+(e.scrollLeft|0)|0);g=p+CY(p)*0.5|0;e=a.hU;p=e.height*1.0/e.clientHeight;k=(o.clientY-(EZ(a,e)|0)|0)+(e.scrollTop|0)|0;e=e.ownerDocument;n=V(e.compatMode);if(n===A(104))i=1;else if(!(A(104) instanceof H))i=0;else{c=A(104);i=n.g9!==c.g9?0:1;}if(i)e=e.documentElement;p=p*(k+(e.scrollTop|0)|0);f
=p+CY(p)*0.5|0;h=a.iR.data;k=g-h[t]|0;j=a.iQ.data;i=f-j[t]|0;a.jb.data[t]=k;a.jc.data[t]=i;h[t]=g;j[t]=f;d=d+1|0;}a.j$=C7(performance.now()*1000000.0);b.preventDefault();}},
Sm=(a,b)=>{let c,d,e,f,g,h;c=V(b.type);if(c===A(108))d=1;else if(!(A(108) instanceof H))d=0;else{e=A(108);d=c.g9!==e.g9?0:1;}if(d&&a.la){a:{f=NS(b.keyCode);switch(f){case 67:break;case 112:break a;default:break a;}}e=a.nP;if(!f)d=e.k5;else{g=e.j6;d=Bd(X(U(O(f),B(2135587861, 2654435769)),e.kT));b:{while(true){h=g.data[d];if(!h){d= -(d+1|0)|0;break b;}if(h==f)break;d=(d+1|0)&e.jZ;}}d=d<0?0:1;}if(d)b.preventDefault();if(!(f!=67&&f!=112))b.preventDefault();else{g=a.nb.data;if(!g[f]){a.lz=a.lz+1|0;g[f]=1;a.mG=1;a.nR.data[f]
=1;}}if(f==61){b.preventDefault();b.stopPropagation();}}else{if(c===A(109))d=1;else if(!(A(109) instanceof H))d=0;else{e=A(109);d=c.g9!==e.g9?0:1;}if(!(d&&a.la)){if(c===A(110))d=1;else if(!(A(110) instanceof H))d=0;else{e=A(110);d=c.g9!==e.g9?0:1;}if(d&&a.la){f=NS(b.keyCode);e=a.nP;if(!f)d=e.k5;else{g=e.j6;d=Bd(X(U(O(f),B(2135587861, 2654435769)),e.kT));c:{while(true){h=g.data[d];if(!h){d= -(d+1|0)|0;break c;}if(h==f)break;d=(d+1|0)&e.jZ;}}d=d<0?0:1;}if(d)b.preventDefault();g=a.nb.data;if(g[f]){a.lz=a.lz-1|
0;g[f]=0;}if(f==61){b.preventDefault();b.stopPropagation();}}}else if((b.charCode&65535)==9){b.preventDefault();b.stopPropagation();}}},
Nq=a=>{let b,c,d;a:{if(a.lq){a.lq=0;b=0;while(true){c=a.os.data;if(b>=c.length)break a;c[b]=0;b=b+1|0;}}}b:{if(a.mG){a.mG=0;d=0;while(true){c=a.nR.data;if(d>=c.length)break b;c[d]=0;d=d+1|0;}}}},
FQ=(a,b,c)=>{let d,e,f,g;d=c.width*1.0/c.clientWidth;e=(b.clientX-(EA(a,c)|0)|0)+(c.scrollLeft|0)|0;b=c.ownerDocument;f=V(b.compatMode);if(f===A(104))g=1;else if(!(A(104) instanceof H))g=0;else{c=A(104);g=f.g9!==c.g9?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollLeft|0)|0);return d+CY(d)*0.5|0;},
F3=(a,b,c)=>{let d,e,f,g;d=c.height*1.0/c.clientHeight;e=(b.clientY-(EZ(a,c)|0)|0)+(c.scrollTop|0)|0;b=c.ownerDocument;f=V(b.compatMode);if(f===A(104))g=1;else if(!(A(104) instanceof H))g=0;else{c=A(104);g=f.g9!==c.g9?0:1;}if(g)b=b.documentElement;d=d*(e+(b.scrollTop|0)|0);return d+CY(d)*0.5|0;},
EZ=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollTop;d=d.parentNode;}while(b!==null){c=c+b.offsetTop;b=d.offsetParent;}return c;},
EA=(a,b)=>{let c,d;c=0.0;d=b;while(d.offsetParent!==null){c=c-d.scrollLeft;d=d.parentNode;}while(b!==null){c=c+b.offsetLeft;b=d.offsetParent;}return c;},
W5=(a,b)=>{a.lb=b;},
JT=b=>{if(document.pointerLockElement===canvas||document.mozPointerLockElement===canvas){return true;}return false;},
SX=(a,b)=>{AC0(a,b);Sm(a,b);};
let N7=D(0);
function PC(){C.call(this);this.sn=null;}
function OZ(){C.call(this);this.rU=null;}
let OS=D(0);
let M6=D();
let LO=D(0);
function OV(){let a=this;C.call(a);a.rV=0;a.mm=0;a.rr=null;a.nW=null;}
let PM=b=>{if("clipboard" in navigator){navigator.clipboard.writeText(b);}};
let ADf=D();
let Dc=null,Cl=null,ABA=null,Mk=null,AA8=null,AFn=null,D0=null,Bx=null,En=null;
let PF=D(0);
let O1=D(0);
function MB(){C.call(this);this.qp=null;}
function Hz(){C.call(this);this.mZ=null;}
let Xg=(a,b)=>{let c,d,$$je;c=V(a.mZ.j7.jf.document.visibilityState);if(A(111)===c)d=1;else if(!(c instanceof H))d=0;else{c=c;d=A(111).g9!==c.g9?0:1;}if(!d){b=a.mZ.l5;Er(b);a:{try{c=Nr(b);while(NF(c)){AC3(L0(c));}CO(b);break a;}catch($$e){$$je=BP($$e);c=$$je;}CO(b);E(c);}}else{b=a.mZ.l5;Er(b);b:{try{c=Nr(b);while(NF(c)){AGF(L0(c));}CO(b);break b;}catch($$e){$$je=BP($$e);c=$$je;}CO(b);E(c);}}},
AFk=(a,b)=>{Xg(a,b);};
function HA(){C.call(this);this.ly=null;}
let AKB=(a,b)=>{let c,d,e,f,g;c=a.ly.j7.jf.document.documentElement.clientWidth;b=a.ly;d=c-b.jy.ns|0;e=b.j7.jf.document.documentElement.clientHeight;b=a.ly;f=b.jy;c=e-f.oA|0;if(d>0&&c>0){if(b.kb!==null){if(f.mC){g=devicePixelRatio||1;d=d*g|0;c=c*g|0;}Hx(a.ly.kb,d,c);}return;}},
AJr=(a,b)=>{AKB(a,b);};
let Bs=D(BA);
let AHE=D();
let Uf=D();
let G8=(b,c)=>{let d,e,f,g,h,i,j;if(b<0){d=new Bs;e=new K;e.g$=G(16);F(e,e.g8,A(112));J(e,e.g8,b,10);f=new H;g=e.g$;h=g.data;i=e.g8;j=h.length;if(i>=0&&i<=(j-0|0)){f.g9=L(g.data,0,i);d.g_=1;d.ha=1;d.hc=f;E(d);}d=new I;d.g_=1;d.ha=1;E(d);}j=Mb(b/c)|0;if(2>j)j=2;i=Xq(j);if(i<=1073741824)return i;d=new Bs;e=new K;e.g$=G(16);F(e,e.g8,A(113));J(e,e.g8,b,10);f=new H;g=e.g$;h=g.data;i=e.g8;j=h.length;if(i>=0&&i<=(j-0|0)){f.g9=L(g.data,0,i);d.g_=1;d.ha=1;d.hc=f;E(d);}d=new I;d.g_=1;d.ha=1;E(d);};
let ABd=D(Dr);
let LW=null;
let AHz=(b,c,d,e)=>{let f,g,h,i,j,k,l,m,n,o,p;if(e>=2&&e<=36){if(c==d){b=new B0;b.g_=1;b.ha=1;b.hc=A(53);E(b);}f=0;if(c>=0&&c<b.g9.length){a:{switch(b.g9.charCodeAt(c)){case 43:g=c+1|0;break a;case 45:f=1;g=c+1|0;break a;default:}g=c;}h=BM;i=O(e);j=Cj(O(1),Jy(B(4294967295, 2147483647),i));if(g==d){b=new B0;b.g_=1;b.ha=1;E(b);}b:{while(g<d){k=g+1|0;if(g<0)break b;if(g>=b.g9.length)break b;g=ZA(b.g9.charCodeAt(g));if(g<0){l=new B0;b=Cc(b,c,d);m=new K;m.g$=G(16);F(m,m.g8,A(54));c=m.g8;if(b===null)b=A(2);F(m,c,
b);b=new H;n=m.g$;o=n.data;d=m.g8;e=o.length;if(d>=0&&d<=(e-0|0)){b.g9=L(n.data,0,d);l.g_=1;l.ha=1;l.hc=b;E(l);}b=new I;b.g_=1;b.ha=1;Bl(b);E(b);}if(g>=e){l=new B0;p=Cc(b,c,d);b=new K;b.g$=G(16);F(b,b.g8,A(55));J(b,b.g8,e,10);F(b,b.g8,A(51));c=b.g8;if(p===null)p=A(2);F(b,c,p);m=new H;n=b.g$;o=n.data;d=b.g8;e=o.length;if(d>=0&&d<=(e-0|0)){m.g9=L(n.data,0,d);l.g_=1;l.ha=1;l.hc=m;E(l);}b=new I;b.g_=1;b.ha=1;Bl(b);E(b);}if(Ww(h,j)){b=new B0;b.g_=1;b.ha=1;b.hc=A(114);E(b);}h=Cj(U(i,h),O(g));if(ALj(h,BM)){if(k==d
&&C6(h,B(0, 2147483648))&&f)return B(0, 2147483648);l=new B0;p=Cc(b,c,d);m=new K;m.g$=G(16);F(m,m.g8,A(115));c=m.g8;if(p===null)p=A(2);F(m,c,p);b=new H;n=m.g$;o=n.data;e=m.g8;c=o.length;if(e>=0&&e<=(c-0|0)){b.g9=L(n.data,0,e);l.g_=1;l.ha=1;l.hc=b;E(l);}b=new I;b.g_=1;b.ha=1;Bl(b);E(b);}g=k;}if(f)h=ALP(h);return h;}b=new Q;b.g_=1;b.ha=1;E(b);}b=new Q;b.g_=1;b.ha=1;E(b);}b=new B0;l=new K;l.g$=G(16);F(l,l.g8,A(58));J(l,l.g8,e,10);m=new H;n=l.g$;o=n.data;d=l.g8;e=o.length;if(d>=0&&d<=(e-0|0)){m.g9=L(n.data,0,d);b.g_
=1;b.ha=1;b.hc=m;E(b);}b=new I;b.g_=1;b.ha=1;Bl(b);E(b);},
ZA=b=>{if(b>=48&&b<=57)return b-48|0;if(b>=97&&b<=122)return (b-97|0)+10|0;if(b>=65&&b<=90)return (b-65|0)+10|0;return (-1);},
DV=b=>{let c,d;if(C6(b,BM))return 64;c=0;d=X(b,32);if(Xb(d,BM))c=32;else d=b;b=X(d,16);if(C6(b,BM))b=d;else c=c|16;d=X(b,8);if(C6(d,BM))d=b;else c=c|8;b=X(d,4);if(C6(b,BM))b=d;else c=c|4;d=X(b,2);if(C6(d,BM))d=b;else c=c|2;if(Xb(X(d,1),BM))c=c|1;return (64-c|0)-1|0;},
DF=(b,c)=>{return ALS(b,c);},
DU=(b,c)=>{return ALQ(b,c);},
ALv=()=>{LW=Bk(ACG);};
let AAO=D();
let WK=()=>{return {};};
let IY=D(0);
function Fb(){let a=this;C.call(a);a.hh=null;a.kq=0;a.kk=0;a.jv=0;a.rv=0;a.rC=0;a.rF=0;a.kx=0;a.h3=null;a.ip=null;a.jU=null;a.r6=null;a.rI=null;a.rj=null;a.iX=null;a.jw=0;a.lZ=null;a.kt=null;a.lt=null;a.l3=null;a.rg=null;}
let Jc=(a,b)=>{a.kq=1;a.kk=1;a.jv=1;a.rv=1;a.rC=1;a.rF=1;a.kx=1;a.h3=Cr(51,0.800000011920929);a.ip=Cr(51,0.800000011920929);a.jU=Cr(51,0.800000011920929);a.r6=Cr(51,0.800000011920929);a.rI=Cr(51,0.800000011920929);a.rj=Cr(51,0.800000011920929);a.iX=Cr(51,0.800000011920929);a.jw=0;a.lZ=new Float32Array(40000);a.kt=new Int32Array(12000);a.lt=new Int16Array(12000);a.l3=new Int8Array(12000);a.rg=new Uint8Array(240000);a.hh=b;b.pixelStorei(37441,0);},
AHQ=a=>{let b=new Fb();Jc(b,a);return b;},
AKp=(a,b)=>{let c,d,e,f,g;if(FR){c=(!G_(b,Dv)?null:b.kd.h8.data).buffer;d=b.hn;e=b.hg-d|0;return new Float32Array(c,d,e);}if((b.hg-b.hn|0)>a.lZ.length)a.lZ=new Float32Array(b.hg-b.hn|0);e=b.hn;d=0;while(true){f=b.hg;if(e>=f)break;c=a.lZ;g=AAf(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.lZ;e=f-b.hn|0;return c.subarray(0,e);},
ABn=(a,b)=>{let c,d,e,f,g;if(FR){c=(!G_(b,Dv)?null:b.lh.h8.data).buffer;d=b.hn;e=b.hg-d|0;return new Int16Array(c,d,e);}if((b.hg-b.hn|0)>a.lt.length)a.lt=new Int16Array(b.hg-b.hn|0);e=b.hn;d=0;while(true){f=b.hg;if(e>=f)break;c=a.lt;g=AFB(b,e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.lt;e=f-b.hn|0;return c.subarray(0,e);},
AII=(a,b)=>{let c,d,e,f,g;if(FR){c=(!G_(b,Dv)?null:b.cV()).buffer;d=b.hn;e=b.hg-d|0;return new Int32Array(c,d,e);}if((b.hg-b.hn|0)>a.kt.length)a.kt=new Int32Array(b.hg-b.hn|0);e=b.hn;d=0;while(true){f=b.hg;if(e>=f)break;c=a.kt;g=b.cW(e);c[d]=g;e=e+1|0;d=d+1|0;}c=a.kt;e=f-b.hn|0;return c.subarray(0,e);},
ACW=(a,b)=>{let c,d,e,f,g;if(FR)return !G_(b,Dv)?null:b.cV();if((b.hg-b.hn|0)>a.l3.length)a.l3=new Int8Array(b.hg-b.hn|0);c=b.hn;d=0;while(true){e=b.hg;if(c>=e)break;f=a.l3;g=b.cX(c);f[d]=g;c=c+1|0;d=d+1|0;}f=a.l3;c=e-b.hn|0;return f.subarray(0,c);},
AMc=(a,b)=>{if((b.hg-b.hn|0)>a.kt.length)a.kt=new Int32Array(b.hg-b.hn|0);},
AK0=(a,b)=>{let c,d,e,f,g;c=a.iX;d=a.jw;if(!d)c=!c.hw?null:c.hu;else{e=c.hs;f=Bd(X(U(O(d),B(2135587861, 2654435769)),c.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==d)break;f=(f+1|0)&c.hv;}}c=f<0?null:c.ht.data[f];}c=c;if(!b)c=!c.hw?null:c.hu;else{e=c.hs;d=Bd(X(U(O(b),B(2135587861, 2654435769)),c.hy));b:{while(true){f=e.data[d];if(!f){d= -(d+1|0)|0;break b;}if(f==b)break;d=(d+1|0)&c.hv;}}c=d<0?null:c.ht.data[d];}Bp();return c===null?null:c[Be]===true?c:c.hA;},
YT=(a,b,c)=>{let d,e,f,g,h,i;d=a.h3;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hA;d=a.ip;if(!c)d=!d.hw?null:d.hu;else{e=d.hs;b=Bd(X(U(O(c),B(2135587861, 2654435769)),d.hy));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.hv;}}d=b<0?null:d.ht.data[b];}i=d===null?null:d[Be]===true?d:d.hA;a.hh.attachShader(h,
i);},
AJl=(a,b,c)=>{let d,e,f,g,h;d=a.hh;e=a.jU;if(!c)e=!e.hw?null:e.hu;else{f=e.hs;g=Bd(X(U(O(c),B(2135587861, 2654435769)),e.hy));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.hv;}}e=g<0?null:e.ht.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hA;d.bindBuffer(b,e);},
Ih=(a,b,c,d,e)=>{let f,g;if(d instanceof E2){f=a.hh;d=AKp(a,d);f.bufferData(b,d,e);}else if(d instanceof Gn){f=a.hh;d=AII(a,d);f.bufferData(b,d,e);}else if(d instanceof Gr){f=a.hh;d=ABn(a,d);f.bufferData(b,d,e);}else if(d instanceof EF){f=a.hh;g=ACW(a,d);f.bufferData(b,g,e);}else{if(d!==null){f=new Bf;f.g_=1;f.ha=1;f.hc=A(116);E(f);}a.hh.bufferData(b,c,e);}},
AHf=(a,b)=>{a.hh.clear(b);},
Vj=(a,b,c,d,e)=>{a.hh.clearColor(b,c,d,e);},
ZJ=(a,b)=>{let c,d,e,f;c=a.ip;if(!b)c=!c.hw?null:c.hu;else{d=c.hs;e=Bd(X(U(O(b),B(2135587861, 2654435769)),c.hy));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.hv;}}c=e<0?null:c.ht.data[e];}Bp();c=c===null?null:c[Be]===true?c:c.hA;a.hh.compileShader(c);},
AJZ=a=>{let b,c;b=a.hh.createProgram();c=a.kq;a.kq=c+1|0;Cd(a.h3,c,Ce(b));return c;},
AEG=(a,b)=>{let c,d;c=a.hh.createShader(b);d=a.kk;a.kk=d+1|0;Cd(a.ip,d,Ce(c));return d;},
AEp=(a,b)=>{a.hh.disable(b);},
AC5=(a,b)=>{a.hh.disableVertexAttribArray(b);},
VM=(a,b,c,d)=>{a.hh.drawArrays(b,c,d);},
AAt=(a,b,c,d,e)=>{let f,g;f=a.hh;g=e.hn;f.drawElements(b,c,d,g);},
ACB=(a,b,c,d,e)=>{a.hh.drawElements(b,c,d,e);},
AHS=(a,b)=>{a.hh.enableVertexAttribArray(b);},
ALE=a=>{let b,c;b=a.hh.createBuffer();c=a.jv;a.jv=c+1|0;Cd(a.jU,c,Ce(b));return c;},
HN=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.hh;g=a.h3;if(!b)g=!g.hw?null:g.hu;else{h=g.hs;i=Bd(X(U(O(b),B(2135587861, 2654435769)),g.hy));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.hv;}}g=i<0?null:g.ht.data[i];}Bp();g=g===null?null:g[Be]===true?g:g.hA;g=f.getActiveAttrib(g,c);Dh(d,g.size);Dh(e,g.type);d.hn=0;d.hg=d.hG;d.hF=(-1);e.hn=0;e.hg=e.hG;e.hF=(-1);return V(g.name);},
IS=(a,b,c,d,e)=>{let f,g,h,i,j;f=a.hh;g=a.h3;if(!b)g=!g.hw?null:g.hu;else{h=g.hs;i=Bd(X(U(O(b),B(2135587861, 2654435769)),g.hy));a:{while(true){j=h.data[i];if(!j){i= -(i+1|0)|0;break a;}if(j==b)break;i=(i+1|0)&g.hv;}}g=i<0?null:g.ht.data[i];}Bp();g=g===null?null:g[Be]===true?g:g.hA;g=f.getActiveUniform(g,c);Dh(d,g.size);Dh(e,g.type);d.hn=0;d.hg=d.hG;d.hF=(-1);e.hn=0;e.hg=e.hG;e.hF=(-1);return V(g.name);},
W2=(a,b,c)=>{let d,e,f,g,h;d=a.h3;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hA;return a.hh.getAttribLocation(h,Br(c));},
AJQ=(a,b)=>{let c,d,e,f,g;c=a.hh;d=a.h3;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hA;return V(c.getProgramInfoLog(d));},
I_=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35712&&c!=35714&&c!=35715){e=a.hh;f=a.h3;if(!b)f=!f.hw?null:f.hu;else{g=f.hs;h=Bd(X(U(O(b),B(2135587861, 2654435769)),f.hy));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.hv;}}f=h<0?null:f.ht.data[h];}Bp();f=f===null?null:f[Be]===true?f:f.hA;Dh(d,e.getProgramParameter(f,c));}else{f=a.hh;e=a.h3;if(!b)e=!e.hw?null:e.hu;else{g=e.hs;h=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hy));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i
==b)break;h=(h+1|0)&e.hv;}}e=h<0?null:e.ht.data[h];}Bp();e=e===null?null:e[Be]===true?e:e.hA;Dh(d,!(f.getProgramParameter(e,c)?1:0)?0:1);}d.hn=0;d.hg=d.hG;d.hF=(-1);},
AA5=(a,b)=>{let c,d,e,f,g;c=a.hh;d=a.ip;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hA;return V(c.getShaderInfoLog(d));},
H9=(a,b,c,d)=>{let e,f,g,h,i;if(c!=35713&&c!=35712){e=a.hh;f=a.ip;if(!b)f=!f.hw?null:f.hu;else{g=f.hs;h=Bd(X(U(O(b),B(2135587861, 2654435769)),f.hy));a:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break a;}if(i==b)break;h=(h+1|0)&f.hv;}}f=h<0?null:f.ht.data[h];}Bp();f=f===null?null:f[Be]===true?f:f.hA;Dh(d,e.getShaderParameter(f,c));}else{f=a.hh;e=a.ip;if(!b)e=!e.hw?null:e.hu;else{g=e.hs;h=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hy));b:{while(true){i=g.data[h];if(!i){h= -(h+1|0)|0;break b;}if(i==b)break;h
=(h+1|0)&e.hv;}}e=h<0?null:e.ht.data[h];}Bp();e=e===null?null:e[Be]===true?e:e.hA;Dh(d,!(f.getShaderParameter(e,c)?1:0)?0:1);}d.hn=0;d.hg=d.hG;d.hF=(-1);},
XP=(a,b)=>{return V(a.hh.getParameter(b));},
XJ=(a,b,c)=>{let d,e,f,g,h;d=a.hh;e=a.h3;if(!b)e=!e.hw?null:e.hu;else{f=e.hs;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hy));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.hv;}}e=g<0?null:e.ht.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hA;d=d.getUniformLocation(e,Br(c));if(d===null)return (-1);c=a.iX;if(!b)c=!c.hw?null:c.hu;else{f=c.hs;h=Bd(X(U(O(b),B(2135587861, 2654435769)),c.hy));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&c.hv;}}c
=h<0?null:c.ht.data[h];}c=c;if(c===null){c=Cr(51,0.800000011920929);Cd(a.iX,b,c);}h=a.kx;a.kx=h+1|0;Cd(c,h,Ce(d));return h;},
TQ=(a,b)=>{let c,d,e,f,g;c=a.hh;d=a.h3;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hA;c.linkProgram(d);},
RL=(a,b,c)=>{let d,e,f,g,h;d=a.hh;e=a.ip;if(!b)e=!e.hw?null:e.hu;else{f=e.hs;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hy));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.hv;}}e=g<0?null:e.ht.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hA;d.shaderSource(e,Br(c));},
AEo=(a,b,c)=>{let d,e,f,g,h,i;d=a.iX;e=a.jw;if(!e)d=!d.hw?null:d.hu;else{f=d.hs;g=Bd(X(U(O(e),B(2135587861, 2654435769)),d.hy));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.hv;}}d=g<0?null:d.ht.data[g];}d=d;if(!b)d=!d.hw?null:d.hu;else{f=d.hs;g=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));b:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break b;}if(h==b)break;g=(g+1|0)&d.hv;}}d=g<0?null:d.ht.data[g];}Bp();i=d===null?null:d[Be]===true?d:d.hA;a.hh.uniform1i(i,c);},
XO=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n;g=a.iX;f=a.jw;if(!f)g=!g.hw?null:g.hu;else{h=g.hs;c=Bd(X(U(O(f),B(2135587861, 2654435769)),g.hy));a:{while(true){i=h.data[c];if(!i){c= -(c+1|0)|0;break a;}if(i==f)break;c=(c+1|0)&g.hv;}}g=c<0?null:g.ht.data[c];}g=g;if(!b)g=!g.hw?null:g.hu;else{h=g.hs;c=Bd(X(U(O(b),B(2135587861, 2654435769)),g.hy));b:{while(true){f=h.data[c];if(!f){c= -(c+1|0)|0;break b;}if(f==b)break;c=(c+1|0)&g.hv;}}g=c<0?null:g.ht.data[c];}Bp();j=g===null?null:g[Be]===true?g:g.hA;g=a.hh;k="uniformMatrix4fv";l
=!!d;if(e===null)m=null;else{e=e.data;b=e.length;m=new Array(b);c=0;while(c<b){n=e[c];m[c]=n;c=c+1|0;}}g[k](j,l,m);},
TS=(a,b)=>{let c,d,e,f,g;a.jw=b;c=a.hh;d=a.h3;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hA;c.useProgram(d);},
ABu=(a,b,c,d,e,f,g)=>{a.hh.vertexAttribPointer(b,c,d,!!e,f,g);},
R$=(a,b,c,d,e)=>{a.hh.viewport(b,c,d,e);};
let N5=D(0);
function Hn(){let a=this;Fb.call(a);a.hJ=null;a.sx=null;a.se=0;a.rm=null;a.rA=0;a.rS=null;a.q5=0;a.lS=null;a.lN=0;a.r8=null;}
let Kp=(a,b)=>{Jc(a,b);a.sx=Cr(51,0.800000011920929);a.se=1;a.rm=Cr(51,0.800000011920929);a.rA=1;a.rS=Cr(51,0.800000011920929);a.q5=1;a.lS=Cr(51,0.800000011920929);a.lN=1;a.r8=new Uint32Array(12000);a.hJ=b;},
AIN=a=>{let b=new Hn();Kp(b,a);return b;},
Yv=(a,b)=>{let c,d,e,f,g;c=a.hJ;d=a.lS;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hA;c.bindVertexArray(d);},
ACU=(a,b,c,d,e)=>{a.hJ.drawArraysInstanced(b,c,d,e);},
AKv=(a,b,c,d,e,f)=>{a.hJ.drawElementsInstanced(b,c,d,e,f);},
ADu=(a,b,c)=>{let d,e,f,g;d=c.hn;e=0;while(e<b){f=a.hJ.createVertexArray();g=a.lN;a.lN=g+1|0;Cd(a.lS,g,Ce(f));Dh(c,g);e=e+1|0;}Cu(c,d);};
let Lf=D(Hn);
let W9=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hJ;d=a.lS;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hA;c.bindVertexArray(d);b=a.hJ.getError();if(!b)return;c=new Bf;h=Bj(b,4);d=new K;d.g$=G(16);F(d,d.g8,A(117));J(d,d.g8,b,10);F(d,d.g8,A(118));b=d.g8;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g$;j=e.data;f=d.g8;g=j.length;if(f>=0&&
f<=(g-0|0)){i.g9=L(e.data,0,f);c.g_=1;c.ha=1;c.hc=i;E(c);}c=new I;Y(c);E(c);},
Uv=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.hJ.drawArraysInstanced(b,c,d,e);b=a.hJ.getError();if(!b)return;f=new Bf;g=Bj(b,4);h=new K;h.g$=G(16);F(h,h.g8,A(117));J(h,h.g8,b,10);F(h,h.g8,A(118));b=h.g8;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.g$;k=j.data;c=h.g8;d=k.length;if(c>=0&&c<=(d-0|0)){i.g9=L(j.data,0,c);f.g_=1;f.ha=1;f.hc=i;E(f);}f=new I;Y(f);E(f);},
AJd=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;a.hJ.drawElementsInstanced(b,c,d,e,f);b=a.hJ.getError();if(!b)return;g=new Bf;h=Bj(b,4);i=new K;i.g$=G(16);F(i,i.g8,A(117));J(i,i.g8,b,10);F(i,i.g8,A(118));b=i.g8;if(h===null)h=A(2);F(i,b,h);j=new H;k=i.g$;l=k.data;c=i.g8;d=l.length;if(c>=0&&c<=(d-0|0)){j.g9=L(k.data,0,c);g.g_=1;g.ha=1;g.hc=j;E(g);}g=new I;Y(g);E(g);},
TG=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=c.hn;e=0;while(e<b){f=a.hJ.createVertexArray();g=a.lN;a.lN=g+1|0;Cd(a.lS,g,Ce(f));Dh(c,g);e=e+1|0;}Cu(c,d);b=a.hJ.getError();if(!b)return;c=new Bf;h=Bj(b,4);f=new K;f.g$=G(16);F(f,f.g8,A(117));J(f,f.g8,b,10);F(f,f.g8,A(118));b=f.g8;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.g$;k=j.data;e=f.g8;l=k.length;if(e>=0&&e<=(l-0|0)){i.g9=L(j.data,0,e);c.g_=1;c.ha=1;c.hc=i;E(c);}c=new I;Y(c);E(c);},
AHj=(a,b)=>{let c,d,e,f,g,h,i,j;a.hh.clear(b);b=a.hJ.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g$=G(16);F(e,e.g8,A(117));J(e,e.g8,b,10);F(e,e.g8,A(118));b=e.g8;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g$;h=g.data;i=e.g8;j=h.length;if(i>=0&&i<=(j-0|0)){f.g9=L(g.data,0,i);c.g_=1;c.ha=1;c.hc=f;E(c);}c=new I;Y(c);E(c);},
ABW=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.hh.clearColor(b,c,d,e);f=a.hJ.getError();if(!f)return;g=new Bf;h=Bj(f,4);i=new K;i.g$=G(16);F(i,i.g8,A(117));J(i,i.g8,f,10);F(i,i.g8,A(118));f=i.g8;if(h===null)h=A(2);F(i,f,h);j=new H;k=i.g$;l=k.data;m=i.g8;n=l.length;if(m>=0&&m<=(n-0|0)){j.g9=L(k.data,0,m);g.g_=1;g.ha=1;g.hc=j;E(g);}g=new I;Y(g);E(g);},
AHV=(a,b)=>{let c,d,e,f,g,h,i,j;a.hh.disable(b);b=a.hJ.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g$=G(16);F(e,e.g8,A(117));J(e,e.g8,b,10);F(e,e.g8,A(118));b=e.g8;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g$;h=g.data;i=e.g8;j=h.length;if(i>=0&&i<=(j-0|0)){f.g9=L(g.data,0,i);c.g_=1;c.ha=1;c.hc=f;E(c);}c=new I;Y(c);E(c);},
Wu=(a,b,c,d)=>{let e,f,g,h,i,j;a.hh.drawArrays(b,c,d);b=a.hJ.getError();if(!b)return;e=new Bf;f=Bj(b,4);g=new K;g.g$=G(16);F(g,g.g8,A(117));J(g,g.g8,b,10);F(g,g.g8,A(118));b=g.g8;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.g$;j=i.data;c=g.g8;d=j.length;if(c>=0&&c<=(d-0|0)){h.g9=L(i.data,0,c);e.g_=1;e.ha=1;e.hc=h;E(e);}e=new I;Y(e);E(e);},
AEP=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.hh;g=e.hn;f.drawElements(b,c,d,g);b=a.hJ.getError();if(!b)return;e=new Bf;h=Bj(b,4);f=new K;f.g$=G(16);F(f,f.g8,A(117));J(f,f.g8,b,10);F(f,f.g8,A(118));b=f.g8;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.g$;k=j.data;c=f.g8;d=k.length;if(c>=0&&c<=(d-0|0)){i.g9=L(j.data,0,c);e.g_=1;e.ha=1;e.hc=i;E(e);}e=new I;Y(e);E(e);},
Rx=(a,b)=>{return V(a.hh.getParameter(b));},
Yl=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.hh.viewport(b,c,d,e);b=a.hJ.getError();if(!b)return;f=new Bf;g=Bj(b,4);h=new K;h.g$=G(16);F(h,h.g8,A(117));J(h,h.g8,b,10);F(h,h.g8,A(118));b=h.g8;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.g$;k=j.data;c=h.g8;d=k.length;if(c>=0&&c<=(d-0|0)){i.g9=L(j.data,0,c);f.g_=1;f.ha=1;f.hc=i;E(f);}f=new I;Y(f);E(f);},
ABa=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.h3;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hA;d=a.ip;if(!c)d=!d.hw?null:d.hu;else{e=d.hs;b=Bd(X(U(O(c),B(2135587861, 2654435769)),d.hy));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.hv;}}d=b<0?null:d.ht.data[b];}i=d===null?null:d[Be]===true?
d:d.hA;a.hh.attachShader(h,i);b=a.hJ.getError();if(!b)return;d=new Bf;j=Bj(b,4);h=new K;h.g$=G(16);F(h,h.g8,A(117));J(h,h.g8,b,10);F(h,h.g8,A(118));b=h.g8;if(j===null)j=A(2);F(h,b,j);i=new H;e=h.g$;k=e.data;c=h.g8;f=k.length;if(c>=0&&c<=(f-0|0)){i.g9=L(e.data,0,c);d.g_=1;d.ha=1;d.hc=i;E(d);}d=new I;Y(d);E(d);},
AIF=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.hh;e=a.jU;if(!c)e=!e.hw?null:e.hu;else{f=e.hs;g=Bd(X(U(O(c),B(2135587861, 2654435769)),e.hy));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.hv;}}e=g<0?null:e.ht.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hA;d.bindBuffer(b,e);b=a.hJ.getError();if(!b)return;d=new Bf;i=Bj(b,4);e=new K;e.g$=G(16);F(e,e.g8,A(117));J(e,e.g8,b,10);F(e,e.g8,A(118));b=e.g8;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.g$;k=f.data;c=e.g8;g=k.length;if(c>=0&&c<=(g
-0|0)){j.g9=L(f.data,0,c);d.g_=1;d.ha=1;d.hc=j;E(d);}d=new I;Y(d);E(d);},
AB6=(a,b,c,d,e)=>{let f,g,h,i,j;Ih(a,b,c,d,e);b=a.hJ.getError();if(!b)return;d=new Bf;f=Bj(b,4);g=new K;g.g$=G(16);F(g,g.g8,A(117));J(g,g.g8,b,10);F(g,g.g8,A(118));b=g.g8;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.g$;j=i.data;c=g.g8;e=j.length;if(c>=0&&c<=(e-0|0)){h.g9=L(i.data,0,c);d.g_=1;d.ha=1;d.hc=h;E(d);}d=new I;Y(d);E(d);},
ADl=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ip;if(!b)c=!c.hw?null:c.hu;else{d=c.hs;e=Bd(X(U(O(b),B(2135587861, 2654435769)),c.hy));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.hv;}}c=e<0?null:c.ht.data[e];}Bp();g=c===null?null:c[Be]===true?c:c.hA;a.hh.compileShader(g);b=a.hJ.getError();if(!b)return;c=new Bf;h=Bj(b,4);g=new K;g.g$=G(16);F(g,g.g8,A(117));J(g,g.g8,b,10);F(g,g.g8,A(118));b=g.g8;if(h===null)h=A(2);F(g,b,h);i=new H;d=g.g$;j=d.data;e=g.g8;f=j.length;if(e>=0&&e<=(f-0|0))
{i.g9=L(d.data,0,e);c.g_=1;c.ha=1;c.hc=i;E(c);}c=new I;Y(c);E(c);},
AJY=a=>{let b,c,d,e,f,g,h,i,j;b=a.hh.createProgram();c=a.kq;a.kq=c+1|0;Cd(a.h3,c,Ce(b));d=a.hJ.getError();if(!d)return c;b=new Bf;e=Bj(d,4);f=new K;f.g$=G(16);F(f,f.g8,A(117));J(f,f.g8,d,10);F(f,f.g8,A(118));d=f.g8;if(e===null)e=A(2);F(f,d,e);g=new H;h=f.g$;i=h.data;c=f.g8;j=i.length;if(c>=0&&c<=(j-0|0)){g.g9=L(h.data,0,c);b.g_=1;b.ha=1;b.hc=g;E(b);}b=new I;Y(b);E(b);},
AE3=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hh.createShader(b);d=a.kk;a.kk=d+1|0;Cd(a.ip,d,Ce(c));b=a.hJ.getError();if(!b)return d;c=new Bf;e=Bj(b,4);f=new K;f.g$=G(16);F(f,f.g8,A(117));J(f,f.g8,b,10);F(f,f.g8,A(118));b=f.g8;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g$;i=h.data;d=f.g8;j=i.length;if(d>=0&&d<=(j-0|0)){g.g9=L(h.data,0,d);c.g_=1;c.ha=1;c.hc=g;E(c);}c=new I;Y(c);E(c);},
AJN=(a,b)=>{let c,d,e,f,g,h,i,j;a.hh.disableVertexAttribArray(b);b=a.hJ.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g$=G(16);F(e,e.g8,A(117));J(e,e.g8,b,10);F(e,e.g8,A(118));b=e.g8;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g$;h=g.data;i=e.g8;j=h.length;if(i>=0&&i<=(j-0|0)){f.g9=L(g.data,0,i);c.g_=1;c.ha=1;c.hc=f;E(c);}c=new I;Y(c);E(c);},
T8=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.hh.drawElements(b,c,d,e);b=a.hJ.getError();if(!b)return;f=new Bf;g=Bj(b,4);h=new K;h.g$=G(16);F(h,h.g8,A(117));J(h,h.g8,b,10);F(h,h.g8,A(118));b=h.g8;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.g$;k=j.data;c=h.g8;d=k.length;if(c>=0&&c<=(d-0|0)){i.g9=L(j.data,0,c);f.g_=1;f.ha=1;f.hc=i;E(f);}f=new I;Y(f);E(f);},
AE8=(a,b)=>{let c,d,e,f,g,h,i,j;a.hh.enableVertexAttribArray(b);b=a.hJ.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g$=G(16);F(e,e.g8,A(117));J(e,e.g8,b,10);F(e,e.g8,A(118));b=e.g8;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g$;h=g.data;i=e.g8;j=h.length;if(i>=0&&i<=(j-0|0)){f.g9=L(g.data,0,i);c.g_=1;c.ha=1;c.hc=f;E(c);}c=new I;Y(c);E(c);},
Zu=(a,b,c,d,e)=>{let f,g,h,i,j;f=HN(a,b,c,d,e);b=a.hJ.getError();if(!b)return f;d=new Bf;g=Bj(b,4);e=new K;e.g$=G(16);F(e,e.g8,A(117));J(e,e.g8,b,10);F(e,e.g8,A(118));b=e.g8;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.g$;i=h.data;c=e.g8;j=i.length;if(c>=0&&c<=(j-0|0)){f.g9=L(h.data,0,c);d.g_=1;d.ha=1;d.hc=f;E(d);}d=new I;Y(d);E(d);},
AHg=(a,b,c,d,e)=>{let f,g,h,i,j;f=IS(a,b,c,d,e);b=a.hJ.getError();if(!b)return f;d=new Bf;g=Bj(b,4);e=new K;e.g$=G(16);F(e,e.g8,A(117));J(e,e.g8,b,10);F(e,e.g8,A(118));b=e.g8;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.g$;i=h.data;c=e.g8;j=i.length;if(c>=0&&c<=(j-0|0)){f.g9=L(h.data,0,c);d.g_=1;d.ha=1;d.hc=f;E(d);}d=new I;Y(d);E(d);},
ACH=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.h3;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hA;b=a.hh.getAttribLocation(h,Br(c));f=a.hJ.getError();if(!f)return b;c=new Bf;i=Bj(f,4);d=new K;d.g$=G(16);F(d,d.g8,A(117));J(d,d.g8,f,10);F(d,d.g8,A(118));b=d.g8;if(i===null)i=A(2);F(d,b,i);h=new H;e=d.g$;j=e.data;f=d.g8;g=j.length;if(f
>=0&&f<=(g-0|0)){h.g9=L(e.data,0,f);c.g_=1;c.ha=1;c.hc=h;E(c);}c=new I;Y(c);E(c);},
Vm=(a,b,c,d)=>{let e,f,g,h,i,j;I_(a,b,c,d);b=a.hJ.getError();if(!b)return;d=new Bf;e=Bj(b,4);f=new K;f.g$=G(16);F(f,f.g8,A(117));J(f,f.g8,b,10);F(f,f.g8,A(118));b=f.g8;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g$;i=h.data;c=f.g8;j=i.length;if(c>=0&&c<=(j-0|0)){g.g9=L(h.data,0,c);d.g_=1;d.ha=1;d.hc=g;E(d);}d=new I;Y(d);E(d);},
SC=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hh;d=a.h3;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hA;c=V(c.getProgramInfoLog(d));b=a.hJ.getError();if(!b)return c;c=new Bf;h=Bj(b,4);d=new K;d.g$=G(16);F(d,d.g8,A(117));J(d,d.g8,b,10);F(d,d.g8,A(118));b=d.g8;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g$;j=e.data;f=d.g8;g=j.length;if(f
>=0&&f<=(g-0|0)){i.g9=L(e.data,0,f);c.g_=1;c.ha=1;c.hc=i;E(c);}c=new I;Y(c);E(c);},
AJW=(a,b,c,d)=>{let e,f,g,h,i,j;H9(a,b,c,d);b=a.hJ.getError();if(!b)return;d=new Bf;e=Bj(b,4);f=new K;f.g$=G(16);F(f,f.g8,A(117));J(f,f.g8,b,10);F(f,f.g8,A(118));b=f.g8;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g$;i=h.data;c=f.g8;j=i.length;if(c>=0&&c<=(j-0|0)){g.g9=L(h.data,0,c);d.g_=1;d.ha=1;d.hc=g;E(d);}d=new I;Y(d);E(d);},
To=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hh;d=a.ip;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hA;c=V(c.getShaderInfoLog(d));b=a.hJ.getError();if(!b)return c;c=new Bf;h=Bj(b,4);d=new K;d.g$=G(16);F(d,d.g8,A(117));J(d,d.g8,b,10);F(d,d.g8,A(118));b=d.g8;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g$;j=e.data;f=d.g8;g=j.length;if(f>=
0&&f<=(g-0|0)){i.g9=L(e.data,0,f);c.g_=1;c.ha=1;c.hc=i;E(c);}c=new I;Y(c);E(c);},
SE=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.hh;e=a.h3;if(!b)e=!e.hw?null:e.hu;else{f=e.hs;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hy));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.hv;}}e=g<0?null:e.ht.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hA;c=d.getUniformLocation(e,Br(c));if(c===null)h=(-1);else{d=a.iX;if(!b)d=!d.hw?null:d.hu;else{f=d.hs;h=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&d.hv;}}d
=h<0?null:d.ht.data[h];}d=d;if(d===null){d=Cr(51,0.800000011920929);Cd(a.iX,b,d);}h=a.kx;a.kx=h+1|0;Cd(d,h,Ce(c));}b=a.hJ.getError();if(!b)return h;c=new Bf;i=Bj(b,4);d=new K;d.g$=G(16);F(d,d.g8,A(117));J(d,d.g8,b,10);F(d,d.g8,A(118));b=d.g8;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.g$;j=f.data;h=d.g8;g=j.length;if(h>=0&&h<=(g-0|0)){e.g9=L(f.data,0,h);c.g_=1;c.ha=1;c.hc=e;E(c);}c=new I;Y(c);E(c);},
AI6=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hh;d=a.h3;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hA;c.linkProgram(d);b=a.hJ.getError();if(!b)return;c=new Bf;h=Bj(b,4);d=new K;d.g$=G(16);F(d,d.g8,A(117));J(d,d.g8,b,10);F(d,d.g8,A(118));b=d.g8;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g$;j=e.data;f=d.g8;g=j.length;if(f>=0&&f<=(g-0
|0)){i.g9=L(e.data,0,f);c.g_=1;c.ha=1;c.hc=i;E(c);}c=new I;Y(c);E(c);},
SA=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.hh;e=a.ip;if(!b)e=!e.hw?null:e.hu;else{f=e.hs;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hy));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.hv;}}e=g<0?null:e.ht.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hA;d.shaderSource(e,Br(c));b=a.hJ.getError();if(!b)return;c=new Bf;i=Bj(b,4);d=new K;d.g$=G(16);F(d,d.g8,A(117));J(d,d.g8,b,10);F(d,d.g8,A(118));b=d.g8;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.g$;j=f.data;g=d.g8;h=j.length;if(g>=0&&g
<=(h-0|0)){e.g9=L(f.data,0,g);c.g_=1;c.ha=1;c.hc=e;E(c);}c=new I;Y(c);E(c);},
UL=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.iX;e=a.jw;if(!e)d=!d.hw?null:d.hu;else{f=d.hs;g=Bd(X(U(O(e),B(2135587861, 2654435769)),d.hy));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.hv;}}d=g<0?null:d.ht.data[g];}d=d;if(!b)d=!d.hw?null:d.hu;else{f=d.hs;e=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.hv;}}d=e<0?null:d.ht.data[e];}Bp();i=d===null?null:d[Be]===true?d:d.hA;a.hh.uniform1i(i,c);b=a.hJ.getError();if
(!b)return;d=new Bf;i=Bj(b,4);j=new K;j.g$=G(16);F(j,j.g8,A(117));J(j,j.g8,b,10);F(j,j.g8,A(118));b=j.g8;if(i===null)i=A(2);F(j,b,i);k=new H;f=j.g$;l=f.data;c=j.g8;e=l.length;if(c>=0&&c<=(e-0|0)){k.g9=L(f.data,0,c);d.g_=1;d.ha=1;d.hc=k;E(d);}d=new I;Y(d);E(d);},
AKz=(a,b)=>{let c,d,e,f,g,h,i,j;a.jw=b;c=a.hh;d=a.h3;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hA;c.useProgram(d);b=a.hJ.getError();if(!b)return;c=new Bf;h=Bj(b,4);d=new K;d.g$=G(16);F(d,d.g8,A(117));J(d,d.g8,b,10);F(d,d.g8,A(118));b=d.g8;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g$;j=e.data;f=d.g8;g=j.length;if(f>=0&&f
<=(g-0|0)){i.g9=L(e.data,0,f);c.g_=1;c.ha=1;c.hc=i;E(c);}c=new I;Y(c);E(c);},
AFK=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.hh.vertexAttribPointer(b,c,d,!!e,f,g);b=a.hJ.getError();if(!b)return;h=new Bf;i=Bj(b,4);j=new K;j.g$=G(16);F(j,j.g8,A(117));J(j,j.g8,b,10);F(j,j.g8,A(118));b=j.g8;if(i===null)i=A(2);F(j,b,i);k=new H;l=j.g$;m=l.data;c=j.g8;d=m.length;if(c>=0&&c<=(d-0|0)){k.g9=L(l.data,0,c);h.g_=1;h.ha=1;h.hc=k;E(h);}h=new I;Y(h);E(h);};
function Mt(){let a=this;C.call(a);a.oy=0;a.n$=0;a.oe=0;a.rb=null;a.rT=null;a.kg=null;a.q2=A(119);}
let AA3=(a,b,c,d,e)=>{a.q2=A(119);if(b===Q3)a.kg=GY;else if(b===Pw)a.kg=GY;else if(b===PG)a.kg=Hd;else if(b===O0)a.kg=Hd;else if(b!==ID)a.kg=N2;else a.kg=IC;b=a.kg;if(b===GY)It(a,A(120),c);else if(b===IC)It(a,A(121),c);else if(b===Hd)It(a,A(122),c);else{a.oy=(-1);a.n$=(-1);a.oe=(-1);d=A(59);e=A(59);}a.rb=d;a.rT=e;},
AEK=(a,b,c,d)=>{let e=new Mt();AA3(e,a,b,c,d);return e;},
It=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,$$je;a:{d=MC(Gx(b,0),c);if(!MT(d)){e=Dc;b=new K;b.g$=G(16);F(b,b.g8,A(123));F(b,b.g8,c);c=new H;f=b.g$;g=f.data;h=b.g8;i=g.length;if(h>=0&&h<=(i-0|0)){c.g9=L(f.data,0,h);if(e.kB>=2){if(BH===null){b=new Ck;e=new B5;BB(e);e.h$=BF(32);DL(b);b.ik=e;e=new K;Gi(e);b.ia=e;b.h_=G(32);b.ie=0;b.ig=BX;BH=b;}b=new K;b.g$=G(16);Cw(b,b.g8,A(119));Cw(b,b.g8,A(51));Cw(b,b.g8,c);c=new H;f=b.g$;g=f.data;h=b.g8;i=g.length;if(h>=0&&h<=(i-0|0)){c.g9=L(f.data,0,h);BI(Br(c));BI("\n");}else{b
=new I;b.g_=1;b.ha=1;E(b);}}a.oy=2;a.n$=0;a.oe=0;break a;}b=new I;b.g_=1;b.ha=1;E(b);}b=d.jH;j=b.j3;if(!j){b=new CV;b.g_=1;b.ha=1;Bl(b);E(b);}k=B4(1,b.kR);if(k>=0){b=new I;c=new K;BB(c);c.g$=G(16);J(c,c.g8,1,10);e=new H;f=c.g$;g=f.data;h=c.g8;i=g.length;if(h>=0&&h<=(i-0|0)){e.g9=L(f.data,0,h);b.g_=1;b.ha=1;b.hc=e;E(b);}b=new I;b.g_=1;b.ha=1;E(b);}f=b.id.data;if(f[2]<0)e=null;else{b=b.k1;if(!j){b=new CV;b.g_=1;b.ha=1;Bl(b);E(b);}if(k>=0){b=new I;c=new K;BB(c);c.g$=G(16);J(c,c.g8,1,10);e=new H;f=c.g$;g=f.data;h
=c.g8;i=g.length;if(h>=0&&h<=(i-0|0)){e.g9=L(f.data,0,h);b.g_=1;b.ha=1;b.hc=e;E(b);}b=new I;b.g_=1;b.ha=1;E(b);}h=f[2];if(!j){b=new CV;b.g_=1;b.ha=1;Bl(b);E(b);}if(k>=0){b=new I;c=new K;BB(c);c.g$=G(16);J(c,c.g8,1,10);e=new H;f=c.g$;g=f.data;h=c.g8;i=g.length;if(h>=0&&h<=(i-0|0)){e.g9=L(f.data,0,h);b.g_=1;b.ha=1;b.hc=e;E(b);}b=new I;b.g_=1;b.ha=1;E(b);}e=Cc(b,h,f[3]);}f=(HM(Gx(A(124),0),e,0)).data;b=f[0];b:{try{h=Ia(b);break b;}catch($$e){$$je=BP($$e);if($$je instanceof B0){}else{throw $$e;}}d=Dc;e=new K;e.g$
=G(16);F(e,e.g8,A(125));F(e,e.g8,b);F(e,e.g8,A(126));J(e,e.g8,2,10);l=new H;g=e.g$;m=g.data;i=e.g8;j=m.length;if(i>=0&&i<=(j-0|0)){l.g9=L(g.data,0,i);if(d.kB>=1){if(Ct===null){b=new Eo;e=new B5;DL(e);e.h$=BF(32);Ez(b,e);b.ia=E6();b.h_=G(32);b.ie=0;b.ig=BX;Ct=b;}b=new K;b.g$=G(16);Cs(b,b.g8,Cn(A(127)));Cs(b,b.g8,Cn(A(51)));Cs(b,b.g8,Cn(l));c=new H;g=b.g$;m=g.data;i=b.g8;j=m.length;if(i>=0&&i<=(j-0|0)){c.g9=L(g.data,0,i);CI(Br(c));CI("\n");}else{b=new I;b.g_=1;b.ha=1;E(b);}}h=2;}else{b=new I;b.g_=1;b.ha=1;E(b);}}a.oy
=h;n=f.length;if(n<2)i=0;else{b=f[1];c:{try{i=Ia(b);break c;}catch($$e){$$je=BP($$e);if($$je instanceof B0){}else{throw $$e;}}d=Dc;e=new K;e.g$=G(16);F(e,e.g8,A(125));F(e,e.g8,b);F(e,e.g8,A(126));J(e,e.g8,0,10);l=new H;g=e.g$;m=g.data;j=e.g8;k=m.length;if(j>=0&&j<=(k-0|0)){l.g9=L(g.data,0,j);if(d.kB>=1){if(Ct===null){b=new Eo;e=new B5;DL(e);e.h$=BF(32);Ez(b,e);b.ia=E6();b.h_=G(32);b.ie=0;b.ig=BX;Ct=b;}b=new K;b.g$=G(16);Cs(b,b.g8,Cn(A(127)));Cs(b,b.g8,Cn(A(51)));Cs(b,b.g8,Cn(l));c=new H;g=b.g$;m=g.data;j=b.g8;k
=m.length;if(j>=0&&j<=(k-0|0)){c.g9=L(g.data,0,j);CI(Br(c));CI("\n");}else{b=new I;b.g_=1;b.ha=1;E(b);}}i=0;}else{b=new I;b.g_=1;b.ha=1;E(b);}}}a.n$=i;if(n<3)h=0;else{b=f[2];d:{try{h=Ia(b);break d;}catch($$e){$$je=BP($$e);if($$je instanceof B0){}else{throw $$e;}}e=Dc;d=new K;d.g$=G(16);F(d,d.g8,A(125));F(d,d.g8,b);F(d,d.g8,A(126));J(d,d.g8,0,10);b=new H;g=d.g$;f=g.data;h=d.g8;i=f.length;if(h>=0&&h<=(i-0|0)){b.g9=L(g.data,0,h);if(e.kB>=1){if(Ct===null){e=new Eo;d=new B5;DL(d);d.h$=BF(32);Ez(e,d);e.ia=E6();e.h_
=G(32);e.ie=0;e.ig=BX;Ct=e;}e=new K;e.g$=G(16);Cs(e,e.g8,Cn(A(127)));Cs(e,e.g8,Cn(A(51)));Cs(e,e.g8,Cn(b));b=new H;f=e.g$;g=f.data;i=e.g8;j=g.length;if(i>=0&&i<=(j-0|0)){b.g9=L(f.data,0,i);CI(Br(b));CI("\n");}else{b=new I;b.g_=1;b.ha=1;E(b);}}h=0;}else{b=new I;b.g_=1;b.ha=1;E(b);}}}a.oe=h;}};
let DQ=D(BR);
let Q3=null,PG=null,U9=null,O0=null,ID=null,Pw=null,Yf=null;
let VG=()=>{let b,c,d,e,f,g;b=new DQ;b.hx=A(7);b.hm=0;Q3=b;c=new DQ;c.hx=A(128);c.hm=1;PG=c;d=new DQ;d.hx=A(129);d.hm=2;U9=d;e=new DQ;e.hx=A(130);e.hm=3;O0=e;f=new DQ;f.hx=A(131);f.hm=4;ID=f;g=new DQ;g.hx=A(132);g.hm=5;Pw=g;Yf=P(DQ,[b,c,d,e,f,g]);};
let O8=D(0);
function Jl(){C.call(this);this.re=null;}
let Wl=a=>{return;};
let QG=D(Fb);
let Vq=(a,b)=>{let c,d,e,f,g,h,i,j;a.hh.clear(b);b=a.hh.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g$=G(16);F(e,e.g8,A(117));J(e,e.g8,b,10);F(e,e.g8,A(118));b=e.g8;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g$;h=g.data;i=e.g8;j=h.length;if(i>=0&&i<=(j-0|0)){f.g9=L(g.data,0,i);c.g_=1;c.ha=1;c.hc=f;E(c);}c=new I;Y(c);E(c);},
Wd=(a,b,c,d,e)=>{let f,g,h,i,j,k,l,m,n;a.hh.clearColor(b,c,d,e);f=a.hh.getError();if(!f)return;g=new Bf;h=Bj(f,4);i=new K;i.g$=G(16);F(i,i.g8,A(117));J(i,i.g8,f,10);F(i,i.g8,A(118));f=i.g8;if(h===null)h=A(2);F(i,f,h);j=new H;k=i.g$;l=k.data;m=i.g8;n=l.length;if(m>=0&&m<=(n-0|0)){j.g9=L(k.data,0,m);g.g_=1;g.ha=1;g.hc=j;E(g);}g=new I;Y(g);E(g);},
AKa=(a,b)=>{let c,d,e,f,g,h,i,j;a.hh.disable(b);b=a.hh.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g$=G(16);F(e,e.g8,A(117));J(e,e.g8,b,10);F(e,e.g8,A(118));b=e.g8;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g$;h=g.data;i=e.g8;j=h.length;if(i>=0&&i<=(j-0|0)){f.g9=L(g.data,0,i);c.g_=1;c.ha=1;c.hc=f;E(c);}c=new I;Y(c);E(c);},
ZH=(a,b,c,d)=>{let e,f,g,h,i,j;a.hh.drawArrays(b,c,d);b=a.hh.getError();if(!b)return;e=new Bf;f=Bj(b,4);g=new K;g.g$=G(16);F(g,g.g8,A(117));J(g,g.g8,b,10);F(g,g.g8,A(118));b=g.g8;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.g$;j=i.data;c=g.g8;d=j.length;if(c>=0&&c<=(d-0|0)){h.g9=L(i.data,0,c);e.g_=1;e.ha=1;e.hc=h;E(e);}e=new I;Y(e);E(e);},
AJH=(a,b,c,d,e)=>{let f,g,h,i,j,k;f=a.hh;g=e.hn;f.drawElements(b,c,d,g);b=a.hh.getError();if(!b)return;e=new Bf;h=Bj(b,4);f=new K;f.g$=G(16);F(f,f.g8,A(117));J(f,f.g8,b,10);F(f,f.g8,A(118));b=f.g8;if(h===null)h=A(2);F(f,b,h);i=new H;j=f.g$;k=j.data;c=f.g8;d=k.length;if(c>=0&&c<=(d-0|0)){i.g9=L(j.data,0,c);e.g_=1;e.ha=1;e.hc=i;E(e);}e=new I;Y(e);E(e);},
AAU=(a,b)=>{return V(a.hh.getParameter(b));},
AJR=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.hh.viewport(b,c,d,e);b=a.hh.getError();if(!b)return;f=new Bf;g=Bj(b,4);h=new K;h.g$=G(16);F(h,h.g8,A(117));J(h,h.g8,b,10);F(h,h.g8,A(118));b=h.g8;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.g$;k=j.data;c=h.g8;d=k.length;if(c>=0&&c<=(d-0|0)){i.g9=L(j.data,0,c);f.g_=1;f.ha=1;f.hc=i;E(f);}f=new I;Y(f);E(f);},
Sy=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.h3;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hA;d=a.ip;if(!c)d=!d.hw?null:d.hu;else{e=d.hs;b=Bd(X(U(O(c),B(2135587861, 2654435769)),d.hy));b:{while(true){f=e.data[b];if(!f){b= -(b+1|0)|0;break b;}if(f==c)break;b=(b+1|0)&d.hv;}}d=b<0?null:d.ht.data[b];}i=d===null?null:d[Be]===true?d
:d.hA;a.hh.attachShader(h,i);b=a.hh.getError();if(!b)return;d=new Bf;j=Bj(b,4);h=new K;h.g$=G(16);F(h,h.g8,A(117));J(h,h.g8,b,10);F(h,h.g8,A(118));b=h.g8;if(j===null)j=A(2);F(h,b,j);i=new H;e=h.g$;k=e.data;c=h.g8;f=k.length;if(c>=0&&c<=(f-0|0)){i.g9=L(e.data,0,c);d.g_=1;d.ha=1;d.hc=i;E(d);}d=new I;Y(d);E(d);},
Ru=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=a.hh;e=a.jU;if(!c)e=!e.hw?null:e.hu;else{f=e.hs;g=Bd(X(U(O(c),B(2135587861, 2654435769)),e.hy));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==c)break;g=(g+1|0)&e.hv;}}e=g<0?null:e.ht.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hA;d.bindBuffer(b,e);b=a.hh.getError();if(!b)return;d=new Bf;i=Bj(b,4);e=new K;e.g$=G(16);F(e,e.g8,A(117));J(e,e.g8,b,10);F(e,e.g8,A(118));b=e.g8;if(i===null)i=A(2);F(e,b,i);j=new H;f=e.g$;k=f.data;c=e.g8;g=k.length;if(c>=0&&c<=(g
-0|0)){j.g9=L(f.data,0,c);d.g_=1;d.ha=1;d.hc=j;E(d);}d=new I;Y(d);E(d);},
AAs=(a,b,c,d,e)=>{let f,g,h,i,j;Ih(a,b,c,d,e);b=a.hh.getError();if(!b)return;d=new Bf;f=Bj(b,4);g=new K;g.g$=G(16);F(g,g.g8,A(117));J(g,g.g8,b,10);F(g,g.g8,A(118));b=g.g8;if(f===null)f=A(2);F(g,b,f);h=new H;i=g.g$;j=i.data;c=g.g8;e=j.length;if(c>=0&&c<=(e-0|0)){h.g9=L(i.data,0,c);d.g_=1;d.ha=1;d.hc=h;E(d);}d=new I;Y(d);E(d);},
AKl=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ip;if(!b)c=!c.hw?null:c.hu;else{d=c.hs;e=Bd(X(U(O(b),B(2135587861, 2654435769)),c.hy));a:{while(true){f=d.data[e];if(!f){e= -(e+1|0)|0;break a;}if(f==b)break;e=(e+1|0)&c.hv;}}c=e<0?null:c.ht.data[e];}Bp();g=c===null?null:c[Be]===true?c:c.hA;a.hh.compileShader(g);b=a.hh.getError();if(!b)return;c=new Bf;h=Bj(b,4);g=new K;g.g$=G(16);F(g,g.g8,A(117));J(g,g.g8,b,10);F(g,g.g8,A(118));b=g.g8;if(h===null)h=A(2);F(g,b,h);i=new H;d=g.g$;j=d.data;e=g.g8;f=j.length;if(e>=0&&e<=(f-0|0))
{i.g9=L(d.data,0,e);c.g_=1;c.ha=1;c.hc=i;E(c);}c=new I;Y(c);E(c);},
ADU=a=>{let b,c,d,e,f,g,h,i,j;b=a.hh.createProgram();c=a.kq;a.kq=c+1|0;Cd(a.h3,c,Ce(b));d=a.hh.getError();if(!d)return c;b=new Bf;e=Bj(d,4);f=new K;f.g$=G(16);F(f,f.g8,A(117));J(f,f.g8,d,10);F(f,f.g8,A(118));d=f.g8;if(e===null)e=A(2);F(f,d,e);g=new H;h=f.g$;i=h.data;c=f.g8;j=i.length;if(c>=0&&c<=(j-0|0)){g.g9=L(h.data,0,c);b.g_=1;b.ha=1;b.hc=g;E(b);}b=new I;Y(b);E(b);},
AJ1=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hh.createShader(b);d=a.kk;a.kk=d+1|0;Cd(a.ip,d,Ce(c));b=a.hh.getError();if(!b)return d;c=new Bf;e=Bj(b,4);f=new K;f.g$=G(16);F(f,f.g8,A(117));J(f,f.g8,b,10);F(f,f.g8,A(118));b=f.g8;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g$;i=h.data;d=f.g8;j=i.length;if(d>=0&&d<=(j-0|0)){g.g9=L(h.data,0,d);c.g_=1;c.ha=1;c.hc=g;E(c);}c=new I;Y(c);E(c);},
ADO=(a,b)=>{let c,d,e,f,g,h,i,j;a.hh.disableVertexAttribArray(b);b=a.hh.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g$=G(16);F(e,e.g8,A(117));J(e,e.g8,b,10);F(e,e.g8,A(118));b=e.g8;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g$;h=g.data;i=e.g8;j=h.length;if(i>=0&&i<=(j-0|0)){f.g9=L(g.data,0,i);c.g_=1;c.ha=1;c.hc=f;E(c);}c=new I;Y(c);E(c);},
YK=(a,b,c,d,e)=>{let f,g,h,i,j,k;a.hh.drawElements(b,c,d,e);b=a.hh.getError();if(!b)return;f=new Bf;g=Bj(b,4);h=new K;h.g$=G(16);F(h,h.g8,A(117));J(h,h.g8,b,10);F(h,h.g8,A(118));b=h.g8;if(g===null)g=A(2);F(h,b,g);i=new H;j=h.g$;k=j.data;c=h.g8;d=k.length;if(c>=0&&c<=(d-0|0)){i.g9=L(j.data,0,c);f.g_=1;f.ha=1;f.hc=i;E(f);}f=new I;Y(f);E(f);},
AKb=(a,b)=>{let c,d,e,f,g,h,i,j;a.hh.enableVertexAttribArray(b);b=a.hh.getError();if(!b)return;c=new Bf;d=Bj(b,4);e=new K;e.g$=G(16);F(e,e.g8,A(117));J(e,e.g8,b,10);F(e,e.g8,A(118));b=e.g8;if(d===null)d=A(2);F(e,b,d);f=new H;g=e.g$;h=g.data;i=e.g8;j=h.length;if(i>=0&&i<=(j-0|0)){f.g9=L(g.data,0,i);c.g_=1;c.ha=1;c.hc=f;E(c);}c=new I;Y(c);E(c);},
AAv=(a,b,c,d,e)=>{let f,g,h,i,j;f=HN(a,b,c,d,e);b=a.hh.getError();if(!b)return f;d=new Bf;g=Bj(b,4);e=new K;e.g$=G(16);F(e,e.g8,A(117));J(e,e.g8,b,10);F(e,e.g8,A(118));b=e.g8;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.g$;i=h.data;c=e.g8;j=i.length;if(c>=0&&c<=(j-0|0)){f.g9=L(h.data,0,c);d.g_=1;d.ha=1;d.hc=f;E(d);}d=new I;Y(d);E(d);},
Uu=(a,b,c,d,e)=>{let f,g,h,i,j;f=IS(a,b,c,d,e);b=a.hh.getError();if(!b)return f;d=new Bf;g=Bj(b,4);e=new K;e.g$=G(16);F(e,e.g8,A(117));J(e,e.g8,b,10);F(e,e.g8,A(118));b=e.g8;if(g===null)g=A(2);F(e,b,g);f=new H;h=e.g$;i=h.data;c=e.g8;j=i.length;if(c>=0&&c<=(j-0|0)){f.g9=L(h.data,0,c);d.g_=1;d.ha=1;d.hc=f;E(d);}d=new I;Y(d);E(d);},
YU=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.h3;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();h=d===null?null:d[Be]===true?d:d.hA;b=a.hh.getAttribLocation(h,Br(c));f=a.hh.getError();if(!f)return b;c=new Bf;i=Bj(f,4);d=new K;d.g$=G(16);F(d,d.g8,A(117));J(d,d.g8,f,10);F(d,d.g8,A(118));b=d.g8;if(i===null)i=A(2);F(d,b,i);h=new H;e=d.g$;j=e.data;f=d.g8;g=j.length;if(f>=
0&&f<=(g-0|0)){h.g9=L(e.data,0,f);c.g_=1;c.ha=1;c.hc=h;E(c);}c=new I;Y(c);E(c);},
Xm=(a,b,c,d)=>{let e,f,g,h,i,j;I_(a,b,c,d);b=a.hh.getError();if(!b)return;d=new Bf;e=Bj(b,4);f=new K;f.g$=G(16);F(f,f.g8,A(117));J(f,f.g8,b,10);F(f,f.g8,A(118));b=f.g8;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g$;i=h.data;c=f.g8;j=i.length;if(c>=0&&c<=(j-0|0)){g.g9=L(h.data,0,c);d.g_=1;d.ha=1;d.hc=g;E(d);}d=new I;Y(d);E(d);},
Xs=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hh;d=a.h3;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hA;c=V(c.getProgramInfoLog(d));b=a.hh.getError();if(!b)return c;c=new Bf;h=Bj(b,4);d=new K;d.g$=G(16);F(d,d.g8,A(117));J(d,d.g8,b,10);F(d,d.g8,A(118));b=d.g8;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g$;j=e.data;f=d.g8;g=j.length;if(f
>=0&&f<=(g-0|0)){i.g9=L(e.data,0,f);c.g_=1;c.ha=1;c.hc=i;E(c);}c=new I;Y(c);E(c);},
SK=(a,b,c,d)=>{let e,f,g,h,i,j;H9(a,b,c,d);b=a.hh.getError();if(!b)return;d=new Bf;e=Bj(b,4);f=new K;f.g$=G(16);F(f,f.g8,A(117));J(f,f.g8,b,10);F(f,f.g8,A(118));b=f.g8;if(e===null)e=A(2);F(f,b,e);g=new H;h=f.g$;i=h.data;c=f.g8;j=i.length;if(c>=0&&c<=(j-0|0)){g.g9=L(h.data,0,c);d.g_=1;d.ha=1;d.hc=g;E(d);}d=new I;Y(d);E(d);},
AFQ=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hh;d=a.ip;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hA;c=V(c.getShaderInfoLog(d));b=a.hh.getError();if(!b)return c;c=new Bf;h=Bj(b,4);d=new K;d.g$=G(16);F(d,d.g8,A(117));J(d,d.g8,b,10);F(d,d.g8,A(118));b=d.g8;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g$;j=e.data;f=d.g8;g=j.length;if(f
>=0&&f<=(g-0|0)){i.g9=L(e.data,0,f);c.g_=1;c.ha=1;c.hc=i;E(c);}c=new I;Y(c);E(c);},
AHD=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.hh;e=a.h3;if(!b)e=!e.hw?null:e.hu;else{f=e.hs;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hy));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.hv;}}e=g<0?null:e.ht.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hA;c=d.getUniformLocation(e,Br(c));if(c===null)h=(-1);else{d=a.iX;if(!b)d=!d.hw?null:d.hu;else{f=d.hs;h=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));b:{while(true){g=f.data[h];if(!g){h= -(h+1|0)|0;break b;}if(g==b)break;h=(h+1|0)&
d.hv;}}d=h<0?null:d.ht.data[h];}d=d;if(d===null){d=Cr(51,0.800000011920929);Cd(a.iX,b,d);}h=a.kx;a.kx=h+1|0;Cd(d,h,Ce(c));}b=a.hh.getError();if(!b)return h;c=new Bf;i=Bj(b,4);d=new K;d.g$=G(16);F(d,d.g8,A(117));J(d,d.g8,b,10);F(d,d.g8,A(118));b=d.g8;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.g$;j=f.data;h=d.g8;g=j.length;if(h>=0&&h<=(g-0|0)){e.g9=L(f.data,0,h);c.g_=1;c.ha=1;c.hc=e;E(c);}c=new I;Y(c);E(c);},
ABC=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hh;d=a.h3;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hA;c.linkProgram(d);b=a.hh.getError();if(!b)return;c=new Bf;h=Bj(b,4);d=new K;d.g$=G(16);F(d,d.g8,A(117));J(d,d.g8,b,10);F(d,d.g8,A(118));b=d.g8;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g$;j=e.data;f=d.g8;g=j.length;if(f>=0&&f<=(g-0
|0)){i.g9=L(e.data,0,f);c.g_=1;c.ha=1;c.hc=i;E(c);}c=new I;Y(c);E(c);},
AJF=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.hh;e=a.ip;if(!b)e=!e.hw?null:e.hu;else{f=e.hs;g=Bd(X(U(O(b),B(2135587861, 2654435769)),e.hy));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==b)break;g=(g+1|0)&e.hv;}}e=g<0?null:e.ht.data[g];}Bp();e=e===null?null:e[Be]===true?e:e.hA;d.shaderSource(e,Br(c));b=a.hh.getError();if(!b)return;c=new Bf;i=Bj(b,4);d=new K;d.g$=G(16);F(d,d.g8,A(117));J(d,d.g8,b,10);F(d,d.g8,A(118));b=d.g8;if(i===null)i=A(2);F(d,b,i);e=new H;f=d.g$;j=f.data;g=d.g8;h=j.length;if(g>=0&&
g<=(h-0|0)){e.g9=L(f.data,0,g);c.g_=1;c.ha=1;c.hc=e;E(c);}c=new I;Y(c);E(c);},
AJX=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=a.iX;e=a.jw;if(!e)d=!d.hw?null:d.hu;else{f=d.hs;g=Bd(X(U(O(e),B(2135587861, 2654435769)),d.hy));a:{while(true){h=f.data[g];if(!h){g= -(g+1|0)|0;break a;}if(h==e)break;g=(g+1|0)&d.hv;}}d=g<0?null:d.ht.data[g];}d=d;if(!b)d=!d.hw?null:d.hu;else{f=d.hs;e=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));b:{while(true){g=f.data[e];if(!g){e= -(e+1|0)|0;break b;}if(g==b)break;e=(e+1|0)&d.hv;}}d=e<0?null:d.ht.data[e];}Bp();i=d===null?null:d[Be]===true?d:d.hA;a.hh.uniform1i(i,c);b=a.hh.getError();if
(!b)return;d=new Bf;i=Bj(b,4);j=new K;j.g$=G(16);F(j,j.g8,A(117));J(j,j.g8,b,10);F(j,j.g8,A(118));b=j.g8;if(i===null)i=A(2);F(j,b,i);k=new H;f=j.g$;l=f.data;c=j.g8;e=l.length;if(c>=0&&c<=(e-0|0)){k.g9=L(f.data,0,c);d.g_=1;d.ha=1;d.hc=k;E(d);}d=new I;Y(d);E(d);},
SM=(a,b)=>{let c,d,e,f,g,h,i,j;a.jw=b;c=a.hh;d=a.h3;if(!b)d=!d.hw?null:d.hu;else{e=d.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),d.hy));a:{while(true){g=e.data[f];if(!g){f= -(f+1|0)|0;break a;}if(g==b)break;f=(f+1|0)&d.hv;}}d=f<0?null:d.ht.data[f];}Bp();d=d===null?null:d[Be]===true?d:d.hA;c.useProgram(d);b=a.hh.getError();if(!b)return;c=new Bf;h=Bj(b,4);d=new K;d.g$=G(16);F(d,d.g8,A(117));J(d,d.g8,b,10);F(d,d.g8,A(118));b=d.g8;if(h===null)h=A(2);F(d,b,h);i=new H;e=d.g$;j=e.data;f=d.g8;g=j.length;if(f>=0&&f<=
(g-0|0)){i.g9=L(e.data,0,f);c.g_=1;c.ha=1;c.hc=i;E(c);}c=new I;Y(c);E(c);},
Vb=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.hh.vertexAttribPointer(b,c,d,!!e,f,g);b=a.hh.getError();if(!b)return;h=new Bf;i=Bj(b,4);j=new K;j.g$=G(16);F(j,j.g8,A(117));J(j,j.g8,b,10);F(j,j.g8,A(118));b=j.g8;if(i===null)i=A(2);F(j,b,i);k=new H;l=j.g$;m=l.data;c=j.g8;d=m.length;if(c>=0&&c<=(d-0|0)){k.g9=L(l.data,0,c);h.g_=1;h.ha=1;h.hc=k;E(h);}h=new I;Y(h);E(h);};
function Pb(){let a=this;C.call(a);a.jO=0;a.hs=null;a.ht=null;a.hu=null;a.hw=0;a.pp=0.0;a.m5=0;a.hy=0;a.hv=0;}
let Yt=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.pp=c;d=G8(b,c);a.m5=d*c|0;b=d-1|0;a.hv=b;a.hy=DV(O(b));a.hs=S(d);a.ht=R(C,d);return;}e=new Bs;f=new K;f.g$=G(16);F(f,f.g8,A(40));GS(f,f.g8,c);g=new H;h=f.g$;i=h.data;d=f.g8;j=i.length;if(d>=0&&d<=(j-0|0)){g.g9=L(h.data,0,d);e.g_=1;e.ha=1;e.hc=g;E(e);}f=new I;f.g_=1;f.ha=1;E(f);},
Cr=(a,b)=>{let c=new Pb();Yt(c,a,b);return c;},
Cd=(a,b,c)=>{let d,e,f,g,h;if(!b){d=a.hu;a.hu=c;if(!a.hw){a.hw=1;a.jO=a.jO+1|0;}return d;}e=a.hs;f=Bd(X(U(O(b),B(2135587861, 2654435769)),a.hy));a:{while(true){g=e.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.hv;}}if(f>=0){e=a.ht.data;d=e[f];e[f]=c;return d;}f= -(f+1|0)|0;g[f]=b;a.ht.data[f]=c;b=a.jO+1|0;a.jO=b;if(b>=a.m5)AGM(a,g.length<<1);return null;},
QH=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,n;if(!b){if(!a.hw)return null;a.hw=0;c=a.hu;a.hu=null;a.jO=a.jO-1|0;return c;}d=a.hs;e=U(O(b),B(2135587861, 2654435769));f=a.hy;g=Bd(X(e,f));a:{while(true){h=d.data;i=h[g];if(!i){g= -(g+1|0)|0;break a;}if(i==b)break;g=(g+1|0)&a.hv;}}if(g<0)return null;j=a.ht.data;k=j[g];l=a.hv;m=(g+1|0)&l;while(true){n=h[m];if(!n)break;i=Bd(X(U(O(n),B(2135587861, 2654435769)),f));if(((m-i|0)&l)>((g-i|0)&l)){h[g]=n;j[g]=j[m];g=m;}m=(m+1|0)&l;}h[g]=0;j[g]=null;a.jO=a.jO-1|0;return k;},
AJ6=(a,b,c)=>{let d,e,f,g;a:{d=a.ht;if(b===null){if(a.hw&&a.hu===null)return 1;d=d.data;e=a.hs;f=d.length-1|0;while(true){if(f<0)break a;if(e.data[f]&&d[f]===null)break;f=f+(-1)|0;}return 1;}if(c){if(b===a.hu)return 1;d=d.data;f=d.length-1|0;while(true){if(f<0)break a;if(d[f]===b)break;f=f+(-1)|0;}return 1;}if(a.hw){g=a.hu;if(b===g?1:g instanceof Ed&&g.js==b.js?1:0)return 1;}d=d.data;f=d.length-1|0;while(true){if(f<0)break a;g=d[f];if(b===g?1:g instanceof Ed&&g.js==b.js?1:0)return 1;f=f+(-1)|0;}}return 0;},
AGM=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.hs.data.length;a.m5=b*a.pp|0;d=b-1|0;a.hv=d;d=DV(O(d));a.hy=d;e=a.hs;f=a.ht;g=S(b);a.hs=g;h=R(C,b);a.ht=h;if(a.jO>0){i=h.data;h=g.data;j=0;while(true){if(j>=c)break a;k=e.data[j];if(k){l=f.data[j];b=Bd(X(U(O(k),B(2135587861, 2654435769)),d));while(h[b]){b=(b+1|0)&a.hv;}h[b]=k;i[b]=l;}j=j+1|0;}}}};
function NN(){let a=this;C.call(a);a.i9=0;a.j6=null;a.k5=0;a.qU=0.0;a.ni=0;a.kT=0;a.jZ=0;}
let WL=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.qU=c;d=G8(b,c);a.ni=d*c|0;b=d-1|0;a.jZ=b;a.kT=DV(O(b));a.j6=S(d);return;}e=new Bs;f=new K;f.g$=G(16);F(f,f.g8,A(40));GS(f,f.g8,c);g=new H;h=f.g$;i=h.data;d=f.g8;j=i.length;if(d>=0&&d<=(j-0|0)){g.g9=L(h.data,0,d);e.g_=1;e.ha=1;e.hc=g;E(e);}f=new I;f.g_=1;f.ha=1;E(f);},
K_=(a,b)=>{let c=new NN();WL(c,a,b);return c;},
V3=(a,b)=>{let c,d,e,f;if(!b){if(a.k5)return 0;a.k5=1;a.i9=a.i9+1|0;return 1;}c=a.j6;d=Bd(X(U(O(b),B(2135587861, 2654435769)),a.kT));a:{while(true){e=c.data;f=e[d];if(!f){d= -(d+1|0)|0;break a;}if(f==b)break;d=(d+1|0)&a.jZ;}}if(d>=0)return 0;e[ -(d+1|0)|0]=b;b=a.i9+1|0;a.i9=b;if(b>=a.ni)Wb(a,e.length<<1);return 1;},
AIn=(a,b)=>{let c,d,e,f,g,h,i,j;if(!b){if(!a.k5)return 0;a.k5=0;a.i9=a.i9-1|0;return 1;}c=a.j6;d=U(O(b),B(2135587861, 2654435769));e=a.kT;f=Bd(X(d,e));a:{while(true){g=c.data;h=g[f];if(!h){f= -(f+1|0)|0;break a;}if(h==b)break;f=(f+1|0)&a.jZ;}}if(f<0)return 0;h=a.jZ;i=(f+1|0)&h;while(true){b=g[i];if(!b)break;j=Bd(X(U(O(b),B(2135587861, 2654435769)),e));if(((i-j|0)&h)>((f-j|0)&h)){g[f]=b;f=i;}i=(i+1|0)&h;}g[f]=0;a.i9=a.i9-1|0;return 1;},
Wb=(a,b)=>{let c,d,e,f,g,h,i;a:{c=a.j6.data.length;a.ni=b*a.qU|0;d=b-1|0;a.jZ=d;d=DV(O(d));a.kT=d;e=a.j6;f=S(b);a.j6=f;if(a.i9>0){f=f.data;g=0;while(true){if(g>=c)break a;h=e.data[g];if(h){i=Bd(X(U(O(h),B(2135587861, 2654435769)),d));while(f[i]){i=(i+1|0)&a.jZ;}f[i]=h;}g=g+1|0;}}}};
let PU=D(0);
function IZ(){C.call(this);this.me=null;}
let Sq=a=>{let b;b=a.me;b.mm=1;PM(Br(b.nW));},
VX=a=>{let b;b=a.me;b.mm=1;PM(Br(b.nW));},
R5=a=>{a.me.mm=0;};
let QY=D(0);
function Q6(){let a=this;C.call(a);a.lc=null;a.ok=null;a.sh=null;}
let GT=0;
let AH7=a=>{let b,c,d,e,f,g,h,i,$$je;b=UU();a.lc=b;c=ADM(b);a.ok=c;b=new NU;d=a.lc;e=new Cy;e.iK=0;e.hX=R(C,16);b.mq=e;b.mz=2147483647;b.rt=d;b.rE=c;a.sh=b;b=Dc.l5;Er(b);a:{try{Di(b,a);CO(b);break a;}catch($$e){$$je=BP($$e);d=$$je;}CO(b);E(d);}if(a.lc.state!=='running'?1:0){b=new HJ;b.sf=a;U$(a.lc,BL(b,"unlockFunction"));}else{if(!GT&&Dc.kB>=2){if(BH===null){c=new Ck;e=new B5;DL(e);e.h$=BF(32);Ez(c,e);c.ia=E6();c.h_=G(32);c.ie=0;c.ig=BX;BH=c;}c=new K;c.g$=G(16);Cs(c,c.g8,Cn(A(133)));Cs(c,c.g8,Cn(A(51)));Cs(c,
c.g8,Cn(A(134)));b=new H;f=c.g$;g=f.data;h=c.g8;i=g.length;if(h>=0&&h<=(i-0|0)){b.g9=L(f.data,0,h);BI(Br(b));BI("\n");}else{b=new I;b.g_=1;b.ha=1;E(b);}}GT=1;}},
AIs=()=>{let a=new Q6();AH7(a);return a;},
AGF=a=>{a.ok.disconnect(a.lc.destination);},
AC3=a=>{a.ok.connect(a.lc.destination);},
U$=(b,c)=>{var userInputEventNames=['click','contextmenu','auxclick','dblclick','mousedown','mouseup','pointerup','touchend','keydown','keyup','touchstart'];var unlock=function(e){b.resume();c();userInputEventNames.forEach(function(eventName){document.removeEventListener(eventName,unlock);});};userInputEventNames.forEach(function(eventName){document.addEventListener(eventName,unlock);});},
UU=()=>{var AudioContext=window.AudioContext||window.webkitAudioContext;if(AudioContext){var audioContext=new AudioContext();return audioContext;}return null;},
ADM=b=>{var gainNode=null;if(b.createGain)gainNode=b.createGain();else gainNode=b.createGainNode();gainNode.gain.value=1.0;gainNode.connect(b.destination);return gainNode;};
function KJ(){CM.call(this);this.q_=null;}
let PR=D(CE);
function H8(){Cv.call(this);this.oK=null;}
let I=D(BA);
let U2=a=>{a.g_=1;a.ha=1;},
TC=()=>{let a=new I();U2(a);return a;};
let DT=D(0);
let L8=D(0);
let Nt=D(0);
let Nk=D(0);
let Ow=D(0);
let QU=D(0);
let Pm=D(0);
let LQ=D(0);
let H6=D(0);
let K5=D();
let AEh=(a,b)=>{b=a.di(b);Bp();return b===null?null:b instanceof E0()&&b instanceof DD?(b[Be]===true?b:b.hA):b;},
AG0=(a,b,c)=>{a.dj(V(b),CC(c,"handleEvent"));},
AGk=(a,b,c)=>{a.dk(V(b),CC(c,"handleEvent"));},
AD6=(a,b,c,d)=>{a.dl(V(b),CC(c,"handleEvent"),d?1:0);},
AIS=(a,b)=>{return !!a.dm(b);},
Vc=a=>{return a.dn();},
R4=(a,b,c,d)=>{a.dp(V(b),CC(c,"handleEvent"),d?1:0);};
let IG=D();
function Hh(){let a=this;IG.call(a);a.m9=0;a.kp=null;a.pP=0.0;a.nk=0;a.l2=0;a.lK=0;a.qW=0;}
let Re=null,ME=null;
let H1=(a,b)=>{let c,d,e;a.lK=(-1);if(b<0){c=new Bs;c.g_=1;c.ha=1;E(c);}a.m9=0;if(!b)b=1;d=R(Gv,b);e=d.data;a.kp=d;b=e.length;a.l2=b;a.pP=0.75;a.nk=b*0.75|0;},
ALr=a=>{let b=new Hh();H1(b,a);return b;},
CD=(a,b,c)=>{let d,e,f,g,h,i,j;Er(a);try{if(b!==null&&c!==null){a:{if(!b.h6){d=0;while(true){if(d>=b.g9.length)break a;b.h6=(31*b.h6|0)+b.g9.charCodeAt(d)|0;d=d+1|0;}}}e=b.h6&2147483647;f=a.kp.data;g=e%f.length|0;h=f[g];while(h!==null){b:{d=h.p_;if(!b.h6){i=0;while(true){if(i>=b.g9.length)break b;b.h6=(31*b.h6|0)+b.g9.charCodeAt(i)|0;i=i+1|0;}}}if(d==b.h6&&h.jx.X(b)?1:0)break;h=h.mH;}if(h!==null){j=h.jY;h.jY=c;return j;}a.qW=a.qW+1|0;d=a.m9+1|0;a.m9=d;if(d>a.nk){AB5(a);g=e%a.kp.data.length|0;}if(g<a.l2)a.l2
=g;if(g>a.lK)a.lK=g;c:{j=new Gv;j.jx=b;j.jY=c;if(!b.h6){d=0;while(true){if(d>=b.g9.length)break c;b.h6=(31*b.h6|0)+b.g9.charCodeAt(d)|0;d=d+1|0;}}}j.p_=b.h6;f=a.kp.data;j.mH=f[g];f[g]=j;return null;}b=new CU;b.g_=1;b.ha=1;E(b);}finally{CO(a);}},
AB5=a=>{let b,c,d,e,f,g,h,i,j;b=(a.kp.data.length<<1)+1|0;if(!b)b=1;c=(-1);d=R(Gv,b);e=d.data;f=a.lK+1|0;g=b;while(true){f=f+(-1)|0;if(f<a.l2)break;h=a.kp.data[f];while(h!==null){i=(h.jx.W()&2147483647)%b|0;if(i<g)g=i;if(i>c)c=i;j=h.mH;h.mH=e[i];e[i]=h;h=j;}}a.l2=g;a.lK=c;a.kp=d;a.nk=e.length*a.pP|0;},
AMk=()=>{Re=new HF;ME=new HE;};
function Jv(){Hh.call(this);this.r$=null;}
let Y6=D();
let E3=D(BR);
let Hd=null,GY=null,IC=null,N2=null,AFp=null;
let AB_=()=>{let b,c,d,e;b=new E3;b.hx=A(135);b.hm=0;Hd=b;c=new E3;c.hx=A(136);c.hm=1;GY=c;d=new E3;d.hx=A(131);d.hm=2;IC=d;e=new E3;e.hx=A(137);e.hm=3;N2=e;AFp=P(E3,[b,c,d,e]);};
let CN=D();
let WG=D(CN);
let VZ=D(CN);
let AAA=D(CN);
let ADn=D(CN);
let Zk=D(CN);
function Io(){C.call(this);this.r5=null;}
let Z8=(a,b)=>{b.preventDefault();};
function Ip(){C.call(this);this.sr=null;}
let AJI=(a,b)=>{b.preventDefault();};
function In(){let a=this;C.call(a);a.oW=null;a.oP=null;a.o9=null;}
let ACK=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{b.preventDefault();c=b.dataTransfer.files;d=c.length;if(d>0){e=new Cy;e.iK=1;e.hX=R(C,16);f=0;while(true){if(f>=d)break a;g=c[f];h=V(g.name);i=Fo(h,46,h.g9.length-1|0);b=i==(-1)?A(59):Cc(h,i+1|0,h.g9.length);j=b.g9.toLowerCase();if(j!==b.g9)b=OY(j);if(Uy(b))j=Ej;else{if(b===A(138))k=1;else if(!(A(138) instanceof H))k=0;else{j=A(138);k=b.g9!==j.g9?0:1;}b:{if(!k){if(b===A(139))k=1;else if(!(A(139) instanceof H))k=0;else{j=A(139);k=b.g9!==j.g9?0:1;}if(!k){if(b===A(140))k
=1;else if(!(A(140) instanceof H))k=0;else{j=A(140);k=b.g9!==j.g9?0:1;}if(!k){k=0;break b;}}}k=1;}j=k?D6:!Zy(b)?Ea:Eq;}l=new FileReader();b=new Ji;b.mK=a;b.ny=j;b.oz=h;b.ma=e;b.oE=d;l.addEventListener("load",BL(b,"handleEvent"));if(j!==Ea&&j!==D6){if(j===Ej)l.readAsDataURL(g);else if(j===Eq)l.readAsText(g);}else l.readAsArrayBuffer(g);f=f+1|0;}}}},
AEW=(a,b)=>{ACK(a,b);};
function NU(){let a=this;Cv.call(a);a.rt=null;a.rE=null;}
let PZ=D(0);
function HJ(){C.call(this);this.sf=null;}
let WX=a=>{let b,c,d,e,f,g;if(!GT&&Dc.kB>=2){if(BH===null){b=new Ck;Qy(b,AHI(32),0);BH=b;}b=new K;b.g$=G(16);Ii(b,b.g8,A(133));Ii(b,b.g8,A(51));Ii(b,b.g8,A(134));c=new H;d=b.g$;e=d.data;f=b.g8;g=e.length;if(f>=0&&f<=(g-0|0)){c.g9=L(d.data,0,f);BI(Br(c));BI("\n");}else E(TC());}GT=1;};
let VL=D(CN);
function Ne(){let a=this;C.call(a);a.hI=null;a.ij=0;a.np=null;a.oU=0;a.k7=0;a.j8=0;a.iB=0;a.pR=null;}
let HM=(a,b,c)=>{let d,e,f,g,h,i,j,k;d=new HV;d.ib=R(C,10);e=MC(a,b);f=0;g=0;if(!b.g9.length){h=R(H,1);h.data[0]=A(59);return h;}a:{while(true){if(!MT(e))break a;i=f+1|0;if(i>=c&&c>0)break a;j=e.jH;if(!j.j3){b=new CV;b.g_=1;b.ha=1;Bl(b);E(b);}if(0>=j.kR){b=new I;d=new K;BB(d);d.g$=G(16);J(d,d.g8,0,10);e=new H;h=d.g$;k=h.data;f=d.g8;g=k.length;if(f>=0&&f<=(g-0|0)){e.g9=L(h.data,0,f);b.g_=1;b.ha=1;b.hc=e;E(b);}b=new I;b.g_=1;b.ha=1;E(b);}j=Cc(b,g,j.id.data[0]);Fn(d,d.hK+1|0);h=d.ib.data;f=d.hK;d.hK=f+1|0;h[f]
=j;d.iF=d.iF+1|0;j=e.jH;if(!j.j3)break;if(0>=j.kR){b=new I;d=new K;BB(d);d.g$=G(16);J(d,d.g8,0,10);e=new H;h=d.g$;k=h.data;f=d.g8;g=k.length;if(f>=0&&f<=(g-0|0)){e.g9=L(h.data,0,f);b.g_=1;b.ha=1;b.hc=e;E(b);}b=new I;b.g_=1;b.ha=1;E(b);}g=j.id.data[1];f=i;}b=new CV;b.g_=1;b.ha=1;Bl(b);E(b);}b:{b=Cc(b,g,b.g9.length);Fn(d,d.hK+1|0);h=d.ib.data;i=d.hK;d.hK=i+1|0;h[i]=b;d.iF=d.iF+1|0;f=f+1|0;if(!c){while(true){f=f+(-1)|0;if(f<0)break b;if(f<0)break;if(f>=d.hK)break;if(d.ib.data[f].g9.length)break b;PE(d,f);}b=new I;b.g_
=1;b.ha=1;E(b);}}if(f<0)f=0;return W8(d,R(H,f));},
Gx=(b,c)=>{let d;if(b===null){b=new CU;b.g_=1;b.ha=1;b.hc=A(141);E(b);}if(c&&(c|255)!=255){b=new Bs;b.g_=1;b.ha=1;b.hc=A(59);E(b);}M=1;d=new Ne;d.np=R(CA,10);d.k7=(-1);d.j8=(-1);d.iB=(-1);return XK(d,b,c);},
XK=(a,b,c)=>{let d,e,f;a.hI=Xn(b,c);a.ij=c;b=Ra(a,(-1),c,null);a.pR=b;d=a.hI;if(!d.h1&&!d.ho&&d.hk==d.io&&!(d.hM===null?0:1)?1:0){if(a.oU)b.dA();return a;}b=new BT;e=d.hY;f=d.iV;b.g_=1;b.ha=1;b.hC=(-1);b.h0=A(59);b.hW=e;b.hC=f;E(b);},
AJc=(a,b)=>{let c,d,e,f,g,h;c=new B7;d=a.ij;e=(d&2)!=2?0:1;f=(d&64)!=64?0:1;g=new Ba;g.hi=S(64);c.hl=g;g=new Ba;g.hi=S(2);c.hp=g;c.mA=e;c.m_=f;while(true){h=a.hI;d=h.h1;if(!d&&!h.ho&&h.hk==h.io&&!(h.hM===null?0:1)?1:0)break;f=!d&&!h.ho&&h.hk==h.io&&!(h.hM===null?0:1)?1:0;if(!(!f&&!(h.hM===null?0:1)&&(d<0?0:1)?1:0))break;f=h.ho;if(f&&f!=(-536870788)&&f!=(-536870871))break;Bi(h);Ch(c,h.jX);g=a.hI;if(g.h1!=(-536870788))continue;Bi(g);}g=IV(a,c);g.dE(b);return g;},
Ra=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new HV;e.ib=R(C,10);f=a.ij;g=0;if(c!=f)a.ij=c;a:{switch(b){case -1073741784:h=new NH;i=a.iB+1|0;a.iB=i;C3();c=M;M=c+1|0;d=new T;d.g$=G(20);h.hj=(J(d,d.g8,c,10)).bj();h.ih=i;break a;case -536870872:case -268435416:break;case -134217688:case -67108824:h=new Ml;i=a.iB+1|0;a.iB=i;C3();c=M;M=c+1|0;d=new T;d.g$=G(20);h.hj=(J(d,d.g8,c,10)).bj();h.ih=i;break a;case -33554392:h=new Oe;i=a.iB+1|0;a.iB=i;C3();c=M;M=c+1|0;d=new T;d.g$=G(20);h.hj=(J(d,d.g8,c,10)).bj();h.ih=i;break a;default:i
=a.k7+1|0;a.k7=i;if(d!==null){h=new CA;C3();c=M;M=c+1|0;d=new T;d.g$=G(20);h.hj=(J(d,d.g8,c,10)).bj();h.ih=i;}else{h=new EW;C3();j=M;M=j+1|0;d=new T;d.g$=G(20);h.hj=(J(d,d.g8,j,10)).bj();h.ih=0;g=1;}c=a.k7;if(c<=(-1))break a;if(c>=10)break a;a.np.data[c]=h;break a;}h=new Q7;C3();j=M;M=j+1|0;d=new T;d.g$=G(20);h.hj=(J(d,d.g8,j,10)).bj();h.ih=(-1);}while(true){k=a.hI;l=k.h1;j=!l&&!k.ho&&k.hk==k.io&&!(k.hM===null?0:1)?1:0;j=!j&&!(k.hM===null?0:1)&&(l<0?0:1)?1:0;if(j&&k.ho==(-536870788))k=AJc(a,h);else if(l==(-536870788))
{k=new D2;j=M;M=j+1|0;d=new T;d.g$=G(20);k.hj=(J(d,d.g8,j,10)).bj();k.hb=h;k.hE=1;k.hR=1;k.hE=0;Bi(a.hI);}else{k=LZ(a,h);d=a.hI;if(d.h1==(-536870788))Bi(d);}if(k!==null){Fn(e,e.hK+1|0);m=e.ib.data;l=e.hK;e.hK=l+1|0;m[l]=k;e.iF=e.iF+1|0;}k=a.hI;j=k.h1;if(!j&&!k.ho&&k.hk==k.io&&!(k.hM===null?0:1)?1:0)break;if(j==(-536870871))break;}if(k.jX==(-536870788)){k=new D2;c=M;M=c+1|0;d=new T;d.g$=G(20);k.hj=(J(d,d.g8,c,10)).bj();k.hb=h;k.hE=1;k.hR=1;k.hE=0;Fn(e,e.hK+1|0);m=e.ib.data;j=e.hK;e.hK=j+1|0;m[j]=k;e.iF=e.iF+
1|0;}if(a.ij!=f&&!g){a.ij=f;k=a.hI;k.hT=f;k.ho=k.h1;k.jD=k.hM;j=k.iV;k.hk=j+1|0;k.lG=j;Bi(k);}switch(b){case -1073741784:break;case -536870872:d=new Kx;b=M;M=b+1|0;k=new T;BB(k);k.g$=G(20);d.hj=(J(k,k.g8,b,10)).bj();d.h2=e;d.iC=h;d.hV=h.ih;return d;case -268435416:d=new Qc;b=M;M=b+1|0;k=new T;BB(k);k.g$=G(20);d.hj=(J(k,k.g8,b,10)).bj();d.h2=e;d.iC=h;d.hV=h.ih;return d;case -134217688:d=new Ni;b=M;M=b+1|0;k=new T;BB(k);k.g$=G(20);d.hj=(J(k,k.g8,b,10)).bj();d.h2=e;d.iC=h;d.hV=h.ih;return d;case -67108824:k=new Ou;b
=M;M=b+1|0;d=new T;BB(d);d.g$=G(20);k.hj=(J(d,d.g8,b,10)).bj();k.h2=e;k.iC=h;k.hV=h.ih;return k;case -33554392:d=new Dk;b=M;M=b+1|0;k=new T;k.g$=G(20);d.hj=(J(k,k.g8,b,10)).bj();d.h2=e;d.iC=h;d.hV=h.ih;return d;default:c=e.hK;switch(c){case 0:d=new D2;b=M;M=b+1|0;e=new T;e.g$=G(20);d.hj=(J(e,e.g8,b,10)).bj();d.hb=h;d.hE=1;d.hR=1;d.hE=0;return d;case 1:d=new EP;if(0>=c){d=new I;d.g_=1;d.ha=1;E(d);}e=e.ib.data[0];b=M;M=b+1|0;k=new T;k.g$=G(20);d.hj=(J(k,k.g8,b,10)).bj();d.iL=e;d.iC=h;d.hV=h.ih;return d;default:}d
=new BU;b=M;M=b+1|0;k=new T;k.g$=G(20);d.hj=(J(k,k.g8,b,10)).bj();d.h2=e;d.iC=h;d.hV=h.ih;return d;}k=new Hm;j=M;M=j+1|0;d=new T;d.g$=G(20);k.hj=(J(d,d.g8,j,10)).bj();k.h2=e;k.iC=h;k.hV=h.ih;return k;},
AF5=a=>{let b,c,d,e,f,g,h,i,j,k;b=new Lo;b.g$=G(16);while(true){c=a.hI;d=c.h1;if(!d&&!c.ho&&c.hk==c.io&&!(c.hM===null?0:1)?1:0)break;e=!d&&!c.ho&&c.hk==c.io&&!(c.hM===null?0:1)?1:0;if(!(!e&&!(c.hM===null?0:1)&&(d<0?0:1)?1:0))break;if(d<=56319&&d>=55296?1:0)break;if(d<=57343&&d>=56320?1:0)break;f=c.jD;d=f===null?0:1;if(!(!d&&!c.ho)){d=f===null?0:1;if(!(!d&&(c.ho<0?0:1))){g=c.ho;if(g!=(-536870871)&&(g&(-2147418113))!=(-2147483608)&&g!=(-536870788)&&g!=(-536870876))break;}}Bi(c);e=c.jX;if(!(e>=65536&&e<=1114111
?1:0)){d=e&65535;e=b.g8;Bn(b,e,e+1|0);b.g$.data[e]=d;}else{h=(EN(e)).data;d=0;e=h.length;g=b.g8;Bn(b,g,g+e|0);i=e+d|0;while(d<i){j=b.g$.data;k=g+1|0;e=d+1|0;j[g]=h[d];g=k;d=e;}}}e=a.ij;if(!((e&2)!=2?0:1))return ZP(b);if(!((e&64)!=64?0:1)){c=new KZ;d=M;M=d+1|0;f=new T;f.g$=G(20);c.hj=(J(f,f.g8,d,10)).bj();c.hE=1;f=new H;h=b.g$;j=h.data;e=b.g8;g=j.length;if(e>=0&&e<=(g-0|0)){f.g9=L(h.data,0,e);c.lI=f;c.hE=b.g8;return c;}b=new I;b.g_=1;b.ha=1;E(b);}c=new Ks;d=M;M=d+1|0;f=new T;f.g$=G(20);c.hj=(J(f,f.g8,d,10)).bj();c.hE
=1;f=new K;f.g$=G(16);e=0;while(true){d=B4(e,b.g8);if(d>=0){b=new H;h=f.g$;j=h.data;g=f.g8;d=j.length;if(g>=0&&g<=(d-0|0)){b.g9=L(h.data,0,g);c.my=b;c.hE=f.g8;return c;}b=new I;b.g_=1;b.ha=1;E(b);}if(e<0)break;if(d>=0)break;d=b.g$.data[e];if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}d=B1(BC,d)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}i=B1(BD,d)&65535;g=f.g8;Bn(f,g,g+1|0);f.g$.data[g]=i;e=e+1|0;}b=new I;b.g_=1;b.ha=1;E(b);},
AGf=a=>{let b,c,d,e,f,g,h,i,j;b=S(4);c=(-1);d=(-1);e=a.hI;f=e.h1;if(!(!f&&!e.ho&&e.hk==e.io&&!(e.hM===null?0:1)?1:0)){g=!f&&!e.ho&&e.hk==e.io&&!(e.hM===null?0:1)?1:0;if(!g&&!(e.hM===null?0:1)&&(f<0?0:1)?1:0){h=b.data;Bi(e);c=e.jX;h[0]=c;d=c-4352|0;}}if(d>=0&&d<19){h=G(3);b=h.data;b[0]=c&65535;e=a.hI;i=e.h1;c=i-4449|0;if(c>=0&&c<21){b[1]=i&65535;Bi(e);e=a.hI;i=e.h1;d=i-4519|0;if(d>=0&&d<28){b[2]=i&65535;Bi(e);e=new Go;c=M;M=c+1|0;j=new T;j.g$=G(20);e.hj=(J(j,j.g8,c,10)).bj();e.kf=h;e.lT=3;return e;}e=new Go;c
=M;M=c+1|0;j=new T;j.g$=G(20);e.hj=(J(j,j.g8,c,10)).bj();e.kf=h;e.lT=2;return e;}i=a.ij;if(!((i&2)!=2?0:1)){e=new C_;i=b[0];c=M;M=c+1|0;j=new T;j.g$=G(20);e.hj=(J(j,j.g8,c,10)).bj();e.hE=1;e.iD=i;return e;}if(!((i&64)!=64?0:1)){e=new Hv;i=b[0];c=M;M=c+1|0;j=new T;j.g$=G(20);e.hj=(J(j,j.g8,c,10)).bj();e.hE=1;e.or=i;e.nc=EE(i);return e;}e=new J2;i=b[0];c=M;M=c+1|0;j=new T;j.g$=G(20);e.hj=(J(j,j.g8,c,10)).bj();e.hE=1;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}i=B1(BC,i)&65535;if
(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}e.m1=B1(BD,i)&65535;return e;}h=b.data;c=1;while(c<4){e=a.hI;g=e.h1;if(!g&&!e.ho&&e.hk==e.io&&!(e.hM===null?0:1)?1:0)break;i=!g&&!e.ho&&e.hk==e.io&&!(e.hM===null?0:1)?1:0;if(!(!i&&!(e.hM===null?0:1)&&(g<0?0:1)?1:0))break;i=c+1|0;Bi(e);h[c]=e.jX;c=i;}if(c==1){i=h[0];if(!(Um.cW(i)==AGw?0:1))return Q5(a,h[0]);}d=a.ij;if(!((d&2)!=2?0:1)){e=new Ec;i=M;M=i+1|0;j=new T;j.g$=G(20);e.hj=(J(j,j.g8,i,10)).bj();e.ky=1;e.kK=b;e.kH=c;return e;}if
((d&64)!=64?0:1){e=new QZ;i=M;M=i+1|0;j=new T;j.g$=G(20);e.hj=(J(j,j.g8,i,10)).bj();e.ky=1;e.kK=b;e.kH=c;return e;}e=new OQ;i=M;M=i+1|0;j=new T;j.g$=G(20);e.hj=(J(j,j.g8,i,10)).bj();e.ky=1;e.kK=b;e.kH=c;return e;},
LZ=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.hI;d=c.h1;e=!d&&!c.ho&&c.hk==c.io&&!(c.hM===null?0:1)?1:0;e=!e&&!(c.hM===null?0:1)&&(d<0?0:1)?1:0;if(e&&!(c.jD===null?0:1)&&(c.ho<0?0:1)){if(!((a.ij&128)!=128?0:1)){e=d<=56319&&d>=55296?1:0;f=!e&&!(d<=57343&&d>=56320?1:0)?AF5(a):J7(a,b,QX(a,b));}else{f=AGf(a);g=a.hI;e=g.h1;if(!(!e&&!g.ho&&g.hk==g.io&&!(g.hM===null?0:1)?1:0)&&!(e==(-536870871)&&!(b instanceof EW))&&e!=(-536870788)){h=!e&&!g.ho&&g.hk==g.io&&!(g.hM===null?0:1)?1:0;if(!(!h&&!(g.hM===null?0:1)&&(e<0?0:1)?1:0))f
=J7(a,b,f);}}}else if(d!=(-536870871))f=J7(a,b,QX(a,b));else{if(b instanceof EW){b=new BT;g=c.hY;h=c.iV;b.g_=1;b.ha=1;b.hC=(-1);b.h0=A(59);b.hW=g;b.hC=h;E(b);}f=new D2;e=M;M=e+1|0;c=new T;c.g$=G(20);f.hj=(J(c,c.g8,e,10)).bj();f.hb=b;f.hE=1;f.hR=1;f.hE=0;}c=a.hI;d=c.h1;e=!d&&!c.ho&&c.hk==c.io&&!(c.hM===null?0:1)?1:0;if(!e&&!(d==(-536870871)&&!(b instanceof EW))&&d!=(-536870788)){g=LZ(a,b);if(f instanceof CJ&&!(f instanceof D$)&&!(f instanceof CL)&&!(f instanceof D8)){b=f;if(!g.dU(b.hB)){f=new Qo;c=b.hB;i=b.hb;j
=b.hR;e=M;M=e+1|0;b=new T;b.g$=G(20);f.hj=(J(b,b.g8,e,10)).bj();f.hb=i;f.hB=c;f.hR=j;f.hL=c;c.dE(f);}}if((g.dV()&65535)!=43)f.dE(g);else f.dE(g.hB);}else{if(f===null)return null;f.dE(b);}if((f.dV()&65535)!=43)return f;return f.hB;},
J7=(a,b,c)=>{let d,e,f,g,h,i,j;d=a.hI;e=d.h1;if(c!==null&&!(c instanceof B2)){switch(e){case -2147483606:Bi(d);d=new Rm;f=M;M=f+1|0;g=new T;g.g$=G(20);d.hj=(J(g,g.g8,f,10)).bj();d.hb=b;d.hB=c;d.hR=e;C3();c.dE(F4);return d;case -2147483605:Bi(d);d=new Mg;h=M;M=h+1|0;g=new T;g.g$=G(20);d.hj=(J(g,g.g8,h,10)).bj();d.hb=b;d.hB=c;d.hR=(-2147483606);C3();c.dE(F4);return d;case -2147483585:Bi(d);d=new L6;h=M;M=h+1|0;g=new T;BB(g);g.g$=G(20);d.hj=(J(g,g.g8,h,10)).bj();d.hb=b;d.hB=c;d.hR=(-536870849);C3();c.dE(F4);return d;case -2147483525:g
=new KW;i=d.hM;Bi(d);d=i;f=a.j8+1|0;a.j8=f;j=M;M=j+1|0;i=new T;BB(i);i.g$=G(20);g.hj=(J(i,i.g8,j,10)).bj();g.hb=b;g.hB=c;g.hR=(-536870849);g.jW=d;g.iZ=f;C3();c.dE(F4);return g;case -1073741782:case -1073741781:Bi(d);d=new Nx;f=M;M=f+1|0;g=new T;g.g$=G(20);d.hj=(J(g,g.g8,f,10)).bj();d.hb=b;d.hB=c;d.hR=e;c.dE(d);return d;case -1073741761:Bi(d);d=new MU;h=M;M=h+1|0;g=new T;BB(g);g.g$=G(20);d.hj=(J(g,g.g8,h,10)).bj();d.hb=b;d.hB=c;d.hR=(-536870849);c.dE(b);return d;case -1073741701:g=new Pq;i=d.hM;Bi(d);d=i;h=a.j8
+1|0;a.j8=h;j=M;M=j+1|0;i=new T;BB(i);i.g$=G(20);g.hj=(J(i,i.g8,j,10)).bj();g.hb=b;g.hB=c;g.hR=(-536870849);g.jW=d;g.iZ=h;c.dE(g);return g;case -536870870:case -536870869:Bi(d);if(c.dV()!=(-2147483602)){d=new CL;f=M;M=f+1|0;g=new T;g.g$=G(20);d.hj=(J(g,g.g8,f,10)).bj();d.hb=b;d.hB=c;d.hR=e;}else{h=a.ij;if((h&32)!=32?0:1){d=new Nz;f=M;M=f+1|0;g=new T;g.g$=G(20);d.hj=(J(g,g.g8,f,10)).bj();d.hb=b;d.hB=c;d.hR=e;}else{d=new Lv;if(!(h&1)){g=EG;if(g===null){g=new G6;EG=g;}}else{g=EQ;if(g===null){g=new G5;EQ=g;}}f=
M;M=f+1|0;i=new T;i.g$=G(20);d.hj=(J(i,i.g8,f,10)).bj();d.hb=b;d.hB=c;d.hR=e;d.mj=g;}}c.dE(d);return d;case -536870849:Bi(d);d=new E_;h=M;M=h+1|0;g=new T;g.g$=G(20);d.hj=(J(g,g.g8,h,10)).bj();d.hb=b;d.hB=c;d.hR=(-536870849);c.dE(b);return d;case -536870789:g=new EI;i=d.hM;Bi(d);d=i;h=a.j8+1|0;a.j8=h;j=M;M=j+1|0;i=new T;i.g$=G(20);g.hj=(J(i,i.g8,j,10)).bj();g.hb=b;g.hB=c;g.hR=(-536870849);g.jW=d;g.iZ=h;c.dE(g);return g;default:}return c;}i=null;if(c!==null)i=c;switch(e){case -2147483606:case -2147483605:Bi(d);d
=new Ro;f=M;M=f+1|0;c=new T;c.g$=G(20);d.hj=(J(c,c.g8,f,10)).bj();d.hb=b;d.hB=i;d.hR=e;d.hL=i;i.hb=d;return d;case -2147483585:Bi(d);c=new Qi;h=M;M=h+1|0;d=new T;BB(d);d.g$=G(20);c.hj=(J(d,d.g8,h,10)).bj();c.hb=b;c.hB=i;c.hR=(-2147483585);c.hL=i;return c;case -2147483525:c=new LY;g=d.hM;Bi(d);d=g;h=M;M=h+1|0;g=new T;BB(g);g.g$=G(20);c.hj=(J(g,g.g8,h,10)).bj();c.hb=b;c.hB=i;c.hR=(-2147483525);c.hL=i;c.le=d;return c;case -1073741782:case -1073741781:Bi(d);d=new MN;f=M;M=f+1|0;c=new T;c.g$=G(20);d.hj=(J(c,c.g8,
f,10)).bj();d.hb=b;d.hB=i;d.hR=e;d.hL=i;i.hb=d;return d;case -1073741761:Bi(d);c=new OT;h=M;M=h+1|0;d=new T;BB(d);d.g$=G(20);c.hj=(J(d,d.g8,h,10)).bj();c.hb=b;c.hB=i;c.hR=(-1073741761);c.hL=i;return c;case -1073741701:c=new Nj;g=d.hM;Bi(d);d=g;h=M;M=h+1|0;g=new T;BB(g);g.g$=G(20);c.hj=(J(g,g.g8,h,10)).bj();c.hb=b;c.hB=i;c.hR=(-1073741701);c.hL=i;c.le=d;return c;case -536870870:case -536870869:Bi(d);d=new CJ;f=M;M=f+1|0;c=new T;c.g$=G(20);d.hj=(J(c,c.g8,f,10)).bj();d.hb=b;d.hB=i;d.hR=e;d.hL=i;i.hb=d;return d;case -536870849:Bi(d);c
=new D8;h=M;M=h+1|0;d=new T;d.g$=G(20);c.hj=(J(d,d.g8,h,10)).bj();c.hb=b;c.hB=i;c.hR=(-536870849);c.hL=i;return c;case -536870789:c=new D$;g=d.hM;Bi(d);d=g;h=M;M=h+1|0;g=new T;g.g$=G(20);c.hj=(J(g,g.g8,h,10)).bj();c.hb=b;c.hB=i;c.hR=(-536870789);c.hL=i;c.le=d;return c;default:}return c;},
QX=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=null;d=b instanceof EW;while(true){a:{e=a.hI;f=e.h1;if((f&(-2147418113))==(-2147483608)){Bi(e);g=(f&16711680)>>16;f=f&(-16711681);if(f==(-16777176))a.ij=g;else{if(f!=(-1073741784))g=a.ij;c=Ra(a,f,g,b);e=a.hI;if(e.h1!=(-536870871)){b=new BT;h=e.hY;i=e.iV;b.g_=1;b.ha=1;b.hC=(-1);b.h0=A(59);b.hW=h;b.hC=i;E(b);}Bi(e);}}else{b:{c:{switch(f){case -2147483599:case -2147483598:case -2147483597:case -2147483596:case -2147483595:case -2147483594:case -2147483593:case -2147483592:case -2147483591:j
=(f&2147483647)-48|0;if(a.k7<j){c=new BT;h=e.hY;i=e.iV;c.g_=1;c.ha=1;c.hC=(-1);c.h0=A(59);c.hW=h;c.hC=i;E(c);}Bi(e);g=a.iB+1|0;a.iB=g;i=a.ij;if(!((i&2)!=2?0:1)){c=new Qr;k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();c.lr=j;c.kE=g;}else if(!((i&64)!=64?0:1)){c=new E7;k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();c.lr=j;c.kE=g;}else{c=new Nc;k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();c.lr=j;c.kE=g;}a.np.data[j].nm=1;a.oU=1;break a;case -2147483583:break;case -2147483582:Bi(e);c
=new Ie;k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();c.om=0;break a;case -2147483577:Bi(e);c=new Lr;k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();break a;case -2147483558:Bi(e);c=new J1;j=a.iB+1|0;a.iB=j;k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();c.kY=j;break a;case -2147483550:Bi(e);c=new Ie;k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();c.om=1;break a;case -2147483526:Bi(e);c=new Qw;k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();break a;case -536870876:break b;case -536870866:Bi(e);i
=a.ij;if((i&32)!=32?0:1){c=new Qt;i=M;M=i+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,i,10)).bj();break a;}c=new LU;if(!(i&1)){h=EG;if(h===null){h=new G6;EG=h;}}else{h=EQ;if(h===null){h=new G5;EQ=h;}}k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();c.nS=h;break a;case -536870821:Bi(e);i=0;c=a.hI;if(c.h1==(-536870818)){i=1;Bi(c);}c=IV(a,Fp(a,i));c.dE(b);h=a.hI;k=h.h1;if(k!=(-536870819)){b=new BT;e=h.hY;i=h.iV;b.g_=1;b.ha=1;b.hC=(-1);b.h0=A(59);b.hW=e;b.hC=i;E(b);}h.jF=1;h.ho=k;h.jD=h.hM;h.hk=h.lG;h.lG=h.iV;Bi(h);Bi(a.hI);break a;case -536870818:break c;case 0:c
=e.hM;h=c;if(h!==null)c=IV(a,h);else{if(!f&&!e.ho&&e.hk==e.io&&!(c===null?0:1)?1:0){c=new D2;k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();c.hb=b;c.hE=1;c.hR=1;c.hE=0;break a;}c=new C_;j=f&65535;k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();c.hE=1;c.iD=j;}Bi(a.hI);break a;default:if(f>=0&&!(e.hM===null?0:1)){c=Q5(a,f);Bi(a.hI);break a;}if(f==(-536870788)){c=new D2;k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();c.hb=b;c.hE=1;c.hR=1;c.hE=0;break a;}if(f!=(-536870871)){b=new BT;c
=e.hM;if(c===null?0:1)c=c.bj();else{k=f&65535;c=new H;l=G(1);m=l.data;m[0]=k;c.g9=L(l.data,0,m.length);}e=a.hI;h=e.hY;i=e.iV;b.g_=1;b.ha=1;b.hC=(-1);b.h0=c;b.hW=h;b.hC=i;E(b);}if(d){b=new BT;h=e.hY;i=e.iV;b.g_=1;b.ha=1;b.hC=(-1);b.h0=A(59);b.hW=h;b.hC=i;E(b);}c=new D2;k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();c.hb=b;c.hE=1;c.hR=1;c.hE=0;break a;}Bi(e);c=new IF;k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();break a;}Bi(e);a.iB=a.iB+1|0;i=a.ij;if(!((i&8)!=8?0:1)){c=new IF;k=M;M=k+1|
0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();break a;}c=new K1;if(!(i&1)){h=EG;if(h===null){h=new G6;EG=h;}}else{h=EQ;if(h===null){h=new G5;EQ=h;}}k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();c.pM=h;break a;}Bi(e);j=a.iB+1|0;a.iB=j;i=a.ij;if((i&8)!=8?0:1){if((i&1)!=1?0:1){c=new Og;i=M;M=i+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,i,10)).bj();c.mB=j;}else{c=new Ku;k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();c.lj=j;}}else if((i&1)!=1?0:1){c=new Qj;k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=
(J(e,e.g8,k,10)).bj();c.mp=j;}else{c=new J1;k=M;M=k+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,k,10)).bj();c.kY=j;}}}if(f!=(-16777176))break;}return c;},
Fp=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,$$je;c=new B7;d=a.ij;e=(d&2)!=2?0:1;d=(d&64)!=64?0:1;f=new Ba;f.hi=S(64);c.hl=f;f=new Ba;f.hi=S(2);c.hp=f;c.mA=e;c.m_=d;DH(c,b);g=(-1);h=0;i=0;j=1;a:{b:{c:while(true){k=a.hI;b=k.h1;if(!b&&!k.ho&&k.hk==k.io&&!(k.hM===null?0:1)?1:0)break a;i=b==(-536870819)&&!j?0:1;if(!i)break a;d:{switch(b){case -536870874:if(g>=0)Ch(c,g);f=a.hI;Bi(f);g=f.jX;f=a.hI;if(f.h1!=(-536870874)){g=38;break d;}if(f.ho==(-536870821)){Bi(f);h=1;g=(-1);break d;}Bi(f);if(j){c=Fp(a,0);break d;}if(a.hI.h1
==(-536870819))break d;QB(c,Fp(a,0));break d;case -536870867:if(!j){b=k.ho;if(b!=(-536870819)&&b!=(-536870821)&&g>=0){Bi(k);k=a.hI;d=k.h1;if(k.hM===null?0:1)break c;if(d<0){b=k.ho;if(b!=(-536870819)&&b!=(-536870821)&&g>=0)break c;}e:{try{if(Y7(d))break e;d=d&65535;break e;}catch($$e){$$je=BP($$e);if($$je instanceof CE){break b;}else{throw $$e;}}}try{By(c,g,d);}catch($$e){$$je=BP($$e);if($$je instanceof CE){break b;}else{throw $$e;}}Bi(a.hI);g=(-1);break d;}}if(g>=0)Ch(c,g);g=45;Bi(a.hI);break d;case -536870821:if
(g>=0){Ch(c,g);g=(-1);}Bi(a.hI);e=0;f=a.hI;if(f.h1==(-536870818)){Bi(f);e=1;}if(!h)RS(c,Fp(a,e));else QB(c,Fp(a,e));h=0;Bi(a.hI);break d;case -536870819:break;case -536870818:if(g>=0)Ch(c,g);g=94;Bi(a.hI);break d;case 0:if(g>=0)Ch(c,g);f=a.hI.hM;if(f===null)g=0;else{AKM(c,f);g=(-1);}Bi(a.hI);break d;default:if(g>=0)Ch(c,g);f=a.hI;Bi(f);g=f.jX;break d;}if(g>=0)Ch(c,g);g=93;Bi(a.hI);}j=0;}c=new BT;l=k.hY;g=k.iV;c.g_=1;c.ha=1;c.hC=(-1);c.h0=A(59);c.hW=l;c.hC=g;E(c);}c=new BT;k=a.hI;l=k.hY;g=k.iV;c.g_=1;c.ha=1;c.hC
=(-1);c.h0=A(59);c.hW=l;c.hC=g;E(c);}if(!i){if(g>=0)Ch(c,g);return c;}c=new BT;l=k.hY;b=k.iV-1|0;c.g_=1;c.ha=1;c.hC=(-1);c.h0=A(59);c.hW=l;c.hC=b;E(c);},
Q5=(a,b)=>{let c,d,e,f,g,h;c=b>=65536&&b<=1114111?1:0;d=a.ij;if((d&2)!=2?0:1){a:{if(!(b>=97&&b<=122)){if(b<65)break a;if(b>90)break a;}e=new Hv;b=b&65535;f=M;M=f+1|0;g=new T;g.g$=G(20);e.hj=(J(g,g.g8,f,10)).bj();e.hE=1;e.or=b;e.nc=EE(b);return e;}if(((d&64)!=64?0:1)&&b>128){if(c){e=new Kq;f=M;M=f+1|0;g=new T;g.g$=G(20);e.hj=(J(g,g.g8,f,10)).bj();e.hE=1;e.hE=2;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b);if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null
?V(Bu.value):null)));}e.pB=B1(BD,b);return e;}if(b<=57343&&b>=56320?1:0){e=new FS;b=b&65535;f=M;M=f+1|0;g=new T;g.g$=G(20);e.hj=(J(g,g.g8,f,10)).bj();e.kz=b;return e;}if(b<=56319&&b>=55296?1:0){e=new FZ;b=b&65535;f=M;M=f+1|0;g=new T;g.g$=G(20);e.hj=(J(g,g.g8,f,10)).bj();e.ko=b;return e;}e=new J2;b=b&65535;f=M;M=f+1|0;g=new T;g.g$=G(20);e.hj=(J(g,g.g8,f,10)).bj();e.hE=1;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value
!==null?V(Bu.value):null)));}e.m1=B1(BD,b)&65535;return e;}}if(c){e=new Dq;f=M;M=f+1|0;g=new T;g.g$=G(20);e.hj=(J(g,g.g8,f,10)).bj();e.hE=1;e.hE=2;e.kN=b;h=(EN(b)).data;e.ln=h[0];e.kU=h[1];return e;}if(b<=57343&&b>=56320?1:0){e=new FS;b=b&65535;f=M;M=f+1|0;g=new T;g.g$=G(20);e.hj=(J(g,g.g8,f,10)).bj();e.kz=b;return e;}if(b<=56319&&b>=55296?1:0){e=new FZ;b=b&65535;f=M;M=f+1|0;g=new T;g.g$=G(20);e.hj=(J(g,g.g8,f,10)).bj();e.ko=b;return e;}e=new C_;b=b&65535;f=M;M=f+1|0;g=new T;g.g$=G(20);e.hj=(J(g,g.g8,f,10)).bj();e.hE
=1;e.iD=b;return e;},
IV=(a,b)=>{let c,d,e,f,g,h;if(!ACi(b)){if(b.hO){if(!b.d4()){c=new CS;d=M;M=d+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,d,10)).bj();c.iT=b.d5();c.mt=b.hz;return c;}c=new Hy;d=M;M=d+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,d,10)).bj();c.iT=b.d5();c.mt=b.hz;return c;}if(b.d4()){c=new H2;d=M;M=d+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,d,10)).bj();c.hE=1;c.nH=b.d5();c.pt=b.hz;return c;}c=new Dd;d=M;M=d+1|0;e=new T;e.g$=G(20);c.hj=(J(e,e.g8,d,10)).bj();c.hE=1;c.i_=b.d5();c.p7=b.hz;return c;}c=TH(b);e=new KC;d=M;M=d+1|0;f=
new T;f.g$=G(20);e.hj=(J(f,f.g8,d,10)).bj();e.pl=c;e.q9=c.hz;if(b.hO){if(!b.d4()){c=new FB;f=new CS;b=Gj(b);d=M;M=d+1|0;g=new T;g.g$=G(20);f.hj=(J(g,g.g8,d,10)).bj();f.iT=b;f.mt=b.hz;d=M;M=d+1|0;b=new T;b.g$=G(20);c.hj=(J(b,b.g8,d,10)).bj();c.lg=f;c.k8=e;return c;}c=new FB;f=new Hy;g=Gj(b);h=M;M=h+1|0;b=new T;b.g$=G(20);f.hj=(J(b,b.g8,h,10)).bj();f.iT=g;f.mt=g.hz;d=M;M=d+1|0;b=new T;b.g$=G(20);c.hj=(J(b,b.g8,d,10)).bj();c.lg=f;c.k8=e;return c;}if(b.d4()){c=new FB;f=new H2;b=Gj(b);d=M;M=d+1|0;g=new T;g.g$=G(20);f.hj
=(J(g,g.g8,d,10)).bj();f.hE=1;f.nH=b;f.pt=b.hz;d=M;M=d+1|0;b=new T;b.g$=G(20);c.hj=(J(b,b.g8,d,10)).bj();c.lg=f;c.k8=e;return c;}c=new FB;f=new Dd;b=Gj(b);d=M;M=d+1|0;g=new T;g.g$=G(20);f.hj=(J(g,g.g8,d,10)).bj();f.hE=1;f.i_=b;f.p7=b.hz;d=M;M=d+1|0;b=new T;b.g$=G(20);c.hj=(J(b,b.g8,d,10)).bj();c.lg=f;c.k8=e;return c;},
EE=b=>{if(b>=97&&b<=122)b=(b-32|0)&65535;else if(b>=65&&b<=90)b=(b+32|0)&65535;return b;};
let JW=D(0);
function N8(){let a=this;C.call(a);a.rx=null;a.qD=null;a.mo=null;a.jH=null;a.mh=0;a.nx=0;}
let Ky=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=a.mo.g9.length;if(b>=0&&b<=c){d=a.jH;d.j3=0;d.lW=2;e=d.id.data;f=0;g=e.length;if(f>g){d=new Bs;Y(d);E(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}e=d.hS.data;f=0;g=e.length;if(f>g){d=new Bs;Y(d);E(d);}while(f<g){h=f+1|0;e[f]=(-1);f=h;}d.jP=d.iI;d.lW=1;d.jP=b;c=d.lY;if(c<0)c=b;d.lY=c;b=a.qD.d8(b,a.mo,d);if(b==(-1))a.jH.iE=1;if(b>=0){d=a.jH;b=d.j3;if(b){e=d.id.data;if(e[0]==(-1)){f=d.jP;e[0]=f;e[1]=f;}if(!b){d=new CV;d.g_=1;d.ha=1;Bl(d);E(d);}if(0<d.kR){d.lY=e[1];return 1;}d=new I;i
=new K;BB(i);i.g$=G(16);J(i,i.g8,0,10);j=new H;e=i.g$;k=e.data;c=i.g8;f=k.length;if(c>=0&&c<=(f-0|0)){j.g9=L(e.data,0,c);d.g_=1;d.ha=1;d.hc=j;E(d);}d=new I;d.g_=1;d.ha=1;E(d);}}a.jH.jP=(-1);return 0;}d=new I;i=new K;i.g$=G(16);J(i,i.g8,b,10);j=new H;e=i.g$;k=e.data;c=i.g8;f=k.length;if(c>=0&&c<=(f-0|0)){j.g9=L(e.data,0,c);d.g_=1;d.ha=1;d.hc=j;E(d);}d=new I;d.g_=1;d.ha=1;E(d);},
MT=a=>{let b,c,d,e,f,g,h,i,j,k,l;b=a.mo.g9.length;c=a.jH;if(!c.mv)b=a.nx;if(c.jP>=0&&c.lW==1){d=c.j3;if(!d){c=new CV;c.g_=1;c.ha=1;E(c);}e=B4(0,c.kR);if(e>=0){c=new I;f=new K;f.g$=G(16);J(f,f.g8,0,10);g=new H;h=f.g$;i=h.data;b=f.g8;j=i.length;if(b>=0&&b<=(j-0|0)){g.g9=L(h.data,0,b);c.g_=1;c.ha=1;c.hc=g;E(c);}c=new I;c.g_=1;c.ha=1;E(c);}h=c.id.data;k=h[1];c.jP=k;if(!d){c=new CV;c.g_=1;c.ha=1;E(c);}if(e>=0){c=new I;f=new K;f.g$=G(16);J(f,f.g8,0,10);g=new H;h=f.g$;i=h.data;b=f.g8;j=i.length;if(b>=0&&b<=(j-0|0))
{g.g9=L(h.data,0,b);c.g_=1;c.ha=1;c.hc=g;E(c);}c=new I;c.g_=1;c.ha=1;E(c);}j=h[1];if(!d){c=new CV;c.g_=1;c.ha=1;E(c);}if(e<0){if(j==h[0])c.jP=k+1|0;l=c.jP;return l<=b&&Ky(a,l)?1:0;}c=new I;f=new K;f.g$=G(16);J(f,f.g8,0,10);g=new H;h=f.g$;i=h.data;b=f.g8;j=i.length;if(b>=0&&b<=(j-0|0)){g.g9=L(h.data,0,b);c.g_=1;c.ha=1;c.hc=g;E(c);}c=new I;c.g_=1;c.ha=1;E(c);}return Ky(a,a.mh);},
RB=(a,b,c)=>{let d,e;a.mh=(-1);a.nx=(-1);a.rx=b;a.qD=b.pR;a.mo=c;a.mh=0;d=c.g9.length;a.nx=d;e=AHR(c,a.mh,d,b.k7,b.j8+1|0,b.iB+1|0);a.jH=e;e.kw=1;},
MC=(a,b)=>{let c=new N8();RB(c,a,b);return c;};
let UB=D();
let Ot=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;if(c!==null&&c.data.length){a:{b:{try{d=Lu(AGH(b,c));}catch($$e){$$je=BP($$e);if($$je instanceof HX){d=$$je;break a;}else if($$je instanceof FC){d=$$je;break b;}else{throw $$e;}}return d;}e=new D_;if(b.ii===null)b.ii=V(b.hH.$meta.name);f=b.ii;b=new K;b.g$=G(16);F(b,b.g8,A(142));g=b.g8;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.g$;i=c.data;j=b.g8;k=i.length;if(j>=0&&j<=(k-0|0)){h.g9=L(c.data,0,j);e.g_=1;e.ha=1;e.hc=h;e.kv=d;E(e);}b=new I;b.g_=1;b.ha=1;E(b);}e=new D_;if(b.ii
===null)b.ii=V(b.hH.$meta.name);f=b.ii;b=new K;b.g$=G(16);F(b,b.g8,A(143));g=b.g8;if(f===null)f=A(2);F(b,g,f);F(b,b.g8,A(144));h=new H;c=b.g$;i=c.data;j=b.g8;k=i.length;if(j>=0&&j<=(k-0|0)){h.g9=L(c.data,0,j);e.g_=1;e.ha=1;e.hc=h;e.kv=d;E(e);}b=new I;b.g_=1;b.ha=1;E(b);}c=(AJk(b)).data;if(c.length<=0)b=null;else{b=new H3;b.p$=c[0];}return b;},
Mo=(b,c)=>{let d,e,f,g,h,i,j,k,$$je;a:{try{d=Lu(AGJ(b,c));}catch($$e){$$je=BP($$e);if($$je instanceof HX){d=$$je;break a;}else if($$je instanceof FC){d=$$je;e=new D_;if(b.ii===null)b.ii=V(b.hH.$meta.name);f=b.ii;b=new K;b.g$=G(16);F(b,b.g8,A(142));g=b.g8;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.g$;i=c.data;j=b.g8;k=i.length;if(j>=0&&j<=(k-0|0)){h.g9=L(c.data,0,j);e.g_=1;e.ha=1;e.hc=h;e.kv=d;E(e);}b=new I;b.g_=1;b.ha=1;E(b);}else{throw $$e;}}return d;}e=new D_;if(b.ii===null)b.ii=V(b.hH.$meta.name);f=b.ii;b=new K;b.g$
=G(16);F(b,b.g8,A(145));g=b.g8;if(f===null)f=A(2);F(b,g,f);h=new H;c=b.g$;i=c.data;k=b.g8;j=i.length;if(k>=0&&k<=(j-0|0)){h.g9=L(c.data,0,k);e.g_=1;e.ha=1;e.hc=h;e.kv=d;E(e);}b=new I;b.g_=1;b.ha=1;E(b);};
function H3(){C.call(this);this.p$=null;}
let AIm=(a,b)=>{a.p$=b;},
Lu=a=>{let b=new H3();AIm(b,a);return b;},
Pr=(a,b)=>{return;};
let D_=D(CE);
function DD(){C.call(this);this.hA=null;}
let AEX=null,Jx=null,Fu=null,F_=null,Md=null,QM=null,LR=null;
let Bp=()=>{Bp=Bz(DD);Vn();};
let Ce=b=>{let c,d,e,f,g,h,i;Bp();if(b===null)return null;c=b;d=V(typeof c);if(d===A(146))e=1;else if(!(A(146) instanceof H))e=0;else{f=A(146);e=d.g9!==f.g9?0:1;}a:{if(!e){if(d===A(147))e=1;else if(!(A(147) instanceof H))e=0;else{f=A(147);e=d.g9!==f.g9?0:1;}if(!e){e=0;break a;}}e=1;}if(e&&b[Be]===true)return b;b=Jx;if(b!==null){if(e){f=b.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DD;h.hA=c;Jx.set(c,new WeakRef(h));return h;}if(d===A(148))e=1;else if
(!(A(148) instanceof H))e=0;else{b=A(148);e=d.g9!==b.g9?0:1;}if(e){f=Fu.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DD;h.hA=c;i=h;Fu.set(c,new WeakRef(i));K$(QM,i,c);return h;}if(d===A(149))e=1;else if(!(A(149) instanceof H))e=0;else{b=A(149);e=d.g9!==b.g9?0:1;}if(e){f=F_.get(c);g=(typeof f==='undefined'?1:0)?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DD;h.hA=c;i=h;F_.set(c,new WeakRef(i));K$(LR,i,c);return h;}if(d===A(150))e=1;else if
(!(A(150) instanceof H))e=0;else{b=A(150);e=d.g9!==b.g9?0:1;}if(e){f=Md;g=f===null?void 0:f.deref();if(!(typeof g==='undefined'?1:0))return g;h=new DD;h.hA=c;Md=new WeakRef(h);return h;}}b=new DD;b.hA=c;return b;},
Vn=()=>{AEX=new WeakMap();Jx=!(typeof WeakRef!=='undefined'?1:0)?null:new WeakMap();Fu=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();F_=!(typeof WeakRef!=='undefined'?1:0)?null:new Map();QM=Fu===null?null:new FinalizationRegistry(BL(new I6,"accept"));LR=F_===null?null:new FinalizationRegistry(BL(new I5,"accept"));},
K$=(b,c,d)=>{return b.register(c,d);};
let M1=D(0);
let HF=D();
let G4=D(0);
let HE=D();
function Pz(){let a=this;C.call(a);a.id=null;a.hS=null;a.jh=null;a.k1=null;a.kR=0;a.j3=0;a.iI=0;a.hD=0;a.jP=0;a.mv=0;a.kw=0;a.iE=0;a.sj=0;a.lY=0;a.lW=0;}
let ADc=(a,b,c,d,e,f,g)=>{let h,i,j,k,l,m;a.lY=(-1);h=e+1|0;a.kR=h;i=S(h*2|0);a.id=i;j=S(g);k=j.data;a.hS=j;e=0;g=k.length;l=B4(e,g);if(l>0){b=new Bs;b.g_=1;b.ha=1;E(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(f>0)a.jh=S(f);i=i.data;h=0;m=i.length;e=B4(h,m);if(e>0){b=new Bs;b.g_=1;b.ha=1;E(b);}while(h<m){f=h+1|0;i[h]=(-1);h=f;}a.j3=0;a.lW=2;f=0;if(e>0){b=new Bs;b.g_=1;b.ha=1;E(b);}while(f<m){e=f+1|0;i[f]=(-1);f=e;}e=0;if(l>0){b=new Bs;b.g_=1;b.ha=1;E(b);}while(e<g){h=e+1|0;k[e]=(-1);e=h;}if(b!==null)a.k1=b;if(c
>=0){a.iI=c;a.hD=d;}a.jP=a.iI;},
AHR=(a,b,c,d,e,f)=>{let g=new Pz();ADc(g,a,b,c,d,e,f);return g;};
let B0=D(Bs);
let HX=D(BA);
let IM=D(CE);
let FC=D(IM);
let CU=D(BA);
function BO(){let a=this;C.call(a);a.hb=null;a.iu=0;a.hj=null;a.hR=0;}
let M=0;
let Wh=(a,b,c,d)=>{let e;e=d.hD;while(true){if(b>e)return (-1);if(a.ee(b,c,d)>=0)break;b=b+1|0;}return b;},
YL=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);if(a.ee(c,d,e)>=0)break;c=c+(-1)|0;}return c;},
ALa=(a,b)=>{a.hR=b;},
UK=a=>{return a.hR;},
AL6=a=>{return a.hb;},
AH8=(a,b)=>{a.hb=b;},
AH6=(a,b)=>{return 1;},
AJx=a=>{return null;},
Ga=a=>{let b;a.iu=1;b=a.hb;if(b!==null){if(!b.iu){b=b.ef();if(b!==null){a.hb.iu=1;a.hb=b;}a.hb.dA();}else if(b instanceof EP&&b.iC.nm)a.hb=b.hb;}},
AMl=()=>{M=1;};
let Js=D();
let AJm=D();
let X4=D();
let AKQ=D();
let H$=D(0);
let I6=D();
let AIe=(a,b)=>{let c;Bp();b=b===null?null:b instanceof E0()?b:Ce(b);c=Fu;b=b===null?null:b[Be]===true?b:b.hA;c.delete(b);};
let Zg=D();
let I5=D();
let Tu=(a,b)=>{let c;Bp();b=b===null?null:b instanceof E0()?b:Ce(b);c=F_;b=b===null?null:b[Be]===true?b:b.hA;c.delete(b);};
let Ko=D(0);
function FM(){let a=this;C.call(a);a.jx=null;a.jY=null;}
function Gv(){let a=this;FM.call(a);a.mH=null;a.p_=0;}
function CA(){let a=this;BO.call(a);a.nm=0;a.ih=0;}
let F4=null;
let C3=()=>{C3=Bz(CA);Xh();};
let TP=(a,b,c,d)=>{let e,f,g;e=a.ih;f=d.id.data;g=(e*2|0)+1|0;e=f[g];f[g]=b;g=a.hb.ee(b,c,d);if(g<0){b=a.ih;d.id.data[(b*2|0)+1|0]=e;}return g;},
ALO=a=>{return a.ih;},
Ur=(a,b)=>{return 0;},
Xh=()=>{let b,c,d;b=new Lp;c=M;M=c+1|0;d=new T;d.g$=G(20);b.hj=(J(d,d.g8,c,10)).bj();F4=b;};
function OI(){let a=this;C.call(a);a.hZ=null;a.hT=0;a.jF=0;a.qG=0;a.jX=0;a.h1=0;a.ho=0;a.io=0;a.hM=null;a.jD=null;a.hk=0;a.hQ=0;a.iV=0;a.lG=0;a.hY=null;}
let Mw=null,Um=null,AGw=0;
let AH$=(a,b,c)=>{let d,e,f,g,h,i,j;a.jF=1;a.hY=b;if((c&16)>0){d=new K;d.g$=G(16);F(d,d.g8,A(151));e=0;while(true){f=Mi(b,A(152),e);if(f<0)break;g=f+2|0;h=Cc(b,e,g);F(d,d.g8,h);F(d,d.g8,A(153));e=g;}b=Cc(b,e,b.g9.length);F(d,d.g8,b);F(d,d.g8,A(152));b=new H;i=d.g$;j=i.data;e=d.g8;f=j.length;if(e>=0&&e<=(f-0|0))b.g9=L(i.data,0,e);else{b=new I;b.g_=1;b.ha=1;E(b);}}a.hZ=G(b.g9.length+2|0);j=G(b.g9.length);i=j.data;e=0;f=i.length;while(true){if(e>=f){Fm(j,0,a.hZ,0,b.g9.length);i=a.hZ.data;g=i.length;i[g-1|0]=0;i[g
-2|0]=0;a.io=g;a.hT=c;Bi(a);Bi(a);return;}if(e<0)break;if(e>=b.g9.length)break;i[e]=b.g9.charCodeAt(e);e=e+1|0;}b=new Q;b.g_=1;b.ha=1;E(b);},
Xn=(a,b)=>{let c=new OI();AH$(c,a,b);return c;},
Bi=a=>{let b,c,d,e,f,g,h,i,j,k,$$je;a.jX=a.h1;a.h1=a.ho;a.hM=a.jD;a.iV=a.lG;a.lG=a.hk;a:{while(true){b=0;c=a.hk>=a.hZ.data.length?0:JF(a);a.ho=c;a.jD=null;if(a.jF==4){if(c!=92)return;c=a.hk;d=a.hZ.data;if(c>=d.length)c=0;else{a.hQ=c;if(a.hT&4)BW(a);else a.hk=c+1|0;c=d[a.hQ];}a.ho=c;switch(c){case 69:break;default:a.ho=92;a.hk=a.hQ;return;}a.jF=a.qG;a.ho=a.hk>(a.hZ.data.length-2|0)?0:JF(a);}b:{c=a.ho;if(c==92){c=a.hk>=(a.hZ.data.length-2|0)?(-1):JF(a);c:{d:{a.ho=c;switch(c){case -1:e=new BT;f=a.hY;c=a.hk;e.g_
=1;e.ha=1;e.hC=(-1);e.h0=A(59);e.hW=f;e.hC=c;E(e);case 0:case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 9:case 10:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 23:case 24:case 25:case 26:case 27:case 28:case 29:case 30:case 31:case 32:case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 118:break;case 48:a.ho
=ADS(a);break b;case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:if(a.jF!=1)break b;a.ho=(-2147483648)|c;break b;case 65:a.ho=(-2147483583);break b;case 66:a.ho=(-2147483582);break b;case 67:case 69:case 70:case 72:case 73:case 74:case 75:case 76:case 77:case 78:case 79:case 82:case 84:case 85:case 86:case 88:case 89:case 103:case 104:case 105:case 106:case 107:case 108:case 109:case 111:case 113:case 121:e=new BT;f=a.hY;c=a.hk;e.g_=1;e.ha=1;e.hC=(-1);e.h0=A(59);e.hW=f;e.hC=c;E(e);case 68:case 83:case 87:case 100:case 115:case 119:break d;case 71:a.ho
=(-2147483577);break b;case 80:case 112:break c;case 81:a.qG=a.jF;a.jF=4;b=1;break b;case 90:a.ho=(-2147483558);break b;case 97:a.ho=7;break b;case 98:a.ho=(-2147483550);break b;case 99:c=a.hk;d=a.hZ.data;if(c>=(d.length-2|0)){e=new BT;f=a.hY;e.g_=1;e.ha=1;e.hC=(-1);e.h0=A(59);e.hW=f;e.hC=c;E(e);}a.hQ=c;if(a.hT&4)BW(a);else a.hk=c+1|0;a.ho=d[a.hQ]&31;break b;case 101:a.ho=27;break b;case 102:a.ho=12;break b;case 110:a.ho=10;break b;case 114:a.ho=13;break b;case 116:a.ho=9;break b;case 117:a.ho=Mj(a,4);break b;case 120:a.ho
=Mj(a,2);break b;case 122:a.ho=(-2147483526);break b;default:}break b;}e=new H;d=a.hZ;g=d.data;h=a.hQ;i=g.length;if(h<0)break a;if(1>(i-h|0))break a;e.g9=L(d.data,h,1);e=QI(Gw,e);if(e.jI===null)e.jI=e.em();a.jD=e.jI;a.ho=0;break b;}e=AC7(a);j=0;if(a.ho==80)j=1;try{a.jD=AA$(e,j);}catch($$e){$$je=BP($$e);if($$je instanceof HD){e=new BT;f=a.hY;c=a.hk;e.g_=1;e.ha=1;e.hC=(-1);e.h0=A(59);e.hW=f;e.hC=c;E(e);}else{throw $$e;}}a.ho=0;}else{h=a.jF;if(h==1)switch(c){case 36:a.ho=(-536870876);break b;case 40:d=a.hZ.data;c
=a.hk;if(d[c]!=63){a.ho=(-2147483608);break b;}a.hQ=c;if(a.hT&4)BW(a);else a.hk=c+1|0;c=a.hZ.data[a.hk];h=0;while(true){e:{if(h){h=0;switch(c){case 33:break;case 61:a.ho=(-134217688);k=a.hk;a.hQ=k;if(a.hT&4)BW(a);else a.hk=k+1|0;break e;default:e=new BT;f=a.hY;c=a.hk;e.g_=1;e.ha=1;e.hC=(-1);e.h0=A(59);e.hW=f;e.hC=c;E(e);}a.ho=(-67108824);j=a.hk;a.hQ=j;if(a.hT&4)BW(a);else a.hk=j+1|0;}else{switch(c){case 33:break;case 60:h=a.hk;a.hQ=h;if(a.hT&4)BW(a);else a.hk=h+1|0;c=a.hZ.data[a.hk];h=1;break e;case 61:a.ho
=(-536870872);j=a.hk;a.hQ=j;if(a.hT&4)BW(a);else a.hk=j+1|0;break e;case 62:a.ho=(-33554392);j=a.hk;a.hQ=j;if(a.hT&4)BW(a);else a.hk=j+1|0;break e;default:i=AKh(a);a.ho=i;if(i<256){a.hT=i;i=i<<16;a.ho=i;a.ho=(-1073741784)|i;break e;}i=i&255;a.ho=i;a.hT=i;i=i<<16;a.ho=i;a.ho=(-16777176)|i;break e;}a.ho=(-268435416);j=a.hk;a.hQ=j;if(a.hT&4)BW(a);else a.hk=j+1|0;}}if(!h)break;}break b;case 41:a.ho=(-536870871);break b;case 42:case 43:case 63:h=a.hk;d=a.hZ.data;switch(h>=d.length?42:d[h]){case 43:a.ho=c|(-2147483648);a.hQ
=h;if(a.hT&4)BW(a);else a.hk=h+1|0;break b;case 63:a.ho=c|(-1073741824);a.hQ=h;if(a.hT&4)BW(a);else a.hk=h+1|0;break b;default:}a.ho=c|(-536870912);break b;case 46:a.ho=(-536870866);break b;case 91:a.ho=(-536870821);a.jF=2;break b;case 93:if(h!=2)break b;a.ho=(-536870819);break b;case 94:a.ho=(-536870818);break b;case 123:a.jD=AIt(a,c);break b;case 124:a.ho=(-536870788);break b;default:}else if(h==2)switch(c){case 38:a.ho=(-536870874);break b;case 45:a.ho=(-536870867);break b;case 91:a.ho=(-536870821);break b;case 93:a.ho
=(-536870819);break b;case 94:a.ho=(-536870818);break b;default:}}}if(b)continue;else break;}return;}e=new I;e.g_=1;e.ha=1;E(e);},
AC7=a=>{let b,c,d,e,f,g,h,i;b=new K;b.g$=G(10);c=a.hk;d=a.hZ;e=d.data;f=e.length;if(c<(f-2|0)){if(e[c]!=123){b=new H;a.hQ=c;if(a.hT&4)BW(a);else a.hk=c+1|0;g=a.hQ;if(g>=0&&1<=(f-g|0)){b.g9=L(d.data,g,1);h=new K;h.g$=G(16);F(h,h.g8,A(154));F(h,h.g8,b);b=new H;d=h.g$;e=d.data;f=h.g8;g=e.length;if(f>=0&&f<=(g-0|0)){b.g9=L(d.data,0,f);return b;}b=new I;b.g_=1;b.ha=1;E(b);}b=new I;b.g_=1;b.ha=1;E(b);}a.hQ=c;if(a.hT&4)BW(a);else a.hk=c+1|0;c=0;a:{while(true){f=a.hk;d=a.hZ.data;if(f>=(d.length-2|0))break;a.hQ=f;if
(a.hT&4)BW(a);else a.hk=f+1|0;c=d[a.hQ];if(c==125)break a;f=b.g8;Bn(b,f,f+1|0);b.g$.data[f]=c;}}if(c!=125){b=new BT;i=a.hY;c=a.hk;b.g_=1;b.ha=1;b.hC=(-1);b.h0=A(59);b.hW=i;b.hC=c;E(b);}}c=b.g8;if(!c){b=new BT;i=a.hY;c=a.hk;b.g_=1;b.ha=1;b.hC=(-1);b.h0=A(59);b.hW=i;b.hC=c;E(b);}h=new H;d=b.g$;g=d.data.length;if(c>=0&&c<=(g-0|0)){h.g9=L(d.data,0,c);if(h.g9.length==1){b=new K;b.g$=G(16);F(b,b.g8,A(154));F(b,b.g8,h);h=new H;d=b.g$;e=d.data;f=b.g8;g=e.length;if(f>=0&&f<=(g-0|0)){h.g9=L(d.data,0,f);return h;}b=new I;b.g_
=1;b.ha=1;E(b);}b:{c:{if(h.g9.length>3){if(h===A(154)?1:Jp(h,A(154),0))break c;if(h===A(155)?1:Jp(h,A(155),0))break c;}break b;}h=Cc(h,2,h.g9.length);}return h;}b=new I;b.g_=1;b.ha=1;E(b);},
AIt=(a,b)=>{let c,d,e,f,g,h,i,$$je;c=new K;c.g$=G(4);d=(-1);e=2147483647;a:{while(true){f=a.hk;g=a.hZ.data;if(f>=g.length)break a;a.hQ=f;if(a.hT&4)BW(a);else a.hk=f+1|0;b=g[a.hQ];if(b==125)break a;if(b==44&&d<0)try{d=HU(Fr(c),10);AIP(c,0,Uc(c));continue;}catch($$e){$$je=BP($$e);if($$je instanceof B0){break;}else{throw $$e;}}h=b&65535;f=c.g8;Bn(c,f,f+1|0);c.g$.data[f]=h;}c=new BT;i=a.hY;b=a.hk;c.g_=1;c.ha=1;c.hC=(-1);c.h0=A(59);c.hW=i;c.hC=b;E(c);}if(b!=125){c=new BT;i=a.hY;b=a.hk;c.g_=1;c.ha=1;c.hC=(-1);c.h0
=A(59);c.hW=i;c.hC=b;E(c);}if(c.g8>0)b:{try{e=HU(Fr(c),10);if(d>=0)break b;d=e;break b;}catch($$e){$$je=BP($$e);if($$je instanceof B0){}else{throw $$e;}}c=new BT;i=a.hY;b=a.hk;c.g_=1;c.ha=1;c.hC=(-1);c.h0=A(59);c.hW=i;c.hC=b;E(c);}else if(d<0){c=new BT;i=a.hY;b=a.hk;c.g_=1;c.ha=1;c.hC=(-1);c.h0=A(59);c.hW=i;c.hC=b;E(c);}if((d|e|(e-d|0))<0){c=new BT;i=a.hY;b=a.hk;c.g_=1;c.ha=1;c.hC=(-1);c.h0=A(59);c.hW=i;c.hC=b;E(c);}f=a.hk;g=a.hZ.data;h=f>=g.length?42:g[f];c:{switch(h){case 43:a.ho=(-2147483525);a.hQ=f;if(a.hT
&4)BW(a);else a.hk=f+1|0;break c;case 63:a.ho=(-1073741701);a.hQ=f;if(a.hT&4)BW(a);else a.hk=f+1|0;break c;default:}a.ho=(-536870789);}c=new KS;c.j4=d;c.j2=e;return c;},
Y7=b=>{return b<0?0:1;},
Mj=(a,b)=>{let c,d,e,f,g,h,i,j,$$je;c=new K;c.g$=G(b);d=a.hZ.data.length-2|0;e=0;while(true){f=B4(e,b);if(f>=0)break;g=a.hk;if(g>=d)break;h=a.hZ;a.hQ=g;if(a.hT&4)BW(a);else a.hk=g+1|0;g=h.data[a.hQ];i=c.g8;Bn(c,i,i+1|0);c.g$.data[i]=g;e=e+1|0;}if(!f)a:{try{b=HU(Fr(c),16);}catch($$e){$$je=BP($$e);if($$je instanceof B0){break a;}else{throw $$e;}}return b;}c=new BT;j=a.hY;b=a.hk;c.g_=1;c.ha=1;c.hC=(-1);c.h0=A(59);c.hW=j;c.hC=b;E(c);},
ADS=a=>{let b,c,d,e,f,g,h,i,j,k;b=3;c=1;d=a.hZ.data;e=d.length-2|0;f=LX(d[a.hk]);if(f>=8)f=(-1);switch(f){case -1:break;default:if(f>3)b=2;g=a.hk;a.hQ=g;if(a.hT&4)BW(a);else a.hk=g+1|0;a:{while(true){if(c>=b)break a;h=a.hk;if(h>=e)break a;i=LX(a.hZ.data[h]);if(i>=8)i=(-1);if(i<0)break;f=(f*8|0)+i|0;g=a.hk;a.hQ=g;if(a.hT&4)BW(a);else a.hk=g+1|0;c=c+1|0;}}return f;}j=new BT;k=a.hY;b=a.hk;j.g_=1;j.ha=1;j.hC=(-1);j.h0=A(59);j.hW=k;j.hC=b;E(j);},
AKh=a=>{let b,c,d,e,f,g,h;b=1;c=a.hT;a:while(true){d=a.hk;e=a.hZ.data;if(d>=e.length){f=new BT;g=a.hY;f.g_=1;f.ha=1;f.hC=(-1);f.h0=A(59);f.hW=g;f.hC=d;E(f);}b:{c:{switch(e[d]){case 41:a.hQ=d;if(a.hT&4)BW(a);else a.hk=d+1|0;return c|256;case 45:if(!b){h=new BT;g=a.hY;h.g_=1;h.ha=1;h.hC=(-1);h.h0=A(59);h.hW=g;h.hC=d;E(h);}b=0;break b;case 58:break a;case 100:break c;case 105:c=b?c|2:(c^2)&c;break b;case 109:c=b?c|8:(c^8)&c;break b;case 115:c=b?c|32:(c^32)&c;break b;case 117:c=b?c|64:(c^64)&c;break b;case 120:c
=b?c|4:(c^4)&c;break b;default:}break b;}c=b?c|1:(c^1)&c;}a.hQ=d;if(a.hT&4)BW(a);else a.hk=d+1|0;}a.hQ=d;if(a.hT&4)BW(a);else a.hk=d+1|0;return c;},
BW=a=>{let b,c,d,e;b=a.hZ.data.length-2|0;a.hk=a.hk+1|0;a:while(true){c=a.hk;if(c<b){b:{c=a.hZ.data[c];switch(c){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:c=0;break b;default:c:{switch(B$(c)){case 12:case 13:case 14:break;default:c=0;break c;}c=1;}break b;}c=1;}if(c){a.hk=a.hk+1|0;continue;}}c=a.hk;if(c>=b)break;d=a.hZ.data;if(d[c]!=35)break;a.hk=c+1|0;while(true){e=a.hk;if(e>=b)continue a;c=d[e];if(c!=10&&c!=13&&c!=133&&(c|1)!=8233?0:1)continue a;a.hk
=e+1|0;}}return c;},
We=b=>{let c,d,e,f;c=b-44032|0;if(c>=0&&c<11172){d=4352+(c/588|0)|0;e=4449+((c%588|0)/28|0)|0;f=c%28|0;return !f?Gk([d,e]):Gk([d,e,4519+f|0]);}return null;},
AEI=b=>{return (b!=832?0:1)|(b!=833?0:1)|(b!=835?0:1)|(b!=836?0:1);},
JF=a=>{let b,c,d,e,f;b=a.hZ;c=a.hk;a.hQ=c;if(a.hT&4)BW(a);else a.hk=c+1|0;b=b.data;d=a.hQ;e=b[d];if((e&64512)!=55296?0:1){c=d+1|0;b=a.hZ.data;if(c<b.length){f=b[c];if((f&64512)!=56320?0:1){d=a.hk;a.hQ=d;if(a.hT&4)BW(a);else a.hk=d+1|0;return ((e&1023)<<10|f&1023)+65536|0;}}}return e;};
function BT(){let a=this;Bs.call(a);a.h0=null;a.hW=null;a.hC=0;}
let AJs=a=>{let b,c,d,e,f,g,h,i,j,k;b=A(59);c=a.hC;if(c>=1){d=G(c);e=d.data;c=0;f=e.length;if(c>f){b=new Bs;b.g_=1;b.ha=1;E(b);}while(c<f){g=c+1|0;e[c]=32;c=g;}b=new H;b.g9=L(d.data,0,f);}a:{h=a.h0;i=a.hW;if(i!==null&&i.g9.length){j=a.hC;i=a.hW;k=new K;k.g$=G(16);J(k,k.g8,j,10);F(k,k.g8,A(118));j=k.g8;if(i===null)i=A(2);F(k,j,i);F(k,k.g8,A(118));F(k,k.g8,b);b=new H;d=k.g$;e=d.data;c=k.g8;f=e.length;if(c>=0&&c<=(f-0|0)){b.g9=L(d.data,0,c);break a;}b=new I;b.g_=1;b.ha=1;Bl(b);E(b);}b=A(59);}i=new K;i.g$=G(16);j
=i.g8;if(h===null)h=A(2);F(i,j,h);F(i,i.g8,b);b=new H;d=i.g$;e=d.data;c=i.g8;f=e.length;if(c>=0&&c<=(f-0|0)){b.g9=L(d.data,0,c);return b;}b=new I;b.g_=1;b.ha=1;Bl(b);E(b);};
let TX=D();
let AEv=(b,c,d,e)=>{let f,g,h,i,j;if(c>d){f=new Bs;f.g_=1;f.ha=1;E(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;j=h[i];if(j==e)break;if(e>=j)c=i+1|0;else g=i-1|0;}return i;},
AFS=(b,c,d,e)=>{let f,g,h,i;if(c>d){f=new Bs;f.g_=1;f.ha=1;E(f);}g=d-1|0;while(true){if(c>g)return ( -c|0)-1|0;h=b.data;i=(c+g|0)/2|0;d=B4(h[i],e);if(!d)break;if(d<=0)c=i+1|0;else g=i-1|0;}return i;},
PV=(b,c)=>{let d,e,f,g,h;if(b===c)return 1;if(b!==null&&c!==null){b=b.data;c=c.data;d=b.length;if(d==c.length){e=0;a:{while(true){if(e>=d){e=(-1);break a;}f=e+0|0;g=b[f];h=c[f];if(!(g===h?1:g===null?(h!==null?0:1):g!==h?0:1))break;e=e+1|0;}}return e>=0?0:1;}}return 0;};
let HW=D(0);
let IX=D();
let W8=(a,b)=>{let c,d,e,f,g,h,i,j,k;c=b.data;d=a.hK;e=c.length;if(e>=d)while(d<e){c[d]=null;d=d+1|0;}else{f=b.constructor;if(f===null)b=null;else{b=f.classObject;if(b===null){b=new Ca;b.hH=f;c=b;f.classObject=c;}}b=DS(b);if(b===null){b=new CU;b.g_=1;b.ha=1;E(b);}if(b===Bk(CQ)){b=new Bs;b.g_=1;b.ha=1;E(b);}if(d<0){b=new DK;b.g_=1;b.ha=1;E(b);}b=D4(b.hH,d);}e=0;g=0;h=a.iF;i=a.hK;d=B4(h,h);a:{while(true){j=B4(g,i);if(!(j>=0?0:1))break;h=e+1|0;if(d<0){b=new JV;b.g_=1;b.ha=1;E(b);}k=g+1|0;if(g<0)break a;if(j>=0)break a;b.data[e]
=a.ib.data[g];e=h;g=k;}return b;}b=new I;b.g_=1;b.ha=1;E(b);};
let NL=D(0);
let KH=D(0);
function HY(){IX.call(this);this.iF=0;}
let OX=D(0);
function HV(){let a=this;HY.call(a);a.ib=null;a.hK=0;}
let Fn=(a,b)=>{let c,d,e,f,g,h,i,j;c=a.ib;d=c.data;e=d.length;if(e<b){if(e>=1073741823)f=2147483647;else{g=e*2|0;f=5;if(g>f)f=g;if(b>f)f=b;}h=c.constructor;if(h===null)i=null;else{i=h.classObject;if(i===null){i=new Ca;i.hH=h;j=i;h.classObject=j;}}h=DS(i);if(h===null){i=new CU;i.g_=1;i.ha=1;E(i);}if(h===Bk(CQ)){i=new Bs;i.g_=1;i.ha=1;E(i);}if(f<0){i=new DK;i.g_=1;i.ha=1;E(i);}j=D4(h.hH,f);if(f<e)e=f;b=0;while(b<e){j.data[b]=d[b];b=b+1|0;}a.ib=j;}},
Z2=(a,b,c)=>{let d,e,f;if(b>=0){d=a.hK;if(b<=d){Fn(a,d+1|0);d=a.hK;e=d;while(e>b){f=a.ib.data;f[e]=f[e-1|0];e=e+(-1)|0;}a.ib.data[b]=c;a.hK=d+1|0;a.iF=a.iF+1|0;return;}}c=new I;c.g_=1;c.ha=1;E(c);},
PE=(a,b)=>{let c,d,e,f;if(b>=0){c=a.hK;if(b<c){d=a.ib.data;e=d[b];c=c-1|0;a.hK=c;while(b<c){f=b+1|0;d[b]=d[f];b=f;}d[c]=null;a.iF=a.iF+1|0;return e;}}e=new I;e.g_=1;e.ha=1;E(e);};
let NH=D(CA);
let SJ=(a,b,c,d)=>{let e,f;e=a.ih;f=d.hS.data;f[e]=b-f[e]|0;return a.hb.ee(b,c,d);},
AGg=(a,b)=>{return 0;};
let Q7=D(CA);
let VF=(a,b,c,d)=>{return b;};
let Ml=D(CA);
let UI=(a,b,c,d)=>{let e;e=a.ih;if(d.hS.data[e]!=b)b=(-1);return b;};
function Oe(){CA.call(this);this.oQ=0;}
let S5=(a,b,c,d)=>{let e,f;e=a.ih;f=d.hS.data;f[e]=b-f[e]|0;a.oQ=b;return b;},
AEH=(a,b)=>{return 0;};
let EW=D(CA);
let AIz=(a,b,c,d)=>{if(d.lW!=1&&b!=d.hD)return (-1);d.j3=1;d.id.data[1]=b;return b;};
function B2(){BO.call(this);this.hE=0;}
let AKm=(a,b,c,d)=>{let e;if((b+a.ew()|0)>d.hD){d.iE=1;return (-1);}e=a.ex(b,c);if(e<0)return (-1);return a.hb.ee(b+e|0,c,d);},
AHl=a=>{return a.hE;},
Z$=(a,b)=>{return 1;};
let D2=D(B2);
let AGC=(a,b,c)=>{return 0;},
Xr=(a,b,c,d)=>{let e,f,g;e=d.hD;f=d.iI;a:{b:{while(true){g=B4(b,e);if(g>0)return (-1);if(g<0){if(b<0)break b;if(b>=c.g9.length)break b;if(((c.g9.charCodeAt(b)&64512)!=56320?0:1)&&b>f){g=b-1|0;if(g<0)break a;if(g>=c.g9.length)break a;if((c.g9.charCodeAt(g)&64512)!=55296?0:1){b=b+1|0;continue;}}}if(a.hb.ee(b,c,d)>=0)break;b=b+1|0;}return b;}c=new Q;c.g_=1;c.ha=1;E(c);}c=new Q;c.g_=1;c.ha=1;E(c);},
Vp=(a,b,c,d,e)=>{let f,g,h;f=e.hD;g=e.iI;a:{b:{while(true){if(c<b)return (-1);if(c<f){if(c<0)break b;if(c>=d.g9.length)break b;if(((d.g9.charCodeAt(c)&64512)!=56320?0:1)&&c>g){h=c-1|0;if(h<0)break a;if(h>=d.g9.length)break a;if((d.g9.charCodeAt(h)&64512)!=55296?0:1){c=c+(-1)|0;continue;}}}if(a.hb.ee(c,d,e)>=0)break;c=c+(-1)|0;}return c;}d=new Q;d.g_=1;d.ha=1;E(d);}d=new Q;d.g_=1;d.ha=1;E(d);},
SW=(a,b)=>{return 0;};
function BU(){let a=this;BO.call(a);a.h2=null;a.iC=null;a.hV=0;}
let YM=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.h2;if(e===null)return (-1);f=a.hV;g=d.id.data;h=f*2|0;i=g[h];g[h]=b;f=e.hK;j=0;a:{while(true){if(j>=f){b=a.hV;d.id.data[b*2|0]=i;return (-1);}e=a.h2;if(j<0)break a;if(j>=e.hK)break a;h=e.ib.data[j].ee(b,c,d);if(h>=0)break;j=j+1|0;}return h;}c=new I;c.g_=1;c.ha=1;E(c);},
AEz=(a,b)=>{a.iC.hb=b;},
ABz=(a,b)=>{let c,d,e,f,g;a:{b:{c=a.h2;if(c!==null){d=0;e=c.iF;f=c.hK;while(true){if(!(d>=f?0:1))break b;if(e<c.iF){b=new JV;b.g_=1;b.ha=1;E(b);}g=d+1|0;if(d<0)break a;if(d>=c.hK)break a;if(c.ib.data[d].dU(b))break;d=g;}return 1;}}return 0;}b=new I;b.g_=1;b.ha=1;E(b);},
AFo=(a,b)=>{let c,d,e;c=a.hV;d=b.id.data;c=c*2|0;e=c+1|0;return d[e]>=0&&d[c]==d[e]?0:1;},
Vk=a=>{let b,c,d,e;a.iu=1;b=a.iC;if(b!==null&&!b.iu)Ga(b);a:{b:{b=a.h2;if(b!==null){c=b.hK;d=0;while(true){if(d>=c)break b;b=a.h2;if(d<0)break a;if(d>=b.hK)break a;b=b.ib.data[d];e=b.ef();if(e===null)e=b;else{b.iu=1;PE(a.h2,d);Z2(a.h2,d,e);}if(!e.iu)e.dA();d=d+1|0;}}}if(a.hb!==null)Ga(a);return;}b=new I;b.g_=1;b.ha=1;E(b);};
let Hm=D(BU);
let AEd=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.hV;f=d.hS.data;g=f[e];f[e]=b;h=a.h2.hK;e=0;a:{while(true){if(e>=h){b=a.hV;d.hS.data[b]=g;return (-1);}i=a.h2;if(e<0)break a;if(e>=i.hK)break a;j=i.ib.data[e].ee(b,c,d);if(j>=0)break;e=e+1|0;}return j;}c=new I;c.g_=1;c.ha=1;E(c);},
AFT=(a,b)=>{let c;c=a.hV;return !b.hS.data[c]?0:1;};
let Dk=D(Hm);
let Wo=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.hV;f=d.hS.data;g=f[e];f[e]=b;h=a.h2.hK;i=0;a:{while(i<h){j=a.h2;if(i<0)break a;if(i>=j.hK)break a;if(j.ib.data[i].ee(b,c,d)>=0)return a.hb.ee(a.iC.oQ,c,d);i=i+1|0;}b=a.hV;d.hS.data[b]=g;return (-1);}c=new I;c.g_=1;c.ha=1;E(c);},
AFw=(a,b)=>{a.hb=b;};
let Kx=D(Dk);
let AEr=(a,b,c,d)=>{let e,f,g;e=a.h2.hK;f=0;a:{while(f<e){g=a.h2;if(f<0)break a;if(f>=g.hK)break a;if(g.ib.data[f].ee(b,c,d)>=0)return a.hb.ee(b,c,d);f=f+1|0;}return (-1);}c=new I;c.g_=1;c.ha=1;E(c);},
AH_=(a,b)=>{return 0;};
let Qc=D(Dk);
let Uh=(a,b,c,d)=>{let e,f,g;e=a.h2.hK;f=0;a:{while(true){if(f>=e)return a.hb.ee(b,c,d);g=a.h2;if(f<0)break a;if(f>=g.hK)break a;if(g.ib.data[f].ee(b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new I;c.g_=1;c.ha=1;E(c);},
AHy=(a,b)=>{return 0;};
let Ni=D(Dk);
let Vd=(a,b,c,d)=>{let e,f,g,h,i;e=a.h2.hK;f=d.mv?0:d.iI;a:{b:{g=a.hb.ee(b,c,d);if(g>=0){h=a.hV;d.hS.data[h]=b;h=0;while(true){if(h>=e)break b;i=a.h2;if(h<0)break a;if(h>=i.hK)break a;if(i.ib.data[h].ez(f,b,c,d)>=0){b=a.hV;d.hS.data[b]=(-1);return g;}h=h+1|0;}}}return (-1);}c=new I;c.g_=1;c.ha=1;E(c);},
AKS=(a,b)=>{return 0;};
let Ou=D(Dk);
let RZ=(a,b,c,d)=>{let e,f,g;e=a.h2.hK;f=a.hV;d.hS.data[f]=b;f=0;a:{while(true){if(f>=e)return a.hb.ee(b,c,d);g=a.h2;if(f<0)break a;if(f>=g.hK)break a;if(g.ib.data[f].ez(0,b,c,d)>=0)break;f=f+1|0;}return (-1);}c=new I;c.g_=1;c.ha=1;E(c);},
AF6=(a,b)=>{return 0;};
function EP(){BU.call(this);this.iL=null;}
let Ss=(a,b,c,d)=>{let e,f,g;e=a.hV;f=d.id.data;e=e*2|0;g=f[e];f[e]=b;e=a.iL.ee(b,c,d);if(e>=0)return e;e=a.hV;d.id.data[e*2|0]=g;return (-1);},
ABX=(a,b,c,d)=>{let e;e=a.iL.d8(b,c,d);if(e>=0){b=a.hV;d.id.data[b*2|0]=e;}return e;},
AGl=(a,b,c,d,e)=>{let f;f=a.iL.ez(b,c,d,e);if(f>=0){b=a.hV;e.id.data[b*2|0]=f;}return f;},
ABp=(a,b)=>{return a.iL.dU(b);},
AEB=a=>{let b,c,d,e,f;b=new KV;c=a.iL;d=a.iC;e=M;M=e+1|0;f=new T;f.g$=G(20);b.hj=(J(f,f.g8,e,10)).bj();b.iL=c;b.iC=d;b.hV=d.ih;a.hb=b;return b;},
AJG=a=>{let b;a.iu=1;b=a.iC;if(b!==null&&!b.iu)Ga(b);b=a.iL;if(b!==null&&!b.iu){b=b.ef();if(b!==null){a.iL.iu=1;a.iL=b;}a.iL.dA();}};
let AC9=D();
let GZ=b=>{if(b===null||b.constructor.$meta.item==='undefined'){E(AK8());}return b.data.length;},
D4=(b,c)=>{if(b.$meta.primitive){switch(b){};}return R(b,c);};
let Hg=D(BA);
let F0=D();
function Bc(){let a=this;F0.call(a);a.hz=0;a.is=0;a.hl=null;a.mV=null;a.ne=null;a.hO=0;}
let Gw=null;
let Uk=a=>{return null;},
Tn=a=>{return a.hl;},
ACi=a=>{return !a.is?(F$(a.hl,0)>=2048?0:1):AEY(a.hl,0)>=2048?0:1;},
ALw=a=>{return a.hO;},
AHb=a=>{return a;},
TH=a=>{let b,c;if(a.ne===null){b=a.eC();c=new Ql;c.sp=a;c.oY=b;b=new Ba;b.hi=S(64);c.hl=b;a.ne=c;DH(c,a.is);}return a.ne;},
Gj=a=>{let b,c;if(a.mV===null){b=a.eC();c=new Qk;c.sc=a;c.qw=b;c.qK=a;b=new Ba;b.hi=S(64);c.hl=b;a.mV=c;DH(c,a.hz);a.mV.hO=a.hO;}return a.mV;},
AJu=a=>{return 0;},
DH=(a,b)=>{let c;c=a.hz;if(c^b){a.hz=c?0:1;a.is=a.is?0:1;}if(!a.hO)a.hO=1;return a;},
ALo=a=>{return a.hz;},
AA$=(b,c)=>{b=QI(Gw,b);if(!c&&b.jI===null)b.jI=b.em();else if(c&&b.kW===null)b.kW=DH(b.em(),1);return c?b.kW:b.jI;},
ALc=()=>{Gw=new JX;};
function HD(){let a=this;BA.call(a);a.sB=null;a.ss=null;}
function B7(){let a=this;Bc.call(a);a.mA=0;a.m_=0;a.k$=0;a.nL=0;a.jn=0;a.iY=0;a.hp=null;a.hP=null;}
let Ch=(a,b)=>{let c;a:{if(a.mA){b:{if(!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}if(a.jn){Kk(a.hp,EE(b&65535));break a;}Jt(a.hp,EE(b&65535));break a;}if(a.m_&&b>128){a.k$=1;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b);if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}b=B1(BD,b);}}}c=b<=56319&&b>=55296?1:0;if(!(!c&&!(b<=57343&&b>=56320?1:0))){if(a.nL)Kk(a.hl,b-55296|0);else Jt(a.hl,b-55296|0);}if(a.jn)Kk(a.hp,b);else Jt(a.hp,
b);if(!a.hO&&(b>=65536&&b<=1114111?1:0))a.hO=1;return a;},
AKM=(a,b)=>{let c,d,e;if(!a.hO&&b.hO)a.hO=1;if(a.nL){if(!b.is)Fc(a.hl,b.eC());else C2(a.hl,b.eC());}else if(!b.is)E$(a.hl,b.eC());else{ES(a.hl,b.eC());C2(a.hl,b.eC());a.is=a.is?0:1;a.nL=1;}if(!a.iY&&b.eJ()!==null){if(a.jn){if(!b.hz)Fc(a.hp,b.eJ());else C2(a.hp,b.eJ());}else if(!b.hz)E$(a.hp,b.eJ());else{ES(a.hp,b.eJ());C2(a.hp,b.eJ());a.hz=a.hz?0:1;a.jn=1;}}else{c=a.hz;d=a.hP;if(d!==null){if(!c){e=new LK;e.rp=a;e.qQ=c;e.qF=d;e.qz=b;b=new Ba;b.hi=S(64);e.hl=b;a.hP=e;}else{e=new LL;e.sH=a;e.pH=c;e.pC=d;e.pu=b;b
=new Ba;b.hi=S(64);e.hl=b;a.hP=e;}}else{if(c&&!a.jn&&(a.hp.h5?0:1)){d=new LG;d.r3=a;d.pE=b;b=new Ba;b.hi=S(64);d.hl=b;a.hP=d;}else if(!c){d=new LE;d.nD=a;d.m2=c;d.o7=b;b=new Ba;b.hi=S(64);d.hl=b;a.hP=d;}else{d=new LF;d.ob=a;d.m7=c;d.qB=b;b=new Ba;b.hi=S(64);d.hl=b;a.hP=d;}a.iY=1;}}return a;},
By=(a,b,c)=>{let d;if(b>c){d=new Bs;d.g_=1;d.ha=1;E(d);}a:{b:{if(!a.mA){if(c<55296)break b;if(b>57343)break b;}c=c+1|0;while(true){if(b>=c)break a;Ch(a,b);b=b+1|0;}}if(a.jn)SH(a.hp,b,c+1|0);else GB(a.hp,b,c+1|0);}return a;},
RS=(a,b)=>{let c,d,e,f;if(!a.hO&&b.hO)a.hO=1;if(b.k$)a.k$=1;c=a.is;if(!(c^b.is)){if(!c)E$(a.hl,b.hl);else C2(a.hl,b.hl);}else if(c)Fc(a.hl,b.hl);else{ES(a.hl,b.hl);C2(a.hl,b.hl);a.is=1;}a:{if(!a.iY){d=b.iY;if((!d?b.hp:null)!==null){c=a.hz;if(!(c^b.hz)){if(!c){E$(a.hp,!d?b.hp:null);break a;}C2(a.hp,!d?b.hp:null);break a;}if(c){Fc(a.hp,!d?b.hp:null);break a;}ES(a.hp,!d?b.hp:null);C2(a.hp,!b.iY?b.hp:null);a.hz=1;break a;}}c=a.hz;e=a.hP;if(e!==null){if(!c){f=new Lz;f.rd=a;f.ql=c;f.qA=e;f.qM=b;b=new Ba;b.hi=S(64);f.hl
=b;a.hP=f;}else{f=new L1;f.rz=a;f.qL=c;f.oN=e;f.oS=b;b=new Ba;b.hi=S(64);f.hl=b;a.hP=f;}}else{if(!a.jn&&(a.hp.h5?0:1)){if(!c){e=new LI;e.sJ=a;e.pq=b;b=new Ba;b.hi=S(64);e.hl=b;a.hP=e;}else{e=new LJ;e.rD=a;e.qI=b;b=new Ba;b.hi=S(64);e.hl=b;a.hP=e;}}else if(!c){e=new LM;e.qn=a;e.pQ=b;e.pD=c;b=new Ba;b.hi=S(64);e.hl=b;a.hP=e;}else{e=new LN;e.pW=a;e.p4=b;e.qb=c;b=new Ba;b.hi=S(64);e.hl=b;a.hP=e;}a.iY=1;}}},
QB=(a,b)=>{let c,d,e,f;if(!a.hO&&b.hO)a.hO=1;if(b.k$)a.k$=1;c=a.is;if(!(c^b.is)){if(!c)C2(a.hl,b.hl);else E$(a.hl,b.hl);}else if(!c)Fc(a.hl,b.hl);else{ES(a.hl,b.hl);C2(a.hl,b.hl);a.is=0;}a:{if(!a.iY){d=b.iY;if((!d?b.hp:null)!==null){c=a.hz;if(!(c^b.hz)){if(!c){C2(a.hp,!d?b.hp:null);break a;}E$(a.hp,!d?b.hp:null);break a;}if(!c){Fc(a.hp,!d?b.hp:null);break a;}ES(a.hp,!d?b.hp:null);C2(a.hp,!b.iY?b.hp:null);a.hz=0;break a;}}c=a.hz;e=a.hP;if(e!==null){if(!c){f=new LB;f.ro=a;f.qo=c;f.oX=e;f.pG=b;b=new Ba;b.hi=S(64);f.hl
=b;a.hP=f;}else{f=new LC;f.rJ=a;f.qc=c;f.oI=e;f.qk=b;b=new Ba;b.hi=S(64);f.hl=b;a.hP=f;}}else{if(!a.jn&&(a.hp.h5?0:1)){if(!c){e=new Lx;e.rG=a;e.pj=b;b=new Ba;b.hi=S(64);e.hl=b;a.hP=e;}else{e=new Ly;e.sE=a;e.pk=b;b=new Ba;b.hi=S(64);e.hl=b;a.hP=e;}}else if(!c){e=new LD;e.q0=a;e.qO=b;e.p1=c;b=new Ba;b.hi=S(64);e.hl=b;a.hP=e;}else{e=new Lw;e.p0=a;e.qh=b;e.pI=c;b=new Ba;b.hi=S(64);e.hl=b;a.hP=e;}a.iY=1;}}},
Vu=(a,b)=>{let c;c=a.hP;if(c!==null)return a.hz^c.eM(b);return a.hz^B6(a.hp,b);},
AKN=a=>{if(!a.iY)return a.hp;return null;},
Xf=a=>{return a.hl;},
AHX=a=>{let b,c;if(a.hP!==null)return a;b=!a.iY?a.hp:null;c=new LA;c.q$=a;c.mg=b;b=new Ba;b.hi=S(64);c.hl=b;return DH(c,a.hz);},
ADg=a=>{let b,c,d,e,f,g,h,i,j,k;b=new K;b.g$=G(16);c=F$(a.hp,0);while(c>=0){d=(EN(c)).data;e=0;f=d.length;g=b.g8;Bn(b,g,g+f|0);f=f+e|0;while(e<f){h=b.g$.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.g8;Bn(b,g,g+1|0);b.g$.data[g]=124;c=F$(a.hp,c+1|0);}e=b.g8;if(e>0)Qu(b,e-1|0);k=new H;d=b.g$;h=d.data;e=b.g8;g=h.length;if(e>=0&&e<=(g-0|0)){k.g9=L(d.data,0,e);return k;}b=new I;b.g_=1;b.ha=1;Bl(b);E(b);},
XD=a=>{return a.k$;};
function Dy(){BO.call(this);this.hB=null;}
let AMo=a=>{return a.hB;},
AGn=(a,b)=>{return !a.hB.dU(b)&&!a.hb.dU(b)?0:1;},
AIv=(a,b)=>{return 1;},
ACw=a=>{let b;a.iu=1;b=a.hb;if(b!==null&&!b.iu){b=b.ef();if(b!==null){a.hb.iu=1;a.hb=b;}a.hb.dA();}b=a.hB;if(b!==null){if(!b.iu){b=b.ef();if(b!==null){a.hB.iu=1;a.hB=b;}a.hB.dA();}else if(b instanceof EP&&b.iC.nm)a.hB=b.hb;}};
function CJ(){Dy.call(this);this.hL=null;}
let R1=(a,b,c,d)=>{let e,f;e=0;a:{while((b+a.hL.ew()|0)<=d.hD){f=a.hL.ex(b,c);if(f<=0)break a;b=b+f|0;e=e+1|0;}}while(true){if(e<0)return (-1);f=a.hb.ee(b,c,d);if(f>=0)break;b=b-a.hL.ew()|0;e=e+(-1)|0;}return f;};
function D$(){CJ.call(this);this.le=null;}
let TR=(a,b,c,d)=>{let e,f,g,h,i;e=a.le;f=e.j4;g=e.j2;h=0;while(true){if(h>=f){a:{while(h<g){if((b+a.hL.ew()|0)>d.hD)break a;i=a.hL.ex(b,c);if(i<1)break a;b=b+i|0;h=h+1|0;}}while(true){if(h<f)return (-1);i=a.hb.ee(b,c,d);if(i>=0)break;b=b-a.hL.ew()|0;h=h+(-1)|0;}return i;}if((b+a.hL.ew()|0)>d.hD){d.iE=1;return (-1);}i=a.hL.ex(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);};
let CL=D(Dy);
let Sp=(a,b,c,d)=>{let e;if(!a.hB.eP(d))return a.hb.ee(b,c,d);e=a.hB.ee(b,c,d);if(e>=0)return e;return a.hb.ee(b,c,d);};
let D8=D(CJ);
let AB4=(a,b,c,d)=>{let e;e=a.hB.ee(b,c,d);if(e<0)e=a.hb.ee(b,c,d);return e;},
AKU=(a,b)=>{a.hb=b;a.hB.dE(b);};
let Qo=D(CJ);
let AJ9=(a,b,c,d)=>{while((b+a.hL.ew()|0)<=d.hD&&a.hL.ex(b,c)>0){b=b+a.hL.ew()|0;}return a.hb.ee(b,c,d);},
AC8=(a,b,c,d)=>{let e,f,g;e=a.hb.d8(b,c,d);if(e<0)return (-1);f=e-a.hL.ew()|0;while(f>=b&&a.hL.ex(f,c)>0){g=f-a.hL.ew()|0;e=f;f=g;}return e;};
let JX=D();
let SL=null,ZY=null,O2=null;
let QI=(a,b)=>{let c,d,e,f,g;c=0;while(true){d=O2.data;if(c>=d.length){e=new HD;e.g_=1;e.ha=1;e.hc=A(59);e.sB=A(59);e.ss=b;E(e);}d=d[c].data;f=d[0];if(b===f)g=1;else if(!(f instanceof H))g=0;else{f=f;g=b.g9!==f.g9?0:1;}if(g)break;c=c+1|0;}return d[1];},
WM=()=>{let b,c,d,e,f,g;b=new GQ;SL=b;c=new Gu;ZY=c;d=R(ALC(C),194);e=d.data;e[0]=P(C,[A(156),new Pa]);e[1]=P(C,[A(157),new PL]);e[2]=P(C,[A(158),new PP]);e[3]=P(C,[A(159),new GM]);e[4]=P(C,[A(160),c]);e[5]=P(C,[A(161),new G1]);e[6]=P(C,[A(162),new Rg]);e[7]=P(C,[A(163),new Ht]);e[8]=P(C,[A(164),new NB]);e[9]=P(C,[A(165),new NW]);e[10]=P(C,[A(166),new Mf]);e[11]=P(C,[A(167),new L5]);e[12]=P(C,[A(168),new PT]);e[13]=P(C,[A(169),new Rn]);e[14]=P(C,[A(170),new Po]);e[15]=P(C,[A(171),new O5]);e[16]=P(C,[A(172),
new Qb]);e[17]=P(C,[A(173),new Lc]);e[18]=P(C,[A(174),new KT]);e[19]=P(C,[A(175),new Pv]);e[20]=P(C,[A(176),new PD]);e[21]=P(C,[A(177),new Mz]);e[22]=P(C,[A(178),new N1]);e[23]=P(C,[A(179),new Q1]);e[24]=P(C,[A(180),new PB]);e[25]=P(C,[A(181),new M8]);e[26]=P(C,[A(182),new My]);e[27]=P(C,[A(183),new Rj]);e[28]=P(C,[A(184),b]);e[29]=P(C,[A(185),new Gf]);e[30]=P(C,[A(186),new Qf]);e[31]=P(C,[A(187),b]);e[32]=P(C,[A(188),new NE]);e[33]=P(C,[A(189),c]);e[34]=P(C,[A(190),new Mu]);f=R(C,2);g=f.data;g[0]=A(191);b=
new Bg;b.hq=0;b.hr=127;g[1]=b;e[35]=f;f=R(C,2);g=f.data;g[0]=A(192);b=new Bg;b.hq=128;b.hr=255;g[1]=b;e[36]=f;f=R(C,2);g=f.data;g[0]=A(193);b=new Bg;b.hq=256;b.hr=383;g[1]=b;e[37]=f;f=R(C,2);g=f.data;g[0]=A(194);b=new Bg;b.hq=384;b.hr=591;g[1]=b;e[38]=f;f=R(C,2);g=f.data;g[0]=A(195);b=new Bg;b.hq=592;b.hr=687;g[1]=b;e[39]=f;f=R(C,2);g=f.data;g[0]=A(196);b=new Bg;b.hq=688;b.hr=767;g[1]=b;e[40]=f;f=R(C,2);g=f.data;g[0]=A(197);b=new Bg;b.hq=768;b.hr=879;g[1]=b;e[41]=f;f=R(C,2);g=f.data;g[0]=A(198);b=new Bg;b.hq
=880;b.hr=1023;g[1]=b;e[42]=f;f=R(C,2);g=f.data;g[0]=A(199);b=new Bg;b.hq=1024;b.hr=1279;g[1]=b;e[43]=f;f=R(C,2);g=f.data;g[0]=A(200);b=new Bg;b.hq=1280;b.hr=1327;g[1]=b;e[44]=f;f=R(C,2);g=f.data;g[0]=A(201);b=new Bg;b.hq=1328;b.hr=1423;g[1]=b;e[45]=f;f=R(C,2);g=f.data;g[0]=A(202);b=new Bg;b.hq=1424;b.hr=1535;g[1]=b;e[46]=f;f=R(C,2);g=f.data;g[0]=A(203);b=new Bg;b.hq=1536;b.hr=1791;g[1]=b;e[47]=f;f=R(C,2);g=f.data;g[0]=A(204);b=new Bg;b.hq=1792;b.hr=1871;g[1]=b;e[48]=f;f=R(C,2);g=f.data;g[0]=A(205);b=new Bg;b.hq
=1872;b.hr=1919;g[1]=b;e[49]=f;f=R(C,2);g=f.data;g[0]=A(206);b=new Bg;b.hq=1920;b.hr=1983;g[1]=b;e[50]=f;f=R(C,2);g=f.data;g[0]=A(207);b=new Bg;b.hq=2304;b.hr=2431;g[1]=b;e[51]=f;f=R(C,2);g=f.data;g[0]=A(208);b=new Bg;b.hq=2432;b.hr=2559;g[1]=b;e[52]=f;f=R(C,2);g=f.data;g[0]=A(209);b=new Bg;b.hq=2560;b.hr=2687;g[1]=b;e[53]=f;f=R(C,2);g=f.data;g[0]=A(210);b=new Bg;b.hq=2688;b.hr=2815;g[1]=b;e[54]=f;f=R(C,2);g=f.data;g[0]=A(211);b=new Bg;b.hq=2816;b.hr=2943;g[1]=b;e[55]=f;f=R(C,2);g=f.data;g[0]=A(212);b=new Bg;b.hq
=2944;b.hr=3071;g[1]=b;e[56]=f;f=R(C,2);g=f.data;g[0]=A(213);b=new Bg;b.hq=3072;b.hr=3199;g[1]=b;e[57]=f;f=R(C,2);g=f.data;g[0]=A(214);b=new Bg;b.hq=3200;b.hr=3327;g[1]=b;e[58]=f;f=R(C,2);g=f.data;g[0]=A(215);b=new Bg;b.hq=3328;b.hr=3455;g[1]=b;e[59]=f;f=R(C,2);g=f.data;g[0]=A(216);b=new Bg;b.hq=3456;b.hr=3583;g[1]=b;e[60]=f;f=R(C,2);g=f.data;g[0]=A(217);b=new Bg;b.hq=3584;b.hr=3711;g[1]=b;e[61]=f;f=R(C,2);g=f.data;g[0]=A(218);b=new Bg;b.hq=3712;b.hr=3839;g[1]=b;e[62]=f;f=R(C,2);g=f.data;g[0]=A(219);b=new Bg;b.hq
=3840;b.hr=4095;g[1]=b;e[63]=f;f=R(C,2);g=f.data;g[0]=A(220);b=new Bg;b.hq=4096;b.hr=4255;g[1]=b;e[64]=f;f=R(C,2);g=f.data;g[0]=A(221);b=new Bg;b.hq=4256;b.hr=4351;g[1]=b;e[65]=f;f=R(C,2);g=f.data;g[0]=A(222);b=new Bg;b.hq=4352;b.hr=4607;g[1]=b;e[66]=f;f=R(C,2);g=f.data;g[0]=A(223);b=new Bg;b.hq=4608;b.hr=4991;g[1]=b;e[67]=f;f=R(C,2);g=f.data;g[0]=A(224);b=new Bg;b.hq=4992;b.hr=5023;g[1]=b;e[68]=f;f=R(C,2);g=f.data;g[0]=A(225);b=new Bg;b.hq=5024;b.hr=5119;g[1]=b;e[69]=f;f=R(C,2);g=f.data;g[0]=A(226);b=new Bg;b.hq
=5120;b.hr=5759;g[1]=b;e[70]=f;f=R(C,2);g=f.data;g[0]=A(227);b=new Bg;b.hq=5760;b.hr=5791;g[1]=b;e[71]=f;f=R(C,2);g=f.data;g[0]=A(228);b=new Bg;b.hq=5792;b.hr=5887;g[1]=b;e[72]=f;f=R(C,2);g=f.data;g[0]=A(229);b=new Bg;b.hq=5888;b.hr=5919;g[1]=b;e[73]=f;f=R(C,2);g=f.data;g[0]=A(230);b=new Bg;b.hq=5920;b.hr=5951;g[1]=b;e[74]=f;f=R(C,2);g=f.data;g[0]=A(231);b=new Bg;b.hq=5952;b.hr=5983;g[1]=b;e[75]=f;f=R(C,2);g=f.data;g[0]=A(232);b=new Bg;b.hq=5984;b.hr=6015;g[1]=b;e[76]=f;f=R(C,2);g=f.data;g[0]=A(233);b=new Bg;b.hq
=6016;b.hr=6143;g[1]=b;e[77]=f;f=R(C,2);g=f.data;g[0]=A(234);b=new Bg;b.hq=6144;b.hr=6319;g[1]=b;e[78]=f;f=R(C,2);g=f.data;g[0]=A(235);b=new Bg;b.hq=6400;b.hr=6479;g[1]=b;e[79]=f;f=R(C,2);g=f.data;g[0]=A(236);b=new Bg;b.hq=6480;b.hr=6527;g[1]=b;e[80]=f;f=R(C,2);g=f.data;g[0]=A(237);b=new Bg;b.hq=6528;b.hr=6623;g[1]=b;e[81]=f;f=R(C,2);g=f.data;g[0]=A(238);b=new Bg;b.hq=6624;b.hr=6655;g[1]=b;e[82]=f;f=R(C,2);g=f.data;g[0]=A(239);b=new Bg;b.hq=6656;b.hr=6687;g[1]=b;e[83]=f;f=R(C,2);g=f.data;g[0]=A(240);b=new Bg;b.hq
=7424;b.hr=7551;g[1]=b;e[84]=f;f=R(C,2);g=f.data;g[0]=A(241);b=new Bg;b.hq=7552;b.hr=7615;g[1]=b;e[85]=f;f=R(C,2);g=f.data;g[0]=A(242);b=new Bg;b.hq=7616;b.hr=7679;g[1]=b;e[86]=f;f=R(C,2);g=f.data;g[0]=A(243);b=new Bg;b.hq=7680;b.hr=7935;g[1]=b;e[87]=f;f=R(C,2);g=f.data;g[0]=A(244);b=new Bg;b.hq=7936;b.hr=8191;g[1]=b;e[88]=f;f=R(C,2);g=f.data;g[0]=A(245);b=new Bg;b.hq=8192;b.hr=8303;g[1]=b;e[89]=f;f=R(C,2);g=f.data;g[0]=A(246);b=new Bg;b.hq=8304;b.hr=8351;g[1]=b;e[90]=f;f=R(C,2);g=f.data;g[0]=A(247);b=new Bg;b.hq
=8352;b.hr=8399;g[1]=b;e[91]=f;f=R(C,2);g=f.data;g[0]=A(248);b=new Bg;b.hq=8400;b.hr=8447;g[1]=b;e[92]=f;f=R(C,2);g=f.data;g[0]=A(249);b=new Bg;b.hq=8448;b.hr=8527;g[1]=b;e[93]=f;f=R(C,2);g=f.data;g[0]=A(250);b=new Bg;b.hq=8528;b.hr=8591;g[1]=b;e[94]=f;f=R(C,2);g=f.data;g[0]=A(251);b=new Bg;b.hq=8592;b.hr=8703;g[1]=b;e[95]=f;f=R(C,2);g=f.data;g[0]=A(252);b=new Bg;b.hq=8704;b.hr=8959;g[1]=b;e[96]=f;f=R(C,2);g=f.data;g[0]=A(253);b=new Bg;b.hq=8960;b.hr=9215;g[1]=b;e[97]=f;f=R(C,2);g=f.data;g[0]=A(254);b=new Bg;b.hq
=9216;b.hr=9279;g[1]=b;e[98]=f;f=R(C,2);g=f.data;g[0]=A(255);b=new Bg;b.hq=9280;b.hr=9311;g[1]=b;e[99]=f;f=R(C,2);g=f.data;g[0]=A(256);b=new Bg;b.hq=9312;b.hr=9471;g[1]=b;e[100]=f;f=R(C,2);g=f.data;g[0]=A(257);b=new Bg;b.hq=9472;b.hr=9599;g[1]=b;e[101]=f;f=R(C,2);g=f.data;g[0]=A(258);b=new Bg;b.hq=9600;b.hr=9631;g[1]=b;e[102]=f;e[103]=P(C,[A(259),Bo(9632,9727)]);e[104]=P(C,[A(260),Bo(9728,9983)]);e[105]=P(C,[A(261),Bo(9984,10175)]);e[106]=P(C,[A(262),Bo(10176,10223)]);e[107]=P(C,[A(263),Bo(10224,10239)]);e[108]
=P(C,[A(264),Bo(10240,10495)]);e[109]=P(C,[A(265),Bo(10496,10623)]);e[110]=P(C,[A(266),Bo(10624,10751)]);e[111]=P(C,[A(267),Bo(10752,11007)]);e[112]=P(C,[A(268),Bo(11008,11263)]);e[113]=P(C,[A(269),Bo(11264,11359)]);e[114]=P(C,[A(270),Bo(11392,11519)]);e[115]=P(C,[A(271),Bo(11520,11567)]);e[116]=P(C,[A(272),Bo(11568,11647)]);e[117]=P(C,[A(273),Bo(11648,11743)]);e[118]=P(C,[A(274),Bo(11776,11903)]);e[119]=P(C,[A(275),Bo(11904,12031)]);e[120]=P(C,[A(276),Bo(12032,12255)]);e[121]=P(C,[A(277),Bo(12272,12287)]);e[122]
=P(C,[A(278),Bo(12288,12351)]);e[123]=P(C,[A(279),Bo(12352,12447)]);e[124]=P(C,[A(280),Bo(12448,12543)]);e[125]=P(C,[A(281),Bo(12544,12591)]);e[126]=P(C,[A(282),Bo(12592,12687)]);e[127]=P(C,[A(283),Bo(12688,12703)]);e[128]=P(C,[A(284),Bo(12704,12735)]);e[129]=P(C,[A(285),Bo(12736,12783)]);e[130]=P(C,[A(286),Bo(12784,12799)]);e[131]=P(C,[A(287),Bo(12800,13055)]);e[132]=P(C,[A(288),Bo(13056,13311)]);e[133]=P(C,[A(289),Bo(13312,19893)]);e[134]=P(C,[A(290),Bo(19904,19967)]);e[135]=P(C,[A(291),Bo(19968,40959)]);e[136]
=P(C,[A(292),Bo(40960,42127)]);e[137]=P(C,[A(293),Bo(42128,42191)]);e[138]=P(C,[A(294),Bo(42752,42783)]);e[139]=P(C,[A(295),Bo(43008,43055)]);e[140]=P(C,[A(296),Bo(44032,55203)]);e[141]=P(C,[A(297),Bo(55296,56191)]);e[142]=P(C,[A(298),Bo(56192,56319)]);e[143]=P(C,[A(299),Bo(56320,57343)]);e[144]=P(C,[A(300),Bo(57344,63743)]);e[145]=P(C,[A(301),Bo(63744,64255)]);e[146]=P(C,[A(302),Bo(64256,64335)]);e[147]=P(C,[A(303),Bo(64336,65023)]);e[148]=P(C,[A(304),Bo(65024,65039)]);e[149]=P(C,[A(305),Bo(65040,65055)]);e[150]
=P(C,[A(306),Bo(65056,65071)]);e[151]=P(C,[A(307),Bo(65072,65103)]);e[152]=P(C,[A(308),Bo(65104,65135)]);e[153]=P(C,[A(309),Bo(65136,65279)]);e[154]=P(C,[A(310),Bo(65280,65519)]);e[155]=P(C,[A(32),Bo(0,1114111)]);f=R(C,2);g=f.data;g[0]=A(311);b=new Mq;ACA(b);g[1]=b;e[156]=f;e[157]=P(C,[A(312),BQ(0,1)]);e[158]=P(C,[A(313),E9(62,1)]);e[159]=P(C,[A(314),BQ(1,1)]);e[160]=P(C,[A(315),BQ(2,1)]);e[161]=P(C,[A(316),BQ(3,0)]);e[162]=P(C,[A(317),BQ(4,0)]);e[163]=P(C,[A(318),BQ(5,1)]);e[164]=P(C,[A(319),E9(448,1)]);e[165]
=P(C,[A(320),BQ(6,1)]);e[166]=P(C,[A(321),BQ(7,0)]);e[167]=P(C,[A(322),BQ(8,1)]);e[168]=P(C,[A(323),E9(3584,1)]);e[169]=P(C,[A(324),BQ(9,1)]);e[170]=P(C,[A(325),BQ(10,1)]);e[171]=P(C,[A(326),BQ(11,1)]);e[172]=P(C,[A(327),E9(28672,0)]);e[173]=P(C,[A(328),BQ(12,0)]);e[174]=P(C,[A(329),BQ(13,0)]);e[175]=P(C,[A(330),BQ(14,0)]);e[176]=P(C,[A(331),ZM(983040,1,1)]);e[177]=P(C,[A(332),BQ(15,0)]);e[178]=P(C,[A(333),BQ(16,1)]);e[179]=P(C,[A(334),BQ(18,1)]);e[180]=P(C,[A(335),ABv(19,0,1)]);e[181]=P(C,[A(336),E9(1643118592,
1)]);e[182]=P(C,[A(337),BQ(20,0)]);e[183]=P(C,[A(338),BQ(21,0)]);e[184]=P(C,[A(339),BQ(22,0)]);e[185]=P(C,[A(340),BQ(23,0)]);e[186]=P(C,[A(341),BQ(24,1)]);e[187]=P(C,[A(342),E9(2113929216,1)]);e[188]=P(C,[A(343),BQ(25,1)]);e[189]=P(C,[A(344),BQ(26,0)]);e[190]=P(C,[A(345),BQ(27,0)]);e[191]=P(C,[A(346),BQ(28,1)]);e[192]=P(C,[A(347),BQ(29,0)]);e[193]=P(C,[A(348),BQ(30,0)]);O2=d;};
function Bh(){let a=this;C.call(a);a.jI=null;a.kW=null;}
let ACA=a=>{return;},
AL2=(a,b)=>{if(!b&&a.jI===null)a.jI=a.em();else if(b&&a.kW===null)a.kW=DH(a.em(),1);if(b)return a.kW;return a.jI;};
function KS(){let a=this;F0.call(a);a.j4=0;a.j2=0;}
let ADp=a=>{let b,c,d,e,f,g,h;b=a.j4;c=a.j2;if(c==2147483647)d=A(59);else{d=new T;d.g$=G(20);d=(J(d,d.g8,c,10)).bj();}e=new K;e.g$=G(16);c=e.g8;Bn(e,c,c+1|0);e.g$.data[c]=123;J(e,e.g8,b,10);b=e.g8;Bn(e,b,b+1|0);e.g$.data[b]=44;f=e.g8;if(d===null)d=A(2);F(e,f,d);b=e.g8;Bn(e,b,b+1|0);g=e.g$;h=g.data;h[b]=125;d=new H;b=e.g8;c=h.length;if(b>=0&&b<=(c-0|0)){d.g9=L(g.data,0,b);return d;}d=new I;d.g_=1;d.ha=1;Bl(d);E(d);};
let Lp=D(BO);
let AAH=(a,b,c,d)=>{return b;},
AEy=(a,b)=>{return 0;};
function Ba(){let a=this;C.call(a);a.hi=null;a.h5=0;}
let Jt=(a,b)=>{let c,d,e;if(b<0){c=new I;c.g_=1;c.ha=1;E(c);}d=b/32|0;if(b>=a.h5){GX(a,d+1|0);a.h5=b+1|0;}e=a.hi.data;e[d]=e[d]|1<<(b%32|0);},
GB=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0){d=B4(b,c);if(d<=0){if(!d)return;d=b/32|0;e=c/32|0;if(c>a.h5){GX(a,e+1|0);a.h5=c;}if(d==e){f=a.hi.data;e=f[d];g=(-1)<<(b%32|0);b=c%32|0;f[d]=e|g&(!b?0:(-1)>>>(32-b|0)|0);}else{f=a.hi.data;f[d]=f[d]|(-1)<<(b%32|0);h=d+1|0;while(h<e){f[h]=(-1);h=h+1|0;}if(c&31){h=f[e];b=c%32|0;f[e]=h|(!b?0:(-1)>>>(32-b|0)|0);}}return;}}i=new I;i.g_=1;i.ha=1;E(i);},
Kk=(a,b)=>{let c,d,e,f,g;if(b<0){c=new I;c.g_=1;c.ha=1;E(c);}d=b/32|0;e=a.hi.data;if(d<e.length){f=e[d];g=(b%32|0)&31;e[d]=f&((-2)<<g|((-2)>>>(32-g|0)|0));if(b==(a.h5-1|0))F8(a);}},
SH=(a,b,c)=>{let d,e,f,g,h,i;if(b>=0&&b<=c){d=a.h5;if(b>=d)return;if(d<c)c=d;if(b==c)return;d=b/32|0;e=c/32|0;if(d==e){f=a.hi.data;g=f[d];b=b%32|0;f[d]=g&((!b?0:(-1)>>>(32-b|0)|0)|(-1)<<(c%32|0));}else{f=a.hi.data;h=f[d];b=b%32|0;f[d]=h&(!b?0:(-1)>>>(32-b|0)|0);g=d+1|0;while(g<e){f[g]=0;g=g+1|0;}if(c&31)f[e]=f[e]&(-1)<<(c%32|0);}F8(a);return;}i=new I;i.g_=1;i.ha=1;E(i);},
B6=(a,b)=>{let c,d,e;if(b<0){c=new I;c.g_=1;c.ha=1;E(c);}d=b/32|0;e=a.hi.data;return d<e.length&&e[d]&1<<(b%32|0)?1:0;},
F$=(a,b)=>{let c,d,e,f,g;if(b<0){c=new I;c.g_=1;c.ha=1;E(c);}d=a.h5;if(b>=d)return (-1);e=b/32|0;f=a.hi.data;g=f[e]>>>(b%32|0)|0;if(g)return DX(g)+b|0;d=(d+31|0)/32|0;g=e+1|0;while(g<d){if(f[g])return (g*32|0)+DX(f[g])|0;g=g+1|0;}return (-1);},
AEY=(a,b)=>{let c,d,e,f,g,h;if(b<0){c=new I;c.g_=1;c.ha=1;E(c);}d=a.h5;if(b>=d)return b;e=b/32|0;f=a.hi.data;g=(f[e]^(-1))>>>(b%32|0)|0;if(g)return DX(g)+b|0;g=(d+31|0)/32|0;h=e+1|0;while(h<g){if(f[h]!=(-1))return (h*32|0)+DX(f[h]^(-1))|0;h=h+1|0;}return d;},
GX=(a,b)=>{let c,d,e,f,g,h;c=a.hi.data;d=c.length;if(d>=b)return;e=(b*3|0)/2|0;f=(d*2|0)+1|0;if(e>f)f=e;g=S(f);if(f<d)d=f;h=g.data;b=0;while(b<d){h[b]=c[b];b=b+1|0;}a.hi=g;},
F8=a=>{let b,c,d;b=(a.h5+31|0)/32|0;a.h5=b*32|0;c=b-1|0;a:{while(true){if(c<0)break a;d=La(a.hi.data[c]);if(d<32)break;c=c+(-1)|0;a.h5=a.h5-32|0;}a.h5=a.h5-d|0;}},
GW=(a,b)=>{let c,d,e,f,g;c=a.hi.data;d=c.length;e=b.hi.data;f=e.length;if(d<f)f=d;g=0;while(g<f){if(c[g]&e[g])return 1;g=g+1|0;}return 0;},
C2=(a,b)=>{let c,d,e,f,g,h,i;c=a.hi.data;d=c.length;e=b.hi.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&e[g];g=g+1|0;}while(f<d){c[f]=0;f=f+1|0;}h=a.h5;i=b.h5;if(h<i)i=h;a.h5=i;F8(a);},
Fc=(a,b)=>{let c,d,e,f,g;c=a.hi.data;d=c.length;e=b.hi.data;f=e.length;if(d<f)f=d;g=0;while(g<f){c[g]=c[g]&(e[g]^(-1));g=g+1|0;}F8(a);},
E$=(a,b)=>{let c,d,e,f,g;c=a.h5;d=b.h5;if(c>d)d=c;a.h5=d;GX(a,(d+31|0)/32|0);e=a.hi.data;c=e.length;f=b.hi.data;d=f.length;if(c<d)d=c;g=0;while(g<d){e[g]=e[g]|f[g];g=g+1|0;}},
ES=(a,b)=>{let c,d,e,f,g;c=a.h5;d=b.h5;if(c>d)d=c;a.h5=d;GX(a,(d+31|0)/32|0);e=a.hi.data;c=e.length;f=b.hi.data;g=f.length;if(c<g)g=c;d=0;while(d<g){e[d]=e[d]^f[d];d=d+1|0;}F8(a);};
function KC(){let a=this;BU.call(a);a.pl=null;a.q9=0;}
let Zo=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.iI;f=d.hD;g=b+1|0;f=B4(g,f);if(f>0){d.iE=1;return (-1);}if(b>=0&&b<c.g9.length){h=c.g9.charCodeAt(b);if(!a.pl.eM(h))return (-1);i=h&64512;j=i!=55296?0:1;a:{if(j){if(f>=0)break a;if(g>=0&&g<c.g9.length){if((c.g9.charCodeAt(g)&64512)!=56320?0:1)return (-1);break a;}c=new Q;c.g_=1;c.ha=1;E(c);}if((i!=56320?0:1)&&b>e){j=b-1|0;if(j>=0&&j<c.g9.length){if(!((c.g9.charCodeAt(j)&64512)!=55296?0:1))break a;return (-1);}c=new Q;c.g_=1;c.ha=1;E(c);}}return a.hb.ee(g,c,d);}c=new Q;c.g_
=1;c.ha=1;E(c);};
function FB(){let a=this;BU.call(a);a.lg=null;a.k8=null;}
let TI=(a,b,c,d)=>{let e;e=a.lg.ee(b,c,d);if(e<0)e=Zo(a.k8,b,c,d);if(e>=0)return e;return (-1);},
AEa=(a,b)=>{a.hb=b;a.k8.hb=b;a.lg.dE(b);},
UO=(a,b)=>{return 1;},
Uj=(a,b)=>{return 1;};
function CS(){let a=this;BU.call(a);a.iT=null;a.mt=0;}
let W6=(a,b,c,d)=>{let e,f,g,h;a:{e=d.hD;if(b<e){f=b+1|0;if(b>=0&&b<c.g9.length){g=c.g9.charCodeAt(b);if(a.eM(g)){h=a.hb.ee(f,c,d);if(h>0)return h;}if(f>=e)break a;e=f+1|0;if(f>=0&&f<c.g9.length){f=c.g9.charCodeAt(f);b=(g&64512)!=55296?0:1;if(!(b&&((f&64512)!=56320?0:1)?1:0))break a;if(!a.eM(((g&1023)<<10|f&1023)+65536|0))break a;else return a.hb.ee(e,c,d);}c=new Q;c.g_=1;c.ha=1;E(c);}c=new Q;c.g_=1;c.ha=1;E(c);}}return (-1);},
XV=(a,b)=>{return a.iT.eM(b);},
TA=(a,b)=>{let c,d;if(b instanceof Dq)return a.iT.eM(b.kN);if(b instanceof C_)return a.iT.eM(b.iD);if(b instanceof CS){c=a.iT;b=b.iT;return c.eJ()!==null&&b.eJ()!==null?GW(c.eJ(),b.eJ()):1;}if(!(b instanceof Dd))return 1;c=a.iT;d=b.i_;return c.eJ()!==null&&d.eJ()!==null?GW(c.eJ(),d.eJ()):1;},
ALH=a=>{return a.iT;},
AG3=(a,b)=>{a.hb=b;},
Xj=(a,b)=>{return 1;};
let Hy=D(CS);
let Z_=(a,b)=>{let c;c=a.iT;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b);if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}return c.eM(B1(BD,b));};
function H2(){let a=this;B2.call(a);a.nH=null;a.pt=0;}
let AAK=(a,b,c)=>{let d;d=a.nH;if(b>=0&&b<c.g9.length){b=c.g9.charCodeAt(b);if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}return !d.eM(B1(BD,b)&65535)?(-1):1;}c=new Q;c.g_=1;c.ha=1;E(c);};
function Dd(){let a=this;B2.call(a);a.i_=null;a.p7=0;}
let Rt=(a,b,c)=>{let d;d=a.i_;if(b>=0&&b<c.g9.length)return !d.eM(c.g9.charCodeAt(b))?(-1):1;c=new Q;c.g_=1;c.ha=1;E(c);},
AEA=(a,b)=>{let c,d;if(b instanceof C_)return a.i_.eM(b.iD);if(b instanceof Dd){c=a.i_;b=b.i_;return c.eJ()!==null&&b.eJ()!==null?GW(c.eJ(),b.eJ()):1;}if(!(b instanceof CS)){if(!(b instanceof Dq))return 1;return 0;}c=a.i_;d=b.iT;return c.eJ()!==null&&d.eJ()!==null?GW(c.eJ(),d.eJ()):1;};
function Go(){let a=this;BU.call(a);a.kf=null;a.lf=null;a.lT=0;}
let AB3=(a,b)=>{a.hb=b;},
RO=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=d.hD;f=S(3);g=(-1);h=(-1);if(b>=e)return (-1);i=b+1|0;if(b>=0&&b<c.g9.length){j=c.g9.charCodeAt(b);k=We(j);if(k!==null){f=k.data;l=0;b=f.length;m=a.lT;if(b!=m)return (-1);while(true){if(l>=m)return a.hb.ee(i,c,d);if(f[l]!=a.kf.data[l])break;l=l+1|0;}return (-1);}k=f.data;k[0]=j;m=j-4352|0;if(m>=0&&m<19){if(i<e){if(i>=0&&i<c.g9.length){j=c.g9.charCodeAt(i);g=j-4449|0;}else{c=new Q;c.g_=1;c.ha=1;E(c);}}if(g>=0&&g<21){b=i+1|0;k[1]=j;if(b<e){if(b>=0&&b<c.g9.length){j=c.g9.charCodeAt(b);h
=j-4519|0;}else{c=new Q;c.g_=1;c.ha=1;E(c);}}if(h>=0&&h<28){a:{b=b+1|0;k[2]=j;if(a.lT==3){m=k[0];f=a.kf.data;if(m==f[0]&&k[1]==f[1]&&k[2]==f[2]){b=a.hb.ee(b,c,d);break a;}}b=(-1);}return b;}b:{if(a.lT==2){m=k[0];f=a.kf.data;if(m==f[0]&&k[1]==f[1]){b=a.hb.ee(b,c,d);break b;}}b=(-1);}return b;}return (-1);}return (-1);}c=new Q;c.g_=1;c.ha=1;E(c);},
UF=(a,b)=>{let c,d,e;a:{if(b instanceof Go){b=b;if(b.lf===null){c=new H;d=b.kf;c.g9=L(d.data,0,d.data.length);b.lf=c;}c=b.lf;if(a.lf===null){b=new H;d=a.kf;b.g9=L(d.data,0,d.data.length);a.lf=b;}b=a.lf;if(c===b)e=1;else if(!(b instanceof H))e=0;else{b=b;e=c.g9!==b.g9?0:1;}if(!e){e=0;break a;}}e=1;}return e;},
AH0=(a,b)=>{return 1;};
function C_(){B2.call(this);this.iD=0;}
let AAq=a=>{return 1;},
Y3=(a,b,c)=>{let d;d=a.iD;if(b>=0&&b<c.g9.length)return d!=c.g9.charCodeAt(b)?(-1):1;c=new Q;c.g_=1;c.ha=1;E(c);},
W0=(a,b,c,d)=>{let e,f,g,h,i;if(c instanceof H){e=d.hD;while(true){if(b>=e)return (-1);f=FY(c,a.iD,b);if(f<0)return (-1);g=a.hb;b=f+1|0;if(g.ee(b,c,d)>=0)break;}return f;}h=d.hD;a:{b:{while(true){if(b>h){b=(-1);break b;}i=b+1|0;if(i>d.hD){d.iE=1;e=(-1);}else{e=a.iD;if(b<0)break a;if(b>=c.g9.length)break a;e=e!=c.g9.charCodeAt(b)?(-1):1;e=e<0?(-1):a.hb.ee(b+e|0,c,d);}if(e>=0)break;b=i;}}return b;}c=new Q;Y(c);E(c);},
AAz=(a,b,c,d,e)=>{let f;if(d instanceof H){a:{while(true){if(c<b)return (-1);c=Fo(d,a.iD,c);if(c<0)break a;if(c<b)break a;if(a.hb.ee(c+1|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}b:{c:{while(true){if(c<b){c=(-1);break c;}if((c+1|0)>e.hD){e.iE=1;f=(-1);}else{f=a.iD;if(c<0)break b;if(c>=d.g9.length)break b;f=f!=d.g9.charCodeAt(c)?(-1):1;f=f<0?(-1):a.hb.ee(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new Q;Y(d);E(d);},
AHT=(a,b)=>{let c,d,e,f;if(b instanceof C_)return b.iD!=a.iD?0:1;if(!(b instanceof Dd)){if(b instanceof CS)return b.eM(a.iD);if(!(b instanceof Dq))return 1;return 0;}b=b;c=a.iD;d=new H;e=G(1);f=e.data;f[0]=c;d.g9=L(e.data,0,f.length);b=b.i_;if(0>=d.g9.length){b=new Q;b.g_=1;b.ha=1;E(b);}return (!b.eM(d.g9.charCodeAt(0))?(-1):1)<=0?0:1;};
function J2(){B2.call(this);this.m1=0;}
let RC=(a,b,c)=>{let d;d=a.m1;if(b>=0&&b<c.g9.length){b=c.g9.charCodeAt(b);if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}b=B1(BC,b)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}return d!=(B1(BD,b)&65535)?(-1):1;}c=new Q;c.g_=1;c.ha=1;E(c);};
function Hv(){let a=this;B2.call(a);a.or=0;a.nc=0;}
let Si=(a,b,c)=>{let d;d=a.or;if(b>=0&&b<c.g9.length){a:{b:{if(d!=c.g9.charCodeAt(b)){d=a.nc;if(b<0)break a;if(b>=c.g9.length)break a;if(d!=c.g9.charCodeAt(b)){b=(-1);break b;}}b=1;}return b;}c=new Q;c.g_=1;c.ha=1;E(c);}c=new Q;c.g_=1;c.ha=1;E(c);};
function Ec(){let a=this;BU.call(a);a.ky=0;a.kS=null;a.kK=null;a.kH=0;}
let AJB=(a,b)=>{a.hb=b;},
AEb=(a,b,c,d)=>{let e,f,g,h,i,j,k;e=S(4);f=d.hD;if(b>=f)return (-1);g=IK(a,b,c,f);h=b+a.ky|0;i=Mw.eY(g);if(i===null){j=e.data;b=1;j[0]=g;}else{b=i.data.length;Fm(i,0,e,0,b);b=0+b|0;}a:{if(h<f){i=e.data;g=IK(a,h,c,f);while(b<4){if(!AEI(g)){k=b+1|0;i[b]=g;}else{j=(Mw.eY(g)).data;if(j.length!=2){k=b+1|0;i[b]=j[0];}else{g=b+1|0;i[b]=j[0];k=g+1|0;i[g]=j[1];}}h=h+a.ky|0;if(h>=f){b=k;break a;}g=IK(a,h,c,f);b=k;}}}if(b!=a.kH)return (-1);j=e.data;g=0;while(true){if(g>=b)return a.hb.ee(h,c,d);if(j[g]!=a.kK.data[g])break;g
=g+1|0;}return (-1);},
IK=(a,b,c,d)=>{let e,f,g,h;a:{a.ky=1;if(b>=(d-1|0)){if(b>=0&&b<c.g9.length){e=c.g9.charCodeAt(b);break a;}c=new Q;c.g_=1;c.ha=1;E(c);}d=b+1|0;if(b>=0&&b<c.g9.length){e=c.g9.charCodeAt(b);if(d>=0&&d<c.g9.length){f=c.g9.charCodeAt(d);b=(e&64512)!=55296?0:1;if(b&&((f&64512)!=56320?0:1)?1:0){g=G(2);h=g.data;h[0]=e;h[1]=f;e=UN(g,0,h.length);a.ky=2;}break a;}c=new Q;c.g_=1;c.ha=1;E(c);}c=new Q;c.g_=1;c.ha=1;E(c);}return e;},
AAL=(a,b)=>{let c,d,e,f,g,h,i;a:{if(b instanceof Ec){b=b;if(b.kS===null){c=new K;c.g$=G(16);d=0;while(d<b.kH){e=EN(b.kK.data[d]);f=e.data.length;KU(c,c.g8,e,0,f);d=d+1|0;}g=new H;e=c.g$;h=e.data;i=c.g8;f=h.length;if(i>=0&&i<=(f-0|0)){g.g9=L(e.data,0,i);b.kS=g;}else{b=new I;Y(b);E(b);}}g=b.kS;if(a.kS===null){b=new K;b.g$=G(16);d=0;while(d<a.kH){e=EN(a.kK.data[d]);f=e.data.length;KU(b,b.g8,e,0,f);d=d+1|0;}c=new H;e=b.g$;h=e.data;f=b.g8;i=h.length;if(f>=0&&f<=(i-0|0)){c.g9=L(e.data,0,f);a.kS=c;}else{b=new I;Y(b);E(b);}}b
=a.kS;if(g===b)d=1;else if(!(b instanceof H))d=0;else{b=b;d=g.g9!==b.g9?0:1;}if(!d){d=0;break a;}}d=1;}return d;},
AFz=(a,b)=>{return 1;};
let QZ=D(Ec);
let OQ=D(Ec);
let Rm=D(CL);
let VK=(a,b,c,d)=>{let e;while(true){e=a.hB.ee(b,c,d);if(e<=0)break;b=e;}return a.hb.ee(b,c,d);};
let Mg=D(CL);
let ACS=(a,b,c,d)=>{let e;e=a.hB.ee(b,c,d);if(e<0)return (-1);if(e>b){while(true){b=a.hB.ee(e,c,d);if(b<=e)break;e=b;}b=e;}return a.hb.ee(b,c,d);};
let E_=D(CL);
let AGX=(a,b,c,d)=>{let e;if(!a.hB.eP(d))return a.hb.ee(b,c,d);e=a.hB.ee(b,c,d);if(e>=0)return e;return a.hb.ee(b,c,d);},
AIH=(a,b)=>{a.hb=b;a.hB.dE(b);};
let L6=D(E_);
let AAx=(a,b,c,d)=>{let e;e=a.hB.ee(b,c,d);if(e<=0)e=b;return a.hb.ee(e,c,d);},
ADq=(a,b)=>{a.hb=b;};
function EI(){let a=this;CL.call(a);a.jW=null;a.iZ=0;}
let AKI=(a,b,c,d)=>{let e,f,g,h;e=a.iZ;e=d.jh.data[e];if(!a.hB.eP(d))return a.hb.ee(b,c,d);if(e>=a.jW.j2)return a.hb.ee(b,c,d);f=a.iZ;e=e+1|0;d.jh.data[f]=e;g=a.hB.ee(b,c,d);if(g>=0){b=a.iZ;d.jh.data[b]=0;return g;}g=a.iZ;e=e+(-1)|0;h=d.jh.data;h[g]=e;if(e>=a.jW.j4)return a.hb.ee(b,c,d);h[g]=0;return (-1);};
let KW=D(EI);
let ZG=(a,b,c,d)=>{let e,f,g;e=0;f=a.jW.j2;a:{while(true){g=a.hB.ee(b,c,d);if(g<=b)break a;if(e>=f)break;e=e+1|0;b=g;}}if(g<0&&e<a.jW.j4)return (-1);return a.hb.ee(b,c,d);};
let Nx=D(CL);
let AJP=(a,b,c,d)=>{let e;if(!a.hB.eP(d))return a.hb.ee(b,c,d);e=a.hb.ee(b,c,d);if(e>=0)return e;return a.hB.ee(b,c,d);};
let MU=D(E_);
let UQ=(a,b,c,d)=>{let e;if(!a.hB.eP(d))return a.hb.ee(b,c,d);e=a.hb.ee(b,c,d);if(e<0)e=a.hB.ee(b,c,d);return e;};
let Pq=D(EI);
let Tc=(a,b,c,d)=>{let e,f,g;e=a.iZ;f=d.jh.data[e];if(!a.hB.eP(d))return a.hb.ee(b,c,d);g=a.jW;if(f>=g.j2){e=a.iZ;d.jh.data[e]=0;return a.hb.ee(b,c,d);}if(f<g.j4){e=a.iZ;d.jh.data[e]=f+1|0;e=a.hB.ee(b,c,d);}else{e=a.hb.ee(b,c,d);if(e>=0){b=a.iZ;d.jh.data[b]=0;return e;}e=a.iZ;d.jh.data[e]=f+1|0;e=a.hB.ee(b,c,d);}return e;};
let Nz=D(Dy);
let AKr=(a,b,c,d)=>{let e;e=d.hD;if(e>b)return a.hb.ez(b,e,c,d);return a.hb.ee(b,c,d);},
AHd=(a,b,c,d)=>{let e;e=d.hD;if(a.hb.ez(b,e,c,d)>=0)return b;return (-1);};
function Lv(){Dy.call(this);this.mj=null;}
let AEC=(a,b,c,d)=>{let e,f,g;e=d.hD;f=b;a:{while(true){if(f>=e){f=(-1);break a;}g=a.mj;if(f<0)break;if(f>=c.g9.length)break;if(g.e2(c.g9.charCodeAt(f)))break a;f=f+1|0;}c=new Q;c.g_=1;c.ha=1;E(c);}if(f>=0)e=f;if(e>b)return a.hb.ez(b,e,c,d);return a.hb.ee(b,c,d);},
RU=(a,b,c,d)=>{let e,f,g,h,i;e=d.hD;f=a.hb.d8(b,c,d);if(f<0)return (-1);g=f;a:{while(true){if(g>=e){g=(-1);break a;}h=a.mj;if(g<0)break;if(g>=c.g9.length)break;if(h.e2(c.g9.charCodeAt(g)))break a;g=g+1|0;}c=new Q;c.g_=1;c.ha=1;E(c);}if(g>=0)e=g;g=a.hb.ez(f,e,c,d);if(f>g)g=f;if(g<=0)i=g?(-1):0;else{i=g-1|0;b:{while(true){if(i<b){i=(-1);break b;}d=a.mj;if(i<0)break;if(i>=c.g9.length)break;if(d.e2(c.g9.charCodeAt(i)))break b;i=i+(-1)|0;}c=new Q;c.g_=1;c.ha=1;E(c);}}if(i>=b)b=i>=g?i:i+1|0;return b;};
let FP=D();
let EQ=null,EG=null;
let Ro=D(CJ);
let Tg=(a,b,c,d)=>{let e;a:{while(true){if((b+a.hL.ew()|0)>d.hD)break a;e=a.hL.ex(b,c);if(e<1)break;b=b+e|0;}}return a.hb.ee(b,c,d);};
let Qi=D(D8);
let ACN=(a,b,c,d)=>{let e;if((b+a.hL.ew()|0)<=d.hD){e=a.hL.ex(b,c);if(e>=1)b=b+e|0;}return a.hb.ee(b,c,d);};
let LY=D(D$);
let AGp=(a,b,c,d)=>{let e,f,g,h,i;e=a.le;f=e.j4;g=e.j2;h=0;while(true){if(h>=f){a:{while(true){if(h>=g)break a;if((b+a.hL.ew()|0)>d.hD)break a;i=a.hL.ex(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}}return a.hb.ee(b,c,d);}if((b+a.hL.ew()|0)>d.hD){d.iE=1;return (-1);}i=a.hL.ex(b,c);if(i<1)break;b=b+i|0;h=h+1|0;}return (-1);};
let MN=D(CJ);
let AEt=(a,b,c,d)=>{let e;while(true){e=a.hb.ee(b,c,d);if(e>=0)break;if((b+a.hL.ew()|0)<=d.hD){e=a.hL.ex(b,c);b=b+e|0;}if(e<1)return (-1);}return e;};
let OT=D(D8);
let Ts=(a,b,c,d)=>{let e;e=a.hb.ee(b,c,d);if(e>=0)return e;return a.hB.ee(b,c,d);};
let Nj=D(D$);
let AGI=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.le;f=e.j4;g=e.j2;h=0;while(true){if(h>=f){a:{while(true){i=a.hb.ee(b,c,d);if(i>=0)break;if((b+a.hL.ew()|0)<=d.hD){i=a.hL.ex(b,c);b=b+i|0;h=h+1|0;}if(i<1)break a;if(h>g)break a;}return i;}return (-1);}if((b+a.hL.ew()|0)>d.hD){d.iE=1;return (-1);}j=a.hL.ex(b,c);if(j<1)break;b=b+j|0;h=h+1|0;}return (-1);};
let IF=D(BO);
let ABt=(a,b,c,d)=>{if(b&&!(d.kw&&b==d.iI))return (-1);return a.hb.ee(b,c,d);},
ZS=(a,b)=>{return 0;};
function Ie(){BO.call(this);this.om=0;}
let Ug=(a,b,c,d)=>{let e,f,g;if(b>=d.hD)e=32;else if(b>=0&&b<c.g9.length)e=c.g9.charCodeAt(b);else{c=new Q;c.g_=1;c.ha=1;E(c);}if(!b)f=32;else{f=b-1|0;if(f>=0&&f<c.g9.length)f=c.g9.charCodeAt(f);else{c=new Q;c.g_=1;c.ha=1;E(c);}}g=d.mv?0:d.iI;return (e!=32&&!MX(a,e,b,g,c)?0:1)^(f!=32&&!MX(a,f,b-1|0,g,c)?0:1)^a.om?(-1):a.hb.ee(b,c,d);},
UC=(a,b)=>{return 0;},
MX=(a,b,c,d,e)=>{let f;a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}f=1;break a;}f=0;}if(!f&&b!=95){c:{d:{if(B$(b)==6)while(true){c=c+(-1)|0;if(c<d)break d;if(c<0)break c;if(c>=e.g9.length)break c;e:{f:{f=e.g9.charCodeAt(c);switch(B$(f)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break f;default:break f;}b=1;break e;}b=0;}if(b)return 0;if(B$(f)!=6)return 1;}}return 1;}e=new Q;e.g_=1;e.ha=1;E(e);}return 0;};
let Lr=D(BO);
let AAe=(a,b,c,d)=>{if(b!=d.lY)return (-1);return a.hb.ee(b,c,d);},
AKD=(a,b)=>{return 0;};
function J1(){BO.call(this);this.kY=0;}
let AFf=(a,b,c,d)=>{let e,f,g;e=!d.kw?c.g9.length:d.hD;if(b>=e){f=a.kY;d.hS.data[f]=0;return a.hb.ee(b,c,d);}a:{e=e-b|0;if(e==2){if(b>=0&&b<c.g9.length){if(c.g9.charCodeAt(b)!=13)break a;g=b+1|0;if(g>=0&&g<c.g9.length){if(c.g9.charCodeAt(g)!=10)break a;f=a.kY;d.hS.data[f]=0;return a.hb.ee(b,c,d);}c=new Q;c.g_=1;c.ha=1;E(c);}c=new Q;c.g_=1;c.ha=1;E(c);}}b:{c:{if(e==1){if(b>=0&&b<c.g9.length){f=c.g9.charCodeAt(b);if(f==10)break b;if(f==13)break b;if(f==133)break b;if((f|1)!=8233)break c;else break b;}c=new Q;c.g_
=1;c.ha=1;E(c);}}return (-1);}e=a.kY;d.hS.data[e]=0;return a.hb.ee(b,c,d);},
Vz=(a,b)=>{let c,d,e;c=a.kY;d=b.hS.data;e=!d[c]?0:1;d[c]=(-1);return e;};
let Qw=D(BO);
let AD1=(a,b,c,d)=>{if(b<(!d.mv?d.hD:c.g9.length))return (-1);d.iE=1;d.sj=1;return a.hb.ee(b,c,d);},
Rz=(a,b)=>{return 0;};
function K1(){BO.call(this);this.pM=null;}
let Vi=(a,b,c,d)=>{let e,f;a:{b:{c:{if(b!=d.hD){if(!b)break b;if(d.kw&&b==d.iI)break b;e=a.pM;f=b-1|0;if(f>=0&&f<c.g9.length){f=c.g9.charCodeAt(f);if(b<0)break a;if(b>=c.g9.length)break a;if(!e.e4(f,c.g9.charCodeAt(b)))break c;else break b;}c=new Q;c.g_=1;c.ha=1;E(c);}}return (-1);}return a.hb.ee(b,c,d);}c=new Q;c.g_=1;c.ha=1;E(c);},
Yo=(a,b)=>{return 0;};
let Qt=D(BU);
let AJU=(a,b,c,d)=>{let e,f,g,h,i;e=d.hD;f=b+1|0;if(f>e){d.iE=1;return (-1);}if(b>=0&&b<c.g9.length){g=B4(c.g9.charCodeAt(b)&64512,55296);h=g?0:1;a:{if(h){i=b+2|0;if(i<=e){if(f>=0&&f<c.g9.length){h=c.g9.charCodeAt(f);b=g?0:1;if(!(b&&((h&64512)!=56320?0:1)?1:0))break a;else return a.hb.ee(i,c,d);}c=new Q;c.g_=1;c.ha=1;E(c);}}}return a.hb.ee(f,c,d);}c=new Q;c.g_=1;c.ha=1;E(c);},
UH=(a,b)=>{a.hb=b;},
ADA=a=>{return (-2147483602);},
UG=(a,b)=>{return 1;};
function LU(){BU.call(this);this.nS=null;}
let ADW=(a,b,c,d)=>{let e,f,g,h,i,j;e=d.hD;f=b+1|0;if(f>e){d.iE=1;return (-1);}if(b>=0&&b<c.g9.length){g=c.g9.charCodeAt(b);h=B4(g&64512,55296);i=h?0:1;a:{if(i){j=b+2|0;if(j<=e){if(f>=0&&f<c.g9.length){i=c.g9.charCodeAt(f);b=h?0:1;if(!(b&&((i&64512)!=56320?0:1)?1:0))break a;else return a.nS.e2(((g&1023)<<10|i&1023)+65536|0)?(-1):a.hb.ee(j,c,d);}c=new Q;c.g_=1;c.ha=1;E(c);}}}return a.nS.e2(g)?(-1):a.hb.ee(f,c,d);}c=new Q;c.g_=1;c.ha=1;E(c);},
AF_=(a,b)=>{a.hb=b;},
Rp=a=>{return (-2147483602);},
AKj=(a,b)=>{return 1;};
function Qj(){BO.call(this);this.mp=0;}
let AAW=(a,b,c,d)=>{let e,f;e=!d.kw?c.g9.length:d.hD;if(b>=e){e=a.mp;d.hS.data[e]=0;return a.hb.ee(b,c,d);}a:{if((e-b|0)==1){if(b>=0&&b<c.g9.length){if(c.g9.charCodeAt(b)!=10)break a;else{f=a.mp;d.hS.data[f]=1;return a.hb.ee(b+1|0,c,d);}}c=new Q;c.g_=1;c.ha=1;E(c);}}return (-1);},
X5=(a,b)=>{let c,d,e;c=a.mp;d=b.hS.data;e=!d[c]?0:1;d[c]=(-1);return e;};
function Og(){BO.call(this);this.mB=0;}
let ADZ=(a,b,c,d)=>{let e;if((!d.kw?c.g9.length-b|0:d.hD-b|0)<=0){e=a.mB;d.hS.data[e]=0;return a.hb.ee(b,c,d);}if(b>=0&&b<c.g9.length){if(c.g9.charCodeAt(b)!=10)return (-1);e=a.mB;d.hS.data[e]=1;return a.hb.ee(b+1|0,c,d);}c=new Q;c.g_=1;c.ha=1;E(c);},
XN=(a,b)=>{let c,d,e;c=a.mB;d=b.hS.data;e=!d[c]?0:1;d[c]=(-1);return e;};
function Ku(){BO.call(this);this.lj=0;}
let ZL=(a,b,c,d)=>{let e,f,g;e=!d.kw?c.g9.length-b|0:d.hD-b|0;if(!e){e=a.lj;d.hS.data[e]=0;return a.hb.ee(b,c,d);}a:{if(e<2){if(b>=0&&b<c.g9.length){f=c.g9.charCodeAt(b);g=97;break a;}c=new Q;c.g_=1;c.ha=1;E(c);}if(b>=0&&b<c.g9.length){f=c.g9.charCodeAt(b);e=b+1|0;if(e>=0&&e<c.g9.length){g=c.g9.charCodeAt(e);break a;}c=new Q;c.g_=1;c.ha=1;E(c);}c=new Q;c.g_=1;c.ha=1;E(c);}switch(f){case 10:case 133:case 8232:case 8233:e=a.lj;d.hS.data[e]=0;return a.hb.ee(b,c,d);case 13:if(g!=10){e=a.lj;d.hS.data[e]=0;return a.hb.ee(b,
c,d);}e=a.lj;d.hS.data[e]=0;return a.hb.ee(b,c,d);default:}return (-1);},
VD=(a,b)=>{let c,d,e;c=a.lj;d=b.hS.data;e=!d[c]?0:1;d[c]=(-1);return e;};
function E7(){let a=this;BU.call(a);a.lr=0;a.kE=0;}
let Tk=(a,b,c,d)=>{let e,f,g,h,i;e=Gs(a,d);if(e!==null&&(b+e.g9.length|0)<=d.hD){f=0;a:{b:{c:{d:{while(true){if(f>=e.g9.length){g=a.kE;d.hS.data[g]=e.g9.length;return a.hb.ee(b+e.g9.length|0,c,d);}if(f<0)break c;if(f>=e.g9.length)break c;h=e.g9.charCodeAt(f);i=b+f|0;if(i<0)break d;if(i>=c.g9.length)break d;if(h!=c.g9.charCodeAt(i)){if(f<0)break a;if(f>=e.g9.length)break a;g=EE(e.g9.charCodeAt(f));if(i<0)break b;if(i>=c.g9.length)break b;if(g!=c.g9.charCodeAt(i))break;}f=f+1|0;}return (-1);}c=new Q;c.g_=1;c.ha
=1;E(c);}c=new Q;c.g_=1;c.ha=1;E(c);}c=new Q;c.g_=1;c.ha=1;E(c);}c=new Q;c.g_=1;c.ha=1;E(c);}return (-1);},
AFt=(a,b)=>{a.hb=b;},
Gs=(a,b)=>{let c,d,e,f,g;c=a.lr;d=b.id.data;e=c*2|0;f=d[e];g=d[e+1|0];return (g|f|(g-f|0))>=0&&g<=b.k1.g9.length?Cc(b.k1,f,g):null;},
AFU=(a,b)=>{let c,d,e;c=a.kE;d=b.hS.data;e=!d[c]?0:1;d[c]=(-1);return e;};
let Qr=D(E7);
let VJ=(a,b,c,d)=>{let e,f,g;e=Gs(a,d);if(e!==null&&(b+e.g9.length|0)<=d.hD){f=!Jp(c,e,b)?(-1):e.g9.length;if(f<0)return (-1);g=a.kE;d.hS.data[g]=f;return a.hb.ee(b+f|0,c,d);}return (-1);},
AH9=(a,b,c,d)=>{let e,f,g;e=Gs(a,d);f=d.iI;if(e!==null&&(b+e.g9.length|0)<=f){while(true){if(b>f)return (-1);g=Mi(c,e,b);if(g<0)return (-1);if(a.hb.ee(g+e.g9.length|0,c,d)>=0)break;b=g+1|0;}return g;}return (-1);},
SQ=(a,b,c,d,e)=>{let f,g;f=Gs(a,e);if(f===null)return (-1);a:{while(true){if(c<b)return (-1);g=WY(d,f,c);if(g<0)break a;if(g<b)break a;if(a.hb.ee(g+f.g9.length|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);},
ACD=(a,b)=>{return 1;};
let Nc=D(E7);
let ABR=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.lr;f=d.id.data;g=e*2|0;h=f[g];i=f[g+1|0];j=(i|h|(i-h|0))>=0&&i<=d.k1.g9.length?Cc(d.k1,h,i):null;if(j!==null&&(b+j.g9.length|0)<=d.hD){i=0;a:{b:{while(true){if(i>=j.g9.length){e=a.kE;d.hS.data[e]=j.g9.length;return a.hb.ee(b+j.g9.length|0,c,d);}if(i<0)break a;if(i>=j.g9.length)break a;e=j.g9.charCodeAt(i);if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}e=B1(BC,e)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value)
:null)));}g=B1(BD,e)&65535;h=b+i|0;if(h<0)break b;if(h>=c.g9.length)break b;e=c.g9.charCodeAt(h);if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}e=B1(BC,e)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}if(g!=(B1(BD,e)&65535))break;i=i+1|0;}return (-1);}c=new Q;c.g_=1;c.ha=1;E(c);}c=new Q;c.g_=1;c.ha=1;E(c);}return (-1);};
let Lo=D(T);
let XE=(a,b,c,d,e)=>{let f,g,h,i;Bn(a,b,b+e|0);f=e+d|0;while(d<f){g=c.data;h=a.g$.data;e=b+1|0;i=d+1|0;h[b]=g[d];b=e;d=i;}return a;},
Uo=(a,b,c,d)=>{let e,f,g,h,i;e=a.g8;Bn(a,e,e+d|0);f=d+c|0;while(c<f){g=b.data;h=a.g$.data;d=e+1|0;i=c+1|0;h[e]=g[c];e=d;c=i;}return a;},
UZ=(a,b)=>{Gh(a,b);},
AHh=(a,b,c)=>{Bn(a,b,b+1|0);a.g$.data[b]=c;return a;};
function NC(){let a=this;B2.call(a);a.iq=null;a.nu=null;a.n1=null;}
let Wc=(a,b)=>{let c,d,e,f,g,h;c=M;M=c+1|0;d=new T;d.g$=G(20);a.hj=(J(d,d.g8,c,10)).bj();a.hE=1;d=new H;e=b.g$;f=e.data;g=b.g8;h=f.length;if(g>=0&&g<=(h-0|0)){d.g9=L(e.data,0,g);a.iq=d;c=b.g8;a.hE=c;a.nu=OC(c);a.n1=OC(a.hE);c=0;a:{b:{while(c<(a.hE-1|0)){b=a.nu;d=a.iq;if(c<0)break a;if(c>=d.g9.length)break a;Nl(b,d.g9.charCodeAt(c),(a.hE-c|0)-1|0);b=a.n1;d=a.iq;g=(a.hE-c|0)-1|0;if(g<0)break b;if(g>=d.g9.length)break b;Nl(b,d.g9.charCodeAt(g),(a.hE-c|0)-1|0);c=c+1|0;}return;}b=new Q;b.g_=1;b.ha=1;E(b);}b=new Q;b.g_
=1;b.ha=1;E(b);}b=new I;b.g_=1;b.ha=1;E(b);},
ZP=a=>{let b=new NC();Wc(b,a);return b;},
Wf=(a,b,c)=>{let d,e,f,g;d=0;a:{b:{c:{while(d<a.hE){e=d+b|0;if(e<0)break a;if(e>=c.g9.length)break a;f=c.g9.charCodeAt(e);g=a.iq;if(d<0)break b;if(d>=g.g9.length)break b;if(f!=g.g9.charCodeAt(d)){b=0;break c;}d=d+1|0;}b=1;}return !b?(-1):a.hE;}c=new Q;c.g_=1;c.ha=1;E(c);}c=new Q;c.g_=1;c.ha=1;E(c);},
T_=(a,b,c,d)=>{let e,f;e=d.hD;while(true){if(b>e)return (-1);f=AIl(a,c,b,e);if(f<0)return (-1);if(a.hb.ee(f+a.hE|0,c,d)>=0)break;b=f+1|0;}return f;},
Yh=(a,b,c,d,e)=>{while(true){if(c<b)return (-1);c=AHi(a,d,b,c);if(c<0)return (-1);if(a.hb.ee(c+a.hE|0,d,e)>=0)break;c=c+(-1)|0;}return c;},
Zd=(a,b)=>{let c,d,e;if(b instanceof C_){c=b.iD;b=a.iq;if(0<b.g9.length)return c!=b.g9.charCodeAt(0)?0:1;b=new Q;b.g_=1;b.ha=1;E(b);}if(b instanceof Dd){b=b;d=Cc(a.iq,0,1);b=b.i_;if(0>=d.g9.length){b=new Q;b.g_=1;b.ha=1;E(b);}return (!b.eM(d.g9.charCodeAt(0))?(-1):1)<=0?0:1;}if(!(b instanceof CS)){if(!(b instanceof Dq))return 1;a:{if(a.iq.g9.length>1){e=b.kN;b=a.iq;if(0>=b.g9.length){b=new Q;b.g_=1;b.ha=1;E(b);}c=b.g9.charCodeAt(0);b=a.iq;if(1>=b.g9.length){b=new Q;b.g_=1;b.ha=1;E(b);}if(e==(((c&1023)<<10|b.g9.charCodeAt(1)
&1023)+65536|0)){c=1;break a;}}c=0;}return c;}b=b;d=a.iq;if(0>=d.g9.length){b=new Q;b.g_=1;b.ha=1;E(b);}b:{c:{if(!b.eM(d.g9.charCodeAt(0))){if(a.iq.g9.length<=1)break c;d=a.iq;if(0>=d.g9.length){b=new Q;b.g_=1;b.ha=1;E(b);}c=d.g9.charCodeAt(0);d=a.iq;if(1>=d.g9.length){b=new Q;b.g_=1;b.ha=1;E(b);}if(!b.eM(((c&1023)<<10|d.g9.charCodeAt(1)&1023)+65536|0))break c;}c=1;break b;}c=0;}return c;},
AIl=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.iq;f=a.hE-1|0;if(f>=0&&f<e.g9.length){g=e.g9.charCodeAt(f);a:{b:{c:{while(true){f=a.hE;if(c>(d-f|0))return (-1);f=(c+f|0)-1|0;if(f<0)break c;if(f>=b.g9.length)break c;h=b.g9.charCodeAt(f);if(h==g){f=0;d:{while(f<a.hE){i=f+c|0;if(i<0)break a;if(i>=b.g9.length)break a;j=b.g9.charCodeAt(i);e=a.iq;if(f<0)break b;if(f>=e.g9.length)break b;if(j!=e.g9.charCodeAt(f)){f=0;break d;}f=f+1|0;}f=1;}if(f)break;}c=c+Od(a.nu,h)|0;}return c;}b=new Q;b.g_=1;b.ha=1;E(b);}b=new Q;b.g_=1;b.ha
=1;E(b);}b=new Q;b.g_=1;b.ha=1;E(b);}b=new Q;b.g_=1;b.ha=1;E(b);},
AHi=(a,b,c,d)=>{let e,f,g,h,i,j;e=a.iq;if(0>=e.g9.length){b=new Q;b.g_=1;b.ha=1;E(b);}f=e.g9.charCodeAt(0);g=(b.g9.length-d|0)-a.hE|0;if(g<=0)d=d+g|0;a:{b:{c:{while(true){if(d<c)return (-1);if(d<0)break c;if(d>=b.g9.length)break c;h=b.g9.charCodeAt(d);if(h==f){g=0;d:{while(g<a.hE){i=g+d|0;if(i<0)break a;if(i>=b.g9.length)break a;j=b.g9.charCodeAt(i);e=a.iq;if(g<0)break b;if(g>=e.g9.length)break b;if(j!=e.g9.charCodeAt(g)){g=0;break d;}g=g+1|0;}g=1;}if(g)break;}d=d-Od(a.n1,h)|0;}return d;}b=new Q;b.g_=1;b.ha
=1;E(b);}b=new Q;b.g_=1;b.ha=1;E(b);}b=new Q;b.g_=1;b.ha=1;E(b);};
function Ks(){B2.call(this);this.my=null;}
let AB0=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{while(true){if(d>=a.my.g9.length)return a.my.g9.length;e=a.my;if(d<0)break a;if(d>=e.g9.length)break a;f=e.g9.charCodeAt(d);g=b+d|0;if(g<0)break b;if(g>=c.g9.length)break b;h=c.g9.charCodeAt(g);if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}h=B1(BC,h)&65535;if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}if(f!=(B1(BD,h)&65535))break;d=d+1|0;}return (-1);}c=new Q;c.g_=1;c.ha=1;E(c);}c=new Q;c.g_=1;c.ha
=1;E(c);};
function KZ(){B2.call(this);this.lI=null;}
let AGr=(a,b,c)=>{let d,e,f,g,h;d=0;a:{b:{c:{d:{while(true){if(d>=a.lI.g9.length)return a.lI.g9.length;e=a.lI;if(d<0)break c;if(d>=e.g9.length)break c;f=e.g9.charCodeAt(d);g=b+d|0;if(g<0)break d;if(g>=c.g9.length)break d;if(f!=c.g9.charCodeAt(g)){e=a.lI;if(d<0)break a;if(d>=e.g9.length)break a;h=EE(e.g9.charCodeAt(d));if(g<0)break b;if(g>=c.g9.length)break b;if(h!=c.g9.charCodeAt(g))break;}d=d+1|0;}return (-1);}c=new Q;c.g_=1;c.ha=1;E(c);}c=new Q;c.g_=1;c.ha=1;E(c);}c=new Q;c.g_=1;c.ha=1;E(c);}c=new Q;c.g_=
1;c.ha=1;E(c);};
let AKV=D();
function Kq(){B2.call(this);this.pB=0;}
let AGv=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.g9.length){e=c.g9.charCodeAt(b);if(d>=0&&d<c.g9.length){d=c.g9.charCodeAt(d);b=a.pB;d=((e&1023)<<10|d&1023)+65536|0;if(BC===null){if(Bt===null)Bt=C0();BC=BZ(B3((Bt.value!==null?V(Bt.value):null)));}d=B1(BC,d);if(BD===null){if(Bu===null)Bu=CX();BD=BZ(B3((Bu.value!==null?V(Bu.value):null)));}return b!=B1(BD,d)?(-1):2;}c=new Q;c.g_=1;c.ha=1;E(c);}c=new Q;c.g_=1;c.ha=1;E(c);};
function FS(){BU.call(this);this.kz=0;}
let AEq=(a,b)=>{a.hb=b;},
H7=(a,b,c,d)=>{let e,f;e=b+1|0;if(e>d.hD){d.iE=1;return (-1);}if(b>=0&&b<c.g9.length){a:{f=c.g9.charCodeAt(b);if(b>d.iI){b=b-1|0;if(b>=0&&b<c.g9.length){if(!((c.g9.charCodeAt(b)&64512)!=55296?0:1))break a;return (-1);}c=new Q;c.g_=1;c.ha=1;E(c);}}if(a.kz!=f)return (-1);return a.hb.ee(e,c,d);}c=new Q;c.g_=1;c.ha=1;E(c);},
Y_=(a,b,c,d)=>{let e,f,g,h,i;if(!(c instanceof H)){e=d.hD;a:{while(true){if(b>e){b=(-1);break a;}if(H7(a,b,c,d)>=0)break;b=b+1|0;}}return b;}f=d.iI;g=d.hD;b:{while(true){if(b>=g)return (-1);h=FY(c,a.kz,b);if(h<0)return (-1);if(h>f){b=h-1|0;if(b<0)break b;if(b>=c.g9.length)break b;if((c.g9.charCodeAt(b)&64512)!=55296?0:1){b=h+1|0;continue;}}i=a.hb;b=h+1|0;if(i.ee(b,c,d)>=0)break;}return h;}c=new Q;c.g_=1;c.ha=1;E(c);},
Wt=(a,b,c,d,e)=>{let f,g;if(!(d instanceof H)){a:{while(true){if(c<b){c=(-1);break a;}if(H7(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.iI;b:{c:{while(true){if(c<b)return (-1);g=Fo(d,a.kz,c);if(g<0)break c;if(g<b)break c;if(g>f){c=g-1|0;if(c<0)break b;if(c>=d.g9.length)break b;if((d.g9.charCodeAt(c)&64512)!=55296?0:1){c=g+(-2)|0;continue;}}if(a.hb.ee(g+1|0,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new Q;d.g_=1;d.ha=1;E(d);},
SG=(a,b)=>{if(b instanceof C_)return 0;if(b instanceof Dd)return 0;if(b instanceof CS)return 0;if(b instanceof Dq)return 0;if(b instanceof FZ)return 0;if(!(b instanceof FS))return 1;return b.kz!=a.kz?0:1;},
AHF=(a,b)=>{return 1;};
function FZ(){BU.call(this);this.ko=0;}
let UV=(a,b)=>{a.hb=b;},
Hw=(a,b,c,d)=>{let e,f,g;e=d.hD;f=b+1|0;e=B4(f,e);if(e>0){d.iE=1;return (-1);}if(b>=0&&b<c.g9.length){a:{g=c.g9.charCodeAt(b);if(e<0){if(f>=0&&f<c.g9.length){if(!((c.g9.charCodeAt(f)&64512)!=56320?0:1))break a;return (-1);}c=new Q;c.g_=1;c.ha=1;E(c);}}if(a.ko!=g)return (-1);return a.hb.ee(f,c,d);}c=new Q;c.g_=1;c.ha=1;E(c);},
AET=(a,b,c,d)=>{let e,f;if(!(c instanceof H)){e=d.hD;a:{while(true){if(b>e){b=(-1);break a;}if(Hw(a,b,c,d)>=0)break;b=b+1|0;}}return b;}e=d.hD;b:{while(true){if(b>=e)return (-1);f=FY(c,a.ko,b);if(f<0)return (-1);b=f+1|0;if(b<e){if(b<0)break b;if(b>=c.g9.length)break b;if((c.g9.charCodeAt(b)&64512)!=56320?0:1){b=f+2|0;continue;}}if(a.hb.ee(b,c,d)>=0)break;}return f;}c=new Q;c.g_=1;c.ha=1;E(c);},
AGq=(a,b,c,d,e)=>{let f,g;if(!(d instanceof H)){a:{while(true){if(c<b){c=(-1);break a;}if(Hw(a,c,d,e)>=0)break;c=c+(-1)|0;}}return c;}f=e.hD;b:{c:{while(true){if(c<b)return (-1);g=Fo(d,a.ko,c);if(g<0)break c;if(g<b)break c;c=g+1|0;if(c<f){if(c<0)break b;if(c>=d.g9.length)break b;if((d.g9.charCodeAt(c)&64512)!=56320?0:1){c=g+(-1)|0;continue;}}if(a.hb.ee(c,d,e)>=0)break;c=g+(-1)|0;}return g;}return (-1);}d=new Q;d.g_=1;d.ha=1;E(d);},
Wi=(a,b)=>{if(b instanceof C_)return 0;if(b instanceof Dd)return 0;if(b instanceof CS)return 0;if(b instanceof Dq)return 0;if(b instanceof FS)return 0;if(!(b instanceof FZ))return 1;return b.ko!=a.ko?0:1;},
AE2=(a,b)=>{return 1;};
function Dq(){let a=this;B2.call(a);a.ln=0;a.kU=0;a.kN=0;}
let AFV=(a,b,c)=>{let d,e;d=b+1|0;if(b>=0&&b<c.g9.length){e=c.g9.charCodeAt(b);if(d>=0&&d<c.g9.length){d=c.g9.charCodeAt(d);return a.ln==e&&a.kU==d?2:(-1);}c=new Q;c.g_=1;c.ha=1;E(c);}c=new Q;c.g_=1;c.ha=1;E(c);},
ADk=(a,b,c,d)=>{let e,f,g,h;if(c instanceof H){e=d.hD;a:{while(b<e){b=FY(c,a.ln,b);if(b<0)return (-1);b=b+1|0;if(b>=e)continue;if(b<0)break a;if(b>=c.g9.length)break a;f=c.g9.charCodeAt(b);if(a.kU==f&&a.hb.ee(b+1|0,c,d)>=0)return b+(-1)|0;b=b+1|0;}return (-1);}c=new Q;c.g_=1;c.ha=1;E(c);}g=d.hD;b:{c:{d:{while(true){if(b>g){b=(-1);break d;}if((b+a.hE|0)>d.hD){d.iE=1;h=(-1);}else{h=b+1|0;if(b<0)break b;if(b>=c.g9.length)break b;e=c.g9.charCodeAt(b);if(h<0)break c;if(h>=c.g9.length)break c;f=c.g9.charCodeAt(h);h
=a.ln==e&&a.kU==f?2:(-1);h=h<0?(-1):a.hb.ee(b+h|0,c,d);}if(h>=0)break;b=b+1|0;}}return b;}c=new Q;Y(c);E(c);}c=new Q;Y(c);E(c);},
UT=(a,b,c,d,e)=>{let f,g,h;if(d instanceof H){a:{b:{while(true){if(c<b)return (-1);c=Fo(d,a.kU,c)+(-1)|0;if(c<0)break b;if(c<b)break b;f=a.ln;if(c<0)break a;if(c>=d.g9.length)break a;if(f==d.g9.charCodeAt(c)&&a.hb.ee(c+2|0,d,e)>=0)break;c=c+(-1)|0;}return c;}return (-1);}d=new Q;d.g_=1;d.ha=1;E(d);}c:{d:{e:{while(true){if(c<b){c=(-1);break e;}if((c+a.hE|0)>e.hD){e.iE=1;f=(-1);}else{g=c+1|0;if(c<0)break c;if(c>=d.g9.length)break c;h=d.g9.charCodeAt(c);if(g<0)break d;if(g>=d.g9.length)break d;g=d.g9.charCodeAt(g);f
=a.ln==h&&a.kU==g?2:(-1);f=f<0?(-1):a.hb.ee(c+f|0,d,e);}if(f>=0)break;c=c+(-1)|0;}}return c;}d=new Q;Y(d);E(d);}d=new Q;Y(d);E(d);},
AFE=(a,b)=>{if(b instanceof Dq)return b.kN!=a.kN?0:1;if(b instanceof CS)return b.eM(a.kN);if(b instanceof C_)return 0;if(!(b instanceof Dd))return 1;return 0;};
let G5=D(FP);
let U6=(a,b)=>{return b!=10?0:1;},
AFL=(a,b,c)=>{return b!=10?0:1;};
let G6=D(FP);
let AGL=(a,b)=>{return b!=10&&b!=13&&b!=133&&(b|1)!=8233?0:1;},
AJp=(a,b,c)=>{a:{b:{if(b!=10&&b!=133&&(b|1)!=8233){if(b!=13)break b;if(c==10)break b;}b=1;break a;}b=0;}return b;};
function Pp(){let a=this;C.call(a);a.ov=null;a.m6=null;a.lw=0;a.qV=0;}
let AAb=(a,b)=>{let c,d;while(true){c=a.lw;if(b<c)break;a.lw=c<<1|1;}d=c<<1|1;a.lw=d;d=d+1|0;a.ov=S(d);a.m6=S(d);a.qV=b;},
OC=a=>{let b=new Pp();AAb(b,a);return b;},
Nl=(a,b,c)=>{let d,e,f,g;d=0;e=a.lw;f=b&e;while(true){g=a.ov.data;if(!g[f])break;if(g[f]==b)break;d=(d+1|0)&e;f=(f+d|0)&e;}g[f]=b;a.m6.data[f]=c;},
Od=(a,b)=>{let c,d,e,f;c=a.lw;d=b&c;e=0;while(true){f=a.ov.data[d];if(!f)break;if(f==b)return a.m6.data[d];e=(e+1|0)&c;d=(d+e|0)&c;}return a.qV;};
let GQ=D(Bh);
let Zv=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;return Ch(By(b,9,13),32);};
let Gu=D(Bh);
let ABS=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;return By(b,48,57);};
let Pa=D(Bh);
let AGd=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;return By(b,97,122);};
let PL=D(Bh);
let AHG=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;return By(b,65,90);};
let PP=D(Bh);
let W7=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;return By(b,0,127);};
let GM=D(Bh);
let Vt=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;return By(By(b,97,122),65,90);};
let G1=D(GM);
let XY=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;return By(By(By(b,97,122),65,90),48,57);};
let Rg=D(Bh);
let Y$=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;return By(By(By(b,33,64),91,96),123,126);};
let Ht=D(G1);
let RG=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;return By(By(By(By(By(By(b,97,122),65,90),48,57),33,64),91,96),123,126);};
let NB=D(Ht);
let ACy=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;return Ch(By(By(By(By(By(By(b,97,122),65,90),48,57),33,64),91,96),123,126),32);};
let NW=D(Bh);
let V_=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;return Ch(Ch(b,32),9);};
let Mf=D(Bh);
let ACr=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;return Ch(By(b,0,31),127);};
let L5=D(Bh);
let AJt=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;return By(By(By(b,48,57),97,102),65,70);};
let PT=D(Bh);
let ADw=a=>{let b,c;b=new Ok;b.r1=a;c=new Ba;c.hi=S(64);b.hl=c;b.hO=1;return b;};
let Rn=D(Bh);
let RP=a=>{let b,c;b=new KA;b.r4=a;c=new Ba;c.hi=S(64);b.hl=c;b.hO=1;return b;};
let Po=D(Bh);
let ZO=a=>{let b,c;b=new NQ;b.rP=a;c=new Ba;c.hi=S(64);b.hl=c;return b;};
let O5=D(Bh);
let AFY=a=>{let b,c;b=new NP;b.rH=a;c=new Ba;c.hi=S(64);b.hl=c;return b;};
let Qb=D(Bh);
let V8=a=>{let b,c;b=new QC;b.sl=a;c=new Ba;c.hi=S(64);b.hl=c;GB(c,0,2048);b.hO=1;return b;};
let Lc=D(Bh);
let WD=a=>{let b,c;b=new LV;b.r7=a;c=new Ba;c.hi=S(64);b.hl=c;b.hO=1;return b;};
let KT=D(Bh);
let AJi=a=>{let b,c;b=new Ll;b.sC=a;c=new Ba;c.hi=S(64);b.hl=c;b.hO=1;return b;};
let Pv=D(Bh);
let RD=a=>{let b,c;b=new M4;b.r2=a;c=new Ba;c.hi=S(64);b.hl=c;return b;};
let PD=D(Bh);
let AA9=a=>{let b,c;b=new Kw;b.q3=a;c=new Ba;c.hi=S(64);b.hl=c;b.hO=1;return b;};
let Mz=D(Bh);
let WQ=a=>{let b,c;b=new Kz;b.r9=a;c=new Ba;c.hi=S(64);b.hl=c;b.hO=1;return b;};
let N1=D(Bh);
let Ys=a=>{let b,c;b=new Lg;b.sk=a;c=new Ba;c.hi=S(64);b.hl=c;b.hO=1;return b;};
let Q1=D(Bh);
let ABb=a=>{let b,c;b=new L$;b.sv=a;c=new Ba;c.hi=S(64);b.hl=c;b.hO=1;return b;};
let PB=D(Bh);
let AH4=a=>{let b,c;b=new Mc;b.rQ=a;c=new Ba;c.hi=S(64);b.hl=c;return b;};
let M8=D(Bh);
let AE$=a=>{let b,c;b=new OH;b.r_=a;c=new Ba;c.hi=S(64);b.hl=c;return b;};
let My=D(Bh);
let ADm=a=>{let b,c;b=new N9;b.q6=a;c=new Ba;c.hi=S(64);b.hl=c;b.hO=1;return b;};
let Rj=D(Bh);
let AF8=a=>{let b,c;b=new KK;b.sK=a;c=new Ba;c.hi=S(64);b.hl=c;b.hO=1;return b;};
let Gf=D(Bh);
let ABy=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;return Ch(By(By(By(b,97,122),65,90),48,57),95);};
let Qf=D(Gf);
let ACZ=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;b=DH(Ch(By(By(By(b,97,122),65,90),48,57),95),1);b.hO=1;return b;};
let NE=D(GQ);
let T9=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;b=DH(Ch(By(b,9,13),32),1);b.hO=1;return b;};
let Mu=D(Gu);
let Y0=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;b=DH(By(b,48,57),1);b.hO=1;return b;};
function Bg(){let a=this;Bh.call(a);a.hq=0;a.hr=0;}
let AJg=(a,b,c)=>{a.hq=b;a.hr=c;},
Bo=(a,b)=>{let c=new Bg();AJg(c,a,b);return c;},
ABD=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;return By(b,a.hq,a.hr);};
let Mq=D(Bh);
let AI7=a=>{let b,c;b=new B7;c=new Ba;c.hi=S(64);b.hl=c;c=new Ba;c.hi=S(2);b.hp=c;return By(By(b,65279,65279),65520,65533);};
function II(){let a=this;Bh.call(a);a.oj=0;a.m0=0;a.o$=0;}
let VC=(a,b,c)=>{a.m0=c;a.oj=b;},
BQ=(a,b)=>{let c=new II();VC(c,a,b);return c;},
AJh=(a,b,c,d)=>{a.o$=d;a.m0=c;a.oj=b;},
ABv=(a,b,c)=>{let d=new II();AJh(d,a,b,c);return d;},
XI=a=>{let b,c,d;b=new Hk;c=a.oj;d=new Ba;d.hi=S(64);b.hl=d;b.mD=c;if(a.o$)GB(d,0,2048);b.hO=a.m0;return b;};
function IO(){let a=this;Bh.call(a);a.oh=0;a.m8=0;a.oR=0;}
let WR=(a,b,c)=>{a.m8=c;a.oh=b;},
E9=(a,b)=>{let c=new IO();WR(c,a,b);return c;},
RF=(a,b,c,d)=>{a.oR=d;a.m8=c;a.oh=b;},
ZM=(a,b,c)=>{let d=new IO();RF(d,a,b,c);return d;},
RE=a=>{let b,c,d;b=new NI;c=a.oh;d=new Ba;d.hi=S(64);b.hl=d;b.mD=c;if(a.oR)GB(d,0,2048);b.hO=a.m8;return b;};
let DK=D(BA);
let S8=D();
let Wj=D();
let UP=D();
let AJE=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=new JC;d=G(b.g9.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.nn=d;f=EC(c);d=S(f*2|0);e=d.data;h=0;i=0;j=0;k=0;while(k<f){l=EC(c);m=l/2|0;if(l%2|0)m= -m|0;i=i+m|0;l=EC(c);g=l/2|0;if(l%2|0)g= -g|0;j=j+g|0;g=h+1|0;e[h]=i;h=g+1|0;e[g]=j;k=k+1|0;}return d;}if(f<0)break;if(f>=b.g9.length)break;e[f]=b.g9.charCodeAt(f);f=f+1|0;}b=new Q;b.g_=1;b.ha=1;E(b);},
B3=b=>{let c,d,e,f,g,h,i,j,k,l;c=new JC;d=G(b.g9.length);e=d.data;f=0;g=e.length;while(true){if(f>=g){c.nn=d;f=EC(c);d=S(f*2|0);e=d.data;h=0;i=0;while(i<f){h=h+EC(c)|0;g=i*2|0;e[g]=h;j=g+1|0;k=EC(c);l=k/2|0;if(k%2|0)l= -l|0;e[j]=l;i=i+1|0;}return d;}if(f<0)break;if(f>=b.g9.length)break;e[f]=b.g9.charCodeAt(f);f=f+1|0;}b=new Q;b.g_=1;b.ha=1;E(b);},
BZ=b=>{let c,d,e,f,g,h,i,j,k,l,m;c=S(65536);d=c.data;e=0;f=0;g=0;a:{while(true){h=b.data;if(g>=h.length)break a;i=h[g];j=h[g+1|0];k=d.length;if(i<k)k=i;else if(i==e)break;if(e>k){l=new Bs;l.g_=1;l.ha=1;E(l);}while(e<k){m=e+1|0;d[e]=f;e=m;}g=g+2|0;e=k;f=j;}}l=new PW;l.pK=b;l.pU=c;return l;},
GH=b=>{if(b>92)return ((b-32|0)-2|0)<<24>>24;if(b<=34)return (b-32|0)<<24>>24;return ((b-32|0)-1|0)<<24>>24;},
AKT=b=>{let c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t;c=R(Ge,16384);d=c.data;e=BF(16384).data;f=0;g=0;h=0;i=0;a:{b:{c:{while(true){if(i>=b.g9.length){j=c.constructor;if(j===null)b=null;else{b=j.classObject;if(b===null){b=new Ca;b.hH=j;k=b;j.classObject=k;}}b=DS(b);if(b===null){b=new CU;b.g_=1;b.ha=1;E(b);}if(b===Bk(CQ)){b=new Bs;b.g_=1;b.ha=1;E(b);}if(g<0){b=new DK;b.g_=1;b.ha=1;E(b);}k=D4(b.hH,g);f=d.length;if(g<f)f=g;g=0;while(g<f){k.data[g]=d[g];g=g+1|0;}return k;}if(i<0)break c;if(i>=b.g9.length)break c;l=GH(b.g9.charCodeAt(i));if
(l==64){i=i+1|0;if(i<0)break b;if(i>=b.g9.length)break b;l=GH(b.g9.charCodeAt(i));m=0;n=1;o=0;while(o<3){i=i+1|0;if(i<0)break a;if(i>=b.g9.length)break a;m=m|CB(n,GH(b.g9.charCodeAt(i)));n=n*64|0;o=o+1|0;}}else if(l<32)m=1;else{l=(l-32|0)<<24>>24;i=i+1|0;if(i<0)break;if(i>=b.g9.length)break;m=GH(b.g9.charCodeAt(i));}if(!l&&m>=128){if(f>0){p=g+1|0;j=new Ge;l=h+f|0;q=BF(f);o=e.length;if(f<o)o=f;r=q.data;s=0;while(s<o){r[s]=e[s];s=s+1|0;}j.nz=h;j.nY=l;j.nC=q;d[g]=j;g=p;}h=h+(f+m|0)|0;f=0;}else{n=f+m|0;o=e.length;if
(n<o)s=g;else{s=g+1|0;j=new Ge;t=h+f|0;q=BF(f);if(f<o)o=f;r=q.data;f=0;while(f<o){r[f]=e[f];f=f+1|0;}j.nz=h;j.nY=t;j.nC=q;d[g]=j;h=h+n|0;f=0;}while(true){g=m+(-1)|0;if(m<=0)break;p=f+1|0;e[f]=l;f=p;m=g;}g=s;}i=i+1|0;}b=new Q;b.g_=1;b.ha=1;E(b);}b=new Q;b.g_=1;b.ha=1;E(b);}b=new Q;b.g_=1;b.ha=1;E(b);}b=new Q;b.g_=1;b.ha=1;E(b);};
function PW(){let a=this;C.call(a);a.pK=null;a.pU=null;}
function Ge(){let a=this;C.call(a);a.nz=0;a.nY=0;a.nC=null;}
function JC(){let a=this;C.call(a);a.nn=null;a.pz=0;}
let Y5=D();
let EC=b=>{let c,d,e,f,g;c=0;d=1;while(true){e=b.nn.data;f=b.pz;b.pz=f+1|0;g=e[f];g=g<34?g-32|0:g>=92?(g-32|0)-2|0:(g-32|0)-1|0;f=(g%2|0)!=1?0:1;c=c+CB(d,g/2|0)|0;d=d*46|0;if(!f)break;}return c;};
let AGe=D();
function MI(){let a=this;CM.call(a);a.o3=null;a.o2=0;a.lo=null;}
let AHe=(a,b)=>{return;},
WT=(a,b)=>{let c,d,e,f,g,h;if(BH===null){b=new Ck;c=new B5;c.h$=BF(32);b.ik=c;c=new K;BB(c);c.g$=G(16);b.ia=c;b.h_=G(32);b.ie=0;b.ig=BX;BH=b;}b=a.o3;c=new K;c.g$=G(16);F(c,c.g8,A(349));d=c.g8;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.g$;f=e.data;g=c.g8;h=f.length;if(g>=0&&g<=(h-0|0)){b.g9=L(e.data,0,g);BI(Br(b));BI("\n");return;}b=new I;b.g_=1;b.ha=1;Bl(b);E(b);},
Th=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o;d=(HM(Gx(A(91),0),c,0)).data;e=d.length;f=0;while(true){if(f>=e){a:{b=a.lo;b.nO=b.md.h4;if(a.o2){e=0;while(true){b=a.lo;c=b.md;f=B4(e,c.h4);if(f>=0)break a;if(f>=0){g=new I;b=new K;b.g$=G(16);F(b,b.g8,A(76));J(b,b.g8,e,10);F(b,b.g8,A(77));e=c.h4;J(b,b.g8,e,10);c=new H;d=b.g$;h=d.data;f=b.g8;i=h.length;if(f>=0&&f<=(i-0|0)){c.g9=L(d.data,0,f);g.g_=1;g.ha=1;g.hc=c;E(g);}b=new I;Y(b);E(b);}Zp(b,c.hX.data[e]);e=e+1|0;}}}return 0;}j=d[f];h=(HM(Gx(A(89),0),j,0)).data;if(h.length
!=4)break;k=h[0];l=AAV(h[1]);b=h[2];if(b===null){b=new B0;b.g_=1;b.ha=1;b.hc=A(52);E(b);}m=AHz(b,0,b.g9.length,10);n=h[3];o=Eq;if(k===A(350))i=1;else if(!(A(350) instanceof H))i=0;else{b=A(350);i=k.g9!==b.g9?0:1;}if(i)o=Ej;if(k===A(351))i=1;else if(!(A(351) instanceof H))i=0;else{b=A(351);i=k.g9!==b.g9?0:1;}if(i)o=Ea;if(k===A(352))i=1;else if(!(A(352) instanceof H))i=0;else{b=A(352);i=k.g9!==b.g9?0:1;}if(i)o=D6;if(k===A(189))i=1;else if(!(A(189) instanceof H))i=0;else{b=A(189);i=k.g9!==b.g9?0:1;}if(i)o=Hi;if
(o===D6&&!ET.qu)m=BM;g=new Oa;g.nF=l;g.pe=o;g.qJ=m;g.o6=n;DE(a.lo.po,l,l);Di(a.lo.md,g);f=f+1|0;}b=new Bf;b.g_=1;b.ha=1;b.hc=A(353);E(b);},
ADa=(a,b,c)=>{return Th(a,b,c);};
let B8=D(BR);
let U7=null,ADD=null,V5=null,V4=null,U_=null,US=null,Uq=null,VU=null,T$=null,AAF=null;
let Gp=()=>{Gp=Bz(B8);SY();};
let SY=()=>{let b,c,d,e,f,g,h,i,j;b=new P6;Gp();b.hx=A(354);b.hm=0;U7=b;c=new P7;c.hx=A(355);c.hm=1;ADD=c;d=new P_;d.hx=A(356);d.hm=2;V5=d;e=new Qa;e.hx=A(357);e.hm=3;V4=e;f=new P9;f.hx=A(358);f.hm=4;U_=f;g=new P$;g.hx=A(359);g.hm=5;US=g;h=new P4;h.hx=A(360);h.hm=6;Uq=h;i=new P5;i.hx=A(361);i.hm=7;VU=i;j=new P3;j.hx=A(362);j.hm=8;T$=j;AAF=P(B8,[b,c,d,e,f,g,h,i,j]);};
function Ep(){let a=this;FM.call(a);a.lM=0;a.j9=null;}
let AKe=D(0);
let Uy=b=>{let c,d;if(b===A(363))c=1;else if(!(A(363) instanceof H))c=0;else{d=A(363);c=b.g9!==d.g9?0:1;}a:{if(!c){if(b===A(364))c=1;else if(!(A(364) instanceof H))c=0;else{d=A(364);c=b.g9!==d.g9?0:1;}if(!c){if(b===A(365))c=1;else if(!(A(365) instanceof H))c=0;else{d=A(365);c=b.g9!==d.g9?0:1;}if(!c){if(b===A(366))c=1;else if(!(A(366) instanceof H))c=0;else{d=A(366);c=b.g9!==d.g9?0:1;}if(!c){if(b===A(367))c=1;else if(!(A(367) instanceof H))c=0;else{d=A(367);c=b.g9!==d.g9?0:1;}if(!c){c=0;break a;}}}}}c=1;}return c;},
Zy=b=>{let c,d;if(b===A(368))c=1;else if(!(A(368) instanceof H))c=0;else{d=A(368);c=b.g9!==d.g9?0:1;}a:{b:{if(c)break b;if(b===A(369))c=1;else if(!(A(369) instanceof H))c=0;else{d=A(369);c=b.g9!==d.g9?0:1;}if(c)break b;if(b===A(370))c=1;else if(!(A(370) instanceof H))c=0;else{d=A(370);c=b.g9!==d.g9?0:1;}if(c)break b;if(b===A(371))c=1;else if(!(A(371) instanceof H))c=0;else{d=A(371);c=b.g9!==d.g9?0:1;}if(c)break b;if(b===A(372))c=1;else if(!(A(372) instanceof H))c=0;else{d=A(372);c=b.g9!==d.g9?0:1;}if(c)break b;if
(b===A(373))c=1;else if(!(A(373) instanceof H))c=0;else{d=A(373);c=b.g9!==d.g9?0:1;}if(c)break b;if(b===A(374))c=1;else if(!(A(374) instanceof H))c=0;else{d=A(374);c=b.g9!==d.g9?0:1;}if(c)break b;if(b===A(375))c=1;else if(!(A(375) instanceof H))c=0;else{d=A(375);c=b.g9!==d.g9?0:1;}if(c)break b;if(b===A(376))c=1;else if(!(A(376) instanceof H))c=0;else{d=A(376);c=b.g9!==d.g9?0:1;}if(!c){c=0;break a;}}c=1;}return c;};
let Pc=D(0);
let Mn=D();
let AJb=(a,b,c)=>{a.fe(V(b),CC(c,"handleEvent"));},
ADI=(a,b)=>{return !!a.ff(b);},
UW=(a,b,c)=>{a.fg(V(b),CC(c,"handleEvent"));},
AAB=(a,b,c,d)=>{a.fh(V(b),CC(c,"handleEvent"),d?1:0);},
AGQ=(a,b,c,d)=>{a.fi(V(b),CC(c,"handleEvent"),d?1:0);};
function Ji(){let a=this;C.call(a);a.ny=null;a.oz=null;a.ma=null;a.oE=0;a.mK=null;}
let ADT=(a,b)=>{let c,d,e;c=b.target;d=null;e=a.ny;if(e!==Ea&&e!==D6){if(e===Ej){b=window.document.createElement("img");d=Br(V(c.result));b.src=d;e=c.result;c=new Int8Array(e);d=new Gd;d.jm=c;d.n7=e;d.qg=b;}else if(e===Eq)d=V(c.result);}else{e=c.result;b=new Int8Array(e);d=new Gd;d.jm=b;d.n7=e;}if(d!==null){Fg(a.mK.o9,a.ny,a.oz,d);Di(a.ma,a.oz);if(a.ma.h4==a.oE){b=a.mK.oW;d=new KM;d.nV=a;Di(b.lU,d);}}},
AB8=(a,b)=>{ADT(a,b);};
function Eb(){BR.call(this);this.lQ=null;}
let Ej=null,D6=null,Eq=null,Ea=null,Hi=null,J_=null;
let AD0=()=>{let b,c,d,e,f;b=new Eb;b.hx=A(377);b.hm=0;b.lQ=A(350);Ej=b;c=new Eb;c.hx=A(378);c.hm=1;c.lQ=A(352);D6=c;d=new Eb;d.hx=A(379);d.hm=2;d.lQ=A(380);Eq=d;e=new Eb;e.hx=A(381);e.hm=3;e.lQ=A(351);Ea=e;f=new Eb;f.hx=A(382);f.hm=4;f.lQ=A(189);Hi=f;J_=P(Eb,[b,c,d,e,f]);};
let ZK=D();
let Un=null;
let SU=()=>{Un=Gk([1,4,2,1024,8,16,128,64,32,256,2048,512]);};
let Nv=D(0);
function FN(){let a=this;Js.call(a);a.rO=null;a.rM=null;a.n_=0;a.nI=0;a.n3=null;a.sm=null;}
let Q=D(I);
function Ql(){let a=this;Bc.call(a);a.oY=null;a.sp=null;}
let Xc=(a,b)=>{let c;c=b-55296|0;return c>=0&&c<2048?a.is^B6(a.oY,c):0;};
function Qk(){let a=this;Bc.call(a);a.qw=null;a.qK=null;a.sc=null;}
let Sn=(a,b)=>{let c,d;c=b-55296|0;d=c>=0&&c<2048?a.is^B6(a.qw,c):0;return a.qK.eM(b)&&!d?1:0;};
function LA(){let a=this;Bc.call(a);a.mg=null;a.q$=null;}
let ABk=(a,b)=>{return a.hz^B6(a.mg,b);},
YF=a=>{let b,c,d,e,f,g,h,i,j,k;b=new K;b.g$=G(16);c=F$(a.mg,0);while(c>=0){d=(EN(c)).data;e=0;f=d.length;g=b.g8;Bn(b,g,g+f|0);f=f+e|0;while(e<f){h=b.g$.data;i=g+1|0;j=e+1|0;h[g]=d[e];g=i;e=j;}g=b.g8;Bn(b,g,g+1|0);b.g$.data[g]=124;c=F$(a.mg,c+1|0);}e=b.g8;if(e>0)Qu(b,e-1|0);k=new H;d=b.g$;h=d.data;e=b.g8;g=h.length;if(e>=0&&e<=(g-0|0)){k.g9=L(d.data,0,e);return k;}b=new I;b.g_=1;b.ha=1;Bl(b);E(b);};
function LG(){let a=this;Bc.call(a);a.pE=null;a.r3=null;}
let AFW=(a,b)=>{return a.pE.eM(b);};
function LE(){let a=this;Bc.call(a);a.m2=0;a.o7=null;a.nD=null;}
let AGu=(a,b)=>{return !(a.m2^B6(a.nD.hp,b))&&!(a.m2^a.nD.jn^a.o7.eM(b))?0:1;};
function LF(){let a=this;Bc.call(a);a.m7=0;a.qB=null;a.ob=null;}
let ABZ=(a,b)=>{return !(a.m7^B6(a.ob.hp,b))&&!(a.m7^a.ob.jn^a.qB.eM(b))?1:0;};
function LK(){let a=this;Bc.call(a);a.qQ=0;a.qF=null;a.qz=null;a.rp=null;}
let WH=(a,b)=>{return a.qQ^(!a.qF.eM(b)&&!a.qz.eM(b)?0:1);};
function LL(){let a=this;Bc.call(a);a.pH=0;a.pC=null;a.pu=null;a.sH=null;}
let Rs=(a,b)=>{return a.pH^(!a.pC.eM(b)&&!a.pu.eM(b)?0:1)?0:1;};
function LI(){let a=this;Bc.call(a);a.pq=null;a.sJ=null;}
let YP=(a,b)=>{let c,d;c=a.pq;d=c.hP;return d!==null?c.hz^d.eM(b):c.hz^B6(c.hp,b);};
function LJ(){let a=this;Bc.call(a);a.qI=null;a.rD=null;}
let AB1=(a,b)=>{let c,d;c=a.qI;d=c.hP;return (d!==null?c.hz^d.eM(b):c.hz^B6(c.hp,b))?0:1;};
function LM(){let a=this;Bc.call(a);a.pQ=null;a.pD=0;a.qn=null;}
let AIa=(a,b)=>{let c,d,e;c=a.pQ;d=c.hP;e=d!==null?c.hz^d.eM(b):c.hz^B6(c.hp,b);return !e&&!(a.pD^B6(a.qn.hp,b))?0:1;};
function LN(){let a=this;Bc.call(a);a.p4=null;a.qb=0;a.pW=null;}
let VS=(a,b)=>{let c,d,e;c=a.p4;d=c.hP;e=d!==null?c.hz^d.eM(b):c.hz^B6(c.hp,b);return !e&&!(a.qb^B6(a.pW.hp,b))?1:0;};
function Lz(){let a=this;Bc.call(a);a.ql=0;a.qA=null;a.qM=null;a.rd=null;}
let AKW=(a,b)=>{let c,d;a:{if(!(a.ql^a.qA.eM(b))){c=a.qM;d=c.hP;if(!(d!==null?c.hz^d.eM(b):c.hz^B6(c.hp,b))){b=0;break a;}}b=1;}return b;};
function L1(){let a=this;Bc.call(a);a.qL=0;a.oN=null;a.oS=null;a.rz=null;}
let YW=(a,b)=>{let c,d;a:{if(!(a.qL^a.oN.eM(b))){c=a.oS;d=c.hP;if(!(d!==null?c.hz^d.eM(b):c.hz^B6(c.hp,b))){b=1;break a;}}b=0;}return b;};
function Lx(){let a=this;Bc.call(a);a.pj=null;a.rG=null;}
let VP=(a,b)=>{let c,d;c=a.pj;d=c.hP;return d!==null?c.hz^d.eM(b):c.hz^B6(c.hp,b);};
function Ly(){let a=this;Bc.call(a);a.pk=null;a.sE=null;}
let X1=(a,b)=>{let c,d;c=a.pk;d=c.hP;return (d!==null?c.hz^d.eM(b):c.hz^B6(c.hp,b))?0:1;};
function LD(){let a=this;Bc.call(a);a.qO=null;a.p1=0;a.q0=null;}
let AAj=(a,b)=>{let c,d,e;c=a.qO;d=c.hP;e=d!==null?c.hz^d.eM(b):c.hz^B6(c.hp,b);return e&&a.p1^B6(a.q0.hp,b)?1:0;};
function Lw(){let a=this;Bc.call(a);a.qh=null;a.pI=0;a.p0=null;}
let AHO=(a,b)=>{let c,d,e;c=a.qh;d=c.hP;e=d!==null?c.hz^d.eM(b):c.hz^B6(c.hp,b);return e&&a.pI^B6(a.p0.hp,b)?0:1;};
function LB(){let a=this;Bc.call(a);a.qo=0;a.oX=null;a.pG=null;a.ro=null;}
let Us=(a,b)=>{let c,d;a:{if(a.qo^a.oX.eM(b)){c=a.pG;d=c.hP;if(d!==null?c.hz^d.eM(b):c.hz^B6(c.hp,b)){b=1;break a;}}b=0;}return b;};
function LC(){let a=this;Bc.call(a);a.qc=0;a.oI=null;a.qk=null;a.rJ=null;}
let AEZ=(a,b)=>{let c,d;a:{if(a.qc^a.oI.eM(b)){c=a.qk;d=c.hP;if(d!==null?c.hz^d.eM(b):c.hz^B6(c.hp,b)){b=0;break a;}}b=1;}return b;};
function Gq(){let a=this;C.call(a);a.j0=null;a.oa=null;a.il=null;a.iJ=0;}
function EV(){let a=this;C.call(a);a.sI=null;a.jr=BM;a.j5=BM;a.iP=null;a.pf=null;a.jd=null;a.iN=0;a.jt=null;}
let GJ=null,BE=null,B9=0,Dn=0,Nw=null;
let ABj=a=>{let b,c,$$je;a:{b:{c:{d:{try{Dn=Dn+1|0;AE_(a);a.bg();}catch($$e){$$je=BP($$e);if($$je instanceof CT){b=$$je;break d;}else{b=$$je;break c;}}b=a.iP;Er(b);e:{try{J8(b);CO(b);break e;}catch($$e){$$je=BP($$e);c=$$je;}CO(b);E(c);}a.iN=0;Dn=Dn-1|0;b=GJ;if(BE!==b)BE=b;BE.j5=CZ();break a;}try{Tq(Zc(a),a,b);break b;}catch($$e){$$je=BP($$e);b=$$je;}}c=a.iP;Er(c);f:{try{J8(c);CO(c);break f;}catch($$e){$$je=BP($$e);b=$$je;}CO(c);E(b);}a.iN=0;Dn=Dn-1|0;c=GJ;if(BE!==c)BE=c;BE.j5=CZ();E(b);}b=a.iP;Er(b);g:{try{J8(b);CO(b);break g;}
catch($$e){$$je=BP($$e);c=$$je;}CO(b);E(c);}a.iN=0;Dn=Dn-1|0;b=GJ;if(BE!==b)BE=b;BE.j5=CZ();}},
AE_=b=>{if(BE!==b)BE=b;BE.j5=CZ();},
AKY=()=>{return BE;},
Id=b=>{let $p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();b=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AH5(b);if(Ee()){break _;}return;default:D9();}}Cq().s(b,$p);},
WE=(b,c)=>{let d,e;d=BE;e=new Lm;e.q1=d;e.qy=c;e.sq=JJ(e,ALh(b,O(2147483647))?2147483647:Bd(b));d.pf=e;},
Zc=a=>{let b;b=a.sI;if(b!==null)return b;return Nw;},
T3=()=>{let b,c,d;b=new EV;c=null;b.iP=new C;b.iN=1;b.jd=A(383);b.jt=c;d=B9;B9=d+1|0;b.jr=O(d);GJ=b;BE=b;B9=1;Dn=1;Nw=new NR;},
AH5=b=>{let thread=Cq();let javaThread=RR();if(thread.isResuming()){thread.status=0;let result=thread.attribute;if(result instanceof Error){throw result;}return result;}let callback=function(){};callback.e=val=>{thread.attribute=val;Hu(javaThread);thread.resume();};callback.fp=e=>{thread.attribute=AHv(e);Hu(javaThread);thread.resume();};callback=NV(callback);thread.suspend(()=>{try {WE(b,callback);;}catch(Kh){callback.fp(Kh);}});return null;};
let CV=D(BA);
let GA=D(BA);
let AFZ=D();
let NS=b=>{a:{switch(b){case 8:break;case 9:return 61;case 10:case 11:case 12:case 14:case 15:case 21:case 22:case 23:case 24:case 25:case 26:case 28:case 29:case 30:case 31:case 41:case 42:case 43:case 44:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 93:case 94:case 95:case 108:case 124:case 125:case 126:case 127:case 128:case 129:case 130:case 131:case 132:case 133:case 134:case 135:case 136:case 137:case 138:case 139:case 140:case 141:case 142:case 143:case 146:case 147:case 148:case 149:case 150:case 151:case 152:case 153:case 154:case 155:case 156:case 157:case 158:case 159:case 160:case 161:case 162:case 163:case 164:case 165:case 166:case 167:case 168:case 169:case 170:case 171:case 172:case 173:case 174:case 175:case 176:case 177:case 178:case 179:case 180:case 181:case 182:case 183:case 184:case 185:case 193:case 194:case 195:case 196:case 197:case 198:case 199:case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 207:case 208:case 209:case 210:case 211:case 212:case 213:case 214:case 215:case 216:case 217:case 218:break a;case 13:return 66;case 16:return 59;case 17:return 129;case 18:return 57;case 19:return 0;case 20:return 0;case 27:return 111;case 32:return 62;case 33:return 92;case 34:return 93;case 35:return 123;case 36:return 3;case 37:return 21;case 38:return 19;case 39:return 22;case 40:return 20;case 45:return 124;case 46:return 112;case 48:return 7;case 49:return 8;case 50:return 9;case 51:return 10;case 52:return 11;case 53:return 12;case 54:return 13;case 55:return 14;case 56:return 15;case 57:return 16;case 65:return 29;case 66:return 30;case 67:return 31;case 68:return 32;case 69:return 33;case 70:return 34;case 71:return 35;case 72:return 36;case 73:return 37;case 74:return 38;case 75:return 39;case 76:return 40;case 77:return 41;case 78:return 42;case 79:return 43;case 80:return 44;case 81:return 45;case 82:return 46;case 83:return 47;case 84:return 48;case 85:return 49;case 86:return 50;case 87:return 51;case 88:return 52;case 89:return 53;case 90:return 54;case 91:return 0;case 92:return 0;case 96:return 144;case 97:return 145;case 98:return 146;case 99:return 147;case 100:return 148;case 101:return 149;case 102:return 150;case 103:return 151;case 104:return 152;case 105:return 153;case 106:return 0;case 107:return 81;case 109:return 69;case 110:return 56;case 111:return 0;case 112:return 131;case 113:return 132;case 114:return 133;case 115:return 134;case 116:return 135;case 117:return 136;case 118:return 137;case 119:return 138;case 120:return 139;case 121:return 140;case 122:return 141;case 123:return 142;case 144:return 78;case 145:return 0;case 186:return 74;case 187:return 70;case 188:return 55;case 189:return 69;case 190:return 56;case 191:return 76;case 192:return 0;case 219:return 71;case 220:return 73;case 221:return 72;case 222:return 75;default:break a;}return 67;}return 0;};
let X6=D();
let SF=D();
let ED=D(0);
function Q8(){C.call(this);this.pv=null;}
let AIc=a=>{AGN(a.pv);};
let P6=D(B8);
let P7=D(B8);
let P_=D(B8);
let Qa=D(B8);
let P9=D(B8);
let P$=D(B8);
let P4=D(B8);
let P5=D(B8);
let P3=D(B8);
let KY=D(0);
let NR=D();
let Tq=(a,b,c)=>{let d;if(Ct===null){b=new Eo;d=new B5;d.h$=BF(32);BB(b);b.ik=d;d=new K;Dp(d,16);b.ia=d;b.h_=G(32);b.ie=0;b.ig=BX;Ct=b;}Hq(c,Ct);};
let MS=D();
let Nu=D(0);
function Nd(){C.call(this);this.kG=null;}
let NV=b=>{let c;c=new Nd;c.kG=b;return c;},
AAG=(a,b)=>{a.kG.e(b);},
AJM=(a,b)=>{a.kG.fp(b);};
function Oj(){let a=this;C.call(a);a.pc=null;a.pd=null;a.pa=0;a.pb=null;}
let KV=D(EP);
let XM=(a,b,c,d)=>{let e,f,g,h,i,j;e=0;f=d.hD;a:{while(true){if(b>f){b=e;break a;}g=a.hV;h=d.id.data;i=g*2|0;j=h[i];h[i]=b;e=a.iL.ee(b,c,d);if(e>=0)break;i=a.hV;d.id.data[i*2|0]=j;b=b+1|0;}}return b;},
AKH=(a,b,c,d,e)=>{let f,g,h,i,j;f=0;a:{while(true){if(c<b){c=f;break a;}g=a.hV;h=e.id.data;i=g*2|0;j=h[i];h[i]=c;f=a.iL.ee(c,d,e);if(f>=0)break;i=a.hV;e.id.data[i*2|0]=j;c=c+(-1)|0;}}return c;},
Vx=a=>{return null;};
function Ok(){Bc.call(this);this.r1=null;}
let AIy=(a,b)=>{return B$(b)!=2?0:1;};
function KA(){Bc.call(this);this.r4=null;}
let T2=(a,b)=>{return B$(b)!=1?0:1;};
function NQ(){Bc.call(this);this.rP=null;}
let Tr=(a,b)=>{a:{switch(b){case 9:case 10:case 11:case 12:case 13:case 28:case 29:case 30:case 31:break;case 160:case 8199:case 8239:b=0;break a;default:b:{switch(B$(b)){case 12:case 13:case 14:break;default:b=0;break b;}b=1;}break a;}b=1;}return b;};
function NP(){Bc.call(this);this.rH=null;}
let XF=(a,b)=>{return 0;};
function QC(){Bc.call(this);this.sl=null;}
let ZZ=(a,b)=>{return !B$(b)?0:1;};
function LV(){Bc.call(this);this.r7=null;}
let AIA=(a,b)=>{return B$(b)!=9?0:1;};
function Ll(){Bc.call(this);this.sC=null;}
let AEi=(a,b)=>{return FG(b);};
function M4(){Bc.call(this);this.r2=null;}
let AF4=(a,b)=>{a:{b:{if(!(b>=0&&b<=31)){if(b<127)break b;if(b>159)break b;}b=1;break a;}b=0;}return b;};
function Kw(){Bc.call(this);this.q3=null;}
let AKd=(a,b)=>{a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:case 26:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FG(b);}return b;};
function Kz(){Bc.call(this);this.r9=null;}
let Wq=(a,b)=>{a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 10:case 23:case 26:break;case 6:case 7:case 8:case 9:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:case 24:case 25:break b;default:break b;}b=1;break a;}b=FG(b);}return b;};
function Lg(){Bc.call(this);this.sk=null;}
let AI1=(a,b)=>{a:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:break;default:b=0;break a;}b=1;}return b;};
function L$(){Bc.call(this);this.sv=null;}
let ACn=(a,b)=>{a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 9:break;case 6:case 7:case 8:break b;default:break b;}b=1;break a;}b=0;}return b;};
function Mc(){Bc.call(this);this.rQ=null;}
let AFr=(a,b)=>{a:{switch(B$(b)){case 12:case 13:case 14:break;default:b=0;break a;}b=1;}return b;};
function OH(){Bc.call(this);this.r_=null;}
let AIb=(a,b)=>{return B$(b)!=3?0:1;};
function N9(){Bc.call(this);this.q6=null;}
let AJJ=(a,b)=>{a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 6:case 8:case 9:case 10:case 23:break;case 7:case 11:case 12:case 13:case 14:case 15:case 16:case 17:case 18:case 19:case 20:case 21:case 22:break b;default:break b;}b=1;break a;}b=FG(b);}return b;};
function KK(){Bc.call(this);this.sK=null;}
let V$=(a,b)=>{a:{b:{switch(B$(b)){case 1:case 2:case 3:case 4:case 5:case 10:break;case 6:case 7:case 8:case 9:break b;default:break b;}b=1;break a;}b=FG(b);}return b;};
function Hk(){Bc.call(this);this.mD=0;}
let AEm=(a,b)=>{return a.hz^(a.mD!=B$(b&65535)?0:1);};
let NI=D(Hk);
let AG4=(a,b)=>{return a.hz^(!(a.mD>>B$(b&65535)&1)?0:1);};
function Tt(){let a=this;C.call(a);a.sO=0;a.sP=0;a.sM=0;a.sN=0;a.sL=null;}
function Fh(){let a=this;EV.call(a);a.kj=0;a.jg=null;a.ju=null;a.jl=null;}
let AEw=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new JA;c.jz=a;c.k4=b;c=BL(c,"handleEvent");b.onreadystatechange=c;c=a.jl;d=a.ju;e=new Fi;e.on=c;e.mb=d;c=BL(e,"handleEvent");b.onprogress=c;d=a.jg;f=a.kj;b.open("GET",Br(d),!!f);b.setRequestHeader("Content-Type","text/plain; charset=utf-8");b.send();};
let KL=D();
let Pd=null;
let Jf=()=>{Jf=Bz(KL);AGo();};
let AGo=()=>{let b,c;b=S((P0.p()).data.length);c=b.data;Pd=b;c[J3.hm]=1;c[GN.hm]=2;};
let Qh=D();
let ABw=(a,b,c)=>{a.dj(V(b),CC(c,"handleEvent"));},
ACq=(a,b,c)=>{a.dk(V(b),CC(c,"handleEvent"));},
R3=(a,b,c,d)=>{a.dl(V(b),CC(c,"handleEvent"),d?1:0);},
Se=(a,b)=>{return !!a.dm(b);},
YS=(a,b,c,d)=>{a.dp(V(b),CC(c,"handleEvent"),d?1:0);};
let Fk=D(0);
function HC(){let a=this;C.call(a);a.ku=null;a.nM=0;a.mn=null;a.oi=null;a.ld=null;}
let AJO=(a,b)=>{let c,d,e,f,g,h,i,j,k,$$je,$p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.ku.readyState==4){if(a.ku.status==200){if(a.ld.iG){if(BH===null){b=new Ck;c=new B5;c.h$=BF(32);b.ik=c;c=new K;BB(c);c.g$=G(16);b.ia=c;b.h_=G(32);b.ie=0;b.ig=BX;BH=b;}b=a.mn;c=new K;c.g$=G(16);F(c,c.g8,A(384));d=c.g8;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.g$;f=e.data;g=c.g8;h=f.length;if(g
>=0&&g<=(h-0|0)){b.g9=L(e.data,0,g);BI(Br(b));BI("\n");}else{b=new I;b.g_=1;b.ha=1;Bl(b);E(b);}}c=a.ku.response;Eh();i=Fs.jf.document;j=i.createElement("script");b=i.createTextNode(c);j.appendChild(b);i.body.appendChild(j);V(a.ku.responseText);}else if(a.ku.status!=404&&a.ku.status!=403){try{k=O(100);$p=1;continue _;}catch($$e){$$je=BP($$e);if($$je instanceof CT){}else{throw $$e;}}Ke(a.ld,a.nM,a.mn,a.oi);}b=a.ld;b.hN=b.hN-1|0;}return;case 1:a:{try{Id(k);if(Ee()){break _;}break a;}catch($$e){$$je=BP($$e);if($$je instanceof CT)
{}else{throw $$e;}}}Ke(a.ld,a.nM,a.mn,a.oi);b=a.ld;b.hN=b.hN-1|0;return;default:D9();}}Cq().s(a,b,c,d,e,f,g,h,i,j,k,$p);},
Z9=(a,b)=>{let $p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AJO(a,b);if(Ee()){break _;}return;default:D9();}}Cq().s(a,b,$p);};
let ACQ=D();
let KR=0;
function Fx(){let a=this;C.call(a);a.li=null;a.mx=0;a.lu=0;a.i4=0;}
let NF=a=>{let b;if(a.i4)return a.lu>=a.li.h4?0:1;b=new Bf;b.g_=1;b.ha=1;b.hc=A(385);E(b);},
L0=a=>{let b,c,d,e,f,g,h;b=a.lu;c=a.li;if(b<c.h4){if(a.i4){d=c.hX.data;a.lu=b+1|0;return d[b];}c=new Bf;c.g_=1;c.ha=1;c.hc=A(385);E(c);}c=new Rf;e=new K;e.g$=G(16);J(e,e.g8,b,10);f=new H;d=e.g$;g=d.data;b=e.g8;h=g.length;if(b>=0&&b<=(h-0|0)){f.g9=L(d.data,0,b);c.g_=1;c.ha=1;c.hc=f;E(c);}c=new I;Y(c);E(c);};
function Ln(){let a=this;C.call(a);a.nK=null;a.oo=0;a.n5=null;a.n6=null;}
let Zq=a=>{let b,c,d;if(KR){b=new Fx;c=a.nK;d=a.oo;b.i4=1;b.li=c;b.mx=d;return b;}if(a.n5===null){b=new Fx;c=a.nK;d=a.oo;b.i4=1;b.li=c;b.mx=d;a.n5=b;b=new Fx;b.i4=1;b.li=c;b.mx=d;a.n6=b;}b=a.n5;if(b.i4){c=a.n6;c.lu=0;c.i4=1;b.i4=0;return c;}b.lu=0;b.i4=1;a.n6.i4=0;return b;};
function Gd(){let a=this;C.call(a);a.n7=null;a.jm=null;a.qg=null;}
let AFX=a=>{let b,c,d,e,f,g,h,i,j,k;b=a.jm.length;c=new K;c.g$=G(((b*4|0)/3|0)+2|0);d=0;a:{b:{c:{d:{e:{f:{g:{h:{while(true){if(d>=b){e=new H;f=c.g$;g=f.data;b=c.g8;h=g.length;if(b>=0&&b<=(h-0|0)){e.g9=L(f.data,0,b);return e;}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);}i=b-d|0;if(i>=3){j=(((a.jm[d]&255)<<16)+((a.jm[d+1|0]&255)<<8)|0)+(a.jm[d+2|0]&255)|0;h=j>>18&63;if(h<0)break f;if(h>=A(386).g9.length)break f;h=A(386).g9.charCodeAt(h);i=c.g8;Bn(c,i,i+1|0);c.g$.data[i]=h;h=j>>12&63;if(h<0)break g;if(h>=A(386).g9.length)break g;h
=A(386).g9.charCodeAt(h);i=c.g8;Bn(c,i,i+1|0);c.g$.data[i]=h;h=j>>6&63;if(h<0)break h;if(h>=A(386).g9.length)break h;h=A(386).g9.charCodeAt(h);i=c.g8;Bn(c,i,i+1|0);c.g$.data[i]=h;i=j&63;if(i<0)break;if(i>=A(386).g9.length)break;h=A(386).g9.charCodeAt(i);i=c.g8;Bn(c,i,i+1|0);c.g$.data[i]=h;}else if(i<2){j=(a.jm[d]&255)<<16;h=j>>18&63;if(h<0)break d;if(h>=A(386).g9.length)break d;h=A(386).g9.charCodeAt(h);i=c.g8;Bn(c,i,i+1|0);c.g$.data[i]=h;h=j>>12&63;if(h<0)break e;if(h>=A(386).g9.length)break e;h=A(386).g9.charCodeAt(h);i
=c.g8;Bn(c,i,i+1|0);c.g$.data[i]=h;F(c,c.g8,A(387));}else{k=((a.jm[d]&255)<<16)+((a.jm[d+1|0]&255)<<8)|0;h=k>>18&63;if(h<0)break a;if(h>=A(386).g9.length)break a;h=A(386).g9.charCodeAt(h);i=c.g8;Bn(c,i,i+1|0);c.g$.data[i]=h;h=k>>12&63;if(h<0)break b;if(h>=A(386).g9.length)break b;h=A(386).g9.charCodeAt(h);i=c.g8;Bn(c,i,i+1|0);c.g$.data[i]=h;h=k>>6&63;if(h<0)break c;if(h>=A(386).g9.length)break c;h=A(386).g9.charCodeAt(h);i=c.g8;Bn(c,i,i+1|0);c.g$.data[i]=h;F(c,c.g8,A(388));}d=d+3|0;}e=new Q;e.g_=1;e.ha=1;E(e);}e
=new Q;e.g_=1;e.ha=1;E(e);}e=new Q;e.g_=1;e.ha=1;E(e);}e=new Q;e.g_=1;e.ha=1;E(e);}e=new Q;e.g_=1;e.ha=1;E(e);}e=new Q;e.g_=1;e.ha=1;E(e);}e=new Q;e.g_=1;e.ha=1;E(e);}e=new Q;e.g_=1;e.ha=1;E(e);}e=new Q;e.g_=1;e.ha=1;E(e);};
function KM(){C.call(this);this.nV=null;}
let Q_=D(0);
let Os=D(0);
let O_=D(0);
let FI=D();
let DL=a=>{return;};
function Gg(){FI.call(this);this.ik=null;}
let Ez=(a,b)=>{a.ik=b;},
AMi=a=>{let b=new Gg();Ez(b,a);return b;};
function Gz(){let a=this;Gg.call(a);a.ie=0;a.ia=null;a.h_=null;a.ig=null;}
let Qy=(a,b,c)=>{a.ik=b;b=new K;b.g$=G(16);a.ia=b;a.h_=G(32);a.ie=c;a.ig=BX;},
ALR=(a,b)=>{let c=new Gz();Qy(c,a,b);return c;};
let FD=D(Gz);
let Ck=D(FD);
let AAl=(a,b)=>{BI(Br(b));};
function Fi(){let a=this;C.call(a);a.mb=null;a.on=null;}
let ADN=(a,b)=>{a.mb.fs(b.loaded);};
let Ud=D();
function B5(){FI.call(this);this.h$=null;}
let TY=(a,b)=>{a.h$=BF(b);},
AHI=a=>{let b=new B5();TY(b,a);return b;};
function HI(){let a=this;C.call(a);a.oF=null;a.pm=null;}
let G3=b=>{let c,d,e;if(b.g9.length?0:1){c=new G7;c.g_=1;c.ha=1;c.nf=b;E(c);}if(0>=b.g9.length){b=new Q;b.g_=1;b.ha=1;E(b);}if(!PA(b.g9.charCodeAt(0))){c=new G7;c.g_=1;c.ha=1;c.nf=b;E(c);}d=1;a:{while(d<b.g9.length){if(d<0)break a;if(d>=b.g9.length)break a;b:{e=b.g9.charCodeAt(d);switch(e){case 43:case 45:case 46:case 58:case 95:break;default:if(PA(e))break b;else{c=new G7;c.g_=1;c.ha=1;c.nf=b;E(c);}}}d=d+1|0;}return;}b=new Q;b.g_=1;b.ha=1;E(b);},
PA=b=>{a:{b:{if(!(b>=48&&b<=57)&&!(b>=97&&b<=122)){if(b<65)break b;if(b>90)break b;}b=1;break a;}b=0;}return b;};
let Kd=D(HI);
let BX=null;
let ALm=()=>{let b,c,d,e,f;b=new Kd;c=R(H,0);d=c.data;G3(A(3));e=d.length;f=0;while(f<e){G3(d[f]);f=f+1|0;}b.oF=A(3);b.pm=c.p();BX=b;};
function G7(){Bs.call(this);this.nf=null;}
let L3=D(0);
function IB(){let a=this;C.call(a);a.p2=0;a.lx=0;a.qt=0;a.rk=0;a.l$=0;a.jo=null;a.lL=null;a.st=0;a.qH=0;a.ps=0;a.sa=0;a.qm=0;a.ra=0;a.nU=null;a.mr=null;a.nN=null;}
let N3=(a,b,c,d,e,f)=>{let g,h,i,j,k,l,m,n,o;a.nU=D3();a.rk=b;a.qH=e;a.lL=f;g=Ub(a,c,d,e);h=new N6;h.o8=1;h.mR=0;f=new Bb;B_();h.sb=f;f=YY(g);h.iU=En===null?ABI(0,b,f):AAX(0,b,f);f=new NK;f.l1=1;f.nG=0;f.rL=1;if(!C$){g=ALl(0);d=g.data.length;i=new Qz;j=0+d|0;AHa(i,d);i.hn=0;i.hg=j;i.qj=0;i.q4=0;i.pr=g;}else{k=new Db;g=BF(0);BB(k);k.hF=(-1);k.hG=0;k.hg=0;k.ic=Cz;k.iz=0;k.h8=g;k.hn=0;k.hg=0;k.jk=1;k.ir=0;k.ic=Df();i=AKn(k);}f.jT=i;i.hg=i.hn;i.hn=0;i.hF=(-1);i=Bx;k=i.hh.createBuffer();d=i.jv;i.jv=d+1|0;Cd(i.jU,
d,Ce(k));f.o4=d;f.pT=35048;h.ks=f;h.qq=0;f=Dc;i=JK;if(f===null){i=i.jJ.data[0];while(i!==null&&i.jx!==null){i=i.j9;}}else{k=f;if(!k.$id$){l=Gl();k.$id$=l;}m=f.$id$;g=i.jJ.data;i=g[m&(g.length-1|0)];while(i!==null){if(i.lM==m){k=i.jx;if(f!==k&&!(f!==k?0:1)?0:1)break;}i=i.j9;}}i=i===null?null:i.jY;if(i===null){i=new Cy;i.iK=1;i.hX=R(C,16);}Di(i,h);AH3(JK,f,i);a.jo=h;a.mr=Cb(CB(b,(h.iU.fA()).ja/4|0));a.ps=(a.jo.iU.fA()).ja/4|0;g=(a.jo.iU.fA()).it.data;b=g.length;d=0;a:{while(d<b){if(g[d].jj==8){f=g[d];break a;}d
=d+1|0;}f=null;}if(f===null)b=0;else{g=(a.jo.iU.fA()).it.data;m=g.length;c=0;b:{while(c<m){if(g[c].jj==8){f=g[c];break b;}c=c+1|0;}f=null;}b=f.kr/4|0;}a.sa=b;g=(a.jo.iU.fA()).it.data;m=g.length;c=0;c:{while(c<m){if(g[c].jj==4){f=g[c];break c;}c=c+1|0;}f=null;}if(f===null)b=0;else{g=(a.jo.iU.fA()).it.data;m=g.length;c=0;d:{while(c<m){if(g[c].jj==4){f=g[c];break d;}c=c+1|0;}f=null;}b=f.kr/4|0;}a.qm=b;g=(a.jo.iU.fA()).it.data;m=g.length;c=0;e:{while(c<m){if(g[c].jj==16){f=g[c];break e;}c=c+1|0;}f=null;}if(f===
null)b=0;else{g=(a.jo.iU.fA()).it.data;m=g.length;c=0;f:{while(c<m){if(g[c].jj==16){f=g[c];break f;}c=c+1|0;}f=null;}b=f.kr/4|0;}a.ra=b;a.nN=R(H,e);m=0;g:{while(m<e){g=a.nN;f=new K;f.g$=G(16);F(f,f.g8,A(389));J(f,f.g8,m,10);i=new H;n=f.g$;o=n.data;c=f.g8;d=o.length;if(c<0)break g;if(c>(d-0|0))break g;g=g.data;i.g9=L(n.data,0,c);g[m]=i;m=m+1|0;}return;}f=new I;f.g_=1;f.ha=1;Bl(f);E(f);},
ALG=(a,b,c,d,e)=>{let f=new IB();N3(f,a,b,c,d,e);return f;},
Ub=(a,b,c,d)=>{let e,f,g,h,i,j,k,l,m;e=new Cy;e.iK=1;e.hX=R(C,16);f=new Et;f.jj=1;f.jq=3;f.j1=5126;f.ki=0;f.j_=A(390);f.mM=0;f.mE=DX(1);Di(e,f);if(b){g=new Et;g.jj=8;g.jq=3;g.j1=5126;g.ki=0;g.j_=A(391);g.mM=0;g.mE=DX(8);Di(e,g);}if(c){g=new Et;g.jj=4;g.jq=4;g.j1=5121;g.ki=1;g.j_=A(392);g.mM=0;g.mE=DX(4);Di(e,g);}h=0;while(true){if(h>=d){b=e.h4;i=R(Et,b);j=i.data;h=0;while(true){c=B4(h,b);if(c>=0)break;if(c>=0){f=new I;g=new K;g.g$=G(16);F(g,g.g8,A(76));J(g,g.g8,h,10);F(g,g.g8,A(77));b=e.h4;J(g,g.g8,b,10);e=
new H;i=g.g$;j=i.data;c=g.g8;d=j.length;if(c>=0&&c<=(d-0|0)){e.g9=L(i.data,0,c);f.g_=1;f.ha=1;f.hc=e;E(f);}e=new I;Y(e);E(e);}j[h]=e.hX.data[h];h=h+1|0;}return i;}g=new Et;f=new K;f.g$=G(16);F(f,f.g8,A(393));J(f,f.g8,h,10);k=new H;i=f.g$;j=i.data;l=f.g8;m=j.length;if(l<0)break;if(l>(m-0|0))break;k.g9=L(i.data,0,l);g.jj=16;g.jq=2;g.j1=5126;g.ki=0;g.j_=k;g.mM=0;g.mE=DX(16);Di(e,g);h=h+1|0;}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);},
ACk=(a,b,c,d)=>{let e,f;e=a.lx;f=a.mr.data;f[e]=b;f[e+1|0]=c;f[e+2|0]=d;a.qt=0;a.lx=e+a.ps|0;a.l$=a.l$+1|0;},
AH1=a=>{let b,c,d,e,f,g,h;if(!a.l$)return;b=a.lL;c=Bx;if(b.h9){CH(b,b.iO,b.iS);b.h9=0;}c.fC(b.i1);c=a.lL;d=a.nU;Ho();e=NX(c,A(394),Jh);b=Bx;if(c.h9){CH(c,c.iO,c.iS);c.h9=0;}XO(b,e,1,0,d.iA,0);f=0;while(f<a.qH){b=a.lL;c=a.nN.data[f];d=Bx;if(b.h9){CH(b,b.iO,b.iS);b.h9=0;}d.fF(NX(b,c,Jh),f);f=f+1|0;}b=a.jo;g=a.mr;h=a.lx;b.iU.fG(g,0,h);b=a.jo;c=a.lL;f=a.p2;d=b.ks.jT;ACE(b,c,f,0,d.hG<=0?b.iU.fI():d.hg,b.o8);a.qt=0;a.lx=0;a.l$=0;},
RA=(b,c,d)=>{let e,f,g,h,i,j,k;e=new K;e.g$=G(16);F(e,e.g8,A(395));f=!b?A(59):A(396);F(e,e.g8,f);f=!c?A(59):A(397);F(e,e.g8,f);f=new H;g=e.g$;h=g.data;i=e.g8;j=h.length;if(i>=0&&i<=(j-0|0)){f.g9=L(g.data,0,i);i=0;while(true){if(i>=d){e=new K;e.g$=G(16);F(e,e.g8,f);F(e,e.g8,A(398));f=!c?A(59):A(399);F(e,e.g8,f);f=new H;g=e.g$;h=g.data;b=e.g8;j=h.length;if(b>=0&&b<=(j-0|0)){f.g9=L(g.data,0,b);i=0;while(true){if(i>=d){e=new K;e.g$=G(16);F(e,e.g8,f);F(e,e.g8,A(400));f=new H;g=e.g$;h=g.data;i=e.g8;j=h.length;if(i
>=0&&i<=(j-0|0)){f.g9=L(g.data,0,i);if(c){e=new K;e.g$=G(16);F(e,e.g8,f);F(e,e.g8,A(401));f=new H;g=e.g$;h=g.data;c=e.g8;i=h.length;if(c>=0&&c<=(i-0|0))f.g9=L(g.data,0,c);else{e=new I;e.g_=1;e.ha=1;Bl(e);E(e);}}i=0;while(true){if(i>=d){e=new K;e.g$=G(16);F(e,e.g8,f);F(e,e.g8,A(402));f=new H;g=e.g$;h=g.data;c=e.g8;d=h.length;if(c>=0&&c<=(d-0|0)){f.g9=L(g.data,0,c);return f;}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);}e=new K;e.g$=G(16);F(e,e.g8,f);F(e,e.g8,A(403));J(e,e.g8,i,10);F(e,e.g8,A(404));F(e,e.g8,A(393));J(e,e.g8,
i,10);F(e,e.g8,A(405));f=new H;g=e.g$;h=g.data;c=e.g8;j=h.length;if(c<0)break;if(c>(j-0|0))break;f.g9=L(g.data,0,c);i=i+1|0;}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);}e=new K;e.g$=G(16);F(e,e.g8,f);F(e,e.g8,A(406));J(e,e.g8,i,10);F(e,e.g8,A(405));f=new H;g=e.g$;h=g.data;j=e.g8;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.g9=L(g.data,0,j);i=i+1|0;}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);}e=new K;e.g$=G(16);F(e,e.g8,f);F(e,e.g8,A(407));J(e,e.g8,i,10);F(e,e.g8,
A(405));f=new H;g=e.g$;h=g.data;j=e.g8;k=h.length;if(j<0)break;if(j>(k-0|0))break;f.g9=L(g.data,0,j);i=i+1|0;}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);},
ACb=(b,c,d)=>{let e,f,g,h,i,j,k;e=A(408);if(c){f=new K;f.g$=G(16);F(f,f.g8,e);F(f,f.g8,A(399));e=new H;g=f.g$;h=g.data;i=f.g8;j=h.length;if(i>=0&&i<=(j-0|0))e.g9=L(g.data,0,i);else{e=new I;e.g_=1;e.ha=1;Bl(e);E(e);}}i=0;a:{while(true){if(i>=d){f=new K;f.g$=G(16);F(f,f.g8,e);F(f,f.g8,A(409));e=!c?A(410):A(411);F(f,f.g8,e);e=new H;h=f.g$;g=h.data;b=f.g8;c=g.length;if(b>=0&&b<=(c-0|0)){e.g9=L(h.data,0,b);if(d>0){f=new K;f.g$=G(16);F(f,f.g8,e);F(f,f.g8,A(412));e=new H;g=f.g$;h=g.data;c=f.g8;i=h.length;if(c>=0&&
c<=(i-0|0))e.g9=L(g.data,0,c);else{e=new I;e.g_=1;e.ha=1;Bl(e);E(e);}}i=0;c=d-1|0;b:{while(true){if(i>=d){f=new K;f.g$=G(16);F(f,f.g8,e);F(f,f.g8,A(413));e=new H;g=f.g$;h=g.data;c=f.g8;d=h.length;if(c>=0&&c<=(d-0|0)){e.g9=L(g.data,0,c);return e;}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);}if(i!=c){f=new K;f.g$=G(16);F(f,f.g8,e);F(f,f.g8,A(414));J(f,f.g8,i,10);F(f,f.g8,A(415));J(f,f.g8,i,10);F(f,f.g8,A(416));e=new H;g=f.g$;h=g.data;j=f.g8;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.g9=L(g.data,0,j);}else{f=new K;f.g$
=G(16);F(f,f.g8,e);F(f,f.g8,A(414));J(f,f.g8,i,10);F(f,f.g8,A(415));J(f,f.g8,i,10);F(f,f.g8,A(417));e=new H;g=f.g$;h=g.data;j=f.g8;k=h.length;if(j<0)break b;if(j>(k-0|0))break b;e.g9=L(g.data,0,j);}i=i+1|0;}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);}f=new K;f.g$=G(16);F(f,f.g8,e);F(f,f.g8,A(406));J(f,f.g8,i,10);F(f,f.g8,A(405));e=new H;g=f.g$;h=g.data;j=f.g8;k=h.length;if(j<0)break a;if(j>(k-0|0))break a;e.g9=L(g.data,0,j);f=new K;f.g$=G(16);F(f,f.g8,
e);F(f,f.g8,A(418));J(f,f.g8,i,10);F(f,f.g8,A(405));e=new H;g=f.g$;h=g.data;j=f.g8;k=h.length;if(j<0)break;if(j>(k-0|0))break;e.g9=L(g.data,0,j);i=i+1|0;}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);};
function Kg(){let a=this;C.call(a);a.m4=null;a.qC=0.0;a.qP=0.0;a.oG=0;a.oH=0;a.p5=0;a.qx=0;a.rK=null;}
let Qn=(a,b)=>{let c,d,e,f;ABm(a.oG,a.oH,a.p5,a.qx);c=a.m4;d=a.qC;c.nv=d;e=a.qP;c.n0=e;if(b){f=c.nZ;d=d/2.0;e=e/2.0;f.hd=d;f.hf=e;f.he=0.0;}AKJ(c,1);};
function Of(){Kg.call(this);this.o1=0.0;}
function O7(){FU.call(this);this.sw=null;}
let R7=D();
let Rf=D(BA);
let Bf=D(BA);
let Wm=D();
let Mm=(b,c)=>{let d;a:{d=0;switch(c){case 1:d=2;break a;case 2:d=4;break a;case 3:d=1;break a;default:}}c=b>>>6|0;return d|c&8|b<<2&16|c&32|(b>>>8|0)&64|(b>>>5|0)&128|b&256|b<<8&512|b<<10&1024|b<<1&2048;};
function Dj(){C.call(this);this.je=null;}
let TE=a=>{ABj(a.je);};
let Xo=D();
let Q4=D();
let K8=null;
let J0=()=>{J0=Bz(Q4);AGP();};
let AGP=()=>{let b,c;b=S((J_.p()).data.length);c=b.data;K8=b;c[Eq.hm]=1;c[Ej.hm]=2;c[Ea.hm]=3;c[D6.hm]=4;c[Hi.hm]=5;};
let JV=D(BA);
function J4(){let a=this;C.call(a);a.nZ=null;a.pN=null;a.qd=null;a.nA=null;a.og=null;a.lR=null;a.ml=null;a.ol=0.0;a.qa=0.0;a.nv=0.0;a.n0=0.0;a.p6=null;a.rw=null;a.rf=null;}
let AFm=a=>{let b,c,d;b=new Bb;B_();a.nZ=b;b=new Bb;b.hd=0.0;b.hf=0.0;b.he=(-1.0);a.pN=b;b=new Bb;b.hd=0.0;b.hf=1.0;b.he=0.0;a.qd=b;a.nA=D3();a.og=D3();a.lR=D3();a.ml=D3();a.ol=1.0;a.qa=100.0;a.nv=0.0;a.n0=0.0;a.p6=AE5();a.rw=new Bb;b=new IN;Ja();c=new Bb;b.rq=c;d=new Bb;b.sg=d;c.hd=0.0;c.hf=0.0;c.he=0.0;d.hd=0.0;d.hf=0.0;d.he=0.0;a.rf=b;};
function Mv(){let a=this;J4.call(a);a.oZ=0.0;a.qi=null;}
let AKJ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m;c=a.nA;d=a.oZ;e=a.nv;f=d* -e/2.0;e=d*e/2.0;g=a.n0;AC_(c,f,e,d* -(g/2.0),d*g/2.0,a.ol,a.qa);c=a.og;h=a.nZ;i=a.qi;d=h.hd;j=h.hf;f=h.he;i.hd=d;i.hf=j;i.he=f;k=a.pN;l=k.hd;e=k.hf;g=k.he;d=d+l;j=j+e;f=f+g;i.hd=d;i.hf=j;i.he=f;i=a.qd;k=QE;k.hd=d;k.hf=j;k.he=f;l=h.hd;e=h.hf;g=h.he;l=d-l;e=j-e;g=f-g;k.hd=l;k.hf=e;k.he=g;Xi(c,k,i);i=LT;l= -h.hd;e= -h.hf;g= -h.he;If(i);m=i.iA.data;m[12]=l;m[13]=e;m[14]=g;ACJ(c,i);Gm(a.lR,a.nA.iA);St(a.lR.iA,a.og.iA);if(b){Gm(a.ml,a.lR.iA);XG(a.ml.iA);ADX(a.p6,
a.ml);}};
let Eo=D(FD);
let Yr=(a,b)=>{CI(Br(b));};
let Wz=D(Dr);
let Rl=null;
let AK$=()=>{Rl=Bk(W4);};
let AEF=D();
let Kt=null,Mp=null,M2=null;
let Z4=()=>{Kt=U5([O(1),O(10),O(100),O(10000),O(100000000),B(1874919424, 2328306)]);Mp=new Jm;M2=new PK;};
let AFi=D();
let H4=BM,Sr=null,FT=null,Gc=null;
let ZR=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q;d=!(isNaN(b)?1:0)?AMm(b):B(0, 2146959360);c.oT=C6(Ci(d,B(0, 2147483648)),BM)?0:1;e=Ci(d,B(4294967295, 1048575));f=Bd(ALF(d,52))&2047;if(C6(e,BM)&&!f){c.nX=BM;c.nh=0;return;}if(f)e=Xa(e,B(0, 1048576));else{e=Ek(e,1);while(C6(Ci(e,B(0, 1048576)),BM)){e=Ek(e,1);f=f+(-1)|0;}}g=Gc;h=AFS(g,0,g.data.length,f<<16>>16);if(h<0)h= -h|0;g=Gc.data;i=h+1|0;j=12+(f-g[i]|0)|0;k=GD(e,FT.data[i],j);if(WV(k,H4)){while(DU(k,H4)<=0){h=h+(-1)|0;k=Cj(U(k,O(10)),O(9));}g=Gc.data;i=h+1
|0;j=12+(f-g[i]|0)|0;k=GD(e,FT.data[i],j);}e=Ek(e,1);d=Cj(e,O(1));g=FT.data;i=h+1|0;l=g[i];f=j-1|0;m=GD(d,l,f);l=GD(Nn(e,O(1)),FT.data[i],f);n=O(1);while(true){o=U(n,O(10));if(DU(DF(k,o),DF(l,o))<=0)break;n=o;}p=O(1);while(true){q=U(p,O(10));if(DU(DF(k,q),DF(m,q))>=0)break;p=q;}i=DU(n,p);e=i>0?U(DF(k,n),n):i<0?Cj(U(DF(k,p),p),p):U(DF(Cj(k,Jy(p,O(2))),p),p);if(DU(e,B(2808348672, 232830643))>=0)while(true){h=h+1|0;e=DF(e,O(10));if(DU(e,B(2808348672, 232830643))<0)break;}else if(DU(e,B(1569325056, 23283064))<0)
{h=h+(-1)|0;e=U(e,O(10));}c.nX=e;c.nh=h-330|0;},
GD=(b,c,d)=>{let e,f,g,h,i,j,k,l;e=Ci(b,O(65535));f=Ci(X(b,16),O(65535));g=Ci(X(b,32),O(65535));h=Ci(X(b,48),O(65535));i=Ci(c,O(65535));j=Ci(X(c,16),O(65535));k=Ci(X(c,32),O(65535));l=Ci(X(c,48),O(65535));return Cj(Cj(Cj(Ek(U(l,h),32+d|0),Ek(Cj(U(l,g),U(k,h)),16+d|0)),Ek(Cj(Cj(U(l,f),U(k,g)),U(j,h)),d)),X(Cj(Cj(Cj(U(k,e),U(j,f)),U(i,g)),Ek(Cj(Cj(Cj(U(l,e),U(k,f)),U(j,g)),U(i,h)),16)),32-d|0));},
Y2=()=>{H4=DF(O(-1),O(10));Sr=ADF();FT=U5([B(3251292512, 2194092222),B(1766094183, 3510547556),B(553881887, 2808438045),B(443105509, 2246750436),B(3285949193, 3594800697),B(910772436, 2875840558),B(2446604867, 2300672446),B(2196580869, 3681075914),B(2616258154, 2944860731),B(1234013064, 2355888585),B(1974420903, 3769421736),B(720543263, 3015537389),B(1435428070, 2412429911),B(578697993, 3859887858),B(2180945313, 3087910286),B(885762791, 2470328229),B(3135207384, 3952525166),B(1649172448, 3162020133),B(3037324877, 2529616106),
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
B(3348809418, 2876309015),B(2679047534, 2301047212),B(850502218, 3681675540),B(680401775, 2945340432),B(3121301797, 2356272345),B(699115580, 3770035753),B(2277279382, 3016028602),B(103836587, 2412822882),B(1025131999, 3860516611),B(4256079436, 3088413288),B(827883168, 2470730631),B(3901593088, 3953169009)]);Gc=AMn([(-70),(-66),(-63),(-60),(-56),(-53),(-50),(-46),(-43),(-40),(-36),(-33),(-30),(-26),(-23),(-20),(-16),(-13),(-10),(-6),(-3),0,4,7,10,14,17,20,23,27,30,33,37,40,43,47,50,53,57,60,63,67,70,73,77,80,
83,87,90,93,97,100,103,107,110,113,116,120,123,126,130,133,136,140,143,146,150,153,156,160,163,166,170,173,176,180,183,186,190,193,196,200,203,206,210,213,216,219,223,226,229,233,236,239,243,246,249,253,256,259,263,266,269,273,276,279,283,286,289,293,296,299,303,306,309,312,316,319,322,326,329,332,336,339,342,346,349,352,356,359,362,366,369,372,376,379,382,386,389,392,396,399,402,406,409,412,415,419,422,425,429,432,435,439,442,445,449,452,455,459,462,465,469,472,475,479,482,485,489,492,495,499,502,505,508,512,
515,518,522,525,528,532,535,538,542,545,548,552,555,558,562,565,568,572,575,578,582,585,588,592,595,598,601,605,608,611,615,618,621,625,628,631,635,638,641,645,648,651,655,658,661,665,668,671,675,678,681,685,688,691,695,698,701,704,708,711,714,718,721,724,728,731,734,738,741,744,748,751,754,758,761,764,768,771,774,778,781,784,788,791,794,797,801,804,807,811,814,817,821,824,827,831,834,837,841,844,847,851,854,857,861,864,867,871,874,877,881,884,887,891,894,897,900,904,907,910,914,917,920,924,927,930,934,937,
940,944,947,950,954,957,960,964,967,970,974,977,980,984,987,990,993,997,1000,1003,1007,1010,1013,1017,1020,1023,1027,1030,1033,1037,1040,1043,1047,1050,1053,1057,1060,1063,1067,1070,1073,1077,1080,1083,1086,1090,1093,1096,1100,1103,1106,1110,1113,1116,1120,1123,1126,1130,1133,1136,1140,1143,1146,1150,1153,1156,1160,1163,1166,1170,1173,1176,1180,1183,1186,1189,1193,1196,1199,1203,1206,1209,1213,1216,1219,1223,1226,1229,1233,1236,1239,1243,1246,1249,1253,1256,1259,1263,1266,1269,1273,1276,1279,1282,1286,1289,
1292,1296,1299,1302,1306,1309,1312,1316,1319,1322,1326,1329,1332,1336,1339,1342,1346,1349,1352,1356,1359,1362,1366,1369,1372,1376,1379,1382,1385,1389,1392,1395,1399,1402,1405,1409,1412,1415,1419,1422,1425,1429,1432,1435,1439,1442,1445,1449,1452,1455,1459,1462,1465,1469,1472,1475,1478,1482,1485,1488,1492,1495,1498,1502,1505,1508,1512,1515,1518,1522,1525,1528,1532,1535,1538,1542,1545,1548,1552,1555,1558,1562,1565,1568,1572,1575,1578,1581,1585,1588,1591,1595,1598,1601,1605,1608,1611,1615,1618,1621,1625,1628,1631,
1635,1638,1641,1645,1648,1651,1655,1658,1661,1665,1668,1671,1674,1678,1681,1684,1688,1691,1694,1698,1701,1704,1708,1711,1714,1718,1721,1724,1728,1731,1734,1738,1741,1744,1748,1751,1754,1758,1761,1764,1767,1771,1774,1777,1781,1784,1787,1791,1794,1797,1801,1804,1807,1811,1814,1817,1821,1824,1827,1831,1834,1837,1841,1844,1847,1851,1854,1857,1861,1864,1867,1870,1874,1877,1880,1884,1887,1890,1894,1897,1900,1904,1907,1910,1914,1917,1920,1924,1927,1930,1934,1937,1940,1944,1947,1950,1954,1957,1960,1963,1967,1970,1973,
1977,1980,1983,1987,1990,1993,1997,2000,2003,2007,2010,2013,2017,2020,2023,2027,2030,2033,2037,2040,2043,2047,2050,2053,2057,2060,2063,2066,2070,2073,2076,2080,2083,2086,2090,2093,2096,2100,2103,2106,2110,2113,2116,2120]);};
function Jm(){let a=this;C.call(a);a.nX=BM;a.nh=0;a.oT=0;}
let UJ=a=>{return;},
ADF=()=>{let a=new Jm();UJ(a);return a;};
function IW(){let a=this;C.call(a);a.jB=null;a.kc=0;a.l4=null;a.px=null;a.qf=null;a.pL=null;a.kC=null;a.pJ=null;a.qr=null;a.pi=null;a.i1=0;a.nw=0;a.oJ=0;a.sz=null;a.iO=null;a.iS=null;a.h9=0;a.so=0;a.i3=null;a.lp=null;}
let Jh=0,JZ=null,IT=null,JO=null,AGA=null;
let Ho=()=>{Ho=Bz(IW);AFF();};
let AKc=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;Ho();a.jB=A(59);a.l4=EO(51,0.800000011920929);a.px=EO(51,0.800000011920929);a.qf=EO(51,0.800000011920929);a.kC=EO(51,0.800000011920929);a.pJ=EO(51,0.800000011920929);a.qr=EO(51,0.800000011920929);a.so=0;if(!C$){d=S(1);e=d.data.length;f=new EK;g=0+e|0;f.hF=(-1);f.hG=e;f.hg=e;f.hn=0;f.hg=g;f.kA=0;f.ll=0;f.kn=d;}else{h=new Db;d=BF(4);h.hF=(-1);h.hG=4;h.hg=4;h.ic=Cz;h.iz=0;h.h8=d;h.hn=0;h.hg=4;h.jk=1;h.ir=0;h.ic=Df();f=Fd(h);}a.i3=f;if(!C$){d=S(1);e=d.data.length;f=new EK;g
=0+e|0;f.hF=(-1);f.hG=e;f.hg=e;f.hn=0;f.hg=g;f.kA=0;f.ll=0;f.kn=d;}else{h=new Db;d=BF(4);h.hF=(-1);h.hG=4;h.hg=4;h.ic=Cz;h.iz=0;h.h8=d;h.hn=0;h.hg=4;h.jk=1;h.ir=0;h.ic=Df();f=Fd(h);}a.lp=f;if(b===null){b=new Bs;b.g_=1;b.ha=1;b.hc=A(419);E(b);}if(c===null){b=new Bs;b.g_=1;b.ha=1;b.hc=A(420);E(b);}f=JZ;if(f!==null&&f.g9.length>0){f=new K;f.g$=G(16);h=JZ;F(f,f.g8,h);F(f,f.g8,b);b=new H;d=f.g$;i=d.data;e=f.g8;j=i.length;if(e>=0&&e<=(j-0|0))b.g9=L(d.data,0,e);else{b=new I;b.g_=1;b.ha=1;Bl(b);E(b);}}f=IT;if(f!==null
&&f.g9.length>0){f=new K;f.g$=G(16);h=IT;F(f,f.g8,h);F(f,f.g8,c);c=new H;d=f.g$;i=d.data;e=f.g8;j=i.length;if(e>=0&&e<=(j-0|0))c.g9=L(d.data,0,e);else{b=new I;b.g_=1;b.ha=1;Bl(b);E(b);}}a.iO=b;a.iS=c;if(!C$){i=Cb(16);k=i.data.length;f=new Hc;l=0+k|0;f.hF=(-1);f.hG=k;f.hg=k;f.hn=0;f.hg=l;f.l0=0;f.ms=0;f.lF=i;}else{f=new Db;d=BF(64);f.hF=(-1);f.hG=64;f.hg=64;f.ic=Cz;f.iz=0;f.h8=d;f.hn=0;f.hg=64;f.jk=1;f.ir=0;f.ic=Df();f=I9(f);}a.sz=f;CH(a,b,c);if(a.kc){XH(a);ACj(a);b=Dc;c=JO;l=Du(c,b);c=l<0?null:c.jG.data[l];if
(c===null){c=new Cy;c.iK=1;c.hX=R(C,16);}Di(c,a);DE(JO,b,c);}},
X3=(a,b)=>{let c=new IW();AKc(c,a,b);return c;},
CH=(a,b,c)=>{let d;a.nw=Ri(a,35633,b);d=Ri(a,35632,c);a.oJ=d;if(a.nw!=(-1)&&d!=(-1)){d=Bx.f0();if(!d)d=(-1);d=AHu(a,d);a.i1=d;if(d!=(-1)){a.kc=1;return;}a.kc=0;return;}a.kc=0;},
Ri=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;d=Bx;if(!C$){e=S(1);f=e.data.length;g=new EK;h=0+f|0;g.hF=(-1);g.hG=f;g.hg=f;g.hn=0;g.hg=h;g.kA=0;g.ll=0;g.kn=e;}else{g=new Db;e=BF(4);g.hF=(-1);g.hG=4;g.hg=4;g.ic=Cz;g.iz=0;g.h8=e;g.hn=0;g.hg=4;g.jk=1;g.ir=0;g.ic=Df();g=Fd(g);}i=d.f2(b);if(!i)return (-1);d.f3(i,c);d.f4(i);d.c8(i,35713,g);if(DR(g,0))return i;j=d.f5(i);c=new K;c.g$=G(16);d=a.jB;F(c,c.g8,d);d=b!=35633?A(421):A(422);F(c,c.g8,d);d=new H;e=c.g$;k=e.data;i=c.g8;l=k.length;if(i>=0&&i<=(l-0|0)){d.g9=L(e.data,0,i);a.jB
=d;c=new K;c.g$=G(16);F(c,c.g8,d);F(c,c.g8,j);d=new H;e=c.g$;k=e.data;i=c.g8;l=k.length;if(i>=0&&i<=(l-0|0)){d.g9=L(e.data,0,i);a.jB=d;return (-1);}c=new I;c.g_=1;c.ha=1;Bl(c);E(c);}c=new I;c.g_=1;c.ha=1;Bl(c);E(c);},
AHu=(a,b)=>{let c,d,e,f;c=Bx;if(b==(-1))return (-1);c.f6(b,a.nw);c.f6(b,a.oJ);c.f7(b);d=new Db;e=BF(4);d.hF=(-1);d.hG=4;d.hg=4;d.ic=Cz;d.iz=0;d.h8=e;d.hn=0;d.hg=4;d.jk=1;d.ir=0;d.ic=Df();f=Fd(d);c.c7(b,35714,f);if(DR(f,0))return b;a.jB=Bx.bY(b);return (-1);},
NX=(a,b,c)=>{let d,e,f,g,h,i;d=a.l4;e=(-2);f=EH(d,b);if(f>=0)e=d.i8.data[f];if(e==(-2)){e=Bx.f8(a.i1,b);if(e==(-1)&&c){if(a.kc){d=new Bs;g=new K;g.g$=G(16);F(g,g.g8,A(423));F(g,g.g8,b);F(g,g.g8,A(424));b=new H;h=g.g$;i=h.data;e=g.g8;f=i.length;if(e>=0&&e<=(f-0|0)){b.g9=L(h.data,0,e);d.g_=1;d.ha=1;d.hc=b;E(d);}b=new I;b.g_=1;b.ha=1;Bl(b);E(b);}b=new CV;d=new K;d.g$=G(16);F(d,d.g8,A(425));if(!a.kc)g=a.jB;else{g=Bx.bY(a.i1);a.jB=g;}F(d,d.g8,g);g=new H;h=d.g$;i=h.data;e=d.g8;f=i.length;if(e>=0&&e<=(f-0|0)){g.g9
=L(h.data,0,e);b.g_=1;b.ha=1;b.hc=g;E(b);}b=new I;b.g_=1;b.ha=1;Bl(b);E(b);}D1(a.l4,b,e);}return e;},
ACj=a=>{let b,c,d,e,f;b=a.i3;b.hn=0;b.hg=b.hG;b.hF=(-1);Bx.c7(a.i1,35718,b);c=DR(a.i3,0);a.pL=R(H,c);d=0;while(d<c){b=a.i3;b.hn=0;b.hg=b.hG;b.hF=(-1);Qs(b,0,1);b=a.lp;b.hn=0;b.hg=b.hG;b.hF=(-1);e=Bx.c6(a.i1,d,a.i3,b);f=Bx.f8(a.i1,e);D1(a.l4,e,f);D1(a.px,e,DR(a.lp,0));D1(a.qf,e,DR(a.i3,0));a.pL.data[d]=e;d=d+1|0;}},
XH=a=>{let b,c,d,e,f;b=a.i3;b.hn=0;b.hg=b.hG;b.hF=(-1);Bx.c7(a.i1,35721,b);c=DR(a.i3,0);a.pi=R(H,c);d=0;while(d<c){b=a.i3;b.hn=0;b.hg=b.hG;b.hF=(-1);Qs(b,0,1);b=a.lp;b.hn=0;b.hg=b.hG;b.hF=(-1);e=Bx.c5(a.i1,d,a.i3,b);f=Bx.f_(a.i1,e);D1(a.kC,e,f);D1(a.pJ,e,DR(a.lp,0));D1(a.qr,e,DR(a.i3,0));a.pi.data[d]=e;d=d+1|0;}},
AFF=()=>{let b,c,d,e;Jh=1;JZ=A(59);IT=A(59);JO=DI(51,0.800000011920929);if(!C$){b=S(1);c=b.data.length;d=new EK;e=0+c|0;d.hF=(-1);d.hG=c;d.hg=c;d.hn=0;d.hg=e;d.kA=0;d.ll=0;d.kn=b;}else{d=new Db;b=BF(4);d.hF=(-1);d.hG=4;d.hg=4;d.ic=Cz;d.iz=0;d.h8=b;d.hn=0;d.hg=4;d.jk=1;d.ir=0;d.ic=Df();d=Fd(d);}AGA=d;};
function N6(){let a=this;C.call(a);a.iU=null;a.ks=null;a.o8=0;a.qq=0;a.lE=null;a.mR=0;a.sb=null;}
let JK=null;
let ACE=(a,b,c,d,e,f)=>{let g,h,i,j,k,l;if(!e)return;if(f){g=null;h=null;a.iU.ga(b,g);g=a.lE;if(g!==null&&g.gb()>0)a.lE.ga(b,h);g=a.ks;if(g.jT.hg>0)AIX(g);}if(a.qq){h=a.ks;g=h.jT;if(g.hg<=0)Bx.gd(c,d,e);else{h.l1=h.l1|0;i=g.hn;Cu(g,d);Bx.ge(c,e,5123,g);Cu(g,i);}}else{j=0;if(a.mR)j=a.lE.gb();g=a.ks.jT;if(g.hg<=0){if(a.mR&&j>0)En.gf(c,d,e,j);else Bx.gd(c,d,e);}else{if((e+d|0)>g.hG){b=new Bf;g=new K;g.g$=G(16);F(g,g.g8,A(426));J(g,g.g8,e,10);F(g,g.g8,A(427));J(g,g.g8,d,10);F(g,g.g8,A(428));e=a.ks.jT.hG;J(g,g.g8,
e,10);F(g,g.g8,A(417));h=new H;k=g.g$;l=k.data;d=g.g8;e=l.length;if(d>=0&&d<=(e-0|0)){h.g9=L(k.data,0,d);b.g_=1;b.ha=1;b.hc=h;E(b);}b=new I;b.g_=1;b.ha=1;Bl(b);E(b);}if(a.mR&&j>0)En.gg(c,e,5123,d*2|0,j);else Bx.gh(c,e,5123,d*2|0);}}if(f){g=null;h=null;a.iU.gi(b,g);g=a.lE;if(g!==null&&g.gb()>0)a.lE.gi(b,h);b=a.ks;if(b.jT.hg>0){Bx.gj(34963,0);b.nG=0;}}},
AKf=()=>{let b,c,d,e;b=new GG;c=Hj(16);b.kl=0;d=R(Ep,c);e=d.data;b.jJ=d;b.mY=0.75;b.k0=e.length*0.75|0;JK=b;};
function Ls(){let a=this;C.call(a);a.it=null;a.ja=0;a.ri=BM;a.rX=0;a.sd=0;}
let ACs=(a,b)=>{let c,d,e,f,g,h;b=b.data;a.ri=O(-1);a.rX=(-1);a.sd=(-1);c=b.length;if(!c){d=new Bs;d.g_=1;d.ha=1;d.hc=A(429);E(d);}e=R(Et,c);f=e.data;g=0;while(g<c){f[g]=b[g];g=g+1|0;}a.it=e;c=0;h=0;while(h<f.length){a:{b:{d=f[h];d.kr=c;switch(d.j1){case 5120:case 5121:break;case 5122:case 5123:g=2*d.jq|0;break a;case 5124:case 5125:case 5127:case 5128:case 5129:case 5130:case 5131:break b;case 5126:case 5132:g=4*d.jq|0;break a;default:break b;}g=d.jq;break a;}g=0;}c=c+g|0;h=h+1|0;}a.ja=c;},
YY=a=>{let b=new Ls();ACs(b,a);return b;};
let JN=D(0);
let Qm=D(0);
function Lm(){let a=this;C.call(a);a.q1=null;a.qy=null;a.rZ=0;a.sq=0;}
let AFj=a=>{let b,c;if(!a.rZ){b=a.q1;b.pf=null;if(BE!==b)BE=b;BE.j5=CZ();c=a.qy;b=null;c.kG.e(b);}};
function Ps(){let a=this;C.call(a);a.nd=0;a.kh=null;a.i8=null;a.ph=0.0;a.nq=0;a.mU=0;a.mO=0;}
let Y4=(a,b,c)=>{let d,e,f,g,h,i,j;if(c>0.0&&c<1.0){a.ph=c;d=G8(b,c);a.nq=d*c|0;b=d-1|0;a.mO=b;a.mU=DV(O(b));a.kh=R(C,d);a.i8=S(d);return;}e=new Bs;f=new K;f.g$=G(16);F(f,f.g8,A(40));GS(f,f.g8,c);g=new H;h=f.g$;i=h.data;d=f.g8;j=i.length;if(d>=0&&d<=(j-0|0)){g.g9=L(h.data,0,d);e.g_=1;e.ha=1;e.hc=g;E(e);}f=new I;f.g_=1;f.ha=1;Bl(f);E(f);},
EO=(a,b)=>{let c=new Ps();Y4(c,a,b);return c;},
EH=(a,b)=>{let c,d,e,f,g,h;if(b===null){c=new Bs;c.g_=1;c.ha=1;c.hc=A(41);E(c);}a:{d=a.kh;if(!b.h6){e=0;while(true){if(e>=b.g9.length)break a;b.h6=(31*b.h6|0)+b.g9.charCodeAt(e)|0;e=e+1|0;}}}f=Bd(X(U(O(b.h6),B(2135587861, 2654435769)),a.mU));while(true){c=d.data[f];if(c===null)return  -(f+1|0)|0;if(c===b)g=1;else if(!(b instanceof H))g=0;else{h=b;g=c.g9!==h.g9?0:1;}if(g)break;f=(f+1|0)&a.mO;}return f;},
D1=(a,b,c)=>{let d,e;d=EH(a,b);if(d>=0){a.i8.data[d]=c;return;}d= -(d+1|0)|0;e=a.kh.data;e[d]=b;a.i8.data[d]=c;c=a.nd+1|0;a.nd=c;if(c>=a.nq)AHx(a,e.length<<1);},
AHx=(a,b)=>{let c,d,e,f,g,h,i,j,k,l;a:{c=a.kh.data.length;a.nq=b*a.ph|0;d=b-1|0;a.mO=d;a.mU=DV(O(d));e=a.kh;f=a.i8;a.kh=R(C,b);a.i8=S(b);if(a.nd>0){g=0;while(true){if(g>=c)break a;h=e.data[g];if(h!==null){b:{i=f.data[g];j=a.kh;if(!h.h6){k=0;while(true){if(k>=h.g9.length)break b;h.h6=(31*h.h6|0)+h.g9.charCodeAt(k)|0;k=k+1|0;}}}b=Bd(X(U(O(h.h6),B(2135587861, 2654435769)),a.mU));while(true){l=j.data;if(l[b]===null)break;b=(b+1|0)&a.mO;}l[b]=h;a.i8.data[b]=i;}g=g+1|0;}}}};
let AFA=D();
let K0=D(0);
function NK(){let a=this;C.call(a);a.jT=null;a.o4=0;a.rL=0;a.l1=0;a.nG=0;a.pT=0;}
let AIX=a=>{let b,c,d;b=a.o4;if(!b){c=new Bf;c.g_=1;c.ha=1;c.hc=A(430);E(c);}Bx.gj(34963,b);if(a.l1){c=Bx;d=a.jT;c.c4(34963,d.hg,d,a.pT);a.l1=0;}a.nG=1;};
function PK(){let a=this;C.call(a);a.nB=0;a.nr=0;a.o0=0;}
function DG(){let a=this;C.call(a);a.hG=0;a.hn=0;a.hg=0;a.hF=0;}
let AHa=(a,b)=>{a.hF=(-1);a.hG=b;a.hg=b;},
Cu=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.hg){a.hn=b;if(b<a.hF)a.hF=0;return a;}c=new Bs;d=a.hg;e=new K;e.g$=G(16);F(e,e.g8,A(431));J(e,e.g8,b,10);F(e,e.g8,A(432));J(e,e.g8,d,10);d=e.g8;Bn(e,d,d+1|0);f=e.g$;g=f.data;g[d]=93;h=new H;d=e.g8;i=g.length;if(d>=0&&d<=(i-0|0)){h.g9=L(f.data,0,d);c.g_=1;c.ha=1;c.hc=h;E(c);}c=new I;c.g_=1;c.ha=1;Bl(c);E(c);},
Dt=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<=a.hG){if(a.hF>b)a.hF=(-1);a.hg=b;if(a.hn>b)a.hn=b;return a;}c=new Bs;d=a.hG;e=new K;e.g$=G(16);F(e,e.g8,A(433));J(e,e.g8,b,10);F(e,e.g8,A(432));J(e,e.g8,d,10);d=e.g8;Bn(e,d,d+1|0);f=e.g$;g=f.data;g[d]=93;h=new H;d=e.g8;i=g.length;if(d>=0&&d<=(i-0|0)){h.g9=L(f.data,0,d);c.g_=1;c.ha=1;c.hc=h;E(c);}c=new I;c.g_=1;c.ha=1;Bl(c);E(c);};
let Gn=D(DG);
let AK2=(a,b)=>{Cu(a,b);return a;},
ALT=a=>{a.hn=0;a.hg=a.hG;a.hF=(-1);return a;};
function EF(){let a=this;DG.call(a);a.iz=0;a.h8=null;a.ic=null;}
function FE(){C.call(this);this.mF=null;}
let Cz=null,Hp=null,I0=null;
let Df=()=>{let b;if(I0===null){b=new ArrayBuffer(2);new Int16Array(b)[0]=1;I0=(new Int8Array(b))[0]?Hp:Cz;}return I0;},
AMp=()=>{let b;b=new FE;b.mF=A(4);Cz=b;b=new FE;b.mF=A(5);Hp=b;};
let E2=D(DG);
let Op=(a,b,c,d)=>{let e,f,g,h,i,j,k,l;if(a.gk()){e=new Hr;e.g_=1;e.ha=1;E(e);}f=a.hg;g=a.hn;if((f-g|0)<d){e=new Iz;e.g_=1;e.ha=1;E(e);}if(c>=0){h=b.data;f=h.length;if(c<=f){i=c+d|0;if(i>f){e=new I;j=new K;j.g$=G(16);F(j,j.g8,A(434));J(j,j.g8,i,10);F(j,j.g8,A(435));J(j,j.g8,f,10);k=new H;b=j.g$;h=b.data;d=j.g8;f=h.length;if(d>=0&&d<=(f-0|0)){k.g9=L(b.data,0,d);e.g_=1;e.ha=1;e.hc=k;E(e);}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);}if(d>=0){i=0;while(i<d){l=g+1|0;f=c+1|0;a.gl(g,h[c]);i=i+1|0;g=l;c=f;}a.hn=a.hn+d|0;return a;}e
=new I;j=new K;j.g$=G(16);F(j,j.g8,A(436));J(j,j.g8,d,10);F(j,j.g8,A(437));k=new H;b=j.g$;h=b.data;d=j.g8;f=h.length;if(d>=0&&d<=(f-0|0)){k.g9=L(b.data,0,d);e.g_=1;e.ha=1;e.hc=k;E(e);}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);}}b=b.data;e=new I;d=b.length;j=new K;j.g$=G(16);F(j,j.g8,A(438));J(j,j.g8,c,10);F(j,j.g8,A(432));J(j,j.g8,d,10);d=j.g8;Bn(j,d,d+1|0);b=j.g$;h=b.data;h[d]=41;k=new H;d=j.g8;f=h.length;if(d>=0&&d<=(f-0|0)){k.g9=L(b.data,0,d);e.g_=1;e.ha=1;e.hc=k;E(e);}e=new I;e.g_=1;e.ha=1;Bl(e);E(e);},
ALu=(a,b)=>{Dt(a,b);return a;},
ALU=(a,b)=>{Cu(a,b);return a;},
ALZ=(a,b)=>{Dt(a,b);return a;},
AMg=(a,b)=>{Cu(a,b);return a;};
let Je=D(0);
function Ny(){let a=this;C.call(a);a.jp=null;a.kD=null;a.pS=0;a.su=0;a.nJ=0;a.lV=0;a.l8=0;}
let ADe=(a,b,c,d)=>{let e,f,g,h,i,j,k;a.lV=0;a.l8=0;a.su=b;a.jp=d;c=CB(d.ja/4|0,c);if(!C$){e=Cb(c);f=e.data.length;d=new Hc;g=0+f|0;d.hF=(-1);d.hG=f;d.hg=f;d.hn=0;d.hg=g;d.l0=0;d.ms=0;d.lF=e;}else{c=c*4|0;if(c<0){d=new Bs;h=new K;h.g$=G(16);Cw(h,h.g8,A(439));J(h,h.g8,c,10);i=new H;e=h.g$;j=e.data;c=h.g8;k=j.length;if(c>=0&&c<=(k-0|0)){i.g9=L(e.data,0,c);d.g_=1;d.ha=1;d.hc=i;E(d);}d=new I;E4(d);E(d);}h=new Db;e=BF(c);h.hF=(-1);h.hG=c;h.hg=c;h.ic=Cz;h.iz=0;h.h8=e;h.hn=0;h.hg=c;h.jk=1;h.ir=0;h.ic=Df();d=I9(h);}a.kD
=d;d.hg=d.hn;d.hn=0;d.hF=(-1);d=Bx;h=d.hh.createBuffer();k=d.jv;d.jv=k+1|0;Cd(d.jU,k,Ce(h));a.pS=k;a.nJ=!b?35048:35044;},
ABI=(a,b,c)=>{let d=new Ny();ADe(d,a,b,c);return d;},
Yn=a=>{return a.jp;},
AFP=a=>{return a.kD.hg/(a.jp.ja/4|0)|0;},
ADQ=(a,b,c,d)=>{let e,f,g;a.lV=1;e=a.kD;f=null;g=e instanceof EF;if(g)f=e.fW();else if(e instanceof E2)f=e;if(f===null){f=new Bf;f.g_=1;f.ha=1;f.hc=A(440);E(f);}f.hn=0;f.hg=f.hG;f.hF=(-1);Cu(e,0);Op(f,b,c,d);Cu(e,0);if(!g)Dt(e,d);else Dt(e,d<<2);Cu(a.kD,0);Dt(a.kD,d);if(a.l8){e=Bx;f=a.kD;e.c4(34962,f.hg,f,a.nJ);a.lV=0;}},
Xk=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=Bx;d.gj(34962,a.pS);if(a.lV){e=a.kD;d.c4(34962,e.hg,e,a.nJ);a.lV=0;}a:{f=a.jp.it.data.length;if(c!==null){g=0;while(true){if(g>=f)break a;h=c.data;i=a.jp.it.data[g];j=h[g];if(j>=0){e=Bx;if(b.h9){CH(b,b.iO,b.iS);b.h9=0;}e.go(j);k=i.jq;l=i.j1;m=i.ki;n=a.jp.ja;o=i.kr;e=Bx;if(b.h9){CH(b,b.iO,b.iS);b.h9=0;}e.gp(j,k,l,m,n,o);}g=g+1|0;}}g=0;while(g<f){i=a.jp.it.data[g];d=i.j_;e=b.kC;p=(-1);j=EH(e,d);if(j>=0)p=e.i8.data[j];if(p>=0){e=Bx;if(b.h9){CH(b,b.iO,b.iS);b.h9=0;}e.go(p);j
=i.jq;k=i.j1;l=i.ki;m=a.jp.ja;n=i.kr;e=Bx;if(b.h9){CH(b,b.iO,b.iS);b.h9=0;}e.gp(p,j,k,l,m,n);}g=g+1|0;}}a.l8=1;},
TM=(a,b,c)=>{let d,e,f,g,h,i,j,k,l;a:{d=Bx;e=a.jp.it.data.length;if(c!==null){f=0;while(true){if(f>=e)break a;g=c.data[f];if(g>=0){h=Bx;if(b.h9){CH(b,b.iO,b.iS);b.h9=0;}h.gq(g);}f=f+1|0;}}i=0;while(i<e){j=a.jp.it.data[i].j_;k=Bx;if(b.h9){CH(b,b.iO,b.iS);b.h9=0;}l=Bx;h=b.kC;g=(-2);f=EH(h,j);if(f>=0)g=h.i8.data[f];if(g==(-2)){g=l.f_(b.i1,j);D1(b.kC,j,g);}if(g!=(-1))k.gq(g);i=i+1|0;}}d.gj(34962,0);a.l8=0;};
function Il(){let a=this;C.call(a);a.jS=null;a.ka=null;a.oc=0;a.sy=0;a.n2=0;a.lP=0;a.mX=0;a.nt=0;a.jA=null;}
let Jd=null;
let Iq=()=>{Iq=Bz(Il);AKx();};
let V7=(a,b,c,d)=>{let e,f,g,h,i,j;Iq();a.lP=0;a.mX=0;a.nt=(-1);e=new GV;e.no=1;e.jC=S(16);a.jA=e;a.sy=b;a.jS=d;c=CB(d.ja/4|0,c);if(!C$){f=Cb(c);g=f.data.length;d=new Hc;h=0+g|0;d.hF=(-1);d.hG=g;d.hg=g;d.hn=0;d.hg=h;d.l0=0;d.ms=0;d.lF=f;}else{c=c*4|0;if(c<0){d=new Bs;e=new K;e.g$=G(16);Cw(e,e.g8,A(439));J(e,e.g8,c,10);i=new H;f=e.g$;j=f.data;c=e.g8;g=j.length;if(c>=0&&c<=(g-0|0)){i.g9=L(f.data,0,c);d.g_=1;d.ha=1;d.hc=i;E(d);}d=new I;E4(d);E(d);}e=new Db;f=BF(c);e.hF=(-1);e.hG=c;e.hg=c;e.ic=Cz;e.iz=0;e.h8=f;e.hn
=0;e.hg=c;e.jk=1;e.ir=0;e.ic=Df();d=I9(e);}a.ka=d;d.hg=d.hn;d.hn=0;d.hF=(-1);d=Bx;e=d.hh.createBuffer();g=d.jv;d.jv=g+1|0;Cd(d.jU,g,Ce(e));a.oc=g;a.n2=!b?35048:35044;d=Jd;d.hn=0;d.hg=d.hG;d.hF=(-1);En.gr(1,d);d=Jd;c=d.hn;if(c<d.hg){d.hn=c+1|0;a.nt=d.gs(c);return;}d=new JR;d.g_=1;d.ha=1;E(d);},
AAX=(a,b,c)=>{let d=new Il();V7(d,a,b,c);return d;},
T0=a=>{return a.jS;},
ADh=a=>{return (a.ka.hg*4|0)/a.jS.ja|0;},
Ua=(a,b,c,d)=>{let e,f,g;a.lP=1;e=a.ka;f=null;g=e instanceof EF;if(g)f=e.fW();else if(e instanceof E2)f=e;if(f===null){f=new Bf;f.g_=1;f.ha=1;f.hc=A(440);E(f);}f.hn=0;f.hg=f.hG;f.hF=(-1);Cu(e,0);Op(f,b,c,d);Cu(e,0);if(!g)Dt(e,d);else Dt(e,d<<2);Cu(a.ka,0);Dt(a.ka,d);if(a.mX){e=Bx;f=a.ka;e.c4(34962,f.hg,f,a.n2);a.lP=0;}},
AHp=(a,b,c)=>{let d;d=En;d.gt(a.nt);AGG(a,b,c);if(a.lP){d.gj(34962,a.oc);b=a.ka;Dt(b,b.hg);b=a.ka;d.c4(34962,b.hg,b,a.n2);a.lP=0;}a.mX=1;},
AGG=(a,b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p;d=a.jA;e=d.iM;f=!e?0:1;a:{g=a.jS.it.data.length;if(f){if(c===null){e=0;b:{while(true){if(!f)break b;if(e>=g)break b;d=a.jS.it.data[e].j_;h=b.kC;i=(-1);f=EH(h,d);if(f>=0)i=h.i8.data[f];d=a.jA;if(e>=d.iM)break;f=i!=d.jC.data[e]?0:1;e=e+1|0;}h=new I;b=new K;b.g$=G(16);F(b,b.g8,A(76));J(b,b.g8,e,10);F(b,b.g8,A(77));e=d.iM;J(b,b.g8,e,10);d=new H;c=b.g$;j=c.data;f=b.g8;g=j.length;if(f>=0&&f<=(g-0|0)){d.g9=L(c.data,0,f);h.g_=1;h.ha=1;h.hc=d;E(h);}b=new I;Y(b);E(b);}}else
{j=c.data;f=j.length!=e?0:1;i=0;while(true){if(!f)break a;if(i>=g)break a;f=j[i];if(i>=e)break;f=f!=d.jC.data[i]?0:1;i=i+1|0;}h=new I;b=new K;b.g$=G(16);F(b,b.g8,A(76));J(b,b.g8,i,10);F(b,b.g8,A(77));e=d.iM;J(b,b.g8,e,10);d=new H;c=b.g$;j=c.data;f=b.g8;g=j.length;if(f>=0&&f<=(g-0|0)){d.g9=L(c.data,0,f);h.g_=1;h.ha=1;h.hc=d;E(h);}b=new I;Y(b);E(b);}}}c:{if(!f){d:{D0.gj(34962,a.oc);if(a.jA.iM){k=a.jS.it.data.length;e=0;while(true){if(e>=k)break d;d=a.jA;if(e>=d.iM)break;i=d.jC.data[e];if(i>=0){d=Bx;if(b.h9){CH(b,
b.iO,b.iS);b.h9=0;}d.gq(i);}e=e+1|0;}h=new I;b=new K;b.g$=G(16);F(b,b.g8,A(76));J(b,b.g8,e,10);F(b,b.g8,A(77));e=d.iM;J(b,b.g8,e,10);d=new H;c=b.g$;j=c.data;f=b.g8;g=j.length;if(f>=0&&f<=(g-0|0)){d.g9=L(c.data,0,f);h.g_=1;h.ha=1;h.hc=d;E(h);}b=new I;E4(b);E(b);}}a.jA.iM=0;e=0;while(true){if(e>=g)break c;h=a.jS.it.data[e];if(c!==null){j=c.data;ND(a.jA,j[e]);}else{l=a.jA;m=h.j_;d=b.kC;i=(-1);f=EH(d,m);if(f>=0)i=d.i8.data[f];ND(l,i);}d=a.jA;if(e>=d.iM){h=new I;b=new K;b.g$=G(16);F(b,b.g8,A(76));J(b,b.g8,e,10);F(b,
b.g8,A(77));e=d.iM;J(b,b.g8,e,10);d=new H;c=b.g$;j=c.data;f=b.g8;g=j.length;if(f>=0&&f<=(g-0|0)){d.g9=L(c.data,0,f);h.g_=1;h.ha=1;h.hc=d;E(h);}b=new I;Y(b);E(b);}n=d.jC.data[e];if(n>=0){d=Bx;if(b.h9){CH(b,b.iO,b.iS);b.h9=0;}d.go(n);f=h.jq;i=h.j1;k=h.ki;o=a.jS.ja;p=h.kr;d=Bx;if(b.h9){CH(b,b.iO,b.iS);b.h9=0;}d.gp(n,f,i,k,o,p);}e=e+1|0;}}}},
WF=(a,b,c)=>{En.gt(0);a.mX=0;},
AKx=()=>{let b,c,d,e;if(!C$){b=S(1);c=b.data.length;d=new EK;e=0+c|0;d.hF=(-1);d.hG=c;d.hg=c;d.hn=0;d.hg=e;d.kA=0;d.ll=0;d.kn=b;}else{d=new Db;b=BF(4);d.hF=(-1);d.hG=4;d.hg=4;d.ic=Cz;d.iz=0;d.h8=b;d.hn=0;d.hg=4;d.jk=1;d.ir=0;d.ic=Df();d=Fd(d);}Jd=d;};
let Gr=D(DG);
let AL4=(a,b)=>{Cu(a,b);return a;},
AK4=(a,b)=>{Cu(a,b);return a;};
let Dv=D(0);
function Db(){let a=this;EF.call(a);a.jk=0;a.ir=0;}
let AKn=a=>{let b,c,d,e,f,g;b=a.hg;c=a.hn;d=(b-c|0)/2|0;if(a.ic!==Cz){e=new KX;f=a.iz+c|0;c=a.ir;e.hF=(-1);e.hG=d;e.hg=d;e.hn=0;e.hg=d;e.mw=f;e.lh=a;e.o_=c;return e;}e=new Ms;b=a.iz+c|0;g=a.ir;e.hF=(-1);e.hG=d;e.hg=d;e.hn=0;e.hg=d;e.mw=b;e.lh=a;e.o_=g;return e;},
Fd=a=>{let b,c,d,e,f,g;b=a.hg;c=a.hn;d=(b-c|0)/4|0;if(a.ic!==Cz){e=new Lh;f=a.iz+c|0;c=a.ir;e.hF=(-1);e.hG=d;e.hg=d;e.hn=0;e.hg=d;e.kQ=f;e.kP=a;e.nT=c;return e;}e=new On;b=a.iz+c|0;g=a.ir;e.hF=(-1);e.hG=d;e.hg=d;e.hn=0;e.hg=d;e.kQ=b;e.kP=a;e.nT=g;return e;},
I9=a=>{let b,c,d,e,f,g;b=a.hg;c=a.hn;d=(b-c|0)/4|0;if(a.ic!==Hp){e=new K6;f=a.iz+c|0;c=a.ir;e.hF=(-1);e.hG=d;e.hg=d;e.hn=0;e.hg=d;e.kI=f;e.kd=a;e.ot=c;return e;}e=new M9;b=a.iz+c|0;g=a.ir;e.hF=(-1);e.hG=d;e.hg=d;e.hn=0;e.hg=d;e.kI=b;e.kd=a;e.ot=g;return e;};
let ACI=D();
let FH=D(Gn);
let AL9=a=>{let b,c;b=a.hn;if(b<a.hg){a.hn=b+1|0;return a.gs(b);}c=new JR;c.g_=1;c.ha=1;E(c);},
Dh=(a,b)=>{let c,d;if(a.gk()){c=new Hr;c.g_=1;c.ha=1;E(c);}d=a.hn;if(d<a.hg){a.hn=d+1|0;a.gw(d,b);return a;}c=new Iz;c.g_=1;c.ha=1;E(c);},
DR=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.hg)return a.gs(b);c=new I;d=a.hg;e=new K;e.g$=G(16);F(e,e.g8,A(441));J(e,e.g8,b,10);F(e,e.g8,A(432));J(e,e.g8,d,10);d=e.g8;Bn(e,d,d+1|0);f=e.g$;g=f.data;g[d]=41;h=new H;d=e.g8;i=g.length;if(d>=0&&d<=(i-0|0)){h.g9=L(f.data,0,d);c.g_=1;c.ha=1;c.hc=h;E(c);}c=new I;c.g_=1;c.ha=1;Bl(c);E(c);},
Qs=(a,b,c)=>{let d,e,f,g,h,i;if(a.gk()){d=new Hr;d.g_=1;d.ha=1;E(d);}if(b>=0&&b<a.hg){a.gw(b,c);return a;}d=new I;c=a.hg;e=new K;e.g$=G(16);F(e,e.g8,A(441));J(e,e.g8,b,10);F(e,e.g8,A(432));J(e,e.g8,c,10);c=e.g8;Bn(e,c,c+1|0);f=e.g$;g=f.data;g[c]=41;h=new H;c=e.g8;i=g.length;if(c>=0&&c<=(i-0|0)){h.g9=L(f.data,0,c);d.g_=1;d.ha=1;d.hc=h;E(d);}d=new I;d.g_=1;d.ha=1;Bl(d);E(d);},
ALM=a=>{return a.gk();};
function EK(){let a=this;FH.call(a);a.ll=0;a.kA=0;a.kn=null;}
let ADK=(a,b)=>{return a.kn.data[b+a.kA|0];},
ABL=(a,b,c)=>{a.kn.data[b+a.kA|0]=c;},
RJ=a=>{return a.ll;};
let Fy=D(E2);
let AAf=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.hg)return a.gx(b);c=new I;d=a.hg;e=new K;e.g$=G(16);F(e,e.g8,A(441));J(e,e.g8,b,10);F(e,e.g8,A(432));J(e,e.g8,d,10);d=e.g8;Bn(e,d,d+1|0);f=e.g$;g=f.data;g[d]=41;h=new H;d=e.g8;i=g.length;if(d>=0&&d<=(i-0|0)){h.g9=L(f.data,0,d);c.g_=1;c.ha=1;c.hc=h;E(c);}c=new I;c.g_=1;c.ha=1;Bl(c);E(c);},
ALf=a=>{return a.gk();};
function Hc(){let a=this;Fy.call(a);a.ms=0;a.l0=0;a.lF=null;}
let AE0=(a,b)=>{return a.lF.data[b+a.l0|0];},
ADY=(a,b,c)=>{a.lF.data[b+a.l0|0]=c;},
AEg=a=>{return a.ms;};
let F7=D(Gr);
let AFB=(a,b)=>{let c,d,e,f,g,h,i;if(b>=0&&b<a.hg)return a.gy(b);c=new I;d=a.hg;e=new K;e.g$=G(16);F(e,e.g8,A(441));J(e,e.g8,b,10);F(e,e.g8,A(432));J(e,e.g8,d,10);d=e.g8;Bn(e,d,d+1|0);f=e.g$;g=f.data;g[d]=41;h=new H;d=e.g8;i=g.length;if(d>=0&&d<=(i-0|0)){h.g9=L(f.data,0,d);c.g_=1;c.ha=1;c.hc=h;E(c);}c=new I;c.g_=1;c.ha=1;Bl(c);E(c);};
function Qz(){let a=this;F7.call(a);a.q4=0;a.qj=0;a.pr=null;}
let X7=(a,b)=>{return a.pr.data[b+a.qj|0];};
function F2(){let a=this;FH.call(a);a.kP=null;a.nT=0;a.kQ=0;}
let ABf=a=>{return a.nT;};
let Lh=D(F2);
let X0=(a,b)=>{let c;c=a.kP.h8.data;b=a.kQ+(b*4|0)|0;return c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24;},
RI=(a,b,c)=>{let d;d=a.kP.h8.data;b=a.kQ+(b*4|0)|0;d[b]=c<<24>>24;d[b+1|0]=c>>8<<24>>24;d[b+2|0]=c>>16<<24>>24;d[b+3|0]=c>>24<<24>>24;};
let On=D(F2);
let AHn=(a,b)=>{let c;c=a.kP.h8.data;b=a.kQ+(b*4|0)|0;return (c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255;},
TN=(a,b,c)=>{let d;d=a.kP.h8.data;b=a.kQ+(b*4|0)|0;d[b]=c>>24<<24>>24;d[b+1|0]=c>>16<<24>>24;d[b+2|0]=c>>8<<24>>24;d[b+3|0]=c<<24>>24;};
function FA(){let a=this;Fy.call(a);a.kd=null;a.ot=0;a.kI=0;}
let AEs=a=>{return a.ot;},
AFy=a=>{return a.kd.h8.data;};
let K6=D(FA);
let ABo=(a,b)=>{let c;c=a.kd.h8.data;b=a.kI+(b*4|0)|0;return Ig((c[b]&255)<<24|(c[b+1|0]&255)<<16|(c[b+2|0]&255)<<8|c[b+3|0]&255);},
AFs=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:Im(c);e=a.kd.h8.data;b=a.kI+(b*4|0)|0;e[b]=d>>24<<24>>24;e[b+1|0]=d>>16<<24>>24;e[b+2|0]=d>>8<<24>>24;e[b+3|0]=d<<24>>24;};
let M9=D(FA);
let RT=(a,b)=>{let c;c=a.kd.h8.data;b=a.kI+(b*4|0)|0;return Ig(c[b]&255|(c[b+1|0]&255)<<8|(c[b+2|0]&255)<<16|(c[b+3|0]&255)<<24);},
ABc=(a,b,c)=>{let d,e;d=(isNaN(c)?1:0)?2143289344:Im(c);e=a.kd.h8.data;b=a.kI+(b*4|0)|0;e[b]=d<<24>>24;e[b+1|0]=d>>8<<24>>24;e[b+2|0]=d>>16<<24>>24;e[b+3|0]=d>>24<<24>>24;};
let Ir=D(BA);
let Hr=D(Ir);
let JR=D(BA);
let PQ=D();
let M3=null;
let J9=()=>{J9=Bz(PQ);SR();};
let ABm=(b,c,d,e)=>{J9();a:{b:{if(M3===Jr){if(Cl.h7.width!=Cl.h7.width)break b;if(Cl.h7.height!=Cl.h7.height)break b;}D0.b1(b,c,d,e);break a;}D0.b1(CB(b,Cl.h7.width)/Cl.h7.width|0,CB(c,Cl.h7.height)/Cl.h7.height|0,CB(d,Cl.h7.width)/Cl.h7.width|0,CB(e,Cl.h7.height)/Cl.h7.height|0);}},
SR=()=>{M3=Jr;};
let AI5=D();
let JP=null,I7=null,JH=null,Iy=null;
let RM=b=>{let c,d;b=b*0.6366197466850281;c=(Mb(b)|0)&(-2);b=b-c;d=b*b;return (11.0*b-3.0*b*d)/(7.0+d)*(1-(c&2)|0);},
AAo=()=>{let b,c,d,e,f;JP=Cb(16385);I7=ABN(16385);JH=Cb(16385);Iy=ABN(16385);b=0;while(b<16384){c=b/16384.0*6.283185307179586;d=JP.data;e=I7.data;f=Qe(c);e[b]=f;d[b]=f;d=JH.data;e=Iy.data;c=Tp(c);e[b]=c;d[b]=c;b=b+1|0;}e=JP.data;e[0]=0.0;e[16384]=0.0;e[4096]=1.0;e[8192]=0.0;e[12288]=(-1.0);e=I7.data;e[0]=0.0;e[16384]=0.0;e[4096]=1.0;e[8192]=0.0;e[12288]=(-1.0);e=JH.data;e[0]=1.0;e[16384]=1.0;e[4096]=0.0;e[8192]=(-1.0);e[12288]=0.0;e=Iy.data;e[0]=1.0;e[16384]=1.0;e[4096]=0.0;e[8192]=(-1.0);e[12288]=0.0;};
let XX=D();
function Fq(){let a=this;F7.call(a);a.lh=null;a.o_=0;a.mw=0;}
let AF0=a=>{return a.lh.h8.data;};
let KX=D(Fq);
let VR=(a,b)=>{let c;c=a.lh.h8.data;b=a.mw+(b*2|0)|0;return (c[b]&255|(c[b+1|0]&255)<<8)<<16>>16;};
let Ms=D(Fq);
let ADx=(a,b)=>{let c;c=a.lh.h8.data;b=a.mw+(b*2|0)|0;return ((c[b]&255)<<8|c[b+1|0]&255)<<16>>16;};
let G2=D(BR);
let Jr=null,ACh=null,WS=null;
let Ui=()=>{let b,c;b=new G2;b.hx=A(442);b.hm=0;Jr=b;c=new G2;c.hx=A(443);c.hm=1;ACh=c;WS=P(G2,[b,c]);};
let WW=D();
let IR=0,GO=null,GK=null;
let ACR=(b,c)=>{let d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s;d=(isNaN(b)?1:0)?2143289344:Im(b);c.o0=!(d&(-2147483648))?0:1;e=d&8388607;f=d>>23&255;if(!e&&!f){c.nB=0;c.nr=0;return;}if(f)d=e|8388608;else{d=e<<1;while(C6(Ci(O(d),O(8388608)),BM)){d=d<<1;f=f+(-1)|0;}}g=GK;h=AEv(g,0,g.data.length,f);if(h<0)h= -h|0;g=GK.data;e=h+1|0;i=9+(f-g[e]|0)|0;e=GO.data[e];j=Ci(O(d),B(4294967295, 0));k=Bd(X(U(j,Ci(O(e),B(4294967295, 0))),32-i|0));if(k<IR){while(DN(k,IR)<=0){h=h+(-1)|0;k=(k*10|0)+9|0;}g=GK.data;e=h+1|0;i=9+(f-g[e]|0)|
0;k=Bd(X(U(j,Ci(O(GO.data[e]),B(4294967295, 0))),32-i|0));}d=d<<1;l=d+1|0;g=GO.data;f=h+1|0;e=g[f];m=i-1|0;n=U(Ci(O(l),B(4294967295, 0)),Ci(O(e),B(4294967295, 0)));e=32-m|0;o=Bd(X(n,e));p=Bd(X(U(Ci(O(d-1|0),B(4294967295, 0)),Ci(O(g[f]),B(4294967295, 0))),e));q=1;while(true){r=q*10|0;if(DN(C8(k,r),C8(p,r))<=0)break;q=r;}m=1;while(true){l=m*10|0;if(DN(C8(k,l),C8(o,l))>=0)break;m=l;}s=DN(q,m);d=s>0?CB(C8(k,q),q):s<0?CB(C8(k,m),m)+m|0:CB(C8((k+(m/2|0)|0),m),m);if(DU(O(d),O(1000000000))>=0)while(true){h=h+1|0;d=
C8(d,10);if(DN(d,1000000000)<0)break;}else if(DN(d,100000000)<0){h=h+(-1)|0;d=d*10|0;}c.nB=d;c.nr=h-50|0;},
Xl=()=>{IR=C8((-1),10);GO=Gk([(-18543760),(-873828468),(-1558056233),(-2105438446),(-791721136),(-1492370368),(-2052889754),(-707643228),(-1425108042),(-1999079893),(-621547450),(-1356231419),(-1943978595),(-533385374),(-1285701758),(-1887554866),(-443107408),(-1213479385),(-1829776968),(-350662770),(-1139523676),(-1770612400),(-255999462),(-1063793029),(-1710027882),(-159064234),(-986244846),(-1647989336),(-59802560),(-906835507),(-1584461865),(-2126562952),(-825520345),(-1519409735),(-2074521247),(-742253618),
(-1452796353),(-2021230542),(-656988489),(-1384584251),(-1966660860),(-569676998),(-1314735058),(-1910781505),(-480270031),(-1243209484),(-1853561046),(-388717296),(-1169967296),(-1794967296),(-294967296),(-1094967296),(-1734967296),(-198967296),(-1018167296),(-1673527296),(-100663296),(-939524096),(-1610612736),(-2147483648),(-858993460),(-1546188227),(-2095944041),(-776530088),(-1480217529),(-2043167483),(-692087595),(-1412663535),(-1989124287),(-605618482),(-1343488245),(-1933784055),(-517074110),(-1272652747),
(-1877115657),(-426404674),(-1200117198),(-1819087218),(-333559171),(-1125840796),(-1759666096),(-238485376),(-1049781760),(-1698818867),(-141129810),(-971897307),(-1636511305),(-41437710),(-892143627),(-1572708361),(-2117160148),(-810475859),(-1507374147),(-2064892777),(-726848065),(-1440471911),(-2011370988),(-641213203),(-1371964022),(-1956564688)]);GK=Gk([(-37),(-34),(-31),(-28),(-24),(-21),(-18),(-14),(-11),(-8),(-4),(-1),2,6,9,12,16,19,22,26,29,32,36,39,42,46,49,52,56,59,62,65,69,72,75,79,82,85,89,92,
95,99,102,105,109,112,115,119,122,125,129,132,135,139,142,145,149,152,155,158,162,165,168,172,175,178,182,185,188,192,195,198,202,205,208,212,215,218,222,225,228,232,235,238,242,245,248,252,255,258,261,265,268,271,275,278,281,285,288,291]);};
let AFd=D(0);
let Iz=D(BA);
function JA(){let a=this;C.call(a);a.k4=null;a.jz=null;}
let AHY=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.k4.readyState==4){if(a.k4.status==200){if(a.jz.jl.iG){if(BH===null){b=new Ck;c=new B5;c.h$=BF(32);b.ik=c;c=new K;BB(c);c.g$=G(16);b.ia=c;b.h_=G(32);b.ie=0;b.ig=BX;BH=b;}b=a.jz.jg;c=new K;c.g$=G(16);F(c,c.g8,A(444));d=c.g8;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.g$;f=e.data;g
=c.g8;h=f.length;if(g>=0&&g<=(h-0|0)){b.g9=L(e.data,0,g);BI(Br(b));BI("\n");}else{b=new I;b.g_=1;b.ha=1;Bl(b);E(b);}}b=a.jz;b.ju.gB(b.jg,V(a.k4.responseText));}else if(a.k4.status!=404&&a.k4.status!=403){try{i=O(100);$p=1;continue _;}catch($$e){$$je=BP($$e);if($$je instanceof CT){}else{throw $$e;}}b=a.jz;c=b.jl;d=b.kj;j=b.jg;b=b.ju;if(c.iG){if(BH===null){k=new Ck;l=new B5;l.h$=BF(32);BB(k);k.ik=l;l=new K;Dp(l,16);k.ia=l;k.h_=G(32);k.ie=0;k.ig=BX;BH=k;}k=new K;k.g$=G(16);F(k,k.g8,A(71));F(k,k.g8,j===null?A(2)
:j);l=new H;e=k.g$;f=e.data;h=k.g8;m=f.length;if(h>=0&&h<=(m-0|0)){l.g9=L(e.data,0,h);BI(Br(l));BI("\n");}else{b=new I;Y(b);E(b);}}c.hN=c.hN+1|0;k=new Fh;k.jl=c;k.kj=d;k.jg=j;k.ju=b;b=null;c=null;k.iP=new C;k.iN=1;k.jd=c;k.jt=b;g=B9;B9=g+1|0;k.jr=O(g);b=new Dj;b.je=k;Dz(b);}else{b=a.jz;b.ju.gC(b.jg);}b=a.jz.jl;b.hN=b.hN-1|0;}return;case 1:a:{try{Id(i);if(Ee()){break _;}break a;}catch($$e){$$je=BP($$e);if($$je instanceof CT){}else{throw $$e;}}}b=a.jz;c=b.jl;d=b.kj;j=b.jg;b=b.ju;if(c.iG){if(BH===null){k=new Ck;l
=new B5;l.h$=BF(32);BB(k);k.ik=l;l=new K;Dp(l,16);k.ia=l;k.h_=G(32);k.ie=0;k.ig=BX;BH=k;}k=new K;k.g$=G(16);F(k,k.g8,A(71));F(k,k.g8,j===null?A(2):j);l=new H;e=k.g$;f=e.data;h=k.g8;m=f.length;if(h>=0&&h<=(m-0|0)){l.g9=L(e.data,0,h);BI(Br(l));BI("\n");}else{b=new I;Y(b);E(b);}}c.hN=c.hN+1|0;k=new Fh;k.jl=c;k.kj=d;k.jg=j;k.ju=b;b=null;c=null;k.iP=new C;k.iN=1;k.jd=c;k.jt=b;g=B9;B9=g+1|0;k.jr=O(g);b=new Dj;b.je=k;Dz(b);b=a.jz.jl;b.hN=b.hN-1|0;return;default:D9();}}Cq().s(a,b,c,d,e,f,g,h,i,j,k,l,m,$p);},
Zl=(a,b)=>{let $p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:AHY(a,b);if(Ee()){break _;}return;default:D9();}}Cq().s(a,b,$p);};
function Oa(){let a=this;C.call(a);a.k9=0;a.kV=0;a.i7=0;a.mk=BM;a.nF=null;a.pe=null;a.qJ=BM;a.o6=null;}
function MJ(){let a=this;CM.call(a);a.iW=null;a.sD=null;}
function MH(){let a=this;CM.call(a);a.i0=null;a.lX=null;a.lH=null;a.lO=null;}
let TZ=(a,b)=>{a.i0.iW.mk=C7(b);},
R0=(a,b)=>{b=a.i0.iW;b.kV=1;b.i7=0;},
AB9=(a,b,c)=>{Fg(a.lO,a.lX,a.lH,c);b=a.i0.iW;b.k9=1;b.i7=0;return 0;};
let WZ=D();
let MG=D();
let AKo=(a,b)=>{b=a.di(b);Bp();return b===null?null:b instanceof E0()&&b instanceof DD?(b[Be]===true?b:b.hA):b;},
Va=a=>{return a.dn();};
let ADB=D();
let KQ=D();
let PN=null;
let JL=()=>{JL=Bz(KQ);ABK();};
let ABK=()=>{let b,c;b=S((J_.p()).data.length);c=b.data;PN=b;c[Eq.hm]=1;c[Ej.hm]=2;c[Ea.hm]=3;c[D6.hm]=4;c[Hi.hm]=5;};
function Ey(){let a=this;EV.call(a);a.jQ=0;a.i5=null;a.ji=null;a.i6=null;}
let U0=a=>{let b,c,d,e,f;b=new XMLHttpRequest();c=new HR;c.jR=a;c.kJ=b;c=BL(c,"handleEvent");b.onreadystatechange=c;c=a.i6;d=a.ji;e=new Fi;e.on=c;e.mb=d;c=BL(e,"handleEvent");b.onprogress=c;d=a.i5;f=a.jQ;b.open("GET",Br(d),!!f);if(a.jQ){d="arraybuffer";b.responseType=d;}b.send();};
function KO(){let a=this;CM.call(a);a.mu=null;a.si=null;}
let U4=(a,b)=>{a.mu.i0.iW.mk=C7(b);},
ACL=(a,b)=>{b=a.mu.i0.iW;b.kV=1;b.i7=0;},
TJ=(a,b,c)=>{c=a.mu;b=null;Fg(c.lO,c.lX,c.lH,b);b=c.i0.iW;b.k9=1;b.i7=0;return 0;};
function KP(){let a=this;CM.call(a);a.ls=null;a.pn=null;a.qR=null;a.l6=null;}
let Ye=(a,b)=>{a.ls.i0.iW.mk=C7(b);},
Sz=(a,b)=>{b=a.ls.i0.iW;b.kV=1;b.i7=0;},
SD=(a,b,c)=>{let d,e,f,g,h,i,j;d=window.document.createElement("img");e=a.pn;if(e!==null)d.setAttribute("crossOrigin",Br(e));a:{e=a.l6;e.hN=e.hN+1|0;e=new Ic;e.mL=a;e.sF=b;e.qv=c;e.oV=d;d.addEventListener("load",BL(e,"handleEvent"),!!0);d.addEventListener("error",BL(e,"handleEvent"),!!0);if(!a.l6.qX){b=Br(b);d.src=b;}else{b=a.qR;c=AFX(c);e=new K;e.g$=G(16);F(e,e.g8,A(445));f=e.g8;if(b===null)b=A(2);F(e,f,b);F(e,e.g8,A(446));f=e.g8;if(c===null)c=A(2);F(e,f,c);b=new H;g=e.g$;h=g.data;i=e.g8;j=h.length;if(i<0)break a;if
(i>(j-0|0))break a;b.g9=L(g.data,0,i);b=Br(b);d.src=b;}return 0;}b=new I;b.g_=1;b.ha=1;Bl(b);E(b);},
YV=(a,b,c)=>{return SD(a,b,c);};
function HR(){let a=this;C.call(a);a.kJ=null;a.jR=null;}
let ABQ=(a,b)=>{let c,d,e,f,g,h,i,j,k,l,m,$$je,$p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();m=$T.l();l=$T.l();k=$T.l();j=$T.l();i=$T.l();h=$T.l();g=$T.l();f=$T.l();e=$T.l();d=$T.l();c=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:if(a.kJ.readyState==4){if(a.kJ.status==200){if(a.jR.i6.iG){if(BH===null){b=new Ck;c=new B5;c.h$=BF(32);b.ik=c;c=new K;BB(c);c.g$=G(16);b.ia=c;b.h_=G(32);b.ie=0;b.ig=BX;BH=b;}b=a.jR.i5;c=new K;c.g$=G(16);F(c,c.g8,A(444));d=c.g8;if(b===null)b=A(2);F(c,d,b);b=new H;e=c.g$;f=e.data;g
=c.g8;h=f.length;if(g>=0&&g<=(h-0|0)){b.g9=L(e.data,0,g);BI(Br(b));BI("\n");}else{b=new I;b.g_=1;b.ha=1;Bl(b);E(b);}}i=a.kJ.response;j=new Int8Array(i);b=a.jR;c=b.ji;k=b.i5;b=new Gd;b.jm=j;b.n7=i;c.gB(k,b);}else if(a.kJ.status!=404&&a.kJ.status!=403){try{l=O(100);$p=1;continue _;}catch($$e){$$je=BP($$e);if($$je instanceof CT){}else{throw $$e;}}b=a.jR;c=b.i6;d=b.jQ;k=b.i5;b=b.ji;if(c.iG){if(BH===null){i=new Ck;j=new B5;j.h$=BF(32);BB(i);i.ik=j;j=new K;Dp(j,16);i.ia=j;i.h_=G(32);i.ie=0;i.ig=BX;BH=i;}i=new K;i.g$
=G(16);F(i,i.g8,A(71));F(i,i.g8,k===null?A(2):k);j=new H;e=i.g$;f=e.data;h=i.g8;m=f.length;if(h>=0&&h<=(m-0|0)){j.g9=L(e.data,0,h);BI(Br(j));BI("\n");}else{b=new I;Y(b);E(b);}}c.hN=c.hN+1|0;i=new Ey;i.i6=c;i.jQ=d;i.i5=k;i.ji=b;b=null;c=null;i.iP=new C;i.iN=1;i.jd=c;i.jt=b;g=B9;B9=g+1|0;i.jr=O(g);b=new Dj;b.je=i;Dz(b);}else{b=a.jR;b.ji.gC(b.i5);}b=a.jR.i6;b.hN=b.hN-1|0;}return;case 1:a:{try{Id(l);if(Ee()){break _;}break a;}catch($$e){$$je=BP($$e);if($$je instanceof CT){}else{throw $$e;}}}b=a.jR;c=b.i6;d=b.jQ;k
=b.i5;b=b.ji;if(c.iG){if(BH===null){i=new Ck;j=new B5;j.h$=BF(32);BB(i);i.ik=j;j=new K;Dp(j,16);i.ia=j;i.h_=G(32);i.ie=0;i.ig=BX;BH=i;}i=new K;i.g$=G(16);F(i,i.g8,A(71));F(i,i.g8,k===null?A(2):k);j=new H;e=i.g$;f=e.data;h=i.g8;m=f.length;if(h>=0&&h<=(m-0|0)){j.g9=L(e.data,0,h);BI(Br(j));BI("\n");}else{b=new I;Y(b);E(b);}}c.hN=c.hN+1|0;i=new Ey;i.i6=c;i.jQ=d;i.i5=k;i.ji=b;b=null;c=null;i.iP=new C;i.iN=1;i.jd=c;i.jt=b;g=B9;B9=g+1|0;i.jr=O(g);b=new Dj;b.je=i;Dz(b);b=a.jR.i6;b.hN=b.hN-1|0;return;default:D9();}}Cq().s(a,
b,c,d,e,f,g,h,i,j,k,l,m,$p);},
AJC=(a,b)=>{let $p,$z;$p=0;if(Eg()){let $T=Cq();$p=$T.l();b=$T.l();a=$T.l();}_:while(true){switch($p){case 0:$p=1;case 1:ABQ(a,b);if(Ee()){break _;}return;default:D9();}}Cq().s(a,b,$p);};
function Ic(){let a=this;C.call(a);a.sF=null;a.qv=null;a.oV=null;a.mL=null;}
let YB=(a,b)=>{let c,d;c=V(b.type);if(c===A(447))d=1;else if(!(A(447) instanceof H))d=0;else{b=A(447);d=c.g9!==b.g9?0:1;}if(d){b=a.mL.ls.i0.iW;b.kV=1;b.i7=0;}else{b=a.qv;b.qg=a.oV;c=a.mL.ls;Fg(c.lO,c.lX,c.lH,b);b=c.i0.iW;b.k9=1;b.i7=0;}b=a.mL.l6;b.hN=b.hN-1|0;},
Xd=(a,b)=>{YB(a,b);};
AK5([-1,"com",0,"badlogic",1,"gdx",2,"utils",3,"reflect",2,"scenes",5,"scene2d",6,"ui",2,"graphics",8,"g2d",-1,"java",10,"util",11,"regex",10,"nio",13,"charset",10,"lang"]);
Co([C,0,0,[],0,3,0,0,["W",W(V9),"X",N(ACg),"bj",W(LP)],AHJ,0,C,[],0,3,0,0,0,KG,0,C,[],0,3,0,Oh,0,Kv,0,C,[],3,3,0,0,0,FU,0,C,[Kv],0,3,0,0,0,CW,0,C,[],3,3,0,0,0,AHo,0,FU,[CW],0,3,0,0,0,DO,0,C,[],3,3,0,0,0,Em,0,C,[DO],0,3,0,0,0,CF,0,C,[],3,3,0,0,0,BN,0,C,[],3,3,0,0,0,BR,0,C,[CF,BN],1,3,0,0,["bj",W(Y1)],Fz,0,BR,[],12,3,0,0,0,Es,0,C,[],0,3,0,0,0,I8,0,C,[],3,3,0,0,0,Iv,0,Es,[I8],0,3,0,0,0,EM,0,C,[],3,3,0,0,0,C1,0,C,[],3,3,0,0,0,Ff,0,C,[EM,C1],0,3,0,0,0,E1,0,C,[],3,3,0,0,0,BJ,0,C,[E1],0,3,0,0,0,Fw,0,BJ,[],0,3,0,0,
0,AEx,0,Fw,[],0,0,0,0,0,Ha,0,BR,[],12,3,0,0,0,JQ,0,C,[],3,3,0,0,0,GC,0,C,[JQ],3,3,0,0,0,EY,0,C,[],3,3,0,0,0,CK,0,C,[EY],1,3,0,0,0,AGZ,0,CK,[],0,0,0,0,0,JE,0,Ff,[],0,3,0,0,0,Jk,0,C,[E1],0,3,0,0,0,WJ,0,C,[],1,3,0,0,0,Sb,0,C,[],0,3,0,0,0,Q2,0,C,[],3,3,0,0,0,IE,0,C,[Q2],0,3,0,0,0,AD2,0,IE,[],0,0,0,0,0,ZT,0,Em,[],0,3,0,0,0,M$,0,C,[],32,0,0,Rk,0,ACd,0,C,[],1,3,0,0,0,OJ,0,C,[],32,0,0,NJ,0,AGY,0,CK,[],0,0,0,0,0,D7,0,C,[JQ],0,3,0,0,0,OF,0,D7,[GC],0,3,0,0,0,Q9,0,C,[],4,3,0,Py,0,IP,0,C,[E1],1,3,0,0,0,AJf,0,Fw,[],0,3,0,
0,0,XU,0,C,[],0,3,0,0,0,P1,0,C,[],0,3,0,QA,0,JI,0,C,[E1],1,3,0,0,0,Gt,0,D7,[GC],0,3,0,0,0]);
Co([QV,0,D7,[GC],0,3,0,0,0,C9,0,BJ,[],0,3,0,0,0,QO,0,Gt,[],0,3,0,0,0,VA,0,Em,[],0,3,0,0,0,HQ,0,C,[],3,3,0,0,0,ABB,0,Em,[],0,3,0,0,0,Y8,0,C,[DO],4,3,0,0,0,Kn,0,C,[],32,0,0,NZ,0,CP,0,BR,[],12,3,0,0,0,BS,0,C,[DO],1,3,0,0,0,DJ,0,BS,[],1,3,0,0,0,Zx,0,DJ,[],0,3,0,0,0,ADH,0,DJ,[],0,3,0,0,0,Cg,0,BS,[],1,3,0,0,0,DB,0,Cg,[],1,3,0,0,0,Sx,0,DB,[],0,3,0,0,0,Uz,0,C,[E1],0,0,0,0,0,Kb,0,BS,[],0,3,0,0,0,VN,0,Kb,[],0,3,0,0,0,XL,0,BS,[],0,3,0,0,0,ABq,0,BS,[],0,3,0,0,0,AFC,0,BS,[],0,3,0,0,0,AGc,0,C,[],0,3,0,0,0,IJ,0,BS,[],1,3,
0,0,0,AAQ,0,IJ,[],0,3,0,0,0,Wn,0,Cg,[],0,3,0,0,0,AGT,0,Cg,[],0,3,0,0,0,AHr,0,DB,[],0,3,0,0,0,AEl,0,BS,[],0,3,0,0,0,AEL,0,DB,[],0,3,0,0,0,AIT,0,Cg,[],0,3,0,0,0,AIi,0,Cg,[],0,3,0,0,0,Yi,0,BS,[],0,3,0,0,0,AAr,0,Cg,[],0,3,0,0,0,AAE,0,BS,[],0,3,0,0,0,YH,0,BS,[],0,3,0,0,0,AAT,0,DJ,[],0,3,0,0,0,Ti,0,Cg,[],0,3,0,0,0,AI3,0,BS,[],0,3,0,0,0,ADV,0,DB,[],0,3,0,0,0,Yu,0,DJ,[],0,3,0,0,0,ADb,0,BS,[],0,3,0,0,0,UA,0,Cg,[],0,3,0,0,0,Z3,0,Cg,[],0,3,0,0,0,Vv,0,C,[CW],0,3,0,0,0,Cp,0,Iv,[HQ],0,3,0,0,0,DM,0,Cp,[],0,3,0,MM,0,Ew,0,DM,
[EM],0,3,0,0,0,Iu,0,Ew,[],0,3,0,0,0,Wg,0,Iu,[],0,3,0,0,0]);
Co([AGV,0,BJ,[],0,0,0,0,0,Jj,0,Cp,[],0,3,0,0,0,NO,0,C,[],3,3,0,0,0,Dw,0,C,[NO],1,3,0,0,0,X_,0,Dw,[],0,0,0,0,0,Cx,0,Es,[HQ],0,3,0,0,0,TB,0,Cx,[],0,3,0,0,0,AGU,0,BJ,[],0,0,0,0,0,BK,0,C,[],1,3,0,Gb,0,OO,0,BK,[],0,0,0,0,0,AD4,0,BK,[],0,0,0,0,0,HL,0,C9,[],0,3,0,0,0,AAJ,0,HL,[],0,3,0,0,0,QR,0,BK,[],0,0,0,0,0,AIJ,0,BJ,[],0,0,0,0,0,I1,0,DM,[],0,3,0,0,0,AD5,0,BK,[],0,0,0,0,0,EL,0,C,[],3,3,0,0,0,DW,0,C,[BN,EL],0,3,0,0,0,C5,"Table$DebugRect",7,DW,[],0,3,0,Q$,0,Yd,0,Dw,[],0,0,0,0,0,Ju,0,Cx,[EM],0,3,0,0,0,Wv,0,Ju,[],0,3,
0,0,0,Z7,0,BJ,[],0,0,0,0,0,Mh,0,C,[],3,3,0,0,0,AFH,0,C,[Mh],0,3,0,0,0,ER,0,C,[],0,3,0,0,0,E8,0,ER,[],0,3,0,0,0,Pt,0,E8,[],0,3,0,0,0,Jz,0,Cx,[EM],0,3,0,0,0,Zh,0,Jz,[],0,3,0,0,0,AKk,0,Jj,[],0,0,0,0,0,HS,0,Cp,[],0,3,0,0,0,AKX,0,Ew,[],0,3,0,0,0,JU,0,Cx,[I8],0,3,0,0,0,QP,0,BK,[],0,0,0,0,0,PY,0,C,[],0,3,0,0,0,YD,0,C,[EY],0,0,0,0,0,AAM,0,BJ,[],0,0,0,0,0,ACm,0,CK,[],0,0,0,0,0,ZB,0,C,[],0,3,0,0,0,AFg,0,BJ,[],0,0,0,0,0,AJ3,0,C9,[],0,0,0,0,0,Z5,0,Jk,[],0,0,0,0,0,OK,0,BK,[],0,0,0,0,0,ON,0,BK,[],0,0,0,0,0,Ol,0,C,[],3,3,
0,0,0,Hl,0,C,[],0,3,0,0,0,K9,0,Hl,[],0,3,0,0,0,Ya,0,Dw,[],0,0,0,0,0]);
Co([AGS,0,IP,[],0,0,0,0,0,AGW,0,JI,[],0,0,0,0,0,AIK,0,BJ,[],0,0,0,0,0,AIL,0,C9,[],0,0,0,0,0,QQ,0,BK,[],0,0,0,0,0,K2,0,C,[DO],0,3,0,Pu,0,NG,0,E8,[],0,3,0,0,0,AAh,0,BJ,[],0,0,0,0,0,TW,0,CK,[],0,0,0,0,0,OP,0,BK,[],0,0,0,0,0,WP,0,Cp,[],0,3,0,0,0,Z6,0,BJ,[],0,0,0,0,0,N0,0,C,[],0,3,0,0,0,GR,0,BK,[],0,3,0,0,0,YE,0,HS,[],0,3,0,0,0,OL,0,BK,[],0,0,0,0,0,ABi,0,Cx,[EM],0,3,0,0,0,AAc,0,JE,[],0,0,0,0,0,Qv,0,C,[],0,3,0,0,0,Li,0,Cx,[],0,3,0,PH,0,Lq,0,C,[],0,3,0,0,0,AD7,0,BK,[],0,0,0,0,0,QS,0,BK,[],0,0,0,0,0,AGi,0,I1,[],0,3,
0,0,0,OM,0,BK,[],0,0,0,0,0,M_,0,C,[],0,3,0,0,0,AJV,0,C,[],0,3,0,0,0,Ei,0,BR,[],12,3,0,0,0,AJ_,0,BK,[],0,0,0,0,0,ZU,0,CK,[],0,0,0,0,0,Cv,0,C,[],1,3,0,0,0,QT,0,Cv,[],0,0,0,0,0,TL,0,C,[Ol],0,3,0,0,0,QD,0,C,[],0,3,0,0,0,Oc,0,C,[],0,3,0,0,0,OG,0,C,[],0,3,0,0,0,JS,0,BJ,[],0,3,0,0,0,TV,0,CK,[],0,0,0,0,0,AIM,0,JU,[],0,0,0,0,0,TO,0,C,[],3,3,0,0,0,AAi,0,BJ,[],0,0,0,0,0,AKP,0,Cp,[],0,3,0,0,0,ADE,0,Cp,[],0,3,0,0,0,AAd,0,C9,[],0,0,0,0,0,JG,0,C,[],0,3,0,0,0,X$,0,JG,[],0,0,0,0,0,AIo,0,Es,[CW],0,3,0,0,0,S4,0,BJ,[],0,0,0,0,
0,AGD,0,Ew,[],0,3,0,0,0,ACM,0,BJ,[],0,0,0,0,0]);
Co([AJD,0,C9,[],0,0,0,0,0,P2,0,ER,[],0,3,0,0,0,ADL,0,Cp,[],0,3,0,0,0,N4,0,C,[],0,3,0,0,0,Nm,0,C,[],0,3,0,0,0,ACt,0,Cx,[],0,3,0,0,0,AJ4,0,Ff,[],0,0,0,0,0,S6,0,BJ,[],0,0,0,0,0,AE4,0,Cp,[],0,3,0,0,0,AKi,0,JS,[],0,3,0,0,0,S7,0,DM,[],0,0,0,0,0,Yb,0,Dw,[],0,0,0,0,0,Ry,0,C,[],1,3,0,0,0,QN,0,C,[],0,3,0,0,0,Qp,0,C,[BN],0,3,0,Qq,0,Bv,0,C,[],1,3,0,Hb,0,LH,0,Bv,[],0,3,0,0,0,ZX,0,C,[],0,3,0,0,0,Pi,0,Bv,[],0,0,0,0,0,AJa,0,C,[],0,3,0,0,0,Dx,0,Bv,[],0,3,0,0,0,F1,0,Dx,[],0,3,0,0,0,FW,0,Dx,[],0,3,0,0,0,G0,0,C,[],3,3,0,0,0,VQ,
0,C,[G0],0,3,0,0,0,Pl,0,Bv,[],0,0,0,0,0,AG9,0,C,[EL],0,3,0,0,0,Ph,0,Bv,[],0,0,0,0,0,EX,0,Bv,[],0,3,0,0,0,Pg,0,Bv,[],0,0,0,0,0,Pf,0,Bv,[],0,0,0,0,0,AD$,0,C,[],4,3,0,0,0,Sa,0,Cv,[],0,0,0,0,0,GL,0,C,[],3,3,0,0,0,Bq,0,C,[BN,GL],0,3,0,0,0,Oz,0,Bv,[],0,0,0,0,0,Eu,0,Bv,[],0,3,0,0,0,ACp,0,C,[],0,3,0,0,0,Pn,0,Bv,[],0,0,0,0,0,J$,0,Eu,[],0,3,0,0,0,Yz,0,C,[DO],0,3,0,0,0,FF,0,BR,[],12,3,0,0,0,N_,0,C,[],0,3,0,NM,0,Fa,0,Bv,[],0,3,0,0,0,NA,0,Fa,[],0,3,0,0,0,Ov,0,Bv,[],0,0,0,0,0,AC4,0,C,[BN],4,3,0,0,0,Pe,0,Bv,[],0,0,0,0,0,EB,
0,C,[BN,GL],0,3,0,0,0,Lb,0,EX,[],0,3,0,0,0]);
Co([Nh,0,Bv,[],0,3,0,0,0,VE,0,C,[],0,3,0,0,0,AKC,0,C,[EL],0,3,0,0,0,Pj,0,Bv,[],0,0,0,0,0,QF,0,Bv,[],0,3,0,0,0,OA,0,Bv,[],0,0,0,0,0,Nf,0,EX,[],0,3,0,0,0,Rh,0,C,[BN],0,3,0,L7,0,HP,0,C,[BN],0,3,0,Kl,0,IN,0,C,[BN],0,3,0,Ja,0,VY,0,C,[BN],0,3,0,0,0,SI,0,C,[BN],0,3,0,0,0,AFc,0,C,[BN,EL],0,3,0,0,0,Zr,0,C,[G0],0,3,0,0,0,OW,0,C,[],4,3,0,Jg,0,P8,0,C,[],4,3,0,MK,0,T1,0,C,[],4,3,0,0,0,ML,0,Fa,[],0,3,0,0,0,Ix,0,C,[BN],0,3,0,Dg,0,LS,0,C,[],3,3,0,0,0,Jb,0,C,[LS,BN],0,3,0,0,0,Or,0,Jb,[],0,3,0,0,0,Oy,0,Bv,[],0,0,0,0,0,Pk,0,Bv,
[],0,0,0,0,0,JD,0,C,[],0,3,0,GF,0,Dm,0,C,[BN],0,3,0,0,0,R2,0,C,[],0,3,0,0,0,ADC,0,C,[],0,3,0,0,0,Bb,0,C,[BN,GL],0,3,0,B_,0,YC,0,C,[BN,EL],0,3,0,0,0,WU,0,Cv,[],0,0,0,0,0,IU,0,Eu,[],0,3,0,0,0,AD8,0,C,[G0],0,3,0,0,0,Up,0,C,[],0,3,0,0,0,AHt,0,C,[BN],0,3,0,0,0,Hf,0,C,[BN],0,3,0,0,0,Ox,0,Bv,[],0,0,0,0,0,AHw,0,C,[],0,3,0,0,0,Ux,0,C,[],0,3,0,0,0,AE7,0,C,[],0,3,0,0,0,AHs,0,C,[BN],0,3,0,0,0,AC1,0,C,[],3,3,0,0,0,YO,0,C,[BN],0,3,0,0,0,AFM,0,C,[],0,0,0,0,0,HK,0,C,[DO],0,3,0,I$,0,JY,0,C,[],0,3,0,0,0,ADy,0,JY,[],0,3,0,0,0,MW,
0,C,[CW],0,3,0,0,0,AES,0,C,[],0,3,0,0,0,Bw,0,C,[],0,3,0,0,0]);
Co([Ki,0,C,[CW],1,3,0,0,0,AGz,0,Ki,[],0,3,0,0,0,Cy,0,C,[C1],0,3,0,0,0,Hs,0,C,[C1],0,3,0,0,0,Ze,0,Hs,[],0,3,0,0,0,AJT,0,C,[C1],0,3,0,0,0,Et,0,C,[],4,3,0,0,0,AJ8,0,C,[],0,3,0,0,0,AAw,0,C,[],0,3,0,0,0,ADz,0,C,[],0,3,0,0,0,ABP,0,C,[],0,3,0,0,0,Np,0,C,[],0,3,0,Om,0,SZ,0,C,[],0,3,0,0,0,ACz,0,C,[],0,3,0,0,0,ABs,0,C,[],0,3,0,0,0,AB$,0,C,[],0,3,0,0,0,AG7,0,C,[],0,3,0,0,0,YJ,0,C,[],0,3,0,0,0,AIu,0,C,[],0,3,0,0,0,AAa,0,C,[],0,3,0,0,0,UD,0,C,[],0,3,0,0,0,VI,0,C,[],0,3,0,0,0,He,0,BR,[],12,3,0,0,0,ACC,0,C,[],0,3,0,0,0,O3,
0,C,[],3,3,0,0,0,CG,0,C,[],0,3,0,0,0,S$,0,CG,[],0,3,0,0,0,S9,0,CG,[],0,3,0,0,0,AAY,0,CG,[],0,3,0,0,0,WN,0,CG,[],0,3,0,0,0,AFe,0,CG,[],0,3,0,0,0,IQ,0,CG,[],0,3,0,0,0,WC,0,IQ,[],0,3,0,0,0,FO,0,C,[],3,3,0,0,0,XB,0,C,[CW,FO],0,3,0,0,0,D5,0,C,[],3,3,0,0,0,AE6,0,C,[D5,FO],0,3,0,0,0,AIq,0,C,[D5],0,3,0,0,0,Vh,0,C,[],0,3,0,0,0,DC,0,C,[D5],0,3,0,0,0,AEe,0,DC,[],0,3,0,0,0,FL,0,DC,[FO,D5],1,3,0,0,0,CR,0,FL,[],1,3,0,MV,0,AER,0,C,[],0,3,0,0,0,AG5,0,CR,[],4,3,0,0,0,AAn,0,CR,[],4,3,0,0,0,AI9,0,DC,[],0,3,0,0,0,Ik,0,DC,[],0,
3,0,0,0,ST,0,Ik,[],0,3,0,0,0,Wy,0,CR,[],4,3,0,0,0]);
Co([Fj,0,FL,[],1,3,0,0,0,ABJ,0,Fj,[],4,3,0,0,0,AAk,0,CR,[],4,3,0,0,0,ACa,0,CR,[],4,3,0,0,0,ABH,0,Fj,[],4,3,0,0,0,FJ,0,BR,[],12,3,0,0,0,Ev,0,C,[CW,D5,FO],1,3,0,0,0,Jw,0,Ev,[D5],1,3,0,0,0,RH,0,Jw,[D5],0,3,0,0,0,FX,0,BR,[],12,3,0,0,0,Cf,0,Ev,[],1,3,0,0,0,F9,0,Cf,[],1,3,0,0,0,U8,0,C,[],0,3,0,0,0,E5,0,Cf,[],1,3,0,PI,0,Ds,0,E5,[],1,3,0,0,0,Ex,0,Ds,[],1,3,0,0,0,Xx,0,Ex,[],0,3,0,0,0,FV,0,Cf,[],1,3,0,0,0,AKG,0,FV,[],0,3,0,0,0,AG2,0,Cf,[],0,3,0,0,0,Ef,0,Cf,[],1,3,0,0,0,S3,0,Ef,[],0,3,0,0,0,Fv,0,Cf,[],1,3,0,0,0,Xp,0,Ds,
[],0,3,0,0,0,Zm,0,Ds,[],0,3,0,0,0,HZ,0,Cf,[],1,3,0,0,0,AEf,0,HZ,[],0,3,0,0,0,Ue,0,Ef,[],0,3,0,0,0,AAu,0,Ex,[],0,3,0,0,0,AD9,0,Cf,[],0,3,0,0,0,ACl,0,Ef,[],0,3,0,0,0,AEk,0,Cf,[],0,3,0,0,0,AFI,0,E5,[],0,3,0,0,0,Zt,0,Cv,[],0,0,0,0,0,UM,0,Cv,[],0,0,0,0,0,U1,0,Ds,[],0,3,0,0,0,AEJ,0,Fv,[],0,3,0,0,0,AI$,0,F9,[],0,3,0,0,0,AC$,0,F9,[],0,3,0,0,0,AFu,0,Fv,[],0,3,0,0,0,ABg,0,Ex,[],0,3,0,0,0,AJK,0,FV,[],0,3,0,0,0,DA,0,Ev,[],1,3,0,0,0,ABO,0,DA,[],0,3,0,0,0,El,0,C,[],1,3,0,0,0,AE1,0,El,[],0,3,0,0,0,AF1,0,DA,[],0,3,0,0,0,AG1,
0,DA,[],0,3,0,0,0,AHW,0,El,[],0,3,0,0,0,W_,0,DA,[],0,3,0,0,0]);
Co([AG8,0,El,[],0,3,0,0,0,HG,0,C,[],3,3,0,0,0,Kr,0,C,[],3,3,0,0,0,Ca,0,C,[HG,Kr],0,3,0,0,0,VO,0,C,[],4,0,0,0,0,UR,0,C,[],4,3,0,0,0,CT,0,C,[],0,3,0,0,["bh",W(AF$)],CE,0,CT,[],0,3,0,0,0,BA,"RuntimeException",15,CE,[],0,3,0,0,0,AAg,"ClassCastException",15,BA,[],0,3,0,0,0,J5,0,C,[],3,3,0,0,0,H,0,C,[BN,CF,J5],0,3,0,0,["bj",W(Cn),"X",N(AID),"W",W(ADP)],Dr,0,C,[BN],1,3,0,0,0,Ed,0,Dr,[CF],0,3,0,0,0,T,0,C,[BN,J5],0,0,0,0,["bp",N(Gh),"bj",W(ACV)],IA,0,C,[],3,3,0,0,0,K,0,T,[IA],0,3,0,0,["e1",BG(AAP),"gF",Z(WB),"bj",W(Fr),
"bp",N(AA_),"gG",Bm(ABV)],M7,0,C,[],0,3,0,0,0,L2,0,C,[],3,3,0,0,0,IH,0,C,[L2,EY],0,3,0,0,0,QJ,0,C,[],3,3,0,0,0,JB,0,C,[QJ],1,3,0,0,0,L9,0,JB,[],0,3,0,0,0,AF9,0,C,[],4,3,0,0,0,F5,0,BR,[],12,3,0,0,0,KN,0,C,[],3,3,0,0,0,BY,0,C,[],3,3,0,0,0,No,0,C,[BY],3,3,0,0,0,GU,0,C,[KN,No],0,3,0,Eh,["gH",N(AEE)],AEn,0,C,[],0,3,0,0,0,M0,0,C,[],0,3,0,Gy,0,J6,0,Dr,[CF],0,3,0,0,0,JM,0,C,[],0,3,0,0,0,Zw,0,C,[],4,3,0,0,0,C4,"GlyphLayout$GlyphRun",9,C,[DO],0,3,0,0,0,GV,0,C,[],0,3,0,0,0,I2,0,C,[],3,3,0,0,0,H5,0,C,[I2],1,3,0,0,0,DZ,
0,C,[],3,3,0,0,0,GG,0,H5,[DZ,BN],0,3,0,0,0,Q0,0,C,[],3,3,0,0,0,Ka,0,C,[Q0],0,3,0,0,0,Jq,0,C,[CF],0,3,0,0,0,Wp,0,C,[],0,3,0,0,0,AEN,0,C,[],4,3,0,0,0,Km,0,C,[],3,3,0,0,0,Le,0,C,[Km],0,3,0,0,0,VT,0,C,[],0,3,0,0,0,Yp,0,C,[],0,3,0,0,0,OR,0,C,[],3,3,0,0,0]);
Co([HT,0,C,[OR],0,3,0,Jo,0,KI,0,C,[],0,3,0,0,0,CM,0,C,[],0,3,0,0,["fs",N(ACo)],OD,0,C,[],3,3,0,0,0,Do,0,C,[BY],3,3,0,0,0,I4,0,C,[OD,Do],0,3,0,0,["gI",N(SX)],N7,0,C,[],3,3,0,0,0,PC,0,C,[N7],0,3,0,0,0,OZ,0,C,[O3],0,3,0,0,0,OS,0,C,[],3,3,0,0,0,M6,0,C,[OS],0,3,0,0,0,LO,0,C,[],3,3,0,0,0,OV,0,C,[LO],0,3,0,0,0,ADf,0,C,[],0,3,0,0,0,PF,0,C,[],3,3,0,0,0,O1,0,C,[PF],3,3,0,0,0,MB,0,C,[O1],0,3,0,0,0,Hz,0,C,[Do],0,0,0,0,["gI",N(AFk)],HA,0,C,[Do],0,0,0,0,["gI",N(AJr)],Bs,"IllegalArgumentException",15,BA,[],0,3,0,0,0,AHE,0,
C,[],4,3,0,0,0,Uf,0,C,[C1],0,3,0,0,0,ABd,0,Dr,[CF],0,3,0,0,0,AAO,0,C,[BY],1,3,0,0,0,IY,0,C,[],3,3,0,0,0,Fb,0,C,[IY],0,3,0,0,["f6",Bm(YT),"gj",Bm(AJl),"c4",BG(Ih),"b4",N(AHf),"b3",BG(Vj),"f4",N(ZJ),"f0",W(AJZ),"f2",N(AEG),"b0",N(AEp),"gq",N(AC5),"gd",Z(VM),"ge",BG(AAt),"gh",BG(ACB),"go",N(AHS),"c5",BG(HN),"c6",BG(IS),"f_",Bm(W2),"bY",N(AJQ),"c7",Z(I_),"f5",N(AA5),"c8",Z(H9),"co",N(XP),"f8",Bm(XJ),"f7",N(TQ),"f3",Bm(RL),"fF",Bm(AEo),"fC",N(TS),"gp",function(b,c,d,e,f,g){ABu(this,b,c,d,e,f,g);},"b1",BG(R$)],N5,
0,C,[IY],3,3,0,0,0,Hn,0,Fb,[N5],0,3,0,0,["gt",N(Yv),"gf",BG(ACU),"gg",function(b,c,d,e,f){AKv(this,b,c,d,e,f);},"gr",Bm(ADu)],Lf,0,Hn,[],0,3,0,0,["gt",N(W9),"gf",BG(Uv),"gg",function(b,c,d,e,f){AJd(this,b,c,d,e,f);},"gr",Bm(TG),"b4",N(AHj),"b3",BG(ABW),"b0",N(AHV),"gd",Z(Wu),"ge",BG(AEP),"co",N(Rx),"b1",BG(Yl),"f6",Bm(ABa),"gj",Bm(AIF),"c4",BG(AB6),"f4",N(ADl),"f0",W(AJY),"f2",N(AE3),"gq",N(AJN),"gh",BG(T8),"go",N(AE8),"c5",BG(Zu),"c6",BG(AHg),"f_",Bm(ACH),"c7",Z(Vm),"bY",N(SC),"c8",Z(AJW),"f5",N(To),"f8",Bm(SE),
"f7",N(AI6),"f3",Bm(SA),"fF",Bm(UL),"fC",N(AKz),"gp",function(b,c,d,e,f,g){AFK(this,b,c,d,e,f,g);}],Mt,0,C,[],0,3,0,0,0,DQ,0,BR,[],12,3,0,0,0,O8,0,C,[BY],3,3,0,0,0,Jl,0,C,[O8],0,0,0,0,["gJ",W(Wl)],QG,0,Fb,[],0,3,0,0,["b4",N(Vq),"b3",BG(Wd),"b0",N(AKa),"gd",Z(ZH),"ge",BG(AJH),"co",N(AAU),"b1",BG(AJR),"f6",Bm(Sy),"gj",Bm(Ru),"c4",BG(AAs),"f4",N(AKl),"f0",W(ADU),"f2",N(AJ1),"gq",N(ADO),"gh",BG(YK),"go",N(AKb),"c5",BG(AAv),"c6",BG(Uu),"f_",Bm(YU),"c7",Z(Xm),"bY",N(Xs),"c8",Z(SK),"f5",N(AFQ),"f8",Bm(AHD),"f7",N(ABC),
"f3",Bm(AJF),"fF",Bm(AJX),"fC",N(SM),"gp",function(b,c,d,e,f,g){Vb(this,b,c,d,e,f,g);}],Pb,0,C,[C1],0,3,0,0,0,NN,0,C,[],0,3,0,0,0,PU,0,C,[BY],3,3,0,0,0,IZ,0,C,[PU],0,0,0,0,["gK",W(Sq),"gL",W(VX),"gM",W(R5)],QY,0,C,[],3,3,0,0,0,Q6,0,C,[QY],0,3,0,0,0,KJ,0,CM,[],0,0,0,0,0,PR,"CloneNotSupportedException",15,CE,[],0,3,0,0,0,H8,0,Cv,[],0,3,0,0,0,I,"IndexOutOfBoundsException",15,BA,[],0,3,0,0,0,DT,0,C,[BY],3,3,0,0,0,L8,0,C,[DT],3,3,0,0,0,Nt,0,C,[DT],3,3,0,0,0,Nk,0,C,[DT],3,3,0,0,0,Ow,0,C,[DT],3,3,0,0,0,QU,0,C,[DT],
3,3,0,0,0]);
Co([Pm,0,C,[DT,L8,Nt,Nk,Ow,QU],3,3,0,0,0,LQ,0,C,[],3,3,0,0,0,H6,0,C,[BY],3,3,0,0,0,K5,0,C,[BY,Pm,LQ,H6],1,3,0,0,["gN",N(AEh),"gO",Bm(AG0),"gP",Bm(AGk),"gQ",Z(AD6),"gR",N(AIS),"gS",W(Vc),"gT",Z(R4)],IG,0,C,[],1,3,0,0,0,Hh,0,IG,[I2,DZ,BN],0,3,0,0,0,Jv,0,Hh,[],0,3,0,0,0,Y6,0,C,[],0,3,0,0,0,E3,0,BR,[],12,3,0,0,0,CN,0,C,[BY],1,3,0,0,0,WG,0,CN,[],1,3,0,0,0,VZ,0,CN,[],1,3,0,0,0,AAA,0,CN,[],1,3,0,0,0,ADn,0,CN,[],1,3,0,0,0,Zk,0,CN,[],1,3,0,0,0,Io,0,C,[Do],0,0,0,0,["gI",N(Z8)],Ip,0,C,[Do],0,0,0,0,["gI",N(AJI)],In,0,C,
[Do],0,0,0,0,["gI",N(AEW)],NU,0,Cv,[],0,3,0,0,0,PZ,0,C,[BY],3,3,0,0,0,HJ,0,C,[PZ],0,0,0,0,["gU",W(WX)],VL,0,CN,[],1,3,0,0,0,Ne,0,C,[BN],4,3,0,0,0,JW,0,C,[],3,3,0,0,0,N8,0,C,[JW],4,3,0,0,0,UB,0,C,[],4,3,0,0,0,H3,0,C,[],4,3,0,0,0,D_,"ReflectionException",4,CE,[],0,3,0,0,0,DD,0,C,[],4,3,0,Bp,0,M1,0,C,[],3,3,0,0,0,HF,0,C,[M1],0,0,0,0,0,G4,0,C,[],3,3,0,0,0,HE,0,C,[G4],0,0,0,0,0,Pz,0,C,[JW],0,0,0,0,0,B0,"NumberFormatException",15,Bs,[],0,3,0,0,0,HX,0,BA,[],0,3,0,0,0,IM,0,CE,[],0,3,0,0,0,FC,"NoSuchMethodException",
15,IM,[],0,3,0,0,0,CU,"NullPointerException",15,BA,[],0,3,0,0,0,BO,0,C,[],1,0,0,0,["d8",Z(Wh),"ez",BG(YL),"dV",W(UK),"dE",N(AH8),"dU",N(AH6),"ef",W(AJx),"dA",W(Ga)],Js,0,C,[HG],0,3,0,0,0,AJm,0,C,[BY],1,3,0,0,0,X4,0,C,[BY],1,3,0,0,0,AKQ,0,C,[BY],1,3,0,0,0,H$,0,C,[BY],3,3,0,0,0,I6,0,C,[H$],0,3,0,0,["gV",N(AIe)],Zg,0,C,[BY],1,3,0,0,0,I5,0,C,[H$],0,3,0,0,["gV",N(Tu)],Ko,0,C,[],3,3,0,0,0,FM,0,C,[Ko,DZ],0,0,0,0,0]);
Co([Gv,0,FM,[],0,0,0,0,0,CA,0,BO,[],0,0,0,C3,["ee",Z(TP),"eP",N(Ur)],OI,0,C,[],0,0,0,0,0,BT,"PatternSyntaxException",12,Bs,[],0,3,0,0,["bh",W(AJs)],TX,0,C,[],0,3,0,0,0,HW,0,C,[C1],3,3,0,0,0,IX,0,C,[HW],1,3,0,0,0,NL,0,C,[HW],3,3,0,0,0,KH,0,C,[NL],3,3,0,0,0,HY,0,IX,[KH],1,3,0,0,0,OX,0,C,[],3,3,0,0,0,HV,0,HY,[DZ,BN,OX],0,3,0,0,0,NH,0,CA,[],0,0,0,0,["ee",Z(SJ),"eP",N(AGg)],Q7,0,CA,[],0,0,0,0,["ee",Z(VF)],Ml,0,CA,[],0,0,0,0,["ee",Z(UI)],Oe,0,CA,[],0,0,0,0,["ee",Z(S5),"eP",N(AEH)],EW,0,CA,[],0,0,0,0,["ee",Z(AIz)],B2,
0,BO,[],1,0,0,0,["ee",Z(AKm),"ew",W(AHl),"eP",N(Z$)],D2,0,B2,[],0,0,0,0,["ex",Bm(AGC),"d8",Z(Xr),"ez",BG(Vp),"eP",N(SW)],BU,0,BO,[],0,0,0,0,["ee",Z(YM),"dE",N(AEz),"dU",N(ABz),"eP",N(AFo),"dA",W(Vk)],Hm,0,BU,[],0,0,0,0,["ee",Z(AEd),"eP",N(AFT)],Dk,0,Hm,[],0,0,0,0,["ee",Z(Wo),"dE",N(AFw)],Kx,0,Dk,[],0,0,0,0,["ee",Z(AEr),"eP",N(AH_)],Qc,0,Dk,[],0,0,0,0,["ee",Z(Uh),"eP",N(AHy)],Ni,0,Dk,[],0,0,0,0,["ee",Z(Vd),"eP",N(AKS)],Ou,0,Dk,[],0,0,0,0,["ee",Z(RZ),"eP",N(AF6)],EP,0,BU,[],0,0,0,0,["ee",Z(Ss),"d8",Z(ABX),"ez",
BG(AGl),"dU",N(ABp),"ef",W(AEB),"dA",W(AJG)],AC9,0,C,[],4,3,0,0,0,Hg,"ArrayStoreException",15,BA,[],0,3,0,0,0,F0,0,C,[],1,0,0,0,0,Bc,0,F0,[],1,0,0,0,["eJ",W(Uk),"eC",W(Tn),"d5",W(AHb),"d4",W(AJu)],HD,"MissingResourceException",11,BA,[],0,3,0,0,0,B7,0,Bc,[],0,0,0,0,["eM",N(Vu),"eJ",W(AKN),"eC",W(Xf),"d5",W(AHX),"bj",W(ADg),"d4",W(XD)],Dy,0,BO,[],1,0,0,0,["dU",N(AGn),"eP",N(AIv),"dA",W(ACw)],CJ,0,Dy,[],0,0,0,0,["ee",Z(R1)],D$,0,CJ,[],0,0,0,0,["ee",Z(TR)],CL,0,Dy,[],0,0,0,0,["ee",Z(Sp)],D8,0,CJ,[],0,0,0,0,["ee",
Z(AB4),"dE",N(AKU)],Qo,0,CJ,[],0,0,0,0,["ee",Z(AJ9),"d8",Z(AC8)],JX,0,C,[],4,0,0,0,0,Bh,0,C,[],1,0,0,0,0,KS,0,F0,[DZ],0,0,0,0,["bj",W(ADp)],Lp,0,BO,[],0,0,0,0,["ee",Z(AAH),"eP",N(AEy)],Ba,0,C,[DZ,BN],0,3,0,0,0,KC,0,BU,[],0,0,0,0,0,FB,0,BU,[],0,0,0,0,["ee",Z(TI),"dE",N(AEa),"eP",N(UO),"dU",N(Uj)],CS,0,BU,[],0,0,0,0,["ee",Z(W6),"eM",N(XV),"dU",N(TA),"dE",N(AG3),"eP",N(Xj)],Hy,0,CS,[],0,0,0,0,["eM",N(Z_)],H2,0,B2,[],0,0,0,0,["ex",Bm(AAK)],Dd,0,B2,[],0,0,0,0,["ex",Bm(Rt),"dU",N(AEA)]]);
Co([Go,0,BU,[],0,0,0,0,["dE",N(AB3),"ee",Z(RO),"dU",N(UF),"eP",N(AH0)],C_,0,B2,[],0,0,0,0,["ew",W(AAq),"ex",Bm(Y3),"d8",Z(W0),"ez",BG(AAz),"dU",N(AHT)],J2,0,B2,[],0,0,0,0,["ex",Bm(RC)],Hv,0,B2,[],0,0,0,0,["ex",Bm(Si)],Ec,0,BU,[],0,0,0,0,["dE",N(AJB),"ee",Z(AEb),"dU",N(AAL),"eP",N(AFz)],QZ,0,Ec,[],0,0,0,0,0,OQ,0,Ec,[],0,0,0,0,0,Rm,0,CL,[],0,0,0,0,["ee",Z(VK)],Mg,0,CL,[],0,0,0,0,["ee",Z(ACS)],E_,0,CL,[],0,0,0,0,["ee",Z(AGX),"dE",N(AIH)],L6,0,E_,[],0,0,0,0,["ee",Z(AAx),"dE",N(ADq)],EI,0,CL,[],0,0,0,0,["ee",Z(AKI)],KW,
0,EI,[],0,0,0,0,["ee",Z(ZG)],Nx,0,CL,[],0,0,0,0,["ee",Z(AJP)],MU,0,E_,[],0,0,0,0,["ee",Z(UQ)],Pq,0,EI,[],0,0,0,0,["ee",Z(Tc)],Nz,0,Dy,[],0,0,0,0,["ee",Z(AKr),"d8",Z(AHd)],Lv,0,Dy,[],0,0,0,0,["ee",Z(AEC),"d8",Z(RU)],FP,0,C,[],1,0,0,0,0,Ro,0,CJ,[],0,0,0,0,["ee",Z(Tg)],Qi,0,D8,[],0,0,0,0,["ee",Z(ACN)],LY,0,D$,[],0,0,0,0,["ee",Z(AGp)],MN,0,CJ,[],0,0,0,0,["ee",Z(AEt)],OT,0,D8,[],0,0,0,0,["ee",Z(Ts)],Nj,0,D$,[],0,0,0,0,["ee",Z(AGI)],IF,0,BO,[],4,0,0,0,["ee",Z(ABt),"eP",N(ZS)],Ie,0,BO,[],0,0,0,0,["ee",Z(Ug),"eP",N(UC)],Lr,
0,BO,[],0,0,0,0,["ee",Z(AAe),"eP",N(AKD)],J1,0,BO,[],4,0,0,0,["ee",Z(AFf),"eP",N(Vz)],Qw,0,BO,[],0,0,0,0,["ee",Z(AD1),"eP",N(Rz)],K1,0,BO,[],0,0,0,0,["ee",Z(Vi),"eP",N(Yo)],Qt,0,BU,[],0,0,0,0,["ee",Z(AJU),"dE",N(UH),"dV",W(ADA),"eP",N(UG)],LU,0,BU,[],4,0,0,0,["ee",Z(ADW),"dE",N(AF_),"dV",W(Rp),"eP",N(AKj)],Qj,0,BO,[],4,0,0,0,["ee",Z(AAW),"eP",N(X5)],Og,0,BO,[],0,0,0,0,["ee",Z(ADZ),"eP",N(XN)],Ku,0,BO,[],0,0,0,0,["ee",Z(ZL),"eP",N(VD)],E7,0,BU,[],0,0,0,0,["ee",Z(Tk),"dE",N(AFt),"eP",N(AFU)],Qr,0,E7,[],0,0,0,
0,["ee",Z(VJ),"d8",Z(AH9),"ez",BG(SQ),"dU",N(ACD)],Nc,0,E7,[],0,0,0,0,["ee",Z(ABR)],Lo,0,T,[IA],0,3,0,0,["e1",BG(XE),"gF",Z(Uo),"bp",N(UZ),"gG",Bm(AHh)],NC,0,B2,[],0,0,0,0,["ex",Bm(Wf),"d8",Z(T_),"ez",BG(Yh),"dU",N(Zd)],Ks,0,B2,[],0,0,0,0,["ex",Bm(AB0)],KZ,0,B2,[],0,0,0,0,["ex",Bm(AGr)],AKV,0,C,[],4,3,0,0,0,Kq,0,B2,[],0,0,0,0,["ex",Bm(AGv)],FS,0,BU,[],0,0,0,0,["dE",N(AEq),"ee",Z(H7),"d8",Z(Y_),"ez",BG(Wt),"dU",N(SG),"eP",N(AHF)],FZ,0,BU,[],0,0,0,0,["dE",N(UV),"ee",Z(Hw),"d8",Z(AET),"ez",BG(AGq),"dU",N(Wi),"eP",
N(AE2)],Dq,0,B2,[],0,0,0,0,["ex",Bm(AFV),"d8",Z(ADk),"ez",BG(UT),"dU",N(AFE)],G5,0,FP,[],0,0,0,0,["e2",N(U6),"e4",Bm(AFL)],G6,0,FP,[],0,0,0,0,["e2",N(AGL),"e4",Bm(AJp)]]);
Co([Pp,0,C,[],0,0,0,0,0,GQ,0,Bh,[],0,0,0,0,["em",W(Zv)],Gu,0,Bh,[],0,0,0,0,["em",W(ABS)],Pa,0,Bh,[],0,0,0,0,["em",W(AGd)],PL,0,Bh,[],0,0,0,0,["em",W(AHG)],PP,0,Bh,[],0,0,0,0,["em",W(W7)],GM,0,Bh,[],0,0,0,0,["em",W(Vt)],G1,0,GM,[],0,0,0,0,["em",W(XY)],Rg,0,Bh,[],0,0,0,0,["em",W(Y$)],Ht,0,G1,[],0,0,0,0,["em",W(RG)],NB,0,Ht,[],0,0,0,0,["em",W(ACy)],NW,0,Bh,[],0,0,0,0,["em",W(V_)],Mf,0,Bh,[],0,0,0,0,["em",W(ACr)],L5,0,Bh,[],0,0,0,0,["em",W(AJt)],PT,0,Bh,[],0,0,0,0,["em",W(ADw)],Rn,0,Bh,[],0,0,0,0,["em",W(RP)],Po,
0,Bh,[],0,0,0,0,["em",W(ZO)],O5,0,Bh,[],0,0,0,0,["em",W(AFY)],Qb,0,Bh,[],0,0,0,0,["em",W(V8)],Lc,0,Bh,[],0,0,0,0,["em",W(WD)],KT,0,Bh,[],0,0,0,0,["em",W(AJi)],Pv,0,Bh,[],0,0,0,0,["em",W(RD)],PD,0,Bh,[],0,0,0,0,["em",W(AA9)],Mz,0,Bh,[],0,0,0,0,["em",W(WQ)],N1,0,Bh,[],0,0,0,0,["em",W(Ys)],Q1,0,Bh,[],0,0,0,0,["em",W(ABb)],PB,0,Bh,[],0,0,0,0,["em",W(AH4)],M8,0,Bh,[],0,0,0,0,["em",W(AE$)],My,0,Bh,[],0,0,0,0,["em",W(ADm)],Rj,0,Bh,[],0,0,0,0,["em",W(AF8)],Gf,0,Bh,[],0,0,0,0,["em",W(ABy)],Qf,0,Gf,[],0,0,0,0,["em",W(ACZ)],NE,
0,GQ,[],0,0,0,0,["em",W(T9)],Mu,0,Gu,[],0,0,0,0,["em",W(Y0)],Bg,0,Bh,[],0,0,0,0,["em",W(ABD)],Mq,0,Bh,[],0,0,0,0,["em",W(AI7)],II,0,Bh,[],0,0,0,0,["em",W(XI)],IO,0,Bh,[],0,0,0,0,["em",W(RE)],DK,"NegativeArraySizeException",15,BA,[],0,3,0,0,0,S8,0,C,[],0,0,0,0,0,Wj,0,C,[],4,0,0,0,0,UP,0,C,[],4,3,0,0,0,PW,0,C,[],0,3,0,0,0,Ge,0,C,[],0,3,0,0,0,JC,0,C,[],0,3,0,0,0,Y5,0,C,[],4,3,0,0,0,AGe,0,C,[],4,3,0,0,0,MI,0,CM,[],0,0,0,0,["fs",N(AHe),"gC",N(WT),"gB",Bm(ADa)],B8,0,BR,[],9,3,0,Gp,0,Ep,0,FM,[],0,0,0,0,0]);
Co([AKe,0,C,[],3,3,0,0,0,Pc,0,C,[BY],3,3,0,0,0,Mn,0,C,[Pc,BY],1,3,0,0,["gW",Bm(AJb),"gX",N(ADI),"gY",Bm(UW),"gZ",Z(AAB),"g0",Z(AGQ)],Ji,0,C,[Do],0,0,0,0,["gI",N(AB8)],Eb,0,BR,[],12,3,0,0,0,ZK,0,C,[],0,3,0,0,0,Nv,0,C,[],3,3,0,0,0,FN,0,Js,[Nv],0,3,0,0,0,Q,"StringIndexOutOfBoundsException",15,I,[],0,3,0,0,0,Ql,0,Bc,[],0,0,0,0,["eM",N(Xc)],Qk,0,Bc,[],0,0,0,0,["eM",N(Sn)],LA,0,Bc,[],0,0,0,0,["eM",N(ABk),"bj",W(YF)],LG,0,Bc,[],0,0,0,0,["eM",N(AFW)],LE,0,Bc,[],0,0,0,0,["eM",N(AGu)],LF,0,Bc,[],0,0,0,0,["eM",N(ABZ)],LK,
0,Bc,[],0,0,0,0,["eM",N(WH)],LL,0,Bc,[],0,0,0,0,["eM",N(Rs)],LI,0,Bc,[],0,0,0,0,["eM",N(YP)],LJ,0,Bc,[],0,0,0,0,["eM",N(AB1)],LM,0,Bc,[],0,0,0,0,["eM",N(AIa)],LN,0,Bc,[],0,0,0,0,["eM",N(VS)],Lz,0,Bc,[],0,0,0,0,["eM",N(AKW)],L1,0,Bc,[],0,0,0,0,["eM",N(YW)],Lx,0,Bc,[],0,0,0,0,["eM",N(VP)],Ly,0,Bc,[],0,0,0,0,["eM",N(X1)],LD,0,Bc,[],0,0,0,0,["eM",N(AAj)],Lw,0,Bc,[],0,0,0,0,["eM",N(AHO)],LB,0,Bc,[],0,0,0,0,["eM",N(Us)],LC,0,Bc,[],0,0,0,0,["eM",N(AEZ)],Gq,0,C,[],0,0,0,0,0,EV,0,C,[EY],0,3,0,0,0,CV,"IllegalStateException",
15,BA,[],0,3,0,0,0,GA,"IllegalMonitorStateException",15,BA,[],0,3,0,0,0,AFZ,0,C,[],0,3,0,0,0,X6,0,C,[],4,3,0,0,0,SF,0,C,[BY],1,3,0,0,0,ED,0,C,[],3,3,0,0,0,Q8,0,C,[ED],0,3,0,0,["bg",W(AIc)],P6,0,B8,[],12,0,0,0,0,P7,0,B8,[],12,0,0,0,0,P_,0,B8,[],12,0,0,0,0,Qa,0,B8,[],12,0,0,0,0,P9,0,B8,[],12,0,0,0,0,P$,0,B8,[],12,0,0,0,0,P4,0,B8,[],12,0,0,0,0,P5,0,B8,[],12,0,0,0,0,P3,0,B8,[],12,0,0,0,0,KY,0,C,[],3,3,0,0,0,NR,0,C,[KY],0,3,0,0,0,MS,0,C,[BY],4,3,0,0,0]);
Co([Nu,0,C,[],3,3,0,0,0,Nd,0,C,[Nu],0,0,0,0,["e",N(AAG),"fp",N(AJM)],Oj,0,C,[ED],0,3,0,0,0,KV,0,EP,[],0,0,0,0,["d8",Z(XM),"ez",BG(AKH),"ef",W(Vx)],Ok,0,Bc,[],0,0,0,0,["eM",N(AIy)],KA,0,Bc,[],0,0,0,0,["eM",N(T2)],NQ,0,Bc,[],0,0,0,0,["eM",N(Tr)],NP,0,Bc,[],0,0,0,0,["eM",N(XF)],QC,0,Bc,[],0,0,0,0,["eM",N(ZZ)],LV,0,Bc,[],0,0,0,0,["eM",N(AIA)],Ll,0,Bc,[],0,0,0,0,["eM",N(AEi)],M4,0,Bc,[],0,0,0,0,["eM",N(AF4)],Kw,0,Bc,[],0,0,0,0,["eM",N(AKd)],Kz,0,Bc,[],0,0,0,0,["eM",N(Wq)],Lg,0,Bc,[],0,0,0,0,["eM",N(AI1)],L$,0,Bc,
[],0,0,0,0,["eM",N(ACn)],Mc,0,Bc,[],0,0,0,0,["eM",N(AFr)],OH,0,Bc,[],0,0,0,0,["eM",N(AIb)],N9,0,Bc,[],0,0,0,0,["eM",N(AJJ)],KK,0,Bc,[],0,0,0,0,["eM",N(V$)],Hk,0,Bc,[],0,0,0,0,["eM",N(AEm)],NI,0,Hk,[],0,0,0,0,["eM",N(AG4)],Tt,0,C,[G4],0,0,0,0,0,Fh,0,EV,[],0,0,0,0,["bg",W(AEw)],KL,0,C,[],32,0,0,Jf,0,Qh,0,C,[BY,DT],1,3,0,0,["g1",Bm(ABw),"g2",Bm(ACq),"g3",Z(R3),"g4",N(Se),"g5",Z(YS)],Fk,0,C,[BY],3,3,0,0,0,HC,0,C,[Fk],0,0,0,0,["gI",N(Z9)],ACQ,0,C,[],0,3,0,0,0,Fx,0,C,[G4,C1],0,3,0,0,0,Ln,0,C,[C1],0,3,0,0,0,Gd,0,C,
[],4,3,0,0,0,KM,0,C,[EY],0,0,0,0,0,Q_,0,C,[],3,3,0,0,0,Os,0,C,[Q_],3,3,0,0,0,O_,0,C,[],3,3,0,0,0,FI,0,C,[Os,O_],1,3,0,0,0,Gg,0,FI,[],0,3,0,0,0,Gz,0,Gg,[],0,3,0,0,0,FD,0,Gz,[],1,3,0,0,0,Ck,0,FD,[],0,3,0,0,["g6",N(AAl)],Fi,0,C,[Fk],0,0,0,0,["gI",N(ADN)],Ud,0,C,[],0,0,0,0,0,B5,0,FI,[],0,3,0,0,0,HI,0,C,[CF],1,3,0,0,0,Kd,0,HI,[],0,3,0,0,0,G7,"IllegalCharsetNameException",14,Bs,[],0,3,0,0,0,L3,0,C,[],3,3,0,0,0,IB,0,C,[L3],0,3,0,0,0,Kg,0,C,[],1,3,0,0,0]);
Co([Of,0,Kg,[],0,3,0,0,0,O7,0,FU,[],0,0,0,0,0,R7,0,C,[],4,3,0,0,0,Rf,"NoSuchElementException",11,BA,[],0,3,0,0,0,Bf,"GdxRuntimeException",3,BA,[],0,3,0,0,0,Wm,0,C,[],4,3,0,0,0,Dj,0,C,[ED],0,3,0,0,["bg",W(TE)],Xo,0,C,[],4,3,0,0,0,Q4,0,C,[],32,0,0,J0,0,JV,"ConcurrentModificationException",11,BA,[],0,3,0,0,0,J4,0,C,[],1,3,0,0,0,Mv,0,J4,[],0,3,0,0,0,Eo,0,FD,[],0,3,0,0,["g6",N(Yr)],Wz,0,Dr,[CF],0,3,0,0,0,AEF,0,C,[],0,0,0,0,0,AFi,0,C,[],4,3,0,0,0,Jm,0,C,[],0,3,0,0,0,IW,0,C,[CW],0,3,0,Ho,0,N6,0,C,[CW],0,3,0,0,0,Ls,
0,C,[C1,CF],4,3,0,0,0,JN,0,C,[],3,3,0,0,0,Qm,0,C,[],3,3,0,0,0,Lm,0,C,[ED,JN,Qm],0,0,0,0,["bg",W(AFj)],Ps,0,C,[C1],0,3,0,0,0,AFA,0,C,[],4,3,0,0,0,K0,0,C,[CW],3,3,0,0,0,NK,0,C,[K0],0,3,0,0,0,PK,0,C,[],0,3,0,0,0,DG,0,C,[],1,3,0,0,0,Gn,0,DG,[CF],1,3,0,0,0,EF,0,DG,[CF],1,3,0,0,0,FE,0,C,[],4,3,0,0,0,E2,0,DG,[CF],1,3,0,0,0,Je,0,C,[CW],3,3,0,0,0,Ny,0,C,[Je],0,3,0,0,["fA",W(Yn),"fI",W(AFP),"fG",Z(ADQ),"ga",Bm(Xk),"gi",Bm(TM)],Il,0,C,[Je],0,3,0,Iq,["fA",W(T0),"fI",W(ADh),"fG",Z(Ua),"ga",Bm(AHp),"gi",Bm(WF)],Gr,0,DG,[CF],
1,3,0,0,0,Dv,0,C,[],3,3,0,0,0,Db,0,EF,[Dv],0,0,0,0,0,ACI,0,C,[BY],1,3,0,0,0,FH,0,Gn,[],1,0,0,0,0,EK,0,FH,[],0,0,0,0,["gs",N(ADK),"gw",Bm(ABL),"gk",W(RJ)],Fy,0,E2,[],1,0,0,0,0,Hc,0,Fy,[],0,0,0,0,["gx",N(AE0),"gl",Bm(ADY),"gk",W(AEg)],F7,0,Gr,[],1,0,0,0,0,Qz,0,F7,[],0,0,0,0,["gy",N(X7)],F2,0,FH,[Dv],1,0,0,0,["gk",W(ABf)],Lh,0,F2,[],0,0,0,0,["gs",N(X0),"gw",Bm(RI)],On,0,F2,[],0,0,0,0,["gs",N(AHn),"gw",Bm(TN)],FA,0,Fy,[Dv],1,0,0,0,["gk",W(AEs),"cV",W(AFy)]]);
Co([K6,0,FA,[],0,0,0,0,["gx",N(ABo),"gl",Bm(AFs)],M9,0,FA,[],0,0,0,0,["gx",N(RT),"gl",Bm(ABc)],Ir,0,BA,[],0,3,0,0,0,Hr,"ReadOnlyBufferException",13,Ir,[],0,3,0,0,0,JR,"BufferUnderflowException",13,BA,[],0,3,0,0,0,PQ,0,C,[],0,3,0,J9,0,AI5,0,C,[],4,3,0,0,0,XX,0,C,[],4,3,0,0,0,Fq,0,F7,[Dv],1,0,0,0,["cV",W(AF0)],KX,0,Fq,[],0,0,0,0,["gy",N(VR)],Ms,0,Fq,[],0,0,0,0,["gy",N(ADx)],G2,0,BR,[],12,3,0,0,0,WW,0,C,[],4,3,0,0,0,AFd,0,C,[ED,JN],3,0,0,0,0,Iz,"BufferOverflowException",13,BA,[],0,3,0,0,0,JA,0,C,[Fk],0,0,0,0,["gI",
N(Zl)],Oa,0,C,[],0,3,0,0,0,MJ,0,CM,[],0,0,0,0,0,MH,0,CM,[],0,0,0,0,["fs",N(TZ),"gC",N(R0),"gB",Bm(AB9)],WZ,0,C,[],0,3,0,0,0,MG,0,C,[H6],1,3,0,0,["gN",N(AKo),"g7",W(Va)],ADB,0,C,[BY],1,3,0,0,0,KQ,0,C,[],32,0,0,JL,0,Ey,0,EV,[],0,0,0,0,["bg",W(U0)],KO,0,CM,[],0,0,0,0,["fs",N(U4),"gC",N(ACL),"gB",Bm(TJ)],KP,0,CM,[],0,0,0,0,["fs",N(Ye),"gC",N(Sz),"gB",Bm(YV)],HR,0,C,[Fk],0,0,0,0,["gI",N(AJC)],Ic,0,C,[Do],0,0,0,0,["gI",N(Xd)]]);
let AM0=ALC(AMu),AMW=ALC(T4),AMX=ALC(AMv),AMY=ALC(AMw),AMZ=ALC(ACO),AMV=ALC(ACG),AM1=ALC(AD3),AM2=ALC(W4);ALn(["Can\'t enter monitor from another thread synchronously","<java_object>@","null","UTF-8","BIG_ENDIAN","LITTLE_ENDIAN","canvas","Android","Mac","Win","Linux","FreeBSD","iPhone","iPod","iPad","enabled","disabled","childrenOnly","keyboard","scroll","touchDown","touchUp","touchDragged","mouseMoved","enter","exit","scrolled","keyDown","keyUp","keyTyped","Class cannot be created (missing no-arg constructor): ",
"none","all","table","cell","actor","OnPlane","Back","Front","bounces cannot be < 2 or > 5: ","loadFactor must be > 0 and < 1: ","key cannot be null.","Lambert","Phong","both","top","bottom","Enabled","EnabledUntilCycleEnd","Disabled","<init>",": ","String is null","String is empty","String contains invalid digits: ","String contains digits out of radix ","The value is too big for integer type","The value is too big for int type: ","Illegal radix: ","","java.runtime.name","userAgent","os.name","Windows","OS X",
"no OS",".html","index.html","index-debug.html","assets/","assets.txt","Loading asset : ","gdx.wasm.js","Error compiling shader: ","TrigTools.sinSmooth() at "," FPS","index can\'t be >= size: "," >= ","0","LOAD_ASSETS","APP_CREATE","APP_LOOP","Either src or dest is null","java.version","1.8","TeaVM","file.separator","/","path.separator",":","line.separator","\n","java.io.tmpdir","/tmp","java.vm.version","user.home","Unsupported asset type ","Loading script : ","px","mousedown","mouseup","mousemove","wheel",
"touchstart","CSS1Compat","touchmove","touchcancel","touchend","keydown","keypress","keyup","hidden","capacity must be >= 0: ","The required capacity is too large: ","The value is too big for long type","The value is too big for long type: ","Can only cope with FloatBuffer and ShortBuffer at the moment","GL error: ",", ","GLVersion","OpenGL ES (\\d(\\.\\d){0,2})","WebGL (\\d(\\.\\d){0,2})","(\\d(\\.\\d){0,2})","Invalid version string: ","\\.","Error parsing number: ",", assuming: ","libGDX GL","Desktop","HeadlessDesktop",
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
H.prototype.valueOf=H.prototype.toString;C.prototype.toString=function(){return Br(LP(this));};
C.prototype.__teavm_class__=function(){return ALe(this);};
AI8.main=ALN(ADt);
AI8.main.javaException=ALA;
let Be=Symbol('jsoClass');
(function(){var c;c=GU.prototype;c[Be]=true;c.onAnimationFrame=c.gH;c=I4.prototype;c[Be]=true;c.handleEvent=c.gI;c=Hz.prototype;c[Be]=true;c.handleEvent=c.gI;c=HA.prototype;c[Be]=true;c.handleEvent=c.gI;c=Jl.prototype;c[Be]=true;c.fullscreenChanged=c.gJ;c=IZ.prototype;c[Be]=true;c.denied=c.gM;c.prompt=c.gL;c.granted=c.gK;c=K5.prototype;c.removeEventListener=c.gQ;c.dispatchEvent=c.gR;c.get=c.gN;c.addEventListener=c.gT;Object.defineProperty(c,"length",{get:c.gS});c=Io.prototype;c[Be]=true;c.handleEvent=c.gI;c
=Ip.prototype;c[Be]=true;c.handleEvent=c.gI;c=In.prototype;c[Be]=true;c.handleEvent=c.gI;c=HJ.prototype;c[Be]=true;c.unlockFunction=c.gU;c=I6.prototype;c[Be]=true;c.accept=c.gV;c=I5.prototype;c[Be]=true;c.accept=c.gV;c=Mn.prototype;c.removeEventListener=c.g0;c.dispatchEvent=c.gX;c.addEventListener=c.gZ;c=Ji.prototype;c[Be]=true;c.handleEvent=c.gI;c=MS.prototype;c[Be]=true;c=Qh.prototype;c.removeEventListener=c.g3;c.dispatchEvent=c.g4;c.addEventListener=c.g5;c=HC.prototype;c[Be]=true;c.handleEvent=c.gI;c=Fi.prototype;c[Be]
=true;c.handleEvent=c.gI;c=JA.prototype;c[Be]=true;c.handleEvent=c.gI;c=MG.prototype;c.get=c.gN;Object.defineProperty(c,"length",{get:c.g7});c=HR.prototype;c[Be]=true;c.handleEvent=c.gI;c=Ic.prototype;c[Be]=true;c.handleEvent=c.gI;})();
}));
