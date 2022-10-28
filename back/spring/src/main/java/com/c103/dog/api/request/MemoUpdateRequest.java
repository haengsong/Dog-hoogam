package com.c103.dog.api.request;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;

@Data
public class MemoUpdateRequest {
    @ApiModelProperty(name="memoPk", example="1" , dataType = "메모 PK")
    private int memoPk;

    private String title;

    private String content;
}
