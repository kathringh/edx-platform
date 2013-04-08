// Generated by CoffeeScript 1.4.0
(function() {

  describe("CMS.Views.ModuleEdit", function() {
    beforeEach(function() {
      this.stubModule = jasmine.createSpy("CMS.Models.Module");
      this.stubModule.id = 'stub-id';
      setFixtures("<li class=\"component\" id=\"stub-id\">\n  <div class=\"component-editor\">\n    <div class=\"module-editor\">\n      ${editor}\n    </div>\n    <a href=\"#\" class=\"save-button\">Save</a>\n    <a href=\"#\" class=\"cancel-button\">Cancel</a>\n  </div>\n  <div class=\"component-actions\">\n    <a href=\"#\" class=\"edit-button\"><span class=\"edit-icon white\"></span>Edit</a>\n    <a href=\"#\" class=\"delete-button\"><span class=\"delete-icon white\"></span>Delete</a>  \n  </div>\n  <a href=\"#\" class=\"drag-handle\"></a>\n  <section class=\"xmodule_display xmodule_stub\" data-type=\"StubModule\">\n    <div id=\"stub-module-content\"/>\n  </section>\n</li>");
      spyOn($.fn, 'load').andReturn(this.moduleData);
      this.moduleEdit = new CMS.Views.ModuleEdit({
        el: $(".component"),
        model: this.stubModule,
        onDelete: jasmine.createSpy()
      });
      return CMS.unbind();
    });
    describe("class definition", function() {
      it("sets the correct tagName", function() {
        return expect(this.moduleEdit.tagName).toEqual("li");
      });
      return it("sets the correct className", function() {
        return expect(this.moduleEdit.className).toEqual("component");
      });
    });
    return describe("methods", function() {
      describe("initialize", function() {
        beforeEach(function() {
          spyOn(CMS.Views.ModuleEdit.prototype, 'render');
          return this.moduleEdit = new CMS.Views.ModuleEdit({
            el: $(".component"),
            model: this.stubModule,
            onDelete: jasmine.createSpy()
          });
        });
        return it("renders the module editor", function() {
          return expect(this.moduleEdit.render).toHaveBeenCalled();
        });
      });
      describe("render", function() {
        beforeEach(function() {
          spyOn(this.moduleEdit, 'loadDisplay');
          spyOn(this.moduleEdit, 'delegateEvents');
          return this.moduleEdit.render();
        });
        return it("loads the module preview and editor via ajax on the view element", function() {
          expect(this.moduleEdit.$el.load).toHaveBeenCalledWith("/preview_component/" + this.moduleEdit.model.id, jasmine.any(Function));
          this.moduleEdit.$el.load.mostRecentCall.args[1]();
          expect(this.moduleEdit.loadDisplay).toHaveBeenCalled();
          return expect(this.moduleEdit.delegateEvents).toHaveBeenCalled();
        });
      });
      return describe("loadDisplay", function() {
        beforeEach(function() {
          spyOn(XModule, 'loadModule');
          return this.moduleEdit.loadDisplay();
        });
        return it("loads the .xmodule-display inside the module editor", function() {
          expect(XModule.loadModule).toHaveBeenCalled();
          return expect(XModule.loadModule.mostRecentCall.args[0]).toBe($('.xmodule_display'));
        });
      });
    });
  });

}).call(this);
