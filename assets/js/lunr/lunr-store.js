<!doctype html>
<!--
  Minimal Mistakes Jekyll Theme 4.15.2 by Michael Rose
  Copyright 2013-2019 Michael Rose - mademistakes.com | @mmistakes
  Free for personal and commercial use under the MIT license
  https://github.com/mmistakes/minimal-mistakes/blob/master/LICENSE
-->
<html lang="en" class="no-js">
  <head>
    <meta charset="utf-8">

<!-- begin _includes/seo.html --><title>Kevin's Ramblings</title>
<meta name="description" content="var store = [{        “title”: “First Post”,        “excerpt”:”First post here. More to come later. Happy X-mas to you all!  “,”categories”: [],        “tags”: [],        “url”: “https://kadler.github.io/2016/12/23/first-post.html”,        “teaser”:null},{        “title”: “PATH vs LIBPATH”,        “excerpt”:”I see this kind of tip suggested a lot when dealing with PASE issues: export PATH=/my/path/bin:/other/path/bin:$PATH export LIBPATH=/my/path/bin:/other/path/bin:$LIBPATH This misguided suggestion bugs me to no end, so today I’m here to educate and clear up confusion over LIBPATH. We’re on the Road PATH to Nowhere Let’s start by looking at…”,”categories”: [“libpath”,”pase”],        “tags”: [],        “url”: “https://kadler.github.io/2017/09/01/path.html”,        “teaser”:null},{        “title”: “LIBPATH… How Does It Work?”,        “excerpt”:”So in the last entry, I described the differences between PATH and LIBPATH, but I didn’t really explain how LIBPATH is actually used. I’m going to rectify that in this entry. First, though, we need to take a detour and learn how programs get loaded. Loading 101 When you execute…”,”categories”: [“libpath”,”pase”],        “tags”: [],        “url”: “https://kadler.github.io/2017/09/08/libpath.html”,        “teaser”:null},{        “title”: “Mucking with the Runtime Library Search Path on PASE”,        “excerpt”:”In my last blog I showed how the LIBPATH gets used and also how the runtime search path in the binary gets used. LIBPATH is obviously set as an environment variable, but how does that runtime search path get generated? Let’s explore! #include &lt;stdio.h&gt; int main(int argc, char** argv) {…”,”categories”: [“libpath”,”pase”],        “tags”: [],        “url”: “https://kadler.github.io/2017/11/17/how-to-libpath.html”,        “teaser”:null},{        “title”: “Fetching Python Database Cursors by Column Name”,        “excerpt”:”Today I got asked if you can index in to rows returned by ibm_db_dbi by column name. While this doesn’t come out of the box1, it can be done pretty easily. Here’s some bog-standard Python code that executes a query and prints out each row: import ibm_db_dbi as db2 cur…”,”categories”: [“python”,”ibm_db”],        “tags”: [],        “url”: “https://kadler.github.io/2018/01/08/fetching-python-database-cursors-by-column-name.html”,        “teaser”:null},{        “title”: “Calling QSH utilities from PASE”,        “excerpt”:”QSH provides a wonderful utility called db2 which allows you to run SQL queries from within the QSH shell, but what if you’re in a QP2TERM shell or using SSH - what then? QSH from PASE Well, PASE provides a qsh utility which allows you to call programs within the…”,”categories”: [“pase”,”qsh”],        “tags”: [],        “url”: “https://kadler.github.io/2018/05/29/calling-qsh-utilities-from-pase.html”,        “teaser”:null},{        “title”: “Using Python ibm_db with Un-journaled Tables”,        “excerpt”:”When using the Python ibm_db package to interact with the Db2 for i database, you may run in to this error: &gt;&gt;&gt; cur.execute(‘insert into qtemp.foo values(1)’) Traceback (most recent call last): File &quot;/QOpenSys/pkgs/lib/python3.6/site-packages/ibm_db_dbi.py&quot;, line 1311, in _execute_helper return_value = ibm_db.execute(self.stmt_handler) Exception: Statement Execute Failed: FOO in QTEMP not valid for…”,”categories”: [“python”,”ibm_db”],        “tags”: [],        “url”: “https://kadler.github.io/2018/09/20/using-python-ibm-db-with-un-journaled-files.html”,        “teaser”:null},{        “title”: “Using System Naming in Python ibm_db”,        “excerpt”:”Like last-week’s post about commitment control in Python ibm_db, you may run in to this unexpected error as well: &gt;&gt;&gt; cur.callproc(‘qcmdexc’, (‘ADDLIBLE QIWS’,)) (‘ADDLIBLE QIWS’,) &gt;&gt;&gt; cur.execute(&quot;select * from qcustcdt&quot;) Traceback (most recent call last): File &quot;/QOpenSys/pkgs/lib/python3.6/site-packages/ibm_db_dbi.py&quot;, line 1254, in _prepare_helper self.stmt_handler = ibm_db.prepare(self.conn_handler, operation) Exception: QCUSTCDT in KADLER type…”,”categories”: [“python”,”ibm_db”],        “tags”: [],        “url”: “https://kadler.github.io/2018/09/28/using-system-naming-in-ibm_db.html”,        “teaser”:null},{        “title”: “Bash Command Oddities”,        “excerpt”:”Sometimes when using bash, you can run in to an oddity where it keeps running the “wrong” command. Let’s go through a scenario: It was a dark and stormy night… You want to install a Python package and you’re using the new Python 3.6 installed via yum: bash-4.4$ export PATH=/QOpenSys/pkgs/bin:$PATH…”,”categories”: [“bash”],        “tags”: [],        “url”: “https://kadler.github.io/2018/10/02/bash-command-oddities.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates Dec 2019”,        “excerpt”:”It’s a new year and so I’m finally getting around to doing something that I’ve wanted to do for a while now: write a blog series about various updates about what the IBM i OSS team is doing. I’m not sure the cadence of these updates, but I’ll try to…”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/01/08/oss-updates.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates Jan 2020”,        “excerpt”:”Well, I hadn’t planned to take this long to get out another blog, but the world of OSS moves fast and things have been very busy around here. I’m planning on having more frequent updates than every other month. Let’s start with what my team did in January. Package Updates…”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/04/10/oss-updates.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates Feb 2020”,        “excerpt”:”Wow, hasn’t even been a week! In this blog entry, I’m going to go over what my team delivered in February. New Packages jq jq is described as “sed for JSON”. If you don’t know what sed is, it stands for Stream EDitor and basically it allows you to slice…”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/04/15/feb-oss-updates.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates Mar 2020”,        “excerpt”:”Alright folks, strap in because March was a busy month! New Packages tmux tmux is a Terminal MUltipleXer. It allows you to create multiple sessions that are persistent - you can disconnect (or become disconnected, eg. wifi drops off) and then reconnect and everything will be as it was before….”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/04/22/mar-oss-updates.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates Apr 2020”,        “excerpt”:”April seemed very busy to me, but it ended up being rather mild in what we actually delivered. I suspect that means that my May update will be a rather large update. :wink: NOTE: I said last time I was going to update on the other things my team was…”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/05/20/apr-oss-updates.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates May 2020”,        “excerpt”:”Well, I mentioned before that the May update was gonna be big and boy is it a doozy! New Packages logrotate logrotate is a tool that can rotate your logs — you can configure it to automatically rotate, compress, and even remove your log files. This is very useful for…”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/06/22/may-oss-updates.html”,        “teaser”:null}]">



