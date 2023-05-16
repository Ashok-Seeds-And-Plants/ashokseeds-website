/*=== Javascript function indexing hear===========

1.counterUp ----------(Its use for counting number)
2.stickyHeader -------(header class sticky)
3.wowActive ----------( Waw js plugins activation)
4.swiperJs -----------(All swiper in this website hear)
5.salActive ----------(Sal animation for card and all text)
6.textChanger --------(Text flip for banner section)
7.timeLine -----------(History Time line)
8.datePicker ---------(On click date calender)
9.timePicker ---------(On click time picker)
10.timeLineStory -----(History page time line)
11.vedioActivation----(Vedio activation)
12.searchOption ------(search open)
13.cartBarshow -------(Cart sode bar)
14.sideMenu ----------(Open side menu for desktop)
15.Back to top -------(back to top)
16.filterPrice -------(Price filtering)

==================================================*/

(function ($) {
    'use strict';
  
    var imJs = {
        m: function (e) {
            imJs.d();
            imJs.methods();
        },
        d: function (e) {
            this._window = $(window),
            this._document = $(document),
            this._body = $('body'),
            this._html = $('html')
        },
        methods: function (e) {
            imJs.counterUp();
            imJs.stickyHeader();
            imJs.wowActive();
            imJs.swiperJs();
            imJs.salActive();
            imJs.textChanger();
            imJs.timeLine();
            imJs.datePicker();
            imJs.timePicker();
            imJs.timeLineStory();
            imJs.vedioActivation(); 
            imJs.searchOption(); 
            imJs.cartBarshow(); 
            imJs.metismenu();
            imJs.sideMenu(); 
            imJs.backToTopInit();
            imJs.filterPrice();
            imJs.preloader();
            imJs.slideNav();
            imJs.onePageNav();
            imJs.serviceHover();
        },
        // counter up
        counterUp: function (e) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
              });
              $('.counter').addClass('animated fadeInDownBig');
              $('h3').addClass('animated fadeIn');
        },
        // sticky header activation
        stickyHeader: function (e) {
          $(window).scroll(function () {
              if ($(this).scrollTop() > 150) {
                  $('.header--sticky').addClass('sticky')
              } else {
                  $('.header--sticky').removeClass('sticky')
              }
          })
        },
        // waw js activation
        wowActive: function () {
            new WOW().init();
        },
        // All swiper js
        swiperJs: function () {
            $(document).ready(function () {
                var menu = ['Design and Build', 'Roof Remodeling', 'Bridge Remodeling']
                var mySwiper = new Swiper ('.swiper-container', {
                    // If we need pagination
                    effect: 'slide',
                    loop:true,
                    pagination: {
                      el: '.swiper-pagination',
                            clickable: true,
                        renderBullet: function (index, className) {
                          return '<span class="' + className + '">' + (menu[index]) + '</span>';
                        },
                    },
                    autoplay: {
                        delay: 7000,
                    },
                    // Navigation arrows
                    navigation: false,
                })
            });
            $(document).ready(function () {
                var mySwiper = new Swiper ('.swiper-container-h2', {
                    // If we need pagination
                    effect: 'slide',
                    loop:true,
                    pagination: {
                      el: '.swiper-pagination',
                            clickable: true,
                    },
                    autoplay: {
                        delay: 7000,
                    },
                    // Navigation arrows
                    navigation: false,
                })
            });

            $(document).ready(function () {
                var swiper = new Swiper(".case-three", {
                  slidesPerView: 2.1,
                  spaceBetween: 30,
                  slidesPerGroup: 1,
                  centeredSlides: true,
                  loop: true,
                  autoplay: {
                    delay: 3000,
                  },
                  loopFillGroupWithBlank: true,
                  pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  breakpoints: {
                    1500: {
                      slidesPerView: 3,
                    },
                    1199: {
                      slidesPerView: 3,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    767: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    }
                  },
                });
                var swiper = new Swiper(".swiper-container-h1", {
                  direction: "horizontal",
                  effect: "slide",
                  autoplay: false,
                  parallax: true,
                  speed: 1600,
                  rtl: true,
                  loop: true,
                  loopFillGroupWithBlank: !0,
                  keyboard: {
                    enabled: true,
                    onlyInViewport: true
                  },
                  scrollbar: {
                    el: ".swiper-scrollbar",
                    hide: false,
                    draggable: true
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  pagination: {
                      el: ".swiper-pagination",
                      type: "bullets",
                      clickable:"true"
                    }
                });
            });

            $(document).ready(function () {
                var swiper = new Swiper(".case-two", {
                  slidesPerView: 2.1,
                  spaceBetween: 30,
                  slidesPerGroup: 1,
                  centeredSlides: true,
                  loop: true,
                  autoplay: {
                    delay: 3000,
                  },
                  loopFillGroupWithBlank: true,
                  pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  breakpoints: {
                    1500: {
                      slidesPerView: 3,
                    },
                    1199: {
                      slidesPerView: 3,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    767: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    }
                  },
                });
            });

            $(document).ready(function () {
                var swiper = new Swiper(".project-home-nine", {
                  slidesPerView: 3,
                  spaceBetween: 30,
                  slidesPerGroup: 1,
                  centeredSlides: true,
                  loop: true,
                  autoplay: {
                    delay: 3000,
                  },
                  loopFillGroupWithBlank: true,
                  pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  breakpoints: {
                    1500: {
                      slidesPerView: 3,
                    },
                    1199: {
                      slidesPerView: 3,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    767: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    }
                  },
                });
            });

            $(document).ready(function () {
                var swiper = new Swiper(".mySwiper-technical", {
                  slidesPerView: 3,
                  spaceBetween: 30,                  
                  loop: true,
                  autoplay: {
                    delay: 3000,
                  },
                  pagination: false,
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  breakpoints: {
                    1500: {
                      slidesPerView: 3,
                    },
                    1199: {
                      slidesPerView: 2,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    767: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    }
                  },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".service-six", {
                  slidesPerView: 3,
                  spaceBetween: 30,                  
                  loop: true,
                  // autoplay: {
                  //   delay: 3000,
                  // },
                  pagination: {
                    el: '.swiper-pagination',
                          clickable: true,
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  breakpoints: {
                    1500: {
                      slidesPerView: 3,
                    },
                    1199: {
                      slidesPerView: 2,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    767: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    }
                  },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".case-tab-swipers", {
                  slidesPerView: 2.4,
                  spaceBetween: 30,
                  slidesPerGroup: 1,
                  centeredSlides: true,
                  loop: true,
                  autoplay: {
                    delay: 3000,
                  },
                  loopFillGroupWithBlank: true,
                  pagination: {
                    el: ".swiper-paginations",
                    clickable: true,
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                  breakpoints: {
                    1500: {
                      slidesPerView: 3,
                    },
                    1199: {
                      slidesPerView: 3,
                    },
                    991: {
                      slidesPerView: 2,
                    },
                    767: {
                      slidesPerView: 1,
                    },
                    575: {
                      slidesPerView: 1,
                    },
                    0: {
                      slidesPerView: 1,
                    }
                  },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".swiper-vision", {
                  direction: "horizontal",
                  effect: "slide",
                  parallax: true,
                  speed: 1600,
                  slidesPerView: 1,
                  spaceBetween: 0,
                  slidesPerGroup: 1,
                  centeredSlides: true,
                  loop: true,
                  autoplay: false,
                  keyboard: {
                    enabled: true,
                    onlyInViewport: true
                  },
                  loopFillGroupWithBlank: true,
                  pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                    autoplay: false,
                  },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".swiper-testimonials-1", {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  slidesPerGroup: 1,
                  centeredSlides: true,
                  loop: true,
                  autoplay: {
                    delay: 3000,
                  },
                  loopFillGroupWithBlank: true,
                  pagination: {
                    el: ".swiper-paginations",
                    clickable: true,
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".swiper-banner-eight", {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  slidesPerGroup: 1,
                  centeredSlides: true,
                  loop: true,
                  autoplay: {
                    delay: 6000,
                  },
                  loopFillGroupWithBlank: true,
                  pagination: {
                    el: ".swiper-paginations",
                    clickable: true,
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                });
            });
            $(document).ready(function () {
                var swiper = new Swiper(".swiper-banner-nine", {
                  slidesPerView: 1,
                  spaceBetween: 0,
                  slidesPerGroup: 1,
                  centeredSlides: true,
                  loop: true,
                  autoplay: {
                    delay: 7000,
                  },
                  loopFillGroupWithBlank: true,
                  pagination: {
                    el: ".swiper-paginations",
                    clickable: true,
                  },
                  navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                  },
                });
            });

        },
        // sal animatioin activation
        salActive: function () {
          sal({
              threshold: 0.1,
              once: true,
          });
        },
        // text flip
        textChanger: function () {
            var blockLetters = new TimelineMax({paused:true}),
            albumLetters = new TimelineMax({paused:false}),
            fullText = $("#fullText"),
            splitHeadline = new SplitText(fullText, {type:"words,chars"}), 
            chars = splitHeadline.chars,
            bgController = $("#backgroundController"),
            letter = $(".letter"),
            letterTiming = 0.6,
            spaceTiming = 0.8,
            stringsArray = ["Function", "Developer", "Rooms", "Intorior", "Design"],
            currentString = 0;
      
      
          function revertSplit(targetSplit, newString){
        
            if(newString !== undefined){
              // go to the nxt string
              currentString++;
              // reset the text timeline
              albumLetters.pause(0).clear();
              // revert the tet split
              targetSplit.revert();
        
              // set the container's opacity to 0 and change the text
              TweenLite.set(fullText, {autoAlpha:0, text:{value:newString}});
        
              // reset the split text
              splitHeadline = new SplitText(fullText, {type:"words,chars"});
              chars = splitHeadline.chars;
        
              // container's opacity back to 1
              TweenLite.set(fullText, {autoAlpha:1});
        
              albumLetters
                .staggerFrom(chars,0.6, {opacity:0, y: -20}, 0.1)
                .staggerTo(chars,0.6, {opacity:0, y: 20}, 0.05,'+=0', revertSplit, [splitHeadline,stringsArray[currentString]])
                .play();
        
            } else {
              currentString = 0;
              revertSplit(splitHeadline, stringsArray[currentString]);
            }
        
          }
          currentString++;
      
          albumLetters
          .staggerFrom(chars,0.6, {opacity:0, y: -20}, 0.1)
          .staggerTo(chars,0.6, {opacity:0, y: 20}, 0.05,'+=0', revertSplit, [splitHeadline,stringsArray[currentString]]);

        },
        // time line
        timeLine: function () {
          (function() {
            // Swipe Content Plugin - by CodyHouse.co
            // https://codyhouse.co/ds/components/info/swipe-content
            var SwipeContent = function(element) {
              this.element = element;
              this.delta = [false, false];
              this.dragging = false;
              this.intervalId = false;
              initSwipeContent(this);
            };
          
            function initSwipeContent(content) {
              content.element.addEventListener('mousedown', handleEvent.bind(content));
              content.element.addEventListener('touchstart', handleEvent.bind(content));
            };
          
            function initDragging(content) {
              //add event listeners
              content.element.addEventListener('mousemove', handleEvent.bind(content));
              content.element.addEventListener('touchmove', handleEvent.bind(content));
              content.element.addEventListener('mouseup', handleEvent.bind(content));
              content.element.addEventListener('mouseleave', handleEvent.bind(content));
              content.element.addEventListener('touchend', handleEvent.bind(content));
            };
          
            function cancelDragging(content) {
              //remove event listeners
              if(content.intervalId) {
                (!window.requestAnimationFrame) ? clearInterval(content.intervalId) : window.cancelAnimationFrame(content.intervalId);
                content.intervalId = false;
              }
              content.element.removeEventListener('mousemove', handleEvent.bind(content));
              content.element.removeEventListener('touchmove', handleEvent.bind(content));
              content.element.removeEventListener('mouseup', handleEvent.bind(content));
              content.element.removeEventListener('mouseleave', handleEvent.bind(content));
              content.element.removeEventListener('touchend', handleEvent.bind(content));
            };
          
            function handleEvent(event) {
              switch(event.type) {
                case 'mousedown':
                case 'touchstart':
                  startDrag(this, event);
                  break;
                case 'mousemove':
                case 'touchmove':
                  drag(this, event);
                  break;
                case 'mouseup':
                case 'mouseleave':
                case 'touchend':
                  endDrag(this, event);
                  break;
              }
            };
          
            function startDrag(content, event) {
              content.dragging = true;
              // listen to drag movements
              initDragging(content);
              content.delta = [parseInt(unify(event).clientX), parseInt(unify(event).clientY)];
              // emit drag start event
              emitSwipeEvents(content, 'dragStart', content.delta);
            };
          
            function endDrag(content, event) {
              cancelDragging(content);
              // credits: https://css-tricks.com/simple-swipe-with-vanilla-javascript/
              var dx = parseInt(unify(event).clientX), 
                dy = parseInt(unify(event).clientY);
              
              // check if there was a left/right swipe
              if(content.delta && (content.delta[0] || content.delta[0] === 0)) {
                var s = Math.sign(dx - content.delta[0]);
                
                if(Math.abs(dx - content.delta[0]) > 30) {
                  (s < 0) ? emitSwipeEvents(content, 'swipeLeft', [dx, dy]) : emitSwipeEvents(content, 'swipeRight', [dx, dy]);	
                }
                
                content.delta[0] = false;
              }
              // check if there was a top/bottom swipe
              if(content.delta && (content.delta[1] || content.delta[1] === 0)) {
                var y = Math.sign(dy - content.delta[1]);
          
                if(Math.abs(dy - content.delta[1]) > 30) {
                  (y < 0) ? emitSwipeEvents(content, 'swipeUp', [dx, dy]) : emitSwipeEvents(content, 'swipeDown', [dx, dy]);
                }
          
                content.delta[1] = false;
              }
              // emit drag end event
              emitSwipeEvents(content, 'dragEnd', [dx, dy]);
              content.dragging = false;
            };
          
            function drag(content, event) {
              if(!content.dragging) return;
              // emit dragging event with coordinates
              (!window.requestAnimationFrame) 
                ? content.intervalId = setTimeout(function(){emitDrag.bind(content, event);}, 250) 
                : content.intervalId = window.requestAnimationFrame(emitDrag.bind(content, event));
            };
          
            function emitDrag(event) {
              emitSwipeEvents(this, 'dragging', [parseInt(unify(event).clientX), parseInt(unify(event).clientY)]);
            };
          
            function unify(event) { 
              // unify mouse and touch events
              return event.changedTouches ? event.changedTouches[0] : event; 
            };
          
            function emitSwipeEvents(content, eventName, detail) {
              // emit event with coordinates
              var event = new CustomEvent(eventName, {detail: {x: detail[0], y: detail[1]}});
              content.element.dispatchEvent(event);
            };
          
            window.SwipeContent = SwipeContent;
            
            //initialize the SwipeContent objects
            var swipe = document.getElementsByClassName('js-swipe-content');
            if( swipe.length > 0 ) {
              for( var i = 0; i < swipe.length; i++) {
                (function(i){new SwipeContent(swipe[i]);})(i);
              }
            }
          }());
          
          // Utility function
          function Util () {};
          
          /*
            class manipulation functions
          */
          Util.hasClass = function(el, className) {
            if (el.classList) return el.classList.contains(className);
            else return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
          };
          
          Util.addClass = function(el, className) {
            var classList = className.split(' ');
             if (el.classList) el.classList.add(classList[0]);
             else if (!Util.hasClass(el, classList[0])) el.className += " " + classList[0];
             if (classList.length > 1) Util.addClass(el, classList.slice(1).join(' '));
          };
          
          Util.removeClass = function(el, className) {
            var classList = className.split(' ');
            if (el.classList) el.classList.remove(classList[0]);
            else if(Util.hasClass(el, classList[0])) {
              var reg = new RegExp('(\\s|^)' + classList[0] + '(\\s|$)');
              el.className=el.className.replace(reg, ' ');
            }
            if (classList.length > 1) Util.removeClass(el, classList.slice(1).join(' '));
          };
          
          Util.toggleClass = function(el, className, bool) {
            if(bool) Util.addClass(el, className);
            else Util.removeClass(el, className);
          };
          
          Util.setAttributes = function(el, attrs) {
            for(var key in attrs) {
              el.setAttribute(key, attrs[key]);
            }
          };
          
          /*
            DOM manipulation
          */
          Util.getChildrenByClassName = function(el, className) {
            var children = el.children,
              childrenByClass = [];
            for (var i = 0; i < el.children.length; i++) {
              if (Util.hasClass(el.children[i], className)) childrenByClass.push(el.children[i]);
            }
            return childrenByClass;
          };
          
          /*
            Animate height of an element
          */
          Util.setHeight = function(start, to, element, duration, cb) {
            var change = to - start,
                currentTime = null;
          
            var animateHeight = function(timestamp){
              if (!currentTime) currentTime = timestamp;
              var progress = timestamp - currentTime;
              var val = parseInt((progress/duration)*change + start);
              element.setAttribute("style", "height:"+val+"px;");
              if(progress < duration) {
                  window.requestAnimationFrame(animateHeight);
              } else {
                cb();
              }
            };
          
            //set the height of the element before starting animation -> fix bug on Safari
            element.setAttribute("style", "height:"+start+"px;");
            window.requestAnimationFrame(animateHeight);
          };
          
          /*
            Smooth Scroll
          */
          
          Util.scrollTo = function(final, duration, cb) {
            var start = window.scrollY || document.documentElement.scrollTop,
                currentTime = null;
          
            var animateScroll = function(timestamp){
              if (!currentTime) currentTime = timestamp;
              var progress = timestamp - currentTime;
              if(progress > duration) progress = duration;
              var val = Math.easeInOutQuad(progress, start, final-start, duration);
              window.scrollTo(0, val);
              if(progress < duration) {
                  window.requestAnimationFrame(animateScroll);
              } else {
                cb && cb();
              }
            };
          
            window.requestAnimationFrame(animateScroll);
          };
          
          /*
            Focus utility classes
          */
          
          //Move focus to an element
          Util.moveFocus = function (element) {
            if( !element ) element = document.getElementsByTagName("body")[0];
            element.focus();
            if (document.activeElement !== element) {
              element.setAttribute('tabindex','-1');
              element.focus();
            }
          };
          
          /*
            Misc
          */
          
          Util.getIndexInArray = function(array, el) {
            return Array.prototype.indexOf.call(array, el);
          };
          
          Util.cssSupports = function(property, value) {
            if('CSS' in window) {
              return CSS.supports(property, value);
            } else {
              var jsProperty = property.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase();});
              return jsProperty in document.body.style;
            }
          };
          
          /*
            Polyfills
          */
          //Closest() method
          if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
          }
          
          if (!Element.prototype.closest) {
            Element.prototype.closest = function(s) {
              var el = this;
              if (!document.documentElement.contains(el)) return null;
              do {
                if (el.matches(s)) return el;
                el = el.parentElement || el.parentNode;
              } while (el !== null && el.nodeType === 1);
              return null;
            };
          }
          
          //Custom Event() constructor
          if ( typeof window.CustomEvent !== "function" ) {
          
            function CustomEvent ( event, params ) {
              params = params || { bubbles: false, cancelable: false, detail: undefined };
              var evt = document.createEvent( 'CustomEvent' );
              evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
              return evt;
            }
          
            CustomEvent.prototype = window.Event.prototype;
          
            window.CustomEvent = CustomEvent;
          }
          
          /*
            Animation curves
          */
          Math.easeInOutQuad = function (t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t + b;
            t--;
            return -c/2 * (t*(t-2) - 1) + b;
          };
          
          
          /* Main js */
          /* -----------------*/
          (function() {
            // Horizontal Timeline - by CodyHouse.co
            var HorizontalTimeline = function(element) {
              this.element = element;
              this.datesContainer = this.element.getElementsByClassName('h--timeline-dates')[0];
              this.line = this.datesContainer.getElementsByClassName('h--timeline-line')[0]; // grey line in the top timeline section
              this.fillingLine = this.datesContainer.getElementsByClassName('h--timeline-filling-line')[0]; // green filling line in the top timeline section
              this.date = this.line.getElementsByClassName('h--timeline-date');
              this.selectedDate = this.line.getElementsByClassName('h--timeline-date--selected')[0];
              this.dateValues = parseDate(this);
              this.minLapse = calcMinLapse(this);
              this.navigation = this.element.getElementsByClassName('h--timeline-navigation');
              this.contentWrapper = this.element.getElementsByClassName('h--timeline-events')[0];
              this.content = this.contentWrapper.getElementsByClassName('h--timeline-event');
          
              this.eventsMinDistance = 60; // min distance between two consecutive events (in px)
              this.eventsMaxDistance = 255; // max distance between two consecutive events (in px)
              this.translate = 0; // this will be used to store the translate value of this.line
              this.lineLength = 0; //total length of this.line
          
              // store index of selected and previous selected dates
              this.oldDateIndex = Util.getIndexInArray(this.date, this.selectedDate);
              this.newDateIndex = this.oldDateIndex;
          
              initTimeline(this);
              initEvents(this);
            };
          
            function initTimeline(timeline) {
              // set dates left position
              var left = 0;
              for (var i = 0; i < timeline.dateValues.length; i++) {
                var j = (i == 0) ? 0 : i - 1;
                var distance = daydiff(timeline.dateValues[j], timeline.dateValues[i]),
                  distanceNorm = (Math.round(distance/timeline.minLapse) + 2)*timeline.eventsMinDistance,
                containerWidth = timeline.datesContainer.offsetWidth,
                distanceCorrecture = 0;
          
                if(distanceNorm < timeline.eventsMinDistance) {
                  distanceNorm = timeline.eventsMinDistance;
                } else if(distanceNorm > timeline.eventsMaxDistance) {
                  distanceNorm = timeline.eventsMaxDistance;
                }
                left = left + distanceNorm;
                timeline.date[i].setAttribute('style', 'left:' + left+'px');
              }
          
              // set line/filling line dimensions
              timeline.line.style.width = (left + timeline.eventsMinDistance)+distanceCorrecture+'px';
              timeline.lineLength = left + timeline.eventsMinDistance+distanceCorrecture;
              
              // add 100px more to line/filling line if container bigger then timeline lineLength
              if(containerWidth > timeline.lineLength) {
                timeline.line.style.width = (left + timeline.eventsMinDistance)+distanceCorrecture+'px';
                timeline.lineLength = timeline.lineLength + distanceCorrecture;
              }
              
              // reveal timeline
              Util.addClass(timeline.element, 'h--timeline--loaded');
              selectNewDate(timeline, timeline.selectedDate);
              resetTimelinePosition(timeline, 'next');
            };
          
            function initEvents(timeline) {
              var self = timeline;
              // deaktivate the buttons
              deaktivateNavigationButtons(self);
              
              // click on arrow navigation
              self.navigation[0].addEventListener('click', function(event){
                event.preventDefault();
                translateTimeline(self, 'prev');
                deaktivateNavigationButtons(self);
              });
              self.navigation[1].addEventListener('click', function(event){
                event.preventDefault();
                translateTimeline(self, 'next');
                deaktivateNavigationButtons(self);
              });
          
              //swipe on timeline
              new SwipeContent(self.datesContainer);
              self.datesContainer.addEventListener('swipeLeft', function(event){
                translateTimeline(self, 'next');
              });
              self.datesContainer.addEventListener('swipeRight', function(event){
                translateTimeline(self, 'prev');
              }); 
          
              //select a new event
              for(var i = 0; i < self.date.length; i++) {
                (function(i){
                  self.date[i].addEventListener('click', function(event){
                    event.preventDefault();
                    selectNewDate(self, event.target);
                  });
          
                  self.content[i].addEventListener('animationend', function(event){
                    if( i == self.newDateIndex && self.newDateIndex != self.oldDateIndex) resetAnimation(self);
                  });
                })(i);
              }
            };
          
            function updateFilling(timeline) { // update fillingLine scale value
              var dateStyle = window.getComputedStyle(timeline.selectedDate, null),
                left = dateStyle.getPropertyValue("left"),
                width = dateStyle.getPropertyValue("width");
          
              left = Number(left.replace('px', '')) + Number(width.replace('px', ''))/2;
              timeline.fillingLine.style.transform = 'scaleX('+(left/timeline.lineLength)+')';
            };
          
            function translateTimeline(timeline, direction) { // translate timeline (and date elements)
              var containerWidth = timeline.datesContainer.offsetWidth;
              if(direction) {
                timeline.translate = (direction == 'next') ? timeline.translate - containerWidth + timeline.eventsMinDistance : timeline.translate + containerWidth - timeline.eventsMinDistance;
              }
              if( 0 - timeline.translate > timeline.lineLength - containerWidth ) timeline.translate = containerWidth - timeline.lineLength;
              if( timeline.translate > 0 ) timeline.translate = 0;
          
              timeline.line.style.transform = 'translateX('+timeline.translate+'px)';
              // update the navigation items status (toggle inactive class)
              (timeline.translate == 0 ) ? Util.addClass(timeline.navigation[0], 'h--timeline-navigation--inactive') : Util.removeClass(timeline.navigation[0], 'h--timeline-navigation--inactive');
              (timeline.translate == containerWidth - timeline.lineLength ) ? Util.addClass(timeline.navigation[1], 'h--timeline-navigation--inactive') : Util.removeClass(timeline.navigation[1], 'h--timeline-navigation--inactive');
            };
            
            function deaktivateNavigationButtons(timeline) {
              var containerWidth = timeline.datesContainer.offsetWidth;
              // deaktivate next button if container bigger then timeline lineLength
              if(containerWidth >= timeline.lineLength) {
                Util.addClass(timeline.navigation[0], 'h--timeline-navigation--inactive');
                Util.addClass(timeline.navigation[1], 'h--timeline-navigation--inactive');
              }
            };
          
            function selectNewDate(timeline, target) { // ned date has been selected -> update timeline
              timeline.newDateIndex = Util.getIndexInArray(timeline.date, target);
              timeline.oldDateIndex = Util.getIndexInArray(timeline.date, timeline.selectedDate);
              Util.removeClass(timeline.selectedDate, 'h--timeline-date--selected');
              Util.addClass(timeline.date[timeline.newDateIndex], 'h--timeline-date--selected');
              timeline.selectedDate = timeline.date[timeline.newDateIndex];
              updateOlderEvents(timeline);
              updateVisibleContent(timeline);
              updateFilling(timeline);
            };
          
            function updateOlderEvents(timeline) { // update older events style
              for(var i = 0; i < timeline.date.length; i++) {
                (i < timeline.newDateIndex) ? Util.addClass(timeline.date[i], 'h--timeline-date--older-event') : Util.removeClass(timeline.date[i], 'h--timeline-date--older-event');
              }
            };
          
            function updateVisibleContent(timeline) { // show content of new selected date
              if (timeline.newDateIndex > timeline.oldDateIndex) {
                var classEntering = 'h--timeline-event--selected h--timeline-event--enter-right',
                  classLeaving = 'h--timeline-event--leave-left';
              } else if(timeline.newDateIndex < timeline.oldDateIndex) {
                var classEntering = 'h--timeline-event--selected h--timeline-event--enter-left',
                  classLeaving = 'h--timeline-event--leave-right';
              } else {
                var classEntering = 'h--timeline-event--selected',
                  classLeaving = '';
              }
          
              Util.addClass(timeline.content[timeline.newDateIndex], classEntering);
              if (timeline.newDateIndex != timeline.oldDateIndex) {
                Util.removeClass(timeline.content[timeline.oldDateIndex], 'h--timeline-event--selected');
                Util.addClass(timeline.content[timeline.oldDateIndex], classLeaving);
                //timeline.contentWrapper.style.height = timeline.content[timeline.newDateIndex].offsetHeight + 'px';
              }
            };
          
            function resetAnimation(timeline) { // reset content classes when entering animation is over
              //timeline.contentWrapper.style.height = null;
              Util.removeClass(timeline.content[timeline.newDateIndex], 'h--timeline-event--enter-right h--timeline-event--enter-left');
              Util.removeClass(timeline.content[timeline.oldDateIndex], 'h--timeline-event--leave-right h--timeline-event--leave-left');
            };
          
            function keyNavigateTimeline(timeline, direction) { // navigate the timeline using the keyboard
              var newIndex = (direction == 'next') ? timeline.newDateIndex + 1 : timeline.newDateIndex - 1;
              if(newIndex < 0 || newIndex >= timeline.date.length) return;
              selectNewDate(timeline, timeline.date[newIndex]);
              resetTimelinePosition(timeline, direction);
            };
          
            function resetTimelinePosition(timeline, direction) { //translate timeline according to new selected event position
              var eventStyle = window.getComputedStyle(timeline.selectedDate, null),
                eventLeft = Number(eventStyle.getPropertyValue('left').replace('px', '')),
                timelineWidth = timeline.datesContainer.offsetWidth;
          
              if( (direction == 'next' && eventLeft >= timelineWidth - timeline.translate) || (direction == 'prev' && eventLeft <= - timeline.translate) ) {
                timeline.translate = timelineWidth/2 - eventLeft;
                translateTimeline(timeline, false);
              }
            };
          
            function parseDate(timeline) { // get timestamp value for each date
              var dateArrays = [];
              for(var i = 0; i < timeline.date.length; i++) {
                var singleDate = timeline.date[i].getAttribute('data-date'),
                  dateComp = singleDate.split('T');
          
                if( dateComp.length > 1 ) { //both DD/MM/YEAR and time are provided
                  var dayComp = dateComp[0].split('/'),
                    timeComp = dateComp[1].split(':');
                } else if( dateComp[0].indexOf(':') >=0 ) { //only time is provide
                  var dayComp = ["2000", "0", "0"],
                    timeComp = dateComp[0].split(':');
                } else { //only DD/MM/YEAR
                  var dayComp = dateComp[0].split('/'),
                    timeComp = ["0", "0"];
                }
                var	newDate = new Date(dayComp[2], dayComp[1]-1, dayComp[0], timeComp[0], timeComp[1]);
                dateArrays.push(newDate);
              }
              return dateArrays;
            };
          
            function calcMinLapse(timeline) { // determine the minimum distance among events
              var dateDistances = [];
              for(var i = 1; i < timeline.dateValues.length; i++) {
                var distance = daydiff(timeline.dateValues[i-1], timeline.dateValues[i]);
                if(distance > 0) dateDistances.push(distance);
              }
          
              return (dateDistances.length > 0 ) ? Math.min.apply(null, dateDistances) : 86400000;
            };
          
            function daydiff(first, second) { // time distance between events
              return Math.round((second-first));
            };
          
            window.HorizontalTimeline = HorizontalTimeline;
          
            var horizontalTimeline = document.getElementsByClassName('js-h--timeline'),
              horizontalTimelineTimelineArray = [];
            if(horizontalTimeline.length > 0) {
              for(var i = 0; i < horizontalTimeline.length; i++) {
                horizontalTimelineTimelineArray.push(new HorizontalTimeline(horizontalTimeline[i]));
              }
              // navigate the timeline when inside the viewport using the keyboard
              document.addEventListener('keydown', function(event){
                if( (event.keyCode && event.keyCode == 39) || ( event.key && event.key.toLowerCase() == 'arrowright') ) {
                  updateHorizontalTimeline('next'); // move to next event
                } else if((event.keyCode && event.keyCode == 37) || ( event.key && event.key.toLowerCase() == 'arrowleft')) {
                  updateHorizontalTimeline('prev'); // move to prev event
                }
              });
            };
          
            function updateHorizontalTimeline(direction) {
              for(var i = 0; i < horizontalTimelineTimelineArray.length; i++) {
                if(elementInViewport(horizontalTimeline[i])) keyNavigateTimeline(horizontalTimelineTimelineArray[i], direction);
              }
            };
          
            /*
              How to tell if a DOM element is visible in the current viewport?
              http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
            */
            function elementInViewport(el) {
              var top = el.offsetTop;
              var left = el.offsetLeft;
              var width = el.offsetWidth;
              var height = el.offsetHeight;
          
              while(el.offsetParent) {
                  el = el.offsetParent;
                  top += el.offsetTop;
                  left += el.offsetLeft;
              }
          
              return (
                  top < (window.pageYOffset + window.innerHeight) &&
                  left < (window.pageXOffset + window.innerWidth) &&
                  (top + height) > window.pageYOffset &&
                  (left + width) > window.pageXOffset
              );
            }
          }());
          
          
          
          
        },
        // date picker
        datePicker: function () {
          jQuery(document).ready(function () {
            jQuery('#datepicker').datepicker({
                format: 'dd-mm-yyyy',
                startDate: '+1d'
            });
          });
        },
        // time picker
        timePicker: function () {
          $(function() {
            $('#timepicker').timepicker({
              //timeFormat: 'h:mm p',
              dynamic: false,
              dropdown: true,
              scrollbar: true
            });
          });
        },
        // story page timeline
        timeLineStory: function () {
          (function() {

            'use strict';
          
            // define variables
            var items = document.querySelectorAll(".timeline li");
          
            // check if an element is in viewport
            // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
            function isElementInViewport(el) {
              var rect = el.getBoundingClientRect();
              return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
              );
            }
          
            function callbackFunc() {
              for (var i = 0; i < items.length; i++) {
                if (isElementInViewport(items[i])) {
                  items[i].classList.add("in-view");
                }
              }
            }
          
            // listen for events
            window.addEventListener("load", callbackFunc);
            window.addEventListener("resize", callbackFunc);
            window.addEventListener("scroll", callbackFunc);
          
          })();
          
          
          
        },
        // vesio activation
        vedioActivation: function (e) {
          $('#play-video, .play-video').on('click', function (e) {
              e.preventDefault();
              $('#video-overlay, .video-overlay').addClass('open');
              $("#video-overlay, .video-overlay").append('<iframe width="560" height="315" src="https://www.youtube.com/embed/6stlCkUDG_s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
          });

          $('.video-overlay, .video-overlay-close').on('click', function (e) {
              e.preventDefault();
              close_video();
          });

          $(document).keyup(function (e) {
              if (e.keyCode === 27) {
                  close_video();
              }
          });

          function close_video() {
              $('.video-overlay.open').removeClass('open').find('iframe').remove();
          };
        },
        // search popup
        searchOption: function () {
          $(document).on('click', '#search', function () {
            $(".search-input-area").addClass("show");
            $("#anywhere-home").addClass("bgshow");
          });
          $(document).on('click', '#close', function () {
            $(".search-input-area").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '#anywhere-home', function () {
            $(".search-input-area").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
        },
        // cart bar show
        cartBarshow: function () {
          // Cart Bar show & hide
          $(document).on('click', '.cart-icon', function () {
            $(".cart-bar").addClass("show");
            $("#anywhere-home").addClass("bgshow");
          });
          $(document).on('click', '.close-cart', function () {
            $(".cart-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '#anywhere-home', function () {
            $(".cart-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });



          $(function () {
            $(".button").on("click", function () {
              var $button = $(this);
              var $parent = $button.parent();
              var oldValue = $parent.find('.input').val();
        
              if ($button.text() == "+") {
                var newVal = parseFloat(oldValue) + 1;
              } else {
                // Don't allow decrementing below zero
                if (oldValue > 1) {
                  var newVal = parseFloat(oldValue) - 1;
                } else {
                  newVal = 1;
                }
              }
              $parent.find('a.add-to-cart').attr('data-quantity', newVal);
              $parent.find('.input').val(newVal);
            });
          });

        },
        // metismenu
        metismenu:function(){
          $('#mobile-menu-active').metisMenu();
        },
        // side menu desktop
        sideMenu:function(){
          $(document).on('click', '#menu-btn', function () {
            $("#side-bar").addClass("show");
            $("#anywhere-home").addClass("bgshow");
          });
          $(document).on('click', '.close-icon-menu', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '#anywhere-home', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '.onepage .mainmenu li a', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
        },

        slideNav: function () {
          window.slide = new SlideNav();
        },

        onePageNav: function (e) {
          $(document).ready(function() {
            var nav = $('#nav');
            if(nav.length){
              $('#nav').onePageNav();
            }
          });
        },

        backToTopInit: function () {
          $(document).ready(function(){
          "use strict";
      
          var progressPath = document.querySelector('.progress-wrap path');
          var pathLength = progressPath.getTotalLength();
          progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
          progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
          progressPath.style.strokeDashoffset = pathLength;
          progressPath.getBoundingClientRect();
          progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';		
          var updateProgress = function () {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
          }
          updateProgress();
          $(window).scroll(updateProgress);	
          var offset = 50;
          var duration = 550;
          jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
              jQuery('.progress-wrap').addClass('active-progress');
            } else {
              jQuery('.progress-wrap').removeClass('active-progress');
            }
          });				
          jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({scrollTop: 0}, duration);
            return false;
          })
          
          
        });
  
        },

        filterPrice: function(){
          var filter_price = $('.filter-price');
          if (filter_price.length) {
            var lowerSlider = document.querySelector('#lower');
            var upperSlider = document.querySelector('#upper');
        
            document.querySelector('#two').value = upperSlider.value;
            document.querySelector('#one').value = lowerSlider.value;
        
            var lowerVal = parseInt(lowerSlider.value);
            var upperVal = parseInt(upperSlider.value);
        
            upperSlider.oninput = function () {
              lowerVal = parseInt(lowerSlider.value);
              upperVal = parseInt(upperSlider.value);
        
              if (upperVal < lowerVal + 4) {
                lowerSlider.value = upperVal - 4;
                if (lowerVal == lowerSlider.min) {
                  upperSlider.value = 4;
                }
              }
              document.querySelector('#two').value = this.value
            };
        
            lowerSlider.oninput = function () {
              lowerVal = parseInt(lowerSlider.value);
              upperVal = parseInt(upperSlider.value);
              if (lowerVal > upperVal - 4) {
                upperSlider.value = lowerVal + 4;
                if (upperVal == upperSlider.max) {
                  lowerSlider.value = parseInt(upperSlider.max) - 4;
                }
              }
              document.querySelector('#one').value = this.value
            };
          }
        },
        preloader:function(){

          var preload = $("#elevate-load");

          if (preload.length){
            window.addEventListener('load',function(){
              document.querySelector('#elevate-load').classList.add("loaded")  ;
            }); 
          };

        },
        serviceHover: function(){
          $('.single-varticle-product').hover(function () {
            $('.single-varticle-product.active').removeClass('active');
            $(this).addClass('active');
          });
        }

    }

    imJs.m();
  })(jQuery, window) 




