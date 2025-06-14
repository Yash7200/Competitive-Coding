//g--> girls   b-->boys in IIT
//b>g

//ICM has team with 1-boy & 1-girl

#include <stdio.h>
int main(void)
{
    int t,g,b;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d %d",&g,&b);
        printf("%d\n",(b-g));
    }
	return 0;
}