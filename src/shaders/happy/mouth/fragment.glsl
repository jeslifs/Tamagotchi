varying vec2 vUv;

void main()
{
    float border = step(0.46, max(abs(vUv.x - 0.5) - 0.01, abs(vUv.y - 0.5)));
    border = 1.0 - border;

    float strength = 1.0 - step(0.5, distance(vec2(vUv.x, (vUv.y - 0.5) * 1.0 + 0.05), vec2(0.5)));
    strength *= border;
    
    gl_FragColor = vec4(vec3(strength), 1.0);
    
    #include <tonemapping_fragment>
    #include <colorspace_fragment>

}
