document.querySelector(".recipe"),async function(){try{let e=await fetch("https://forkify-api.jonas.io/api/v2/recipes/5ed6604591c37cdc054bc886"),i=await e.json();if(console.log(i),!e.ok)throw Error(`${i.message} (${e.status})`);let{recipe:t}=i.data;t={id:t.id,title:t.title,publisher:t.publisher,servings:t.servings,ingredients:t.ingredients,sourceUrl:t.source_url,image:t.image_url,cookingTime:t.cooking_time},console.log(t)}catch(e){alert(e)}}();
//# sourceMappingURL=index.d95608e0.js.map