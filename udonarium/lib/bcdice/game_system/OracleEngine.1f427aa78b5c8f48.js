(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[2989],{978:(O,ee,K)=>{K(9993),Opal.modules["bcdice/format"]=function(i){var R,S,b,P,z,a,k=i.module,C=i.eqeqeq,y=i.def,F=i.truthy,E=i.eqeq,c=i.rb_gt,x=[],h=i.nil;return R=x,S=a=[k(x[0],"BCDice")].concat(R),P=[b=k(a[0],"Format")].concat(S),z=i.$r(P),b.$module_function(),y(b,"$comparison_operator",function(d){var j;return C("==",j=d)?"=":C("!=",j)?"<>":C(z("Symbol"),j)?d.$to_s():h}),y(b,"$modifier",function(d){return F(d["$nil?"]())?h:E(d,0)?"":F(c(d,0))?"+"+d:d.$to_s()})},Opal.queue(function(i){var T,Q,Z,u,L,f,q,G,V,I,k=i.module,C=i.klass,y=i.const_set,F=i.send2,E=i.find_super,c=i.def,x=i.eqeqeq,h=i.hash2,m=i.truthy,R=i.to_ary,w=i.send,a=i.eqeq,g=i.rb_plus,S=i.neqeq,b=i.rb_ge,P=i.rb_minus,z=i.rb_lt,B=i.rb_gt,d=i.rb_le,H=[],t=i.nil,A=i.$$$;return i.top.$require("bcdice/format"),T=H,Q=I=[k(H[0],"BCDice")].concat(T),G=[k(I[0],"GameSystem")].concat(Q),V=i.$r(G),Z=G,L=[u=C(G[0],V("Base"),"OracleEngine")].concat(Z),f=i.$r(L),(q=u.$$prototype).cmd=q.max_shift=q.times=q.randomizer=q.break=q.critical=q.fumble=t,y(L[0],"ID","OracleEngine"),y(L[0],"NAME","\u30aa\u30e9\u30af\u30eb\u30a8\u30f3\u30b8\u30f3"),y(L[0],"SORT_KEY","\u304a\u3089\u304f\u308b\u3048\u3093\u3057\u3093"),y(L[0],"HELP_MESSAGE","  \u30fb\u30af\u30e9\u30c3\u30c1\u30ed\u30fc\u30eb \uff08xCL+y>=z)\n  \u30c0\u30a4\u30b9\u3092x\u500b\u632f\u308a\u30011\u500b\u4ee5\u4e0a\u76ee\u6a19\u30b7\u30d5\u30c8z\u306b\u5230\u9054\u3057\u305f\u304b\u5224\u5b9a\u3057\u307e\u3059\u3002\u4fee\u6b63y\u306f\u5168\u3066\u306e\u30c0\u30a4\u30b9\u306b\u304b\u304b\u308a\u307e\u3059\u3002\n  \u6210\u529f\u3057\u305f\u6642\u306f\u76ee\u6a19\u30b7\u30d5\u30c8\u3092\u3001\u5931\u6557\u3057\u305f\u6642\u306f\u30c0\u30a4\u30b9\u306e\u6700\u5927\u5024-1\u30b7\u30d5\u30c8\u3092\u8fd4\u3057\u307e\u3059\n  z\u304c\u6307\u5b9a\u3055\u308c\u306a\u3044\u3068\u304d\u306f\u3001\u30c0\u30a4\u30b9\u3092x\u500b\u3092\u632f\u308a\u3001\u305d\u308c\u306b\u4fee\u6b63y\u3057\u305f\u3082\u306e\u3092\u8fd4\u3057\u307e\u3059\u3002\n  \u901a\u5e38\u3001\u6700\u4f4e\u30b7\u30d5\u30c8\u306f1\u3001\u6700\u5927\u30b7\u30d5\u30c8\u306f6\u3067\u3059\u3002\u76ee\u6a19\u30b7\u30d5\u30c8\u3082\u305d\u308d\u3048\u3089\u308c\u307e\u3059\u3002\n  \u307e\u305f\u3001CL\u306e\u5f8c\u306b7\u3092\u5165\u308c\u3001(xCL7+y>=z)\u3068\u5165\u529b\u3059\u308b\u3068\u6700\u5927\u30b7\u30d5\u30c8\u304c7\u306b\u306a\u308a\u307e\u3059\u3002\n \u30fb\u5224\u5b9a (xR6+y@c#f$b>=z)\n  \u30c0\u30a4\u30b9\u3092x\u500b\u632f\u308a\u3001\u5927\u304d\u3044\u3082\u306e2\u3064\u3060\u3051\u3092\u898b\u3066\u9054\u6210\u5024\u3092\u7b97\u51fa\u3057\u3001\u6210\u5426\u3092\u5224\u5b9a\u3057\u307e\u3059\u3002\u4fee\u6b63y\u306f\u9054\u6210\u5024\u306b\u304b\u304b\u308a\u307e\u3059\u3002\n  \u30c0\u30a4\u30b9\u30d6\u30ec\u30a4\u30af\u3068\u3057\u3066b\u3092\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024\u3068\u3057\u3066c\u3092\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u5024\u3068\u3057\u3066f\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002\n  \u305d\u308c\u305e\u308c\u6307\u5b9a\u3055\u308c\u306a\u3044\u6642\u30010,12,2\u306b\u306a\u308a\u307e\u3059\u3002\n  \u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024\u306e\u4e0a\u9650\u306f\u306a\u3057\u3001\u4e0b\u9650\u306f2\u3002\u30d5\u30a1\u30f3\u30d6\u30eb\u5024\u306e\u4e0a\u9650\u306f12\u3001\u4e0b\u9650\u306f0\u3002\n  z\u304c\u6307\u5b9a\u3055\u308c\u306a\u3044\u3068\u304d\u3001\u9054\u6210\u5024\u306e\u7b97\u51fa\u306e\u307f\u884c\u3044\u307e\u3059\u3002\n \u30fb\u30c0\u30e1\u30fc\u30b8\u30ed\u30fc\u30eb\u306e\u30c0\u30a4\u30b9\u30d6\u30ec\u30a4\u30af (xD6+y$b)\n  \u30c0\u30a4\u30b9\u3092x\u500b\u632f\u308a\u3001\u5408\u8a08\u5024\u3092\u51fa\u3057\u307e\u3059\u3002\u4fee\u6b63y\u306f\u5408\u8a08\u5024\u306b\u304b\u304b\u308a\u307e\u3059\u3002\n  \u30c0\u30a4\u30b9\u30d6\u30ec\u30a4\u30af\u3068\u3057\u3066b\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002\u5408\u8a08\u5024\u306f0\u672a\u6e80\u306b\u306a\u308a\u307e\u305b\u3093\u3002\n"),u.$register_prefix("\\d+CL","\\d+R6","\\d+D6.*\\$[\\+\\-]?\\d+"),c(u,"$initialize",function _(r){var n=this;return _.$$p=null,F(n,E(n,"initialize",_,!1,!0),"initialize",[r],null),n.sort_add_dice=!0,n.sort_barabara_dice=!0}),c(u,"$eval_game_system_specific_command",function(r){var n,e=this;return x(/\d+CL.*/i,n=r)?e.$clutch_roll(r):x(/\d+D6.*\$[+-]?\d.*/,n)?e.$damage_roll(r):x(/\d+R6/,n)?e.$r_roll(r):t}),c(u,"$clutch_roll",function(r){var e,n,$=this,o=t,l=t,s=t;return $.$debug("clutch_roll begin",r),o=A(f("Command"),"Parser").$new(/\d+CL[67]?/,h(["round_type"],{round_type:$.$round_type()})).$restrict_cmp_op_to(t,">="),$.cmd=o.$parse(r),!m($.cmd)||(n=w($.cmd.$command().$split("CL"),"map",[],"to_i".$to_proc()),e=R(n),$.times=null==e[0]?t:e[0],$.max_shift=null==e[1]?t:e[1],$.max_shift=m(l=$.max_shift)?l:6,m($.cmd.$cmp_op())&&$.cmd["$target_number="]($.$clamp($.cmd.$target_number(),1,$.max_shift)),a($.times,0))?t:(s=w($.randomizer.$roll_barabara($.times,6),"map",[],function D(M){var v=null==D.$$s?this:D.$$s;return null==v.cmd&&(v.cmd=t),null==v.max_shift&&(v.max_shift=t),null==M&&(M=t),v.$clamp(g(M,v.cmd.$modify_number()),1,v.max_shift)},{$$s:$}).$sort(),[$.$expr_clutch(),"["+s.$join(", ")+"]",$.$result_clutch(s.$last())].$join(" \uff1e "))}),c(u,"$expr_clutch",function(){var e,n,$,r=this;return e=a(r.max_shift,7)?7:t,n=f("Format").$comparison_operator(r.cmd.$cmp_op()),$=f("Format").$modifier(r.cmd.$modify_number()),"("+r.times+"CL"+e+$+n+r.cmd.$target_number()+")"}),c(u,"$result_clutch",function(r){var e=this;return S(e.cmd.$cmp_op(),">=")?"\u30b7\u30d5\u30c8"+r:m(b(r,e.cmd.$target_number()))?"\u6210\u529f \u30b7\u30d5\u30c8"+e.cmd.$target_number():(r=P(r,1),m(z(r,1))&&(r=1),"\u5931\u6557 \u30b7\u30d5\u30c8"+r)}),c(u,"$clamp",function(r,e,n){return m(z(r,e))?e:m(B(r,n))?n:r}),c(u,"$r_roll",function(r){var e=this,n=t,$=t,o=t,l=t,s=t,p=t;return n=A(f("Command"),"Parser").$new(/\d+R6/,h(["round_type"],{round_type:e.$round_type()})).$restrict_cmp_op_to(t,">=").$enable_critical().$enable_fumble().$enable_dollar(),e.cmd=n.$parse(r),!m(e.cmd)||(e.times=e.cmd.$command().$to_i(),a(e.times,0))?t:(e.critical=e.$normalize_critical(m($=e.cmd.$critical())?$:12,r),e.fumble=e.$normalize_fumble(m($=e.cmd.$fumble())?$:2,r),e.break=(m($=e.cmd.$dollar())?$:0).$abs(),l=(o=e.randomizer.$roll_barabara(e.times,6).$sort()).$pop(e.break),s=o.$dup().$pop(2).$inject(0,"+"),p=g(s,e.cmd.$modify_number()),[e.$expr_r(),e.$dice_result_r(s,o,l),e.$result_r(s,p)].$join(" \uff1e "))}),c(u,"$expr_r",function(){var e,n,$,o,l,r=this;return e=f("Format").$modifier(r.cmd.$modify_number()),n=a(r.critical,12)?"":"c["+r.critical+"]",$=a(r.fumble,2)?"":"f["+r.fumble+"]",o=a(r.break,0)?"":"b["+r.break+"]",l=f("Format").$comparison_operator(r.cmd.$cmp_op()),"("+r.times+"R6"+e+n+$+o+l+r.cmd.$target_number()+")"}),c(u,"$dice_result_r",function(r,e,n){var o;return o=f("Format").$modifier(this.cmd.$modify_number()),m(n["$empty?"]())?r+"["+e.$join(", ")+"]"+o:r+"["+e.$join(", ")+"]\xd7["+n.$join(", ")+"]"+o}),c(u,"$result_r",function(r,e){var n=this;return m(d(r,n.fumble))?"\u30d5\u30a1\u30f3\u30d6\u30eb!":m(b(r,n.critical))?"\u30af\u30ea\u30c6\u30a3\u30ab\u30eb!":a(n.cmd.$cmp_op(),">=")?m(b(e,n.cmd.$target_number()))?e+" \u6210\u529f":e+" \u5931\u6557":e.$to_s()}),c(u,"$normalize_critical",function(r,e){return m(/@[+-]/.$match(e))&&(r=g(12,r)),m(z(r,2))&&(r=2),r}),c(u,"$normalize_fumble",function(r,e){return m(/#[+-]/.$match(e))&&(r=g(2,r)),this.$clamp(r,0,12)}),c(u,"$damage_roll",function(r){var e=this,n=t,$=t,o=t,l=t,s=t;return n=A(f("Command"),"Parser").$new(/\d+D6/,h(["round_type"],{round_type:e.$round_type()})).$restrict_cmp_op_to(t).$enable_dollar(),e.cmd=n.$parse(r),!m(e.cmd)||(e.times=e.cmd.$command().$to_i(),e.break=(m($=e.cmd.$dollar())?$:0).$abs(),a(e.times,0))?t:(l=(o=e.randomizer.$roll_barabara(e.times,6).$sort()).$pop(e.break),s=g(o.$inject(0,"+"),e.cmd.$modify_number()),m(z(s,0))&&(s=0),[e.$expr_damage(),e.$result_damage(o,l),s].$join(" \uff1e "))}),c(u,"$expr_damage",function(){var e,n,r=this;return e=f("Format").$modifier(r.cmd.$modify_number()),n=a(r.break,0)?"":"b["+r.break+"]","("+r.times+"D6"+e+n+")"}),c(u,"$result_damage",function(r,e){var $,o;return $=r.$inject(0,"+"),o=f("Format").$modifier(this.cmd.$modify_number()),m(e["$empty?"]())?$+"["+r.$join(", ")+"]"+o:$+"["+r.$join(", ")+"]\xd7["+e.$join(", ")+"]"+o})})}}]);