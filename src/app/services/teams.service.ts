import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }

  teams = [
    {
      name: 'Athletico-PR',
      key: 'athletico-pr',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2019/09/09/Athletico-PR.svg'
    },
    {
      name: 'Atlético-GO',
      key: 'atletico-go',
      flag: 'https://s.glbimg.com/es/sde/f/equipes/2018/03/11/atletico-go.svg'
    },
    {
      name: 'Atlético-MG',
      key: 'atletico-mg',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/10/atletico-mg.svg'
    },
    {
      name: 'Bahia',
      key: 'bahia',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/bahia.svg'
    },
    {
      name: 'Botafogo',
      key: 'botafogo',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2019/02/04/botafogo-svg.svg'
    },
    {
      name: 'Bragantino',
      key: 'bragantino',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2019/12/30/svg.svg'
    },
    {
      name: 'Ceará',
      key: 'ceara',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2019/10/10/ceara.svg'
    },
    {
      name: 'Corinthians',
      key: 'corinthians',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2019/09/30/Corinthians.svg'
    },
    {
      name: 'Coritiba',
      key: 'coritiba',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/coritiba.svg'
    },
    {
      name: 'Flamengo',
      key: 'flamengo',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2018/04/10/Flamengo-2018.svg'
    },
    {
      name: 'Fluminense',
      key: 'fluminense',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/fluminense.svg'
    },
    {
      name: 'Fortaleza',
      key: 'fortaleza',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2018/06/10/optimised.svg'
    },
    {
      name: 'Goias',
      key: 'goias',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2019/05/01/Goias_SVG.svg'
    },
    {
      name: 'Grêmio',
      key: 'gremio',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/12/gremio.svg'
    },
    {
      name: 'Internacional',
      key: 'internacional',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/internacional.svg'
    },
    {
      name: 'Palmeiras',
      key: 'palmeiras',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2019/07/06/Palmeiras.svg'
    },
    {
      name: 'Santos',
      key: 'santos',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/12/santos.svg'
    },
    {
      name: 'São Paulo',
      key: 'sao-paulo',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/sao-paulo.svg'
    },
    {
      name: 'Sport',
      key: 'sport',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/sport.svg'
    },
    {
      name: 'Vasco',
      key: 'Vasco',
      flag: 'https://s.glbimg.com/es/sde/f/organizacoes/2018/03/11/vasco.svg'
    }
  ];

  findTeams() {
    return this.teams;
  }

  findTeamByKey(key) {
    return this.teams.find(t => t.key === key);
  }
}
