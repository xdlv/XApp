package xd.fw.bean.mapper;

import org.apache.ibatis.annotations.Param;
import xd.fw.bean.UserValidate;

public interface UserValidateMapper {

	/**
	 * This method was generated by MyBatis Generator. This method corresponds to the database table t_user_validate
	 * @mbggenerated
	 */
	int insert(UserValidate record);

	UserValidate[] selectUserValidateForNotSend();
	
	int updateStatusByPhone(@Param("phone")String phone,@Param("status")String status);

	int deleteUserValidateForUnuse();

	UserValidate getValidateCodeByPhone(@Param("phone")String phone, @Param("validateCode")String validateCode);
}