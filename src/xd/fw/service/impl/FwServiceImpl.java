package xd.fw.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xd.fw.bean.Mod;
import xd.fw.bean.Role;
import xd.fw.bean.User;
import xd.fw.bean.mapper.ModMapper;
import xd.fw.bean.mapper.RoleMapper;
import xd.fw.bean.mapper.UserMapper;
import xd.fw.service.FwService;

import java.util.List;
@Service
public class FwServiceImpl extends BaseServiceImpl implements FwService {
    @Autowired
    UserMapper userMapper;
    @Autowired
    ModMapper modMapper;
    @Autowired
    RoleMapper roleMapper;

    @Override
    public User userLogin(String name, String pwd) {
        return userMapper.selectUserByNameAndPwd(name,pwd);
    }

    @Override
    public void saveOrUpdateUser(User user) {
        if (user.getId() != null){
            userMapper.updateByPrimaryKey(user);
        } else {
            user.setId(getPrimaryKey("t_user"));
            userMapper.insert(user);
        }
    }

    @Override
    public List<User> getUsers(int start, int limit) {
        return userMapper.selectUsers(start, limit);
    }

    @Override
    public int getUsersCount() {
        return userMapper.selectUserCount();
    }


    @Override
    public void deleteUserById(Integer id) {
        userMapper.deleteByPrimaryKey(id);
    }

    @Override
    public List<Mod> getUserMods(Integer userId) {
        return modMapper.selectUserMods(userId);
    }

    @Override
    public List<Role> getRoles(int start, int limit) {
        return roleMapper.selectRoles(start, limit);
    }

    @Override
    public void deleteRoleById(Integer id) {
        roleMapper.deleteByPrimaryKey(id);
    }

    @Override
    public void saveOrUpdateRole(Role role) {
        if (role.getId() != null){
            roleMapper.updateByPrimaryKey(role);
        } else {
            role.setId(getPrimaryKey("t_role"));
            roleMapper.insert(role);
        }
    }

    @Override
    public int getRolesCount() {
        return roleMapper.selectRoleCount();
    }
}
