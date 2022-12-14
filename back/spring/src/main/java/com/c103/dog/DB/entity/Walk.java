package com.c103.dog.DB.entity;

import com.c103.dog.common.util.Position;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Timestamp;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.StringTokenizer;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Walk {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "walk_pk")
    private int pk;

    private long time;

    private double distance;

    private int coin;

    private String dogPkList;

    private String walkPath;

    @CreationTimestamp
    @JsonFormat(timezone = "Asia/Seoul", pattern = "yyyy-MM-dd HH:mm")
    private Timestamp createDate;

    @ManyToOne
    @JoinColumn(name = "user_pk")
    private User user;

    public List<Position> stringToLine(){

        List<Position> result = new ArrayList<>();
        StringTokenizer st = new StringTokenizer(walkPath, ",");
        while(st.hasMoreTokens()){
            result.add(new Position(Double.parseDouble(st.nextToken()),Double.parseDouble(st.nextToken())));
        }
        return result;
    }

    public List<Integer> pkToList(){
        List<Integer> result = new ArrayList<>();
        StringTokenizer stPk = new StringTokenizer(dogPkList, ",");

        while(stPk.hasMoreTokens()){
            result.add(Integer.parseInt(stPk.nextToken()));
        }
        return result;
    }

    public String toTime(){
        long milliseconds = this.getTime();
        long hours = (milliseconds / 1000) / 60 / 60 % 24;
        long minutes = (milliseconds / 1000) / 60 % 60;
        long seconds = (milliseconds / 1000) % 60;

        String lt = String.format("%02d:%02d:%02d", hours, minutes, seconds);
        return lt;
    }


}
