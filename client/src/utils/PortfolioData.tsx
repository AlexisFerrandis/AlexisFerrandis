import facedookPreview from "../assets/preview/facedook-min.webp"
import konsolPreview from "../assets/preview/konsol-min.webp"
import portfolio1Preview from "../assets/preview/portfoliov1-min.webp"
import portfolio2Preview from "../assets/preview/portfoliov2-min.webp"
import elodiePreview from "../assets/preview/elodiepascal-min.webp"
import srgamePreview from "../assets/preview/srgame-min.webp"
import winelabelPreview from "../assets/preview/wineLabel-min.webp"
import syrahgencePreview from "../assets/preview/syrahgence-min.webp"
import lrdbPreview from "../assets/preview/lrdb-min.webp"
import benjaminPreview from "../assets/preview/benjamin-min.webp"
import navicellePreview from "../assets/preview/navicelle-min.webp"
import litiniPreview from "../assets/preview/litini-min.webp"
import ffwPreview from "../assets/preview/ffw-min.webp"
import pokemonJs from "../assets/preview/pokemonJs-min.webp"
import projectPreview from "../assets/preview/konsol-min.webp"
import turtlePillowPreviw from "../assets/preview/turtlepillow-min.webp"
import rpggPreview from "../assets/preview/rpg-g.webp"
import twofourtyheightPreview from "../assets/preview/2048.webp"

export const webProjects = [
    {
        title: 'Fight For Words',
        type: 'Application',
        preview: ffwPreview,
        technologies: ['React', 'Node.js', 'MongoDB', 'Figma'],
        link: 'https://www.fightforwords.com/'
    },
    {
        title: 'Benjamin Laigret',
        type: 'Portfolio',
        preview: benjaminPreview,
        technologies: ['React', 'SCSS', 'Gimp'],
        link: 'https://www.benjaminlaigret.fr/'
    },
    {
        title: 'La Navicelle',
        type: 'E-commerce & Website',
        preview: navicellePreview,
        technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
        link: 'https://domainelanavicelle.com/'
    },
    {
        title: 'Pokemon JS',
        type: 'Video Game',
        preview: pokemonJs,
        technologies: ['React', 'SCSS', 'Gimp', 'Tiled'],
        link: 'https://www.pokemonjs.alexisferrandis.com/'
    },
    {
        title: 'Le Repaire de Bacchus',
        type: 'Website',
        preview: lrdbPreview,
        technologies: ['React', 'Node.js', 'MongoDB', 'SCSS'],
        link: 'https://www.lerepairedebacchus.com/'
    },
    {
        title: 'Litini',
        type: 'Website & Application',
        preview: litiniPreview,
        technologies: ['React', 'React Native', 'Beacon', 'BLE'],
        link: 'https://www.litini.alexisferrandis.com/'
    },
    {
        title: 'SRGame',
        type: 'Video Game',
        preview: srgamePreview,
        technologies: ['HTML5', 'Vanilla JS', 'Gimp'],
        link: 'https://srgame.alexisferrandis.com/'
    },
    {
        title: 'Syrahgence',
        type: 'Website',
        preview: syrahgencePreview,
        technologies: ['React', 'SCSS', 'Figma'],
        link: 'https://syrahgence.fr/'
    },
    {
        title: 'RPG-G',
        type: 'Application',
        preview: rpggPreview,
        technologies: ['React', 'TypeScript', 'PHP', 'MongoDB'],
        link: 'https://rpg-g.com/'
    },
    {
        title: 'Elodie Pascal',
        type: 'Website',
        preview: elodiePreview,
        technologies: ['React', 'SCSS', 'Figma'],
        link: 'https://elodiepascal.com/'
    },
    {
        title: 'Facedook',
        type: 'Application',
        preview: facedookPreview,
        technologies: ['React', 'Node.js', 'MongoDB', 'SCSS'],
        link: 'https://github.com/AlexisFerrandis/Facedook'
    },
    {
        title: 'Turtle Pillow',
        type: 'ARG',
        preview: turtlePillowPreviw,
        technologies: ['HTML5', 'Vanilla JS', 'Gimp'],
        link: 'https://turtle-pillow.alexisferrandis.com/'
    },
    {
        title: 'Wine-Label',
        type: 'Application',
        preview: winelabelPreview,
        technologies: ['TypeScript', 'QR Code', 'SCSS'],
        link: 'https://wine-label.fr/'
    },
    {
        title: 'Konsol',
        type: 'Website',
        preview: konsolPreview,
        technologies: ['HTML5', 'Vanilla JS', 'Gimp'],
        link: 'https://konsol.alexisferrandis.com/'
    },
    {
        title: 'Customisable 2048',
        type: 'Video Game',
        preview: twofourtyheightPreview,
        technologies: ['HTML5', 'Vanilla JS'],
        link: 'https://2048.alexisferrandis.com/'
    },
    {
        title: 'Portfolio v2',
        type: 'Portfolio',
        preview: portfolio2Preview,
        technologies: ['React', 'SCSS', 'Figma'],
        link: 'https://v2.alexisferrandis.com/'
    },
    {
        title: 'Portfolio v1',
        type: 'Portfolio',
        preview: portfolio1Preview,
        technologies: ['React', 'SCSS'],
        link: 'https://v1.alexisferrandis.com/'
    },
];

export const iotProjects = [
    {
        title: 'IoT Project 1',
        type: 'Portfolio',
        preview: projectPreview,
        technologies: ['Arduino', 'C++', 'MQTT'],
        link: 'https://example.com/web-project-1'
    },
    {
        title: 'IoT Project 2',
        type: 'Portfolio',
        preview: projectPreview,
        technologies: ['Raspberry Pi', 'Python', 'Node.js'],
        link: 'https://example.com/web-project-1'
    },
];

export const techColors = {
    'HTML5': 'hsl(145, 45%, 55%)',
    'Vanilla JS': 'hsl(210, 75%, 60%)',
    'React': 'hsl(204, 100%, 50%)',
    'Node.js': 'hsl(45, 75%, 60%)',
    'PHP': 'hsl(45, 75%, 60%)',
    'MongoDB': 'hsl(145, 45%, 55%)',
    'Next.js': 'hsl(272, 100%, 80%)',
    'TypeScript': 'hsl(272, 100%, 80%)',
    'SCSS': 'hsl(0, 75%, 60%)',
    'Figma': 'hsl(272, 100%, 80%)',
    'Gimp': 'hsl(272, 76%, 57%)',
    'QR Code': 'hsl(45, 100%, 60%)',
    'React Native': 'hsl(35, 70%, 58%)',
    'Beacon': 'hsl(272, 76%, 57%)',
    'BLE': 'hsl(0, 75%, 60%)',
    'Tiled': 'hsl(145, 45%, 55%)',


    'Arduino': 'hsl(204, 100%, 50%)',
    'C++': 'hsl(210, 75%, 60%)',
    'MQTT': 'hsl(45, 100%, 60%)',
    'Raspberry Pi': 'hsl(120, 75%, 60%)',
    'Python': 'hsl(45, 75%, 60%)',
};