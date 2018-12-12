<?php
include "translations/_translator.php";
$langs = ['fr','en'];
$lang = (!empty($_GET['lang']) && in_array($_GET['lang'], $langs)) ? $_GET['lang'] : 'en';
Translator::load($lang);
?>
<!DOCTYPE html>
<html lang="<?= $lang ; ?>">
<head>
    <meta charset="UTF-8">
    <title><?= Translator::t('project.name'); ?></title>
    <link rel="stylesheet" href="build/app.css">

    <meta name="theme-color" content="#cf4343">

    <meta name="og:title" content="<?= Translator::t('project.name'); ?>"/>
    <meta name="og:type" content="website"/>
    <meta name="og:url" content="https://harassment.lorispinna.com/"/>
    <meta name="og:image" content="https://harassment.lorispinna.com/images/meta.jpg"/>
    <meta name="og:image:url" content="https://harassment.lorispinna.com/images/meta.jpg"/>
    <meta name="og:site_name" content="Observ"/>
    <meta name="og:description" content="<?= Translator::t('project.desc'); ?>"/>
    <meta name="description" content="<?= Translator::t('project.desc'); ?>"/>
    <link rel="icon" type="image/png" href="images/FAVICON.png" />

    <meta name="lang" content="<?= $lang ; ?>">
