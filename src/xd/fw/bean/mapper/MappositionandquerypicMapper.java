package xd.fw.bean.mapper;

import xd.fw.bean.Mappositionandquerypic;

public interface MappositionandquerypicMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mappositionandquerypic
     *
     * @mbggenerated
     */
    int deleteByPrimaryKey(Integer positionnum);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mappositionandquerypic
     *
     * @mbggenerated
     */
    int insert(Mappositionandquerypic record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mappositionandquerypic
     *
     * @mbggenerated
     */
    Mappositionandquerypic selectByPrimaryKey(Integer positionnum);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table mappositionandquerypic
     *
     * @mbggenerated
     */
    int updateByPrimaryKey(Mappositionandquerypic record);
}