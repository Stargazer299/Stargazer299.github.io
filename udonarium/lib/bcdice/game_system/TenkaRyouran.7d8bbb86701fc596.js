(self.webpackChunkudonarium=self.webpackChunkudonarium||[]).push([[7812],{8650:(J,Q,q)=>{q(9993),Opal.modules["bcdice/arithmetic_evaluator"]=function(r){var D,M,d,A,p,T,e,y,h=r.module,G=r.ensure_kwargs,c=r.truthy,P=r.thrower,g=r.def,o=[],U=r.nil,w=r.$$$;return D=o,M=y=[h(o[0],"BCDice")].concat(D),e=[T=h(y[0],"ArithmeticEvaluator")].concat(M),A=[d=r.get_singleton_class(T)].concat(e),p=r.$r(A),g(d,"$eval",function(I,H){try{P("eval_return");var L,N=U;return null==(L=(H=G(H)).$$smap.round_type)&&(L=w(p("RoundType"),"FLOOR")),c(I)&&c(N=p("Arithmetic").$eval(I,L))?N:0}catch(k){if(k===r.t_eval_return)return k.$v;throw k}},-2)},Opal.modules["bcdice/game_system/SRS"]=function(r){var A,H,Y,n,$,t,s,E,m,a,j,L,N,B,h=r.module,G=r.klass,c=r.const_set,P=r.slice,g=r.send,o=r.def,U=r.send2,w=r.find_super,_=r.truthy,D=r.hash2,C=r.rb_plus,y=r.rb_ge,x=r.rb_le,T=[],e=r.nil,d=r.$$$;return r.top.$require("bcdice/arithmetic_evaluator"),A=T,H=B=[h(T[0],"BCDice")].concat(A),L=[h(B[0],"GameSystem")].concat(H),N=r.$r(L),Y=L,m=[E=G(L[0],N("Base"),"SRS")].concat(Y),a=r.$r(m),(j=E.$$prototype).round_type=j.randomizer=j.sort_add_dice=e,c(m[0],"ID","SRS"),c(m[0],"NAME","\u30b9\u30bf\u30f3\u30c0\u30fc\u30c9RPG\u30b7\u30b9\u30c6\u30e0"),c(m[0],"SORT_KEY","\u3059\u305f\u3093\u305f\u3042\u3068RPG\u3057\u3059\u3066\u3080"),c(m[0],"HELP_MESSAGE_1","\u30fb\u5224\u5b9a\n\u3000\u30fb\u901a\u5e38\u5224\u5b9a\uff1a2D6+m@c#f>=t \u307e\u305f\u306f 2D6+m>=t[c,f]\n\u3000\u3000\u4fee\u6b63\u5024m\u3001\u76ee\u6a19\u5024t\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024c\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u5024f\u3067\u5224\u5b9a\u30ed\u30fc\u30eb\u3092\u884c\u3044\u307e\u3059\u3002\n\u3000\u3000\u4fee\u6b63\u5024\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u5024\u306f\u7701\u7565\u53ef\u80fd\u3067\u3059\uff08[]\u3054\u3068\u7701\u7565\u53ef\u3001@c\u30fb#f\u306e\u6307\u5b9a\u306f\u9806\u4e0d\u540c\uff09\u3002\n\u3000\u3000\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u5024\u306e\u65e2\u5b9a\u5024\u306f\u3001\u305d\u308c\u305e\u308c12\u30012\u3067\u3059\u3002\n\u3000\u3000\u81ea\u52d5\u6210\u529f\u3001\u81ea\u52d5\u5931\u6557\u3001\u6210\u529f\u3001\u5931\u6557\u3092\u81ea\u52d5\u8868\u793a\u3057\u307e\u3059\u3002\n\n\u3000\u3000\u4f8b) 2d6>=10\u3000\u3000\u3000\u3000\u3000\u4fee\u6b63\u50240\u3001\u76ee\u6a19\u502410\u3067\u5224\u5b9a\n\u3000\u3000\u4f8b) 2d6+2>=10\u3000\u3000\u3000\u3000\u4fee\u6b63\u5024+2\u3001\u76ee\u6a19\u502410\u3067\u5224\u5b9a\n\u3000\u3000\u4f8b) 2d6+2>=10[11]\u3000\u3000\u2191\u3092\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u502411\u3067\u5224\u5b9a\n\u3000\u3000\u4f8b) 2d6+2@11>=10 \u3000\u3000\u2191\u3092\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u502411\u3067\u5224\u5b9a\n\u3000\u3000\u4f8b) 2d6+2>=10[12,4]\u3000\u2191\u3092\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u502412\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u50244\u3067\u5224\u5b9a\n\u3000\u3000\u4f8b) 2d6+2@12#4>=10 \u3000\u2191\u3092\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u502412\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u50244\u3067\u5224\u5b9a\n\u3000\u3000\u4f8b) 2d6+2>=10[,4]\u3000\u3000\u2191\u3092\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u502412\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u50244\u3067\u5224\u5b9a\uff08\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024\u306e\u7701\u7565\uff09\n\u3000\u3000\u4f8b) 2d6+2#4>=10\u3000\u3000\u3000\u2191\u3092\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u502412\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u50244\u3067\u5224\u5b9a\uff08\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024\u306e\u7701\u7565\uff09\n"),c(m[0],"HELP_MESSAGE_2","\u3000\u30fb\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u304a\u3088\u3073\u30d5\u30a1\u30f3\u30d6\u30eb\u306e\u307f\u306e\u5224\u5b9a\uff1a2D6+m@c#f \u307e\u305f\u306f 2D6+m[c,f]\n\u3000\u3000\u76ee\u6a19\u5024\u3092\u6307\u5b9a\u305b\u305a\u3001\u4fee\u6b63\u5024m\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024c\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u5024f\u3067\u5224\u5b9a\u30ed\u30fc\u30eb\u3092\u884c\u3044\u307e\u3059\u3002\n\u3000\u3000\u4fee\u6b63\u5024\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u5024\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u5024\u306f\u7701\u7565\u53ef\u80fd\u3067\u3059\uff08[]\u306f\u7701\u7565\u4e0d\u53ef\u3001@c\u30fb#f\u306e\u6307\u5b9a\u306f\u9806\u4e0d\u540c\uff09\u3002\n\u3000\u3000\u81ea\u52d5\u6210\u529f\u3001\u81ea\u52d5\u5931\u6557\u3092\u81ea\u52d5\u8868\u793a\u3057\u307e\u3059\u3002\n\n\u3000\u3000\u4f8b) 2d6[]\u3000\u3000\u3000\u3000\u4fee\u6b63\u50240\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u502412\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u50242\u3067\u5224\u5b9a\n\u3000\u3000\u4f8b) 2d6+2[11]\u3000\u3000\u4fee\u6b63\u5024+2\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u502411\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u50242\u3067\u5224\u5b9a\n\u3000\u3000\u4f8b) 2d6+2@11 \u3000\u3000\u4fee\u6b63\u5024+2\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u502411\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u50242\u3067\u5224\u5b9a\n\u3000\u3000\u4f8b) 2d6+2[12,4]\u3000\u4fee\u6b63\u5024+2\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u502412\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u50244\u3067\u5224\u5b9a\n\u3000\u3000\u4f8b) 2d6+2@12#4 \u3000\u4fee\u6b63\u5024+2\u3001\u30af\u30ea\u30c6\u30a3\u30ab\u30eb\u502412\u3001\u30d5\u30a1\u30f3\u30d6\u30eb\u50244\u3067\u5224\u5b9a\n"),c(m[0],"HELP_MESSAGE_3","\u30fbD66\u30c0\u30a4\u30b9\u3042\u308a\uff08\u5165\u308c\u66ff\u3048\u306a\u3057)\n"),c(m[0],"DEFAULT_HELP_MESSAGE",a("HELP_MESSAGE_1")+"\n"+a("HELP_MESSAGE_2")+"\n"+a("HELP_MESSAGE_3")),c(m[0],"HELP_MESSAGE",a("DEFAULT_HELP_MESSAGE")),n=m,t=[$=h(m[0],"ClassMethods")].concat(n),s=r.$r(t),$.$attr_reader("aliases"),$.$attr_reader("help_message"),o($,"$set_aliases_for_srs_roll",function(u){var S,f,R=this;return S=P(arguments),f=g(S,"map",[],"upcase".$to_proc()),R.aliases=g(f,"map",[],function(b){return null==b&&(b=e),s("Regexp").$escape(b)}),R.help_message=R.$concatenate_help_messages(f),R},-1),o($,"$clear_aliases_for_srs_roll",function(){var u=this;return u.aliases=[],u.help_message=d(s("SRS"),"DEFAULT_HELP_MESSAGE"),u}),$.$private(),o($,"$concatenate_help_messages",function(u){var S,v;return S=g(u,"map",[],function(f){return null==f&&(f=e),"\u3000\u3000\u4f8b) "+f+"+2>=10\u3000\u3000\u3000\u3000 2d6+2>=10\u3068\u540c\u3058\uff08"+f+"\u304c2D6\u306e\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u30b3\u30de\u30f3\u30c9\uff09\n"}).$join(),v=g(u,"map",[],function(f){return null==f&&(f=e),"\u3000\u3000\u4f8b) "+f+"\u3000\u3000\u3000\u3000\u3000 2d6[]\u3068\u540c\u3058\uff08"+f+"\u304c2D6\u306e\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u30b3\u30de\u30f3\u30c9\uff09\n\u3000\u3000\u4f8b) "+f+"+2@12#4\u3000\u30002d6+2@12#4\u3068\u540c\u3058\uff08"+f+"\u304c2D6\u306e\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8\u30b3\u30de\u30f3\u30c9\uff09\n"}).$join(),d(s("SRS"),"HELP_MESSAGE_1")+(S+"\n")+d(s("SRS"),"HELP_MESSAGE_2")+v+"\n"+d(s("SRS"),"HELP_MESSAGE_3")}),function(l,n){var $=[l].concat(n),t=r.$r($);o(l,"$inherited",function(i){return i.$extend(t("ClassMethods")).$clear_aliases_for_srs_roll()}),o(l,"$help_message",function(){return t("DEFAULT_HELP_MESSAGE")}),o(l,"$aliases",function(){return[]})}(r.get_singleton_class(E),m),E.$register_prefix("2D6"),o(E,"$initialize",function l(n){var t=this;return l.$$p=null,U(t,w(t,"initialize",l,!1,!0),"initialize",[n],null),t.sort_add_dice=!0,t.d66_sort_type=d(a("D66SortType"),"NO_SORT")}),o(E,"$help_message",function(){return this.$class().$help_message()}),o(E,"$aliases",function(){return this.$class().$aliases()}),c(m[0],"DEFAULT_CRITICAL_VALUE",12),c(m[0],"DEFAULT_FUMBLE_VALUE",2),c(m[0],"SRSRollNode",g(a("Struct"),"new",["modifier","critical_value","fumble_value","target_value"],function l(){return o(null==l.$$s?this:l.$$s,"$to_s",function(){var s,t=this;return s="2D6"+a("Format").$modifier(t.$modifier()),(_(t.$target_value())?s+">="+t.$target_value():s)+"["+t.$critical_value()+","+t.$fumble_value()+"]"})},{$$s:E})),o(E,"$eval_game_system_specific_command",function(n){var s,$=this,t=e;return t=/(.+)\[(.*)\]$/.$match(n),s=_(t)?$.$parse_legacy(t["$[]"](1),t["$[]"](2)):$.$parse(n),_(s)?$.$execute_srs_roll(s):e}),E.$private(),o(E,"$parse",function(n){var t,i=e;return t=a("Regexp").$new(["2D6"].$concat(this.$aliases()).$join("|"),d(a("Regexp"),"IGNORECASE")),i=d(a("Command"),"Parser").$new(t,D(["round_type"],{round_type:this.round_type})).$enable_critical().$enable_fumble().$restrict_cmp_op_to(e,">=").$parse(n),!_(i)||_(n["$start_with?"](/2D6/i))&&_(i.$critical()["$nil?"]())&&_(i.$fumble()["$nil?"]())&&_(i.$target_number()["$nil?"]())?e:(_(i.$critical())||i["$critical="](a("DEFAULT_CRITICAL_VALUE")),_(i.$fumble())||i["$fumble="](a("DEFAULT_FUMBLE_VALUE")),a("SRSRollNode").$new(i.$modify_number(),i.$critical(),i.$fumble(),i.$target_number()))}),o(E,"$parse_legacy",function(n,$){var t,s,u=e,S=e,v=e,R=e,f=e,b=e;return u=/^(-?\d+)?(?:,(-?\d+))?$/.$match($),_(u)&&(S=_(v=(t=u["$[]"](1))===e||null==t?e:t.$to_i())?v:a("DEFAULT_CRITICAL_VALUE"),R=_(v=(s=u["$[]"](2))===e||null==s?e:s.$to_i())?v:a("DEFAULT_FUMBLE_VALUE"),f=a("Regexp").$new(["2D6"].$concat(this.$aliases()).$join("|"),d(a("Regexp"),"IGNORECASE")),b=d(a("Command"),"Parser").$new(f,D(["round_type"],{round_type:this.round_type})).$restrict_cmp_op_to(e,">=").$parse(n),_(b))?a("SRSRollNode").$new(b.$modify_number(),S,R,b.$target_number()):e}),o(E,"$execute_srs_roll",function(n){var s,i,u,$=this,t=e,S=e,v=e;return t=$.randomizer.$roll_barabara(2,6),_($.sort_add_dice)&&t["$sort!"](),s=t.$sum(),i=t.$join(","),u=C(s,n.$modifier()),S=$.$compare_result(n,s,u),v=["("+n+")",s+"["+i+"]"+a("Format").$modifier(n.$modifier()),u,S.$text()],S["$text="](v.$compact().$join(" \uff1e ")),S}),o(E,"$compare_result",function(n,$,t){return _(y($,n.$critical_value()))?a("Result").$critical("\u81ea\u52d5\u6210\u529f"):_(x($,n.$fumble_value()))?a("Result").$fumble("\u81ea\u52d5\u5931\u6557"):_(n.$target_value()["$nil?"]())?a("Result").$new():_(y(t,n.$target_value()))?a("Result").$success("\u6210\u529f"):a("Result").$failure("\u5931\u6557")})},Opal.queue(function(r){var w,y,F,A,p,M,T,D,h=r.module,G=r.klass,c=r.const_set,g=[];return r.top.$require("bcdice/game_system/SRS"),w=g,y=D=[h(g[0],"BCDice")].concat(w),M=[h(D[0],"GameSystem")].concat(y),T=r.$r(M),F=M,c((p=[A=G(M[0],T("SRS"),"TenkaRyouran")].concat(F))[0],"ID","TenkaRyouran"),c(p[0],"NAME","\u5929\u4e0b\u7e5a\u4e71"),c(p[0],"SORT_KEY","\u3066\u3093\u304b\u308a\u3088\u3046\u3089\u3093"),A.$register_prefix("2D6","TR"),A.$set_aliases_for_srs_roll("TR"),c(p[0],"HELP_MESSAGE",A.$help_message())})}}]);