package xd.fw.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import xd.fw.bean.User;

import java.util.List;

public interface FwService extends BaseService{

    User userLogin(String name, String pwd);

    List<User> getUsers(int start, int limit);

    int getUsersCount();

    void saveOrUpdateUser(User user);

    void deleteUserById(Integer id);
}