<meta property="og:type" content="website">
<meta property="og:locale" content="en_US">
<meta property="og:site_name" content="Kevin's Ramblings">
<meta property="og:title" content="Kevin’s Ramblings">
<meta property="og:url" content="https://kadler.github.io/assets/js/lunr/lunr-store.js">


  <meta property="og:description" content="var store = [{        “title”: “First Post”,        “excerpt”:”First post here. More to come later. Happy X-mas to you all!  “,”categories”: [],        “tags”: [],        “url”: “https://kadler.github.io/2016/12/23/first-post.html”,        “teaser”:null},{        “title”: “PATH vs LIBPATH”,        “excerpt”:”I see this kind of tip suggested a lot when dealing with PASE issues: export PATH=/my/path/bin:/other/path/bin:$PATH export LIBPATH=/my/path/bin:/other/path/bin:$LIBPATH This misguided suggestion bugs me to no end, so today I’m here to educate and clear up confusion over LIBPATH. We’re on the Road PATH to Nowhere Let’s start by looking at…”,”categories”: [“libpath”,”pase”],        “tags”: [],        “url”: “https://kadler.github.io/2017/09/01/path.html”,        “teaser”:null},{        “title”: “LIBPATH… How Does It Work?”,        “excerpt”:”So in the last entry, I described the differences between PATH and LIBPATH, but I didn’t really explain how LIBPATH is actually used. I’m going to rectify that in this entry. First, though, we need to take a detour and learn how programs get loaded. Loading 101 When you execute…”,”categories”: [“libpath”,”pase”],        “tags”: [],        “url”: “https://kadler.github.io/2017/09/08/libpath.html”,        “teaser”:null},{        “title”: “Mucking with the Runtime Library Search Path on PASE”,        “excerpt”:”In my last blog I showed how the LIBPATH gets used and also how the runtime search path in the binary gets used. LIBPATH is obviously set as an environment variable, but how does that runtime search path get generated? Let’s explore! #include &lt;stdio.h&gt; int main(int argc, char** argv) {…”,”categories”: [“libpath”,”pase”],        “tags”: [],        “url”: “https://kadler.github.io/2017/11/17/how-to-libpath.html”,        “teaser”:null},{        “title”: “Fetching Python Database Cursors by Column Name”,        “excerpt”:”Today I got asked if you can index in to rows returned by ibm_db_dbi by column name. While this doesn’t come out of the box1, it can be done pretty easily. Here’s some bog-standard Python code that executes a query and prints out each row: import ibm_db_dbi as db2 cur…”,”categories”: [“python”,”ibm_db”],        “tags”: [],        “url”: “https://kadler.github.io/2018/01/08/fetching-python-database-cursors-by-column-name.html”,        “teaser”:null},{        “title”: “Calling QSH utilities from PASE”,        “excerpt”:”QSH provides a wonderful utility called db2 which allows you to run SQL queries from within the QSH shell, but what if you’re in a QP2TERM shell or using SSH - what then? QSH from PASE Well, PASE provides a qsh utility which allows you to call programs within the…”,”categories”: [“pase”,”qsh”],        “tags”: [],        “url”: “https://kadler.github.io/2018/05/29/calling-qsh-utilities-from-pase.html”,        “teaser”:null},{        “title”: “Using Python ibm_db with Un-journaled Tables”,        “excerpt”:”When using the Python ibm_db package to interact with the Db2 for i database, you may run in to this error: &gt;&gt;&gt; cur.execute(‘insert into qtemp.foo values(1)’) Traceback (most recent call last): File &quot;/QOpenSys/pkgs/lib/python3.6/site-packages/ibm_db_dbi.py&quot;, line 1311, in _execute_helper return_value = ibm_db.execute(self.stmt_handler) Exception: Statement Execute Failed: FOO in QTEMP not valid for…”,”categories”: [“python”,”ibm_db”],        “tags”: [],        “url”: “https://kadler.github.io/2018/09/20/using-python-ibm-db-with-un-journaled-files.html”,        “teaser”:null},{        “title”: “Using System Naming in Python ibm_db”,        “excerpt”:”Like last-week’s post about commitment control in Python ibm_db, you may run in to this unexpected error as well: &gt;&gt;&gt; cur.callproc(‘qcmdexc’, (‘ADDLIBLE QIWS’,)) (‘ADDLIBLE QIWS’,) &gt;&gt;&gt; cur.execute(&quot;select * from qcustcdt&quot;) Traceback (most recent call last): File &quot;/QOpenSys/pkgs/lib/python3.6/site-packages/ibm_db_dbi.py&quot;, line 1254, in _prepare_helper self.stmt_handler = ibm_db.prepare(self.conn_handler, operation) Exception: QCUSTCDT in KADLER type…”,”categories”: [“python”,”ibm_db”],        “tags”: [],        “url”: “https://kadler.github.io/2018/09/28/using-system-naming-in-ibm_db.html”,        “teaser”:null},{        “title”: “Bash Command Oddities”,        “excerpt”:”Sometimes when using bash, you can run in to an oddity where it keeps running the “wrong” command. Let’s go through a scenario: It was a dark and stormy night… You want to install a Python package and you’re using the new Python 3.6 installed via yum: bash-4.4$ export PATH=/QOpenSys/pkgs/bin:$PATH…”,”categories”: [“bash”],        “tags”: [],        “url”: “https://kadler.github.io/2018/10/02/bash-command-oddities.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates Dec 2019”,        “excerpt”:”It’s a new year and so I’m finally getting around to doing something that I’ve wanted to do for a while now: write a blog series about various updates about what the IBM i OSS team is doing. I’m not sure the cadence of these updates, but I’ll try to…”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/01/08/oss-updates.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates Jan 2020”,        “excerpt”:”Well, I hadn’t planned to take this long to get out another blog, but the world of OSS moves fast and things have been very busy around here. I’m planning on having more frequent updates than every other month. Let’s start with what my team did in January. Package Updates…”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/04/10/oss-updates.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates Feb 2020”,        “excerpt”:”Wow, hasn’t even been a week! In this blog entry, I’m going to go over what my team delivered in February. New Packages jq jq is described as “sed for JSON”. If you don’t know what sed is, it stands for Stream EDitor and basically it allows you to slice…”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/04/15/feb-oss-updates.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates Mar 2020”,        “excerpt”:”Alright folks, strap in because March was a busy month! New Packages tmux tmux is a Terminal MUltipleXer. It allows you to create multiple sessions that are persistent - you can disconnect (or become disconnected, eg. wifi drops off) and then reconnect and everything will be as it was before….”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/04/22/mar-oss-updates.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates Apr 2020”,        “excerpt”:”April seemed very busy to me, but it ended up being rather mild in what we actually delivered. I suspect that means that my May update will be a rather large update. :wink: NOTE: I said last time I was going to update on the other things my team was…”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/05/20/apr-oss-updates.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates May 2020”,        “excerpt”:”Well, I mentioned before that the May update was gonna be big and boy is it a doozy! New Packages logrotate logrotate is a tool that can rotate your logs — you can configure it to automatically rotate, compress, and even remove your log files. This is very useful for…”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/06/22/may-oss-updates.html”,        “teaser”:null}]">












