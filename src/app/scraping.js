import cheerio from 'cheerio';
import axios from 'axios' ;
import config from '../../config';
// const cheerio = require('cheerio');
// const axios = require('axios');
// const config = require('../../config');

async function getHTML(keyword) {
  let url = await config.url + encodeURI(keyword);
  
  try {
    return await axios.get(url);
  } catch(error) {
    console.log(error);
  }
}

export async function getAllInfo(keyword) {
  let contentsList = [];

  await getHTML(keyword)
  .then(html => {
    const $ = cheerio.load(html.data);
    const $contentsInfo = $("div.course_card_item");

    $contentsInfo.each((index, node) => {
      const title = $(node).find(".card-content .course_title").text();
      const instructor = $(node).find(".card-content .instructor").text();
      const contentImg = $(node).find(".card-image figure img.swiper-lazy").attr("src");
      const rating = $(node).find(".card-content .rating .rating_star .star_solid").css("width");
      const review_cnt = $(node).find(".card-content .rating .review_cnt").text();
      const price = $(node).find(".card-content .price").text();
      const tag = $(node).find(".card-content .tags .tag").text();

      contentsList.push({
        id: index+1,
        title: title,
        instructor: instructor,
        contentImg: contentImg,
        rating: rating,
        review_cnt: review_cnt,
        price: price,
        tag: tag,
      })
    })
  })
  .catch(err => console.log(err));
  
  return contentsList;
}