</head>
<body>
    <nav>
        <a class="information"></a>
    </nav>
    <div class="scene scene__0 ">
        <div id="intro">
            <div class="intro-redline"></div>
            <div class="intro-pre">
                <img src="images/logo.png">
            <button class="intro-button"><?= Translator::t('intro.button'); ?></button>
                <?= ($lang == "fr") ? "<a href=\".\">English version</a>" :"<a href=\"fr.html\">Version française</a>" ;?>
            </div>
            <div class="intro-text-container">
                <div class="intro-text-item" step="0">
                    <?= Translator::t('intro.first'); ?>
                </div>
                <div class="intro-text-item" step="1">
                    <?= Translator::t('intro.second'); ?>
                </div>
                <div class="intro-text-item" step="2">
                    <?= Translator::t('intro.third'); ?>
                </div>
                <div class="intro-text-item" step="3">
                    <?= Translator::t('intro.fourth'); ?>
                </div>
            </div>
        </div>
        <div class="line line__horizontal line__horizontal__middle">

        </div>
        <div class="inspector-container">
            <div class="inspector inspector__default">

            </div>
            <div class="inspector-text inspector-text__rt" step="1">
                <div class="text-style">
                    <?= Translator::t('intro.inspector.first'); ?>
                </div>
            </div>
            <div class="inspector-text inspector-text__rb" step="2">
                <div class="text-style">
                    <?= Translator::t('intro.inspector.second'); ?>
                </div>
                <button class="choice-button"><?= Translator::t('intro.button.2'); ?></button>
            </div>
        </div>
    </div>
    <div class="scene scene__1 ">
        <div class="line-button line-button__right line-button__hide"></div>
        <div class="phone">
            <div class="phone-character"></div>
        </div>
        <div class="line line__horizontal line__horizontal__middle">

        </div>

        <div class="inspector-container">
            <div class="inspector-text inspector-text__rb" step="1">
                <div class="text-style">
                    <?= Translator::t('slide.1.first'); ?>
                </div>
                <div class="text-style">
                    <?= Translator::t('slide.1.second'); ?><br>
                    <button class="choice-button graph-toggler" graph-toggle="graph.1.2" graph-disable="graph.1.1">
                        <?= Translator::t('slide.1.second.button'); ?>
                    </button>
                </div>
            </div>
            <div class="inspector-text inspector-text__rb" step="2">
                <div class="text-style">
                    <?= Translator::t('slide.1.third'); ?><br>
                    <button class="choice-button graph-toggler secondary" graph-toggle="graph.1.1" graph-disable="graph.1.2">
                        <?= Translator::t('slide.1.third.button.1'); ?>
                    </button>
                    <button class="choice-button graph-toggler secondary choice-button__l20" graph-toggle="graph.1.2" graph-disable="graph.1.1">
                        <?= Translator::t('slide.1.third.button.2'); ?>
                    </button>
                </div>
            </div>
        </div>

        <div class="graphic graphic__rt" graph="graph.1.1">
            <div id="social-use-internet"></div>
            <div class="graphic-legend">
                <?= Translator::t('legend.1'); ?>
            </div>
        </div>
        <div class="graphic graphic__rt graphic__disabled" graph="graph.1.2">
            <div id="social-use-time-internet"></div>
            <div class="graphic-legend">
                <?= Translator::t('legend.2'); ?>
            </div>
        </div>
    </div>
    <div class="scene scene__2 ">
        <div class="line-button line-button__bottom"></div>
        <div line="1" class="line line__horizontal line__horizontal__middle line__horizontal__to-middle"></div>
        <div line="2" class="line line__vertical line__vertical__from-middle line__vertical__middle"></div>
        <div class="graphic graphic__rm graphic__disabled" id="reasons-graph"><svg></svg></div>

        <div class="social-screen">
            <img class="social-screen-fb" src="images/posts/lgbt-fb.png">
            <img class="social-screen-twitter" src="images/posts/ugly-tweet.png">
            <img class="social-screen-reddit" src="images/posts/political-reddit.png">
            <img class="social-screen-insta" src="images/posts/race-insta.png">
        </div>

        <div class="inspector-container">
            <div class="inspector-text  inspector-text__alb" step="1">
                <div class="text-style">
                    <?= Translator::t("slide.2.first"); ?><br>
                    <button choice="1" class="choice-button"><?= Translator::t("slide.2.first.option.1"); ?></button>
                    <button choice="2" class="choice-button choice-button__l12"><?= Translator::t("slide.2.first.option.2"); ?></button> <br>
                    <button choice="3" class="choice-button"><?= Translator::t("slide.2.first.option.3"); ?></button>
                    <button choice="4" class="choice-button choice-button__l12"><?= Translator::t("slide.2.first.option.4"); ?></button>
                </div>
            </div>
            <div class="inspector-text  inspector-text__alb" step="2">
                <div class="text-style">
                </div>
                <div class="text-style reason-legend">
                </div>
            </div>
        </div>
    </div>
    <div class="scene scene__3 ">
        <div class="line-button line-button__bottom" style="display: none"></div>

        <div class="line line__vertical line__vertical__from-top line__vertical__middle"></div>
        <div class="graphic graphic__rt-sm graphic__disabled" graph="graph.3.1">
            <div class="" id="demography-gender-graph"></div>
        </div>
        <div class="graphic graphic__lb-sm graphic__disabled"  graph="graph.3.2">
            <div class="" id="demography-age-graph"></div>
        </div>

        <div class="inspector-container">
            <div class="inspector-text  inspector-text__mtl" step="1">
                <div class="text-style">
                    <?= Translator::t('slide.3.first'); ?><br>
                    <button class="choice-button graph-toggler" graph-toggle="graph.3.1" reply="1">
                        <?= Translator::t('slide.3.first.button.1'); ?>
                    </button>
                    <button class="choice-button graph-toggler choice-button__l12" graph-toggle="graph.3.1" reply="2">
                        <?= Translator::t('slide.3.first.button.2'); ?>
                    </button>
                </div>
            </div>
            <div class="inspector-text  inspector-text__mbr" step="2">
                <div class="text-style">  </div>
            </div>
        </div>
    </div>
    <div class="scene scene__4 ">
        <div class="line-button line-button__left" style="display: none"></div>

        <div line="1" class="line line__vertical line__vertical__middle line__vertical__to-middle"></div>
        <div line="2" class="line line__horizontal line__horizontal__middle line__horizontal__to-middle"></div>
        <div class="inspector-container">
            <div class="inspector-text inspector-text__appear inspector-text__alt" step="1">
                <div class="text-style reason-legend">
                    <?= Translator::t('slide.4.first'); ?>
                    <br>
                    <button class="choice-button">
                        <?= Translator::t('slide.4.first.button'); ?>
                    </button>
                </div>
            </div>
            <div class="inspector-text  inspector-text__alt" step="2">
                <div class="text-style reason-legend">
                    <?= Translator::t('slide.4.second'); ?>
                </div>
            </div>
            <div class="inspector-text  inspector-text__alt" step="3">
                <div class="text-style reason-legend">
                    <?= Translator::t('slide.4.third'); ?>
                </div>
            </div>
        </div>
        <div class="folder-maker folder-maker__hide">
            <div class="folder-maker-name">
                <?= Translator::t('slide.4.name'); ?>
            </div>
            <div class="folder-line folder-line__verified" folder-valid="offensive-name-calling" folder-value="">
                <div class="folder-line-icon"></div>
                <div class="folder-line-name">
                    <div><?= Translator::t("slide.4.how.offensive-name-calling"); ?></div>
                    <select>
                    </select>
                </div>
                <div class="folder-line-elements">27%</div>
            </div>
            <?php
            foreach (['purposeful-embarrassement' => 22, 'physical-treats' => 10, 'stalking' => 7, 'sustained-harassment' => 7, 'sexual-harassment' => 6] as $key => $value) {
                ?>
                <div class="folder-line" folder-valid="<?= $key; ?>" >
                    <div class="folder-line-icon"></div>
                    <div class="folder-line-name">
                        <div><?= Translator::t('slide.4.how.'.$key)?></div>
                        <select></select>
                    </div>
                    <div class="folder-line-elements"><?= $value; ?>%</div>
                </div>
            <?php
            }
            ?>
        </div>
        <div class="graphic graphic__rb-long">
            <div id="how-graph"></div>
            <div class="graphic-legend">
                <?= Translator::t('legend.5'); ?>
            </div>
        </div>
    </div>
    <div class="scene scene__5">
        <div class="line-button line-button__left"></div>

        <div class="inspector-container">
            <div class="inspector-text inspector-text__appear inspector-text__art" step="1">
                <div class="text-style reason-legend">
                    <?= Translator::t('slide.5.first'); ?>
                </div>
            </div>
        </div>

        <div class="phone"></div>


        <div class="graphic-menu">
            <ul>
                <li class="active" show-data="gender"><img src="images/icons/icon-sexe.png"></li>
                <li class="animate" show-data="sexual"><img src="images/icons/icon-lgbt.png"></li>
                <li class="animate" show-data="graduation"><img src="images/icons/icon-education.png"></li>
                <li class="animate" show-data="age"><img src="images/icons/icon-anniversaire.png"></li>
            </ul>
        </div>
        <div class="graphic graphic__rb-md">
            <div id="revenge-porn-graph"></div>

            <div class="graphic-legend">
                <?= Translator::t('legend.6'); ?>
            </div>
        </div>



        <div class="line line__horizontal line__horizontal__middle"></div>

    </div>
    <div class="scene scene__6 ">
        <div class="scene-full__black scene-full"></div>
        <div class="line line__horizontal line__horizontal__middle"></div>

        <div class="inspector-container">
            <div class="inspector-text inspector-text__br-sm" step="1">
                <div class="text-style">
                    <?= Translator::t('slide.6.first'); ?>
                </div>
            </div>
        </div>

        <div class="door">
            <img src="images/final/porte-1.png">
        </div>
        <div class="door-red">
            <img src="images/final/porte-2.png">
        </div>
        <div class="door-shadow">
        </div>
        <div class="links links__hidden">
            <div class="link-header">
                <?= Translator::t("slide.6.header") ;?>
            </div>
            <div class="link-item">
                <a href="https://iheartmob.org/"><img src="images/logos/iheartmob.svg" alt="HeartMob"></a>
            </div>
            <div class="link-item">
                <a href="http://www.crashoverridenetwork.com/index.html"><img src="images/logos/crashoverride.png" alt="Crash Override Network"></a>
            </div>
            <div class="link-item">
                <a href="https://www.bullying.co.uk/"><img src="images/logos/bullyingco.png" alt="Bullying Co UK"></a>
            </div>
            <div class="link-item">
                <a href="https://onlinesos.org/"><img src="images/logos/onlinesos.png" alt="Online SOS"></a>
            </div>
        </div>

    </div>
    <div id="credits" class="credits__hide">
        <div class="credit-overlay"></div>
        <div class="credit-container">
            <div class="credit-container-made">
                Made by <a href="https://lorispinna.com" target="_blank">Loris Pinna</a> and <a href="http://antoinerault.fr" target="_blank">Antoine Rault</a>
            </div>
            <div class="credit-separator"></div>
            <div class="credit-container-sources">
                <strong>
                    Our sources :
                </strong>
                <ul>
                    <li> <a href="http://www.pewinternet.org/dataset/american-trends-panel-wave-24/">Pew Internet Research Center</a> : Online Harassment 2017</li>
                    <li>  <a href="https://datasociety.net/pubs/oh/Nonconsensual_Image_Sharing_2016.pdf">Data Society</a> : Non-consensual image sharing 2016</li>
                    <li>  <a href="https://www.ted.com/talks/darieth_chisolm_let_s_call_revenge_porn_what_it_is_digital_domestic_violence">TED</a> : Revenge Porn</li>
                </ul>


            </div>
            <div class="credit-separator"></div>
            <div class="credit-container-logos">
               <a href="https://www.gobelins.fr/" target="_blank"><img src="images/logos/logo-gobelins.png"></a>
               <a href="http://www.formation-cci.fr/" target="_blank"><img src="images/logos/logo-cci.png"></a>
            </div>
            <div class="credit-container-student">
            Student project
            </div>
        </div>
    </div>
    <script src="js/d3.js"   defer></script>
    <script src="js/billboard.js"   defer></script>
<script src="build/runtime.js" defer></script>
<script src="build/app.js" defer></script>
</body>
</html>
