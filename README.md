[![Latest Stable Version](https://poser.pugx.org/jonnitto/prettyembedyoutube/v/stable)](https://packagist.org/packages/jonnitto/prettyembedyoutube)
[![Total Downloads](https://poser.pugx.org/jonnitto/prettyembedyoutube/downloads)](https://packagist.org/packages/jonnitto/prettyembedyoutube)
[![License](https://poser.pugx.org/jonnitto/prettyembedyoutube/license)](https://packagist.org/packages/jonnitto/prettyembedyoutube)
[![GitHub forks](https://img.shields.io/github/forks/jonnitto/Jonnitto.PrettyEmbedYoutube.svg?style=social&label=Fork)](https://github.com/jonnitto/Jonnitto.PrettyEmbedYoutube/fork)
[![GitHub stars](https://img.shields.io/github/stars/jonnitto/Jonnitto.PrettyEmbedYoutube.svg?style=social&label=Stars)](https://github.com/jonnitto/Jonnitto.PrettyEmbedYoutube/stargazers)
[![GitHub watchers](https://img.shields.io/github/watchers/jonnitto/Jonnitto.PrettyEmbedYoutube.svg?style=social&label=Watch)](https://github.com/jonnitto/Jonnitto.PrettyEmbedYoutube/subscription)
[![GitHub followers](https://img.shields.io/github/followers/jonnitto.svg?style=social&label=Follow)](https://github.com/jonnitto/followers)
[![Follow Jon on Twitter](https://img.shields.io/twitter/follow/jonnitto.svg?style=social&label=Follow)](https://twitter.com/jonnitto)

Jonnitto.PrettyEmbedYoutube
===========================

Prettier embeds for your YouTube videos and playlists in [Neos CMS](https://www.neos.io) - with nice options like high-res preview images and advanced customization of embed options. Embed and lightbox functions use [Gator](https://github.com/ccampbell/gator) for event delegation.

| Version | Neos   |
|---------|--------|
| 2.*     | 2.*    |
| 4.*     | 3.*    |

Installation
------------

Most of the time you have to make small adjustments to a package (e.g. configuration in `Settings.yaml`). Because of that, it is important to add the corresponding package to the composer from your theme package. Mostly this is the site packages located under `Packages/Sites/`. To install it correctly go to your theme package (e.g.`Packages/Sites/Foo.Bar`) and run following command:
```
composer require jonnitto/prettyembedyoutube --no-update
```

To install the package under Neos 2.* you have to enter
```
composer require "jonnitto/prettyembedyoutube:^2.1" --no-update
```

The `--no-update` command prevent the automatic update of the dependencies. After the package was added to your theme `composer.json`, go back to the root of the Neos installation and run `composer update`. Et voilà! Your desired package is now installed correctly.


Contibutors
----------
Thanks goes out to the following contibutors:
* https://github.com/SoulCover


License
-------

Licensed under MIT, see [LICENSE](LICENSE)
