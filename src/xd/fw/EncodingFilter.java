package xd.fw;

import javax.servlet.*;
import java.io.IOException;

public class EncodingFilter implements Filter {

	public void init(FilterConfig filterconfig) throws ServletException {
	}

	public void doFilter(ServletRequest servletrequest,
			ServletResponse resp, FilterChain filterchain)
			throws IOException, ServletException {
		servletrequest.setCharacterEncoding(FwUtil.UTF8);
		resp.setCharacterEncoding(FwUtil.UTF8);
		filterchain.doFilter(servletrequest, resp);
	}

	@Override
	public void destroy() {
	}
}
