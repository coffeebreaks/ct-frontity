const settings = {
  "name": "ct-frontity",
  "state": {
    "frontity": {
      "url": "https://vlogtog.frontity.org",
      "title": "CCHIMNEYTEC SKORSTENS- & VENTILATIONSTEKNIK AB",
      "description": "Insatsrör i vattenbaserad komposit för relining av alla typer av rökkanaler och ventilationskanaler"
    }
  },
  "packages": [
    {
      "name": "chimneytec",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Nature",
              "/category/nature/"
            ],
            [
              "Travel",
              "/category/travel/"
            ],
            [
              "Japan",
              "/tag/japan/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://vlogtog.webbdesign.org",
          "homepage": "https://vlogtog.webbdesign.org/chimneytec"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "@frontity/yoast",
    "@frontity/head-tags"
  ]
};

export default settings;
