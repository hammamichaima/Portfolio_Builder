package com.example.Portfolio.Payload.response;

import java.io.Serializable;
import com.fasterxml.jackson.annotation.JsonProperty;
public class MessageResponse implements Serializable {
    private static final long serialVersionUID = 1L;

    @JsonProperty("message")
    private String message;

    // ✅ Default constructor required for serialization
    public MessageResponse() {
    }

    public MessageResponse(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
