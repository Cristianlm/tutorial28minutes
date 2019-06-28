package com.in28minutes.rest.webservices.restfulwebservices.basic.auth;

import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@Configuration 
@EnableWebSecurity
public class SpringSecurityConfigurationBasic extends WebSecurityConfigurerAdapter {
// Customize esta clase para hacerla a nuestro gusto como aplicación
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		

		http
			.csrf().disable()
			.authorizeRequests()
			.antMatchers(HttpMethod.OPTIONS,"/**").permitAll()
				.anyRequest().authenticated()
				.and()
			//.formLogin().and()
			.httpBasic();
	}
}
