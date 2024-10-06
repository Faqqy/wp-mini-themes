<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Maksimus
 */

?>
<!DOCTYPE html>
<html lang="ru" id="htmlTop">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script defer src="https://kit.fontawesome.com/542efb6bea.js" crossorigin="anonymous"></script>
	<?php wp_head(); ?>
</head>
<body class="page" id="page">
<div class="overlay" id="overlaypage">

</div>


<header class="header">
            <div class="container-fluid">
                <div class="row">
                    <div class="col">
                        <div class="header__container">
                            <div class="header__logo logo">
                                <div class="logo__img img">
                                    <a href="<?php echo get_permalink(7); ?>">
                                        <img src="<?php echo get_stylesheet_directory_uri() ?>/asset/resource/logowhite.png" alt="Максимус здоровья, логотип" loading="lazy">
                                    </a>
                                </div>
                            </div>
                            <div class="header__menu menu">
                                <ul class="header__navigation">
                                    <li class="header__navigation--item">
                                        <a href="<?php echo get_permalink(7); ?>">
                                            Главная
                                        </a>
                                    </li>
                                    <li class="header__navigation--item">
                                        <a href="<?php echo get_permalink(9); ?>">
                                            Тарифы
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="header__social social">
                                <ul class="header__social">
                                    <li class="header__social--item">
                                        <a href="">
                                            <i class="fa-solid fa-phone" style="color: #d4dc3e;"></i> 8 (555)555-55-55
                                        </a>
                                        <div class="button__social">
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="header__container--mobile">
                            <div class="navbar">
                            <div class="logo-mobile">
                                    <img src="<?php echo get_stylesheet_directory_uri() ?>/asset/resource/logowhite.png" alt="Максимус здоровья, логотип" loading="lazy">
                                </div>
                                <div class="container nav-container">
                                    <input class="checkbox" type="checkbox" name="" id="openmenu" />
                                    <div class="hamburger-lines">
                                    <span class="line line1"></span>
                                    <span class="line line2"></span>
                                    <span class="line line3"></span>
                                </div>
                                <ul class="header__social--mobile">
                                    <li class="header__social--item">
                                        <a href="">
                                            <i class="fa-solid fa-phone" style="color: #d4dc3e;"></i> 8 (555)555-55-55
                                        </a>
                                    </li>
                                </ul>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <div class="menu__right-left" id="openMenuMob">
            <ul class="header__navigation-mobile">
                <li class="header__navigation--item">
                    <a href="<?php echo get_permalink(7); ?>">
                        Главная
                    </a>
                </li>
                <li class="header__navigation--item">
                    <a href="<?php echo get_permalink(9); ?>">
                        Тарифы
                    </a>
                </li>
                <li class="header__navigation--item">
                    <a href="">
                        <i class="fa-solid fa-phone" style="color: #d4dc3e;"></i> 8 (555)555-55-55
                    </a>
                </li>
            </ul>
        </div>