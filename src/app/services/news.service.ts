import { Category } from './../models/category';
import { Injectable } from '@angular/core';
import * as faker from 'faker';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  categories: Array<Category> = [
    { id: 1, name: 'Categoria 1' },
    { id: 2, name: 'Categoria 2' },
    { id: 3, name: 'Categoria 3' },
    { id: 4, name: 'Categoria 4' },
    { id: 5, name: 'Categoria 5' },
    { id: 6, name: 'Categoria 6' },
    { id: 7, name: 'Categoria 7' },
    { id: 8, name: 'Categoria 8' },
    { id: 9, name: 'Categoria 9' },
    { id: 10, name: 'Categoria 10' },
  ];

  newsList = [
    {
      title: 'recusandae nisi debitis',
      article: 'Incidunt voluptas voluptatem quam aut. Repellendus impedit et dolores ea. Dolorem hic qui soluta. Fugit ad id.',
      source: 'http://avis.name',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 9, name: 'Categoria 9' },
        { id: 5, name: 'Categoria 5' },
        { id: 8, name: 'Categoria 8' },
        { id: 2, name: 'Categoria 2' },
        { id: 10, name: 'Categoria 10' }
      ]
    },
    {
      title: 'repellendus sit harum',
      article: `Est necessitatibus eius reiciendis eaque ipsum repellendus sapiente qui.
      Aut vel saepe ullam doloribus maiores id nihil. Eius ratione dolores quia ut officia labore nostrum. Dicta qui labore ex ea.`,
      source: 'http://emie.name',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 5, name: 'Categoria 5' },
        { id: 6, name: 'Categoria 6' },
        { id: 9, name: 'Categoria 9' }
      ]
    },
    {
      title: 'nemo minus quo',
      article: `Ut architecto recusandae. Ut animi fugit est quisquam id fuga velit voluptatem fuga.
      Aspernatur quaerat esse beatae id. Quo tenetur voluptate sunt earum. Voluptate ut eius sequi
      quibusdam tempore officia omnis. Velit omnis maxime id neque voluptatem explicabo.`,
      source: 'http://gladyce.net',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 5, name: 'Categoria 5' },
        { id: 7, name: 'Categoria 7' },
        { id: 9, name: 'Categoria 9' }
      ]
    },
    {
      title: 'sint autem natus',
      article: `Soluta quos illo temporibus repellendus aperiam asperiores laudantium. A quia similique
      consequuntur ipsa. Maiores tenetur veritatis et voluptas nesciunt aut dignissimos quis asperiores.
      Sint consequatur sed. Tempora voluptas nostrum ipsa quas corrupti rerum similique pariatur.
      At quisquam voluptas illo mollitia harum inventore eius.`,
      source: 'https://laurianne.com',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 8, name: 'Categoria 8' },
        { id: 3, name: 'Categoria 3' },
        { id: 10, name: 'Categoria 10' },
        { id: 9, name: 'Categoria 9' },
      ]
    },
    {
      title: 'veritatis assumenda mollitia',
      article: `Voluptatem eveniet dolorum vel molestias qui enim quaerat aut velit.
      Odit labore quia eaque et temporibus tempore. Accusantium ea facere itaque qui
      perferendis at mollitia eligendi sint. Fuga id ut facere. Fugiat et et sequi
      vel maiores ut itaque. Et omnis fugit voluptas eveniet consequatur et pariatur sit possimus.`,
      source: 'http://domenica.info',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 5, name: 'Categoria 5' },
        { id: 7, name: 'Categoria 7' },
        { id: 2, name: 'Categoria 2' },
        { id: 3, name: 'Categoria 3' }
      ]
    },
    {
      title: 'non doloremque iusto',
      article: `Neque reprehenderit est aut quae vel aspernatur impedit accusamus.
      Sit ea mollitia natus qui. Quis illo minus porro et est non ducimus aut.
      Amet voluptatum et.`,
      source: 'https://alek.com',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 8, name: 'Categoria 8' },
        { id: 4, name: 'Categoria 4' },
        { id: 10, name: 'Categoria 10' }
      ]
    },
    {
      title: 'dolor ut delectus',
      article: `Delectus corporis ut vel iure eos voluptatum commodi autem odio.
      Doloremque doloremque laboriosam officiis laborum a. Atque autem assumenda quis at.
      Et consequatur eius soluta libero laborum amet quia delectus. Nostrum nesciunt error dicta quis.`,
      source: 'https://laurianne.net',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 5, name: 'Categoria 5' },
        { id: 2, name: 'Categoria 2' },
        { id: 7, name: 'Categoria 7' },
        { id: 3, name: 'Categoria 3' },
        { id: 6, name: 'Categoria 6' }
      ]
    },
    {
      title: 'aliquid distinctio illo',
      article: `Optio error libero beatae. Dolorem sequi aut harum qui vero aut.
      Dolore repellendus dolorem impedit ut optio. Earum voluptatem omnis possimus porro possimus voluptatem.`,
      source: 'http://stephania.net',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 2, name: 'Categoria 2' },
        { id: 5, name: 'Categoria 5' },
        { id: 7, name: 'Categoria 7' },
        { id: 10, name: 'Categoria 10' },
      ]
    },
    {
      title: 'nisi ad est',
      article: `Voluptatum vel consequatur perferendis perferendis quia nam aspernatur earum rem.
      Quibusdam quibusdam omnis. Eveniet perspiciatis temporibus quisquam perspiciatis.
      Suscipit non numquam et eum. In sapiente impedit.
      Non possimus amet praesentium commodi aut unde aut.`,
      source: 'https://felicity.net',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 9, name: 'Categoria 9' },
        { id: 10, name: 'Categoria 10' },
        { id: 7, name: 'Categoria 7' }
      ]
    },
    {
      title: 'voluptatem officiis perferendis',
      article: `Recusandae sapiente porro quia sunt. Magnam quia qui quasi asperiores.
      Culpa quibusdam quo nisi voluptatum cupiditate id aspernatur assumenda.
      Quo voluptatum nulla sint. Dignissimos beatae velit vel dolore nihil sed eius eum. Dolorem nisi sed.`,
      source: 'http://alize.info',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 8, name: 'Categoria 8' },
        { id: 5, name: 'Categoria 5' },
        { id: 7, name: 'Categoria 7' },
        { id: 6, name: 'Categoria 6' }
      ]
    },
    {
      title: 'aspernatur at et',
      article: `Id id dolores iure commodi soluta nostrum non nihil.
      In ducimus minus vitae aut quo blanditiis. Ducimus minus nobis eos
      tempore sapiente quibusdam exercitationem dolor. Veniam odit ullam excepturi.
      Deserunt quidem nihil vel et expedita similique et.`,
      source: 'https://magali.com',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 5, name: 'Categoria 5' },
        { id: 7, name: 'Categoria 7' }
      ]
    },
    {
      title: 'rerum non quia',
      article: `Ut rerum non. Aut dicta tempora inventore et magni asperiores.
      Impedit magni rerum magni. Quia impedit rerum animi aliquam omnis. Ut necessitatibus sapiente.`,
      source: 'http://terrance.com',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 7, name: 'Categoria 7' },
        { id: 10, name: 'Categoria 10' },
        { id: 2, name: 'Categoria 2' }
      ]
    },
    {
      title: 'iusto recusandae dolorum',
      article: `Sed quisquam aut tenetur est. Est voluptatem dolorem nulla quis saepe ullam.
      Dolores nam nobis nam ullam non asperiores recusandae possimus dolor.`,
      source: 'https://delilah.com',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 3, name: 'Categoria 3' },
        { id: 8, name: 'Categoria 8' },
        { id: 2, name: 'Categoria 2' },
        { id: 6, name: 'Categoria 6' }
      ]
    },
    {
      title: 'reprehenderit amet dolorem',
      article: `Tenetur natus atque doloremque qui fugit modi ut. Et ipsum dolorum molestiae sint omnis iure velit. Sed unde ut.
      Tempore est aut eos dolorem et qui enim est reprehenderit. Esse voluptas rem quia tempora. Autem fugiat nemo.`,
      source: 'http://demarco.net',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 6, name: 'Categoria 6' },
        { id: 3, name: 'Categoria 3' },
        { id: 5, name: 'Categoria 5' },
        { id: 7, name: 'Categoria 7' },
        { id: 9, name: 'Categoria 9' }
      ]
    },
    {
      title: 'quia quidem aut',
      article: `Officia illum error quas dolores accusantium et mollitia. Perferendis est impedit ex sapiente id est non.
      Aspernatur hic dolorem. Ipsum aspernatur earum. Provident provident nam magni earum eos.`,
      source: 'https://rudy.net',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 6, name: 'Categoria 6' },
        { id: 10, name: 'Categoria 10' },
        { id: 5, name: 'Categoria 5' },
        { id: 9, name: 'Categoria 9' }
      ]
    },
    {
      title: 'error et facilis',
      article: 'Vel et voluptas laudantium ut. Iure ad quidem rerum. Dolorum deserunt eligendi ullam sint et debitis.',
      source: 'http://carlotta.biz',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 2, name: 'Categoria 2' },
        { id: 7, name: 'Categoria 7' },
        { id: 9, name: 'Categoria 9' }
      ]
    },
    {
      title: 'dolor neque nisi',
      article: 'Magni minus earum et voluptatem. Harum error in. Sunt porro eos vitae.',
      source: 'https://maximus.org',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 5, name: 'Categoria 5' },
        { id: 6, name: 'Categoria 6' },
        { id: 9, name: 'Categoria 9' },
        { id: 6, name: 'Categoria 6' },
        { id: 4, name: 'Categoria 4' }
      ]
    },
    {
      title: 'modi voluptates et',
      article: `Numquam rerum esse tenetur asperiores aut sit. Eius ut iure quae ea ut. Non id ad eos aut et aut quisquam.
      Ut veritatis corrupti veniam perspiciatis. Voluptatum aliquam mollitia praesentium accusantium odio et earum sapiente
      debitis. Ut minima consectetur maxime autem ut ut rem.`,
      source: 'http://sanford.org',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 8, name: 'Categoria 8' },
        { id: 10, name: 'Categoria 10' },
        { id: 3, name: 'Categoria 3' },
        { id: 10, name: 'Categoria 10' },
        { id: 8, name: 'Categoria 8' }
      ]
    },
    {
      title: 'optio quo possimus',
      article: `Odit molestiae omnis repudiandae minus tenetur commodi porro quam vel.
      Voluptatibus libero quis id vel voluptatem a autem officiis corrupti.
      Est ut qui odit velit corrupti et. Non hic velit.
      Perferendis ab eligendi quis neque dolor nemo id. Ducimus quo veniam rerum harum rerum.`,
      source: 'http://quincy.biz',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 10, name: 'Categoria 10' },
        { id: 2, name: 'Categoria 2' },
        { id: 6, name: 'Categoria 6' },
        { id: 7, name: 'Categoria 7' },
        { id: 8, name: 'Categoria 8' }
      ]
    },
    {
      title: 'illo aut reprehenderit',
      article: `Sit voluptate sunt quo consequuntur sequi. Voluptatem enim ad sit.
      Rerum ullam nesciunt iure ipsum. Veritatis molestiae id voluptate consequatur
      veniam distinctio quasi. Deserunt quia distinctio et ipsum quia. Ut quae explicabo iusto.`,
      source: 'http://george.com',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 6, name: 'Categoria 6' },
        { id: 4, name: 'Categoria 4' },
        { id: 7, name: 'Categoria 7' },
        { id: 5, name: 'Categoria 5' },
        { id: 8, name: 'Categoria 8' }
      ]
    }
  ];

  constructor() {
  }

  /*
   * ###### Métodos reais ######
   */

  findCategories(): Array<Category> {
    return this.categories;
  }

  findNews() {
    return this.newsList;
  }

  findCategoryById(id: number): Category {
    for (const c of this.categories) {
      if (c.id === id) {
        return c;
      }
    }
    return null;
  }

  findNewsByCategory(category: Category) {
    const news = [];
    for (const n of this.newsList) {
      for (const c of n.categories) {
        if (c.id === category.id) {
          news.push(n);
          break;
        }
      }
    }
    return news;
  }

  filterNews(term: string) {
    const news = [];
    term = term.toLowerCase();

    for (const n of this.newsList) {
      if (n.article.toLowerCase().includes(term)) {
        news.push(n);
      }
    }
    return news;
  }
}
