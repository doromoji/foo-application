package com.example.foo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.context.annotation.Configuration
import org.springframework.http.HttpMethod
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import java.security.Principal
import java.util.*

@SpringBootApplication
@RestController
class DemoApplication {
    @RequestMapping("/resource")
    fun home(): Map<String, Any> {
        val model = mapOf<String, Any>(
                "id" to UUID.randomUUID().toString(),
                "content" to "Hello World"
        )
        return model
    }

    @CrossOrigin(origins = ["*"], maxAge = 3600,
            allowedHeaders=["x-auth-token", "x-requested-with", "x-xsrf-token", "authorization"])
    @RequestMapping("/user")
    fun user(user: Principal): Principal {
        return user
    }
}

@Configuration
class SecurityConfiguration: WebSecurityConfigurerAdapter() {
    override fun configure(http: HttpSecurity?) {
        http!!.cors().and().httpBasic()
                .and()
                .authorizeRequests()
                .antMatchers(HttpMethod.OPTIONS, "/**").permitAll()
                .antMatchers("/index.html", "/", "/home", "/login").permitAll()
                .anyRequest().authenticated()
    }
}

fun main(args: Array<String>) {
    runApplication<DemoApplication>(*args)
}
