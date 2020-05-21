import { Category } from './../models/category';
import { Injectable } from '@angular/core';
import { News } from '../models/news.model';

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

  newsList: Array<News> = [
    {
      title: 'TROCA-TROCA DE MINISTROS E CLOROQUINA LIBERADA - CASSETA & PLANETA',
      article: 'Incidunt voluptas voluptatem quam aut. Repellendus impedit et dolores ea. Dolorem hic qui soluta. Fugit ad id.',
      source: 'https://www.youtube.com/watch?v=QvWCg-aREX0',
      image: 'https://i.imgur.com/0v7jX9m.png',
      categories: [
        { id: 9, name: 'Categoria 9' },
        { id: 5, name: 'Categoria 5' },
        { id: 8, name: 'Categoria 8' },
        { id: 2, name: 'Categoria 2' },
        { id: 10, name: 'Categoria 10' }
      ],
      teams: []
    },
    {
      title: 'Students are failing AP tests because the College Board can’t handle HEIC images ',
      article: `Est necessitatibus eius reiciendis eaque ipsum repellendus sapiente qui.
      Aut vel saepe ullam doloribus maiores id nihil. Eius ratione dolores quia ut officia labore nostrum. Dicta qui labore ex ea.`,
      source: 'https://www.theverge.com/2020/5/20/21262302/ap-test-fail-iphone-photos-glitch-email-college-board-jpeg-heic',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 5, name: 'Categoria 5' },
        { id: 6, name: 'Categoria 6' },
        { id: 9, name: 'Categoria 9' }
      ],
      teams: []
    },
    {
      title: 'California affordable housing is more expensive than luxury housing',
      article: `Ut architecto recusandae. Ut animi fugit est quisquam id fuga velit voluptatem fuga.
      Aspernatur quaerat esse beatae id. Quo tenetur voluptate sunt earum. Voluptate ut eius sequi
      quibusdam tempore officia omnis. Velit omnis maxime id neque voluptatem explicabo.`,
      source: 'http://gladyce.net',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 5, name: 'Categoria 5' },
        { id: 7, name: 'Categoria 7' },
        { id: 9, name: 'Categoria 9' }
      ],
      teams: []
    },
    {
      title: 'Stealing Secrets from Developers Using Websockets',
      article: `Soluta quos illo temporibus repellendus aperiam asperiores laudantium. A quia similique
      consequuntur ipsa. Maiores tenetur veritatis et voluptas nesciunt aut dignissimos quis asperiores.
      Sint consequatur sed. Tempora voluptas nostrum ipsa quas corrupti rerum similique pariatur.
      At quisquam voluptas illo mollitia harum inventore eius.`,
      source: 'https://medium.com/@stestagg/stealing-secrets-from-developers-using-websockets-254f98d577a0',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 8, name: 'Categoria 8' },
        { id: 3, name: 'Categoria 3' },
        { id: 10, name: 'Categoria 10' },
        { id: 9, name: 'Categoria 9' },
      ],
      teams: []
    },
    {
      title: 'Facebook to Shift Permanently Toward More Remote Work After Coronavirus',
      article: `Voluptatem eveniet dolorum vel molestias qui enim quaerat aut velit.
      Odit labore quia eaque et temporibus tempore. Accusantium ea facere itaque qui
      perferendis at mollitia eligendi sint. Fuga id ut facere. Fugiat et et sequi
      vel maiores ut itaque. Et omnis fugit voluptas eveniet consequatur et pariatur sit possimus.`,
      source: 'https://7news.com.au/news/wildlife/dolphins-bring-gifts-from-sea-in-apparent-response-to-lack-of-human-interaction-c-1049565',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 5, name: 'Categoria 5' },
        { id: 7, name: 'Categoria 7' },
        { id: 2, name: 'Categoria 2' },
        { id: 3, name: 'Categoria 3' }
      ],
      teams: []
    },
    {
      title: 'Dolphins at popular spot miss tourists and keep leaving "gifts" on shore',
      article: `Neque reprehenderit est aut quae vel aspernatur impedit accusamus.
      Sit ea mollitia natus qui. Quis illo minus porro et est non ducimus aut.
      Amet voluptatum et.`,
      source: 'https://7news.com.au/news/wildlife/dolphins-bring-gifts-from-sea-in-apparent-response-to-lack-of-human-interaction-c-1049565',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 8, name: 'Categoria 8' },
        { id: 4, name: 'Categoria 4' },
        { id: 10, name: 'Categoria 10' }
      ],
      teams: []
    },
    {
      title: 'Show HN: Blunt – A CSS Layout Framework for Minimalists',
      article: `Delectus corporis ut vel iure eos voluptatum commodi autem odio.
      Doloremque doloremque laboriosam officiis laborum a. Atque autem assumenda quis at.
      Et consequatur eius soluta libero laborum amet quia delectus. Nostrum nesciunt error dicta quis.`,
      source: 'https://github.com/f-prime/Blunt',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 5, name: 'Categoria 5' },
        { id: 2, name: 'Categoria 2' },
        { id: 7, name: 'Categoria 7' },
        { id: 3, name: 'Categoria 3' },
        { id: 6, name: 'Categoria 6' }
      ],
      teams: []
    },
    {
      title: 'Arduino Pinball Machine That Plays Itself',
      article: `Optio error libero beatae. Dolorem sequi aut harum qui vero aut.
      Dolore repellendus dolorem impedit ut optio. Earum voluptatem omnis possimus porro possimus voluptatem.`,
      source: 'https://www.instructables.com/id/Arduino-Pinball-Machine-That-Plays-Itself/',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 2, name: 'Categoria 2' },
        { id: 5, name: 'Categoria 5' },
        { id: 7, name: 'Categoria 7' },
        { id: 10, name: 'Categoria 10' },
      ],
      teams: []
    },
    {
      title: 'Introducing Apache Druid 0.18.0 ',
      article: `Voluptatum vel consequatur perferendis perferendis quia nam aspernatur earum rem.
      Quibusdam quibusdam omnis. Eveniet perspiciatis temporibus quisquam perspiciatis.
      Suscipit non numquam et eum. In sapiente impedit.
      Non possimus amet praesentium commodi aut unde aut.`,
      source: 'https://imply.io/post/introducing-apache-druid-0-18-0',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 9, name: 'Categoria 9' },
        { id: 10, name: 'Categoria 10' },
        { id: 7, name: 'Categoria 7' }
      ],
      teams: []
    },
    {
      title: 'Organ transplants down as stay-at-home rules reduce fatal traffic collisions',
      article: `Recusandae sapiente porro quia sunt. Magnam quia qui quasi asperiores.
      Culpa quibusdam quo nisi voluptatum cupiditate id aspernatur assumenda.
      Quo voluptatum nulla sint. Dignissimos beatae velit vel dolore nihil sed eius eum. Dolorem nisi sed.`,
      source: 'https://www.npr.org/sections/health-shots/2020/05/20/858712314/organ-transplants-down-as-stay-at-home-rules-reduce-fatal-traffic-collisions',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 8, name: 'Categoria 8' },
        { id: 5, name: 'Categoria 5' },
        { id: 7, name: 'Categoria 7' },
        { id: 6, name: 'Categoria 6' }
      ],
      teams: []
    },
    {
      title: 'McLibel Case',
      article: `Id id dolores iure commodi soluta nostrum non nihil.
      In ducimus minus vitae aut quo blanditiis. Ducimus minus nobis eos
      tempore sapiente quibusdam exercitationem dolor. Veniam odit ullam excepturi.
      Deserunt quidem nihil vel et expedita similique et.`,
      source: 'https://en.wikipedia.org/wiki/McLibel_case',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 5, name: 'Categoria 5' },
        { id: 7, name: 'Categoria 7' }
      ],
      teams: []
    },
    {
      title: 'Show HN: Python package to collect normalized news from almost any website',
      article: `Ut rerum non. Aut dicta tempora inventore et magni asperiores.
      Impedit magni rerum magni. Quia impedit rerum animi aliquam omnis. Ut necessitatibus sapiente.`,
      source: 'https://github.com/kotartemiy/newscatcher/blob/master/README.md',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 7, name: 'Categoria 7' },
        { id: 10, name: 'Categoria 10' },
        { id: 2, name: 'Categoria 2' }
      ],
      teams: []
    },
    {
      title: 'Show HN: SpaceX Dragon simulator docking autopilot in Clojure',
      article: `Sed quisquam aut tenetur est. Est voluptatem dolorem nulla quis saepe ullam.
      Dolores nam nobis nam ullam non asperiores recusandae possimus dolor.`,
      source: 'https://github.com/DaniruKun/spacex-iss-docking-sim-autopilot',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 3, name: 'Categoria 3' },
        { id: 8, name: 'Categoria 8' },
        { id: 2, name: 'Categoria 2' },
        { id: 6, name: 'Categoria 6' }
      ],
      teams: []
    },
    {
      title: 'The FBI tracking your browsing history without a warrant might be the beginning',
      article: `Tenetur natus atque doloremque qui fugit modi ut. Et ipsum dolorum molestiae sint omnis iure velit. Sed unde ut.
      Tempore est aut eos dolorem et qui enim est reprehenderit. Esse voluptas rem quia tempora. Autem fugiat nemo.`,
      source: 'https://cybernews.com/news/the-fbi-monitoring-your-browsing-history-without-a-warrant-might-just-be-the-beginning/',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 6, name: 'Categoria 6' },
        { id: 3, name: 'Categoria 3' },
        { id: 5, name: 'Categoria 5' },
        { id: 7, name: 'Categoria 7' },
        { id: 9, name: 'Categoria 9' }
      ],
      teams: []
    },
    {
      title: 'Shopify Goes Digital by Default',
      article: `Officia illum error quas dolores accusantium et mollitia. Perferendis est impedit ex sapiente id est non.
      Aspernatur hic dolorem. Ipsum aspernatur earum. Provident provident nam magni earum eos.`,
      source: 'https://twitter.com/tobi/status/1263483496087064579',
      image: 'http://lorempixel.com/640/480',
      categories: [
        { id: 6, name: 'Categoria 6' },
        { id: 10, name: 'Categoria 10' },
        { id: 5, name: 'Categoria 5' },
        { id: 9, name: 'Categoria 9' }
      ],
      teams: []
    },
    {
      title: 'Ceará e Fortaleza podem ter treinos liberados na 1ª fase do plano do Governo de retomada',
      source: 'https://globoesporte.globo.com/ce/futebol/noticia/ceara-e-fortaleza-podem-ter-treinos-liberados-na-1a-fase-do-plano-do-governo-de-retomada.ghtml',
      categories: [],
      article: '',
      image: '',
      teams: ['ceara', 'fortaleza']
    },
    {
      title: 'Irmão e primo viram "técnicos" de zagueiro do Ceará para o Futebol de Casa',
      source: 'https://globoesporte.globo.com/ce/futebol/times/ceara/noticia/irmao-e-primo-viram-tecnicos-de-zagueiro-do-ceara-para-o-futebol-de-casa.ghtml',
      categories: [],
      article: '',
      image: '',
      teams: ['ceara']
    },
    {
      title: 'JOGO EM CASA #37 - ANSIEDADE, DEPRESSÃO E MEDO DE LESÕES: OS FANTASMAS DOS ATLETAS NA QUARENTENA',
      source: 'https://interativos.globoesporte.globo.com/podcasts/programa/jogo-em-casa/',
      categories: [],
      article: '',
      image: '',
      teams: ['ceara', 'fortaleza']
    },
    {
      title: '"Superpai", Mateus Gonçalves relata rotina entre filha e treinos do Ceará',
      source: 'https://globoesporte.globo.com/ce/futebol/times/ceara/noticia/super-pai-mateus-goncalves-relata-rotina-entre-filha-e-treinos-do-ceara.ghtml',
      categories: [],
      article: '',
      image: '',
      teams: ['ceara']
    },

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

  findBreakingNews() {
    return this.newsList.slice(0, 5);
  }

  findCategoryById(id: number): Category {
    for (const c of this.categories) {
      if (c.id === id) {
        return c;
      }
    }
    return null;
  }

  findNewsByTeam(key: string) {
    const teamNews = [];
    for (const news of this.newsList) {
      if (news.teams?.includes(key)) {
        teamNews.push(news);
      }
    }
    return teamNews;
  }

  findNewsByCategory(category: Category) {
    const news = [];
    for (const n of this.newsList) {
      if (n.categories) {
        for (const c of n.categories) {
          if (c.id === category.id) {
            news.push(n);
            break;
          }
        }
      }
    }
    return news;
  }

  filterNews(term: string) {
    const news = [];
    term = term.toLowerCase();

    for (const n of this.newsList) {
      if (n.article?.toLowerCase().includes(term) || n.title.toLowerCase().includes(term)) {
        news.push(n);
      }
    }
    return news;
  }
}
