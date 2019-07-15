var sidebar = (function () {

    var menuList = '#sidebar';
    var toggleicon = '#sidebarToggle .material-icons';
    var collapseClass = 'sidebar-collapse';
    var menuItem = '.nav-item';
    var activeClass = 'active';
    var EventMenuOpened = 'shown.bs.collapse';
    var EventMenuClosed = 'hidden.bs.collapse';

    var init = function () {
        handleMobileUI();
        toggleSidebar();
        setActiveClass();
    };

    function handleMobileUI() {
        $(menuList).on(EventMenuClosed, function () {
            $(toggleicon).html('menu');
        });

        $(menuList).on(EventMenuOpened, function () {
            $(toggleicon).html('close');
        })
    }

    function toggleSidebar() {
        $(menuList).hover(function () {
            $(menuList).toggleClass(collapseClass);
        });
    }

    function setActiveClass() {
        $(menuItem).click(function () {
            $(this).siblings().removeClass(activeClass);
            $(this).siblings().find(menuItem).removeClass(activeClass);
            $(this).addClass(activeClass);
        });
    }
  
    return {
        init: init
      };
  
  })();