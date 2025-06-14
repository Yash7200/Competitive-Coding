#include <stdio.h>
int main() 
{
    int t,i;
    float a,b,c;
    scanf("%d",&t);
    for(i=0;i<t;i++)
    {
        scanf("%f%f%f",&a,&b,&c);
        if(((a+b)/2)>c)
        {
            printf("YES\n");
        }
        else
        {
            printf("NO\n");
        }
    }
	return 0;
}