<link rel="canonical" href="https://kadler.github.io/assets/js/lunr/lunr-store.js">













<!-- end _includes/seo.html -->


<link href="/feed.xml" type="application/atom+xml" rel="alternate" title="Kevin's Ramblings Feed">

<!-- https://t.co/dKP3o1e -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<script>
  document.documentElement.className = document.documentElement.className.replace(/\bno-js\b/g, '') + ' js ';
</script>

<!-- For all browsers -->
<link rel="stylesheet" href="/assets/css/main.css">

<!--[if IE ]>
  <style>
    /* old IE unsupported flexbox fixes */
    .greedy-nav .site-title {
      padding-right: 3em;
    }
    .greedy-nav button {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
    }
  </style>
<![endif]-->



    <!-- start custom head snippets -->

<!-- insert favicons. use https://realfavicongenerator.net/ -->

<!-- end custom head snippets -->

  </head>

  <body class="layout--single">

    <!--[if lt IE 9]>
<div class="notice--danger align-center" style="margin: 0;">You are using an <strong>outdated</strong> browser. Please <a href="https://browsehappy.com/">upgrade your browser</a> to improve your experience.</div>
<![endif]-->

    

<div class="masthead">
  <div class="masthead__inner-wrap">
    <div class="masthead__menu">
      <nav id="site-nav" class="greedy-nav">
        
        <a class="site-title" href="/">Kevin's Ramblings</a>
        <ul class="visible-links"><li class="masthead__menu-item">
              <a href="/posts/" >Posts</a>
            </li><li class="masthead__menu-item">
              <a href="/categories/" >Categories</a>
            </li><li class="masthead__menu-item">
              <a href="/year-archive/" >Archive</a>
            </li><li class="masthead__menu-item">
              <a href="/about/" >About</a>
            </li></ul>
        
        <button class="greedy-nav__toggle hidden" type="button">
          <span class="visually-hidden">Toggle menu</span>
          <div class="navicon"></div>
        </button>
        <ul class="hidden-links hidden"></ul>
      </nav>
    </div>
  </div>
