$((function(){var e=window.location.search;e.includes("pageno")?$(".Paginations a").each((function(){var t=$(this);let o=e.split("pageno=")[1].substr(0,1);t.attr("id")==o&&(t.addClass("active"),t.siblings().removeClass("active"))})):$("#1").addClass("active")}));const lenis=new Lenis;function raf(e){lenis.raf(e),requestAnimationFrame(raf)}requestAnimationFrame(raf),gsap.registerPlugin(ScrollTrigger);let blogs=document.querySelectorAll(".Blog");console.log(blogs),blogs.forEach((e=>{gsap.to(e.querySelector(".Title h2"),{y:0,scrollTrigger:{trigger:e,start:"top 70%",end:"bottom bottom"}})}));