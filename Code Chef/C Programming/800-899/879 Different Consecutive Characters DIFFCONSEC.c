#include <stdio.h>
int main()
{
    int t,n;
    scanf("%d",&t);
    for(int i=0;i<t;i++)
    {
        scanf("%d",&n);
        char c[n];
        scanf("%s",c);
        int cnt=0;
        for(int j=0;j<n;j++)
        {
            if(c[j]==c[j+1])
            {
                cnt++;
            }
        }
        printf("%d\n",cnt);
    }
    return 0;
}
