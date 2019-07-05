
  describe("RSS Feeds", function() {
    /* This tests to make sure that the
     * allFeeds variable has been defined and that it is not
     * empty.
     */

    it("are defined", function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* This test loops through each feed
     * in the allFeeds object and ensures it has a URL defined
     * and that the URL is not empty.
     */

    it("URL defined", function() {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].url).toBeDefined();
        expect(allFeeds[i].url.length).not.toBe(0);
      }
    });

    /* This test loops through each feed
     * in the allFeeds object and ensures it has a NAME defined
     * and that the name is not empty.
     */

    it("Name defined", function() {
      for (let i = 0; i < allFeeds.length; i++) {
        expect(allFeeds[i].name).toBeDefined();
        expect(allFeeds[i].name.length).not.toBe(0);
      }
    });
  });

  describe("The menu", function() {
    /* This test ensures the menu element is
     * hidden by default.
     */

    it("Menu Hidden", function() {
      var element = $("body").attr("class");
      hiddenClass = "menu-hidden";

      expect(element).toBe(hiddenClass);
    });

    /* This test ensures that the menu changes
     * visibility when the menu icon is clicked.
     */

    it("Menu Hidden works", function() {
      var visibility = $(".menu-icon-link");
      element = $("body");

      visibility.click();
      expect(element.hasClass("menu-hidden")).toBe(false);

      visibility.click();
      expect(element.hasClass("menu-hidden")).toBe(true);
    });
  });

  describe("Initial Entries", function() {
    /* This test ensures that the loadFeed
     * function is called and completes its work.
     */

    var oneEntry;

    beforeEach(function(done) {
      setTimeout(function() {
        oneEntry = $(".feed .entry-link .entry");
        done();
      }, 2000);
    });

    it("There is at least a single .entry element", function(done) {
      expect(oneEntry.length).toBeGreaterThan(0);

      done();
    });
  });

  describe("New Feed Selection", function() {
    /* This test ensures that when a new feed is loaded
     * by the loadFeed function the content actually changes.
     */

    var content, contentNew;

    beforeEach(function(done) {
      loadFeed(0, function() {
        content = $(".entry h2").html();
        console.log(content);

        loadFeed(1, function() {
          contentNew = $(".entry h2").html();
          console.log(contentNew);

          done();
        });
      });
    });

    it("Ensures when a new feed is loaded", function(done) {
      expect(content).not.toBe(contentNew);
      done();
    });
  });

