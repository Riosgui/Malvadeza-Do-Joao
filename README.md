Bem vindo ao Malvadeza do João!!!!

Projeto onde tento replicar o spotify e fazer algumas doideras dentro dele que dá na minha cabeça, conforme vou avançando no projeto e tendo ideias irei implementar e documentar abaixo


Link do projeto no Netlify: https://malvadezadojoao.netlify.app/


- V 1.0:
  - Primeiro commit e inicio do projeto;
  - Criação dos itens que estarão no Menu e o proprio Menu, faltando estilizar melhor cada um ainda;

- V 1.1:
  - Estilizei um pouco mais os componentes;
  - Acresentei um icone temporario que eventualmente irá virar a logo do projeto;
  - Criei os componentes ContentPage, CurrentMusic, MusicCard, MusicController e Player, estilizei cada um da forma como vejo o projeto atualmente e melhorarei eventualmente;
  - Criado uma estilização pro template Home e acresentado todos os devidos componentes lá, já dando a visualização do escopo do projeto;

- V 1.2:
  - Botão de Play funcionando, atualmente tocando somente Attention - Charlie Puth;
  - Falta uma melhor estilização e usabilidade no player, coisa que será trabalhada nas versões posteriores;

- V 1.3:
  - Adição no efeito dos botões do player, pois antes ao clicar não havia efeito algum;
  - Adição de um iframe que será responsavel por tocar as musicas;
  - Teste do retorno da API ao banco de dados;

- V 1.4:
  - Instalado a dependecia React Player;
  - Agora a musica tocada é diretamente do Youtube ao inves de ser do Drive como na versão 1.2;
  - As musicas mostradas na Home são as que possui no banco de dados até o momento;
  - Feito as infos da música com o retorno da API que roda no Heroku;

- V 1.5:
  - Criado uma função para selecionar musicas ao clicar na home;
  - Troca de musicas ao clicar é possivel, embora que falte otimizar este sistema;
  - Trabalhando na troca de informações da música que está tocando no momento;

- V 1.6:
  - Atualiza a música atual de acordo com a música que está sendo tocada, a otimização desta parte ainda precisa ser feita e farei isso quando tiver uma ideia mirabolante;

- V 1.7:
  - Inclusão das funções aos botões de musica anterior e proxima musica, ainda um pouco bugado, mas "funcional";

- V 1.7.1:
  - Ajustes na funcionalidade dos botões de trocar de música para que seja mais funcional;

- V 1.8:
  - Agora ao trocar de música as informações da música sendo tocada são ajustadas também;

- V 1.9:
  - Agora ao selecionar uma nova música ele retorna a posição que será tocada para 0 e começa a tocar ela automaticamente;
  - Criado o componente de Playlist que estará no menu, embora que ainda não ajustado para tal função;
  - Adicionado um teste de função para captar a duração da música e perceber quando ela acabar, para que assim possa pular para a proxima assim que uma acabar;

- V 1.10:
  - Ao acabar uma música, outra é iniciada na sequencia;
  - Componente de playlists que estão no menu agora foi estilizado para como será, sendo esta a proxima adição do projeto;

- V 1.11:
  - Incluido a seleção de Playlists pela API da heroku;
  - Incluido as playlists disponiveis ao menu juntamente com a funcionalidade de alterar a tela para visualisar as músicas presentes;
  - Criação da página da playlist;
  - Criação do componente de música para a página de playlist;
  - Criação do card das playlists que estão no menu;

- V 1.12:
  - Melhoria no carregamento da página de playlist;
  - Adição da função de play na música pela página de playlist;
