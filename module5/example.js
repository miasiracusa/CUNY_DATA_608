d3
  .select('body')
  .selectAll()
  .data("Name,Height,Weight,Washington,74,175,J. Adams,67,165,Madison,64,100,Jackson,73,140,Taylor,68,170,Lincoln,76,180,Hayes,68,170,Cleveland,61,260,Taft,72,316,Wilson,61,170,Hoover,61,187,F.D. Roosevelt,74,188,Truman,69,167,Eisenhower,61,171,Kennedy,72,173,Johnson,75,200,Nixon,61,175,Ford,72,195,Carter,69,160,Reagan,73,185,Bush,74,191,Clinton,74,216,GW Bush,72,196")
  .enter()
  .append()
  .text(function(d) {
    return d;
  });

