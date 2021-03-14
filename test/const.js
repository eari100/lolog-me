const RIOTCDNURI = 'https://ddragon.leagueoflegends.com/cdn/11.5.1';

const SPELL = {
    '1': 'SummonerBoost',
    '3': 'SummonerExhaust',
    '4': 'SummonerFlash',
    '6': 'SummonerHaste',
    '7': 'SummonerHeal',
    '11': 'SummonerSmite',
    '12': 'SummonerTeleport',
    '13': 'SummonerMana',
    '14': 'SummonerDot',
    '21': 'SummonerBarrier',
    '30': 'SummonerPoroRecall',
    '31': 'SummonerPoroThrow',
    '32': 'SummonerSnowball',
    '39': 'SummonerSnowURFSnowball_Mark'
}

const CHAMPION = {
    '1': 'Annie',
    '2': 'Olaf',
    '3': 'Galio',
    '4': 'TwistedFate',
    '5': 'XinZhao',
    '6': 'Urgot',
    '7': 'Leblanc',
    '8': 'Vladimir',
    '9': 'Fiddlesticks',
    '10': 'Kayle',
    '11': 'MasterYi',
    '12': 'Alistar',
    '13': 'Ryze',
    '14': 'Sion',
    '15': 'Sivir',
    '16': 'Soraka',
    '17': 'Teemo',
    '18': 'Tristana',
    '19': 'Warwick',
    '20': 'Nunu',
    '21': 'MissFortune',
    '22': 'Ashe',
    '23': 'Tryndamere',
    '24': 'Jax',
    '25': 'Morgana',
    '26': 'Zilean',
    '27': 'Singed',
    '28': 'Evelynn',
    '29': 'Twitch',
    '30': 'Karthus',
    '31': 'Chogath',
    '32': 'Amumu',
    '33': 'Rammus',
    '34': 'Anivia',
    '35': 'Shaco',
    '36': 'DrMundo',
    '37': 'Sona',
    '38': 'Kassadin',
    '39': 'Irelia',
    '40': 'Janna',
    '41': 'Gangplank',
    '42': 'Corki',
    '43': 'Karma',
    '44': 'Taric',
    '45': 'Veigar',
    '48': 'Trundle',
    '50': 'Swain',
    '51': 'Caitlyn',
    '53': 'Blitzcrank',
    '54': 'Malphite',
    '55': 'Katarina',
    '56': 'Nocturne',
    '57': 'Maokai',
    '58': 'Renekton',
    '59': 'JarvanIV',
    '60': 'Elise',
    '61': 'Orianna',
    '62': 'MonkeyKing',
    '63': 'Brand',
    '64': 'LeeSin',
    '67': 'Vayne',
    '68': 'Rumble',
    '69': 'Cassiopeia',
    '72': 'Skarner',
    '74': 'Heimerdinger',
    '75': 'Nasus',
    '76': 'Nidalee',
    '77': 'Udyr',
    '78': 'Poppy',
    '79': 'Gragas',
    '80': 'Pantheon',
    '81': 'Ezreal',
    '82': 'Mordekaiser',
    '83': 'Yorick',
    '84': 'Akali',
    '85': 'Kennen',
    '86': 'Garen',
    '89': 'Leona',
    '90': 'Malzahar',
    '91': 'Talon',
    '92': 'Riven',
    '96': 'KogMaw',
    '98': 'Shen',
    '99': 'Lux',
    '101': 'Xerath',
    '102': 'Shyvana',
    '103': 'Ahri',
    '104': 'Graves',
    '105': 'Fizz',
    '106': 'Volibear',
    '107': 'Rengar',
    '110': 'Varus',
    '111': 'Nautilus',
    '112': 'Viktor',
    '113': 'Sejuani',
    '114': 'Fiora',
    '115': 'Ziggs',
    '117': 'Lulu',
    '119': 'Draven',
    '120': 'Hecarim',
    '121': 'Khazix',
    '122': 'Darius',
    '126': 'Jayce',
    '127': 'Lissandra',
    '131': 'Diana',
    '133': 'Quinn',
    '134': 'Syndra',
    '136': 'AurelionSol',
    '141': 'Kayn',
    '142': 'Zoe',
    '143': 'Zyra',
    '145': 'Kaisa',
    '147': 'Seraphine',
    '150': 'Gnar',
    '154': 'Zac',
    '157': 'Yasuo',
    '161': 'Velkoz',
    '163': 'Taliyah',
    '164': 'Camille',
    '201': 'Braum',
    '202': 'Jhin',
    '203': 'Kindred',
    '222': 'Jinx',
    '223': 'TahmKench',
    '234': 'Viego',
    '235': 'Senna',
    '236': 'Lucian',
    '238': 'Zed',
    '240': 'Kled',
    '245': 'Ekko',
    '246': 'Qiyana',
    '254': 'Vi',
    '266': 'Aatrox',
    '267': 'Nami',
    '268': 'Azir',
    '350': 'Yuumi',
    '360': 'Samira',
    '412': 'Thresh',
    '420': 'Illaoi',
    '421': 'RekSai',
    '427': 'Ivern',
    '429': 'Kalista',
    '432': 'Bard',
    '497': 'Rakan',
    '498': 'Xayah',
    '516': 'Ornn',
    '517': 'Sylas',
    '518': 'Neeko',
    '523': 'Aphelios',
    '526': 'Rell',
    '555': 'Pyke',
    '777': 'Yone',
    '875': 'Sett',
    '876': 'Lillia'
}

const RUNE = {
    '8000': 'perk-images/Styles/7201_Precision.png',
    '8005': 'perk-images/Styles/Precision/PressTheAttack/PressTheAttack.png',
    '8008': 'perk-images/Styles/Precision/LethalTempo/LethalTempoTemp.png',
    '8010': 'perk-images/Styles/Precision/Conqueror/Conqueror.png',
    '8021': 'perk-images/Styles/Precision/FleetFootwork/FleetFootwork.png',
    '8100': 'perk-images/Styles/7200_Domination.png',
    '8112': 'perk-images/Styles/Domination/Electrocute/Electrocute.png',
    '8124': 'perk-images/Styles/Domination/Predator/Predator.png',
    '8128': 'perk-images/Styles/Domination/DarkHarvest/DarkHarvest.png',
    '8200': 'perk-images/Styles/7202_Sorcery.png',
    '8214': 'perk-images/Styles/Sorcery/SummonAery/SummonAery.png',
    '8229': 'perk-images/Styles/Sorcery/ArcaneComet/ArcaneComet.png',
    '8230': 'perk-images/Styles/Sorcery/PhaseRush/PhaseRush.png',
    '8300': 'perk-images/Styles/7203_Whimsy.png',
    '8351': 'perk-images/Styles/Inspiration/GlacialAugment/GlacialAugment.png',
    '8358': 'perk-images/Styles/Inspiration/MasterKey/MasterKey.png',
    '8360': 'perk-images/Styles/Inspiration/UnsealedSpellbook/UnsealedSpellbook.png',
    '8400': 'perk-images/Styles/7204_Resolve.png',
    '8437': 'perk-images/Styles/Resolve/GraspOfTheUndying/GraspOfTheUndying.png',
    '8439': 'perk-images/Styles/Resolve/VeteranAftershock/VeteranAftershock.png',
    '8465': 'perk-images/Styles/Resolve/Guardian/Guardian.png',
    '9923': 'perk-images/Styles/Domination/HailOfBlades/HailOfBlades.png'
}

module.exports = {
    RIOTCDNURI: RIOTCDNURI,
    SPELL: SPELL,
    CHAMPION: CHAMPION,
    RUNE: RUNE
}