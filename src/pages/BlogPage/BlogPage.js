import React from "react";
import "./BlogPage.css";
import anh1 from "./img/anh1.png";
import anh2 from "./img/anh2.png";
import anh3 from "./img/anh3.png";
import anh4 from "./img/anh4.png";
const BlogPage = () => {
    return (
        <>
            <section className="section section-lg">
                <div class="breadcrumbs-custom-inner">
                    <div class="breadcrumbs-custom-container">
                        <div class="breadcrumbs-custom-main">
                            <h6 class="breadcrumbs-custom-subtitle-title-decorated">Blog</h6>
                            <h1 class="breadcrumbs-custom-title">Grid Blog</h1>
                        </div>
                        <ul class="breadcrumbs-custom-path">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="#">Blog</a>
                            </li>
                            <li class="active">Grid Blog</li>
                        </ul>
                    </div>
                </div>
            </section>
            <section className="container">
                <div className="row">
                    <div className="col-6">
                        <div class="wow scaleFadeIn">
                            <article class="post-modern">
                                <a class="post-modern-media" href="#">
                                    <img src={anh1} alt="anh1" width="570" height="352" />
                                </a>
                                <h4 class="post-modern-title">
                                    <a href="single-blog-post.html">
                                        6 Tips to Book the Best Hotel for You
                                    </a>
                                </h4>
                                <ul class="post-modern-meta">
                                    <li>by Mike Barnes</li>
                                    <li>
                                        <time datetime="2018">Apr 21, 2018 at 12:05 pm</time>
                                    </li>
                                    <li>
                                        <a class="button-winona" href="#">
                                            News
                                        </a>
                                    </li>
                                </ul>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ulla
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="wow scaleFadeIn">
                            <article class="post-modern">
                                <a class="post-modern-media" href="single-blog-post.html">
                                    <img src={anh2} alt="" width="570" height="352" />
                                </a>
                                <h4 class="post-modern-title">
                                    <a href="single-blog-post.html">
                                        Hotel Safety Tips You Should Not Ignore
                                    </a>
                                </h4>
                                <ul class="post-modern-meta">
                                    <li>by Mike Barnes</li>
                                    <li>
                                        <time datetime="2018">Apr 21, 2018 at 12:05 pm</time>
                                    </li>
                                    <li>
                                        <a class="button-winona" href="#">
                                            News
                                        </a>
                                    </li>
                                </ul>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ulla
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="wow scaleFadeIn">
                            <article class="post-modern">
                                <a class="post-modern-media" href="single-blog-post.html">
                                    <img src={anh3} alt="" width="570" height="352" />
                                </a>
                                <h4 class="post-modern-title">
                                    <a href="single-blog-post.html">
                                        A Guide to Tipping Hotel HouseKeeping
                                    </a>
                                </h4>
                                <ul class="post-modern-meta">
                                    <li>by Mike Barnes</li>
                                    <li>
                                        <time datetime="2018">Apr 21, 2018 at 12:05 pm</time>
                                    </li>
                                    <li>
                                        <a class="button-winona" href="#">
                                            News
                                        </a>
                                    </li>
                                </ul>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ulla
                                </p>
                            </article>
                        </div>
                    </div>
                    <div className="col-6">
                        <div class="wow scaleFadeIn">
                            <article class="post-modern">
                                <a class="post-modern-media" href="single-blog-post.html">
                                    <img src={anh4} alt="" width="570" height="352" />
                                </a>
                                <h4 class="post-modern-title">
                                    <a href="single-blog-post.html">
                                        What Exactly is a Boutique Hotel
                                    </a>
                                </h4>
                                <ul class="post-modern-meta">
                                    <li>by Mike Barnes</li>
                                    <li>
                                        <time datetime="2018">Apr 21, 2018 at 12:05 pm</time>
                                    </li>
                                    <li>
                                        <a class="button-winona" href="#">
                                            News
                                        </a>
                                    </li>
                                </ul>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    Ut enim ad minim veniam, quis nostrud exercitation ulla
                                </p>
                            </article>
                        </div>
                    </div>
                </div>

                <div className="pagination">
                    <div class="page-item active">
                        <a class="page-link button-winona" href="#">
                            1
                        </a>
                    </div>
                    <div class="page-item">
                        <a class="page-link button-winona" href="#">
                            2
                        </a>
                    </div>
                    <div class="page-item">
                        <a class="page-link button-winona" href="#">
                            3
                        </a>
                    </div>
                    <div class="page-item">
                        <a class="page-link button-winona" href="#">
                            4
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogPage;