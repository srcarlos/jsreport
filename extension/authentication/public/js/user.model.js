define(["app", "core/jaydataModel"], function(app, ModelBase) {

    return ModelBase.extend({
        contextSet: function() { return app.dataContext.users; },

        fetchQuery: function (cb) {
            return this.contextSet().single(function(r) { return r.shortid === this.id; }, { id: this.get("shortid") });
        },

        _initialize: function() {
            var self = this;
            this.Entity = $entity.User;
        },

        toString: function() {
            return "User " + (this.get("username") || "");
        }
    });
});