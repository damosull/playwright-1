# `page-objects` Folder:

- This stores the usual page object model (POM) files.
- The [components](page-objects/components) sub-folder stores components which are shared across multiple pages _(i.e. navbar)_
- These POMs are used in the [tests/e2e/using-pom](tests/e2e/using-pom) tests. The only difference between these tests & the [tests/e2e/](tests/e2e/) tests is that these ones use POM. It's useful to separate these to show the differences & why POM is useful.
- There's also an [Abstract Page](page-objects/AbstractPage.ts) POM file that is used alongside the [Login Page](page-objects/LoginPage.ts) POM to show how to extend classes. When explaining this, show this at the end so they're familiar with POMs first, as starting with the _Abstract Page_ will confuse people.
