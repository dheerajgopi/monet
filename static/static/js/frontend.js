
$(function() {
    /* handle clearing default fields ... */
    $(".js-clear-default").focus(function() {
        var $this = $(this);
        if ($this.is("textarea")) {
            if ($this.html() == $this.attr("data-default")) {
                $this.html("");
            }
        } else {
            if ($this.attr("value") == $this.attr("data-default")) {
                $this.attr("value", "")
            }
        }
    }).blur(function() {
        var $this = $(this)
        if ($this.is("textarea")) {
            if (!$this.html()) {
                $this.html($this.attr("data-default"));
            }
        } else {
            if (!$this.attr("value")) {
                $this.attr("value", $this.attr("data-default"));
            }
        }
    });

    /* prettyprint */
    $("pre[lang]").each(function() {
        $(this).addClass("prettyprint");
        $(this).addClass("linenums");
    });
});
