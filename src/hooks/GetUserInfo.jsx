import React from "react";
import axios from "axios";

export  function GetUserInfo({ article }) {
  axios
    .get(
      article?.id_admin
        ? `/blog/global/reader/view_info_editor/${article?.editor_id}`
        : `/blog/global/view_info_admin/${article?.id_admin}`
    )
    .then((resp) => {
      return resp.data;
    });
}
