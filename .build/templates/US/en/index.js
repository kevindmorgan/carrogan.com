(function(){dust.register("index",body_0);var blocks={"body_classes":body_1,"main":body_2};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.partial("layouts/master",ctx,{});}function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("home");}function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.write("<section class=\"us\"><article><h1>Ria</h1><ul class=\"links\"><li><a href=\"http://twitter.com/riacarrogan\">Twitter</a></li><li><a href=\"http://instagram.com/riacarrogan\">Instagram</a></li><li><a href=\"http://linkedin.com/in/riacarrogan\">LinkedIn</a></li><li><a href=\"http://www.pinterest.com/riacarrogan/\">Pinterest</a></li></ul></article><article><h1><a href=\"http://kevin.carrogan.com\">Kevin</a></h1><ul class=\"links\"><li><a href=\"http://twitter.com/kevincarrogan\">Twitter</a></li><li><a href=\"http://github.com/kevincarrogan\">Github</a></li><li><a href=\"http://linkedin.com/in/kevincarrogan\">LinkedIn</a></li><li><a href=\"http://www.reddit.com/user/kevindmorgan/\">Reddit</a></li><li><a href=\"http://last.fm/user/kevbear\">last.fm</a></li></ul></article></section><ul class=\"additional-links\"><li><a href=\"http://www.riaandkevin.com\">Wedding Invite</a></li></ul>");}return body_0;})();