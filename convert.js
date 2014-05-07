require("fs").writeFileSync(
    "./github-colors.json"
  , JSON.stringify(
        require("yamljs").load("./languages.yml")
      , null
      , 4
    )
);
