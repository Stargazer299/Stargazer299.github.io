(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[2213],{1293:(te,re,M)=>{M(9993),Opal.queue(function(r){var Y,U,O,o,h,w,y,X,z,D=r.module,N=r.klass,C=r.const_set,s=r.truthy,E=r.rb_ge,j=r.to_ary,m=r.def,F=r.rb_gt,H=r.neqeq,R=r.rb_plus,T=r.eqeq,k=r.rb_le,I=r.rb_times,K=r.send,L=[],e=r.nil;return Y=L,U=z=[D(L[0],"BCDice")].concat(Y),y=[D(z[0],"GameSystem")].concat(U),X=r.$r(y),O=y,h=[o=N(y[0],X("Base"),"RecordOfSteam")].concat(O),w=r.$r(h),o.$$prototype.randomizer=e,C(h[0],"ID","RecordOfSteam"),C(h[0],"NAME","Record of Steam"),C(h[0],"SORT_KEY","\u308c\u3053\u304a\u3068\u304a\u3075\u3059\u3061\u3044\u3080"),C(h[0],"HELP_MESSAGE","2S2@1\nRecordOfSteam : (2S2@1) \uff1e 1,2,3,4 \uff1e 1\u56de\u8ee2 \uff1e \u6210\u529f\u65702\n\n4S3@2\nRecordOfSteam : (4S3@2) \uff1e 2,1,2,4,4,4,2,3,4,5,6,6 \uff1e 4\u56de\u8ee2 \uff1e \u6210\u529f\u65705\n"),o.$register_prefix("\\d+S\\d+"),m(o,"$eval_game_system_specific_command",function(t){var u,b,c=this,g=e,i=e,n=e,$=e,a=e,l=e,q=e,v=e,_=e,S=e;return s(/(\d+)[sS](\d+)(@(\d+))?/i["$=~"](t))?(g=w("Regexp").$last_match(1).$to_i(),i=w("Regexp").$last_match(2).$to_i(),n=w("Regexp").$last_match(4),n=(n=s($=n)?$:1).$to_i(),s(E(g,150))||s(E(n,3))?"(\u591a\u5206)\u7121\u9650\u500b\u306a\u306e\u3067\u632f\u308c\u307e\u305b\u3093\uff01 \u30e4\u30e1\u30c6\u30af\u30c0\u30b5\u30a4\u3001(\u30d7\u30ed\u30bb\u30b9\u304c)\u6b7b\u3093\u3067\u3057\u307e\u3044\u307e\u3059\u3063":(b=c.$getDiceRollResult(g,i,n,n),a=null==(u=j(b))[1]?e:u[1],l=null==u[3]?e:u[3],q=null==u[4]?e:u[4],v="("+t+") \uff1e "+(null==u[0]?e:u[0]),_=c.$getRoundCountText(null==u[2]?e:u[2]),S=c.$getSuccessText(a),""+v+_+c.$getSpecialText(l)+S+c.$getFumbleText(q))):"1"}),m(o,"$getDiceRollResult",function(t,u,b,c){var g=this,i=e,n=e,$=e,f=e,d=e,a=e,x=e,l=e,q=e;for(i=0,n=0,$="",f=0,d=!1,a=0,x=!1;s(F(t,0));){if(q=(l=g.randomizer.$roll_barabara(t,6)).$join(","),H($,"")&&($=R($,",")),$=R($,q),T(l.$uniq().$length(),1)&&T(n,0)&&(s(k(l.$uniq().$first(),c))?d=!0:T(l.$uniq().$first(),6)&&(x=!0)),g.$debug("diceList",l),s(d))return f=1,[$,i=I(t,3),n,f,a];if(s(x))return[$,i,n,f,a=1];t=0,K(l,"map",[],function v(_){var S=null==v.$$s?this:v.$$s;return null==_&&(_=e),S.$debug("diceValue",_),S.$debug("criticalValue",b),S.$debug("specialValue",c),s(k(_,b))&&(t=R(t,2),n=R(n,1)),s(k(_,u))?i=R(i,1):e},{$$s:g})}return[$,i,n,f,a]}),m(o,"$getRoundCountText",function(t){return s(k(t,0))?"":" \uff1e "+t+"\u56de\u8ee2"}),m(o,"$getSuccessText",function(t){return s(F(t,0))?" \uff1e \u6210\u529f\u6570"+t:" \uff1e \u5931\u6557"}),m(o,"$getSpecialText",function(t){return T(t,1)?" \uff1e \u30b9\u30da\u30b7\u30e3\u30eb":e}),m(o,"$getFumbleText",function(t){return T(t,1)?" \uff1e \u30d5\u30a1\u30f3\u30d6\u30eb":e})})}}]);