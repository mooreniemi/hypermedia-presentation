try {
AJS.toInit(function ($) {
    $("#comments-actions").hide();
});
} catch (err) {
    if (console && console.log && console.error) {
        console.log("Error running batched script.");
        console.error(err);
    }
}