</div>


    <div class="initial-content">
      



<div id="main" role="main">
  
  <div class="sidebar sticky">
  


<div itemscope itemtype="https://schema.org/Person">

  
    <div class="author__avatar">
      

      
        <img src="/assets/images/bio-photo.jpg" alt="Kevin Adler" itemprop="image">
      
    </div>
  

  <div class="author__content">
    
      <h3 class="author__name" itemprop="name">Kevin Adler</h3>
    
    
      <p class="author__bio" itemprop="description">
        Open Source Dude
      </p>
    
  </div>

  <div class="author__urls-wrapper">
    <button class="btn btn--inverse">Follow</button>
    <ul class="author__urls social-icons">
      
        <li itemprop="homeLocation" itemscope itemtype="https://schema.org/Place">
          <i class="fas fa-fw fa-map-marker-alt" aria-hidden="true"></i> <span itemprop="name">Rochester, MN</span>
        </li>
      

      
        
          
            <li><a href="https://github.com/kadler" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-github" aria-hidden="true"></i> GitHub</a></li>
          
        
          
            <li><a href="https://twitter.com/kadler_ibm" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-twitter-square" aria-hidden="true"></i> Twitter</a></li>
          
        
          
            <li><a href="https://stackoverflow.com/users/3245633/kevin-adler" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-stack-overflow" aria-hidden="true"></i> Stack Overflow</a></li>
          
        
          
            <li><a href="https://www.linkedin.com/in/kevin-adler-19038a15" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-linkedin" aria-hidden="true"></i> LinkedIn</a></li>
          
        
          
            <li><a href="https://bitbucket.org/kadler" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-bitbucket" aria-hidden="true"></i> BitBucket</a></li>
          
        
          
            <li><a href="https://gitlab.com/kadler" rel="nofollow noopener noreferrer"><i class="fab fa-fw fa-gitlab" aria-hidden="true"></i> GitLab</a></li>
          
        
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      <!--
  <li>
    <a href="http://link-to-whatever-social-network.com/user/" itemprop="sameAs" rel="nofollow noopener noreferrer">
      <i class="fas fa-fw" aria-hidden="true"></i> Custom Social Profile Link
    </a>
  </li>
