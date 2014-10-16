SPAwesome
=========

Um projeto SPA para gestão de:

    - CATEGORIAS
    - SUBCATEGORIAS
    - CAMPOS

que utiliza:

  - [Yeoman] com o [generator-angular] para workflow
  - [Twitter Bootstrap] como framework de UI
  - [AngularJS] como framework SPA
  - [Jasmine] como framework de testes frontend
  - [Karma] como test runner
  - [ASP.NET Web API 2] como framework de web api
  - [FluentNHibernate] como ORM
  - [Moq] como framework de Mock para interfaces com o banco de dados
  - [Azure] para hospedagem da API com deploy automático a partir do GitHub

Alguns requisitos:


> - Deve existir uma área administrativa e uma área pública;
> - A área administrativa deve permitir gerenciar as categorias, subcategorias (relacionado com uma categoria) e os campos de uma sub-categoria
> - Os formulários da área pública devem ser acessados utilizando rota: `/:slug-categoria/:slug-subcategoria`
> - Os formulários renderizam os campos conforme cadastrado previamente, respeitando a ordem e o tipo dos campos



Instalação
----

Certifique-se de possuir o [NodeJS]

```sh
git clone git@github.com:lazarofl/SPAwesome.git
cd SPAwesome
npm install
bower intall
grunt serve
```

####Depois de alguns bons minutos...


Seu navegador será aberto.

Para acessar com login administrativo utilize:

```sh
admin
pass1234
```



Onde rodo a API?
---------------------

A API está rodando em http://spawesome.azurewebsites.net/Help


License
----

MIT


**Free Software, study it!**

[ ![Codeship Status for lazarofl/SPAwesome](https://www.codeship.io/projects/ea3dda30-3707-0132-1435-4e00c89963c9/status)](https://www.codeship.io/projects/41555)

[generator-angular]:https://github.com/yeoman/generator-angular
[Yeoman]:http://yeoman.io/
[NodeJS]:http://nodejs.org/
[AngularJS]:https://angularjs.org/
[Jasmine]:http://jasmine.github.io/
[Karma]:http://karma-runner.github.io/0.12/index.html
[Twitter Bootstrap]:http://twitter.github.com/bootstrap/
[ASP.NET Web API 2]:http://www.asp.net/web-api
[FluentNHibernate]:http://www.fluentnhibernate.org/
[Moq]:https://github.com/Moq/moq4
[Azure]:http://azure.microsoft.com/pt-br/