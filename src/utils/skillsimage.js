import aws from '../assets/svg/skills/aws.svg'
import bootstrap from '../assets/svg/skills/bootstrap.svg'
import c from '../assets/svg/skills/c.svg'
import cplusplus from '../assets/svg/skills/cplusplus.svg'
import css from '../assets/svg/skills/css.svg'
import django from '../assets/svg/skills/django.svg'
import firebase from '../assets/svg/skills/firebase.svg'
import git from '../assets/svg/skills/git.svg'
import html from '../assets/svg/skills/html.svg'
import java from '../assets/svg/skills/java.svg'
import javascript from '../assets/svg/skills/javascript.svg'
import matlab from '../assets/svg/skills/matlab.svg'
import materialui from '../assets/svg/skills/materialui.svg'
import mysql from '../assets/svg/skills/mysql.svg'
import numpy from '../assets/svg/skills/numpy.svg'
import opencv from '../assets/svg/skills/opencv.svg'
import photoshop from '../assets/svg/skills/photoshop.svg'
import php from '../assets/svg/skills/php.svg'
import python from '../assets/svg/skills/python.svg'
import react from '../assets/svg/skills/react.svg'
import wordpress from '../assets/svg/skills/wordpress.svg'
import microsoftoffice from '../assets/svg/skills/microsoftoffice.svg'
import picsart from '../assets/svg/skills/picsart.svg'
import canva from '../assets/svg/skills/canva.svg'


export const skillsImage = (skill) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'photoshop':
            return photoshop;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'react':
            return react;
        case 'bootstrap':
            return bootstrap;
        case 'mysql':
            return mysql;
        case 'materialui':
            return materialui;
        case 'c':
            return c;
        case 'c++':
            return cplusplus;
        case 'java':
            return java;
        case 'matlab':
            return matlab;
        case 'php':
            return php;
        case 'python':
            return python;
        case 'aws':
            return aws;
        case 'django':
            return django;
        case 'firebase':
            return firebase;
        case 'git':
            return git;
        case 'numpy':
            return numpy;
        case 'opencv':
            return opencv;
        case 'wordpress':
            return wordpress;
        case 'microsoft office':
            return microsoftoffice;
        case 'picsart':
            return picsart;
        case 'canva':
            return canva;
        default:
            break;
    }
}