-->
    </ul>
  </div>
</div>

  
  </div>


  <article class="page" itemscope itemtype="https://schema.org/CreativeWork">
    
    <meta itemprop="description" content="var store = [{        “title”: “First Post”,        “excerpt”:”First post here. More to come later. Happy X-mas to you all!  “,”categories”: [],        “tags”: [],        “url”: “https://kadler.github.io/2016/12/23/first-post.html”,        “teaser”:null},{        “title”: “PATH vs LIBPATH”,        “excerpt”:”I see this kind of tip suggested a lot when dealing with PASE issues: export PATH=/my/path/bin:/other/path/bin:$PATH export LIBPATH=/my/path/bin:/other/path/bin:$LIBPATH This misguided suggestion bugs me to no end, so today I’m here to educate and clear up confusion over LIBPATH. We’re on the Road PATH to Nowhere Let’s start by looking at…”,”categories”: [“libpath”,”pase”],        “tags”: [],        “url”: “https://kadler.github.io/2017/09/01/path.html”,        “teaser”:null},{        “title”: “LIBPATH… How Does It Work?”,        “excerpt”:”So in the last entry, I described the differences between PATH and LIBPATH, but I didn’t really explain how LIBPATH is actually used. I’m going to rectify that in this entry. First, though, we need to take a detour and learn how programs get loaded. Loading 101 When you execute…”,”categories”: [“libpath”,”pase”],        “tags”: [],        “url”: “https://kadler.github.io/2017/09/08/libpath.html”,        “teaser”:null},{        “title”: “Mucking with the Runtime Library Search Path on PASE”,        “excerpt”:”In my last blog I showed how the LIBPATH gets used and also how the runtime search path in the binary gets used. LIBPATH is obviously set as an environment variable, but how does that runtime search path get generated? Let’s explore! #include &lt;stdio.h&gt; int main(int argc, char** argv) {…”,”categories”: [“libpath”,”pase”],        “tags”: [],        “url”: “https://kadler.github.io/2017/11/17/how-to-libpath.html”,        “teaser”:null},{        “title”: “Fetching Python Database Cursors by Column Name”,        “excerpt”:”Today I got asked if you can index in to rows returned by ibm_db_dbi by column name. While this doesn’t come out of the box1, it can be done pretty easily. Here’s some bog-standard Python code that executes a query and prints out each row: import ibm_db_dbi as db2 cur…”,”categories”: [“python”,”ibm_db”],        “tags”: [],        “url”: “https://kadler.github.io/2018/01/08/fetching-python-database-cursors-by-column-name.html”,        “teaser”:null},{        “title”: “Calling QSH utilities from PASE”,        “excerpt”:”QSH provides a wonderful utility called db2 which allows you to run SQL queries from within the QSH shell, but what if you’re in a QP2TERM shell or using SSH - what then? QSH from PASE Well, PASE provides a qsh utility which allows you to call programs within the…”,”categories”: [“pase”,”qsh”],        “tags”: [],        “url”: “https://kadler.github.io/2018/05/29/calling-qsh-utilities-from-pase.html”,        “teaser”:null},{        “title”: “Using Python ibm_db with Un-journaled Tables”,        “excerpt”:”When using the Python ibm_db package to interact with the Db2 for i database, you may run in to this error: &gt;&gt;&gt; cur.execute(‘insert into qtemp.foo values(1)’) Traceback (most recent call last): File &quot;/QOpenSys/pkgs/lib/python3.6/site-packages/ibm_db_dbi.py&quot;, line 1311, in _execute_helper return_value = ibm_db.execute(self.stmt_handler) Exception: Statement Execute Failed: FOO in QTEMP not valid for…”,”categories”: [“python”,”ibm_db”],        “tags”: [],        “url”: “https://kadler.github.io/2018/09/20/using-python-ibm-db-with-un-journaled-files.html”,        “teaser”:null},{        “title”: “Using System Naming in Python ibm_db”,        “excerpt”:”Like last-week’s post about commitment control in Python ibm_db, you may run in to this unexpected error as well: &gt;&gt;&gt; cur.callproc(‘qcmdexc’, (‘ADDLIBLE QIWS’,)) (‘ADDLIBLE QIWS’,) &gt;&gt;&gt; cur.execute(&quot;select * from qcustcdt&quot;) Traceback (most recent call last): File &quot;/QOpenSys/pkgs/lib/python3.6/site-packages/ibm_db_dbi.py&quot;, line 1254, in _prepare_helper self.stmt_handler = ibm_db.prepare(self.conn_handler, operation) Exception: QCUSTCDT in KADLER type…”,”categories”: [“python”,”ibm_db”],        “tags”: [],        “url”: “https://kadler.github.io/2018/09/28/using-system-naming-in-ibm_db.html”,        “teaser”:null},{        “title”: “Bash Command Oddities”,        “excerpt”:”Sometimes when using bash, you can run in to an oddity where it keeps running the “wrong” command. Let’s go through a scenario: It was a dark and stormy night… You want to install a Python package and you’re using the new Python 3.6 installed via yum: bash-4.4$ export PATH=/QOpenSys/pkgs/bin:$PATH…”,”categories”: [“bash”],        “tags”: [],        “url”: “https://kadler.github.io/2018/10/02/bash-command-oddities.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates Dec 2019”,        “excerpt”:”It’s a new year and so I’m finally getting around to doing something that I’ve wanted to do for a while now: write a blog series about various updates about what the IBM i OSS team is doing. I’m not sure the cadence of these updates, but I’ll try to…”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/01/08/oss-updates.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates Jan 2020”,        “excerpt”:”Well, I hadn’t planned to take this long to get out another blog, but the world of OSS moves fast and things have been very busy around here. I’m planning on having more frequent updates than every other month. Let’s start with what my team did in January. Package Updates…”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/04/10/oss-updates.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates Feb 2020”,        “excerpt”:”Wow, hasn’t even been a week! In this blog entry, I’m going to go over what my team delivered in February. New Packages jq jq is described as “sed for JSON”. If you don’t know what sed is, it stands for Stream EDitor and basically it allows you to slice…”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/04/15/feb-oss-updates.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates Mar 2020”,        “excerpt”:”Alright folks, strap in because March was a busy month! New Packages tmux tmux is a Terminal MUltipleXer. It allows you to create multiple sessions that are persistent - you can disconnect (or become disconnected, eg. wifi drops off) and then reconnect and everything will be as it was before….”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/04/22/mar-oss-updates.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates Apr 2020”,        “excerpt”:”April seemed very busy to me, but it ended up being rather mild in what we actually delivered. I suspect that means that my May update will be a rather large update. :wink: NOTE: I said last time I was going to update on the other things my team was…”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/05/20/apr-oss-updates.html”,        “teaser”:null},{        “title”: “IBM i Open Source Updates May 2020”,        “excerpt”:”Well, I mentioned before that the May update was gonna be big and boy is it a doozy! New Packages logrotate logrotate is a tool that can rotate your logs — you can configure it to automatically rotate, compress, and even remove your log files. This is very useful for…”,”categories”: [“ibmi-oss-updates”],        “tags”: [],        “url”: “https://kadler.github.io/2020/06/22/may-oss-updates.html”,        “teaser”:null}]">
    
    

    <div class="page__inner-wrap">
      
        <header>
          
          
        </header>
      

      <section class="page__content" itemprop="text">
        
        <hvar store = [{
        "title": "First Post",
        "excerpt":"First post here. More to come later. Happy X-mas to you all!  ","categories": [],
        "tags": [],
        "url": "https://kadler.github.io/2016/12/23/first-post.html",
        "teaser":null},{
        "title": "PATH vs LIBPATH",
        "excerpt":"I see this kind of tip suggested a lot when dealing with PASE issues: export PATH=/my/path/bin:/other/path/bin:$PATH export LIBPATH=/my/path/bin:/other/path/bin:$LIBPATH This misguided suggestion bugs me to no end, so today I’m here to educate and clear up confusion over LIBPATH. We’re on the Road PATH to Nowhere Let’s start by looking at...","categories": ["libpath","pase"],
        "tags": [],
        "url": "https://kadler.github.io/2017/09/01/path.html",
        "teaser":null},{
        "title": "LIBPATH... How Does It Work?",
        "excerpt":"So in the last entry, I described the differences between PATH and LIBPATH, but I didn’t really explain how LIBPATH is actually used. I’m going to rectify that in this entry. First, though, we need to take a detour and learn how programs get loaded. Loading 101 When you execute...","categories": ["libpath","pase"],
        "tags": [],
        "url": "https://kadler.github.io/2017/09/08/libpath.html",
        "teaser":null},{
        "title": "Mucking with the Runtime Library Search Path on PASE",
        "excerpt":"In my last blog I showed how the LIBPATH gets used and also how the runtime search path in the binary gets used. LIBPATH is obviously set as an environment variable, but how does that runtime search path get generated? Let’s explore! #include &lt;stdio.h&gt; int main(int argc, char** argv) {...","categories": ["libpath","pase"],
        "tags": [],
        "url": "https://kadler.github.io/2017/11/17/how-to-libpath.html",
        "teaser":null},{
        "title": "Fetching Python Database Cursors by Column Name",
        "excerpt":"Today I got asked if you can index in to rows returned by ibm_db_dbi by column name. While this doesn’t come out of the box1, it can be done pretty easily. Here’s some bog-standard Python code that executes a query and prints out each row: import ibm_db_dbi as db2 cur...","categories": ["python","ibm_db"],
        "tags": [],
        "url": "https://kadler.github.io/2018/01/08/fetching-python-database-cursors-by-column-name.html",
        "teaser":null},{
        "title": "Calling QSH utilities from PASE",
        "excerpt":"QSH provides a wonderful utility called db2 which allows you to run SQL queries from within the QSH shell, but what if you’re in a QP2TERM shell or using SSH - what then? QSH from PASE Well, PASE provides a qsh utility which allows you to call programs within the...","categories": ["pase","qsh"],
        "tags": [],
        "url": "https://kadler.github.io/2018/05/29/calling-qsh-utilities-from-pase.html",
        "teaser":null},{
        "title": "Using Python ibm_db with Un-journaled Tables",
        "excerpt":"When using the Python ibm_db package to interact with the Db2 for i database, you may run in to this error: &gt;&gt;&gt; cur.execute('insert into qtemp.foo values(1)') Traceback (most recent call last): File \"/QOpenSys/pkgs/lib/python3.6/site-packages/ibm_db_dbi.py\", line 1311, in _execute_helper return_value = ibm_db.execute(self.stmt_handler) Exception: Statement Execute Failed: FOO in QTEMP not valid for...","categories": ["python","ibm_db"],
        "tags": [],
        "url": "https://kadler.github.io/2018/09/20/using-python-ibm-db-with-un-journaled-files.html",
        "teaser":null},{
        "title": "Using System Naming in Python ibm_db",
        "excerpt":"Like last-week’s post about commitment control in Python ibm_db, you may run in to this unexpected error as well: &gt;&gt;&gt; cur.callproc('qcmdexc', ('ADDLIBLE QIWS',)) ('ADDLIBLE QIWS',) &gt;&gt;&gt; cur.execute(\"select * from qcustcdt\") Traceback (most recent call last): File \"/QOpenSys/pkgs/lib/python3.6/site-packages/ibm_db_dbi.py\", line 1254, in _prepare_helper self.stmt_handler = ibm_db.prepare(self.conn_handler, operation) Exception: QCUSTCDT in KADLER type...","categories": ["python","ibm_db"],
        "tags": [],
        "url": "https://kadler.github.io/2018/09/28/using-system-naming-in-ibm_db.html",
        "teaser":null},{
        "title": "Bash Command Oddities",
        "excerpt":"Sometimes when using bash, you can run in to an oddity where it keeps running the “wrong” command. Let’s go through a scenario: It was a dark and stormy night… You want to install a Python package and you’re using the new Python 3.6 installed via yum: bash-4.4$ export PATH=/QOpenSys/pkgs/bin:$PATH...","categories": ["bash"],
        "tags": [],
        "url": "https://kadler.github.io/2018/10/02/bash-command-oddities.html",
        "teaser":null},{
        "title": "IBM i Open Source Updates Dec 2019",
        "excerpt":"It’s a new year and so I’m finally getting around to doing something that I’ve wanted to do for a while now: write a blog series about various updates about what the IBM i OSS team is doing. I’m not sure the cadence of these updates, but I’ll try to...","categories": ["ibmi-oss-updates"],
        "tags": [],
        "url": "https://kadler.github.io/2020/01/08/oss-updates.html",
        "teaser":null},{
        "title": "IBM i Open Source Updates Jan 2020",
        "excerpt":"Well, I hadn’t planned to take this long to get out another blog, but the world of OSS moves fast and things have been very busy around here. I’m planning on having more frequent updates than every other month. Let’s start with what my team did in January. Package Updates...","categories": ["ibmi-oss-updates"],
        "tags": [],
        "url": "https://kadler.github.io/2020/04/10/oss-updates.html",
        "teaser":null},{
        "title": "IBM i Open Source Updates Feb 2020",
        "excerpt":"Wow, hasn’t even been a week! In this blog entry, I’m going to go over what my team delivered in February. New Packages jq jq is described as “sed for JSON”. If you don’t know what sed is, it stands for Stream EDitor and basically it allows you to slice...","categories": ["ibmi-oss-updates"],
        "tags": [],
        "url": "https://kadler.github.io/2020/04/15/feb-oss-updates.html",
        "teaser":null},{
        "title": "IBM i Open Source Updates Mar 2020",
        "excerpt":"Alright folks, strap in because March was a busy month! New Packages tmux tmux is a Terminal MUltipleXer. It allows you to create multiple sessions that are persistent - you can disconnect (or become disconnected, eg. wifi drops off) and then reconnect and everything will be as it was before....","categories": ["ibmi-oss-updates"],
        "tags": [],
        "url": "https://kadler.github.io/2020/04/22/mar-oss-updates.html",
        "teaser":null},{
        "title": "IBM i Open Source Updates Apr 2020",
        "excerpt":"April seemed very busy to me, but it ended up being rather mild in what we actually delivered. I suspect that means that my May update will be a rather large update. :wink: NOTE: I said last time I was going to update on the other things my team was...","categories": ["ibmi-oss-updates"],
        "tags": [],
        "url": "https://kadler.github.io/2020/05/20/apr-oss-updates.html",
        "teaser":null},{
        "title": "IBM i Open Source Updates May 2020",
        "excerpt":"Well, I mentioned before that the May update was gonna be big and boy is it a doozy! New Packages logrotate logrotate is a tool that can rotate your logs — you can configure it to automatically rotate, compress, and even remove your log files. This is very useful for...","categories": ["ibmi-oss-updates"],
        "tags": [],
        "url": "https://kadler.github.io/2020/06/22/may-oss-updates.html",
        "teaser":null}]
        
      </section>

      <footer class="page__meta">
        
        


        
      </footer>

      

      
    </div>

    
  </article>

  
  
</div>

    </div>

    

    <div class="page__footer">
      <footer>
        <!-- start custom footer snippets -->

<!-- end custom footer snippets -->
        <div class="page__footer-follow">
  <ul class="social-icons">
    

    

    <li><a href="/feed.xml"><i class="fas fa-fw fa-rss-square" aria-hidden="true"></i> Feed</a></li>
  </ul>
</div>

<div class="page__footer-copyright">&copy; 2020 Kevin's Ramblings. Powered by <a href="https://jekyllrb.com" rel="nofollow">Jekyll</a> &amp; <a href="https://mademistakes.com/work/minimal-mistakes-jekyll-theme/" rel="nofollow">Minimal Mistakes</a>.</div>

      </footer>
    </div>

    
  <script src="/assets/js/main.min.js"></script>
  <script data-search-pseudo-elements defer src="https://use.fontawesome.com/releases/v5.7.1/js/all.js" integrity="sha384-eVEQC9zshBn0rFj4+TU78eNA19HMNigMviK/PU/FFjLXqa/GKPgX58rvt5Z8PLs7" crossorigin="anonymous"></script>








  </body>
</html>
