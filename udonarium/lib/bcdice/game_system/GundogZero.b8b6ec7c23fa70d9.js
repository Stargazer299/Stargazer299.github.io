(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[493],{5273:(j,J,Z)=>{Z(9993),Opal.modules["bcdice/game_system/Gundog"]=function(e){var p,H,$,R,m,s,A,K,P,h=e.module,q=e.klass,_=e.const_set,c=e.send2,v=e.find_super,y=e.def,G=e.eqeq,o=e.truthy,k=e.rb_ge,b=e.rb_le,L=e.rb_divide,E=e.rb_minus,n=e.rb_times,C=e.rb_plus,w=[],T=e.nil;return p=w,H=P=[h(w[0],"BCDice")].concat(p),A=[h(P[0],"GameSystem")].concat(H),K=e.$r(A),$=A,m=[R=q(A[0],K("Base"),"Gundog")].concat($),s=e.$r(m),_(m[0],"ID","Gundog"),_(m[0],"NAME","\u30ac\u30f3\u30c9\u30c3\u30b0"),_(m[0],"SORT_KEY","\u304b\u3093\u3068\u3064\u304f"),_(m[0],"HELP_MESSAGE","\u5931\u6557\u3001\u6210\u529f\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u3068\u30ed\u30fc\u30eb\u306e\u9054\u6210\u5024\u306e\u81ea\u52d5\u5224\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002\nnD9\u30ed\u30fc\u30eb\u3082\u5bfe\u5fdc\u3002\n"),y(R,"$initialize",function u(D){var r=this;return u.$$p=null,c(r,v(r,"initialize",u,!1,!0),"initialize",[D],null),r.enabled_d9=!0}),y(R,"$result_1d100",function(D,i,r,t){var l=T,a=T;return G(r,"<=")?o(k(D,100))?s("Result").$fumble("\u30d5\u30a1\u30f3\u30d6\u30eb"):o(b(D,1))?s("Result").$critical("\u7d76\u5bfe\u6210\u529f(\u9054\u6210\u50241+SL)"):G(t,"?")?s("Result").$nothing():o(b(D,t))?(l=L(D,10).$to_i(),a=E(D,n(l,10)),o(k(l,10))&&(l=0),o(k(a,10))&&(a=0),o(b(a,0))?s("Result").$critical("\u30af\u30ea\u30c6\u30a3\u30ab\u30eb(\u9054\u6210\u502420+SL)"):s("Result").$success("\u6210\u529f(\u9054\u6210\u5024"+C(l,a)+"+SL)")):s("Result").$failure("\u5931\u6557"):T})},Opal.queue(function(e){var w,B,K,f,d,$,S,H,F,h=e.module,q=e.klass,_=e.const_set,c=e.truthy,v=e.to_ary,y=e.rb_plus,G=e.rb_lt,o=e.rb_gt,k=e.thrower,b=e.def,E=[],n=e.nil;return e.top.$require("bcdice/game_system/Gundog"),w=E,B=F=[h(E[0],"BCDice")].concat(w),S=[h(F[0],"GameSystem")].concat(B),H=e.$r(S),K=S,d=[f=q(S[0],H("Gundog"),"GundogZero")].concat(K),$=e.$r(d),f.$$prototype.randomizer=n,_(d[0],"ID","GundogZero"),_(d[0],"NAME","\u30ac\u30f3\u30c9\u30c3\u30b0\u30bc\u30ed"),_(d[0],"SORT_KEY","\u304b\u3093\u3068\u3064\u304f\u305b\u308d"),_(d[0],"HELP_MESSAGE","\u5931\u6557\u3001\u6210\u529f\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u3068\u30ed\u30fc\u30eb\u306e\u9054\u6210\u5024\u306e\u81ea\u52d5\u5224\u5b9a\u3092\u884c\u3044\u307e\u3059\u3002\nnD9\u30ed\u30fc\u30eb\u3082\u5bfe\u5fdc\u3002\n\u30fb\u30c0\u30e1\u30fc\u30b8\u30da\u30ca\u30eb\u30c6\u30a3\u8868\u3000\u3000(\u301cDPTx) (x:\u4fee\u6b63)\n\u3000\u5c04\u6483(SDPT)\u3001\u683c\u95d8(MDPT)\u3001\u8eca\u4e21(VDPT)\u3001\u6c4e\u7528(GDPT)\u306e\u5404\u8868\u3092\u5f15\u304f\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002\n\u3000\u4fee\u6b63\u3092\u5f8c\u308d\u306b\u66f8\u304f\u3053\u3068\u3082\u51fa\u6765\u307e\u3059\u3002\n\u30fb\u30d5\u30a1\u30f3\u30d6\u30eb\u8868\u3000\u3000\u3000\u3000\u3000\u3000(\u301cFTx)  (x:\u4fee\u6b63)\n\u3000\u5c04\u6483(SFT)\u3001\u683c\u95d8(MFT)\u3001\u6295\u64f2(TFT)\u306e\u5404\u8868\u3092\u5f15\u304f\u3053\u3068\u304c\u51fa\u6765\u307e\u3059\u3002\n\u3000\u4fee\u6b63\u3092\u5f8c\u308d\u306b\u66f8\u304f\u3053\u3068\u3082\u51fa\u6765\u307e\u3059\u3002\n"),f.$register_prefix(".DPT",".FT"),b(f,"$eval_game_system_specific_command",function(s){try{k("eval_return");var D,i,t,r=this,l=n,a=n,x=n,M=n,z=n,g=n,V=n;return t=s.$upcase(),l=[],a="",x="",M=0,c(/(\w)DPT([+\-\d]*)/i["$=~"](t))&&(a="\u30c0\u30e1\u30fc\u30b8\u30da\u30ca\u30eb\u30c6\u30a3\u30fc",z=$("Regexp").$last_match(1),c($("Regexp").$last_match(2))&&(M=$("ArithmeticEvaluator").$eval($("Regexp").$last_match(2))),i=r.$getDamageTypeAndTable(z),x=null==(D=v(i))[0]?n:D[0],l=null==D[1]?n:D[1]),c(/(\w)FT([+\-\d]*)/i["$=~"](t))&&(a="\u30d5\u30a1\u30f3\u30d6\u30eb",z=$("Regexp").$last_match(1),c($("Regexp").$last_match(2))&&(M=$("ArithmeticEvaluator").$eval($("Regexp").$last_match(2))),i=r.$getFumbleTypeAndTable(z),x=null==(D=v(i))[0]?n:D[0],l=null==D[1]?n:D[1]),c(x["$empty?"]())?"1":(V=g=y(y(r.randomizer.$roll_index(10),r.randomizer.$roll_index(10)),M),c(G(g,0))&&(g=0),c(o(g,18))&&(g=18),""+x+a+"\u8868["+V+"] \uff1e "+l["$[]"](g))}catch(N){if(N===e.t_eval_return)return N.$v;throw N}}),b(f,"$getDamageTypeAndTable",function(s){var u,D,r=n,t=n;switch(s){case"S":r="\u5c04\u6483",t=["\u5bfe\u8c61\u306f[\u6b7b\u4ea1]","[\u8ffd\u52a0D]4D6/[\u51fa\u8840]2D6/[\u91cd\u50b7]-30\uff05/[\u6726\u6727\u5224\u5b9a]15","[\u8ffd\u52a0D]3D6/[\u51fa\u8840]2D6/[\u91cd\u50b7]-30\uff05/[\u6726\u6727\u5224\u5b9a]14","[\u8ffd\u52a0D]3D6/[\u51fa\u8840]2D6/[\u91cd\u50b7]-20\uff05/[\u6726\u6727\u5224\u5b9a]14","[\u8ffd\u52a0D]3D6/[\u51fa\u8840]1D6/[\u91cd\u50b7]-20\uff05/[\u6726\u6727\u5224\u5b9a]12","[\u8ffd\u52a0D]2D6/[\u51fa\u8840]1D6/[\u91cd\u50b7]-10\uff05/[\u6726\u6727\u5224\u5b9a]12","[\u8ffd\u52a0D]2D6/[\u8efd\u50b7]-20\uff05/[\u6726\u6727\u5224\u5b9a]10","[\u8ffd\u52a0D]2D6/[\u8efd\u50b7]-10\uff05/[\u6726\u6727\u5224\u5b9a]10","[\u8ffd\u52a0D]2D6/[\u8efd\u50b7]-20\uff05/[\u6726\u6727\u5224\u5b9a]8","[\u8ffd\u52a0D]2D6/[\u8efd\u50b7]-20\uff05/[\u6726\u6727\u5224\u5b9a]6","[\u8ffd\u52a0D]2D6/[\u8efd\u50b7]-10\uff05/[\u6726\u6727\u5224\u5b9a]4","[\u8ffd\u52a0D]1D6/[\u8efd\u50b7]-20\uff05","[\u8ffd\u52a0D]1D6/[\u8efd\u50b7]-20\uff05","[\u8ffd\u52a0D]1D6/[\u8efd\u50b7]-10\uff05","[\u8efd\u50b7]-20\uff05","[\u8efd\u50b7]-10\uff05","[\u8efd\u50b7]-10\uff05","\u624b\u306b\u6301\u3063\u305f\u6b66\u5668\u3092\u843d\u3068\u3059","\u30da\u30ca\u30eb\u30c6\u30a3\u30fc\u7121\u3057"];break;case"M":r="\u683c\u95d8",t=["\u5bfe\u8c61\u306f[\u6b7b\u4ea1]","[\u8ffd\u52a0D]3D6/[\u51fa\u8840]2D6/[\u91cd\u50b7]-30\uff05/[\u6726\u6727\u5224\u5b9a]15","[\u8ffd\u52a0D]2D6/[\u51fa\u8840]2D6/[\u91cd\u50b7]-30\uff05/[\u6726\u6727\u5224\u5b9a]14","[\u8ffd\u52a0D]2D6/[\u51fa\u8840]1D6/[\u91cd\u50b7]-20\uff05/[\u6726\u6727\u5224\u5b9a]14","[\u8ffd\u52a0D]3D6/[\u51fa\u8840]1D6/[\u91cd\u50b7]-10\uff05/[\u6726\u6727\u5224\u5b9a]12","[\u8ffd\u52a0D]2D6/[\u8efd\u50b7]-20\uff05/[\u6726\u6727\u5224\u5b9a]12","[\u8ffd\u52a0D]2D6/[\u8efd\u50b7]-10\uff05/[\u6726\u6727\u5224\u5b9a]12","[\u8ffd\u52a0D]2D6/[\u8efd\u50b7]-10\uff05/[\u6726\u6727\u5224\u5b9a]10","[\u8ffd\u52a0D]1D6/[\u8efd\u50b7]-20\uff05/[\u6726\u6727\u5224\u5b9a]8","[\u8ffd\u52a0D]1D6/[\u8efd\u50b7]-10\uff05/[\u6726\u6727\u5224\u5b9a]8","[\u8ffd\u52a0D]1D6/[\u8efd\u50b7]-10\uff05/[\u6726\u6727\u5224\u5b9a]6","[\u8efd\u50b7]-20\uff05/[\u6726\u6727\u5224\u5b9a]6","[\u8efd\u50b7]-10\uff05/[\u6726\u6727\u5224\u5b9a]6","[\u8efd\u50b7]-10\uff05/[\u6726\u6727\u5224\u5b9a]4","[\u8efd\u50b7]-20\uff05","[\u8efd\u50b7]-10\uff05","[\u8efd\u50b7]-10\uff05","\u624b\u306b\u6301\u3063\u305f\u6b66\u5668\u3092\u843d\u3068\u3059","\u30da\u30ca\u30eb\u30c6\u30a3\u30fc\u7121\u3057"];break;case"V":r="\u8eca\u4e21",t=["[\u30af\u30e9\u30c3\u30b7\u30e5]\u3059\u308b\u3002[\u30c1\u30a7\u30a4\u30b9]\u304b\u3089\u9664\u5916","[\u4e57\u54e1D]3D6/[\u64cd\u7e26\u6027]-20\uff05/[\u30b9\u30d4\u30f3\u5224\u5b9a]","[\u4e57\u54e1D]3D6/[\u64cd\u7e26\u6027]-20\uff05/[\u30b9\u30d4\u30f3\u5224\u5b9a]","[\u4e57\u54e1D]2D6/[\u64cd\u7e26\u6027]-10\uff05/[\u30b9\u30d4\u30f3\u5224\u5b9a]","[\u4e57\u54e1D]2D6/[\u64cd\u7e26\u6027]-10\uff05/[\u30b9\u30d4\u30f3\u5224\u5b9a]","[\u4e57\u54e1D]3D6/[\u30b9\u30d4\u30fc\u30c9]-2/[\u30b9\u30d4\u30f3\u5224\u5b9a]","[\u4e57\u54e1D]3D6/[\u30b9\u30d4\u30fc\u30c9]-2/[\u30b9\u30d4\u30f3\u5224\u5b9a]","[\u4e57\u54e1D]2D6/[\u30b9\u30d4\u30fc\u30c9]-1/[\u30b9\u30d4\u30f3\u5224\u5b9a]","[\u4e57\u54e1D]2D6/[\u30b9\u30d4\u30fc\u30c9]-1/[\u30b9\u30d4\u30f3\u5224\u5b9a]","[\u4e57\u54e1D]2D6/[\u64cd\u7e26\u5224\u5b9a]-20\uff05","[\u4e57\u54e1D]2D6/[\u64cd\u7e26\u5224\u5b9a]-20\uff05","[\u4e57\u54e1D]1D6/[\u64cd\u7e26\u5224\u5b9a]-10\uff05","[\u4e57\u54e1D]1D6/[\u64cd\u7e26\u5224\u5b9a]-10\uff05","[\u30b9\u30d4\u30f3\u5224\u5b9a]","[\u30b9\u30d4\u30f3\u5224\u5b9a]","\u4e57\u54e1\u306b[\u30b7\u30e7\u30c3\u30af]-20\uff05","\u4e57\u54e1\u306b[\u30b7\u30e7\u30c3\u30af]-10\uff05","\u4e57\u54e1\u306b[\u30b7\u30e7\u30c3\u30af]-10\uff05","\u30da\u30ca\u30eb\u30c6\u30a3\u30fc\u7121\u3057"];break;case"G":r="\u6c4e\u7528",t=["\u5bfe\u8c61\u306f[\u6b7b\u4ea1]","[\u8ffd\u52a0D]4D6/[\u51fa\u8840]2D6/[\u91cd\u50b7]-30\uff05/[\u6726\u6727\u5224\u5b9a]18","[\u8ffd\u52a0D]4D6/[\u51fa\u8840]2D6/[\u91cd\u50b7]-30\uff05/[\u6726\u6727\u5224\u5b9a]16","[\u8ffd\u52a0D]3D6/[\u51fa\u8840]2D6/[\u91cd\u50b7]-20\uff05/[\u6726\u6727\u5224\u5b9a]14","[\u8ffd\u52a0D]3D6/[\u51fa\u8840]2D6/[\u91cd\u50b7]-20\uff05/[\u6726\u6727\u5224\u5b9a]14","[\u8ffd\u52a0D]3D6/[\u51fa\u8840]1D6/[\u91cd\u50b7]-10\uff05/[\u6726\u6727\u5224\u5b9a]12","[\u8ffd\u52a0D]2D6/[\u51fa\u8840]1D6/[\u91cd\u50b7]-10\uff05/[\u6726\u6727\u5224\u5b9a]12","[\u8ffd\u52a0D]2D6/[\u8efd\u50b7]-30\uff05/[\u6726\u6727\u5224\u5b9a]12","[\u8ffd\u52a0D]2D6/[\u8efd\u50b7]-30\uff05/[\u6726\u6727\u5224\u5b9a]10","[\u8ffd\u52a0D]2D6/[\u8efd\u50b7]-30\uff05/[\u6726\u6727\u5224\u5b9a]8","[\u8ffd\u52a0D]2D6/[\u8efd\u50b7]-20\uff05/[\u6726\u6727\u5224\u5b9a]8","[\u8ffd\u52a0D]2D6/[\u8efd\u50b7]-20\uff05/[\u6726\u6727\u5224\u5b9a]6","[\u8ffd\u52a0D]2D6/[\u8efd\u50b7]-10\uff05/[\u6726\u6727\u5224\u5b9a]6","[\u8ffd\u52a0D]1D6/[\u8efd\u50b7]-20\uff05/[\u6726\u6727\u5224\u5b9a]4","[\u8ffd\u52a0D]1D6/[\u8efd\u50b7]-20\uff05","[\u8ffd\u52a0D]1D6/[\u8efd\u50b7]-10\uff05","[\u8efd\u50b7]-20\uff05","[\u8efd\u50b7]-10\uff05","\u30da\u30ca\u30eb\u30c6\u30a3\u30fc\u7121\u3057"];break;default:D=this.$getDamageTypeAndTable(s="S"),r=null==(u=v(D))[0]?n:u[0],t=null==u[1]?n:u[1]}return[r,t]}),b(f,"$getFumbleTypeAndTable",function(s){var u,D,r=n,t=n;switch(s){case"S":r="\u5c04\u6483",t=["\u9283\u5668\u304c\u66b4\u767a\u3001\u81ea\u5206\u306b\u547d\u4e2d\u3002[\u8cab\u901aD]","\u9283\u5668\u304c\u66b4\u767a\u3001\u81ea\u5206\u306b\u547d\u4e2d\u3002[\u975e\u8cab\u901aD]","\u8aa4\u5c04\u3002\u30e9\u30f3\u30c0\u30e0\u306b\u5473\u65b9\u306b\u547d\u4e2d\u3002[\u8cab\u901aD]","\u8aa4\u5c04\u3002\u30e9\u30f3\u30c0\u30e0\u306b\u5473\u65b9\u306b\u547d\u4e2d\u3002[\u975e\u8cab\u901aD]","\u9283\u5668\u304c\u5b8c\u5168\u306b\u6545\u969c","\u9283\u5668\u304c\u5b8c\u5168\u306b\u6545\u969c","\u6545\u969c\u3002\u3008\u30e1\u30ab\u30cb\u30c3\u30af\u3009\u5224\u5b9a\u306b\u6210\u529f\u3059\u308b\u307e\u3067\u5c04\u6483\u4e0d\u53ef","\u6545\u969c\u3002\u3008\u30e1\u30ab\u30cb\u30c3\u30af\u3009\u5224\u5b9a\u306b\u6210\u529f\u3059\u308b\u307e\u3067\u5c04\u6483\u4e0d\u53ef","\u4f5c\u52d5\u4e0d\u826f\u3002[\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528]\u30922\u56de\u884c\u3063\u3066\u4fee\u7406\u3059\u308b\u307e\u3067\u5c04\u6483\u4e0d\u53ef","\u4f5c\u52d5\u4e0d\u826f\u3002[\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528]\u30922\u56de\u884c\u3063\u3066\u4fee\u7406\u3059\u308b\u307e\u3067\u5c04\u6483\u4e0d\u53ef","\u4f5c\u52d5\u4e0d\u826f\u3002[\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528]\u3092\u884c\u3063\u3066\u4fee\u7406\u3059\u308b\u307e\u3067\u5c04\u6483\u4e0d\u53ef","\u4f5c\u52d5\u4e0d\u826f\u3002[\u30a2\u30a4\u30c6\u30e0\u4f7f\u7528]\u3092\u884c\u3063\u3066\u4fee\u7406\u3059\u308b\u307e\u3067\u5c04\u6483\u4e0d\u53ef","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u4e0d\u5b89\u5b9a]","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u4e0d\u5b89\u5b9a]","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u30b7\u30e7\u30c3\u30af]-20\uff05","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u30b7\u30e7\u30c3\u30af]-20\uff05","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u30b7\u30e7\u30c3\u30af]-10\uff05","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u30b7\u30e7\u30c3\u30af]-10\uff05","\u30da\u30ca\u30eb\u30c6\u30a3\u30fc\u7121\u3057"];break;case"M":r="\u683c\u95d8",t=["\u907f\u3051\u3089\u308c\u3066[\u8ee2\u5012]\u3001[\u6726\u6727]\u72b6\u614b","\u30e9\u30f3\u30c0\u30e0\u306b[\u81f3\u8fd1\u8ddd\u96e2]\u306e\u5473\u65b9(\u5c45\u306a\u3051\u308c\u3070\u81ea\u5206)\u306b\u547d\u4e2d\u3002[\u8cab\u901aD]","\u30e9\u30f3\u30c0\u30e0\u306b[\u81f3\u8fd1\u8ddd\u96e2]\u306e\u5473\u65b9(\u5c45\u306a\u3051\u308c\u3070\u81ea\u5206)\u306b\u547d\u4e2d\u3002[\u8cab\u901aD]","\u6b66\u5668\u304c\u5b8c\u5168\u306b\u58ca\u308c\u308b","\u6b66\u5668\u304c\u30ac\u30bf\u3064\u304f\u3002\u3008\u624b\u5148\u3009\u5224\u5b9a\u306b\u6210\u529f\u3059\u308b\u307e\u3067\u4f7f\u7528\u4e0d\u53ef","\u6b66\u5668\u304c\u30ac\u30bf\u3064\u304f\u3002\u3008\u624b\u5148\u3009\u5224\u5b9a\u306b\u6210\u529f\u3059\u308b\u307e\u3067\u4f7f\u7528\u4e0d\u53ef","\u7121\u7406\u306a\u59ff\u52e2\u3067\u7b4b\u3092\u4f38\u3070\u3059\u3002[\u8efd\u50b7]-30\uff05","\u7121\u7406\u306a\u59ff\u52e2\u3067\u7b4b\u3092\u4f38\u3070\u3059\u3002[\u8efd\u50b7]-30\uff05","\u7121\u7406\u306a\u59ff\u52e2\u3067\u7b4b\u3092\u4f38\u3070\u3059\u3002[\u8efd\u50b7]-20\uff05","\u7121\u7406\u306a\u59ff\u52e2\u3067\u7b4b\u3092\u4f38\u3070\u3059\u3002[\u8efd\u50b7]-20\uff05","\u7121\u7406\u306a\u59ff\u52e2\u3067\u7b4b\u3092\u4f38\u3070\u3059\u3002[\u8efd\u50b7]-10\uff05","\u7121\u7406\u306a\u59ff\u52e2\u3067\u7b4b\u3092\u4f38\u3070\u3059\u3002[\u8efd\u50b7]-10\uff05","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u4e0d\u5b89\u5b9a]","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u4e0d\u5b89\u5b9a]","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u30b7\u30e7\u30c3\u30af]-20\uff05","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u30b7\u30e7\u30c3\u30af]-20\uff05","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u30b7\u30e7\u30c3\u30af]-10\uff05","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u30b7\u30e7\u30c3\u30af]-10\uff05","\u30da\u30ca\u30eb\u30c6\u30a3\u30fc\u7121\u3057"];break;case"T":r="\u6295\u64f2",t=["[\u8ee2\u5012]\u3001[\u6726\u6727]\u72b6\u614b","\u81ea\u5206\u306b\u547d\u4e2d\u3002[\u8cab\u901aD]","\u81ea\u5206\u306b\u547d\u4e2d\u3002[\u975e\u8cab\u901aD]","\u30e9\u30f3\u30c0\u30e0\u306b\u5473\u65b9(\u5c45\u306a\u3051\u308c\u3070\u81ea\u5206)\u306b\u547d\u4e2d\u3002[\u975e\u8cab\u901aD]","\u30e9\u30f3\u30c0\u30e0\u306b\u5473\u65b9(\u5c45\u306a\u3051\u308c\u3070\u81ea\u5206)\u306b\u547d\u4e2d\u3002[\u975e\u8cab\u901aD]","\u6b66\u5668\u304c\u5b8c\u5168\u306b\u58ca\u308c\u308b","\u6b66\u5668\u304c\u5b8c\u5168\u306b\u58ca\u308c\u308b","\u8170\u3092\u75db\u3081\u308b\u3002[\u8efd\u50b7]-30\uff05","\u80a9\u3092\u75db\u3081\u308b\u3002[\u8efd\u50b7]-20\uff05","\u80a9\u3092\u75db\u3081\u308b\u3002[\u8efd\u50b7]-20\uff05","\u8098\u306b\u9055\u548c\u611f\u3002[\u8efd\u50b7]-10\uff05","\u8098\u306b\u9055\u548c\u611f\u3002[\u8efd\u50b7]-10\uff05","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u4e0d\u5b89\u5b9a]","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u4e0d\u5b89\u5b9a]","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u30b7\u30e7\u30c3\u30af]-20\uff05","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u30b7\u30e7\u30c3\u30af]-20\uff05","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u30b7\u30e7\u30c3\u30af]-10\uff05","\u59ff\u52e2\u3092\u5d29\u3059\u3002[\u30b7\u30e7\u30c3\u30af]-10\uff05","\u30da\u30ca\u30eb\u30c6\u30a3\u30fc\u7121\u3057"];break;default:D=this.$getFumbleTypeAndTable(s="S"),r=null==(u=v(D))[0]?n:u[0],t=null==u[1]?n:u[1]}return[r,t]})})}}]);